
# Pointers to Functions in C

## Introduction
Function pointers are variables that store the address of a function. They enable:
- Dynamic function calls
- Implementing callbacks
- Creating flexible function dispatchers
- Building state machines

## Basic Syntax

### Declaration
```c
return_type (*pointer_name)(parameter_types);
```

### Example
```c
int (*func_ptr)(int, int);  // Pointer to function taking two ints and returning int
```

## Initializing Function Pointers

### Assigning Address of a Function
```c
int add(int a, int b) {
    return a + b;
}

int main() {
    int (*operation)(int, int) = &add;
    // or simply: int (*operation)(int, int) = add;
    
    int result = operation(3, 4);  // Calls add(3, 4)
    printf("%d", result);          // Output: 7
    return 0;
}
```

## Using Function Pointers

### Basic Usage
```c
float multiply(float x, float y) {
    return x * y;
}

int main() {
    float (*calc)(float, float) = multiply;
    printf("%.2f", calc(2.5, 4.0));  // Output: 10.00
    return 0;
}
```

### Arrays of Function Pointers
```c
void task1() { printf("Task 1\n"); }
void task2() { printf("Task 2\n"); }
void task3() { printf("Task 3\n"); }

int main() {
    void (*tasks[3])() = {task1, task2, task3};
    
    for(int i = 0; i < 3; i++) {
        tasks[i]();  // Execute each task
    }
    return 0;
}
```

## Function Pointers as Parameters

### Callback Example
```c
void process_array(int *arr, int size, int (*process)(int)) {
    for(int i = 0; i < size; i++) {
        arr[i] = process(arr[i]);
    }
}

int square(int x) { return x * x; }
int cube(int x) { return x * x * x; }

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    
    process_array(nums, 5, square);
    // nums now contains [1, 4, 9, 16, 25]
    
    process_array(nums, 5, cube);
    // nums now contains [1, 64, 729, 4096, 15625]
    
    return 0;
}
```

## Function Pointers as Return Values

### Factory Pattern Example
```c
typedef int (*operation)(int, int);

operation get_operation(char op) {
    switch(op) {
        case '+': return add;
        case '-': return subtract;
        case '*': return multiply;
        case '/': return divide;
        default: return NULL;
    }
}

int main() {
    operation calc = get_operation('+');
    if(calc) {
        printf("%d", calc(5, 3));  // Output: 8
    }
    return 0;
}
```

## Typedef with Function Pointers

### Simplifying Syntax
```c
typedef int (*MathFunc)(int, int);

int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }

int main() {
    MathFunc operation;
    
    operation = add;
    printf("Addition: %d\n", operation(10, 5));
    
    operation = subtract;
    printf("Subtraction: %d\n", operation(10, 5));
    
    return 0;
}
```

## Common Use Cases

1. **qsort() from stdlib.h**
```c
int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int arr[] = {5, 2, 8, 1, 4};
    qsort(arr, 5, sizeof(int), compare);
    // arr now contains [1, 2, 4, 5, 8]
    return 0;
}
```

2. **Event Handlers**
```c
typedef void (*EventHandler)(int);

void log_event(int event_id) {
    printf("Event %d occurred\n", event_id);
}

void process_event(int event_id) {
    printf("Processing event %d\n", event_id);
}

int main() {
    EventHandler handlers[] = {log_event, process_event};
    
    // Simulate events
    for(int i = 0; i < 2; i++) {
        handlers[i](i+1);
    }
    return 0;
}
```

## Common Pitfalls

1. **Wrong Function Signature**
```c
float func(float x) { return x * 1.5; }

int main() {
    int (*wrong_ptr)(int) = func;  // Compiler warning
    return 0;
}
```

2. **Calling Through NULL Pointer**
```c
void (*func_ptr)() = NULL;
func_ptr();  // Crash!
```

3. **Mismatched Return Types**
```c
int returns_int() { return 5; }
float (*wrong_ptr)() = returns_int;  // Undefined behavior
```

4. **Memory Management Issues**
```c
void (*func_ptr)();
{
    void local_func() { printf("Hello"); }
    func_ptr = local_func;  // Dangerous! local_func's scope ends
}
func_ptr();  // Undefined behavior
```

## Advanced Example: State Machine

```c
typedef void (*StateHandler)();

void state_idle() { printf("In idle state\n"); }
void state_processing() { printf("Processing...\n"); }
void state_error() { printf("Error occurred!\n"); }

int main() {
    StateHandler current_state = state_idle;
    int input;
    
    while(1) {
        current_state();
        printf("Enter state (0-idle, 1-processing, 2-error, 3-exit): ");
        scanf("%d", &input);
        
        switch(input) {
            case 0: current_state = state_idle; break;
            case 1: current_state = state_processing; break;
            case 2: current_state = state_error; break;
            case 3: return 0;
            default: printf("Invalid input\n");
        }
    }
}
```