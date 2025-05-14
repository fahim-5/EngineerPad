
# Creating Your First React App with Vite

## Step 1: Install Node.js

Before starting, ensure you have Node.js installed on your computer. Node.js includes npm (Node Package Manager) which we'll use to create our React app.

1. Download Node.js from [https://nodejs.org](https://nodejs.org) (LTS version recommended)
2. Run the installer and follow the setup instructions
3. Verify installation by running these commands in your terminal:

```bash
node -v
npm -v
```

You should see version numbers for both Node.js and npm if installed correctly.

## Step 2: Create a New Vite + React Project

With Node.js installed, create your React app using Vite:

```bash
npm create vite@latest my-react-app -- --template react
```

- Replace `my-react-app` with your preferred project name
- This command:
  - Creates a new folder with your project name
  - Sets up a React project using Vite
  - Configures the basic project structure

## Step 3: Navigate to the Project Folder

Move into your new project directory:

```bash
cd my-react-app
```

## Step 4: Install Dependencies

Install all required dependencies by running:

```bash
npm install
```

This command:
- Reads the `package.json` file
- Downloads all the necessary packages
- Creates a `node_modules` folder

## Step 5: Start the Development Server

Launch your development environment with:

```bash
npm run dev
```

Your React app will start and automatically open in your default browser at:
[http://localhost:5173](http://localhost:5173)

## Understanding the File Structure

Here's what your project contains:

```
my-react-app/
├── public/              # Static files like favicon
├── src/                 # Main source code
│   ├── App.css          # Main stylesheet
│   ├── App.jsx          # Main React component
│   └── main.jsx         # Application entry point
├── index.html           # Root HTML file
├── package.json         # Project configuration
├── vite.config.js       # Vite-specific settings
```

### Key Files Explained:

1. **App.jsx** - Your main React component where you'll build your application
2. **main.jsx** - Renders the App component into the root DOM element
3. **vite.config.js** - Configuration file for Vite (no need to modify initially)

## Making Your First Changes

1. Open `src/App.jsx` in your code editor
2. Try changing the welcome message:
```jsx
<h1>Hello World! My First React App</h1>
```
3. Save the file and see changes instantly in your browser (Vite's Hot Module Replacement at work!)

## Next Steps After Setup

Now that your app is running, consider:

1. **Adding components**: Create new `.jsx` files in the `src` folder
2. **Styling**: Modify `App.css` or add new CSS files
3. **Managing state**: Learn about `useState` hook
4. **Adding routes**: Install React Router for multiple pages

## Troubleshooting

If you encounter issues:

1. **Port already in use**: Try a different port
```bash
npm run dev -- --port 3000
```

2. **Missing dependencies**: Reinstall them
```bash
rm -rf node_modules package-lock.json
npm install
```

## Conclusion

Congratulations! You've successfully:

✅ Created a React application with Vite  
✅ Started the development server  
✅ Viewed your app in the browser  
✅ Made your first code change  

From here, you can begin building your React application by adding components, styles, and functionality.

Happy coding! 🚀
