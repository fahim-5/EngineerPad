// =============================================
// B1. What is JSX?
// =============================================
/*
JSX (JavaScript XML) is syntax extension for JavaScript that:
- Lets you write HTML-like code in JavaScript
- Makes React components more readable
- Gets transformed into regular JavaScript
- NOT required, but highly recommended

Example: This JSX:
<div className="greeting">Hello React!</div>

Gets compiled to:
React.createElement('div', { className: 'greeting' }, 'Hello React')
*/

// =============================================
// B2. JSX Syntax Basics
// =============================================
// Basic component example
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

// =============================================
// B3. Embedding Expressions in JSX
// =============================================
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

// =============================================
// B4. JSX Tips and Common Mistakes
// =============================================
// Common mistakes and solutions

// ❌ WRONG: Using class instead of className
// <div class="container">...</div>

// ✅ RIGHT:
// <div className="container">...</div>

// ❌ WRONG: Not closing tags
// <img src="..." >
// <br>

// ✅ RIGHT:
// <img src="..." />
// <br />

// ❌ WRONG: Multiple root elements
/*
return (
  <h1>Title</h1>
  <p>Content</p>
)
*/

// ✅ RIGHT: Use fragment or wrapper div
/*
return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
)
*/

// =============================================
// B5. Important JSX Rules
// =============================================
/*
1. All tags must be closed: <input />, <br />
2. Attributes use camelCase:
   - onclick → onClick
   - tabindex → tabIndex
3. Inline styles use objects:
   <div style={{ color: 'red', fontSize: 20 }}>
4. Use className instead of class
5. Event handlers use function references:
   <button onClick={handleClick}>
   (Not onClick="handleClick()")
6. JavaScript expressions in {} must return a value
*/

// =============================================
// B6. JSX Practice Example
// =============================================
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

// =============================================
// Key JSX Takeaways
// =============================================
/*
1. JSX = JavaScript + XML-like syntax
2. Use {} to embed any JavaScript expression
3. Follow HTML-like syntax with React-specific rules
4. Always use camelCase for attributes
5. Components must return single parent element
6. JSX prevents XSS (cross-site scripting) by default
*/

// =============================================
// How to Practice JSX
// =============================================
/*
1. Create components with dynamic content
2. Try embedding different data types
3. Practice conditional rendering patterns
4. Experiment with inline styles
5. Fix broken JSX code intentionally
*/io