<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MCTekk QA Automation – README</title>
  <style>
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      max-width: 900px;
      margin: 2rem auto;
      padding: 0 1rem;
      background: #f9f9f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      font-family: "Fira Code", monospace;
      font-size: 0.95rem;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 2rem;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 0.5rem 1rem;
    }
    th {
      background: #2c3e50;
      color: #fff;
    }
    a {
      color: #3498db;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    hr {
      margin: 2rem 0;
      border: none;
      border-top: 1px solid #ccc;
    }
  </style>
</head>
<body>

  <h1>MCTekk QA Automation – Sr. QA Technical Test</h1>

  <p>Automated end-to-end testing project using <strong>Playwright</strong>, <strong>TypeScript</strong>, and <strong>ESLint</strong>.  
  This project tests the <a href="https://www.saucedemo.com">SauceDemo</a> website.</p>

  <hr>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#project-overview">Project Overview</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#available-scripts">Available Scripts</a></li>
    <li><a href="#linting">Linting</a></li>
    <li><a href="#playwright-tests">Playwright Tests</a></li>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <hr>

  <h2 id="project-overview">Project Overview</h2>
  <p>This project implements a modern QA automation setup with:</p>
  <ul>
    <li><strong>Playwright Test Runner</strong> for E2E testing</li>
    <li><strong>TypeScript</strong> for type safety</li>
    <li><strong>ESLint & Prettier</strong> for consistent code style</li>
    <li>Parallel execution with retries and trace collection</li>
    <li>Support for multiple browsers (Chromium, Firefox, WebKit)</li>
  </ul>

  <hr>

  <h2 id="prerequisites">Prerequisites</h2>
  <ul>
    <li>Node.js <strong>≥ 20.9.0</strong> (required by ESLint and Playwright)</li>
    <li>npm (comes with Node)</li>
    <li>Optional: <a href="https://github.com/nvm-sh/nvm">nvm</a> to manage Node versions</li>
  </ul>

  <hr>

  <h2 id="installation">Installation</h2>
  <pre><code># Clone the repository
git clone https://github.com/your-username/mctekk-gilbrtmartinez.git
cd mctekk-gilbrtmartinez

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
</code></pre>

  <hr>

  <h2 id="project-structure">Project Structure</h2>
  <pre><code>mctekk-gilbrtmartinez/
├─ e2e/                     # Playwright test files
├─ node_modules/            # Project dependencies
├─ playwright.config.ts     # Playwright configuration
├─ package.json             # Node.js project manifest
├─ tsconfig.json            # TypeScript configuration
├─ eslint.config.cjs        # ESLint flat configuration
└─ README.md                # Project documentation
</code></pre>

  <hr>

  <h2 id="available-scripts">Available Scripts</h2>
  <table>
    <tr>
      <th>Script</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>npm run lint</code></td>
      <td>Runs ESLint on <code>.ts</code> and <code>.js</code> files</td>
    </tr>
    <tr>
      <td><code>npm run lint:fix</code></td>
      <td>Runs ESLint with auto-fixing</td>
    </tr>
    <tr>
      <td><code>npm test</code></td>
      <td>Runs Playwright tests</td>
    </tr>
  </table>

  <hr>

  <h2 id="linting">Linting</h2>
  <pre><code># Run lint
npm run lint

# Run lint with auto-fix
npm run lint:fix
</code></pre>
  <p>Rules & Configs:</p>
  <ul>
    <li>ESLint v9 flat config</li>
    <li>TypeScript parser: <code>@typescript-eslint/parser</code></li>
    <li>Playwright plugin: <code>eslint-plugin-playwright</code></li>
    <li>Prettier formatting enforced with <code>eslint-config-prettier</code></li>
  </ul>

  <hr>

  <h2 id="playwright-tests">Playwright Tests</h2>
  <pre><code># Run all tests
npm test
# or
npx playwright test

# Run a specific test file
npx playwright test e2e/example.spec.ts

# Open HTML report
npx playwright show-report
</code></pre>
  <p>Features:</p>
  <ul>
    <li>Headless execution by default</li>
    <li>Parallel execution</li>
    <li>Retries on CI</li>
    <li>Trace collection on first retry</li>
    <li>Multi-browser support (Chromium, Firefox, WebKit)</li>
    <li>Test ID attribute: <code>data-test</code></li>
  </ul>

  <hr>

  <h2 id="configuration">Configuration</h2>
  <p>Playwright config highlights (<code>playwright.config.ts</code>):</p>
  <ul>
    <li><code>testDir: './e2e'</code> – all tests live here</li>
    <li><code>fullyParallel: true</code> – run tests in parallel</li>
    <li><code>retries</code> – 2 retries on CI</li>
    <li><code>use.baseURL</code> – base URL for all tests</li>
    <li><code>projects</code> – Chromium, Firefox, WebKit desktop browsers</li>
  </ul>
  <p><strong>Node version required:</strong> ≥ 20.9.0 (see <code>.nvmrc</code>)</p>

  <hr>

  <h2 id="contributing">Contributing</h2>
  <ol>
    <li>Fork the repository</li>
    <li>Clone your fork</li>
    <li>Install dependencies</li>
    <li>Run tests locally</li>
    <li>Submit a pull request</li>
  </ol>

  <hr>

  <h2 id="license">License</h2>
  <p>MIT License</p>

</body>
</html>
