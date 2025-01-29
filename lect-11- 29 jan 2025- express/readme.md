# EJS Template Engine

## Overview
EJS (Embedded JavaScript) is a simple templating engine that allows embedding JavaScript code within HTML. It helps render dynamic content on web pages.

## Installation
To use EJS, first install it using npm:

```sh
npm install ejs
```

## Setting Up EJS with Express.js

Create an `app.js` (or `server.js`) file and set up EJS as the view engine.

```javascript
const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route and send data to the EJS file
app.get('/', (req, res) => {
    const user = { name: 'John Doe', age: 25, role: 'admin' };
    const numbers = [1, 2, 3, 4, 5];
    const isLoggedIn = true;
    
    res.render('index', { user, numbers, isLoggedIn });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

## Creating the EJS Template
Create a new `views` folder in your project and inside it, create an `index.ejs` file.

### Using Variables in EJS
```html
<h1>Welcome, <%= user.name %>!</h1>
<p>Age: <%= user.age %></p>
<p>Role: <%= user.role %></p>
```

### Using If-Else Conditions in EJS
```html
<% if (isLoggedIn) { %>
    <p>You are logged in.</p>
<% } else { %>
    <p>Please log in.</p>
<% } %>
```

### Using Loops in EJS
```html
<ul>
    <% numbers.forEach(number => { %>
        <li><%= number %></li>
    <% }); %>
</ul>
```

## Running the Application
Start the server using:

```sh
node app.js
```

Visit `http://localhost:3000` in your browser to see the rendered EJS template.

## Conclusion
EJS allows dynamic content rendering using JavaScript. It supports variables, loops, and conditional statements, making it a powerful templating engine for Express.js applications.

