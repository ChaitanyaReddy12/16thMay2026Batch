import { expect, Page } from '@playwright/test';

export class TestAutomationPracticePage {
  constructor(private page: Page) {}

  async openPage(): Promise<void> {
    await this.page.goto('https://testautomationpractice.blogspot.com/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
  }

  async fillName(name: string): Promise<void> {
    await this.page.locator('#name').fill(name);
  }

  async fillEmail(email: string): Promise<void> {
    await this.page.locator('#email').fill(email);
  }

  async fillPhone(phone: string): Promise<void> {
    await this.page.locator('#phone').fill(phone);
  }

  async fillAddress(address: string): Promise<void> {
    await this.page.locator('#textarea').fill(address);
  }

  async fillWikipediaSearch(searchText: string): Promise<void> {
    await this.page.locator('.wikipedia-search-input').fill(searchText);
  }

  async verifyFormValues(name: string, email: string, phone: string, address: string, searchText: string): Promise<void> {
    await expect(this.page.locator('#name')).toHaveValue(name);
    await expect(this.page.locator('#email')).toHaveValue(email);
    await expect(this.page.locator('#phone')).toHaveValue(phone);
    await expect(this.page.locator('#textarea')).toHaveValue(address);
    await expect(this.page.locator('.wikipedia-search-input')).toHaveValue(searchText);
  }
}
