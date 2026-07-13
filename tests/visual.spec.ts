import { expect, test } from '@playwright/test';

const captures = [
  { name: 'homepage-desktop', route: '', width: 1440, height: 1000 },
  { name: 'homepage-tablet', route: '', width: 768, height: 1024 },
  { name: 'homepage-mobile', route: '', width: 375, height: 812 },
  { name: 'tinggaljalan-desktop', route: 'work/tinggaljalan/', width: 1440, height: 1000 },
  { name: 'tinggaljalan-mobile', route: 'work/tinggaljalan/', width: 375, height: 812 },
  { name: 'e-billing-desktop', route: 'work/e-billing/', width: 1440, height: 1000 },
  { name: 'e-billing-mobile', route: 'work/e-billing/', width: 375, height: 812 },
] as const;

for (const capture of captures) {
  test(`captures ${capture.name} visual evidence`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop');

    await page.setViewportSize({ width: capture.width, height: capture.height });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(capture.route);
    await page.evaluate(() => document.fonts.ready);

    expect(await page.evaluate(() => document.fonts.check('16px "IBM Plex Sans"'))).toBe(true);

    const viewport = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(viewport.scrollWidth).toBeLessThanOrEqual(viewport.clientWidth);

    const screenshot = await page.screenshot({
      path: testInfo.outputPath(`${capture.name}.png`),
      fullPage: true,
      animations: 'disabled',
      caret: 'hide',
    });
    expect(screenshot.byteLength).toBeGreaterThan(10_000);
  });
}
