import { expect, test } from '@playwright/test';

test('skip link reaches the main content', async ({ page }) => {
  await page.goto('');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused();
});

test('mobile menu exposes state and closes with Escape', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile');

  await page.goto('');
  const button = page.getByRole('button', { name: 'Menu' });
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await button.click();
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await expect(button).toBeFocused();
});

test('case studies provide circular next navigation', async ({ page }) => {
  await page.goto('work/e-letter/');
  await expect(
    page.getByRole('navigation', { name: 'Next case study' }).getByRole('link'),
  ).toHaveAttribute('href', '/portfolio/work/tinggaljalan/');
});
