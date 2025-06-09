# Introduction to Object-Oriented Programming (OOP) in Python

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into reusable, self-contained objects that contain both data (attributes) and behavior (methods). Python is a multi-paradigm language that fully supports OOP concepts.

## Core Concepts of OOP

### 1. Classes and Objects
- **Class**: A blueprint for creating objects (a particular data structure)
- **Object**: An instance of a class

```python
class Dog:
    # Class attribute
    species = "Canis familiaris"
    
    # Initializer / Instance attributes
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    # Instance method
    def bark(self):
        return f"{self.name} says woof!"

# Create an object (instance of Dog)
my_dog = Dog("Rex", 3)
print(my_dog.bark())  # Output: Rex says woof!
```

### 2. The Four Pillars of OOP

#### a. Encapsulation
Bundling data and methods that work on that data within one unit (class) and restricting direct access to some components.

```python
class BankAccount:
    def __init__(self):
        self.__balance = 0  # Private attribute
    
    def deposit(self, amount):
        self.__balance += amount
    
    def get_balance(self):
        return self.__balance
```

#### b. Inheritance
Creating a new class from an existing class to promote code reuse.

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        raise NotImplementedError("Subclass must implement this method")

class Cat(Animal):
    def speak(self):
        return f"{self.name} says meow!"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says woof!"
```

#### c. Polymorphism
The ability to use a common interface for different forms (data types).

```python
animals = [Cat("Whiskers"), Dog("Rex")]

for animal in animals:
    print(animal.speak())
```

#### d. Abstraction
Hiding complex implementation details and showing only essential features.

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side
    
    def area(self):
        return self.side * self.side
    
    def perimeter(self):
        return 4 * self.side
```

## Special Methods (Magic/Dunder Methods)

Python provides special methods that allow classes to implement operator overloading and other functionality.

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        return f"{self.title} by {self.author}"
    
    def __len__(self):
        return self.pages
    
    def __add__(self, other):
        return self.pages + other.pages
```

## When to Use OOP in Python

- When you need to model complex systems with many interacting components
- When you need code reusability through inheritance
- When you want to bundle data and behavior together
- When you need to maintain state across function calls

OOP helps make code more modular, maintainable, and scalable, though Python also supports other paradigms like procedural and functional programming for cases where they might be more appropriate.
