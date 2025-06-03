# **Python Loops and Iteration: A Complete Tutorial**

Loops are a fundamental concept in programming that allow you to execute a block of code repeatedly. Python provides two main types of loops:  

1. **`for` loops** – Used for iterating over sequences (lists, tuples, strings, etc.) or a range of numbers.  
2. **`while` loops** – Used to execute a block of code as long as a condition is `True`.  

In this tutorial, we'll cover both types of loops, along with loop control statements like `break`, `continue`, and `else`.

---

## **1. The `for` Loop**
The `for` loop is used to iterate over a sequence (like a list, tuple, string, or range) and execute a block of code for each item.

### **Syntax:**
```python
for item in sequence:
    # Code to execute for each item
```

### **Examples:**

#### **Looping through a list:**
```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```
**Output:**
```
apple
banana
cherry
```

#### **Looping through a string:**
```python
for char in "Python":
    print(char)
```
**Output:**
```
P
y
t
h
o
n
```

#### **Using `range()` to loop a specific number of times:**
```python
for i in range(5):  # 0 to 4
    print(i)
```
**Output:**
```
0
1
2
3
4
```

You can also specify a start, stop, and step:
```python
for i in range(2, 10, 2):  # 2, 4, 6, 8
    print(i)
```
**Output:**
```
2
4
6
8
```

---

## **2. The `while` Loop**
The `while` loop repeats a block of code **as long as a condition is `True`**.

### **Syntax:**
```python
while condition:
    # Code to execute while condition is True
```

### **Examples:**

#### **Basic `while` loop:**
```python
count = 0
while count < 5:
    print(count)
    count += 1
```
**Output:**
```
0
1
2
3
4
```

#### **Infinite loop (with `break`):**
```python
while True:
    user_input = input("Enter 'quit' to exit: ")
    if user_input == "quit":
        break  # Exit the loop
    print("You entered:", user_input)
```

---

## **3. Loop Control Statements**
Python provides special statements to control loop execution:

| Statement | Description |
|-----------|-------------|
| `break`   | Exits the loop immediately. |
| `continue`| Skips the rest of the current iteration and moves to the next. |
| `else`    | Executes a block of code when the loop finishes normally (no `break`). |

### **Examples:**

#### **Using `break`:**
```python
for num in range(10):
    if num == 5:
        break
    print(num)
```
**Output:**
```
0
1
2
3
4
```

#### **Using `continue`:**
```python
for num in range(5):
    if num == 2:
        continue  # Skip 2
    print(num)
```
**Output:**
```
0
1
3
4
```

#### **Using `else` in a loop:**
```python
for num in range(3):
    print(num)
else:
    print("Loop completed!")
```
**Output:**
```
0
1
2
Loop completed!
```

---

## **4. Nested Loops**
You can place loops inside other loops to handle complex iterations.

### **Example:**
```python
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
```
**Output:**
```
i=0, j=0
i=0, j=1
i=1, j=0
i=1, j=1
i=2, j=0
i=2, j=1
```

---

## **5. Practical Use Cases**
- **Processing lists/dictionaries:**  
  ```python
  numbers = [1, 2, 3, 4]
  squared = [x**2 for x in numbers]  # List comprehension (advanced)
  print(squared)  # Output: [1, 4, 9, 16]
  ```
  
- **Reading files line by line:**  
  ```python
  with open("file.txt") as file:
      for line in file:
          print(line.strip())
  ```

- **User input validation:**  
  ```python
  while True:
      age = input("Enter your age: ")
      if age.isdigit():
          break
      print("Invalid input! Try again.")
  ```

---

## **Conclusion**
- **`for` loops** are best for iterating over known sequences.
- **`while` loops** are useful when the number of iterations is uncertain.
- **`break`**, **`continue`**, and **`else`** provide additional control over loops.
- **Nested loops** help in handling multi-dimensional data.

Now you're ready to use loops effectively in Python! 🚀  

Would you like exercises to practice? Let me know! 😊