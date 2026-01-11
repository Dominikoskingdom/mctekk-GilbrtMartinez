import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation(first: string, last: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', first);
    await this.page.fill('[data-test="lastName"]', last);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
  }

  async finish() {
    await this.page.getByTestId('finish').click();
  }

  async errorMessage() {
    return this.page.locator('[data-test="error"]');
  }

  async successMessage() {
    return this.page.locator('.complete-header');
  }
}
