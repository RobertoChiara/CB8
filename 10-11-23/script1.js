//Esercizio1------------------------------------------------

// qui mi creo delle funzioni "ad hoc"
const cE = (type) => document.createElement(type);
// creo gli elementi
// qui uso la funzione "corta" per creare gli elementi con il "document.createElement" di prima
const wrapperHeroEl = cE("div");
const heroEl = cE("div");
const imgEL = cE("img");
const textEl = cE("div");
const titleEl = cE("h1");
const pEl = cE("p");
const btnEl = cE("button");

//inserisco i textContent
titleEl.textContent = "Ford Raptor 2023";
pEl.textContent = "Scopri la nuova gamma";
btnEl.textContent = "Discovery";

//Inserisco le src e le posizioni
imgEL.setAttribute(
  "src",
  "https://www.ford.it/content/dam/guxeu/rhd/central/cars/2022-ranger-raptor/future-vehicle/billboards/raptor_bb1-21x9-2160x925.jpg.renditions.original.png"
);
imgEL.setAttribute("alt", "Car Pic");

wrapperHeroEl.setAttribute("class", "wrapperHero");
heroEl.setAttribute("class", "hero");
imgEL.setAttribute("class", "hero-image");
textEl.setAttribute("class", "hero-text");

//appendo al body (parent) il mio div (child)
document.body.appendChild(wrapperHeroEl);
wrapperHeroEl.appendChild(heroEl);
textEl.append(titleEl, pEl, btnEl);
heroEl.append(imgEL, textEl);

btnEl.style.backgroundColor = "white";
btnEl.style.borderRadius = "8px";

//qui mi creo un event listener carino con un over del mouse
btnEl.addEventListener("mouseover", () => {
  btnEl.style.backgroundColor = "sandybrown";
  btnEl.style.color = "white";
  btnEl.style.transform = "scale(1.2)";
});
btnEl.addEventListener("mouseout", () => {
  btnEl.style.backgroundColor = "white";
  btnEl.style.color = "black";
  btnEl.style.transform = "scale(1)";
});

//Esercizio 2-------------------------------------------------
btnEl.addEventListener("click", () => {
  heroEl.style.display = "none";
});

//Esercizio Avanzato-------------------------------------------------

// creo il div
const sectionGallery = cE("div");
document.body.append(sectionGallery);
sectionGallery.setAttribute("class", "section-gallery");

// base
const imageGenerated = {
  id: 1,
  imgUrl: "https://picsum.photos/200/200?1",
  altText: "Alternative image 1",
};

// Funzione per generare immagini dinamicamente
function imageGenerator(imageData) {
  const gallery = sectionGallery;

  // Creazione dell'elemento immagine
  const imgElement = cE("img");

  // Impostazione degli attributi dell'immagine
  imgElement.src = imageData.imgUrl;
  imgElement.alt = imageData.altText;
  imgElement.id = `image-${imageData.id}`;
  imgElement.setAttribute("class", "gallery-image");

  // Aggiungi l'immagine alla galleria
  gallery.appendChild(imgElement);
  return imgElement;
}

// Chiamo la funzione per generare le immagini
imageGenerator(imageGenerated);
imageGenerator(imageGenerated);
imageGenerator(imageGenerated);

//Esercizio Avanzato 2-------------------------------------------------

const sectionGalleryTwo = cE("div");
document.body.append(sectionGalleryTwo);
sectionGalleryTwo.setAttribute("class", "section-gallery2");

const imageList = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/200/200?random=6",
    altText: "Immagine 1",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/200?random=10",
    altText: "Immagine 2",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/200/200?random=9",
    altText: "Immagine 3",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 4",
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 5",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/200/200?random=3",
    altText: "Immagine 6",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 7",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 8",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/200/200?random=2",
    altText: "Immagine 9",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/200/200?random=1",
    altText: "Immagine 10",
  },
];

imageList.forEach((imageGenerated) => {
  const otherImages = imageGenerator(imageGenerated);
  sectionGalleryTwo.append(otherImages);
});
