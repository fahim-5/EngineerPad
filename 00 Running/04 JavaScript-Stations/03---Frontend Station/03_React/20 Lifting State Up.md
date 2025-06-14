### **20. Lifting State Up**  

#### **What is "Lifting State Up"?**  
In React, **"lifting state up"** means moving shared state from a child component to its **lowest common parent** to enable:  
✅ **Data synchronization** between sibling components.  
✅ **Single source of truth** (avoiding duplicate state).  

---

### **When Do You Need It?**  
- Two or more components **need to share the same state**.  
- A child component **triggers changes** that should affect siblings.  

**Example Scenario:**  
A temperature converter (Celsius ↔ Fahrenheit) where both inputs must stay in sync.  

---

### **Step-by-Step Implementation**  

#### **1. Problem: Duplicate State (Bad Practice)**  
```jsx
function CelsiusInput() {
  const [celsius, setCelsius] = useState(0); // ❌ Local state
  return <input value={celsius} onChange={(e) => setCelsius(e.target.value)} />;
}

function FahrenheitInput() {
  const [fahrenheit, setFahrenheit] = useState(32); // ❌ Local state
  return <input value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} />;
}
```
**Issue:** Changing one input **doesn’t update the other** (state is isolated).  

---

#### **2. Solution: Lift State to Parent**  
```jsx
function TemperatureConverter() {
  // ✅ State lifted to parent
  const [temperature, setTemperature] = useState({ value: 0, unit: 'celsius' });

  const handleCelsiusChange = (value) => {
    setTemperature({ value, unit: 'celsius' });
  };

  const handleFahrenheitChange = (value) => {
    setTemperature({ value, unit: 'fahrenheit' });
  };

  return (
    <div>
      <CelsiusInput
        value={temperature.unit === 'celsius' ? temperature.value : (temperature.value - 32) * 5/9}
        onChange={handleCelsiusChange}
      />
      <FahrenheitInput
        value={temperature.unit === 'fahrenheit' ? temperature.value : (temperature.value * 9/5) + 32}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
}
```

**Key Changes:**  
- Parent (`TemperatureConverter`) **owns the state**.  
- Children (`CelsiusInput`, `FahrenheitInput`) receive **values and callbacks via props**.  

---

### **3. Child Components (Stateless, Controlled)**  
```jsx
function CelsiusInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}

function FahrenheitInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}
```
**Note:** They are now **controlled components** (fully driven by parent props).  

---

### **Why This Works**  
- **Single Source of Truth:** State is centralized in the parent.  
- **Data Flow:** Changes bubble up via callbacks, then propagate down to siblings.  
- **Consistency:** Both inputs reflect the same temperature in different units.  

---

### **When to Lift State?**  
✔ **Shared State:** Multiple components need the same data.  
✔ **Sibling Communication:** Components can’t talk directly (React enforces **unidirectional data flow**).  

---

### **Alternatives**  
- **Context API:** For deep component trees (avoid excessive prop drilling).  
- **State Management Libraries (Redux, Zustand):** For global state.  

---

### **Key Takeaways**  
1. **Identify shared state** and move it to the **lowest common parent**.  
2. Pass state **down via props** and updates **up via callbacks**.  
3. Keep components **stateless** when possible (easier to debug).  


> *“Lifting state turns messy local state into a clean, centralized flow.”* 🔄