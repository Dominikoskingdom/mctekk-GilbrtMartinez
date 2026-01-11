import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addProductByIndex(index: number) {
   await this.page.locator('[data-test^="add-to-cart-"]').nth(index).click();
    //await this.page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async cartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }

  async waitForPage() {
    // Wait until the URL contains 'inventory'
    await expect(this.page).toHaveURL(/inventory/);

    // Wait until the product list is visible
    const inventoryList = this.page.locator('.inventory_list');
    await expect(inventoryList).toBeVisible();
  }

  async addProductByName(productName: string) {
    await this.waitForPage();

    // Scope to a single product container
    const product = this.page.locator('.inventory_item').filter({ hasText: productName });

    // Ensure product exists
    await expect(product).toHaveCount(1);

    // Click the "Add to Cart" button within that product container
    const addButton = product.locator('button[data-test^="add-to-cart-"]');
    await expect(addButton).toBeVisible();

    await addButton.click();
  }


}
