// Esercizio 1------------------------------------------

function getThermometer(actualCelsius) {
  if (isNaN(actualCelsius)) {
    //qui ho provato ad indicare al termometro di dare un errore se non si usa un numero come valore, ho trovato suw3school la funzione NaN, molto utile
    return "Credo tu stia sbagliando ad immettere la temperatura, usa un numero!";
  }
  if (actualCelsius <= 5) {
    //qui il termometro, ho voluto osare un po di piú con i valori ma in caso si possono facilmente modificare per avere i 3 valori di freddo,mite,caldo richiesti
    return "Fuori è gelido! Cerca di restare a casa.";
  } else if (actualCelsius > 5 && actualCelsius <= 10) {
    return "Fuori fa freddo. Copriti bene.";
  } else if (actualCelsius > 10 && actualCelsius <= 25) {
    return "La temperatura è mite.";
  } else if (actualCelsius > 25 && actualCelsius <= 35) {
    return "C'é molto caldo fuori! rinfrescati e cerca di non stare sotto al sole.";
  } else if (actualCelsius > 35 && actualCelsius <= 45) {
    return "Fá troppo caldo! Stai in casa!!.";
  } else if (actualCelsius > 45 && actualCelsius <= 50) {
    return "Sei per caso in un deserto?.";
  } else if (actualCelsius > 50) {
    return "Non c'é più vita la fuori, non c'é piú speranza...";
  }
}

console.log(getThermometer("venerdi")); //prova con valore non numerico, ok
console.log(getThermometer(-22)); //ok
console.log(getThermometer(7)); //ok
console.log(getThermometer(22)); //ok
console.log(getThermometer(30)); //ok
console.log(getThermometer(37)); //ok
console.log(getThermometer(48)); //ok
console.log(getThermometer(60)); //ok
