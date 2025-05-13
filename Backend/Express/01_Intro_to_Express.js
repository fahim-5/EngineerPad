/**
 * INTRODUCTION TO EXPRESS.JS - COMPREHENSIVE GUIDE
 * 
 * This file serves as both a working Express.js application and educational documentation.
 * It covers the fundamentals of Express.js while providing a functional "Hello World" example.
 */

// =============================================
// 1. What is Express.js?
// =============================================
/**
 * Express.js is a minimal and flexible Node.js web application framework that provides:
 * - Robust set of features for web and mobile applications
 * - Thin layer of fundamental web application features
 * - Doesn't obscure Node.js features you know and love
 * 
 * Key Characteristics:
 * - Fast, unopinionated, minimalist web framework for Node.js
 * - Provides mechanisms to:
 *   - Write handlers for requests with different HTTP verbs at different URL paths
 *   - Integrate with view rendering engines to generate responses
 *   - Set common web application settings
 *   - Add additional middleware at any point in the request handling pipeline
 * 
 * Express is often called the "de facto standard server framework" for Node.js.
 */

// =============================================
// 2. Why Use Express?
// =============================================
/**
 * Advantages of Express.js:
 * 
 * 1. Simplicity: Minimal and straightforward to use
 * 2. Middleware: Powerful middleware architecture
 * 3. Routing: Robust routing API
 * 4. Performance: Close to raw Node.js performance
 * 5. Popularity: Large ecosystem of plugins and community support
 * 6. Flexibility: Unopinionated framework that adapts to your needs
 * 7. Templating: Supports multiple template engines (Pug, EJS, etc.)
 * 8. HTTP Helpers: Reduces boilerplate for common tasks
 * 
 * Common Use Cases:
 * - RESTful APIs
 * - Single Page Applications
 * - Static websites
 * - Hybrid web applications
 * - Microservices
 */

// =============================================
// 3. Setting Up the Development Environment
// =============================================
/**
 * Prerequisites:
 * - Node.js installed (includes npm)
 * - Text editor or IDE
 * - Terminal/Command Prompt
 * 
 * Recommended Tools:
 * - Node.js LTS version
 * - Visual Studio Code (or any preferred editor)
 * - Postman or curl for API testing
 * - nodemon (for automatic server restarts during development)
 */

// =============================================
// 4. Installing Node.js & Express
// =============================================
/**
 * Installation Steps:
 * 
 * 1. Install Node.js from https://nodejs.org/ (LTS version recommended)
 *    - This automatically installs npm (Node Package Manager)
 * 
 * 2. Verify installation:
 *    - Run `node -v` in terminal: should show version number
 *    - Run `npm -v` in terminal: should show version number
 * 
 * 3. Create a new project directory
 *    - mkdir my-express-app
 *    - cd my-express-app
 * 
 * 4. Initialize package.json:
 *    - npm init -y (creates package.json with default values)
 * 
 * 5. Install Express:
 *    - npm install express
 */

// =============================================
// 5. Your First "Hello World" App
// =============================================

// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

/**
 * Basic Route Handling:
 * 
 * app.METHOD(PATH, HANDLER)
 * - METHOD: HTTP method (get, post, put, delete, etc.)
 * - PATH: URL path on the server
 * - HANDLER: Function executed when the route is matched
 */

// Define a simple GET route for the root path ('/')
app.get('/', (req, res) => {
    /**
     * req (request): Contains information about the HTTP request
     * res (response): Used to send back the desired HTTP response
     */
    res.send('Hello World from Express.js!');
});

/**
 * Additional Example Routes:
 */
// About page route
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is a simple Express.js example.</p>');
});

// 404 handler (must be last route)
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Try these endpoints:`);
    console.log(`- http://localhost:${PORT}/`);
    console.log(`- http://localhost:${PORT}/about`);
    console.log(`- http://localhost:${PORT}/nonexistent (to test 404)`);
});

/**
 * Running the Application:
 * 1. Save this file as 'app.js'
 * 2. In terminal, run: node app.js
 * 3. Open browser and visit http://localhost:3000
 * 
 * For development with auto-restart:
 * 1. Install nodemon globally: npm install -g nodemon
 * 2. Run with: nodemon app.js
 */

/**
 * Project Structure Best Practices:
 * For larger applications, consider organizing your code:
 * - routes/       # Route definitions
 * - controllers/  # Business logic
 * - models/       # Data models
 * - middleware/   # Custom middleware
 * - public/       # Static files
 * - views/        # Templates (if using view engines)
 * - config/       # Configuration files
 * - app.js        # Main application file
 * - server.js     # Server startup (if separating concerns)
 */

/**
 * Next Steps After Hello World:
 * 1. Add middleware (express.json(), express.urlencoded(), etc.)
 * 2. Implement more complex routing
 * 3. Add template rendering
 * 4. Connect to a database
 * 5. Implement error handling
 * 6. Add authentication
 * 7. Create API endpoints
 */
