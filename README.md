# SauceDemo Playwright Automation – Sr. QA Technical Test

Automated end‑to‑end testing project using **Playwright**, **TypeScript**, and **ESLint**.  
This project tests the [SauceDemo](https://www.saucedemo.com) website through a set of functional UI tests.

---

## 📌 Requirements

- **Node.js v20.9.0 or greater** (required for ESLint and Playwright).  
- **npm** (comes with Node.js).  
- Internet connection to access the SauceDemo site.

Check your Node version:

```bash
node -v
````

---

## 🛠 Installation

1. Clone the repository:

```bash
git clone https://github.com/Dominikoskingdom/mctekk-GilbrtMartinez.git
cd mctekk-GilbrtMartinez
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

This ensures Chromium, Firefox, and WebKit are available for testing.

---

## 🧩 Project Structure

```
mctekk-GilbrtMartinez/
├── e2e/                     # Playwright test files
├── fixtures/                # Test data and fixtures
├── .gitignore
├── eslint.config.cjs        # ESLint flat configuration
├── package.json             # Scripts and dependencies
├── playwright.config.ts     # Playwright configuration (retries, trace, browsers)
├── tsconfig.json            # TypeScript config
└── README.md                # This file
```

---

## 🚀 Available Scripts

Run tests and support commands via npm:

| Script             | Description            |
| ------------------ | ---------------------- |
| `npm test`         | Runs Playwright tests  |
| `npm run lint`     | Runs ESLint checks     |
| `npm run lint:fix` | Auto‑fixes lint issues |

---

## 💡 Linting

Ensure code consistency and quality:

```bash
npm run lint
```

To auto‑fix issues:

```bash
npm run lint:fix
```

This project uses ESLint v9 with a flat config in `eslint.config.cjs`.
TypeScript and Playwright rules are enforced for improved developer experience.

---

## 🧪 Running Playwright Tests

### Run all tests

```bash
npm test
# or
npx playwright test
```

### Run tests in headed mode (visual)

```bash
npx playwright test --headed
```

### Run a specific test

```bash
npx playwright test e2e/example.spec.ts
```

### View HTML report

```bash
npx playwright show-report
```

### Run with trace for debugging

```bash
npx playwright test --trace on
```

---

## 🧠 Test Design & Best Practices

* **Page Object Model (POM)** — keeps locators and interactions cleanly separated.
* **Data fixtures** — reusable test data for login, products, etc.
* **Multi‑browser support** — runs tests in Chromium, Firefox, and WebKit by default.
* **Retry logic & trace debugging** — configured in `playwright.config.ts` to help diagnose flaky tests.
* **Screenshots/Videos on failure** — captured automatically.

Example of a data‑driven test:

```ts
Users.forEach(user => {
  test(`Login Test: ${user.name} (valid=${user.valid})`, async ({ page }) => {
    await loginPage.login(user.username, user.password);
    if (user.valid) {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(loginPage.getErrorMessage()).toBeVisible();
    }
  });
});
```

---

## 📌 Node Version Note

This project requires **Node.js v18.9.0 or greater**.
Older versions may produce linting or runtime errors.

---

## 🔗 Useful Links

* **SauceDemo:** [https://www.saucedemo.com](https://www.saucedemo.com)
* **Playwright Docs:** [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)

---

## 📝 Notes

* Tests are designed for stability, using reliable selectors and best practices.
* You can add more fixtures, tests, and pages easily.
* Ready for CI/CD integration.

```