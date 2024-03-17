const express = require("express");
const app = express();
const port = 8080;
const fs = require("fs");
const cors = require("cors"); //per non bloccare il server con le "cors"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let scientists = require("./data.json");

//CRUD Esercizio 1

//Avanzato nella /GET
app.get("/scientists", (req, res, next) => {
  let sortedScientists = [...scientists]; // Clono l'array degli scienziati per non alterare quello originale

  const { sortBy, sortOrder } = req.query; // Parametri di query per il campo di ordinamento e la direzione

  if (sortBy && sortOrder) {
    sortedScientists.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy].localeCompare(b[sortBy]); // Ordinamento ascendente
      } else if (sortOrder === "desc") {
        return b[sortBy].localeCompare(a[sortBy]); // Ordinamento discendente
      } else {
        return 0; // Se la direzione non è specificata o non è valida, lasciamo invariato l'ordinamento
      }
    });
  }
  //ESEMPIO di URL:
  //http://localhost:8080/scientists?sortBy=name&sortOrder=asc
  //http://localhost:8080/scientists?sortBy=name&sortOrder=desc

  res.json(sortedScientists);
});

app.post("/scientists", (req, res, next) => {
  const body = req.body;
  if (body.id && body.name && body.birth) {
    scientists.push(body);
    fs.writeFileSync("./data.json", JSON.stringify(scientists), (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
    res.status(201).send("Scientist added successfully");
  } else {
    res.status(400).send("Invalid structure");
  }
});

app.delete("/scientists/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  scientists = scientists.filter((scientist) => scientist.id !== id);
  fs.writeFileSync("./data.json", JSON.stringify(scientists), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  res.send("Scientist deleted successfully");
  res.sendStatus(204);
});

app.put("/scientists/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const body = req.body;
  const index = scientists.findIndex(
    (scientist) => scientist.id === id,
    scientists.name === body.name,
    scientists.birth === body.birth
  );

  if (index !== -1) {
    scientists[index] = body;
    fs.writeFileSync("./data.json", JSON.stringify(scientists), (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
    res.status(200).send("Scientist updated successfully");
  } else {
    res.status(404).send("Scientist not found");
  }
});

app.get("/", (req, res) => {
  res.send("Hello Scientists!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
