### **21. Managing Multiple State Variables**  

As React apps grow, you often need to track **multiple pieces of state** in a component. Here’s how to handle them efficiently:

---

## **1. Basic Approach (Multiple `useState` Hooks)**
The simplest way is using separate `useState` calls:

```jsx
function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  return (
    <form>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
    </form>
  );
}
```
**Pros:**  
✅ Clear separation of concerns  
✅ Easy to track individual state updates  

**Cons:**  
❌ Can get verbose with many fields  

---

## **2. Grouping Related State (Object State)**
When state values are related, group them in a single object:

```jsx
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const handleChange = (e) => {
    setUser({
      ...user, // Spread previous state
      [e.target.name]: e.target.value // Dynamic property update
    });
  };

  return (
    <form>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        name="age"
        type="number"
        value={user.age}
        onChange={handleChange}
      />
    </form>
  );
}
```
**Key Notes:**  
- Use **spread operator (`...`)** to preserve unchanged state  
- Add `name` attributes to inputs matching state keys  

---

## **3. When to Use Which Approach?**

| **Multiple `useState`** | **Single Object State** |
|-------------------------|------------------------|
| Independent values | Related data fields |
| Simple components | Complex forms |
| Need individual updates | Prefer single handler |

---

## **4. Advanced: `useReducer` for Complex State**
For state with intricate update logic (like multi-step forms):

```jsx
const initialState = { name: '', email: '', age: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  // ... form JSX similar to above
}
```

---

## **5. Performance Considerations**
- **Object state** causes complete re-renders when any field changes  
- For very large forms, consider:
  - Breaking into sub-components  
  - Using state management libraries  

---

## **Key Takeaways**
1. Start simple with multiple `useState` hooks  
2. Group related state into objects when logical  
3. Use `useReducer` for complex state transitions  
4. Always preserve immutability when updating state  
 

> *"Like a chef organizing ingredients - keep your state tidy and your components will cook beautifully!"* 👨🍳
