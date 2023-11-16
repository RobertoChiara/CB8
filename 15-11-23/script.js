// mi creo la funzioncina per scrivere meno :P
const cE = (type) => document.createElement(type);

//Esercizio 3 Avanzato----------------------------------
const wrapperEl = cE("div");
const headerEl = cE("header");
const navOneEl = cE("nav");
const navBtn = cE("div");
const navTwoEl = cE("nav");
const logoEl = cE("img");
const title = cE("h1");
const btnOne = cE("button");
const btnTwo = cE("button");
const btnContainerEl = cE("div");
const btnThree = cE("button");
const btnThreeSpan = cE("span");
const btnThreeSpanText = cE("span");
const btnFour = cE("button");
const btnFourSpan = cE("span");
const btnFourSpanText = cE("span");
const btnFive = cE("button");
const btnFiveSpan = cE("span");
const btnFiveSpanText = cE("span");
const btnSix = cE("button");
const btnSixSpan = cE("span");
const btnSixSpanText = cE("span");
const nameCardEl = cE("h3");
const footerEl = cE("footer");
const footerContainerEl = cE("div");
const footerBtnOneEl = cE("button");
const footerBtnTwoEl = cE("button");
const footerBtnThreeEl = cE("button");

wrapperEl.className = "wrapper";
headerEl.className = "header";
navOneEl.className = "navbar1";
navBtn.className = "navBtn";
btnContainerEl.className = "btncont";
navTwoEl.className = "navbar2";
title.textContent = "Buy Your Gundam!";
title.className = "title";
logoEl.src = "./media/logo.png";
logoEl.className = "logo";
btnOne.textContent = "🔍";
btnOne.className = "btn1";
btnTwo.textContent = "🛒";
btnTwo.className = "btn1";
btnThree.className = "btn2";
btnThreeSpan.textContent = "🔎";
btnThreeSpanText.textContent = "Search";
btnFourSpan.textContent = "🤖";
btnFourSpanText.textContent = "Copilot";
btnFour.className = "btn2";
btnFiveSpan.textContent = "🔫";
btnFiveSpanText.textContent = "Upgrade";
btnFive.className = "btn2";
btnSixSpan.textContent = "🔧";
btnSixSpanText.textContent = "Repair";
btnSix.className = "btn2";
nameCardEl.textContent = "Recommended by the Space Alliance ⬇️";
nameCardEl.className = "namecard";
footerEl.className = "footer";
footerContainerEl.className = "footerContainer";
footerBtnOneEl.textContent = "⏹️";
footerBtnOneEl.className = "btn5";
footerBtnTwoEl.textContent = "⏸️";
footerBtnTwoEl.className = "btn5";
footerBtnThreeEl.textContent = "▶️";
footerBtnThreeEl.className = "btn5";

document.body.appendChild(wrapperEl);
wrapperEl.append(headerEl, navTwoEl);
headerEl.append(logoEl, navOneEl);
navOneEl.append(title, navBtn);
navBtn.append(btnOne, btnTwo);
btnContainerEl.append(btnThree, btnFour, btnFive, btnSix);
btnThree.append(btnThreeSpan, btnThreeSpanText);
btnFour.append(btnFourSpan, btnFourSpanText);
btnFive.append(btnFiveSpan, btnFiveSpanText);
btnSix.append(btnSixSpan, btnSixSpanText);
navTwoEl.appendChild(btnContainerEl);

btnOne.addEventListener("mouseover", () => {
  btnOne.style.transform = "scale(1.3)";
});
btnOne.addEventListener("mouseout", () => {
  btnOne.style.transform = "scale(1)";
});
btnTwo.addEventListener("mouseover", () => {
  btnTwo.style.transform = "scale(1.3)";
});
btnTwo.addEventListener("mouseout", () => {
  btnTwo.style.transform = "scale(1)";
});
btnThree.addEventListener("mouseover", () => {
  btnThree.style.transform = "scale(1.3)";
});
btnThree.addEventListener("mouseout", () => {
  btnThree.style.transform = "scale(1)";
});
btnFour.addEventListener("mouseover", () => {
  btnFour.style.transform = "scale(1.3)";
});
btnFour.addEventListener("mouseout", () => {
  btnFour.style.transform = "scale(1)";
});
btnFive.addEventListener("mouseover", () => {
  btnFive.style.transform = "scale(1.3)";
});
btnFive.addEventListener("mouseout", () => {
  btnFive.style.transform = "scale(1)";
});
btnSix.addEventListener("mouseover", () => {
  btnSix.style.transform = "scale(1.3)";
});
btnSix.addEventListener("mouseout", () => {
  btnSix.style.transform = "scale(1)";
});
btnSix.addEventListener("mouseover", () => {
  btnSix.style.transform = "scale(1.3)";
});
btnSix.addEventListener("mouseout", () => {
  btnSix.style.transform = "scale(1)";
});

//Esercizio 1----------------------------------

const sectionEl = cE("section");

const roboListEl = cE("div");

sectionEl.className = "recommended";

roboListEl.className = "robo-list";

const roboCardGenerator = (roboData) => {
  try {
    // apro il try Es2
    //mi creo tutte le constanti
    const textEl = cE("div");
    const cardEl = cE("div");
    const imgEl = cE("img");
    const priceEl = cE("p");
    const nameEl = cE("h4");
    const cardButtonEl = cE("div");
    const addWishlistEl = cE("button");
    const addCartEl = cE("button");

    //gli do gli attributi
    cardEl.className = "generatedRobot";
    imgEl.src = roboData.imageUrl;
    imgEl.alt = roboData.roboName;
    textEl.className = "text";
    priceEl.textContent = roboData.price + " 💵";
    nameEl.textContent = roboData.roboName;
    cardButtonEl.className = "cardButton";
    addWishlistEl.textContent = "💟";
    addWishlistEl.className = "btn3";
    addCartEl.textContent = "➕";
    addCartEl.className = "btn4";
    textEl.append(priceEl, nameEl, addWishlistEl);
    cardButtonEl.append(addCartEl);
    cardEl.append(textEl, imgEl, cardButtonEl);

    // mi ritorno la carta generata
    return cardEl;
  } catch (err) {
    //dopo il return chiudo i ltry ed eseguo il catch e il finally Es2
    console.error("Errore 404");
  } finally {
    console.log("Finally executed");
  }
};

//creo l'array
const mockData = [
  {
    id: 1,
    roboName: "RX-78-02",
    price: 9999,
    imageUrl: "./media/gundam1.png",
  },
  {
    id: 2,
    roboName: "Nu Gundam",
    price: 8999,
    imageUrl: "./media/gundam2.png",
  },
  {
    id: 3,
    roboName: "Gundam Barbatos",
    price: 7999,
    imageUrl: "./media/gundam3.png",
  },
  {
    id: 4,
    roboName: "Gundam Exia",
    price: 6999,
    imageUrl: "./media/gundam4.png",
  },
];

//ora appendo da "dentro verso fuori"
//document.body.appendChild(sectionEl); //appendo la section creata al body
sectionEl.append(nameCardEl, roboListEl);
wrapperEl.append(sectionEl, footerEl);
footerEl.appendChild(footerContainerEl);
footerContainerEl.append(footerBtnOneEl, footerBtnTwoEl, footerBtnThreeEl);

//mi creo la fuonzione per generare i robottini
mockData.map((generatedRobot) =>
  roboListEl.appendChild(roboCardGenerator(generatedRobot))
);

//Esercizio 2 -----------------------------------------------

//Vedi riga 15

//Esercizio 3------------------------------------------------

//Vedi su
