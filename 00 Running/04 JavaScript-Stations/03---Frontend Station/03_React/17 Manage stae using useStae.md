# Managing State with `useState` in React

The `useState` hook is React's built-in solution for managing state in functional components. Here's how to use it effectively:

## Basic Usage

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Key Concepts

1. **Initialization**: `useState(initialValue)` takes the initial state value
2. **Returns an array**: `[currentState, setterFunction]`
3. **Naming convention**: Use array destructuring with names like `[thing, setThing]`

## Updating State

### Basic Update
```jsx
setCount(count + 1);
```

### Functional Update (when new state depends on previous state)
```jsx
setCount(prevCount => prevCount + 1);
```

### Object State
When state is an object, remember to spread previous state:

```jsx
const [user, setUser] = useState({ name: '', age: 0 });

// Correct update:
setUser(prev => ({ ...prev, name: 'Alice' }));

// Incorrect (would lose age property):
setUser({ name: 'Alice' });
```

### Array State
Similarly for arrays:

```jsx
const [items, setItems] = useState([]);

// Add item
setItems(prev => [...prev, newItem]);

// Remove item
setItems(prev => prev.filter(item => item.id !== idToRemove));
```

## Best Practices

1. **Don't mutate state directly**: Always use the setter function
2. **Multiple state variables**: Split unrelated state into multiple `useState` calls
3. **Initialization function**: For expensive initial computations, pass a function

```jsx
// This only runs once during initial render
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation();
  return initialState;
});
```

4. **Batching updates**: React batches state updates that occur in the same event handler

## Example with Multiple State Variables

```jsx
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(30);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(Number(e.target.value))} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

Remember that `useState` is perfect for local component state. For more complex state management across components, you might want to look at `useReducer` or context API.
