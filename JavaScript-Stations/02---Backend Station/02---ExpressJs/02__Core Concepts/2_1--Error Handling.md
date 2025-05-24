
# Error Handling Middleware in Express.js

Error handling is a critical aspect of building robust Express applications. Proper error handling ensures your application fails gracefully and provides meaningful feedback to clients.

## Basic Error Handling Middleware Structure

Error handling middleware differs from regular middleware in four key ways:
1. It takes four parameters instead of three (`err`, `req`, `res`, `next`)
2. It's defined after all other middleware and routes
3. Express recognizes it as error middleware by the parameter count
4. It's only invoked when an error occurs or when `next(err)` is called

```javascript
// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

## Complete Error Handling Implementation

Here's a professional-grade error handling setup with explanations:

```javascript
// 1. Route that throws an error
app.get('/problematic', (req, res, next) => {
  try {
    // Simulate an error
    const result = riskyOperation();
    res.json(result);
  } catch (err) {
    // Pass to error handler
    next(err);
  }
});

// 2. Async route error handling (Express 5+ handles this automatically)
app.get('/async-route', async (req, res, next) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (err) {
    next(err); // Important to pass async errors to error handler
  }
});

// 3. Central error handling middleware
app.use((err, req, res, next) => {
  // Log the error (in production, use a proper logging library)
  console.error(`[${new Date().toISOString()}] Error:`, err);
  
  // Determine the HTTP status code
  const statusCode = err.statusCode || err.status || 500;
  
  // Prepare error response
  const errorResponse = {
    error: {
      message: err.message || 'Internal Server Error',
      code: err.code || 'INTERNAL_ERROR',
      timestamp: new Date().toISOString(),
      path: req.path,
      method: req.method,
      ...(process.env.NODE_ENV === 'development' && {
        stack: err.stack
      })
    }
  };

  // Send response
  res.status(statusCode).json(errorResponse);
});

// 4. 404 Handler (catch-all for unhandled routes)
app.use((req, res, next) => {
  res.status(404).json({
    error: {
      message: 'Not Found',
      code: 'RESOURCE_NOT_FOUND'
    }
  });
});
```

## Key Components Explained

### 1. Error Object Structure
A well-formed error object should include:
- `message`: Human-readable error description
- `statusCode`: Appropriate HTTP status code
- `code`: Machine-readable error code
- `stack`: Error stack trace (development only)

### 2. Error Classification
Handle different error types appropriately:

```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Usage in routes
app.get('/admin', (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(new AppError('Unauthorized access', 403));
  }
  // ... rest of the logic
});
```

### 3. Production vs Development Errors

```javascript
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    // Detailed error for development
    res.status(err.statusCode || 500).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  } else {
    // Minimal information for production
    res.status(err.statusCode || 500).json({
      status: err.status,
      message: err.message
    });
  }
});
```

## Best Practices

1. **Always use try/catch for async operations** - Until Express 5, you need to catch async errors manually
2. **Create custom error classes** - Differentiate between operational and programming errors
3. **Don't expose stack traces** - Only include in development mode
4. **Use HTTP status codes properly**:
   - 400 Bad Request - Client sent invalid data
   - 401 Unauthorized - Authentication needed
   - 403 Forbidden - No permission
   - 404 Not Found - Resource doesn't exist
   - 500 Internal Server Error - Generic server error
5. **Log errors properly** - Use logging libraries like Winston or Morgan
6. **Handle uncaught exceptions** - Process-level error handlers:

```javascript
process.on('uncaughtException', err => {
  console.error('UNCAUGHT EXCEPTION! Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

process.on('unhandledRejection', err => {
  console.error('UNHANDLED REJECTION! Shutting down...');
  console.error(err.name, err.message);
  server.close(() => process.exit(1));
});
```

## Common Pitfalls

1. **Forgetting to call next(err)** - Errors get swallowed
2. **Error middleware order** - Must be after all other middleware/routes
3. **Not setting proper status codes** - Defaults to 500 which might not be appropriate
4. **Overly verbose production errors** - Exposes implementation details
5. **Not logging errors** - Makes debugging difficult

## Advanced Patterns

### Error Wrapper Function

```javascript
const catchAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

// Usage
app.get('/async-route', catchAsync(async (req, res, next) => {
  const data = await fetchData();
  res.json(data);
}));
```

### Global Error Handler Class

```javascript
class ErrorHandler {
  static handle(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    if (process.env.NODE_ENV === 'development') {
      this.sendDevError(err, res);
    } else {
      this.sendProdError(err, res);
    }
  }

  static sendDevError(err, res) {
    res.status(err.statusCode || 500).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  }

  static sendProdError(err, res) {
    // Operational, trusted error: send to client
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    } else {
      // Programming or unknown error
      console.error('ERROR 💥', err);
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong!'
      });
    }
  }
}

// Usage
app.use(ErrorHandler.handle);


