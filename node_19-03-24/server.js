require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const Book = require("./models/books");

const app = express();
const db = mongoose.connection;
app.use(express.json());

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.get("/books", async (req, res) => {
  const { page = 1, limit = 3 } = req.query;

  try {
    const books = await Book.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Book.countDocuments();
    res.json({
      books,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/books", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
    cover: req.body.cover,
  });

  try {
    const newBook = await book.save();
    res.status(201).json({ newBook });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    if (req.params.id === "all") {
      await Book.deleteMany();
      res.status(201).json({ message: "All books deleted" });
    } else {
      await Book.findByIdAndDelete(req.params.id);
      res.status(201).json({ message: "Book deleted" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    } else {
      const { title, author, genre, year, cover } = req.body;
      if (title && author && genre && year && cover) {
        book.title = title;
        book.author = author;
        book.genre = genre;
        book.year = year;
        book.cover = cover;
        await book.save();
        res.status(201).json({ message: "Book updated" });
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3000);
