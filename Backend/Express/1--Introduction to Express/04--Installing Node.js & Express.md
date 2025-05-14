Here’s the "Installing Node.js & Express" section in raw Markdown format:

# Installing Node.js & Express.js

To start building applications using Express.js, you need to install **Node.js** and then use its package manager (**npm**) to install **Express.js**.

---

## Step 1: Install Node.js

Node.js is a JavaScript runtime built on Chrome’s V8 engine. It allows you to run JavaScript on the server.

### Download & Install

- Go to the official website: [https://nodejs.org](https://nodejs.org)
- Download the **LTS (Long Term Support)** version for your operating system.
- Run the installer and follow the instructions.

### Verify Installation

After installation, open a terminal and run:

```bash
node -v
npm -v

This checks the installed versions of Node.js and npm.


---

Step 2: Initialize a Node.js Project

Create a new folder for your Express project:

mkdir my-express-app
cd my-express-app

Then initialize the project using:

npm init -y

This creates a package.json file with default settings.


---

Step 3: Install Express.js

Now install Express.js as a dependency:

npm install express

This command:

Downloads the latest Express package

Adds it to your node_modules folder

Updates your package.json and package-lock.json



---

Step 4: Verify Installation

Create a simple server to verify that everything is working:

// app.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Express is working!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

Run the app:

node app.js

Go to http://localhost:3000 in your browser. You should see: "Express is working!"


---

Summary

You have successfully installed:

Node.js — the JavaScript runtime

npm — the package manager

Express.js — the web framework


Your environment is now ready to start building scalable web applications with Express.js.

Let me know if you'd like this bundled into a Markdown file or added to a guide you're building!

