require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URI);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Book = require("./models/books");
const User = require("./models/user");

const app = express();
const db = mongoose.connection;
app.use(express.json());

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//authenticator middleware

const authenticationToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "Inserire un token valido." });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res
          .status(403)
          .json({ message: "Non hai i permessi di verifica." });
      req.user = user;
      next();
    });
  }
};
//mi imposto la POST per il login ESERCIZIO avanzato
app.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });

  if (user === null) {
    return res.status(400).json({ message: "User not exist" });
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.json({ accessToken });
    }
  } catch (error) {
    res.json({ message: "Authentication failed" });
  }
});
//mi imposto l'endpoint per la registrazione ESERCIZIO 1
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    const newUser = await user.save();
    res.status(201).json({ message: "User registered", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
});

app.post("/books", authenticationToken, async (req, res) => {
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

app.delete("/books/:id", authenticationToken, async (req, res) => {
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

app.put("/books/:id", authenticationToken, async (req, res) => {
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

app.get("/books/:id", authenticationToken, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/books", authenticationToken, async (req, res) => {
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

app.listen(3000, () => {
  console.log("Server connected on port 3000");
});
