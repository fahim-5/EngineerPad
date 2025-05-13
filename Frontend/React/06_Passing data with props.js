// PropsTutorial.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// ======================
// 1. BASIC PROPS EXAMPLE
// ======================
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

/*
  How this works:
  - Parent component passes data via attributes (name="Sarah")
  - Child component receives it as a props object
  - Access values with props.name
*/

// ======================
// 2. MULTIPLE PROPS EXAMPLE
// ======================
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

/*
  Key features:
  - Passing multiple props of different types
  - String (username, email)
  - Number (age)
  - Boolean (isAdmin)
  - Conditional rendering based on props
*/

// ======================
// 3. PASSING FUNCTIONS AS PROPS
// ======================
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

/*
  Important notes:
  - Passing functions allows child-to-parent communication
  - The child invokes the function, parent defines it
  - Default values with || operator (color || '#4CAF50')
*/

// ======================
// 4. PROPS WITH CHILDREN
// ======================
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

/*
  Special prop: children
  - Content between component tags becomes props.children
  - Allows for composition pattern
  - Very common in UI libraries
*/

// ======================
// 5. PROPS DESTRUCTURING
// ======================
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

/*
  Modern approach:
  - Destructure props in parameters
  - Set default values (discount = 0)
  - Cleaner component code
*/

// ======================
// MAIN APP COMPONENT
// ======================
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
        <UserCard 
          username="janedoe" 
          email="jane@example.com" 
          age={24} 
          isAdmin={false} 
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
          <p>This is content passed as children</p>
          <ul>
            <li>Custom content</li>
            <li>Can be any JSX</li>
            <li>Very flexible pattern</li>
          </ul>
        </Card>
      </section>
      
      <section>
        <h2>5. Props Destructuring</h2>
        <Product name="Laptop" price={999} discount={15} />
        <Product name="Mouse" price={25} />
      </section>
    </div>
  );
}

// ======================
// RENDER THE APP
// ======================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);