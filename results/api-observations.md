# API Observations

## GET /system/version - Swagger documentation improvement

### Observation

The Swagger documentation for `GET /system/version` shows the following fields in the successful response example:

* `ok`
* `date`

However, the actual API response also contains additional fields:

* `name`
* `version`
* `env`
* `uptimeDate`
* `serverName`

### Recommendation

Update the Swagger response model and example so that it reflects the complete structure returned by the API.

This would help QA engineers, developers and API consumers understand the expected response contract and create more accurate validations.

### Classification

Documentation improvement.
