# Setting Up the Development Environment for Express.js

Setting up the development environment is the first step in building web applications with Express.js. This guide will walk you through installing Node.js, initializing a project, and setting up Express.js.

---

## 1. Install Node.js and npm

**Node.js** is a JavaScript runtime used to run JavaScript outside the browser. **npm** (Node Package Manager) comes bundled with Node.js and is used to install libraries like Express.

### Steps:

- Go to the official website: [https://nodejs.org](https://nodejs.org)
- Download the **LTS (Long Term Support)** version for your OS.
- Run the installer and complete the setup.

### Verify the Installation

Open a terminal or command prompt and run:

```bash
node -v
npm -v

If both versions are shown, Node.js and npm are successfully installed.


---

2. Initialize a New Node.js Project

Create a folder for your project and navigate into it:

mkdir my-express-app
cd my-express-app

Then, initialize a new Node.js project using:

npm init -y

This creates a package.json file with default settings.


---

3. Install Express.js

Now install Express.js using npm:

npm install express

This command:

Downloads Express into the node_modules folder

Adds it as a dependency in your package.json

Generates a package-lock.json file for version locking



---

4. Create an Entry File

Create a file named app.js or index.js and write the following basic Express setup:

// app.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});


---

5. Run the Application

In your terminal, run the server:

node app.js

Visit http://localhost:3000 in your browser. You should see:

Hello, Express!


---

6. Install Nodemon (Optional - For Auto Reloading)

Nodemon automatically restarts your server when you make changes to the source code. It improves development speed.

Install it as a dev dependency:

npm install --save-dev nodemon

Then update your package.json scripts:

"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}

Now you can run the server in development mode using:

npm run dev


---

Summary

You now have a working Express.js development environment that includes:

Node.js runtime

npm for package management

Express.js for backend routing and logic

Nodemon for automatic server restarts


You're ready to start building powerful web applications and APIs using Express.js.

Let me know if you'd like this exported as a `.md` file or converted into a formatted PDF/HTML document.

