Sure! Here’s your Python syntax and indentation tutorial rewritten as a well-formatted Markdown file:

---

# Python Syntax & Indentation 101

Python uses indentation to define code blocks.  
Unlike other languages, indentation is **NOT** optional.

---

## 1. Printing Output

```python
print("Hello, Python world!")  # This is a single-line comment
```

---

## 2. Variables and Data Types

```python
name = "Fahim"
age = 23
is_student = True

print("Name:", name)
print("Age:", age)
print("Student Status:", is_student)
```

---

## 3. Conditional Statements

> Indentation is required!

```python
if is_student:
    print("You are a student.")
else:
    print("You are not a student.")
```

---

## 4. Loops

> Indented code runs inside the loop

```python
for i in range(3):
    print("Loop iteration:", i)
    print("Still inside loop")
print("Now outside the loop")
```

---

## 5. Functions

> Indented blocks are essential

```python
def greet(person):
    print("Hello,", person)
    print("Welcome to the Python world!")

greet("Fahim")
```

---

## 6. Error Due to Wrong Indentation

> Uncomment the below lines to see what happens

```python
# def broken_function():
# print("This will cause an IndentationError")  # Missing indentation!
```

---

## 7. Multi-line Statements

```python
total = (1 + 2 +
         3 + 4)
print("Total:", total)
```

---

## 8. Whitespace Best Practices

- Always use **4 spaces** (not tabs!) for indentation.
- Use an editor like **VS Code** or **PyCharm** to format automatically.

---

## End of Tutorial

```python
print("Syntax & Indentation tutorial complete!")
```

---
