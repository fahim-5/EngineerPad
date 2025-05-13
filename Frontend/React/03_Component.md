
# React Components: Complete Guide

## Introduction to Components

Components are independent, reusable code blocks that:
1. Return JSX
2. Can receive props (inputs)
3. Maintain their own state (optional)
4. Can be nested and reused

## 1. Creating Components

### Functional Component (Modern Approach)
```jsx
function Header() {
  return <header>Welcome to My Website</header>;
}
```

### Arrow Function Component
```jsx
const Footer = () => {
  return <footer>© 2024 All rights reserved</footer>;
};
```

### Component with Props
```jsx
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

## 2. Using Components

### Parent Component Example
```jsx
const App = () => {
  return (
    <div>
      <Header />
      <Greeting name="Alice" />
      <MainContent />
      <Footer />
    </div>
  );
};
```

### Child Component Example
```jsx
const MainContent = () => {
  return (
    <main>
      <p>This is the main content area</p>
      <Button label="Click Me" />
      <Button label="Learn More" variant="secondary" />
    </main>
  );
};
```

## 3. Component with Props

### Button Component with Destructured Props
```jsx
const Button = (props) => {
  const { label, variant = 'primary' } = props;
  const buttonClass = `button ${variant}-button`;
  return <button className={buttonClass}>{label}</button>;
};
```

## 4. Component Composition

### User Card Composition Example
```jsx
const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <Avatar image={user.photo} />
      <UserInfo name={user.name} role={user.role} />
      <ContactButton email={user.email} />
    </div>
  );
};

const Avatar = ({ image }) => {
  return <img src={image} alt="User avatar" className="avatar" />;
};

const UserInfo = ({ name, role }) => {
  return (
    <div className="user-info">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};
```

## 5. Component Best Practices

### 5.1 Single Responsibility Principle
```jsx
const ProductImage = ({ src }) => <img src={src} alt="Product" />;
const ProductPrice = ({ price }) => <p>${price.toFixed(2)}</p>;
```

### 5.2 Default Props
```jsx
const Rating = ({ stars = 5 }) => {
  return <div>Rating: {'★'.repeat(stars)}</div>;
};
```

### 5.3 Prop Validation
```bash
npm install prop-types
```

```jsx
import PropTypes from 'prop-types';

const Profile = ({ name, age }) => (
  <div>
    <h2>{name}</h2>
    <p>Age: {age}</p>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
```

## 6. Component Types

### Presentational vs Container Components
```jsx
// Presentational (Dumb Component)
const Message = ({ text }) => <div className="message">{text}</div>;

// Container (Smart Component)
const UserList = () => {
  const [users] = useState(['Alice', 'Bob', 'Charlie']);
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
};
```

## 7. Component Organization

Recommended file structure:
```
components/
  Button/
    Button.jsx
    Button.css
  Header/
    Header.jsx
    index.js
  Card/
    Card.jsx
    CardItem.jsx
```

## 8. Common Mistakes

### ❌ Incorrect component naming
```jsx
// Wrong
const myComponent = () => {...}

// Correct
const CorrectComponent = () => {...}
```

### ❌ Forgetting to return JSX
```jsx
// Wrong (missing return)
const BrokenComponent = () => {
  <div>This won't render</div>;
};

// Correct
const FixedComponent = () => {
  return <div>This will render</div>;
};
```

## 9. Advanced Component Patterns

### Higher-Order Component (HOC)
```jsx
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Component props:', props);
    return <WrappedComponent {...props} />;
  };
};

const EnhancedButton = withLogger(Button);
```

## 10. Complete Component Example

### Profile Page Implementation
```jsx
const ProfilePage = () => {
  const user = {
    name: 'Sarah Johnson',
    bio: 'Frontend Developer',
    skills: ['JavaScript', 'React', 'CSS']
  };

  return (
    <div className="profile-page">
      <Header />
      <main>
        <UserCard user={user} />
        <SkillList skills={user.skills} />
      </main>
      <Footer />
    </div>
  );
};

const SkillList = ({ skills }) => {
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </ul>
  );
};

const SkillItem = ({ skill }) => {
  return <li className="skill-item">{skill}</li>;
};
```

## Key Takeaways

1. Components should be small and focused
2. Use props for configuration
3. Compose components to build complex UIs
4. Follow consistent naming and organization
5. Validate props for better debugging
6. Separate presentational and container logic

## Next Steps

1. Practice creating component hierarchies
2. Learn about React hooks for state management
3. Explore context API for global state
4. Study performance optimization techniques.