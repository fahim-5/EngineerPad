
# React JSX Complete Guide

## 1. What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that:
- Lets you write HTML-like code in JavaScript
- Makes React components more readable
- Gets transformed into regular JavaScript
- NOT required, but highly recommended

**Example**: This JSX:
```jsx
<div className="greeting">Hello React!</div>
```

Gets compiled to:
```javascript
React.createElement('div', { className: 'greeting' }, 'Hello React')
```

## 2. JSX Syntax Basics

```jsx
function Greeting() {
  return (
    // JSX must have a single parent element
    <div className="container">
      <h1>Welcome to React</h1>
      <p>Let's learn JSX!</p>
      {/* This is a JSX comment */}
      <button onClick={() => console.log('Clicked!')}>
        Click Me
      </button>
    </div>
  )
}
```

## 3. Embedding Expressions in JSX

```jsx
function UserCard() {
  const userName = "Alice Smith"
  const age = 28
  const isPremium = true
  const website = "https://alice.com"
  
  return (
    <div className="user-card">
      {/* Embedding variables */}
      <h2>{userName}</h2>
      
      {/* Mathematical expressions */}
      <p>Next year, I'll be {age + 1}</p>
      
      {/* Ternary operator */}
      <p>Status: {isPremium ? "Premium User" : "Free User"}</p>
      
      {/* Function calls */}
      <p>Name uppercase: {userName.toUpperCase()}</p>
      
      {/* Using attributes dynamically */}
      <a href={website} target="_blank" rel="noopener">
        Visit Website
      </a>
      
      {/* Conditional rendering */}
      {isPremium && <div className="badge">Premium Member</div>}
    </div>
  )
}
```

## 4. JSX Tips and Common Mistakes

### Common mistakes and solutions

**❌ WRONG**: Using class instead of className
```jsx
<div class="container">...</div>
```

**✅ RIGHT**:
```jsx
<div className="container">...</div>
```

**❌ WRONG**: Not closing tags
```jsx
<img src="..." >
<br>
```

**✅ RIGHT**:
```jsx
<img src="..." />
<br />
```

**❌ WRONG**: Multiple root elements
```jsx
return (
  <h1>Title</h1>
  <p>Content</p>
)
```

**✅ RIGHT**: Use fragment or wrapper div
```jsx
return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
)
```

## 5. Important JSX Rules

1. All tags must be closed: `<input />`, `<br />`
2. Attributes use camelCase:
   - `onclick` → `onClick`
   - `tabindex` → `tabIndex`
3. Inline styles use objects:
   ```jsx
   <div style={{ color: 'red', fontSize: 20 }}>
   ```
4. Use `className` instead of `class`
5. Event handlers use function references:
   ```jsx
   <button onClick={handleClick}>
   ```
   (Not `onClick="handleClick()"`)
6. JavaScript expressions in `{}` must return a value

## 6. JSX Practice Example

```jsx
function WeatherWidget() {
  const temperature = 22
  const conditions = "Sunny"
  const wind = { speed: 15, direction: "NW" }
  
  return (
    <div className="weather-card">
      <h2>Weather Report</h2>
      <p>
        Current temperature:{" "}
        <span className="highlight">{temperature}°C</span>
      </p>
      <p>Conditions: {conditions} 🌞</p>
      <div className="wind-details">
        Wind: {wind.speed} km/h {wind.direction}
      </div>
      {temperature > 25 && (
        <p className="warning">Heat warning! Stay hydrated!</p>
      )}
    </div>
  )
}
```

## Key JSX Takeaways

1. JSX = JavaScript + XML-like syntax
2. Use `{}` to embed any JavaScript expression
3. Follow HTML-like syntax with React-specific rules
4. Always use camelCase for attributes
5. Components must return single parent element
6. JSX prevents XSS (cross-site scripting) by default

## How to Practice JSX

1. Create components with dynamic content
2. Try embedding different data types
3. Practice conditional rendering patterns
4. Experiment with inline styles
5. Fix broken JSX code intentionally

## Additional Resources

- [React JSX Documentation](https://reactjs.org/docs/introducing-jsx.html)
- [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [Babel JSX Transform](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx)