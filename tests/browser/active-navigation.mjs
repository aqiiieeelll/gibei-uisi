import assert from 'node:assert/strict';

export async function checkActiveNavigation(page, baseURL) {
  const navigation = page.locator('nav[aria-label="Navigasi utama"]');
  async function expectActive(id) {
    await page.waitForFunction(
      (section) =>
        document
          .querySelector('nav[aria-label="Navigasi utama"] a[aria-current="location"]')
          ?.getAttribute('href') === `#${section}`,
      id,
      { timeout: 5000 },
    );
    const active = navigation.locator('[aria-current="location"]');
    assert.equal(await active.count(), 1);
    assert.equal(await active.evaluate((link) => getComputedStyle(link).color), 'rgb(0, 97, 148)');
  }

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`${baseURL}/#divisi`, { waitUntil: 'networkidle' });
  await expectActive('divisi');
  await page.mouse.move(0, 0);
  assert.notEqual(
    await navigation
      .getByRole('link', { name: 'Beranda', exact: true })
      .evaluate((link) => getComputedStyle(link).color),
    'rgb(0, 97, 148)',
  );

  await navigation.getByRole('link', { name: 'Tentang', exact: true }).click();
  await expectActive('tentang');
  await page.waitForFunction(
    () =>
      Math.abs(
        document.getElementById('tentang').getBoundingClientRect().top -
          parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop),
      ) < 2,
  );
  await page.evaluate(() =>
    document.getElementById('publikasi').scrollIntoView({ behavior: 'instant' }),
  );
  await expectActive('publikasi');
  assert.equal(new URL(page.url()).hash, '#tentang', 'Manual scrolling should not rewrite history');
  await page.goBack();
  await expectActive('divisi');
  await page.reload({ waitUntil: 'networkidle' });
  await expectActive('divisi');

  for (const id of [
    'beranda',
    'tentang',
    'divisi',
    'publikasi',
    'kegiatan',
    'rekrutmen',
    'kontak',
  ]) {
    await page.evaluate(
      (section) => document.getElementById(section).scrollIntoView({ behavior: 'instant' }),
      id,
    );
    await expectActive(id);
  }

  await page.setViewportSize({ width: 2560, height: 1440 });
  await page.goto(`${baseURL}/#rekrutmen`, { waitUntil: 'networkidle' });
  await expectActive('rekrutmen');

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(`${baseURL}/#divisi`, { waitUntil: 'networkidle' });
  await expectActive('divisi');
  await page.getByRole('button', { name: 'Buka menu navigasi' }).click();
  await expectActive('divisi');
  await navigation.getByRole('link', { name: 'Kegiatan', exact: true }).click();
  await expectActive('kegiatan');
  assert.equal(
    await page.getByRole('button', { name: 'Buka menu navigasi' }).getAttribute('aria-expanded'),
    'false',
  );
  await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
  await expectActive('beranda');

  return [
    'Active navigation: direct hash, click, manual scroll, Back, reload, all sections and mobile',
  ];
}
