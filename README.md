# Toolbox QA Challenge

This repository contains the solution for the Toolbox QA Challenge.

## Scope

The challenge includes:

* REST API request review in cURL format
* Bug reporting
* UI automation with Cypress
* API automation with Cypress

## Technologies

* Cypress
* JavaScript
* Node.js
* Chrome

## Project Structure

```text
toolbox-qa-challenge/
├── cypress/
│   └── e2e/
│       ├── login.cy.js
│       └── api.cy.js
├── results/
│   ├── bugreport-test2.md
│   └── test2-500-error.png
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

## UI Automation

The UI test validates the login flow on Automation Exercise.

### Validations

* Access to the Login page
* Login using valid credentials
* Successful authentication
* Validation that the `Logged in as` message is displayed

Test file:

```text
cypress/e2e/login.cy.js
```

## API Automation

Two API endpoints from Automation Exercise were selected for validation.

### Products List

Endpoint:

```text
GET https://automationexercise.com/api/productsList
```

Validations:

* HTTP status code is `200`
* Response time is less than 3 seconds
* Response contains headers
* Response body contains the expected `responseCode`
* `products` exists and is an array
* Products list is not empty

### Brands List

Endpoint:

```text
GET https://automationexercise.com/api/brandsList
```

Validations:

* HTTP status code is `200`
* Response time is less than 3 seconds
* Response contains headers
* Response body contains the expected `responseCode`
* `brands` exists and is an array
* Brands list is not empty

Test file:

```text
cypress/e2e/api.cy.js
```

## Bug Report

During the exploratory validation, an issue was identified in the following endpoint:

```text
GET https://echo-serv.tbxnet.com/v1/qa/test2
```

The endpoint returns:

```text
500 Internal Server Error
```

The response contains:

```json
{
  "code": "SYS-ERR",
  "message": "An Error",
  "details": "SYSTEM_ERROR",
  "status": 500
}
```

The complete bug report and supporting evidence are available in the `results` folder.

```text
results/
├── bugreport-test2.md
└── test2-500-error.png
└── results_test2-500-error_1.png
```

## Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

## Run Cypress

Open Cypress in interactive mode:

```bash
npx cypress open
```

Then select:

```text
E2E Testing
```

The available automated tests are:

```text
login.cy.js
api.cy.js
```

## Environment Variables

The login automation uses test credentials stored locally in:

```text
cypress.env.json
```

This file is excluded from the public repository through `.gitignore` to avoid exposing credentials.

Create a `cypress.env.json` file in the root directory using the following structure:

```json
{
  "testEmail": "your_test_email",
  "testPassword": "your_test_password"
}
```

## Security

Sensitive test credentials are not included in this public repository.

The following files and directories are excluded through `.gitignore`:

```text
node_modules/
cypress.env.json
```

## Notes

* UI automation was implemented using Cypress.
* API validations include status code, response time, headers and response body.
* Bug evidence and documentation are stored separately in the `results` folder.
