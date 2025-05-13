// React Tutorial: Default Props and Children Props

// =============================================
// 1. Default Props
// =============================================

/*
Default props allow you to specify default values for your component's props.
If a prop isn't passed to the component, the default value will be used instead.

This is useful for:
- Making props optional
- Providing fallback values
- Making components more robust
*/

// Example 1: Functional Component with Default Props
function WelcomeMessage({ username, message }) {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>{message}</p>
    </div>
  );
}

// Setting default props for the WelcomeMessage component
WelcomeMessage.defaultProps = {
  username: "Guest",      // Default if username prop is not provided
  message: "We're glad to see you!"  // Default if message prop is not provided
};

// Example usage:
// <WelcomeMessage /> would use both defaults
// <WelcomeMessage username="Alice" /> would use default message
// <WelcomeMessage message="Hello there!" /> would use default username

// Example 2: Class Component with Default Props
class ProductCard extends React.Component {
  render() {
    const { name, price, inStock } = this.props;
    return (
      <div className="product">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>{inStock ? "Available" : "Out of stock"}</p>
      </div>
    );
  }
}

// Setting default props for the ProductCard component
ProductCard.defaultProps = {
  name: "Unnamed Product",
  price: 0,
  inStock: false
};

// Example usage:
// <ProductCard /> would use all defaults
// <ProductCard name="Laptop" price={999} /> would use default inStock value

// =============================================
// 2. Children Props
// =============================================

/*
The children prop is a special prop that allows you to pass components or elements
as children to other components. It's what appears between the opening and closing
tags of a component.

This is useful for:
- Creating wrapper components
- Building layout components
- Creating reusable containers
*/

// Example 1: Basic Children Usage
function Card({ children }) {
  return (
    <div className="card" style={{ 
      border: '1px solid #ccc',
      padding: '20px',
      margin: '10px',
      borderRadius: '5px'
    }}>
      {children}
    </div>
  );
}

// Example usage:
/*
<Card>
  <h2>This is a title</h2>
  <p>This is some content inside the card</p>
</Card>
*/

// Example 2: Multiple Children with Additional Props
function TabContainer({ title, children }) {
  return (
    <div className="tab-container">
      <h3>{title}</h3>
      <div className="tab-content">
        {children}
      </div>
    </div>
  );
}

// Example usage:
/*
<TabContainer title="User Profile">
  <p>Name: John Doe</p>
  <p>Email: john@example.com</p>
</TabContainer>
*/

// Example 3: Children with Function as Child
// (Advanced pattern - useful for render props)
function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return children({ data, loading });
}

// Example usage:
/*
<DataFetcher url="/api/user/1">
  {({ data, loading }) => (
    loading ? <p>Loading...</p> : <UserProfile user={data} />
  )}
</DataFetcher>
*/

// =============================================
// Combined Example: Using Both Concepts Together
// =============================================

function Panel({ title, children, isCollapsible }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    if (isCollapsible) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="panel" style={{ 
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '20px'
    }}>
      <div 
        className="panel-header" 
        onClick={toggleExpand}
        style={{ 
          padding: '10px 15px',
          backgroundColor: '#f5f5f5',
          cursor: isCollapsible ? 'pointer' : 'default'
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        {isCollapsible && (
          <span>{isExpanded ? '▼' : '►'}</span>
        )}
      </div>
      {isExpanded && (
        <div className="panel-body" style={{ padding: '15px' }}>
          {children}
        </div>
      )}
    </div>
  );
}

// Setting default props
Panel.defaultProps = {
  title: "Panel Title",
  isCollapsible: true
};

// Example usage:
/*
<Panel title="User Settings">
  <form>
    <label>Theme:</label>
    <select>
      <option>Light</option>
      <option>Dark</option>
    </select>
  </form>
</Panel>

<Panel isCollapsible={false}>
  <p>This content cannot be collapsed</p>
</Panel>
*/

// =============================================
// Best Practices
// =============================================

/*
Default Props:
1. Use for optional props that need sensible defaults
2. Don't use for required props - instead use PropTypes or TypeScript
3. Keep defaults simple and predictable

Children Props:
1. Use when you need to create wrapper/layout components
2. Consider the children-as-function pattern for more flexibility
3. Remember children can be any valid React node (components, elements, strings, etc.)
4. You can use React.Children utilities to manipulate children if needed
*/

// =============================================
// Summary
// =============================================

/*
Default Props:
- Provide fallback values for props
- Make components more resilient
- Defined using component.defaultProps

Children Props:
- Special prop that contains content between component tags
- Enables composition patterns
- Can be any React node or even a function
*/

// End of Tutorial