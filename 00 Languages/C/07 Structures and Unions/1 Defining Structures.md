# Defining Structures in C

Structures in C allow you to combine data items of different kinds under a single name. They are user-defined data types that group related variables.

## Basic Structure Definition

```c
struct structure_name {
    data_type member1;
    data_type member2;
    // ... more members
};
```

Example:
```c
struct Student {
    char name[50];
    int age;
    float gpa;
};
```

## Declaring Structure Variables

You can declare structure variables when defining the structure or separately:

```c
// Method 1: Declare with definition
struct Point {
    int x;
    int y;
} p1, p2;

// Method 2: Declare later
struct Point p3, p4;
```

## Accessing Structure Members

Use the dot (.) operator to access members:

```c
struct Student s1;
strcpy(s1.name, "Alice");
s1.age = 20;
s1.gpa = 3.8;
```

## Typedef with Structures

`typedef` creates an alias for the structure:

```c
typedef struct {
    int hours;
    int minutes;
} Time;

Time t1;  // No need to write 'struct' keyword
```

## Nested Structures

Structures can contain other structures:

```c
struct Address {
    char city[50];
    char state[50];
};

struct Employee {
    char name[50];
    struct Address addr;
    int salary;
};
```

## Array of Structures

```c
struct Student class[30];
class[0].age = 19;  // Access first student
```

## Pointer to Structures

Use the arrow (->) operator with pointers:

```c
struct Student *ptr;
ptr = &s1;
printf("Name: %s", ptr->name);
```

## Advanced: Flexible Array Members (C99)

Structure with a flexible array at the end:

```c
struct flex_array {
    int length;
    int data[];  // Flexible array member
};
```

## Best Practices

1. Use meaningful names for structures and members
2. Group related data together
3. Consider memory alignment for performance
4. Use `typedef` for cleaner code
5. Document each member's purpose
