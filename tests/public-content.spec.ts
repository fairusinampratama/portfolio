import { expect, test } from '@playwright/test';

test('homepage presents the approved project depth', async ({ page }) => {
  await page.goto('');
  await expect(page.locator('.project-card')).toHaveCount(4);
  await expect(page.getByRole('heading', { name: 'Skynet NetEngine API' })).toBeVisible();
  await expect(page.locator('a[href*="/work/skynet-net-engine-api/"]')).toHaveCount(0);
  await expect(page.getByText('Saleskit', { exact: false })).toHaveCount(0);
  await expect(page.getByRole('link', { name: /View CV/i })).toHaveCount(1);
});

test('approved status language is public', async ({ page }) => {
  await page.goto('');
  await expect(page.getByText('Live production application', { exact: true })).toBeVisible();
  await expect(page.getByText('Deployed \u00b7 Used operationally', { exact: true })).toBeVisible();
  await expect(
    page.getByText('Deployed \u00b7 Technically completed \u00b7 Not fully adopted', {
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText('Deployed undergraduate thesis', { exact: true })).toBeVisible();
});

test('sensitive quantity boundaries remain explicit', async ({ page }) => {
  await page.goto('work/customer-health/');
  await expect(page.getByText(/1,100\+ active customer accounts/)).toBeVisible();
  await expect(page.getByText(/not presented as the number of monitored records/)).toBeVisible();

  await page.goto('work/e-billing/');
  await expect(page.getByText(/more than 3,000 source records/)).toBeVisible();
  await expect(page.getByText(/does not mean 3,000 active customers/)).toBeVisible();
});

test('thesis terminology remains precise', async ({ page }) => {
  await page.goto('work/e-letter/');
  await expect(
    page.getByText(/ECDSA-based digital signatures/, { exact: false }).first(),
  ).toBeVisible();
  await expect(page.getByText(/SHA-256 integrity checks/, { exact: false }).first()).toBeVisible();
});

test('metadata is complete', async ({ page }) => {
  for (const route of [
    '',
    'work/tinggaljalan/',
    'work/customer-health/',
    'work/e-billing/',
    'work/e-letter/',
  ]) {
    await page.goto(route);
    await expect(page).toHaveTitle(/Fairus In'am Pratama/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https:\/\//);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      /og-default\.png$/,
    );
  }
});
