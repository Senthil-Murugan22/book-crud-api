# BOOKS-CRUD-API
This project is a beginner-friendly backend application built with Express.js that implements CRUD operations for managing books using an in-memory data structure.

# 📚 Book CRUD API

A beginner-friendly backend project built using Express.js that performs CRUD (Create, Read, Update, Delete) operations on book data.

---

## 🚀 Features

* ➕ Add a new book (POST)
* 📥 Get all books (GET)
* ✏️ Update a book by ID (PUT)
* ❌ Delete a book by ID (DELETE)

---

## 🛠️ Tech Stack

* Node.js
* Express.js

---

## 📁 Project Structure

```
book-crud-api/
 ├── book.js
```

---

## ▶️ How to Run

1. Install dependencies:

```
npm install
```

2. Start the server:

```
node book.js
```

3. Open in browser:

```
http://localhost:3000/api/books
```

---

## 🌐 API Endpoints

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| POST   | /api/books     | Add a new book      |
| GET    | /api/books     | Get all books       |
| PUT    | /api/books/:id | Update a book by ID |
| DELETE | /api/books/:id | Delete a book by ID |

---

## 📌 Sample Data

```json
[
  {
    "id": 0,
    "title": "Harry Potter",
    "author": "J.K. Rowling"
  },
  {
    "id": 1,
    "title": "The Alchemist",
    "author": "Paulo Coelho"
  },
  {
    "id": 2,
    "title": "Wings of Fire",
    "author": "A.P.J. Abdul Kalam"
  }
]
```

---

## 📌 Example Requests

### ➕ Create Book (POST)

```
POST /api/books
```

```json
{
    "id": 4,
    "title": "Wings of Fire II",
    "author": "A.P.J. Abdul Kalam"
  }
```

👉 Response:

```json
{
    "id": 4,
    "title": "Wings of Fire II",
    "author": "A.P.J. Abdul Kalam"
  }
```

---

### 📥 Get All Books (GET)

```
GET /api/books
```

👉 Response:

```json
[
  {
    "id": 0,
    "title": "Harry Potter",
    "author": "J.K. Rowling"
  },
  {
    "id": 2,
    "title": "Wings of Fire",
    "author": "A.P.J. Abdul Kalam"
  }
]
```

---

### ✏️ Update Book (PUT)

```
PUT /api/books/1
```

```json
{
  "title": "The Alchemist (Updated)",
  "author": "Paulo Coelho"
}
```

👉 Response:

```json
{
  "id": 1,
  "title": "The Alchemist (Updated)",
  "author": "Paulo Coelho"
}
```

---

### ❌ Delete Book (DELETE)

```
DELETE /api/books/2
```

👉 Response:

```json
{
  "id": 2,
  "title": "Wings of Fire",
  "author": "A.P.J. Abdul Kalam"
}
```
## 📞 Need Help?
If you have any questions, feel free to reach out or open an issue. 😊


## 👨‍💻 Developed By
This project is developed by [Senthil Murugan A K](https://github.com/Senthil-Murugan22). Feel free to connect with me!
