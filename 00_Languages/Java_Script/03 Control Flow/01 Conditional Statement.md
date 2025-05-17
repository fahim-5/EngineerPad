
### **What Are Conditional Statements?**  
Conditional statements help your program make decisions. They allow different pieces of code to run depending on whether a condition is `true` or `false`.  

Think of it like choosing what to wear:  
- **If** it's raining, take an umbrella. ☔  
- **Else if** it's sunny, wear sunglasses. 😎  
- **Else**, just go as usual.  

---

### **1. `if` Statement (Single Condition)**  
**Syntax:**  
```javascript
if (condition) {
    // Code to run if condition is true
}
```  
**Example:**  
```javascript
let age = 18;

if (age >= 18) {
    console.log("You can vote!"); // This runs if age is 18 or older
}
```  
**Output:**  
```
You can vote!
```

---

### **2. `if...else` (Two Choices)**  
**Syntax:**  
```javascript
if (condition) {
    // Code if true
} else {
    // Code if false
}
```  
**Example:**  
```javascript
let isRaining = true;

if (isRaining) {
    console.log("Take an umbrella! ☔");
} else {
    console.log("Enjoy the weather! 😎");
}
```  
**Output:**  
```
Take an umbrella! ☔
```

---

### **3. `else if` (Multiple Conditions)**  
**Syntax:**  
```javascript
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition2 is true
} else {
    // Code if all conditions are false
}
```  
**Example:**  
```javascript
let time = 14; // 2 PM

if (time < 12) {
    console.log("Good morning! 🌞");
} else if (time < 18) {
    console.log("Good afternoon! 🌤️"); // This runs
} else {
    console.log("Good evening! 🌙");
}
```  
**Output:**  
```
Good afternoon! 🌤️
```

---

### **4. `switch` Statement (Alternative to Multiple `else if`)**  
Best when checking **multiple possible values** of a single variable.  

**Syntax:**  
```javascript
switch (variable) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Code if no cases match
}
```  
**Example:**  
```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week! 💪");
        break;
    case "Friday":
        console.log("Weekend is near! 🎉");
        break;
    default:
        console.log("It's a regular day.");
}
```  
**Output:**  
```
Start of the week! 💪
```

---

### **Key Takeaways:**  
✅ `if` → Check **one** condition.  
✅ `if...else` → Choose between **two** options.  
✅ `else if` → Handle **multiple** conditions.  
✅ `switch` → Cleaner way to check **many values** of a single variable.  

Would you like a real-world coding exercise to practice? 😊
