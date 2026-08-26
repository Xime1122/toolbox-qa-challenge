# Toolbox QA Challenge

This repository contains the solution for the Toolbox QA Challenge.

## Scope

The challenge includes:

- REST API request review in cURL format
- Bug reporting
- UI automation with Cypress
- API automation with Cypress

## Technologies

- Cypress
- JavaScript
- Node.js
- Chrome

## Project Structure

```text
toolbox-qa-challenge/
├── cypress/
│   └── e2e/
│       ├── login.cy.js
│       └── api.cy.js
├── results/
│   ├── api-observations.md
│   ├── bugreport-test2.md
│   └── test2-500-error.png
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

## cURL Review

The provided cURL request contains an invalid JSON string in the `contact1` field.

The double quotes around `Dave` are not escaped, causing the JSON parser to interpret them as the end of the string.

Incorrect:

```json
"contact1": "David "Dave" Letterman"
```

Correct:

```json
"contact1": "David \"Dave\" Letterman"
```

The escaped quotes (`\"`) indicate that the quotation marks are part of the string value instead of terminating the JSON string.

## UI Automation

The UI test validates the login flow on Automation Exercise.

### Validations

- Access to the Login page
- Login using valid credentials
- Successful authentication
- Validation that the `Logged in as` message is displayed

Test file:

```text
cypress/e2e/login.cy.js
```

## API Automation

Two Echo Server endpoints were selected for validation.

### POST /echo

Endpoint:

```text
POST https://echo-serv.tbxnet.com/v1/echo
```

#### Positive Scenario

The test sends a text value using the required `text` parameter and validates:

- HTTP status code is `200`
- Response time is less than 3 seconds
- Response contains `content-type: application/json`
- Response body contains the required `text` field
- `text` is returned as a string
- Returned text matches the value sent in the request

#### Negative Scenario

The test calls the endpoint without the required `text` parameter and validates:

- API returns `400 Bad Request`
- Response time is less than 3 seconds
- Response contains JSON content type
- Error response contains `code`
- Error response contains `message`
- Error fields have the expected data types

### GET /system/version

Endpoint:

```text
GET https://echo-serv.tbxnet.com/v1/system/version
```

Validations:

- HTTP status code is `200`
- Response time is less than 3 seconds
- Response contains `content-type: application/json`
- Response contains the fields:
  - `ok`
  - `date`
  - `name`
  - `version`
  - `env`
  - `serverName`
- `ok` is a boolean and its value is `true`
- `date` is a non-empty string
- `name` equals `tbx-echo-server`
- `version` is a non-empty string
- `env` and `serverName` are returned as strings

Test file:

```text
cypress/e2e/api.cy.js
```

## API Observations

During API validation, a documentation improvement was identified for:

```text
GET /system/version
```

The Swagger documentation only shows `ok` and `date` in the successful response example, while the actual API response also includes:

- `name`
- `version`
- `env`
- `uptimeDate`
- `serverName`

The complete observation is documented in:

```text
results/api-observations.md
```

## Bug Report

A server error was identified while validating the QA test endpoint.

The endpoint returned an HTTP `500 Internal Server Error` response.

The complete bug report and supporting evidence are available in the `results` folder:

```text
results/
├── api-observations.md
├── bugreport-test2.md
└── test2-500-error.png
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

Sensitive test credentials are not included in the public repository.

The following files and directories are excluded through `.gitignore`:

```text
node_modules/
cypress.env.json
```

## Notes

- UI automation was implemented using Cypress.
- API validations include status code, response time, headers and response body.
- A negative API scenario was included to validate error handling.
- Bug evidence and API observations are stored separately in the `results` folder.

