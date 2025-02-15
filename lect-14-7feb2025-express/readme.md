# Express Middleware

## Overview
Express is a routing and middleware web framework that provides minimal functionality by itself. An Express application is essentially a series of middleware function calls that process incoming requests and generate responses.

## What is Middleware?
Middleware functions are functions that have access to:
- The request object (`req`)
- The response object (`res`)
- The next middleware function in the application’s request-response cycle (commonly denoted as `next`)

Middleware functions can perform the following tasks:
- Execute any code
- Modify the request (`req`) and response (`res`) objects
- End the request-response cycle
- Pass control to the next middleware function in the stack using `next()`

If a middleware function does not end the request-response cycle, it must call `next()`, or the request will be left hanging.

## Middleware Lifecycle
The middleware lifecycle in Express.js follows these steps:

### Request Initiation: A client sends an HTTP request to the server. </br>
### Middleware Execution: Express processes middleware functions in order (application-level, router-level, error-handling, etc.).</br>
### Route Handling: Once all middleware has executed, the final request reaches the route handler (if not terminated earlier). </br>
### Response Processing: The response is sent back to the client.

## Types of Middleware in Express
An Express application can use the following types of middleware:

### 1. Application-Level Middleware
These middleware functions are bound to an instance of the `express()` application object and execute during the request-response cycle.

### 2. Router-Level Middleware
These middleware functions are bound to an instance of an Express `Router()` object and work similarly to application-level middleware but are scoped to a specific router.

### 3. Error-Handling Middleware
These middleware functions handle errors and are defined with four parameters: `(err, req, res, next)`. They help in centralizing error handling in an Express app.

### 4. Built-in Middleware
Express provides built-in middleware functions, such as:
- `express.json()` – Parses incoming JSON requests
- `express.urlencoded()` – Parses URL-encoded requests
- `express.static()` – Serves static files

### 5. Third-Party Middleware
These middleware functions are provided by third-party packages and can be installed via npm. Examples include:
- `cors` – Enables Cross-Origin Resource Sharing
- `morgan` – Logs HTTP requests
- `body-parser` – Parses request bodies

## Using Middleware in Express
Middleware can be loaded at different levels:

### Application-Level Middleware Example
```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Middleware executed');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## Conclusion
Express middleware is a powerful mechanism that allows developers to manage requests, responses, errors, and more. By leveraging different types of middleware, applications can be modular, maintainable, and efficient.

