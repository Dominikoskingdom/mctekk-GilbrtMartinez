import { defineConfig, devices } from '@playwright/test';

const baseURL: string = process.env.BASE_URL ?? 'https://www.saucedemo.com/';

export default defineConfig({
  testDir: './e2e',
  

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: baseURL,
    headless: true,
    trace: 'on-first-retry',
    testIdAttribute: 'data-test',
 // screenshot and record video only when test fails
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
