# Express.js Routing and Query Parameters Documentation

## Static and Dynamic Routing in Express.js

Routing refers to defining application endpoints (URIs) and handling client requests in web applications. In **Express.js**, routing can be categorized into **static routing** and **dynamic routing**.

---

### 1. Static Routing
Static routing is when the route path is predefined and doesn't change. It matches specific, hardcoded paths in the application.

#### Example
```javascript
const express = require('express');
const app = express();

// Static routes
app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

#### Usage
- The route `/home` will always render the same response: `Welcome to the Home Page!`.
- Static routes are straightforward but limited to predefined paths.

#### URL Examples
- `/home` -> Displays "Welcome to the Home Page!"
- `/about` -> Displays "This is the About Page!"

---

### 2. Dynamic Routing
Dynamic routing allows routes to handle variable data within the URL. Dynamic segments are denoted using `:` in the route definition and can capture values passed as part of the URL.

#### Example
```javascript
const express = require('express');
const app = express();

// Dynamic routes
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; // Access dynamic parameter
    res.send(`User ID: ${userId}`);
});

app.get('/product/:category/:id', (req, res) => {
    const category = req.params.category;
    const productId = req.params.id;
    res.send(`Category: ${category}, Product ID: ${productId}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

#### Usage
- Routes can accept variable parts (parameters) and handle them dynamically.
- Useful for cases where paths depend on input data.

#### URL Examples
- `/user/123` -> Displays "User ID: 123"
- `/product/electronics/567` -> Displays "Category: electronics, Product ID: 567"

---

### Key Differences

| **Feature**            | **Static Routing**                              | **Dynamic Routing**                            |
|-------------------------|------------------------------------------------|-----------------------------------------------|
| **Path Structure**      | Fixed and predefined.                          | Contains dynamic segments (e.g., `:id`).      |
| **Flexibility**         | Limited to specific paths.                     | Flexible and adapts to different inputs.      |
| **Use Case**            | Simple and repetitive routes (e.g., `/home`).  | Routes requiring dynamic data (e.g., `/user/:id`). |
| **Parameters Handling** | None                                           | Extracted via `req.params`.                   |

---

### Combination of Static and Dynamic Routes
You can mix both static and dynamic routes in your application to handle diverse requirements:
```javascript
app.get('/profile', (req, res) => {
    res.send('Static Profile Page');
});

app.get('/profile/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Dynamic Profile Page for: ${username}`);
});
```

### Best Practices
- Use static routes for general pages (e.g., home, about).
- Use dynamic routes for personalized or data-driven pages (e.g., user profiles, product details).
- Always validate and sanitize dynamic route parameters to prevent vulnerabilities.

---

## Query Parameters in Express.js

Query parameters are a way to pass additional data to a route in a URL. They are appended to the URL after a `?` symbol, and multiple parameters are separated by `&`. Query parameters are often used for filtering, searching, or passing optional data.

---

### How Query Parameters Work
- Query parameters are part of the URL but not part of the route path.
- They are accessed using `req.query` in Express.js.
- Query parameters are always **key-value pairs**.

---

### Syntax
A URL with query parameters looks like this:

```
http://example.com/search?keyword=express&page=2
```

- `?` starts the query string.
- `keyword=express` and `page=2` are query parameters.

---

### Accessing Query Parameters in Express.js

#### Example
```javascript
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const { keyword, page } = req.query; // Destructure query parameters
    res.send(`Search results for: ${keyword}, Page: ${page}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

---

### Sending Query Parameters

1. **Example URL:**
   ```
   http://localhost:3000/search?keyword=nodejs&page=1
   ```

2. **Accessing Parameters:**
   - `req.query`:
     ```json
     {
         "keyword": "nodejs",
         "page": "1"
     }
     ```
   - `req.query.keyword`: `"nodejs"`
   - `req.query.page`: `"1"`

3. **Response:**
   ```
   Search results for: nodejs, Page: 1
   ```

---

### Key Characteristics
1. **Optional**: Query parameters are not mandatory, so the route works even if they are missing.
   ```javascript
   app.get('/search', (req, res) => {
       const keyword = req.query.keyword || 'No keyword';
       res.send(`Search results for: ${keyword}`);
   });
   ```

2. **String Values**: Query parameters are always strings, even if they look like numbers.
   ```javascript
   const page = parseInt(req.query.page, 10); // Convert to a number
   ```

3. **Multiple Parameters**: Use `&` to pass multiple query parameters.
   ```
   http://localhost:3000/search?keyword=nodejs&page=2&sort=asc
   ```

---

### Static vs Query Parameters
| **Feature**             | **Query Parameters**                          | **Route Parameters**                          |
|--------------------------|-----------------------------------------------|-----------------------------------------------|
| **Definition**           | Part of the URL after `?` symbol.            | Part of the route path, denoted with `:`.     |
| **Access in Express**    | `req.query`                                  | `req.params`                                  |
| **Example URL**          | `/search?keyword=nodejs&page=2`              | `/user/:id`                                   |
| **Data Type**            | Always string (conversion may be needed).    | Parsed automatically as string.              |
| **Use Case**             | Optional or filtering data.                  | Required, dynamic values for route matching.  |

---

### Validation and Error Handling
Always validate query parameters to ensure data integrity:
```javascript
app.get('/search', (req, res) => {
    const { keyword, page } = req.query;

    if (!keyword) {
        return res.status(400).send('Keyword is required!');
    }

    const pageNumber = parseInt(page, 10) || 1; // Default to 1 if not provided
    res.send(`Search results for: ${keyword}, Page: ${pageNumber}`);
});
```

---

### When to Use Query Parameters
1. **Filters and Sorting:**
   ```
   /products?category=electronics&sort=price
   ```

2. **Pagination:**
   ```
   /posts?page=2&limit=10
   ```

3. **Optional Data:**
   ```
   /users?status=active
   ```

Query parameters are perfect for use cases where you need optional, non-hierarchical, or filtering information for your routes.

---

## Middleware in Express.js

Middleware functions are functions that execute during the lifecycle of a request to the server. They have access to the request and response objects and can modify them or end the request-response cycle.

---

### Types of Middleware
1. **Application-Level Middleware**: Applied globally to the app.
2. **Router-Level Middleware**: Applied to specific routes.
3. **Error-Handling Middleware**: Handles errors in the application.
4. **Built-in Middleware**: Provided by Express.js (e.g., `express.json()`).
5. **Third-Party Middleware**: Installed via npm (e.g., `morgan`, `cors`).

---

### Example
#### Application-Level Middleware
```javascript
const express = require('express');
const app = express();

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next(); // Pass control to the next middleware
});

app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```
