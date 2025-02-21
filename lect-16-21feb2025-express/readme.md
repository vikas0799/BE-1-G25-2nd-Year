# Express.js Middleware Example

## Overview
This is a simple Express.js application demonstrating the use of middleware functions, including universal middleware, user verification, and OTP verification.

## Features
- Uses middleware for request validation
- Implements user authentication and OTP verification
- Handles payment route with multiple middleware functions

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [Express.js](https://expressjs.com/)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```sh
   cd <project-directory>
   ```

3. Install dependencies:
   ```sh
   npm install express
   ```

## Usage

1. Start the server:
   ```sh
   node server.js
   ```

2. The server will be running at:
   ```
   http://localhost:4000
   ```

3. Available Routes:
   - `GET /` - Returns a welcome message.
   - `GET /payment` - Requires query parameters (`otp`, `username`, and `password`).

## Middleware Functions
1. **Universal Middleware**
   - Executes for every request and logs a message.

2. **User Verification Middleware** (`verifyuser`)
   - Checks if `username` is `vikas0799` and `password` is `1234`.
   - If valid, it proceeds; otherwise, it returns `invalid user`.

3. **OTP Verification Middleware** (`verifyotp`)
   - Checks if the `otp` parameter is `5678`.
   - If valid, it proceeds; otherwise, it returns `invalid otp`.

## Example API Request
To access the payment route, use the following URL:
```
http://localhost:4000/payment/?otp=5678&username=vikas0799&password=1234
```

## Expected Console Output
```
universal middleware executed
valid user
payment middleware executed
third middleware executed
```

## License
This project is open-source and available for modification and use.

