# 📊 Embedding JavaScript Expressions in JSX

## 🔍 What is Expression Embedding?

JSX allows you to embed any valid JavaScript expression within curly braces `{}`. This powerful feature bridges JavaScript logic with your UI markup.

```jsx
const name = "Alex";
const element = <h1>Hello, {name}!</h1>;
```

## 💡 Key Features:

1. **Any valid JS expression** works inside `{}`
2. **Not statements** (if/for don't work directly)
3. **Can be nested** in attributes/text/content
4. **Automatically escaped** for security

## 🛠️ Common Use Cases:

### 1. Displaying Variables
```jsx
const user = { name: "Sam", age: 28 };
<p>{user.name} is {user.age} years old</p>
```

### 2. Executing Functions
```jsx
function formatName(user) {
  return `${user.first} ${user.last}`;
}

<h2>{formatName(currentUser)}</h2>
```

### 3. Conditional Rendering
```jsx
<div>
  {isLoggedIn ? <LogoutButton /> : <LoginButton />}
</div>
```

### 4. Array Operations
```jsx
<ul>
  {items.map(item => <li key={item.id}>{item.text}</li>)}
</ul>
```

### 5. Inline Styles
```jsx
<div style={{ color: error ? 'red' : 'green' }}>
  Status: {status}
</div>
```

## 🚫 Limitations to Know:

1. **No statements**:
   ```jsx
   // ❌ Wrong
   { if (condition) return <ComponentA /> else return <ComponentB /> }
   
   // ✅ Correct
   { condition ? <ComponentA /> : <ComponentB /> }
   ```

2. **No objects directly** (except styles):
   ```jsx
   // ❌ Wrong
   <div>{{a: 1, b: 2}}</div>
   ```

3. **Comments need braces**:
   ```jsx
   {/* This is a valid comment */}
   ```

## 🎯 Best Practices:

1. **Keep expressions simple** - move complex logic outside JSX
2. **Use proper keys** when rendering lists
3. **Memoize expensive calculations** to avoid re-renders
4. **Destructure props** for cleaner expressions

## ⚡ Performance Tip:

```jsx
// ❌ Recalculates on every render
<div>{expensiveCalculation(props)}</div>

// ✅ Memoize expensive operations
const result = useMemo(() => expensiveCalculation(props), [props]);
<div>{result}</div>
```

Expression embedding is what makes JSX so powerful - it lets you seamlessly mix JavaScript logic with your UI markup while keeping your code readable and maintainable.
