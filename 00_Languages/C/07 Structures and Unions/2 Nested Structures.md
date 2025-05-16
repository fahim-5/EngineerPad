# Nested Structures in C

## What is a Nested Structure?
A nested structure in C is a structure declared inside another structure. It allows you to create complex data types by combining multiple structures.

## Defining Nested Structures

### Method 1: Separate Structure Declaration
```c
struct Address {
    char city[50];
    char state[50];
    int pin;
};

struct Employee {
    int id;
    char name[50];
    struct Address addr;  // Nested structure
};
```

### Method 2: Embedded Structure Declaration
```c
struct Employee {
    int id;
    char name[50];
    struct Address {      // Structure defined inside
        char city[50];
        char state[50];
        int pin;
    } addr;
};
```

### Method 3: Anonymous Nested Structure (C11 standard)
```c
struct Employee {
    int id;
    char name[50];
    struct {              // Anonymous structure
        char city[50];
        char state[50];
        int pin;
    };
};
```

## Accessing Nested Structure Members

### For Methods 1 & 2:
```c
struct Employee emp;
emp.id = 101;
strcpy(emp.name, "John");
strcpy(emp.addr.city, "New York");  // Dot notation
emp.addr.pin = 10001;
```

### For Method 3 (Anonymous):
```c
struct Employee emp;
emp.id = 101;
strcpy(emp.city, "New York");  // Direct access
emp.pin = 10001;
```

## Array of Nested Structures
```c
struct Employee employees[10];
employees[0].id = 101;
strcpy(employees[0].addr.city, "Chicago");
```

## Pointer to Nested Structure
```c
struct Employee *ptr = &emp;
ptr->id = 102;
strcpy(ptr->addr.city, "Los Angeles");
```

## Best Practices
1. Use meaningful names for nested structures
2. Prefer separate declaration for reusability
3. Comment complex nested structures
4. Avoid excessive nesting (more than 3 levels)
5. Consider typedef for cleaner syntax

## Real-world Example
```c
struct Date {
    int day;
    int month;
    int year;
};

struct Student {
    int roll_no;
    char name[50];
    struct Date dob;          // Birth date
    struct Date admission;    // Admission date
};
```

## Memory Allocation
Nested structures are allocated contiguous memory:
```c
printf("Size: %lu", sizeof(struct Employee));
// Prints total size including all nested members
```

## Limitations
1. Cannot directly nest a structure within itself
2. Deep nesting may reduce code readability
3. Anonymous structures (C11) aren't supported in all compilers