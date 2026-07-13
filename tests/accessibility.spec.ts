import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
  '',
  'work/tinggaljalan/',
  'work/customer-health/',
  'work/e-billing/',
  'work/e-letter/',
];

for (const route of routes) {
  test(`${route || 'home'} has no serious accessibility violations`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'accessibility');
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter(
      ({ impact }) => impact === 'serious' || impact === 'critical',
    );
    expect(serious).toEqual([]);
  });
}

test('mobile layout has no horizontal overflow', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'accessibility');
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto('');
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});
