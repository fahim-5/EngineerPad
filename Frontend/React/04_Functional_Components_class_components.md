
# React Components: Functional vs Class Comparison

## Introduction

Two ways to create React components:
1. **Functional Components** (Modern approach with Hooks)
2. **Class Components** (Traditional approach with ES6 classes)

## 1. Functional Components

### Basic Functional Component
```jsx
function WelcomeFunctional(props) {
  return <h1>Hello, {props.name} (Functional)</h1>;
}
```

### Functional Component with Hooks
```jsx
import { useState, useEffect } from 'react';

function CounterFunctional() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## 2. Class Components

### Basic Class Component
```jsx
import { Component } from 'react';

class WelcomeClass extends Component {
  render() {
    return <h1>Hello, {this.props.name} (Class)</h1>;
  }
}
```

### Class Component with State and Lifecycle
```jsx
class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}
```

## 3. Side-by-Side Comparison

### Functional Version
```jsx
function ToggleFunctional() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>Toggle is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle
      </button>
    </div>
  );
}
```

### Class Version
```jsx
class ToggleClass extends Component {
  state = { isOn: false };

  handleClick = () => {
    this.setState({ isOn: !this.state.isOn });
  };

  render() {
    return (
      <div>
        <p>Toggle is {this.state.isOn ? 'ON' : 'OFF'}</p>
        <button onClick={this.handleClick}>
          Toggle
        </button>
      </div>
    );
  }
}
```

## 4. Key Differences

| Feature            | Functional          | Class               |
|--------------------|---------------------|---------------------|
| Syntax             | Function            | ES6 class           |
| State Management   | useState Hook       | this.state          |
| Lifecycle Methods  | useEffect Hook      | componentDidMount   |
|                    |                     | componentDidUpdate  |
| Props Access       | props parameter     | this.props          |
| Performance        | Slightly better     | Slightly heavier    |
| Readability        | More concise        | More verbose        |
| Modern Usage       | Recommended         | Legacy codebases    |

## 5. When to Use Which

**Use Functional Components When:**
- Building new components
- Need hooks
- Want simpler code
- Need better performance

**Use Class Components When:**
- Maintaining legacy code
- Need error boundaries
- Required by libraries
- Need `getSnapshotBeforeUpdate` lifecycle

## 6. Converting Class to Functional

### Class Component
```jsx
class UserInfoClass extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.username}</h2>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}
```

### Converted Functional Component
```jsx
function UserInfoFunctional({ username, age }) {
  return (
    <div>
      <h2>{username}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

## 7. Common Mistakes

### Functional Component Mistake
```jsx
// ❌ Forgetting to use hooks for state
function BrokenComponent() {
  let count = 0; // Won't trigger re-render
  return <button onClick={() => count++}>{count}</button>;
}
```

### Class Component Mistake
```jsx
// ❌ Forgetting to bind methods
class BrokenButton extends Component {
  handleClick() {
    console.log('Clicked'); // this will be undefined
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

## 8. Best Practices

**For Functional Components:**
- Use arrow functions for consistency
- Destructure props immediately
- Keep hooks at the top
- Use multiple effects instead of one big

**For Class Components:**
- Bind event handlers in constructor
- Use `static getDerivedStateFromProps` carefully
- Split complex lifecycle methods
- Avoid unnecessary re-renders with `shouldComponentUpdate`

## 9. Key Takeaways

1. Functional components are simpler and preferred for new code
2. Class components still work but are considered legacy
3. Hooks replaced lifecycle methods in functional components
4. Both can achieve same functionality
5. Functional components have less boilerplate
6. Understanding both helps maintain legacy projects

## 10. Final Comparison Example

### Functional Component with Hooks
```jsx
function ClockFunctional() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return <div>Functional Time: {time.toLocaleTimeString()}</div>;
}
```

### Class Component Equivalent
```jsx
class ClockClass extends Component {
  state = { time: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({ time: new Date() });
  };

  render() {
    return <div>Class Time: {this.state.time.toLocaleTimeString()}</div>;
  }
}
```

## Conclusion

While functional components with hooks are now the recommended approach, understanding both paradigms is valuable for working with React codebases of different ages and styles. The React ecosystem has largely moved to functional components, but class components remain important for maintaining existing applications.