//TEMPLATE SERVONO PER DINAMICIZARE GLI HTML CHE INSERIAMO
//BISOGNA INSTALLARE NPM I HBS

const express = require("express");
const hbs = require("hbs");
const articoli = require("./articoli"); // PRLEVARE LA RISORSA

const app = express();
app.use(express.static("./public"));
//CONFIGURAZIONE // CREA UNA CARTELLA VIEWS CARTELLA DEI TEMPLATE, CON DENTRO FILE HTML CON ESTENSIONE .HBS
app.set("view engine", "hbs");
//REGISTRARE I PARTIAL PER USARLI
hbs.registerPartials(__dirname + "/views/partials");

let option = {
  colore: "rosso",
  img: "https://picsum.photos/200/300",
};

const preferenze = {
  pet: "gatti",
  stagione: "autunno",
  luogo: "Roma",
};

app.get("/test", (req, res) => {
  res.send(
    `<h1>Posso generare html anche con una variabile. Per esempio: ${option.colore}</h1>`
  );
});
// RENDI LA PAGINA DENTRO LA CARTELLA VIEWS E DATI COME ULTERIORE PARAMETRO
app.get("/", (req, res) => {
  res.render("home", {
    nome: "Simona", // SI PUO' AGGIUNGER UNA VARIABILE
    preferenze: preferenze,
    option, // PREFEREENZE E OPTION SONO UGUALI E SI SCRIVONO UNA VOLTA PER ABBREVIARE
  });
});
// NUOVA PAGINA DENTRO VIEW CON NUOVO URL
app.get("/about", (req, res) => {
  res.render("about", {
    title: "pagina about",
  });
});
// DATA GENERICO
app.get("/articoli", (req, res) => {
  res.render("lista", { data: articoli });
});

app.get("/profilo", (req, res) => {
  res.render("profilo", {
    preferenze,
    option,
    pet: "gatti certosini",
    admin: false,
  });
});

app.listen(3000);
