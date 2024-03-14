const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <form action="/books" method="POST">
  <input type="text" placeholder="Book title" name="title" />
  <input type="text" placeholder="Book author" name="author" />
  <input type="text" placeholder="Book genre" name="genre" />
  <input type="number" placeholder="Book year" name="year" />
  <button type="submit">Add Book</button>
</form>

  `);
});

module.exports = router;
