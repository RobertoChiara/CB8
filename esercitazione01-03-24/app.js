const express = require("express");
const hbs = require("hbs");
const app = express();
const film = require("./film");
const bodyParser = require("body-parser");

app.use(express.static("./public"));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/film", (req, res) => {
  res.render("film", { film });
});

app.get("/directors", (req, res) => {
  res.render("directors", { film });
});

app.get("/add_movie", (req, res) => {
  res.render("add_movie");
});

app.post("/add_movie", (req, res) => {
  const newFilm = req.body;
  film.push(newFilm);
  res.redirect("/film");
});

app.listen(3000);
