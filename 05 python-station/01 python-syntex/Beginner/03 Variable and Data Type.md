


# Python Variables & Data Types Tutorial

## Variables
A variable is a named container for storing data in memory. You don't need to declare a data type explicitly.

### 1. Variable Assignment
```python
name = "Fahim"
age = 23
height_in_meters = 1.75
is_developer = True

print("Name:", name)
print("Age:", age)
print("Height:", height_in_meters)
print("Is Developer:", is_developer)
```

### 2. Data Types
Python has several built-in data types:

#### String (str)
```python
greeting = "Hello, world"
print("Greeting:", greeting)
```

#### Integer (int)
```python
year = 2025
print("Year:", year)
```

#### Float (float)
```python
pi = 3.14159
print("Pi:", pi)
```

#### Boolean (bool)
```python
is_logged_in = False
print("Logged In:", is_logged_in)
```

#### NoneType (None)
```python
value = None
print("Value is:", value)
```

#### List (mutable sequence)
```python
colors = ["red", "green", "blue"]
print("Colors:", colors)
```

#### Tuple (immutable sequence)
```python
dimensions = (1920, 1080)
print("Dimensions:", dimensions)
```

#### Set (unordered unique items)
```python
unique_numbers = {1, 2, 3, 2}
print("Unique Numbers:", unique_numbers)
```

#### Dictionary (key-value pairs)
```python
person = {"name": "Fahim", "age": 23}
print("Person Info:", person)
```

### 3. Multiple Variable Assignment
```python
x, y, z = 10, 20.5, "Python"
print("x:", x)
print("y:", y)
print("z:", z)
```

### 4. Type Checking
```python
print("Type of x:", type(x))
print("Type of z:", type(z))
```

### 5. Type Casting (Conversion)
```python
a = "123"
b = int(a)  # converting string to integer
print("String to int:", b)

c = 456
d = str(c)  # converting int to string
print("Int to string:", d)
```

### 6. Variable Naming Rules
- Valid: `my_var`, `_hidden`, `user2`, `first_name`
- Invalid: `2user`, `user-name`, `class` (reserved keyword)

### 7. Constants (by convention, use ALL CAPS)
```python
PI = 3.1416
MAX_USERS = 100
```

### 8. Checking Variable Value Types with isinstance()
```python
print("Is age an int?", isinstance(age, int))
print("Is greeting a str?", isinstance(greeting, str))
```

### 9. Memory Management Note
Python handles memory allocation and garbage collection automatically.

---

**VARIABLES & DATA TYPES TUTORIAL COMPLETE**
```
