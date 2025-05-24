# **Library Management System (CRUD) - Node.js Project**  
A complete **Node.js** project with **Express, MongoDB (Mongoose), and REST API** implementation.  
This project covers:  
✅ **Express.js** (Routing, Middleware)  
✅ **MongoDB** (CRUD Operations with Mongoose)  
✅ **REST API** (GET, POST, PUT, DELETE)  
✅ **Error Handling** (Middleware)  
✅ **File Structure Best Practices**  
✅ **Environment Variables** (dotenv)  
✅ **Request Validation**  

---

## **📁 Project Structure**
```bash
library-management/
├── config/
│   ├── db.js          # MongoDB connection
├── controllers/
│   ├── bookController.js # Business logic
├── models/
│   ├── Book.js        # Mongoose schema
├── routes/
│   ├── bookRoutes.js  # API endpoints
├── middlewares/
│   ├── errorHandler.js # Error handling
├── .env               # Environment variables
├── app.js             # Main app entry
├── package.json
└── README.md
```

---

## **🚀 Step 1: Setup Project**
### **1. Initialize Project**
```bash
mkdir library-management
cd library-management
npm init -y
```

### **2. Install Dependencies**
```bash
npm install express mongoose dotenv body-parser cors
npm install --save-dev nodemon
```

### **3. Update `package.json`**
```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

---

## **🔌 Step 2: Configure MongoDB**
### **1. `config/db.js`**
```javascript
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected 🚀");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectDB;
```

### **2. `.env` (Environment Variables)**
```env
MONGODB_URI=mongodb://localhost:27017/library_db
PORT=5000
```

---

## **📖 Step 3: Create Book Model**
### **`models/Book.js`**
```javascript
const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishYear: { type: Number, required: true },
  },
  { timestamps: true } // Adds createdAt & updatedAt
);

module.exports = mongoose.model("Book", BookSchema);
```

---

## **🛠️ Step 4: Book Controller (CRUD Logic)**
### **`controllers/bookController.js`**
```javascript
const Book = require("../models/Book");

// @desc    Get all books
// @route   GET /api/books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc    Create a book
// @route   POST /api/books
const createBook = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    const book = await Book.create({ title, author, publishYear });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: "Invalid Data" });
  }
};

// @desc    Get a book by ID
// @route   GET /api/books/:id
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc    Update a book
// @route   PUT /api/books/:id
const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Returns updated book
    );
    if (!updatedBook) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: "Invalid Data" });
  }
};

// @desc    Delete a book
// @route   DELETE /api/books/:id
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ error: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
```

---

## **🛣️ Step 5: Define Routes**
### **`routes/bookRoutes.js`**
```javascript
const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

// GET all books & POST a new book
router.route("/").get(getAllBooks).post(createBook);

// GET, PUT, DELETE a book by ID
router.route("/:id").get(getBookById).put(updateBook).delete(deleteBook);

module.exports = router;
```

---

## **🚦 Step 6: Error Handling Middleware**
### **`middlewares/errorHandler.js`**
```javascript
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
};

module.exports = errorHandler;
```

---

## **🎯 Step 7: Main App File (`app.js`)**
```javascript
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Database Connection
connectDB();

// Routes
app.use("/api/books", bookRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});
```

---

## **📡 API Endpoints**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/books` | Get all books |
| `POST` | `/api/books` | Create a new book |
| `GET` | `/api/books/:id` | Get a single book |
| `PUT` | `/api/books/:id` | Update a book |
| `DELETE` | `/api/books/:id` | Delete a book |

---

## **🚀 Running the Project**
1. Start MongoDB locally (`mongod`).
2. Run the server:
```bash
npm run dev
```
3. Test API using **Postman** or **Thunder Client (VS Code)**.

---

## **📌 Key Node.js Concepts Covered**
✅ **Express.js** (Routing, Middleware)  
✅ **MongoDB (Mongoose)** (Schemas, CRUD)  
✅ **REST API Design** (GET, POST, PUT, DELETE)  
✅ **Error Handling** (Middleware)  
✅ **Environment Variables** (`dotenv`)  
✅ **Project Structure Best Practices**  

---

## **📂 Final Project Structure**
```bash
library-management/
├── config/
│   └── db.js
├── controllers/
│   └── bookController.js
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
├── middlewares/
│   └── errorHandler.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

---

## **🎯 Conclusion**
This **Library Management System** covers all core **Node.js** concepts.  
🔹 **Revise:**  
- Express.js routing  
- MongoDB (Mongoose) CRUD  
- REST API best practices  
- Error handling  
- Project structure  

Now, **extend** this project by adding:  
🔸 **User Authentication** (JWT)  
🔸 **Pagination** (for large book lists)  
🔸 **Swagger Docs** (API documentation)  

Happy Coding! 🚀