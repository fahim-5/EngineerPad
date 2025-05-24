# Introduction to Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It's built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

## Key Features of Node.js:
- **Asynchronous and Event-Driven**: All APIs are non-blocking
- **Single-Threaded but Highly Scalable**: Uses event looping
- **Fast**: Built on Chrome's V8 JavaScript Engine
- **NPM (Node Package Manager)**: Largest ecosystem of open-source libraries
- **Cross-Platform**: Runs on Windows, Linux, Unix, macOS

# Setting Up Node.js Environment in VS Code

## Step 1: Install Node.js
1. Download the latest LTS version from [Node.js official website](https://nodejs.org/)
2. Run the installer and follow the setup instructions
3. Verify installation by running in terminal:
   ```bash
   node -v
   npm -v
   ```

## Step 2: Install VS Code
1. Download VS Code from [code.visualstudio.com](https://code.visualstudio.com/)
2. Install it with default settings

## Step 3: Configure VS Code for Node.js Development
1. Open VS Code
2. Install these recommended extensions:
   - **JavaScript (ES6) code snippets**
   - **ESLint** (for code linting)
   - **Prettier** (for code formatting)
   - **Node.js Extension Pack** (collection of useful Node extensions)

## Step 4: Create Your First Node.js Project
1. Create a new folder for your project
2. Open the folder in VS Code
3. Open the terminal in VS Code (Ctrl+` or View > Terminal)
4. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```
   This creates a `package.json` file

## Step 5: Create and Run a Simple Node.js File
1. Create a new file named `app.js`
2. Add this simple code:
   ```javascript
   const http = require('http');

   const server = http.createServer((req, res) => {
     res.writeHead(200, {'Content-Type': 'text/plain'});
     res.end('Hello from Node.js!\n');
   });

   const PORT = 3000;
   server.listen(PORT, () => {
     console.log(`Server running at http://localhost:${PORT}/`);
   });
   ```
3. Run the file by either:
   - Clicking the "Run" button in VS Code
   - Or in terminal: `node app.js`
4. Open your browser to `http://localhost:3000` to see the output

## Additional Tips:
- Use `nodemon` for automatic restart during development:
  ```bash
  npm install -g nodemon
  ```
  Then run your app with:
  ```bash
  nodemon app.js
  ```
- Configure debugging by creating a `.vscode/launch.json` file with Node.js debugging settings

Now you have a fully configured Node.js development environment in VS Code!