const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;

// Importo il router per l'endpoint addBooks
const addBooksRouter = require("./routes/addBooks");

// Middleware per gestire i dati inviati nel corpo della richiesta
app.use(bodyParser.urlencoded({ extended: true }));

// Utilizzo il router per l'endpoint addBooks
app.use("/addBooks", addBooksRouter);

const books = [
  {
    id: 1,
    title: "Il signore degli anelli",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1954,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian fiction",
    year: 1949,
  },
  {
    id: 3,
    title: "Orgoglio e pregiudizio",
    author: "Jane Austen",
    genre: "Romance",
    year: 1813,
  },
  {
    id: 4,
    title: "Cronache del ghiaccio e del fuoco",
    author: "George R.R. Martin",
    genre: "Fantasy",
    year: 1996,
  },
  {
    id: 5,
    title: "Harry Potter e la pietra filosofale",
    author: "J.K. Rowling",
    genre: "Fantasy",
    year: 1997,
  },
  {
    id: 6,
    title: "Il nome del vento",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    year: 2007,
  },
  {
    id: 7,
    title: "Le cronache di Narnia",
    author: "C.S. Lewis",
    genre: "Fantasy",
    year: 1950,
  },
  {
    id: 8,
    title: "Il piccolo principe",
    author: "Antoine de Saint-Exupéry",
    genre: "Children's literature",
    year: 1943,
  },
  {
    id: 9,
    title: "La ragazza di fuoco",
    author: "Suzanne Collins",
    genre: "Dystopian fiction",
    year: 2009,
  },
  {
    id: 10,
    title: "Il vecchio e il mare",
    author: "Ernest Hemingway",
    genre: "Literary fiction",
    year: 1952,
  },
];

// Endpoint per la homepage
app.get("/", (req, res) => {
  res.send(`
     <h1>Books homepage</h1>
     <a href="/books">Go to see all books</a>
     <a href="/addBooks">Go to add new book</a>
   `);
});

// Endpoint per ottenere tutti i libri
app.get("/books", (req, res) => {
  res.json(books);
});

// Endpoint per aggiungere un nuovo libro
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.redirect("/books");
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
