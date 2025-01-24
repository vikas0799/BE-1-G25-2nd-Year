# Using Template Engines in Express.js

A template engine in Express.js allows you to embed JavaScript and HTML in your views to dynamically render HTML pages. Template engines simplify the process of building dynamic web pages by letting you use variables, loops, and conditionals within your HTML templates.

## Popular Template Engines

* **EJS**: Easy to use and syntax similar to HTML.
* **Pug**: Minimal syntax, uses indentation for structure.
* **Handlebars**: Strong logic-less philosophy with helpers.

## Steps to Use a Template Engine in Express.js

### 1. Install the Template Engine

For example, to use **EJS**:

```bash
npm install ejs
```

### 2. Set Up the Template Engine in Express.js

Set the view engine in your Express application to the desired template engine.

```javascript
const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Specify the directory for template files (default is './views')
app.set('views', './views');
```

### 3. Create a Template File

Create a file in the `views` directory. For example, `views/index.ejs`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <h1>Welcome, <%= user.name %>!</h1>
    <ul>
        <% users.forEach(function(user) { %>
            <li><%= user.name %></li>
        <% }); %>
    </ul>
</body>
</html>
```

### 4. Render the Template

In your route, pass the template name and data to the `res.render()` method.

```javascript
app.get('/', (req, res) => {
    const data = {
        title: 'Home Page',
        user: { name: 'John Doe' },
        users: [
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Charlie' }
        ]
    };
    res.render('index', data);
});
```

### 5. Start the Server

Start the server and visit the URL:

```javascript
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

### Example Directory Structure

```
my-app/
├── views/
│   └── index.ejs
├── node_modules/
├── package.json
└── app.js
```

## Tags for EJS

* `<%` Scriptlet tag, for control-flow, no output.
* `<%_` Whitespace slurping Scriptlet tag, strips all whitespace before it.
* `<%=` Outputs the value into the template (HTML escaped).
* `<%-` Outputs the unescaped value into the template.

---

This guide covers the basics of integrating and using a template engine in Express.js. For more advanced features, consult the documentation of the respective template engine.

