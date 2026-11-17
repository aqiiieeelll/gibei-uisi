import assert from 'node:assert/strict';

export async function checkHeroSection(page, baseURL) {
  const checks = [];
  for (const width of [375, 640, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' });
    const hero = page.getByRole('region', { name: /Belajar pasar modal/ });
    const image = hero.getByRole('img');
    await image.evaluate((element) => element.decode());
    assert.ok(await image.evaluate((element) => element.naturalWidth > 0));
    assert.equal(
      await image.evaluate((element) => new URL(element.currentSrc).searchParams.get('url')),
      width < 640 ? '/images/hero-community-mobile-v3.png' : '/images/hero-community-v3.png',
      'The browser should select the composition appropriate for the viewport',
    );
    assert.match(await hero.locator('figcaption').innerText(), /Ilustrasi/);
    for (const [name, target] of [
      ['Jelajahi Edukasi & Riset', 'publikasi'],
      ['Tentang Organisasi', 'tentang'],
    ]) {
      const link = hero.getByRole('link', { name, exact: true });
      assert.equal(await link.getAttribute('href'), `#${target}`);
      await link.focus();
      await page.keyboard.press('Enter');
      await page.waitForFunction((id) => {
        const section = document.getElementById(id).getBoundingClientRect();
        const header = document.querySelector('.site-header').getBoundingClientRect();
        return Math.abs(section.top - header.bottom) <= 2;
      }, target);
      assert.equal(new URL(page.url()).hash, `#${target}`);
    }
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: `artifacts/beranda-ui/hero-${width}.png` });
    checks.push(`Hero illustration loads and both CTAs work by keyboard at ${width}px`);
  }
  return checks;
}
