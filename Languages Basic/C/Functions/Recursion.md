
# Recursion in C

Recursion is a powerful programming technique where a function calls itself to solve a problem. It's particularly useful for tasks that can be broken down into smaller, similar subproblems.

## Table of Contents
1. [Basic Concept](#basic-concept)
2. [How Recursion Works](#how-recursion-works)
3. [Recursion vs Iteration](#recursion-vs-iteration)
4. [Examples](#examples)
5. [Types of Recursion](#types-of-recursion)
6. [Advantages and Disadvantages](#advantages-and-disadvantages)
7. [Common Pitfalls](#common-pitfalls)
8. [Advanced Concepts](#advanced-concepts)

## Basic Concept

Recursion consists of:
- **Base Case**: The condition that stops the recursion
- **Recursive Case**: The part where the function calls itself

```c
void recursiveFunction() {
    // Base case
    if (condition)
        return;
    
    // Recursive case
    recursiveFunction();
}
```

## How Recursion Works

1. The function calls itself with a modified parameter
2. Each call is placed on the call stack
3. When base case is reached, the stack unwinds

**Memory Allocation**: Each recursive call creates a new stack frame with its own variables.

## Recursion vs Iteration

| Feature        | Recursion          | Iteration          |
|---------------|-------------------|-------------------|
| Termination   | Base case         | Loop condition    |
| Memory        | Uses stack        | Minimal memory    |
| Readability   | Often cleaner     | Can be complex    |
| Speed         | Generally slower  | Generally faster  |

## Examples

### 1. Factorial Calculation

```c
int factorial(int n) {
    // Base case
    if (n == 0 || n == 1)
        return 1;
    
    // Recursive case
    return n * factorial(n - 1);
}
```

### 2. Fibonacci Series

```c
int fibonacci(int n) {
    // Base cases
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    // Recursive case
    return fibonacci(n-1) + fibonacci(n-2);
}
```

### 3. Binary Search

```c
int binarySearch(int arr[], int l, int r, int x) {
    if (r >= l) {
        int mid = l + (r - l)/2;
        
        if (arr[mid] == x) return mid;
        
        if (arr[mid] > x)
            return binarySearch(arr, l, mid-1, x);
            
        return binarySearch(arr, mid+1, r, x);
    }
    return -1;
}
```

## Types of Recursion

### 1. Direct Recursion
Function calls itself directly.

### 2. Indirect Recursion
Function A calls function B, which calls function A.

### 3. Tail Recursion
The recursive call is the last operation in the function. Can be optimized by compilers.

```c
// Tail recursive factorial
int factorialTR(int n, int a) {
    if (n == 0) return a;
    return factorialTR(n-1, n*a);
}
```

### 4. Non-Tail Recursion
The recursive call is not the last operation.

### 5. Nested Recursion
The recursive call passes the recursive call as a parameter.

```c
int ackermann(int m, int n) {
    if (m == 0) return n+1;
    else if (n == 0) return ackermann(m-1, 1);
    else return ackermann(m-1, ackermann(m, n-1));
}
```

## Advantages and Disadvantages

### Advantages
- Elegant solution for problems with recursive nature
- Reduces code complexity for certain problems
- Useful for tree and graph traversals

### Disadvantages
- Higher memory usage due to stack frames
- Can be less efficient than iterative solutions
- Risk of stack overflow for deep recursion

## Common Pitfalls

1. **No Base Case**: Leads to infinite recursion and stack overflow
2. **Memory Inefficiency**: Each recursive call consumes stack space
3. **Redundant Calculations**: As seen in naive Fibonacci implementation
4. **Overusing Recursion**: When iteration would be simpler

## Advanced Concepts

### 1. Recursion and the Stack
Understanding how recursion uses the call stack is crucial for debugging.

### 2. Tail Call Optimization
Some compilers can optimize tail recursion to use constant stack space.

### 3. Memoization
Technique to store results of expensive recursive calls:

```c
// Fibonacci with memoization
int fibMemo(int n, int memo[]) {
    if (n == 0 || n == 1) return n;
    
    if (memo[n] == 0)
        memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    
    return memo[n];
}
```

### 4. Recursion with Pointers
Recursive functions can work with pointer data structures:

```c
// Recursive linked list length
int listLength(struct Node* node) {
    if (node == NULL) return 0;
    return 1 + listLength(node->next);
}
```

### 5. Recursion vs Dynamic Programming
Many recursive problems can be solved more efficiently using dynamic programming approaches.
```