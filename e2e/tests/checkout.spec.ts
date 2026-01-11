import { test, expect } from '@playwright/test';
import { userLoginClass } from '../../fixtures/pages/login';
import { ProductsPage } from '../../fixtures/pages/productPages';
import { CartPage } from '../../fixtures/pages/cartPage';
import { CheckoutPage } from '../../fixtures/pages/checkoutPage';

test.describe('Checkout Tests', () => {
  test.beforeEach(async ({ page }) => {
    const login = new userLoginClass(page);
    const products = new ProductsPage(page);

    await login.visitUrl('/');
    await login.loginUser('standard_user', 'secret_sauce');
    // added ramdon math selector to make the test dynamic generate a nomber 0-6
    await products.addProductByIndex(Math.floor(Math.random() * 6));
    await products.goToCart();
  });

  test('Checkout exitoso', async ({ page }) => {
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await cart.checkout();
    await checkout.fillInformation('Gilbert', 'Martinez', '48210');
    await checkout.finish();

    await expect(await checkout.successMessage()).toHaveText(
      'Thank you for your order!'
    );
  });

  test('Checkout fallido con campos vacos', async ({ page }) => {
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await cart.checkout();
    await checkout.fillInformation('', '', '');
    await expect(await checkout.errorMessage()).toBeVisible();
  });
});
