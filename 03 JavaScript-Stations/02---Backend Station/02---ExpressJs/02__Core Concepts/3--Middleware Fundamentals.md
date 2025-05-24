
# Express Middleware: The Complete Guide

Middleware is one of the most powerful concepts in Express.js. It forms the backbone of request processing and enables modular, reusable functionality.

## Table of Contents
1. [What is Middleware?](#what-is-middleware)
2. [Middleware Types](#middleware-types)
3. [Creating Custom Middleware](#creating-custom-middleware)
4. [Middleware Execution Flow](#middleware-execution-flow)
5. [Common Built-in Middleware](#common-built-in-middleware)
6. [Error Handling Middleware](#error-handling-middleware)
7. [Middleware Best Practices](#middleware-best-practices)
8. [Advanced Patterns](#advanced-patterns)

## What is Middleware?

Middleware are functions that have access to:
- The request object (`req`)
- The response object (`res`)
- The next middleware function (`next`)

```javascript
// Basic middleware structure
function myMiddleware(req, res, next) {
  // Do something with req/res
  next(); // Call next() to pass control
}
```

## Middleware Types

### 1. Application-level Middleware
```javascript
// Applies to all routes
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Applies to specific route
app.use('/user', (req, res, next) => {
  console.log('User route accessed');
  next();
});
```

### 2. Router-level Middleware
```javascript
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router middleware');
  next();
});
```

### 3. Route-specific Middleware
```javascript
app.get('/protected', authMiddleware, (req, res) => {
  res.send('Protected content');
});
```

### 4. Error-handling Middleware
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

## Creating Custom Middleware

### Logger Middleware Example
```javascript
const requestLogger = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode} [${duration}ms]`);
  });

  next();
};

app.use(requestLogger);
```

### Authentication Middleware
```javascript
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const user = verifyToken(token);
    req.user = user; // Attach user to request
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
};
```

## Middleware Execution Flow

Understanding the order of execution is crucial:

1. Middleware executes in the order they're defined
2. Each middleware must call `next()` or send a response
3. The flow stops when a response is sent

```javascript
app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.use((req, res, next) => {
  console.log('Second middleware');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});
```

Output:
```
First middleware
Second middleware
```

## Common Built-in Middleware

Express includes several useful middleware:

### 1. express.json()
```javascript
app.use(express.json()); // Parses JSON bodies
```

### 2. express.urlencoded()
```javascript
app.use(express.urlencoded({ extended: true })); // Parses form data
```

### 3. express.static()
```javascript
app.use(express.static('public')); // Serves static files
```

### 4. cookie-parser
```javascript
const cookieParser = require('cookie-parser');
app.use(cookieParser()); // Parses cookies
```

## Error Handling Middleware

Special middleware for handling errors:

```javascript
// Route that might throw error
app.get('/error', (req, res, next) => {
  try {
    throw new Error('Something went wrong');
  } catch (err) {
    next(err); // Pass to error handler
  }
});

// Error handler (must have 4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});
```

## Middleware Best Practices

1. **Order matters**: Place middleware in logical order
2. **Keep it focused**: Each middleware should do one thing
3. **Use return with next**: `return next()` to avoid double responses
4. **Handle async errors**: Wrap async middleware properly
5. **Environment awareness**: Configure middleware differently per environment

```javascript
// Good practice example
app.use(helmet()); // Security middleware first
app.use(compression()); // Then compression
app.use(express.json()); // Then body parsers
app.use(cookieParser()); // Then other parsers
app.use(requestLogger); // Then custom middleware
```

## Advanced Patterns

### 1. Configurable Middleware
```javascript
const configurableMiddleware = (options = {}) => {
  return (req, res, next) => {
    // Use options to customize behavior
    if (options.log) {
      console.log(`${req.method} ${req.url}`);
    }
    next();
  };
};

app.use(configurableMiddleware({ log: true }));
```

### 2. Middleware Composition
```javascript
const composeMiddleware = (...middlewares) => {
  return (req, res, next) => {
    const runMiddleware = (index) => {
      if (index < middlewares.length) {
        middlewares[index](req, res, () => runMiddleware(index + 1));
      } else {
        next();
      }
    };
    runMiddleware(0);
  };
};

app.use(composeMiddleware(middleware1, middleware2, middleware3));
```

### 3. Async Middleware Wrapper
```javascript
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.use(asyncHandler(async (req, res, next) => {
  const data = await fetchData();
  req.data = data;
  next();
}));
```

## Common Pitfalls

1. **Forgetting to call next()**: Middleware chain breaks
2. **Sending multiple responses**: Causes "Can't set headers after they are sent" error
3. **Blocking the event loop**: Avoid synchronous operations in middleware
4. **Improper error handling**: Uncaught errors crash the server
5. **Memory leaks**: Not cleaning up resources

## Real-world Examples

### Rate Limiting Middleware
```javascript
const rateLimit = require('express-rate-limit');
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per window
}));
```

### CORS Middleware
```javascript
const cors = require('cors');
app.use(cors({
  origin: 'https://yourdomain.com',
  methods: ['GET', 'POST']
}));
```

### Session Middleware
```javascript
const session = require('express-session');
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));


