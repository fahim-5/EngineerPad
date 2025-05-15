
# Dynamic Memory Allocation in C

## Introduction
Dynamic memory allocation allows programs to request memory at runtime rather than compile time. This is essential when:
- The required memory size isn't known beforehand
- You need data structures that can grow/shrink
- You want memory to persist beyond function calls

## Core Functions

### 1. `malloc()` - Memory Allocation
```c
void* malloc(size_t size);
```
- Allocates a block of `size` bytes
- Returns a pointer to the first byte
- Returns `NULL` if allocation fails
- Contents are uninitialized (contain garbage values)

**Example:**
```c
int *arr = (int*)malloc(5 * sizeof(int));
if(arr == NULL) {
    printf("Memory allocation failed");
    exit(1);
}
```

### 2. `calloc()` - Contiguous Allocation
```c
void* calloc(size_t num, size_t size);
```
- Allocates memory for an array of `num` elements each of `size` bytes
- Initializes all bytes to zero
- Returns `NULL` if allocation fails

**Example:**
```c
float *values = (float*)calloc(10, sizeof(float));
```

### 3. `realloc()` - Reallocation
```c
void* realloc(void* ptr, size_t new_size);
```
- Resizes previously allocated memory block
- Can expand or shrink the existing block
- May move the block to a new location
- Contents are preserved up to minimum of old and new size

**Example:**
```c
arr = (int*)realloc(arr, 10 * sizeof(int));
```

### 4. `free()` - Memory Deallocation
```c
void free(void* ptr);
```
- Releases memory allocated by `malloc`, `calloc`, or `realloc`
- Does nothing if pointer is `NULL`
- Critical to prevent memory leaks

**Example:**
```c
free(arr);
arr = NULL; // Good practice
```

## Common Usage Patterns

### 1. Dynamic Arrays
```c
int *create_dynamic_array(int size) {
    int *arr = (int*)malloc(size * sizeof(int));
    if(arr == NULL) {
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
    }
    return arr;
}

void example_usage() {
    int n = 100;
    int *my_array = create_dynamic_array(n);
    
    // Use the array
    for(int i = 0; i < n; i++) {
        my_array[i] = i * 2;
    }
    
    free(my_array);
}
```

### 2. Resizable Arrays
```c
int *resize_array(int *arr, int current_size, int new_size) {
    int *new_arr = (int*)realloc(arr, new_size * sizeof(int));
    if(new_arr == NULL) {
        free(arr);
        perror("Memory reallocation failed");
        exit(EXIT_FAILURE);
    }
    return new_arr;
}
```

### 3. 2D Arrays
```c
int** create_2d_array(int rows, int cols) {
    int **matrix = (int**)malloc(rows * sizeof(int*));
    if(matrix == NULL) return NULL;
    
    for(int i = 0; i < rows; i++) {
        matrix[i] = (int*)malloc(cols * sizeof(int));
        if(matrix[i] == NULL) {
            // Clean up previously allocated memory
            for(int j = 0; j < i; j++) {
                free(matrix[j]);
            }
            free(matrix);
            return NULL;
        }
    }
    return matrix;
}

void free_2d_array(int **matrix, int rows) {
    for(int i = 0; i < rows; i++) {
        free(matrix[i]);
    }
    free(matrix);
}
```

## Best Practices

1. **Always check for NULL returns**
   ```c
   int *ptr = malloc(100 * sizeof(int));
   if(ptr == NULL) {
       // Handle error
   }
   ```

2. **Initialize allocated memory**
   ```c
   // For malloc:
   memset(ptr, 0, 100 * sizeof(int));
   
   // Or use calloc which zeros memory
   ```

3. **Free memory in reverse order of allocation**
   ```c
   // For nested allocations:
   // 1. Free inner pointers
   // 2. Free outer pointers
   ```

4. **Avoid memory leaks**
   - Ensure every `malloc/calloc` has a corresponding `free`
   - Set pointers to `NULL` after freeing

5. **Don't access freed memory**
   ```c
   free(ptr);
   ptr[0] = 5; // Undefined behavior!
   ```

## Common Pitfalls

1. **Memory Leaks**
   ```c
   void leaky_function() {
       int *leak = malloc(100 * sizeof(int));
       // Forgot to free!
   }
   ```

2. **Dangling Pointers**
   ```c
   int *ptr = malloc(sizeof(int));
   free(ptr);
   *ptr = 10; // Undefined behavior!
   ```

3. **Double Free**
   ```c
   free(ptr);
   free(ptr); // Crash!
   ```

4. **Incorrect Size Calculation**
   ```c
   // Wrong:
   malloc(10 * sizeof(char*));
   
   // Right:
   malloc(10 * sizeof(char));
   ```

5. **Forgetting to Free in Error Paths**
   ```c
   int *p1 = malloc(100);
   int *p2 = malloc(200);
   
   if(error_condition) {
       return; // Forgot to free p1 and p2!
   }
   
   free(p1);
   free(p2);
   ```

## Advanced Techniques

### Flexible Array Members (C99)
```c
struct flex_array {
    size_t length;
    int data[]; // Flexible array member
};

struct flex_array *create_flex_array(size_t length) {
    struct flex_array *fa = malloc(sizeof(struct flex_array) + length * sizeof(int));
    fa->length = length;
    return fa;
}
```

### Memory Pool Allocation
```c
#define POOL_SIZE 1024

typedef struct {
    size_t size;
    size_t used;
    unsigned char *data;
} MemoryPool;

MemoryPool* create_pool(size_t size) {
    MemoryPool *pool = malloc(sizeof(MemoryPool));
    pool->size = size;
    pool->used = 0;
    pool->data = malloc(size);
    return pool;
}

void* pool_alloc(MemoryPool *pool, size_t size) {
    if(pool->used + size > pool->size) return NULL;
    void *ptr = pool->data + pool->used;
    pool->used += size;
    return ptr;
}
```

### Debugging Memory Issues

1. **Valgrind** (Linux/macOS):
   ```
   valgrind --leak-check=full ./your_program
   ```

2. **AddressSanitizer** (GCC/Clang):
   ```c
   gcc -fsanitize=address -g your_program.c
   ```

3. **Custom Wrappers**:
   ```c
   #ifdef DEBUG
   #define malloc(size) debug_malloc(size, __FILE__, __LINE__)
   #define free(ptr) debug_free(ptr, __FILE__, __LINE__)
   #endif
   ```