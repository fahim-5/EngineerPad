# The `fs` Module in Node.js

The `fs` (File System) module is a core Node.js module that provides an API for interacting with the file system. It allows you to perform file operations like reading, writing, updating, and deleting files.

## Key Features of the `fs` Module

1. **File operations**: Create, read, update, delete files
2. **Directory operations**: Create, read, delete directories
3. **Both synchronous and asynchronous** versions of most methods
4. **Stream support** for handling large files efficiently

## How to Use the `fs` Module

First, you need to require the module:

```javascript
const fs = require('fs'); // CommonJS
// or
import fs from 'fs'; // ES Modules
```

## Common File Operations

### 1. Reading Files

**Asynchronous version (recommended):**

```javascript
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
```

**Synchronous version:**

```javascript
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
```

### 2. Writing Files

**Asynchronous:**

```javascript
const content = 'Hello, Node.js!';
fs.writeFile('example.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});
```

**Synchronous:**

```javascript
try {
  fs.writeFileSync('example.txt', 'Hello, Node.js!', 'utf8');
  console.log('File written successfully');
} catch (err) {
  console.error('Error writing file:', err);
}
```

### 3. Appending to Files

**Asynchronous:**

```javascript
fs.appendFile('example.txt', '\nNew line of text', 'utf8', (err) => {
  if (err) throw err;
  console.log('Content appended');
});
```

### 4. Checking File Existence

```javascript
fs.access('example.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.log('File does not exist');
  } else {
    console.log('File exists');
  }
});
```

### 5. Deleting Files

```javascript
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});
```

## Directory Operations

### 1. Creating Directories

```javascript
fs.mkdir('new-directory', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Directory created');
});
```

### 2. Reading Directory Contents

```javascript
fs.readdir('./', (err, files) => {
  if (err) throw err;
  console.log('Directory contents:', files);
});
```

### 3. Removing Directories

```javascript
fs.rmdir('empty-directory', (err) => {
  if (err) throw err;
  console.log('Directory removed');
});
```

## Working with File Stats

```javascript
fs.stat('example.txt', (err, stats) => {
  if (err) throw err;
  
  console.log('Is file?', stats.isFile());
  console.log('Is directory?', stats.isDirectory());
  console.log('Size:', stats.size);
  console.log('Created:', stats.birthtime);
});
```

## Promises API (Node.js 10+)

Node.js also provides a promise-based version of the `fs` module:

```javascript
const fs = require('fs').promises;

async function fileOperations() {
  try {
    await fs.writeFile('example.txt', 'Hello!');
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
    await fs.appendFile('example.txt', '\nGoodbye!');
    await fs.unlink('example.txt');
  } catch (err) {
    console.error(err);
  }
}

fileOperations();
```

## File Streams (for large files)

For better performance with large files, use streams:

```javascript
const readStream = fs.createReadStream('large-file.txt', 'utf8');
const writeStream = fs.createWriteStream('copy-of-large-file.txt');

readStream.on('data', (chunk) => {
  writeStream.write(chunk);
});

readStream.on('end', () => {
  writeStream.end();
  console.log('File copied successfully');
});
```

## Best Practices

1. Prefer asynchronous methods to avoid blocking the event loop
2. Use error handling for all file operations
3. For large files, use streams instead of reading the entire file into memory
5. In modern Node.js, prefer the promise-based API over callbacks

The `fs` module is powerful and essential for any Node.js application that needs to work with the file system. Choose the right method (sync/async, callbacks/promises, streams) based on your specific use case.
