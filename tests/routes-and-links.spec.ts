import { expect, test } from '@playwright/test';

const routes = [
  '',
  'work/tinggaljalan/',
  'work/customer-health/',
  'work/e-billing/',
  'work/e-letter/',
];

for (const route of routes) {
  test(`${route || 'home'} renders and has one heading`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('h1')).toHaveCount(1);
  });
}

test('unknown routes render the not-found page', async ({ page }) => {
  await page.goto('not-a-real-route/');
  await expect(page.getByRole('heading', { level: 1, name: 'Page not found' })).toBeVisible();
});

test('all internal links resolve', async ({ page, request }) => {
  await page.goto('');
  const hrefs = await page
    .locator('a[href^="/portfolio/"]')
    .evaluateAll((links) => [...new Set(links.map((link) => (link as HTMLAnchorElement).href))]);

  for (const href of hrefs) {
    const url = new URL(href);
    const response = await request.get(url.pathname);
    expect(response.ok(), `${url.pathname} should resolve`).toBeTruthy();
  }
});
