# 🛠️ Working with Attributes and Children in JSX

## 📌 HTML Attributes in JSX

### Key Differences from HTML:
1. **camelCase naming** instead of lowercase
   ```jsx
   <div className="container" tabIndex={1}>
   ```
   - `class` → `className`
   - `for` → `htmlFor`
   - `onclick` → `onClick`

2. **Dynamic values** with `{}`
   ```jsx
   <input type="text" disabled={isDisabled} />
   ```

3. **Style attribute** takes an object
   ```jsx
   <div style={{ color: 'red', fontSize: '20px' }}></div>
   ```

## 🧒 Working with Children

### 1. Simple Text Children
```jsx
<button>Click Me!</button>
```

### 2. Nested Components
```jsx
<Modal>
  <Header />
  <Body />
  <Footer />
</Modal>
```

### 3. Expression Children
```jsx
<Title>{user.name}'s Profile</Title>
```

### 4. Multiple Children (Fragments)
```jsx
<>
  <li>Item 1</li>
  <li>Item 2</li>
</>
```

## 🔄 Special Props

### 1. `children` Prop
Access nested content via `props.children`:
```jsx
function Card(props) {
  return <div className="card">{props.children}</div>;
}

// Usage:
<Card>
  <h2>Title</h2>
  <p>Content</p>
</Card>
```

### 2. Spread Attributes
Pass all props at once:
```jsx
function Input(props) {
  return <input {...props} />;
}
```

## ⚠️ Important Notes

1. **Boolean Attributes**
   ```jsx
   <input type="checkbox" checked={isChecked} />
   ```

2. **Dangerously Set HTML**
   ```jsx
   <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
   ```

3. **Key Prop** for lists:
   ```jsx
   {items.map(item => (
     <li key={item.id}>{item.name}</li>
   ))}
   ```

## 🎯 Best Practices

1. **Always close tags** (even self-closing)
   ```jsx
   <img src="..." alt="..." />
   ```

2. **Use semantic HTML** attributes
   ```jsx
   <button aria-label="Close">X</button>
   ```

3. **Keep attribute values readable**
   ```jsx
   // Good:
   <Component 
     propA={valueA}
     propB={valueB}
   />

   // Avoid:
   <Component propA={valueA} propB={valueB}/>
   ```

4. **Destructure props** for clarity
   ```jsx
   function Avatar({ src, alt, size }) {
     return <img src={src} alt={alt} width={size} />;
   }
   ```

Understanding JSX attributes and children is crucial for building flexible, reusable components in React!
