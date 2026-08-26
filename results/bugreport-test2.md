---
name: "Endpoint /v1/qa/test2 returns 500 Internal Server Error"
about: Create a report to help us improve
title: "Endpoint /v1/qa/test2 returns 500 Internal Server Error"
labels: ""
assignees: ""

---

### Environment
URL: https://echo-serv.tbxnet.com/v1/qa/test2  
Stage: qa

Evidence: [test2-500-error.png](./test2-500-error.png)

### Logs
```text
GET https://echo-serv.tbxnet.com/v1/qa/test2 500 (Internal Server Error)
```

### Network Requests
Request URL: https://echo-serv.tbxnet.com/v1/qa/test2  
Request Method: GET  
Status Code: 500 Internal Server Error

Response Body:
```json
{
  "code": "SYS-ERR",
  "message": "An Error",
  "details": "SYSTEM_ERROR",
  "status": 500
}
```

### Browser Metadata
| Field      | Value |
|------------|-------|
| Browser    | Chrome |
| Version    | 151.0.7922.138 (Official Build) (64-bit) |
| Dimensions | 782x599 |

### Device Metadata
| Field      | Value |
|------------|-------|
| Device     | Laptop |
| OS         | Windows 11 |
| Dimensions | 1366x768 |

### User Data
| Field      | Value |
|------------|-------|
| Local Time | Tue Aug 25 2026 16:06:00 GMT-0500 (Colombia Time) |

### Custom Data
| Field           | Value |
|-----------------|-------|
| Expected Result | The endpoint should respond according to its expected behavior without returning an Internal Server Error. |
| Actual Result   | The endpoint returns HTTP 500 Internal Server Error with code `SYS-ERR` and details `SYSTEM_ERROR`. |
| Severity        | High |
