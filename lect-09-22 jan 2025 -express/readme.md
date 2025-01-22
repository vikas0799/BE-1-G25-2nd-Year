
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