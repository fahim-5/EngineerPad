
# Python Conditional Statements Tutorial

Conditional statements allow programs to make decisions and execute different code blocks based on conditions.

## 1. Basic `if` Statement
Executes code only if condition is `True`

```python
# Syntax
if condition:
    # code to execute

# Example
age = 20
if age >= 18:
    print("You are an adult")  # This will print
```

## 2. `if-else` Statement
Chooses between two alternatives

```python
# Syntax 
if condition:
    # code if True
else:
    # code if False

# Example
temperature = 35
if temperature > 30:
    print("It's hot!")
else:
    print("It's not hot")
```

## 3. `if-elif-else` Chain
Handles multiple exclusive conditions

```python
# Syntax
if condition1:
    # code
elif condition2:
    # code 
else:
    # default code

# Example
score = 85
if score >= 90:
    grade = 'A'
elif score >= 80:  # This condition is checked
    grade = 'B' 
else:
    grade = 'F'
print(f"Grade: {grade}")  # Output: Grade: B
```

## 4. Nested Conditionals
Conditions within conditions

```python
is_weekend = True
time = 14

if is_weekend:
    if time < 12:
        print("Weekend morning")
    else:
        print("Weekend afternoon")  # This prints
else:
    print("Weekday")
```

## 5. Ternary Operator
One-line conditional assignment

```python
# Syntax
value_if_true if condition else value_if_false

# Example
balance = 1500
status = "Gold" if balance >= 1000 else "Silver"
print(status)  # Output: Gold
```

## 6. Truth Value Testing
Python evaluates any object as `True` or `False`

**Truthy values**: Non-zero numbers, non-empty strings/collections  
**Falsy values**: `0`, `""`, `None`, empty collections

```python
values = [0, 1, "Hello", "", [1,2], []]
for val in values:
    if val:
        print(f"{val} is truthy")
    else:
        print(f"{val} is falsy")
```

## 7. `match-case` (Python 3.10+)
Advanced pattern matching

```python
http_status = 404

match http_status:
    case 200:
        print("OK")
    case 404:
        print("Not found")  # This executes
    case _:
        print("Unknown")
```

## 8. Common Patterns

### A. Safe Value Conversion
```python
user_input = "123"
if user_input.isdigit():
    num = int(user_input)
else:
    num = 0
```

### B. Range Checking
```python
if 0 < x < 100:  # Python allows chained comparisons
    print("Valid range")
```

### C. Conditional List Comprehension
```python
numbers = [1, 2, 3, 4]
squares = [x**2 for x in numbers if x % 2 == 0]
# Result: [4, 16]
```

## Best Practices

1. **Keep conditions simple** and readable
2. **Avoid deep nesting** (more than 2-3 levels)
3. **Use parentheses** for complex logical expressions
4. **Prefer early returns** to reduce nesting
5. **Use descriptive names** in conditions

### Good Practice Example
```python
# Instead of:
if x > 0 and x < 100 and y > 0 and y < 100 and is_valid:
    ...

# Do this:
within_bounds = (0 < x < 100) and (0 < y < 100)
if within_bounds and is_valid:
    ...
```

---

This Markdown includes:
- Proper headers with `#` and `##` syntax
- Code blocks with Python syntax highlighting
- Clear section organization
- Best practices section
- Common patterns section
``` 

You can copy this directly into any Markdown-supported platform (GitHub, VS Code, Notion, etc.). The triple backticks with `python` provide proper syntax highlighting for code blocks.
