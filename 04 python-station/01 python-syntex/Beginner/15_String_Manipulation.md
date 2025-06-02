# **Python String Manipulation: A Comprehensive Tutorial**

Strings are one of the most commonly used data types in Python. This tutorial covers essential string manipulation techniques, including operations, methods, and formatting.

---

## **1. Creating Strings**
Strings can be defined using single (`' '`), double (`" "`), or triple (`''' '''` or `""" """`) quotes.

```python
str1 = 'Hello, World!'
str2 = "Python Programming"
str3 = '''Multi-line
string'''
```

---

## **2. Basic String Operations**
### **Concatenation (`+`)**
Combines two strings.
```python
greeting = "Hello" + " " + "World"
print(greeting)  # Output: "Hello World"
```

### **Repetition (`*`)**
Repeats a string multiple times.
```python
repeat = "Hi" * 3
print(repeat)  # Output: "HiHiHi"
```

### **Indexing (`[]`)**
Access individual characters.
```python
text = "Python"
print(text[0])  # Output: 'P'
print(text[-1]) # Output: 'n' (last character)
```

### **Slicing (`[start:end:step]`)**
Extract substrings.
```python
text = "Python Programming"
print(text[0:6])    # Output: "Python"
print(text[7:])     # Output: "Programming"
print(text[::2])    # Output: "Pto rgamn" (every 2nd character)
```

---

## **3. Common String Methods**
### **Length (`len()`)**
Get the length of a string.
```python
text = "Hello"
print(len(text))  # Output: 5
```

### **Case Conversion**
- `upper()` → Converts to uppercase.
- `lower()` → Converts to lowercase.
- `title()` → Capitalizes each word.
- `capitalize()` → Capitalizes the first letter.

```python
text = "python programming"
print(text.upper())       # Output: "PYTHON PROGRAMMING"
print(text.title())       # Output: "Python Programming"
```

### **Stripping Whitespace**
- `strip()` → Removes leading/trailing whitespace.
- `lstrip()` → Removes leading whitespace.
- `rstrip()` → Removes trailing whitespace.

```python
text = "   Python   "
print(text.strip())  # Output: "Python"
```

### **Splitting & Joining**
- `split()` → Splits a string into a list.
- `join()` → Combines a list into a string.

```python
text = "Python,Java,C++"
words = text.split(",")  # Output: ['Python', 'Java', 'C++']
joined = "-".join(words) # Output: "Python-Java-C++"
```

### **Finding & Replacing**
- `find(substring)` → Returns the first index of a substring.
- `replace(old, new)` → Replaces occurrences of a substring.

```python
text = "Hello World"
print(text.find("World"))  # Output: 6
print(text.replace("World", "Python"))  # Output: "Hello Python"
```

### **Checking String Content**
- `startswith(prefix)` → Checks if the string starts with a substring.
- `endswith(suffix)` → Checks if the string ends with a substring.
- `isalpha()` → Checks if all characters are alphabets.
- `isdigit()` → Checks if all characters are digits.

```python
text = "Python123"
print(text.startswith("Py"))  # Output: True
print(text.isalpha())         # Output: False (contains digits)
```

---

## **4. String Formatting**
### **f-Strings (Python 3.6+)**
Embed variables directly into strings.
```python
name = "Alice"
age = 25
print(f"My name is {name} and I'm {age} years old.")
# Output: "My name is Alice and I'm 25 years old."
```

### **`format()` Method**
```python
print("{} is {} years old.".format(name, age))
# Output: "Alice is 25 years old."
```

### **Old-style (`%` formatting)**
```python
print("%s is %d years old." % (name, age))
# Output: "Alice is 25 years old."
```

---

## **5. Escape Characters**
Special characters in strings:
- `\n` → Newline
- `\t` → Tab
- `\\` → Backslash
- `\"` → Double quote

```python
print("Hello\nWorld")
# Output:
# Hello
# World
```

---

## **6. Raw Strings (Ignore Escape Characters)**
Use `r` before the string to treat escape characters as literal text.
```python
path = r"C:\Users\Documents"
print(path)  # Output: "C:\Users\Documents"
```

---

## **7. String Membership (`in` & `not in`)**
Check if a substring exists.
```python
text = "Python is fun"
print("fun" in text)    # Output: True
print("Java" not in text) # Output: True
```

---

## **8. String Comparison**
Strings can be compared using `==`, `!=`, `<`, `>`, etc.
```python
print("apple" == "Apple")  # Output: False (case-sensitive)
print("apple" < "banana")  # Output: True (lexicographical order)
```

---

## **9. String Encoding & Decoding**
Convert between strings and bytes.
```python
text = "Hello"
encoded = text.encode('utf-8')  # b'Hello'
decoded = encoded.decode('utf-8')  # "Hello"
```

---

## **Summary Table**
| **Operation**       | **Example**                     | **Output**              |
|---------------------|--------------------------------|------------------------|
| Concatenation       | `"Hello" + " " + "World"`      | `"Hello World"`        |
| Repetition          | `"Hi" * 3`                     | `"HiHiHi"`             |
| Slicing             | `"Python"[0:2]`                | `"Py"`                 |
| `upper()`           | `"hello".upper()`              | `"HELLO"`              |
| `split()`           | `"a,b,c".split(",")`           | `['a', 'b', 'c']`      |
| `find()`            | `"Hello".find("e")`            | `1`                    |
| `replace()`         | `"Hi".replace("Hi", "Hello")`  | `"Hello"`              |
| f-String            | `f"Name: {name}"`              | `"Name: Alice"`        |

---

## **Conclusion**
Python provides powerful string manipulation tools. Mastering these techniques will help you handle text processing efficiently. Practice these examples to strengthen your understanding!

Let me know if you'd like to explore more advanced string operations (e.g., regular expressions, Unicode handling). 🚀
