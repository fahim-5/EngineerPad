// =============================================
// 1. What is React?
// =============================================
/*
React is a JavaScript library for building user interfaces.
- Created by Facebook (now Meta)
- Lets you create reusable UI components
- Updates efficiently when data changes
- Not a full framework (just handles the view layer)
*/

// =============================================
// 2. Why Learn React?
// =============================================
/*
- Most popular frontend library
- High demand for React developers
- Component-based architecture
- Strong community support
- Used by big companies: Facebook, Netflix, Airbnb
*/

// =============================================
// 3. Benefits of Using React
// =============================================
/*
1. Reusable Components: Build once, use multiple times
2. Virtual DOM: Optimizes updates for better performance
3. Rich ecosystem: Many tools and libraries
4. JSX: Write HTML-like syntax in JavaScript
5. One-way data flow: Easier to debug
*/

// =============================================
// 4. Installing Node.js and npm
// =============================================
/*
1. Go to https://nodejs.org
2. Download LTS version (e.g., 18.x)
3. Install with default settings
4. Verify installation in terminal:
   node -v
   npm -v
*/

// =============================================
// 5. Creating Your First React App (using Vite)
// =============================================
/*
1. Open terminal
2. Run: npm create vite@latest
3. Follow prompts:
   - Project name: my-first-app
   - Framework: React
   - Variant: JavaScript
4. Navigate to project:
   cd my-first-app
5. Install dependencies:
   npm install
6. Start development server:
   npm run dev
*/

// =============================================
// 6. File Structure of a React App
// =============================================
/*
my-first-app/
├── node_modules/     # All dependencies
├── public/           # Static assets
│   └── vite.svg
├── src/
│   ├── assets/       # Images, fonts
│   ├── App.css       # Main CSS file
│   ├── App.jsx       # Main component
│   ├── index.css     # Global styles
│   └── main.jsx      # Application entry point
├── .gitignore
├── index.html        # Main HTML file
├── package.json      # Project configuration
└── vite.config.js    # Build tool config
*/

// =============================================
// 7. Your First Component (App.jsx)
// =============================================

// Import React and CSS
import { useState } from 'react'
import './App.css'

function App() {
  // State example
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default App

// =============================================
// 8. How React Works (main.jsx)
// =============================================
/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Renders the App component into the root div
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
*/

// =============================================
// 9. Next Steps
// =============================================
/*
1. Edit App.jsx to make changes
2. Create new components in src/
3. Learn about:
   - Props (component parameters)
   - State management
   - React hooks (useState, useEffect)
   - React Router for navigation
*/