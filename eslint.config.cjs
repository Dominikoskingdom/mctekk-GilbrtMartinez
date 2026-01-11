const { defineConfig } = require("eslint-define-config");

// Import parser
const tsParser = require("@typescript-eslint/parser");

// Import plugins
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const playwrightPlugin = require("eslint-plugin-playwright");

module.exports = defineConfig([
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      // Define Node and browser globals manually
      globals: {
        process: "readonly",
        __dirname: "readonly",
        console: "readonly",
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      playwright: playwrightPlugin,
    },
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "error",

      // Playwright rules
      "playwright/no-focused-test": "error",
      "playwright/no-skipped-test": "warn",
    },
  },
]);
