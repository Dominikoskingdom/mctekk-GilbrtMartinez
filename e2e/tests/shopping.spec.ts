import { test, expect } from '@playwright/test';
import { userLoginClass } from '../../fixtures/pages/login';
import { ProductsPage } from '../../fixtures/pages/productPages';
import { CartPage } from '../../fixtures/pages/cartPage';

import { Products } from '../../fixtures/data/products';
import { Users } from '../../fixtures/data/users';

test.describe('Cart Tests - Data Driven', () => {
  Users.filter(u => u.valid).forEach(user => {
    test(`Cart for ${user.name}`, async ({ page }) => {
      const login = new userLoginClass(page);
      const productsPage = new ProductsPage(page);

      await login.visitUrl('/');
      await login.loginUser(user.username, user.password);

      // Add all products dynamically with random numbers- 
      // if ran is = 0 add one to make sure theres no errors 
      let high = Math.floor(Math.random() * 6)
      if ( high == 0 ){
        high+1
      }
      console.log(high)
      for (const product of Products.slice(0, high)) {
        await productsPage.addProductByName(product);
      }

      await productsPage.goToCart();

      // Validate cart badge shows 3 items
      await expect(await productsPage.cartBadge()).toHaveText(high.toString());
    });
  });
});

test.describe('Cart Tests', () => {
  test.beforeEach(async ({ page }) => {
    const login = new userLoginClass(page);
    await login.visitUrl('/');
    await login.loginUser('standard_user', 'secret_sauce');
  });

  test('Agregar un producto al carrito', async ({ page }) => {
    const products = new ProductsPage(page);

    await products.addProductByIndex(0);
    await expect(await products.cartBadge()).toHaveText('1');
  });

  test('Agregar múltiples productos al carrito', async ({ page }) => {
    const products = new ProductsPage(page);
    // Added ramdon numbers to select product 
    await products.addProductByIndex(Math.floor(Math.random() * 6));
    await products.addProductByIndex(Math.floor(Math.random() * 6));
    await expect(await products.cartBadge()).toHaveText('2');
  });

  test('Visualizar productos en el carrito', async ({ page }) => {
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await products.addProductByIndex(Math.floor(Math.random() * 6));
    await products.goToCart();
    await expect(await cart.getCartItems()).toHaveCount(1);
  });
});
