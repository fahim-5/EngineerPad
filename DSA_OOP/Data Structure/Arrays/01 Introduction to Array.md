# **Arrays in C++ (1D, 2D, Multi-dimensional) with Examples**

Arrays are fundamental data structures that store elements of the **same type** in **contiguous memory**. Let's explore them in C++ with clear examples.

---

## **1. 1D Arrays (Single Dimension)**
### **Declaration & Initialization**
```cpp
#include <iostream>
using namespace std;

int main() {
    // Method 1: Declare then initialize
    int arr1[5];
    arr1[0] = 10;
    arr1[1] = 20;
    
    // Method 2: Initialize at declaration
    int arr2[5] = {10, 20, 30, 40, 50};
    
    // Method 3: Auto-size (compiler counts elements)
    int arr3[] = {1, 2, 3, 4, 5};
    
    // Accessing elements
    cout << arr2[2] << endl; // Output: 30 (index starts at 0)
    
    return 0;
}
```
### **Key Points**
- Fixed size (static)
- O(1) random access
- Elements stored contiguously

### **Common Operations**
```cpp
// Traversing
for(int i = 0; i < 5; i++) {
    cout << arr2[i] << " ";
}

// Finding max element
int max = arr2[0];
for(int i = 1; i < 5; i++) {
    if(arr2[i] > max) max = arr2[i];
}
cout << "\nMax: " << max << endl;
```

---

## **2. 2D Arrays (Matrix)**
### **Declaration & Initialization**
```cpp
#include <iostream>
using namespace std;

int main() {
    // 3x3 matrix
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    // Accessing elements
    cout << matrix[1][2] << endl; // Output: 6 (row 1, column 2)
    
    return 0;
}
```
### **Matrix Operations**
```cpp
// Printing matrix
for(int i = 0; i < 3; i++) {
    for(int j = 0; j < 3; j++) {
        cout << matrix[i][j] << " ";
    }
    cout << endl;
}

// Sum of all elements
int sum = 0;
for(int i = 0; i < 3; i++) {
    for(int j = 0; j < 3; j++) {
        sum += matrix[i][j];
    }
}
cout << "Total sum: " << sum << endl;
```

---

## **3. Multi-dimensional Arrays**
### **3D Array Example**
```cpp
#include <iostream>
using namespace std;

int main() {
    // 2x2x2 cube
    int cube[2][2][2] = {
        {
            {1, 2},
            {3, 4}
        },
        {
            {5, 6},
            {7, 8}
        }
    };
    
    // Accessing elements
    cout << cube[1][0][1] << endl; // Output: 6 (layer 1, row 0, col 1)
    
    return 0;
}
```

---

## **4. Time Complexity**
| Operation | Time | Example |
|-----------|------|---------|
| Access | O(1) | `arr[i]` |
| Search | O(n) | Linear search |
| Insertion at end | O(1) | (If space available) |
| Insertion in middle | O(n) | Need to shift elements |
| Deletion | O(n) | Need to shift elements |

---

## **5. When to Use Arrays?**
✔ **Fast access** by index  
✔ **Mathematical computations**  
✔ **Fixed-size data** (e.g., days in week)  

### **When NOT to Use Arrays?**
❌ **Frequent insertions/deletions** → Use `vector`  
❌ **Dynamic sizing needed** → Use `vector`  

---

## **6. C++ Array Limitations & Alternatives**
- **Fixed size** → Use `vector` for dynamic arrays
- **No bounds checking** → Careful with index errors
- **Better alternative**: 
  ```cpp
  #include <vector>
  vector<int> dynamicArr = {1, 2, 3};
  dynamicArr.push_back(4); // Now contains {1,2,3,4}
  ```

---

## **Key Takeaways**
1. **1D Arrays** → Simple lists `int arr[5]`
2. **2D Arrays** → Matrices `int matrix[3][3]`
3. **Multi-dim** → Tensors `int cube[2][2][2]`
4. **Fast O(1) access** but **slow O(n) insert/delete**
5. **Prefer `vector`** when dynamic sizing needed

