# Project Automation Testing Sauce Demo

This project contains automated tests for the application using **Cypress** and **Mochawesome**.

---

## Table of Contents

1. [Project Description](#project-description)
2. [Tools & Frameworks](#tools--frameworks)
3. [Installation](#installation)
4. [Running Tests](#running-tests)
5. [Generate & Merge Report](#generate--merge-report)
6. [Project Structure](#project-structure)

---

## Project Description

This project is an end-to-end (E2E) automated testing suite that verifies the main functionalities of the application.  
Tests are written using Cypress and results are reported using Mochawesome.

---

## Tools & Frameworks

- [Cypress](https://www.cypress.io/) – E2E testing framework
- [Mochawesome](https://www.npmjs.com/package/mochawesome) – JSON & HTML reporting
- [mochawesome-merge](https://www.npmjs.com/package/mochawesome-merge) – Merge multiple JSON reports
- [mochawesome-report-generator](https://www.npmjs.com/package/mochawesome-report-generator) – Generate HTML reports

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mrdhwnkml/saucedemo-project
```

2. Navigate to the project directory:

```bash
cd saucedemo-project
```

3. Install dependencies:

```bash
npm install
```

## Running Tests

1. Run All Test Case

```bash
npm run test
```

## Generate & Merge Report

1. Merge Report

```bash
npm run report:merge
```

2. Generate HTML

```bash
npm run report:html
```

3. Open Report

```bash
npm run report:open
```

## Project Structure
```bash
project-root/
├─ cypress/
│  ├─ e2e/         # Test files
│  ├─ fixtures/    # Test data
│  ├─ support/     # Cypress commands & configuration
│  └─ reports/     # JSON & HTML reports
├─ node_modules/   # Installed dependencies
├─ package.json    # Project configuration and scripts
├─ cypress.config.js  # Cypress configuration
└─ README.md       # Project documentation
```
