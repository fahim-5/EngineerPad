# **Basic Routing in Express.js (GET, POST, PUT, DELETE) - Tutorial**

Express.js is a popular Node.js framework for building web applications and APIs. One of its core features is **routing**, which allows you to define how your application responds to different HTTP requests (GET, POST, PUT, DELETE, etc.) at specific URLs.

In this tutorial, we’ll cover the basics of handling **GET, POST, PUT, and DELETE** requests in Express.js.

---

## **Prerequisites**
- Basic knowledge of JavaScript
- Node.js installed on your machine
- npm (Node Package Manager)

---

## **Step 1: Set Up an Express Project**
First, create a new project and install Express.

1. **Initialize a new Node.js project:**
   ```bash
   mkdir express-routing-tutorial
   cd express-routing-tutorial
   npm init -y
   ```

2. **Install Express:**
   ```bash
   npm install express
   ```

3. **Create an `app.js` file:**
   ```bash
   touch app.js
   ```

---

## **Step 2: Basic Express Server Setup**
Open `app.js` and set up a basic Express server:

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## **Step 3: Handling HTTP Methods (GET, POST, PUT, DELETE)**
We’ll now define routes for each HTTP method.

### **1. GET Request (Retrieve Data)**
Used to fetch data from the server.

```javascript
// GET all items
app.get('/items', (req, res) => {
    res.send('List of all items');
});

// GET a single item by ID
app.get('/items/:id', (req, res) => {
    const itemId = req.params.id;
    res.send(`Item with ID: ${itemId}`);
});
```

**Test it:**  
- Open your browser or Postman and visit `http://localhost:3000/items`  
- Try `http://localhost:3000/items/1`

---

### **2. POST Request (Create Data)**
Used to send data to the server (e.g., form submissions).

```javascript
// POST a new item
app.post('/items', (req, res) => {
    const newItem = req.body; // Data sent in the request body
    res.status(201).json({
        message: 'Item created successfully',
        item: newItem
    });
});
```

**Test it:**  
- Use Postman or cURL to send a POST request:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name":"New Item"}' http://localhost:3000/items
  ```

---

### **3. PUT Request (Update Data)**
Used to update existing data.

```javascript
// PUT (Update) an existing item
app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    res.json({
        message: `Item ${itemId} updated`,
        updatedItem
    });
});
```

**Test it:**  
- Send a PUT request:
  ```bash
  curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Item"}' http://localhost:3000/items/1
  ```

---

### **4. DELETE Request (Remove Data)**
Used to delete data.

```javascript
// DELETE an item
app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    res.send(`Item ${itemId} deleted`);
});
```

**Test it:**  
- Send a DELETE request:
  ```bash
  curl -X DELETE http://localhost:3000/items/1
  ```

---

## **Final Code (`app.js`)**
Here’s the complete example:

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET all items
app.get('/items', (req, res) => {
    res.send('List of all items');
});

// GET a single item
app.get('/items/:id', (req, res) => {
    const itemId = req.params.id;
    res.send(`Item with ID: ${itemId}`);
});

// POST a new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    res.status(201).json({
        message: 'Item created successfully',
        item: newItem
    });
});

// PUT (Update) an item
app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    res.json({
        message: `Item ${itemId} updated`,
        updatedItem
    });
});

// DELETE an item
app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    res.send(`Item ${itemId} deleted`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## **Conclusion**
You’ve learned how to handle **GET, POST, PUT, and DELETE** requests in Express.js. This is the foundation for building RESTful APIs.

### **Next Steps:**
- Use a database (e.g., MongoDB, PostgreSQL) to store data.
- Implement error handling.
- Organize routes using `express.Router()`.

Happy coding! 🚀
