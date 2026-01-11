import { test, expect } from '@playwright/test';
import { userLoginClass } from '../../fixtures/pages/login';
import { Users } from '../../fixtures/data/users';

test.describe('Login Tests', () => {
  let login: userLoginClass;

  test.beforeEach(async ({ page }) => {
    login = new userLoginClass(page);
    await login.visitUrl('/');
  });

  Users.forEach(user => {
    test(`Login Test: ${user.name}` , async ({ page }) => {
      await login.loginUser(user.username, user.password);

      if (user.valid) {
        await expect(page).toHaveURL(/inventory/);
      } else {
        await expect(await login.getErrorMessage()).toBeVisible({ timeout: 5000 })
      }
    });
  });  
});
