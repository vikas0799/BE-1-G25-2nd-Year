# GET vs POST Methods in  Express.js 

This repository contains a basic Express.js application using EJS as the templating engine. The project demonstrates how to handle GET and POST requests with Express.js.

## Prerequisites

Before running this project, ensure you have the following installed:
- Node.js (latest stable version recommended)
- npm (Node Package Manager)


## Middleware Used

Middleware functions are used in Express to process requests before reaching the route handlers. The following middlewares are used in this project:

- `express.urlencoded({ extended: true })` – Parses incoming request bodies with `application/x-www-form-urlencoded` payloads.
- `express.json()` – Parses incoming request bodies containing JSON payloads.

These middleware functions ensure that the server can handle form submissions and JSON data correctly.

## Usage

### Start the Server
Run the following command to start the Express server:
```sh
node index.js
```
The server will be running at `http://localhost:3000`.

### Routes

#### 1. Home Route
- **URL:** `/`
- **Method:** `GET`
- **Description:** Renders the `index.ejs` template.

#### 2. `/g23` Route (GET Request)
- **URL:** `/g23`
- **Method:** `GET`
- **Description:** Handles GET requests, logs query parameters, and sends a response.
- **Usage Example:**
  ```sh
  curl "http://localhost:3000/g23?name=John&age=25"
  ```
  - The server logs `name` and `age` parameters from the request query string.
  - The response is `"Hello G23 GET methods handled"`.

#### 3. `/g23` Route (POST Request)
- **URL:** `/g23`
- **Method:** `POST`
- **Description:** Handles POST requests, logs request body, and sends a response.
- **Usage Example:**
  ```sh
  curl -X POST "http://localhost:3000/g23" -H "Content-Type: application/json" -d '{"name":"Alice", "age":30}'
  ```
  - The server logs the request body containing JSON data.
  - The response is `"Hello G23 POST methods handled"`.

## Dependencies

- `express`
- `ejs`






# Static File Serving in Express.js

## Introduction
This guide explains how to serve static files using Express.js. Static files include HTML, CSS, JavaScript, images, and other assets needed for a web application.

## Prerequisites
- Node.js installed
- Basic knowledge of Express.js

## Installation
First, create a project directory and initialize a Node.js project:
```sh
mkdir express-static-server
cd express-static-server
npm init -y
```

Then, install Express:
```sh
npm install express
```

## Setting Up Express to Serve Static Files
Create a file `server.js` and add the following code:

```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Folder Structure
```
express-static-server/
│── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│── server.js
│── package.json
```

## Running the Server
Start the server using:
```sh
node server.js
```

Now, open your browser and visit `http://localhost:3000/index.html` to access your static files.

## Conclusion
By using `express.static()`, you can easily serve static files in your Express.js applications without needing additional configurations. This is useful for hosting frontend assets in small-scale projects.

