module.exports = [
  {
    ignores: ["playwright.config.ts"],
  },
  {
    files: ["tests/**/*.ts", "**/*.spec.ts"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
    },
    plugins: {
      playwright: require("eslint-plugin-playwright"),
    },
    rules: {
      "playwright/no-focused-test": "error",
      "playwright/no-skipped-test": "warn",
    },
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
