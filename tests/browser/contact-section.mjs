import assert from 'node:assert/strict';

export async function checkContactSection(page, baseURL) {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`${baseURL}/#kontak`, { waitUntil: 'networkidle' });
  const contact = page.locator('#kontak');
  assert.equal(await contact.count(), 1, 'Homepage should have one Contact section');
  assert.equal(await contact.getByRole('heading', { level: 2 }).count(), 1);
  assert.equal(
    await contact.locator('form').count(),
    0,
    'MVP contact must not create a message form',
  );
  assert.equal(
    await page.locator('main > section').count(),
    8,
    'Homepage should keep its seven original sections and add Contact',
  );
  assert.deepEqual(
    await contact
      .locator('.contact-channels li span:not([aria-hidden])')
      .allTextContents()
      .then((names) => names.map((name) => name.trim())),
    ['Instagram GIBEI UISI', 'YouTube GIBEI Official', 'LinkedIn GIBEI UISI', 'Telegram Community'],
  );
  assert.match(await contact.innerText(), /Tautan resmi akan dikonfirmasi\./);
  assert.deepEqual(await page.locator('.site-footer .social-list li').allTextContents(), [
    'Instagram GIBEI UISI',
    'YouTube GIBEI Official',
    'LinkedIn GIBEI UISI',
    'Telegram Community',
  ]);
  assert.equal(
    await contact
      .locator('a[href="#"],a[href=""],a[href^="mailto:undefined"],a[href^="tel:undefined"]')
      .count(),
    0,
  );
  await page.waitForSelector(
    'nav[aria-label="Navigasi utama"] a[href="#kontak"][aria-current="location"]',
  );
  await page
    .getByRole('navigation', { name: 'Navigasi footer' })
    .getByRole('link', { name: 'Kontak', exact: true })
    .click();

  await page.setViewportSize({ width: 2560, height: 1440 });
  await page.goto(`${baseURL}/#kontak`, { waitUntil: 'networkidle' });
  await page.waitForSelector(
    'nav[aria-label="Navigasi utama"] a[href="#kontak"][aria-current="location"]',
  );

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Buka menu navigasi' }).click();
  await page
    .getByRole('navigation', { name: 'Navigasi utama' })
    .getByRole('link', { name: 'Kontak', exact: true })
    .click();
  assert.equal(
    await page.getByRole('button', { name: 'Buka menu navigasi' }).getAttribute('aria-expanded'),
    'false',
  );
  await page.waitForFunction(
    () =>
      document.querySelector('nav a[aria-current="location"]')?.getAttribute('href') === '#kontak',
  );
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  await contact.screenshot({ path: 'artifacts/beranda-ui/contact-375.png' });
  return ['Contact section: desktop/mobile links, active state, no fake links or contact form'];
}
