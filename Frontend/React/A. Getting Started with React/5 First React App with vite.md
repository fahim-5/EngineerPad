

## 5. First React App with Vite

This guide walks you through creating your first React application using Vite, a fast modern build tool.

Step 1: Install Node.js

Ensure Node.js is installed on your machine. You can download it from https://nodejs.org.

To verify installation:

node -v
npm -v

Step 2: Create a New Vite + React Project

Run the following command in your terminal:

npm create vite@latest my-react-app -- --template react

Replace my-react-app with your preferred project name.

Step 3: Navigate to the Project Folder

cd my-react-app

Step 4: Install Dependencies

npm install

This installs all required packages specified in package.json.

Step 5: Start the Development Server

npm run dev

Your React app should now be running at http://localhost:5173.

File Structure Overview

my-react-app/
├── public/
├── src/
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js

App.jsx: Main component of the application

main.jsx: Entry point that renders the App component

vite.config.js: Vite configuration file


Conclusion

You’ve successfully created your first React app using Vite! From here, you can begin building components, managing state, and exploring React’s ecosystem.


