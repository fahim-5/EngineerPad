# Python Expressions: Complete Tutorial with Examples

## 1. Basic Expressions

```python
# Literal expressions
print(42)               # Integer
print(3.14159)          # Float
print("Hello World")    # String
print(True)             # Boolean

# Variable expressions
x = 10
y = 20
print(x + y)            # 30

# Function call expressions
name = "Python"
print(len(name))        # 6

# Mixed expressions
result = x * y + len(name)
print(result)           # 206 (10*20 + 6)
```

## 2. Arithmetic Operations

```python
a = 15
b = 4

print(a + b)   # 19 (Addition)
print(a - b)   # 11 (Subtraction)
print(a * b)   # 60 (Multiplication)
print(a / b)   # 3.75 (Division)
print(a // b)  # 3 (Floor division)
print(a % b)   # 3 (Modulus)
print(a ** b) # 50625 (Exponentiation)

# Operator precedence
print(2 + 3 * 4)    # 14 (Multiplication first)
print((2 + 3) * 4)  # 20 (Parentheses first)
```

## 3. Comparison Operators

```python
x = 10
y = 5
z = 10

print(x == y)  # False
print(x != y)  # True
print(x > y)   # True
print(x < y)   # False
print(x >= z)  # True
print(y <= z)  # True

# Chained comparisons
print(5 < x < 15)  # True
```

## 4. Logical Operators

```python
has_license = True
age = 17

# AND - both must be True
print(has_license and age >= 18)  # False

# OR - at least one True
print(has_license or age >= 18)   # True

# NOT - inverts the boolean
print(not has_license)            # False

# Practical example
can_drive = has_license and age >= 18
print(f"Can drive: {can_drive}")  # Can drive: False
```

## 5. Assignment Operators

```python
# Basic assignment
counter = 0

# Compound assignments
counter += 5    # counter = counter + 5
print(counter)  # 5

counter *= 2    # counter = counter * 2
print(counter)  # 10

# Walrus operator (Python 3.8+)
if (n := len("hello")) > 3:
    print(f"Length is {n}")  # Length is 5
```

## 6. Bitwise Operators

```python
a = 10  # 1010 in binary
b = 4   # 0100 in binary

print(a & b)   # 0 (AND)
print(a | b)   # 14 (OR)
print(a ^ b)   # 14 (XOR)
print(~a)      # -11 (NOT)
print(a << 1)  # 20 (Left shift)
print(a >> 1)  # 5 (Right shift)

# Even/odd check
num = 7
print("Even" if num & 1 == 0 else "Odd")  # Odd
```

## 7. Identity Operators

```python
list1 = [1, 2, 3]
list2 = list1
list3 = [1, 2, 3]

print(list1 is list2)    # True (same object)
print(list1 is list3)    # False (different objects)
print(list1 == list3)    # True (same content)

# None check
value = None
print(value is None)     # True
```

## 8. Membership Operators

```python
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)        # True
print("orange" not in fruits)    # True

# Works with strings
message = "Hello World"
print("Hello" in message)        # True

# Works with dictionaries (checks keys)
person = {"name": "Alice", "age": 25}
print("name" in person)          # True
print("Alice" in person)         # False (checks keys, not values)
```

## 9. Operator Precedence

```python
# From highest to lowest precedence
result = 5 + 3 * 2 ** 2 / 4 - 1
# Steps:
# 1. 2 ** 2 = 4
# 2. 3 * 4 = 12
# 3. 12 / 4 = 3.0
# 4. 5 + 3.0 = 8.0
# 5. 8.0 - 1 = 7.0
print(result)  # 7.0

# Use parentheses to change order
print((5 + 3) * (2 ** 2) / (4 - 1))  # 10.666...
```

## 10. Conditional Expressions

```python
# Ternary operator
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Adult

# Practical example
score = 85
grade = "A" if score >= 90 else "B" if score >= 80 else "C"
print(grade)  # B
```

## 11. List and Dictionary Comprehensions

```python
# List comprehension
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]

# Dictionary comprehension
square_dict = {x: x**2 for x in range(5)}
print(square_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Nested comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

This tutorial shows how Python expressions combine values, variables, and operators to perform computations and make decisions. Each example demonstrates practical usage of these fundamental programming concepts.
