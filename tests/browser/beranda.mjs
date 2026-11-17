import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(
  process.env.UI_PLAYWRIGHT_MODULE
    ? pathToFileURL(resolve(process.env.UI_PLAYWRIGHT_MODULE)).href
    : 'playwright'
);
const { default: AxeBuilder } = await import(
  process.env.UI_AXE_MODULE
    ? pathToFileURL(resolve(process.env.UI_AXE_MODULE)).href
    : '@axe-core/playwright'
);
const baseURL = process.env.UI_BASE_URL || 'http://127.0.0.1:3000';
await fs.mkdir('artifacts/beranda-ui', { recursive: true });

const browser = await chromium.launch({
  channel: process.env.UI_BROWSER_CHANNEL || 'chrome',
  headless: true,
});
const result = {
  layouts: [],
  interactions: [],
  accessibility: [],
  errors: [],
  externalRequests: [],
  badResponses: [],
};
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', (error) => result.errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') result.errors.push(message.text());
  });
  page.on('request', (request) => {
    if (!request.url().startsWith(`${baseURL}/`)) result.externalRequests.push(request.url());
  });
  page.on('response', (response) => {
    if (response.status() >= 400)
      result.badResponses.push({ url: response.url(), status: response.status() });
  });
  page.setDefaultTimeout(10000);
  await page.goto(`${baseURL}/`, { waitUntil: 'networkidle', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.locator('h1').count(), 1);
  assert.equal(await page.locator('.pillar-card').count(), 3);
  assert.equal(await page.locator('.division-card').count(), 8);
  assert.equal(await page.locator('.publication-card').count(), 3);
  assert.equal(await page.locator('.event-card').count(), 2);
  const brokenAnchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .filter((link) => !document.getElementById(link.getAttribute('href').slice(1)))
        .map((link) => link.outerHTML),
    );
  assert.deepEqual(brokenAnchors, []);
  for (const image of await page.locator('img').all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((element) => element.decode());
  }
  assert.equal(
    await page
      .locator('img')
      .evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)),
    true,
  );
  await page.evaluate(() => scrollTo(0, 0));
  const viewports = [
    [320, 740],
    [375, 812],
    [390, 844],
    [430, 932],
    [640, 900],
    [768, 1024],
    [820, 1180],
    [1024, 768],
    [1200, 900],
    [1280, 800],
    [1440, 1000],
    [1920, 1080],
    [2560, 1440],
    [844, 390],
  ];
  for (const [width, height] of viewports) {
    await page.setViewportSize({ width, height });
    await page.evaluate(
      () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))),
    );
    const layout = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      menuVisible: getComputedStyle(document.querySelector('.menu-toggle')).display !== 'none',
    }));
    assert.ok(layout.scrollWidth <= width, `Overflow ${width}: ${JSON.stringify(layout)}`);
    assert.equal(layout.menuVisible, width < 1200);
    const smallTargets = await page
      .locator(
        '.site-header a,.site-header button:not(:disabled),#main-content a,#main-content button:not(:disabled),.site-footer a',
      )
      .evaluateAll((elements) =>
        elements
          .filter((element) => {
            const box = element.getBoundingClientRect();
            return (
              box.width &&
              box.height &&
              getComputedStyle(element).visibility !== 'hidden' &&
              !element.classList.contains('skip-link') &&
              (box.width < 43.9 || box.height < 43.9)
            );
          })
          .map((element) => ({
            text: element.textContent.trim(),
            width: element.getBoundingClientRect().width,
            height: element.getBoundingClientRect().height,
          })),
      );
    assert.deepEqual(smallTargets, [], `Small touch targets at ${width}`);
    result.layouts.push({ ...layout, height });
    if ([320, 375, 768, 1024, 1440, 2560].includes(width))
      await page.screenshot({ path: `artifacts/beranda-ui/beranda-${width}.png`, fullPage: true });
  }
  await page.setViewportSize({ width: 375, height: 812 });
  const toggle = page.getByRole('button', { name: /menu navigasi/ });
  await toggle.focus();
  await page.keyboard.press('Enter');
  assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
  await page.keyboard.press('Tab');
  assert.equal(
    await page
      .getByRole('navigation', { name: 'Navigasi utama' })
      .getByRole('link', { name: 'Beranda', exact: true })
      .evaluate((element) => element === document.activeElement),
    true,
  );
  await page.keyboard.press('Escape');
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  assert.equal(await toggle.evaluate((element) => element === document.activeElement), true);
  result.interactions.push('Enter/Tab/Escape and focus return');
  await toggle.click();
  await page
    .getByRole('navigation', { name: 'Navigasi utama' })
    .getByRole('link', { name: 'Divisi', exact: true })
    .click();
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  assert.equal(
    await page.locator('#divisi').evaluate((element) => element === document.activeElement),
    true,
  );
  assert.ok(
    (await page.locator('#divisi').boundingBox()).y >= 79,
    'Anchor hidden by sticky header',
  );
  result.interactions.push('Section link closes menu, focuses target, and clears sticky header');
  await page.evaluate(() => scrollTo(0, 0));
  await toggle.click();
  const menuBox = await page.locator('#main-navigation').boundingBox();
  await page.mouse.click(8, menuBox.y + menuBox.height + 16);
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  result.interactions.push('Outside click closes menu');
  await toggle.click();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.setViewportSize({ width: 375, height: 812 });
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  result.interactions.push('Desktop/mobile resize resets menu');
  await toggle.click();
  await page.locator('.site-header').getByRole('link', { name: 'GIBEI UISI — Beranda' }).click();
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  await toggle.click();
  await page.locator('.site-header').getByRole('link', { name: 'Open Recruitment' }).focus();
  await page.keyboard.press('Tab');
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  result.interactions.push('Logo navigation and Tab leaving header close menu');
  await page.setViewportSize({ width: 844, height: 390 });
  await toggle.click();
  const landscapeBox = await page.locator('#main-navigation').boundingBox();
  assert.ok(landscapeBox.y + landscapeBox.height <= 390);
  await page.locator('.site-header').getByRole('link', { name: 'Open Recruitment' }).focus();
  await page.keyboard.press('Enter');
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  result.interactions.push(
    'Landscape menu scrolls within viewport and CTA remains keyboard reachable',
  );

  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    if (width === 375) await toggle.click();
    const audit = await new AxeBuilder({ page })
      .exclude('nextjs-portal')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    result.accessibility.push({
      width,
      violations: audit.violations.map(({ id, impact, nodes }) => ({
        id,
        impact,
        nodes: nodes.map((node) => ({ target: node.target, summary: node.failureSummary })),
      })),
    });
    assert.equal(audit.violations.length, 0, JSON.stringify(result.accessibility.at(-1), null, 2));
    if (width === 375) await page.keyboard.press('Escape');
  }
  const zoomPage = await context.newPage();
  await zoomPage.setViewportSize({ width: 640, height: 450 });
  const cdp = await context.newCDPSession(zoomPage);
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: 640,
    height: 450,
    deviceScaleFactor: 2,
    mobile: false,
  });
  await zoomPage.goto(`${baseURL}/`, { waitUntil: 'networkidle' });
  assert.equal(
    await zoomPage.evaluate(() => document.documentElement.scrollWidth > innerWidth),
    false,
  );
  await zoomPage.getByRole('button', { name: 'Buka menu navigasi' }).click();
  await zoomPage
    .getByRole('navigation', { name: 'Navigasi utama' })
    .getByRole('link', { name: 'Rekrutmen', exact: true })
    .click();
  await zoomPage.screenshot({ path: 'artifacts/beranda-ui/beranda-zoom-200.png', fullPage: true });
  result.interactions.push(
    '200% zoom reflow emulation (1280 physical pixels / 640 CSS pixels) and menu',
  );
  assert.equal(
    await zoomPage.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior),
    'auto',
  );
  result.interactions.push('Reduced motion disables smooth scrolling');
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  assert.equal(
    await page
      .getByRole('link', { name: 'Lewati ke konten utama' })
      .evaluate((element) => element === document.activeElement),
    true,
  );
  await page.keyboard.press('Enter');
  assert.equal(
    await page.locator('main').evaluate((element) => element === document.activeElement),
    true,
  );
  result.interactions.push('Keyboard skip link reaches main content');
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.externalRequests, []);
  assert.deepEqual(result.badResponses, []);
  console.log(JSON.stringify(result, null, 2));
} finally {
  await fs.writeFile(
    'artifacts/beranda-ui/beranda-ui-results.json',
    JSON.stringify(result, null, 2),
  );
  await browser.close();
}
