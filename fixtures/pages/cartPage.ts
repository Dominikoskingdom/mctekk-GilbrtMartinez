import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async checkout() {
    await this.page.click('[data-test="checkout"]');
  }

  async getCartItems() {
    return this.page.locator('.cart_item');
  }
}
