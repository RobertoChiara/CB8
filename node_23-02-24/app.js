const express = require("express");
const app = express();
const port = 7000;
const bodyParser = require("body-parser");
const authorize = require("./auth");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/enter", (req, res) => {
  res.sendFile(__dirname + "/public/enter.html");
});

app.post("/mostra-dati", (req, res) => {
  const { userName } = req.body;

  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  }
  res.status(400).send("Please enter all the details");
});

app.get("/dashboard", authorize, (req, res) => {
  res.send("Dashboard");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
