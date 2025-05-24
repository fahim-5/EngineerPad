# **Node.js OS and Path Modules - Detailed Explanation**

## **1. OS Module**
The **`os` (Operating System)** module provides operating system-related utility methods and properties. It helps interact with the underlying system (CPU, memory, network, etc.).

### **Key Methods & Properties**

#### **1.1. System Information**
| Method/Property | Description | Example |
|----------------|------------|---------|
| `os.platform()` | Returns the OS platform (`'win32'`, `'linux'`, `'darwin'` for macOS) | `os.platform()` → `'win32'` |
| `os.arch()` | Returns CPU architecture (`'x64'`, `'arm'`, `'ia32'`) | `os.arch()` → `'x64'` |
| `os.type()` | Returns OS name (`'Windows_NT'`, `'Linux'`, `'Darwin'`) | `os.type()` → `'Windows_NT'` |
| `os.release()` | Returns OS release version | `os.release()` → `'10.0.19043'` |

#### **1.2. CPU & Memory**
| Method/Property | Description | Example |
|----------------|------------|---------|
| `os.cpus()` | Returns an array of CPU cores (model, speed, times) | `os.cpus().length` → `8` |
| `os.totalmem()` | Total system memory (in bytes) | `os.totalmem() / (1024 ** 3)` → `16` (GB) |
| `os.freemem()` | Free system memory (in bytes) | `os.freemem() / (1024 ** 3)` → `4.2` (GB) |

#### **1.3. Network & User Info**
| Method/Property | Description | Example |
|----------------|------------|---------|
| `os.hostname()` | Returns the system hostname | `os.hostname()` → `'DESKTOP-ABC123'` |
| `os.networkInterfaces()` | Returns network interfaces (IP, MAC, etc.) | `os.networkInterfaces().eth0` |
| `os.userInfo()` | Returns current user info (username, home directory) | `os.userInfo().username` → `'admin'` |

#### **1.4. Other Useful Methods**
| Method/Property | Description |
|----------------|------------|
| `os.uptime()` | System uptime in seconds |
| `os.loadavg()` | CPU load averages (Linux/macOS) |
| `os.tmpdir()` | Returns the OS default temp directory |

### **Example Usage**
```javascript
const os = require('os');

console.log("OS Platform:", os.platform());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory (GB):", os.totalmem() / (1024 ** 3));
console.log("Free Memory (GB):", os.freemem() / (1024 ** 3));
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.userInfo().homedir);
```

---

## **2. Path Module**
The **`path`** module provides utilities for working with file and directory paths. It helps handle cross-platform path differences (Windows vs. Unix).

### **Key Methods**

#### **2.1. Path Manipulation**
| Method | Description | Example |
|--------|------------|---------|
| `path.join(...paths)` | Joins path segments (handles `/` and `\`) | `path.join('dir', 'file.txt')` → `'dir/file.txt'` |
| `path.resolve(...paths)` | Resolves absolute path (from root) | `path.resolve('src', 'app.js')` → `'/home/user/src/app.js'` |
| `path.normalize(path)` | Normalizes path (removes `.`, `..`, extra slashes) | `path.normalize('dir/../file')` → `'file'` |

#### **2.2. Path Extraction**
| Method | Description | Example |
|--------|------------|---------|
| `path.dirname(path)` | Returns directory name | `path.dirname('/home/user/file.txt')` → `'/home/user'` |
| `path.basename(path, ext?)` | Returns filename (optionally removes extension) | `path.basename('/home/user/file.txt')` → `'file.txt'` |
| `path.extname(path)` | Returns file extension | `path.extname('file.txt')` → `'.txt'` |

#### **2.3. Path Parsing & Formatting**
| Method | Description |
|--------|------------|
| `path.parse(path)` | Splits path into `{ root, dir, base, ext, name }` |
| `path.format(pathObject)` | Converts path object back to string |

#### **2.4. Cross-Platform Handling**
| Method | Description |
|--------|------------|
| `path.sep` | OS-specific path separator (`\` on Windows, `/` on Unix) |
| `path.delimiter` | OS-specific path delimiter (`;` on Windows, `:` on Unix) |

### **Example Usage**
```javascript
const path = require('path');

// Join paths (cross-platform)
const fullPath = path.join('src', 'app', 'index.js');
console.log("Joined Path:", fullPath); // 'src/app/index.js' (or 'src\app\index.js' on Windows)

// Get file extension
console.log("Extension:", path.extname('file.txt')); // '.txt'

// Parse a path
const parsedPath = path.parse('/home/user/file.txt');
console.log(parsedPath);
/*
{
  root: '/',
  dir: '/home/user',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

// Resolve absolute path
console.log("Absolute Path:", path.resolve('app.js')); // '/home/user/app.js'
```

---

## **Key Differences**
| Feature | `os` Module | `path` Module |
|---------|------------|--------------|
| **Purpose** | Interact with OS (CPU, memory, network) | Handle file/directory paths |
| **Use Cases** | System monitoring, resource checks | File path manipulation |
| **Cross-Platform** | No (returns OS-specific data) | Yes (handles `/` and `\`) |
| **Common Methods** | `os.cpus()`, `os.totalmem()` | `path.join()`, `path.resolve()` |

### **When to Use Which?**
- Use **`os`** when you need:
  - System information (CPU, memory, hostname)
  - Network interface details
  - User information (home directory, username)

- Use **`path`** when you need:
  - Cross-platform path handling
  - Extracting filenames/directories
  - Building or resolving file paths

Both modules are **core Node.js modules**, so no installation is needed (`require('os')` / `require('path')`).