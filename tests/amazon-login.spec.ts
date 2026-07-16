import { test, expect } from '@playwright/test';

test.describe('Amazon login', () => {
  test('open the Amazon home page', async ({ page }) => {
    await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded', timeout: 60000 });

    await expect(page).toHaveURL(/amazon\.in/);
    await expect(page).toHaveTitle(/Amazon/i, { timeout: 20000 });

    const amazonLogo = page.locator('#nav-logo, #nav-bb-logo').first();
    await expect(amazonLogo).toBeVisible({ timeout: 20000 });

    const signInLink = page.getByRole('link', { name: /sign in|signin|hello, sign in/i }).first();
    if (await signInLink.isVisible().catch(() => false)) {
      await expect(signInLink).toBeVisible();
    }
  });
});
