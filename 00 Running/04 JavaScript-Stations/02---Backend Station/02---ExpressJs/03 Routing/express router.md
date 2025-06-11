# **Express Router Tutorial: Building Modular Routes in Node.js**

## **Introduction**
Express.js is a popular web framework for Node.js that simplifies server-side development. One of its powerful features is the **Express Router**, which helps organize routes in a modular and maintainable way.

In this tutorial, you'll learn:
- What the Express Router is and why it’s useful
- How to create and use routers in Express
- How to structure routes for better scalability
- Advanced routing techniques (middleware, route parameters, etc.)

---

## **1. What is Express Router?**
The Express Router is a mini Express application that allows you to:
- Group related routes together
- Apply middleware to specific sets of routes
- Improve code organization by separating route logic into different files

Instead of defining all routes in your main `app.js` file, you can split them into multiple router files.

---

## **2. Setting Up a Basic Express Router**
### **Step 1: Install Express**
First, initialize a Node.js project and install Express:
```bash
npm init -y
npm install express
```

### **Step 2: Create a Basic Router**
Create a new file `routes/users.js`:
```javascript
const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('List of users');
});

router.get('/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
```

### **Step 3: Use the Router in Your Main App**
In `app.js`:
```javascript
const express = require('express');
const app = express();
const userRouter = require('./routes/users');

// Use the router
app.use('/users', userRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

Now:
- Visiting `/users` will show "List of users"
- Visiting `/users/123` will show "User ID: 123"

---

## **3. Structuring Multiple Routers**
For larger applications, you can split routes into multiple files:
```
project/
├── app.js
├── routes/
│   ├── users.js
│   ├── products.js
│   └── orders.js
```

**Example: `routes/products.js`**
```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('List of products');
});

router.post('/', (req, res) => {
  res.send('Product created');
});

module.exports = router;
```

**Update `app.js` to include all routers:**
```javascript
const userRouter = require('./routes/users');
const productRouter = require('./routes/products');

app.use('/users', userRouter);
app.use('/products', productRouter);
```

---

## **4. Using Middleware with Router**
You can apply middleware to specific routes in a router.

### **Example: Logging Middleware**
```javascript
// routes/users.js
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('List of users');
});
```

### **Route-Specific Middleware**
```javascript
function validateUser(req, res, next) {
  if (req.params.id === 'admin') {
    next();
  } else {
    res.status(403).send('Access denied');
  }
}

router.get('/:id', validateUser, (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

---

## **5. Nested Routers (Route Chaining)**
You can further modularize routes by nesting routers.

**Example: `routes/admin/index.js`**
```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Admin Dashboard');
});

module.exports = router;
```

**Example: `routes/admin/users.js`**
```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Admin Users');
});

module.exports = router;
```

**Update `app.js` to nest routes:**
```javascript
const adminRouter = require('./routes/admin');
const adminUsersRouter = require('./routes/admin/users');

adminRouter.use('/users', adminUsersRouter);
app.use('/admin', adminRouter);
```

Now:
- `/admin` → "Admin Dashboard"
- `/admin/users` → "Admin Users"

---

## **6. Best Practices**
1. **Keep routes modular** – Split routes into logical files.
2. **Use middleware wisely** – Apply middleware at the router level when needed.
3. **Use route parameters** – Make dynamic routes with `/:id`.
4. **Prefix routes** – Group routes under a common path (e.g., `/api/v1`).

---

## **Conclusion**
The Express Router helps organize routes in a scalable way. By splitting routes into separate files, you can:
- Improve maintainability
- Apply middleware selectively
- Structure complex applications efficiently

Now you can build well-organized Express apps with modular routing!

---

### **Next Steps**
- Learn about **error handling in Express**
- Explore **authentication middleware** (e.g., JWT, Passport.js)
- Try integrating a database (e.g., MongoDB with Mongoose)

Happy coding! 🚀