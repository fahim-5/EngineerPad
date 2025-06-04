
# Type Conversion & Casting in Python - Complete Tutorial

## Section 1: Introduction to Type Conversion

Type conversion refers to converting one data type to another. In Python, there are two types:
1. Implicit Conversion (automatically done by Python)
2. Explicit Conversion (manually done by the programmer, also called casting)

## Section 2: Implicit Type Conversion

### Example 1: int + float = float
```python
num_int = 10
num_float = 5.5
result = num_int + num_float  # Python automatically converts int to float
print(f"int + float: {num_int} + {num_float} = {result} (type: {type(result)})")
```

### Example 2: int + bool
```python
bool_val = True
result = num_int + bool_val
print(f"int + bool: {num_int} + {bool_val} = {result} (type: {type(result)})")
```

### Example 3: Limitations
```python
try:
    result = "Hello" + 123  # Raises TypeError
except TypeError as e:
    print(f"Error: {e} (Cannot implicitly convert string and int)")
```

## Section 3: Explicit Type Conversion (Casting)

Python provides built-in functions for explicit type conversion:
- `int()`: converts to integer
- `float()`: converts to float
- `str()`: converts to string
- `bool()`: converts to boolean
- `list()`: converts to list
- `tuple()`: converts to tuple
- `set()`: converts to set
- `dict()`: converts to dictionary

### Converting to Integer (int())
```python
num_str = "123"
num_float = 12.7
num_bool = True

converted_int = int(num_str)
print(f"string '123' to int: {converted_int}")

converted_int_from_float = int(num_float)  # Truncates decimal
print(f"float 12.7 to int: {converted_int_from_float}")
```

### Converting to Float (float())
```python
num_str1 = "123"
num_str2 = "123.45"
print(f"string '123' to float: {float(num_str1)}")
print(f"string '123.45' to float: {float(num_str2)}")
```

### Converting to String (str())
```python
num_int = 42
num_float = 3.14
print(f"int 42 to string: '{str(num_int)}'")
print(f"float 3.14 to string: '{str(num_float)}'")
```

### Converting to Boolean (bool())
```python
print(f"int 0 to bool: {bool(0)}")  # False
print(f"int 10 to bool: {bool(10)}")  # True
print(f"empty string to bool: {bool('')}")  # False
```

## Section 4: Advanced Type Conversion Examples

### Converting Between Sequence Types
```python
my_tuple = (1, 2, 3)
print(f"tuple to list: {list(my_tuple)}")
print(f"list to tuple: {tuple([4,5,6])}")
```

### Converting Numbers Between Bases
```python
binary_str = "1010"
print(f"binary '1010' to int: {int(binary_str, 2)}")  # 10
print(f"int 26 to binary: {bin(26)}")  # '0b11010'
```

## Section 5: Type Conversion with Collections

### List to Set (removes duplicates)
```python
original_list = [1, 2, 2, 3, 4, 4, 5]
print(f"list to set: {set(original_list)}")  # {1, 2, 3, 4, 5}
```

### Dictionary Conversions
```python
original_dict = {'a': 1, 'b': 2}
print(f"dict keys to list: {list(original_dict)}")  # ['a', 'b']
print(f"dict values to list: {list(original_dict.values())}")  # [1, 2]
```

## Section 6: Special Cases and Caveats

### Handling Number Strings with Commas
```python
num_with_comma = "1,234.56"
cleaned_num = num_with_comma.replace(",", "")
print(f"Converted value: {float(cleaned_num)}")  # 1234.56
```

### Boolean Conversion of Strings
```python
print(f"bool('False'): {bool('False')}")  # True (non-empty string)
print(f"bool(''): {bool('')}")  # False
```

## Section 7: Practical Applications

### Processing User Input
```python
user_input = "25.5"  # Simulated input
try:
    number = float(user_input)
    print(f"Calculated value: {number * 2}")
except ValueError:
    print("Please enter a valid number!")
```

### Data Cleaning
```python
mixed_data = ["10", "20.5", "thirty", "40"]
clean_numbers = []
for item in mixed_data:
    try:
        clean_numbers.append(float(item))
    except ValueError:
        print(f"Skipping invalid value: '{item}'")
```

## Section 8: Conclusion

**Key Takeaways:**
1. Use implicit conversion for compatible types
2. Use explicit casting when you need control
3. Handle potential `ValueError` exceptions
4. Be aware of precision loss in numeric conversions
5. Remember boolean truthy/falsy rules

**Remember:** Not all conversions are possible or meaningful. Always consider:
- What happens if conversion fails?
- Is data or precision lost?
- Does the conversion make logical sense?
```
