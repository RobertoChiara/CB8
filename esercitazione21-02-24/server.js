const express = require("express");
const books = require("./books.js");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Libro non trovato");
  }
});

app.get("/api/books/search", (req, res) => {
  const keyword = req.query.keyword.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(keyword) ||
      book.author.toLowerCase().includes(keyword) ||
      book.genre.toLowerCase().includes(keyword)
  );
  res.json(filteredBooks);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
