# ⚠️ Common JSX Mistakes and Syntax Pitfalls

## 🔥 Top JSX Errors Developers Make

### 1. **Forgetting to Close Tags**
```jsx
// ❌ Wrong
<div> 
  <img src="image.png">
  
// ✅ Correct
<div>
  <img src="image.png" />
</div>
```

### 2. **Using JavaScript Keywords as Props**
```jsx
// ❌ Wrong (uses 'class' keyword)
<div class="header">

// ✅ Correct
<div className="header">
```

### 3. **Incorrect Event Handler Syntax**
```jsx
// ❌ Wrong (calls function immediately)
<button onClick={handleClick()}>

// ✅ Correct
<button onClick={handleClick}>
```

### 4. **Missing Keys in Lists**
```jsx
// ❌ Wrong (missing key)
{items.map(item => <li>{item}</li>)}

// ✅ Correct
{items.map((item, index) => <li key={index}>{item}</li>)}
```

## 💀 Dangerous JSX Patterns

### 1. **Nested Ternary Operators**
```jsx
// ❌ Unreadable
{conditionA 
  ? componentA 
  : conditionB 
    ? componentB 
    : componentC}
```

### 2. **Overusing Inline Functions**
```jsx
// ❌ Creates new function each render
<button onClick={() => handleClick(id)}>

// ✅ Better (memoize if needed)
<button onClick={handleClick}>
```

### 3. **Direct Style Objects**
```jsx
// ❌ Creates new object each render
<div style={{ color: 'red' }}>

// ✅ Extract to constant
const styles = { color: 'red' };
<div style={styles}>
```

## 🧠 JSX Gotchas

### 1. **Boolean Attributes**
```jsx
// ❌ Will render disabled="false"
<button disabled={false}>

// ✅ Use null/undefined to remove
<button disabled={null}>
```

### 2. **Number Strings vs Numbers**
```jsx
// ❌ Passes string "2"
<input maxLength="2">

// ✅ Passes number 2
<input maxLength={2}>
```

### 3. **HTML Entity Issues**
```jsx
// ❌ Renders literally
<div>First &middot; Second</div>

// ✅ Use Unicode or JS
<div>First {'\u00B7'} Second</div>
```

## 🛡️ Protection Against Mistakes

### 1. **Use ESLint with React Rules**
```json
{
  "extends": ["plugin:react/recommended"]
}
```

### 2. **Type Checking with PropTypes**
```jsx
import PropTypes from 'prop-types';

Component.propTypes = {
  name: PropTypes.string.isRequired
};
```

### 3. **React Strict Mode**
```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

## 💡 Pro Tips

1. **Use Fragments for multiple elements**
   ```jsx
   // ✅ Cleaner than div soup
   <>
     <Header />
     <Main />
   </>
   ```

2. **Destructure props for clarity**
   ```jsx
   // ✅ Clearer usage
   function Component({ title, children }) {
     return <div>{title}{children}</div>;
   }
   ```

3. **Keep JSX expressions simple**
   ```jsx
   // ✅ Extract complex logic
   const shouldShow = condition && otherCondition;
   {shouldShow && <Component />}
   ```

Understanding these pitfalls will help you write cleaner, more performant JSX code and avoid common React anti-patterns!
