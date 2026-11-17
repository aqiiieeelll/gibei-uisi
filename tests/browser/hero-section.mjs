import assert from 'node:assert/strict';

export async function checkHeroSection(page, baseURL) {
  const checks = [];
  for (const width of [375, 640, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' });
    const hero = page.locator('#beranda');
    assert.equal(await hero.locator('img, picture, video').count(), 0);
    assert.equal(
      await hero.getByRole('heading', { level: 1 }).innerText(),
      'Edukasi & Literasi Pasar Modal Terpercaya untuk Generasi Muda',
    );
    assert.match(await hero.locator('#statistics-note').innerText(), /data contoh/i);
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
    checks.push(`Original Hero has no image and both CTAs work by keyboard at ${width}px`);
  }
  return checks;
}
