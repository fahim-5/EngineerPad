/**
 * Welcome to React!
 * ------------------
 * React is a JavaScript library for building fast, interactive UIs.
 * Built by Facebook, powered by components, and adored by developers.
 */

// Import the core of React and the DOM renderer
import React from 'react';
import ReactDOM from 'react-dom/client';

// A simple React component – the heartbeat of any React app
function HelloReact() {
  return (
    <div>
      <h1>Hello, React World!</h1>
      <p>This is your first React component – elegant, reusable, and powerful.</p>
    </div>
  );
}

// Get the root DOM node from index.html (like a portal to your app)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the component inside the root
root.render(<HelloReact />);

/**
 * Quick Notes:
 * ------------
 * - Components are the building blocks of React.
 * - JSX (JavaScript XML) lets you write HTML inside JavaScript.
 * - React uses a virtual DOM for blazing-fast UI updates.
 * - Everything is modular and stateful – build dynamic interfaces with ease.
 */