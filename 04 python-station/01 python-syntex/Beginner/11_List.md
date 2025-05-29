


## Python Lists Complete Tutorial

### Section 1: List Creation
```python
# Empty list creation
empty = []  # Preferred method
empty_alt = list()  # Using constructor

# List with initial elements
colors = ["red", "green", "blue"]
numbers = [1, 2, 3, 4, 5]

# Creating from other iterables
from_range = list(range(5))  # [0, 1, 2, 3, 4]
from_string = list("hello")  # ['h', 'e', 'l', 'l', 'o']

# Mixed data types
mixed = [42, "answer", 3.14, True, [1, 2, 3]]
```

### Section 2: Accessing Elements
```python
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# Positive indexing
print(fruits[0])  # 'apple' (first element)
print(fruits[2])  # 'cherry'

# Negative indexing
print(fruits[-1])  # 'elderberry' (last element)
print(fruits[-3])  # 'cherry'

# Slicing [start:stop:step]
print(fruits[1:4])    # ['banana', 'cherry', 'date']
print(fruits[::2])    # ['apple', 'cherry', 'elderberry']
print(fruits[::-1])   # Reversed list
```

### Section 3: List Methods
```python
# Modifying methods
nums = [1, 2, 3]
nums.append(4)       # [1, 2, 3, 4]
nums.insert(1, 1.5)  # [1, 1.5, 2, 3, 4]
nums.extend([5, 6])  # [1, 1.5, 2, 3, 4, 5, 6]

# Removal methods
nums.remove(1.5)     # Removes first occurrence
popped = nums.pop()  # Removes and returns last item (6)
nums.pop(0)          # Removes item at index 0 (1)

# Information methods
print(nums.index(3))  # Returns index of first 3
print(nums.count(2))  # Counts occurrences of 2

# Reorganization
nums.reverse()       # Reverses in place
nums.sort()          # Sorts in place
```

### Section 4: List Operations
```python
# Concatenation
combined = [1, 2] + [3, 4]  # [1, 2, 3, 4]

# Repetition
repeated = [0] * 5  # [0, 0, 0, 0, 0]

# Membership testing
print(2 in [1, 2, 3])  # True
print(5 not in [1, 2, 3])  # True

# Length and iteration
print(len([1, 2, 3]))  # 3
for item in [1, 2, 3]:
    print(item)
```

### Section 5: List Comprehensions
```python
# Basic comprehension
squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]

# With condition
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]

# Nested comprehension
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in matrix for num in row]  # [1, 2, 3, 4, 5, 6]

# Conditional expression
labels = ["odd" if x%2 else "even" for x in range(5)]
# ['even', 'odd', 'even', 'odd', 'even']
```

### Section 6: Sorting
```python
# In-place sorting
nums = [3, 1, 4, 2]
nums.sort()  # [1, 2, 3, 4]
nums.sort(reverse=True)  # [4, 3, 2, 1]

# Creating new sorted list
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)  # ['apple', 'banana', 'cherry']

# Custom sorting
words.sort(key=len)  # Sort by length: ['apple', 'banana', 'cherry']
```

### Section 7: Copying Lists
```python
# Shallow copy (copies references)
original = [[1, 2], [3, 4]]
copy = original.copy()
copy[0][0] = 99  # Affects original!

# Deep copy (copies all nested objects)
import copy
deep_copy = copy.deepcopy(original)
deep_copy[0][0] = 100  # Doesn't affect original
```

### Section 8: Nested Lists
```python
# 2D list (matrix)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Accessing elements
print(matrix[1][2])  # 6 (row 1, column 2)

# Transposing matrix
transposed = [[row[i] for row in matrix] for i in range(3)]
# [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

### Section 9: Practical Examples
```python
# Stack (LIFO)
stack = []
stack.append(1)  # push
stack.append(2)
top = stack.pop()  # pop (returns 2)

# Queue (FIFO) - Note: collections.deque is better
queue = []
queue.append(1)  # enqueue
queue.append(2)
first = queue.pop(0)  # dequeue (returns 1)

# Removing duplicates
unique = list(set([1, 2, 2, 3]))  # [1, 2, 3]

# Filtering
numbers = [10, 25, 30, 45, 50]
filtered = [x for x in numbers if x % 10 == 0]  # [10, 30, 50]
```

### Section 10: Advanced Operations
```python
# Zipping lists
names = ["Alice", "Bob", "Charlie"]
scores = [85, 92, 78]
zipped = list(zip(names, scores))  # [('Alice', 85), ('Bob', 92), ...]

# Enumerate
for index, value in enumerate(["a", "b", "c"]):
    print(f"{index}: {value}")

# Unpacking
first, *middle, last = [1, 2, 3, 4, 5]
# first=1, middle=[2,3,4], last=5
```

### Section 11: Performance Considerations
```python
# Time Complexity
# - Index access: O(1)
# - Append: O(1)
# - Insert: O(n)
# - Search: O(n)

# Space efficient iteration
# Generator expression vs list comprehension
sum_squares = sum(x*x for x in range(1000000))  # Memory efficient
```

Key Takeaways:
- Lists are versatile, ordered, mutable sequences
- Support various operations and methods for manipulation
- List comprehensions provide concise creation/modification
- Understand copying behavior (shallow vs deep)
- Consider performance implications for large datasets
- Useful for stacks, queues (though specialized collections exist)
