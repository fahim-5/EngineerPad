# Python Input Operations Tutorial

Input operations allow your Python programs to interact with users by accepting data during runtime. Here's a comprehensive guide to handling input in Python.

## Table of Contents
1. [Basic Input with `input()`](#1-basic-input-with-input)
2. [Type Conversion of Input](#2-type-conversion-of-input)
3. [Multiple Inputs](#3-multiple-inputs)
4. [Input with Prompts](#4-input-with-prompts)
5. [Input Validation](#5-input-validation)
6. [File Input](#6-file-input)
7. [Command Line Arguments](#7-command-line-arguments)
8. [Best Practices](#8-best-practices)

---

## 1. Basic Input with `input()`

The `input()` function reads a line from standard input (usually keyboard) and returns it as a string.

```python
# Simple input example
name = input("Enter your name: ")
print(f"Hello, {name}!")
```

**Output:**
```
Enter your name: Alice
Hello, Alice!
```

**Key Points:**
- Always returns a string
- Program pauses until user presses Enter
- Optional prompt string can be provided

---

## 2. Type Conversion of Input

Since `input()` always returns a string, you often need to convert it to other data types.

```python
# Converting to integer
age = int(input("Enter your age: "))
print(f"In 10 years, you'll be {age + 10} years old.")

# Converting to float
height = float(input("Enter your height in meters: "))
print(f"Your height is {height:.2f} meters.")

# Converting to boolean (special handling)
is_student = input("Are you a student? (yes/no): ").lower() == 'yes'
print(f"Student status: {is_student}")
```

**Handling Conversion Errors:**
```python
try:
    num = int(input("Enter a number: "))
    print(f"You entered: {num}")
except ValueError:
    print("That's not a valid number!")
```

---

## 3. Multiple Inputs

### Method 1: Separate inputs
```python
first_name = input("Enter first name: ")
last_name = input("Enter last name: ")
print(f"Full name: {first_name} {last_name}")
```

### Method 2: Split single input
```python
# Split by spaces
x, y = input("Enter two numbers separated by space: ").split()
print(f"Sum: {int(x) + int(y)}")

# Split by comma
colors = input("Enter colors (comma separated): ").split(',')
print("You entered these colors:", colors)
```

---

## 4. Input with Prompts

You can create more user-friendly prompts:

```python
print("Please answer the following questions:")
name = input("- What is your name? ")
age = input("- How old are you? ")
print(f"\nSummary:\nName: {name}\nAge: {age}")
```

**Multi-line prompt:**
```python
prompt = """Please enter your details:
- Name
- Age
- Occupation
Separate with commas: """
data = input(prompt).split(',')
```

---

## 5. Input Validation

Always validate user input:

```python
while True:
    age_input = input("Enter your age (1-120): ")
    if age_input.isdigit():
        age = int(age_input)
        if 1 <= age <= 120:
            break
    print("Invalid input. Please try again.")
print(f"Accepted age: {age}")
```

**Password validation example:**
```python
while True:
    password = input("Create password (min 8 chars): ")
    if len(password) >= 8:
        break
    print("Password too short!")
print("Password accepted!")
```

---

## 6. File Input

Reading input from files:

```python
# Reading entire file
with open('data.txt', 'r') as file:
    content = file.read()
print(content)

# Reading line by line
with open('data.txt', 'r') as file:
    for line in file:
        print(line.strip())
```

---

## 7. Command Line Arguments

Using `sys.argv` for command-line input:

```python
import sys

# Run as: python script.py arg1 arg2
if len(sys.argv) > 1:
    print("Arguments received:", sys.argv[1:])
else:
    print("No arguments provided")
```

Better alternative with `argparse`:

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("name", help="Your name")
parser.add_argument("-a", "--age", help="Your age", type=int)
args = parser.parse_args()

print(f"Hello {args.name}!")
if args.age:
    print(f"You are {args.age} years old.")
```

---

## 8. Best Practices

1. **Always validate input** - Never trust user input
2. **Use clear prompts** - Tell users exactly what you expect
3. **Handle exceptions** - Especially for type conversions
4. **Provide defaults** - When appropriate
5. **Secure sensitive input** - Use `getpass` for passwords
   ```python
   from getpass import getpass
   password = getpass("Enter password: ")
   ```
6. **Document expected input** - In help messages or docstrings

---

## Example Program

```python
def calculate_bmi():
    print("BMI Calculator")
    print("--------------")
    
    while True:
        try:
            weight = float(input("Enter weight (kg): "))
            height = float(input("Enter height (m): "))
            if weight <= 0 or height <= 0:
                raise ValueError
            break
        except ValueError:
            print("Please enter positive numbers only!")
    
    bmi = weight / (height ** 2)
    print(f"\nYour BMI is: {bmi:.1f}")
    
    if bmi < 18.5:
        print("Category: Underweight")
    elif 18.5 <= bmi < 25:
        print("Category: Normal weight")
    elif 25 <= bmi < 30:
        print("Category: Overweight")
    else:
        print("Category: Obese")

calculate_bmi()
```

This tutorial covers the essential aspects of input operations in Python. Remember that robust input handling is crucial for creating user-friendly and secure applications.
