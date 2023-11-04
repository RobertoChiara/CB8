// Esercizio 1------------------------------------------

function getThermometer(actualCelsius) {
  if (isNaN(actualCelsius)) {
    //qui ho provato ad indicare al termometro di dare un errore se non si usa un numero come valore, ho trovato suw3school la funzione NaN, molto utile
    return "I think you are entering the temperature wrong, use a number!";
  }
  if (actualCelsius <= 5) {
    //qui il termometro, ho voluto osare un po di piú con i valori ma in caso si possono facilmente modificare per avere i 3 valori di freddo,mite,caldo richiesti
    return "It's freezing outside! Try to stay at home.";
  } else if (actualCelsius > 5 && actualCelsius <= 10) {
    return "It's cold outside. Cover yourself well.";
  } else if (actualCelsius > 10 && actualCelsius <= 25) {
    return "The temperature is mild.";
  } else if (actualCelsius > 25 && actualCelsius <= 35) {
    return "It's very hot outside! cool off and try not to stand under sunray.";
  } else if (actualCelsius > 35 && actualCelsius <= 45) {
    return "It's too hot! Stay indoors!!!";
  } else if (actualCelsius > 45 && actualCelsius <= 50) {
    return "Are you by any chance in a desert?.";
  } else if (actualCelsius > 50) {
    return "There is no more life out there, no more hope.... it's over";
  }
}

console.log(getThermometer("Friday")); //prova con valore non numerico, ok
console.log(getThermometer(-22)); //ok
console.log(getThermometer(7)); //ok
console.log(getThermometer(22)); //ok
console.log(getThermometer(30)); //ok
console.log(getThermometer(37)); //ok
console.log(getThermometer(48)); //ok
console.log(getThermometer(60)); //ok
