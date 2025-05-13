# React Functional Components Tutorial

## Functional Components in React

Functional components are JavaScript functions that return UI (JSX). They use Hooks like `useState` and `useEffect` to handle state and side effects.

### Example: Simple Counter Component

```jsx
import React, { useState, useEffect } from 'react';

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
```

## Key Features

1. **`useState` Hook**:
   - Adds state to functional components
   - Returns a stateful value and a function to update it
   - Example: `const [count, setCount] = useState(0);`

2. **`useEffect` Hook**:
   - Handles side effects (data fetching, subscriptions, etc.)
   - Runs after render
   - Can specify dependencies to control when it runs

## Complete Example Usage

```jsx
function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>React Functional Component Tutorial</h1>
      <Counter />
    </div>
  );
}

export default App;
```

## Pros of Functional Components

✅ **Simpler syntax** - Just a function that returns JSX  
✅ **Can use Hooks** (`useState`, `useEffect`, `useContext`, etc.)  
✅ **Easier to test and reuse**  
✅ **Better performance** (React optimizes them)  
✅ **Encouraged in modern React development**  

## Cons of Functional Components

❌ **Older codebases** may still use class components  
❌ **Complex logic** can become challenging with multiple hooks  
❌ **No built-in lifecycle methods** (need to use `useEffect` for lifecycle)  

## Best Practices

1. Keep components small and focused
2. Use multiple `useEffect` hooks instead of one complex one
3. Name your hooks consistently (prefix with "use")
4. Place hooks at the top of your component
5. Clean up effects when needed (return cleanup function from `useEffect`)

## When to Use Functional Components

- **New projects** (default choice in modern React)
- **When you need hooks**
- **For simpler, more readable components**
- **When performance matters**

## Next Steps

1. Learn more about React Hooks
2. Explore custom hooks for reusable logic
3. Practice converting class components to functional
4. Learn about the Context API with functional components
