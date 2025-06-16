# 📦 Props in Depth: The Complete Guide

## Understanding Props in React

Props (short for properties) are how components communicate in React. They're like parameters you pass to a function, but specifically for React components.

### Key Characteristics:
- **One-way data flow**: Parent → Child only
- **Read-only**: Child components can't modify their props
- **Can be any JavaScript value**: Strings, numbers, objects, arrays, even functions!

## Passing and Accessing Props

### Basic Example:
```jsx
// Parent Component
function App() {
  return <UserProfile name="Sarah" age={28} occupation="Developer" />;
}

// Child Component (3 ways to access props)

// Method 1: Direct props object
function UserProfile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Job: {props.occupation}</p>
    </div>
  );
}

// Method 2: Destructuring in parameters (most common)
function UserProfile({ name, age, occupation }) {
  // Same JSX as above
}

// Method 3: Destructuring inside function
function UserProfile(props) {
  const { name, age, occupation } = props;
  // Same JSX as above
}
```

## Default Values for Props

Two ways to handle default props:

### 1. Default Parameters (Modern Approach)
```jsx
function UserProfile({
  name = "Anonymous",
  age = 18,
  occupation = "Unknown"
}) {
  // Component logic
}
```

### 2. defaultProps (Legacy Approach)
```jsx
function UserProfile({ name, age, occupation }) {
  // Component logic
}

UserProfile.defaultProps = {
  name: "Anonymous",
  age: 18,
  occupation: "Unknown"
};
```

## The Special `children` Prop

The `children` prop contains whatever is placed between a component's opening and closing tags:

```jsx
// Parent Component
function App() {
  return (
    <Alert>
      <strong>Important!</strong> This is a warning message.
    </Alert>
  );
}

// Child Component
function Alert({ children }) {
  return <div className="alert-box">{children}</div>;
}
```

## Prop Type Validation

Add type checking with PropTypes (especially useful in large teams):

```jsx
import PropTypes from 'prop-types';

function UserProfile({ name, age, hobbies }) {
  // Component logic
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  onUpdate: PropTypes.func
};
```

## Advanced Prop Patterns

### 1. Passing Objects as Props
```jsx
const userData = {
  name: "Alex",
  age: 32,
  preferences: { theme: "dark" }
};

<UserProfile user={userData} />
```

### 2. Function Props (Callbacks)
```jsx
function Parent() {
  const handleUpdate = (newName) => {
    console.log(`Name changed to ${newName}`);
  };

  return <Child onUpdate={handleUpdate} />;
}

function Child({ onUpdate }) {
  return <button onClick={() => onUpdate("New Name")}>Update</button>;
}
```

## Common Pitfalls for Beginners

1. **Modifying Props**: Never do `props.name = "New"` - props are read-only!
2. **Missing Props**: Always check for undefined or use default values
3. **Too Many Props**: If passing >5 props, consider restructuring your component

## Practical Exercise

Create a `ProductCard` component that accepts:
- `name` (string, required)
- `price` (number, required)
- `description` (string, optional)
- `onSale` (boolean, defaults to false)
- `children` for additional content

```jsx
// Your solution here
function ProductCard({ name, price, description, onSale = false, children }) {
  return (
    <div className="product-card">
      <h3>{name} {onSale && <span>SALE!</span>}</h3>
      <p>Price: ${price}</p>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}
```
```

```markdown
# 🧩 Component Composition: Building with Children

## Understanding Composition

Component composition is about building complex UIs by combining smaller, focused components. Think LEGO blocks!

## The `children` Prop Deep Dive

Every component automatically receives `children` if content is passed between its tags:

```jsx
// Parent
<Modal>
  <h2>Welcome!</h2>
  <p>Thanks for visiting our site.</p>
  <button>Close</button>
</Modal>

// Modal Implementation
function Modal({ children }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
}
```

## Composition Patterns

### 1. Container Components
```jsx
function PageLayout({ children }) {
  return (
    <div className="page">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// Usage
<PageLayout>
  <Article />
  <Comments />
</PageLayout>
```

### 2. Slot Pattern (Named Children)
```jsx
function Dashboard({ sidebar, content, footer }) {
  return (
    <div className="dashboard">
      <aside>{sidebar}</aside>
      <main>{content}</main>
      <footer>{footer}</footer>
    </div>
  );
}

// Usage
<Dashboard
  sidebar={<UserMenu />}
  content={<AnalyticsChart />}
  footer={<Copyright />}
/>
```

### 3. Render Props (Advanced)
```jsx
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMove}>
      {render(position)}
    </div>
  );
}

// Usage
<MouseTracker render={({ x, y }) => (
  <p>Mouse position: {x}, {y}</p>
)} />
```

## Real-World Example: Card Component

```jsx
function Card({ header, children, footer }) {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// Usage
<Card
  header={<h3>User Profile</h3>}
  footer={<button>Save Changes</button>}
>
  <img src="avatar.jpg" alt="User" />
  <p>Name: John Doe</p>
  <p>Email: john@example.com</p>
</Card>
```

## Benefits of Composition

1. **Reusability**: Build once, use everywhere
2. **Maintainability**: Easier to update individual pieces
3. **Flexibility**: Components can adapt to different contexts
4. **Readability**: Clear structure and relationships

## Anti-Patterns to Avoid

1. **"Prop Drilling"**: Passing props through many layers
   - Solution: Use Context API or state management
2. **Overly Complex Children**: Components with too many child responsibilities
   - Solution: Break into smaller components
3. **Ignoring Children**: Creating components that don't utilize the children prop when they should

## Composition Exercise

Create a `Tabs` component that accepts:
- An array of tab objects (`{ label, content }`)
- Renders clickable tabs showing their content

```jsx
function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button 
            key={index}
            onClick={() => setActiveTab(index)}
            className={index === activeTab ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

// Usage
<Tabs tabs={[
  { label: "Profile", content: <ProfileForm /> },
  { label: "Settings", content: <SettingsPanel /> },
  { label: "Messages", content: <MessageList /> }
]} />
```

## Advanced Tip: The `children` Prop Can Be Anything!

```jsx
// You can pass multiple elements, arrays, or functions
<DataFetcher>
  {(data) => data.map(item => <ListItem key={item.id} {...item} />)}
</DataFetcher>
```

Remember: Composition is React's superpower. Master it to build flexible, maintainable applications!

