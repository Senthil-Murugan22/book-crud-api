const express = require('express');
const app = express();

app.use(express.json());

// Fake database (array)
let books = [];

// CREATE (POST)
app.post('/api/books', (req, res) => {
  const book = req.body;
  books.push(book);
  res.json(book);
});

// READ (GET)
app.get('/api/books', (req, res) => {
  res.json(books);
});

// UPDATE (PUT)
app.put('/api/books/:id', (req, res) => {
  const id = req.params.id;
  const newData = req.body;

  books[id] = newData;

  res.json(newData);
});

// DELETE (DELETE)
app.delete('/api/books/:id', (req, res) => {
  const id = req.params.id;

  const deleted = books.splice(id, 1);

  res.json(deleted[0]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});