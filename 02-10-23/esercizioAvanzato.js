//EsercizioAvanzato-------------------------------------

// 1----------------------------------------------------
const Favorites = [];
// 1 example
console.log(Favorites);

// 2----------------------------------------------------
function addToMyFavorites(animals) {
  Favorites.push(animals);
  console.log(animals + " was added to your favorites.");
}

// 2 example
addToMyFavorites("Alpaca");
addToMyFavorites("Coguaro");
addToMyFavorites("Ermellino");
addToMyFavorites("Licaone");
addToMyFavorites("Gru");

// 3----------------------------------------------------
function showFavorites() {
  console.log("Favorites:");
  for (let i = 0; i < Favorites.length; i++) {
    console.log(Favorites[i]);
  }
}

// 3 example
showFavorites();

// 4----------------------------------------------------
function removeFromFavorites(animals) {
  const index = Favorites.indexOf(animals);
  if (index !== -1) {
    Favorites.splice(index, 1);
    console.log(animals + " was removed from your favorites.");
  } else {
    console.log(animals + " it is not present in your favorites.");
  }
}

// 4 example
removeFromFavorites("Gru");
showFavorites();
