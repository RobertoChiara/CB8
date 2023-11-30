//Sono riuscito a cambiare la API key mettendo quella mia

//Qui imposto la short Fn
const cE = (type) => document.createElement(type);

import { httpGET } from "./modules/http.js";
import {
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
} from "./modules/components.js";

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);
  const listContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));
  listContainerEl.append(cardsListEl);

  return listContainerEl;
};

const mainSectionEl = document.querySelector(".main");

//Esercizio 1-------------------------------------------------------
//mi seleziono la navbar col querySelector
const navSectionEl = document.querySelector(".navbar");

const createDynamicNavbar = () => {
  const navbar = cE("nav");
  navbar.className = "navbar";

  const searchDiv = cE("div");
  searchDiv.className = "search";

  const logoImg = cE("img");
  logoImg.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  logoImg.alt = "netflix-clone-logo";

  const searchInput = cE("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search";

  searchDiv.appendChild(logoImg);
  searchDiv.appendChild(searchInput);

  const linksDiv = cE("div");
  linksDiv.className = "links";

  const linksList = cE("ul");
  linksList.className = "links-list";

  const tvShowsItem = cE("li");
  tvShowsItem.textContent = "TV Shows";

  const moviesItem = cE("li");
  moviesItem.textContent = "Movies";

  const categoriesLabel = cE("label");
  categoriesLabel.htmlFor = "categories"; //qui ho trovato questa interessante funzione per i label (https://www.w3schools.com/jsref/prop_label_htmlfor.asp)
  categoriesLabel.textContent = "Categories";

  const categoriesSelect = cE("select");
  categoriesSelect.name = "categories";
  categoriesSelect.id = "categories";

  const emptyOption = cE("option");
  categoriesSelect.appendChild(emptyOption);

  linksList.append(tvShowsItem, moviesItem, categoriesLabel, categoriesSelect);

  linksDiv.appendChild(linksList);

  navbar.appendChild(searchDiv);
  navbar.appendChild(linksDiv);

  return navbar;
};

const dynamicNavbarEl = createDynamicNavbar();

navSectionEl.appendChild(dynamicNavbarEl);

//Esercizio 2----------DA FARE---------------------------------------------

// 1 STEP
// httpGET("/tv/top_rated").then((data) => {
//   const listContainerEl = listsContainerElGen("Top Rated");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// httpGET("/tv/popular").then((data) => {
//   const listContainerEl = listsContainerElGen("Popular");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// 2 STEP
// asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated").then(
//   (element) => mainSectionEl.append(element)
// );
// asyncListContainerElGen("/tv/popular", "Serie Tv - Popular").then((element) =>
//   mainSectionEl.append(element)
// );

// 3 STEP
Promise.all([
  asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming"),
  asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing"),
  asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated"),
  asyncListContainerElGen("/tv/popular", "Serie Tv - Popular"),
]).then((elements) => elements.map((el) => mainSectionEl.append(el)));
