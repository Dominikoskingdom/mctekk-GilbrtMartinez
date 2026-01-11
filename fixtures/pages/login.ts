import { Page } from '@playwright/test';

export class userLoginClass {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visitUrl(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async loginUser(
    user: string,
    pass: string
  ): Promise<void> {
    await this.page.getByTestId('username').fill(user);
    await this.page.getByTestId('password').fill(pass);
    await this.page.getByTestId('login-button').click();

  }
  async getErrorMessage() {
    return this.page.locator('[data-test="error"]');
  }
}
