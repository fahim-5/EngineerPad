# React Props: Complete Tutorial

## Introduction to Props
Props (short for properties) are how components receive data from their parent components. They are read-only and help make components reusable.

## 1. Basic Props Example

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

**How this works:**
- Parent component passes data via attributes (`name="Sarah"`)
- Child component receives it as a `props` object
- Access values with `props.name`

## 2. Multiple Props Example

```jsx
function UserCard(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h2>{props.username}</h2>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
      {props.isAdmin && <p style={{color: 'red'}}>ADMIN USER</p>}
    </div>
  );
}
```

**Key features:**
- Passing multiple props of different types:
  - String (`username`, `email`)
  - Number (`age`)
  - Boolean (`isAdmin`)
- Conditional rendering based on props

## 3. Passing Functions as Props

```jsx
function Button(props) {
  return (
    <button 
      onClick={props.onClickHandler}
      style={{
        backgroundColor: props.color || '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {props.text}
    </button>
  );
}
```

**Important notes:**
- Passing functions allows child-to-parent communication
- The child invokes the function, parent defines it
- Default values with `||` operator (`color || '#4CAF50'`)

## 4. Props with Children

```jsx
function Card(props) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </div>
  );
}
```

**Special prop: children**
- Content between component tags becomes `props.children`
- Allows for composition pattern
- Very common in UI libraries

## 5. Props Destructuring

```jsx
function Product({ name, price, discount = 0 }) {
  const finalPrice = price - (price * discount / 100);
  
  return (
    <div>
      <h3>{name}</h3>
      <p>
        Price: ${price}
        {discount > 0 && (
          <span style={{color: 'green'}}>
            {' '}({discount}% off! Final price: ${finalPrice.toFixed(2)})
          </span>
        )}
      </p>
    </div>
  );
}
```

**Modern approach:**
- Destructure props in parameters
- Set default values (`discount = 0`)
- Cleaner component code

## Complete App Example

```jsx
function App() {
  const handleClick = () => {
    alert('Button clicked from parent component!');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>React Props Tutorial</h1>
      
      <section>
        <h2>1. Basic Props</h2>
        <Greeting name="Sarah" />
        <Greeting name="John" />
      </section>
      
      <section>
        <h2>2. Multiple Props</h2>
        <UserCard 
          username="johndoe" 
          email="john@example.com" 
          age={28} 
          isAdmin={true} 
        />
      </section>
      
      <section>
        <h2>3. Function Props</h2>
        <Button 
          text="Click Me" 
          color="#3498db" 
          onClickHandler={handleClick} 
        />
      </section>
      
      <section>
        <h2>4. Children Props</h2>
        <Card title="User Information">
          <p>This content is passed as children</p>
        </Card>
      </section>
      
      <section>
        <h2>5. Props Destructuring</h2>
        <Product name="Laptop" price={999} discount={15} />
      </section>
    </div>
  );
}
```

## Key Props Concepts

1. **One-Way Data Flow**: Props only go from parent to child
2. **Read-Only**: Components should never modify their props
3. **Type Checking**: Use PropTypes or TypeScript for validation
4. **Default Values**: Set fallback values for optional props
5. **Composition**: Use `children` for flexible component structures

## Best Practices

✅ **Destructure props** for cleaner code  
✅ **Use default values** for optional props  
✅ **Validate props** with PropTypes or TypeScript  
✅ **Keep components pure** (don't modify props)  
✅ **Use meaningful names** for props  

## Common Pitfalls

❌ **Modifying props** directly (they should be immutable)  
❌ **Too many props** (consider breaking into smaller components)  
❌ **Deeply nested prop drilling** (use Context API instead)  
❌ **Unnecessary props** (pass only what the component needs)  

## Advanced Patterns

1. **Render Props**: Share code between components using a prop that is a function
2. **Prop Getters**: Functions that return props for common use cases
3. **Compound Components**: Components that work together and share state

```jsx
// Render Props Example
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```

## Conclusion

Props are fundamental to React's component architecture. Mastering props enables you to:
- Build reusable components
- Create flexible component hierarchies
- Manage data flow in your application
- Implement advanced patterns like composition

Practice passing different types of props and experiment with composition patterns to become proficient with React props.