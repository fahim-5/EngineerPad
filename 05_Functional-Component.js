// App.js

import React, { useState, useEffect } from 'react';

/*
  FUNCTIONAL COMPONENTS IN REACT
  ------------------------------
  Functional components are JavaScript functions that return UI (JSX).
  They use Hooks like useState and useEffect to handle state and side effects.

  EXAMPLE USE CASE:
  A simple counter that increases when a button is clicked.
*/

function Counter() {
  // React Hook: useState lets you add state to functional components
  const [count, setCount] = useState(0);

  // React Hook: useEffect lets you perform side effects (like logging)
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]); // This effect runs when "count" changes

  return (
    <div style={{ padding: 20, border: '1px solid #ddd', borderRadius: 10 }}>
      <h2>Functional Component: Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click to increase
      </button>
    </div>
  );
}

/*
  PROS OF FUNCTIONAL COMPONENTS
  -----------------------------
  ✅ Simpler syntax – just a function that returns JSX
  ✅ Can use Hooks (useState, useEffect, useContext, etc.)
  ✅ Easier to test and reuse
  ✅ Better performance (React optimizes them)
  ✅ Encouraged in modern React development

  CONS OF FUNCTIONAL COMPONENTS
  -----------------------------
  ❌ Older codebases may still use class components
  ❌ Some advanced logic can become complex with multiple hooks
  ❌ No built-in lifecycle methods (need to use useEffect for lifecycle)

  However, in modern React, these cons are usually not a problem.
*/

function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>React Functional Component Tutorial</h1>
      <Counter />
    </div>
  );
}

export default App;