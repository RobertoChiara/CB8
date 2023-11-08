//Esercizio 1-----------------------------------------------

const sum = (n1, n2, n3) => n1 + n2 + n3; // Arrow function per i tre valori numerici

const sub = (n1, n2, n3) => n1 - n2 - n3;

const mult = (n1, n2, n3) => n1 * n2 * n3;

const div = (n1, n2, n3) => n1 / n2 / n3;

const calculator = (
  operator,
  n1,
  n2,
  n3 // Arrow function con callback
) => operator(n1, n2, n3);

console.log(calculator(sum, 7, 4, 9));
console.log(calculator(sub, 2, 6, 8));
console.log(calculator(mult, 3, 5, 1));
console.log(calculator(div, 10, 1, 7));

//Esercizio 2------------------------------------------------

const shoppingCart = [
  {
    id: 1,
    Name: "Product 1",
    Picture: "https://picsum.photos/200/300",
    Description: "This is product 1, a high quality item",
    Price: 199.9,
  },
  {
    id: 2,
    Name: "Product 2",
    Picture: "https://picsum.photos/200/300",
    Description: "Product 2 is available in different sizes and colors",
    Price: 24.9,
  },
  {
    id: 3,
    Name: "Product 3",
    Picture: "https://picsum.photos/200/300",
    Description: "A luxury product with exclusive details",
    Price: 54.9,
  },
  {
    id: 4,
    Name: "Product 4",
    Picture: "https://picsum.photos/200/300",
    Description: "Product 4 is the perfect choice for technology lovers",
    Price: 249.9,
  },
];

console.log(shoppingCart);

//MAP restituisce un nuovo array contenente i risultati delle operazioni svolte su ciascun elemento dell'array originale.
//Può modificare o trasformare gli oggetti durante l'iterazione.
//In questo caso ho provato ad applicare uno sconto del 20% dato che il BlackFriday é vicino! :D

const objectWithDiscount = shoppingCart.map((shoppingCart) => {
  const objectWithDiscount = shoppingCart.Price * 0.8; // moltiplico per 0.8 per avere lo sconto del 20%
  return { ...shoppingCart, Price: objectWithDiscount }; //qui ho usato lo spread operator per modificare solo il campo prezzo
});

console.log(objectWithDiscount);

//forEach d'altra parte, non crea un nuovo array, ma semplicemente itera una funzione per ogni elemento dell'array (in questo caso 4).
// Puó essere utilizzato per eseguire azioni su ciascun elemento dell'array senza creare un nuovo array. (Sta volta senza sconto :P)

console.log("forEach:");
shoppingCart.forEach((shoppingCart) => {
  console.log(shoppingCart);
});

//Esercizio 3---------------------------------------------------------------

const array1 = [1, 7, 3, 12, 5, 14, 9, 2, 11, 6];

const array2 = [8, 4, 10, 13, 1, 15, 7, 3, 11, 6];

//moltiplico per 2 usando map

const array1Mod = array1.map((number) => number * 2);

//aggiungo 5
const array2Mod = array2.map((number) => number + 5);

console.log(array1);
console.log(array2);

console.log("Array1 Transformed (*2):", array1Mod);
console.log("Array2 Transformed (+5):", array2Mod);

//Filtro i maggiori di 10
const array1Filtered = array1Mod.filter((number) => number > 10);

//Filtro i pari
const array2Filtered = array2Mod.filter((number) => number % 2 === 0);
// Per avere solo i numeri pari ho trovato questa funzione (% 2 === 0) da qui (https://www.geeksforgeeks.org/javascript-program-to-print-even-numbers-in-an-array/)
// che se non ho capito male usa il % per dividere i numeri per 2 e dá un valore True/false, per i numeri pari in caso di risultato uguale a 0

console.log("Array1 Filtered (Numerbers > 10):", array1Filtered);
console.log("Array2 Filtered (Even numers):", array2Filtered);
