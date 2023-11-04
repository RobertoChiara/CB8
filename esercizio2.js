//Esercizio2----------------------------------

//const currentYear = new Date().getFullYear(); // per ottenere l'anno attuale
//const age = currentYear - this.dateOfBirth; // non funzionano in quanto qui siamo nello Scope globale e this.dateOfBirth e nello scope primario

const Roberto_Chiara = {
  name: "Roberto",
  surname: "Chiara",
  dateOfBirth: 1990,
  job: "PhD Researcher",
  cityOfBirth: "Palermo",
  eyeColor: ["Lightblue", "Yellow"],
  hair: "Brown",
  height: 177,
  idCard: function () {
    const currentYear = new Date().getFullYear(); // qui per vedere se ho capito gli Scope ho inserito delle propietá all'interno della funzione (Scope primario),
    const age = currentYear - this.dateOfBirth; // per calcolare l'età ho pensato di fare questa opearioze matematica tra la data di nascita e lánno attuale

    return (
      "Name: " +
      this.name +
      ", Surname: " +
      this.surname +
      ", Date Of Birth: " +
      this.dateOfBirth +
      ", Job: " +
      this.job +
      ", Age: " +
      age
    );
  },
};

console.log(Roberto_Chiara);
console.log(Roberto_Chiara.name);
console.log(Roberto_Chiara.height);
console.log(Roberto_Chiara.dateOfBirth);
//console.log(currentYear);
console.log(Roberto_Chiara.idCard());
