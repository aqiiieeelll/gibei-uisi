import assert from 'node:assert/strict';

export async function checkSectionViewport(page, baseURL) {
  const ids = ['beranda', 'tentang', 'divisi', 'publikasi', 'kegiatan', 'rekrutmen', 'kontak'];
  await page.goto(`${baseURL}/`, { waitUntil: 'networkidle', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);

  for (const [width, height] of [
    [1440, 900],
    [375, 812],
    [320, 568],
    [768, 1024],
    [2560, 1440],
    [844, 390],
  ]) {
    await page.setViewportSize({ width, height });
    await page.waitForFunction(
      () =>
        Math.abs(
          parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) -
            document.querySelector('.site-header').getBoundingClientRect().height,
        ) <= 1,
    );
    const layout = await page.evaluate((sections) => {
      const headerHeight = document.querySelector('.site-header').getBoundingClientRect().height;
      return {
        available: innerHeight - headerHeight,
        sections: sections.map((id) => ({
          id,
          height: document.getElementById(id).getBoundingClientRect().height,
        })),
      };
    }, ids);
    for (const section of layout.sections)
      assert.ok(
        section.height >= layout.available - 1,
        `${width}x${height} ${section.id}: ${section.height}px is shorter than available ${layout.available}px`,
      );
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
      false,
    );
  }

  async function expectOnlySection(id) {
    await page.waitForFunction(
      (section) =>
        Math.abs(
          document.getElementById(section).getBoundingClientRect().top -
            document.querySelector('.site-header').getBoundingClientRect().bottom,
        ) <= 2,
      id,
    );
    const boundary = await page.evaluate((section) => {
      const headerBottom = document.querySelector('.site-header').getBoundingClientRect().bottom;
      return {
        bottom: document.getElementById(section).getBoundingClientRect().bottom,
        viewportBottom: innerHeight,
        others: [...document.querySelectorAll('main > section')]
          .filter((item) => {
            const box = item.getBoundingClientRect();
            return (
              item.id !== section && box.bottom > headerBottom + 2 && box.top < innerHeight - 2
            );
          })
          .map((item) => item.id || 'mitra'),
      };
    }, id);
    assert.ok(
      boundary.bottom >= boundary.viewportBottom - 2,
      `${id} must fill the area below the header`,
    );
    assert.deepEqual(boundary.others, [], `${id} must not show adjacent sections after navigation`);
  }

  for (const [width, height] of [
    [1440, 900],
    [375, 812],
    [844, 390],
  ]) {
    await page.setViewportSize({ width, height });
    for (const id of ids) {
      const toggle = page.getByRole('button', { name: /menu navigasi/ });
      if (await toggle.isVisible()) await toggle.click();
      await page.locator(`nav[aria-label="Navigasi utama"] a[href="#${id}"]`).click();
      await expectOnlySection(id);
    }
  }

  await page.setViewportSize({ width: 2560, height: 1440 });
  await page.goto(`${baseURL}/#kontak`, { waitUntil: 'networkidle' });
  await expectOnlySection('kontak');
  const enlargedHeader = await page.addStyleTag({
    content: '.header-inner { min-height: 112px; }',
  });
  try {
    await page.waitForFunction(
      () =>
        Math.abs(
          parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) -
            document.querySelector('.site-header').getBoundingClientRect().height,
        ) <= 1,
    );
    await page.locator('nav[aria-label="Navigasi utama"] a[href="#tentang"]').click();
    await expectOnlySection('tentang');
    await page.screenshot({ path: 'artifacts/beranda-ui/section-viewport-desktop.png' });
  } finally {
    await enlargedHeader.evaluate((element) => element.remove());
  }
  return [
    'Viewport sections: minimum available screen height, precise anchors, no adjacent section, responsive header offset',
  ];
}
