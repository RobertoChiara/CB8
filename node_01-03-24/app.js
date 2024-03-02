const express = require("express");
const hbs = require("hbs");
const app = express();
const film = require("./film");

app.use(express.static("./public"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/film", (req, res) => {
  res.render("film", { film });
});

app.get("/directors", (req, res) => {
  res.render("directors", { film });
});

app.listen(3000);
