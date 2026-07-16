import { expect, Page } from '@playwright/test';

export class AmazonLoginPage {
  constructor(private page: Page) {}

  async openHomePage(): Promise<void> {
    await this.page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await this.page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  }

  async clickSignIn(): Promise<void> {
    const signInLink = this.page.getByRole('link', { name: /sign in|signin/i }).first();
    await signInLink.waitFor({ state: 'visible', timeout: 20000 });
    await signInLink.click();
  }

  async enterEmail(email: string): Promise<void> {
    const emailInput = this.page.locator('input[name="email"], input[type="email"]').first();
    await emailInput.waitFor({ state: 'visible', timeout: 20000 });
    await emailInput.fill(email);
  }

  async clickContinue(): Promise<void> {
    const continueButton = this.page.getByRole('button', { name: /continue/i }).first();
    await continueButton.waitFor({ state: 'visible', timeout: 20000 });
    await continueButton.click();
  }

  async assertSignInPageVisible(): Promise<void> {
    await expect(this.page.locator('input[name="email"], input[type="email"]')).toBeVisible({ timeout: 10000 });
  }

  async assertPasswordFieldVisible(): Promise<void> {
    await expect(this.page.locator('input[name="password"], input[type="password"]')).toBeVisible({ timeout: 10000 });
  }
}
