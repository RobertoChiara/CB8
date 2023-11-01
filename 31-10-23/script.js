const animali = [
  "Cane delle praterie",
  "Gatto di Pallas",
  "Serpente Bruno orientale",
  "Ayeaye del Madagascar",
  "Babirussa",
  "Discoglosso puntato",
  "Bombina dal ventre di Fuoco",
  "Sula dalle zampe azzurre",
];

// qui ho provato alcuni metodi degli arrey
// console.log(animali);
// animali.push("Xenopo liscio");
// console.log(animali);
// animali.pop("Xenopo liscio");
// console.log(animali);
// animali.reverse();
// console.log(animali);
// animali.reverse();
// console.log(animali);

//qui la lista non indicizzata
for (let i = 0; i <= animali.length - 1; i++) {
  console.log(animali[i]);
}

//qui la lista indicizzata
for (let i = 0; i <= animali.length - 1; i++) {
  console.log(i + 1 + ": " + animali[i]);
}

//qui ho provato alcune modifiche per la visualizzazione
for (let i = 0; i <= animali.length - 1; i++) {
  console.log(i + 1 + "= (" + animali[i] + ")");
}
