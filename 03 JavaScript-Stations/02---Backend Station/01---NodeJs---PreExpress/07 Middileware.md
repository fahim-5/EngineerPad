### **Middleware in Node.js (Pre-Express Deep Dive)**  

Middleware is a **core concept** in Express.js, but understanding it in vanilla Node.js first will make Express much easier.  

---

## **1. What is Middleware?**  
Middleware is a **function** that has access to:  
- The **request (`req`)** object  
- The **response (`res`)** object  
- The **`next()`** function (to pass control to the next middleware)  

### **Why Use Middleware?**  
- Modify `req`/`res` (e.g., parse JSON, check authentication)  
- Execute code before the final request handler  
- Break logic into reusable chunks  

---

## **2. The `next()` Function & Chaining**  
Middleware runs in a **sequence**. Calling `next()` passes control to the next function.  

### **Example: Simple Middleware Chain**  
```javascript
const server = require('http').createServer((req, res) => {
  // Middleware 1
  const middleware1 = (req, res, next) => {
    console.log('Middleware 1');
    next(); // Pass to next middleware
  };

  // Middleware 2
  const middleware2 = (req, res, next) => {
    console.log('Middleware 2');
    next(); // Pass to final handler
  };

  // Final Request Handler
  const finalHandler = (req, res) => {
    res.end('Hello World');
  };

  // Manual Execution (Simulates Express)
  middleware1(req, res, () => {
    middleware2(req, res, () => {
      finalHandler(req, res);
    });
  });
});

server.listen(3000);
```
**Output:**  
```
Middleware 1  
Middleware 2  
```
**Key Takeaway:**  
- Each middleware **must call `next()`** to continue the chain.  
- If `next()` isn’t called, the request **stalls**.  

---

## **3. Simulating Middleware in Vanilla Node.js**  
Since Express automates middleware chaining, let’s **manually implement** it in Node.  

### **Example: Logging + Authentication Middleware**  
```javascript
const http = require('http');

// Middleware 1: Logging
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Middleware 2: Fake Auth Check
const checkAuth = (req, res, next) => {
  const isAuthenticated = true; // Simulate auth check
  if (!isAuthenticated) {
    res.writeHead(401);
    return res.end('Unauthorized');
  }
  next(); // Continue if auth passes
};

// Final Handler
const requestHandler = (req, res) => {
  res.end('Welcome, authenticated user!');
};

// Manual Middleware Execution
const server = http.createServer((req, res) => {
  logger(req, res, () => {
    checkAuth(req, res, () => {
      requestHandler(req, res);
    });
  });
});

server.listen(3000);
```
**How It Works:**  
1. `logger()` runs first → logs the request.  
2. `checkAuth()` runs next → blocks if auth fails.  
3. If auth passes, `requestHandler()` sends the response.  

---

## **Key Takeaways**  
✅ **Middleware is just a function** with `(req, res, next)`.  
✅ **`next()`** passes control to the next middleware.  
✅ **Order matters** (middleware runs sequentially).  
✅ **Express automates this chaining**, but now you understand how it works under the hood.  

---
### **What’s Next?**  
Now that you understand middleware:  
1. Move to **Express.js**, where middleware is built-in.  
2. Learn **Express middleware types** (application-level, router-level, error-handling).  
3. Use **third-party middleware** (like `body-parser`, `morgan`).  

This foundation will make Express feel **intuitive**! 🚀