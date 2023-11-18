//Esercizio 1 & Avanzato-------------------------------------------

//console.log(2);

//Al solito mi creo la mia funzioncina per accorciare
const cE = (type) => document.createElement(type);

const backGroundContainerEl = cE("div");
const logoEl = cE("img");
const backGroundEl = cE("img");
const surpriseEl = cE("img");

logoEl.src = "./media/logo.png";
logoEl.className = "logo";
backGroundEl.src = "./media/bg.jpg";
backGroundEl.className = "background";
backGroundContainerEl.className = "background-container-hidden";
surpriseEl.src = "./media/dennis-jurassic-park.gif";
surpriseEl.className = "surprise";

backGroundContainerEl.append(logoEl, backGroundEl, surpriseEl);

document.body.appendChild(backGroundContainerEl);

//Mi creo la funzione per il PopUp

const popupEl = (text, btnOneText, btnTwoText) => {
  const wrapperEl = cE("div");
  const textEl = cE("p");
  const logoContainerEl = cE("div");
  const logo18El = cE("img");
  const btnOneEl = cE("button");
  const btnTwoEl = cE("button");

  wrapperEl.className = "popup";

  textEl.textContent = text;
  logoContainerEl.className = "logocontainer";
  logo18El.src = "./media/18.png";
  btnOneEl.className = "popup-btn";
  btnOneEl.textContent = btnOneText;
  btnTwoEl.className = "popup-btn";
  btnTwoEl.textContent = btnTwoText;
  logoContainerEl.appendChild(logo18El);
  wrapperEl.append(textEl, logoContainerEl, btnOneEl, btnTwoEl);

  //al click rende visibile lo sfondo
  btnOneEl.addEventListener("click", () => {
    backGroundContainerEl.className = "background-container-visible";
  });

  //addeventlistner per reindirizzare su Google in caso di no
  btnTwoEl.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });

  return wrapperEl;
};

//micreo il timer per il PopUp

const popupTimer = setTimeout(() => {
  const popupEntity = popupEl(
    "Devi essere maggiorenne per entrare, Hai più di 18 anni?",
    "Si",
    "No"
  );

  backGroundContainerEl.appendChild(popupEntity);

  const popupBtnEl = document.querySelector(".popup-btn");

  popupBtnEl.addEventListener("click", () => {
    popupEntity.remove();
  });
}, 3500); //qui imposto la durata a 3500ms (3,5s)

//Esercizio 2-------------------------------------

// Richiamo con la funzione built-in fetch il server con il metodo GET
fetch("https://dummyjson.com/products")
  //il THEN si usa SEMPRE!! per la promise della fetch
  .then((response) => response.json())
  //ora "decifro" la promise (asincrona) con un altro .then
  //.then((data) => console.log(data));
  .then((data) =>
    console.log(data.products.filter((cheapProd) => cheapProd.price <= "50"))
  );
