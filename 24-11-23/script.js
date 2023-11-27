// Funzioni
const cE = (type) => document.createElement(type);

const cardGenOne = (imgSrc, imgAlt, title, description, className) => {
  const card = cE("div");
  card.className = className;
  const img = cE("img");
  img.src = imgSrc;
  img.alt = imgAlt;
  const h4 = cE("h4");
  h4.innerText = title;
  const p = cE("p");
  p.innerText = description;

  card.append(img, h4, p);

  return card;
};

const cardGenTwo = (
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  buttonClass,
  cardClass
) => {
  const card = cE("div");
  card.className = cardClass;

  const img = cE("img");
  img.src = imgSrc;
  img.alt = imgAlt;

  const h2 = cE("h2");
  h2.innerText = title;

  const p = cE("p");
  p.innerText = description;

  const button = cE("button");
  button.innerText = buttonText;
  button.className = buttonClass;

  card.append(img, h2, p, button);

  return card;
};

const contentBlockGen = (
  title,
  description,
  imgSrc,
  imgAlt,
  buttonText,
  buttonClass,
  titleClass,
  divClass
) => {
  const contentBlock = cE("div");
  contentBlock.className = divClass;

  const titleDiv = cE("div");
  titleDiv.className = titleClass;

  const h1 = cE("h1");
  h1.innerText = title;
  titleDiv.appendChild(h1);

  const p = cE("p");
  p.innerText = description;

  const img = cE("img");
  img.src = imgSrc;
  img.alt = imgAlt;

  const button = cE("button");
  button.innerText = buttonText;
  button.className = buttonClass;

  contentBlock.append(titleDiv, p, img, button);

  return contentBlock;
};

const contentBlockGenTwo = (title, description, divClass) => {
  const contentBlock = cE("div");
  contentBlock.className = divClass;

  const h2 = cE("h2");
  h2.innerText = title;

  const p = cE("p");
  p.innerText = description;

  contentBlock.append(h2, p);

  return contentBlock;
};

const contentBlockGenThree = (
  title,
  description,
  imgSrc,
  imgAlt,
  imgClass,
  buttonText,
  buttonClass,
  divClass
) => {
  const contentBlock = cE("div");
  contentBlock.className = divClass;

  const titleDiv = cE("div");

  const h2 = cE("h2");
  h2.innerText = title;
  titleDiv.appendChild(h2);

  const p = cE("p");
  p.innerText = description;

  const img = cE("img");
  img.src = imgSrc;
  img.alt = imgAlt;
  img.className = imgClass;

  const button = cE("button");
  button.innerText = buttonText;
  button.className = buttonClass;

  contentBlock.append(titleDiv, p, img, button);

  return contentBlock;
};

const formInput = (type, id, placeholder) => {
  const input = cE("input");
  input.type = type;
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;
  return input;
};

// Variabili
const megadivEl = cE("div");
megadivEl.className = "megadiv";

//navbar
const navbarGen = () => {
  const navbar = cE("nav");
  navbar.className = "navbar";

  const logo = cE("img");
  logo.src =
    "https://upload.wikimedia.org/wikipedia/commons/5/5f/Logo_czu_en.png";
  logo.alt = "Logo";
  logo.className = "logo";

  const menu = cE("div");
  menu.className = "menu";

  const buttonsData = ["Home", "About", "Story", "Bibliography", "Contact"];
  buttonsData.forEach((text) => {
    const button = cE("button");
    button.className = "navbtn";
    button.innerText = text;
    menu.appendChild(button);
  });

  const menu2 = cE("div");
  menu2.className = "menu2";

  const cartButtonsData = ["Sign Up", "Donate"];
  cartButtonsData.forEach((text) => {
    const button = cE("button");
    button.className = "cart";
    button.innerText = text;
    menu2.appendChild(button);
  });

  navbar.append(logo, menu, menu2);

  return navbar;
};

//hero
const createHeroEl = (
  title,
  description,
  imgSrc,
  imgAlt,
  buttonText,
  buttonClass,
  titleClass,
  divClass,
  imgClass
) => {
  const heroEl = cE("div");
  heroEl.className = "hero";

  const contentBlock = contentBlockGen(
    title,
    description,
    imgSrc,
    imgAlt,
    buttonText,
    buttonClass,
    titleClass,
    divClass
  );

  const img = contentBlock.querySelector("img");
  if (img) {
    img.className = imgClass;
  }

  heroEl.appendChild(contentBlock);

  return heroEl;
};

const heroEl = createHeroEl(
  "PhD Topic: Chytridiomycosis, a new plague.",
  "Chytridiomycosis is an infectious disease in amphibians, caused by the chytrid fungi Batrachochytrium dendrobatidis and B. salamandrivorans",
  "https://c02.purpledshub.com/uploads/sites/62/2020/02/Lifecycle-of-chytrid-Bd-24dc756.jpg?webp=1",
  "img1",
  "Submit",
  "btn1",
  "title",
  "hero",
  "img1"
);

//Section1
const sectionOneGen = (title, description, divClass) => {
  const sectionOneEl = cE("section");
  sectionOneEl.className = divClass;

  const contentBlock = contentBlockGenTwo(title, description);
  sectionOneEl.appendChild(contentBlock);
  return sectionOneEl;
};

const sectionOneEl = sectionOneGen(
  "Biology",
  "Batrachochytrium dendrobatidis & B. salamandrivorans infects the keratinized skin of amphibians. The fungi in the epidermis has a thallus bearing a network of rhizoids and smooth-walled, roughly spherical, inoperculate (without an operculum) sporangia. Each sporangium produces a single tube to discharge spores.",
  "section1"
);

//section2
const sectionTwoElGen = (data) => {
  const sectionTwoEl = cE("section");
  sectionTwoEl.className = "section2";

  data.forEach((cardData) => {
    const card = cardGenOne(
      cardData.imgSrc,
      cardData.imgAlt,
      cardData.title,
      cardData.description,
      "card1"
    );
    sectionTwoEl.appendChild(card);
  });
  return sectionTwoEl;
};

const cardDatasectionTwoEl = [
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/CSIRO_ScienceImage_1392_Scanning_Electron_Micrograph_of_Chytrid_Fungus.jpg/1280px-CSIRO_ScienceImage_1392_Scanning_Electron_Micrograph_of_Chytrid_Fungus.jpg",
    imgAlt: "Zoospore",
    title: "Zoospores",
    description:
      "Zoospores are typically 3–5 µm in size and have an elongated-ovoidal body with a single posterior flagellum.",
  },
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chytridiomycosis2.jpg/440px-Chytridiomycosis2.jpg",
    imgAlt: "Sporangia",
    title: "Life cycle",
    description:
      "They have two primary life stages: a sessile, reproductive zoosporangium and a motile, uniflagellated zoospore.",
  },
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Batrachochytrium_salamandrivorans_infection.png/1200px-Batrachochytrium_salamandrivorans_infection.png",
    imgAlt: "Skin section",
    title: "Physiology",
    description:
      "They can grow within a wide temperature range (4-25 °C), with optimal temperatures being between 17 and 25 °C.",
  },
];

sectionTwoElGen(cardDatasectionTwoEl);

//Section3
const createSectionThreeEl = (
  title,
  description,
  imgSrc,
  imgAlt,
  imgClass,
  buttonText,
  buttonClass,
  divClass
) => {
  const sectionThreeEl = cE("section");
  sectionThreeEl.className = divClass;

  const contentBlock = contentBlockGenThree(
    title,
    description,
    imgSrc,
    imgAlt,
    imgClass,
    buttonText,
    buttonClass,
    divClass
  );
  sectionThreeEl.appendChild(contentBlock);
  return sectionThreeEl;
};

const sectionThreeEl = createSectionThreeEl(
  "The Disease",
  "Chytridiomycosis has been linked to dramatic population declines or extinctions of amphibian species in North-Central-South America, Australia, east Africa, Dominica, Caribbean and North Europe.",
  "https://images.newscientist.com/wp-content/uploads/2019/03/28124459/01592803.jpg?width=900",
  "Dead frog",
  "img1",
  "Discover More",
  "btn1",
  "Section3"
);

//Section4
const sectionFourEl = cE("section");
sectionFourEl.className = "section4";
const sectionFourDivEl = cE("div");

const bannerEl = cE("img");
bannerEl.src =
  "https://nature-to-nurture.co.uk/wp-content/uploads/2014/03/Spring-Nature-Beautiful-Lands-Banner-Nature-To-Nurture-Aromatherapy-In-Hemel-St-Albans.jpg";
bannerEl.alt = "banner";
bannerEl.className = "banner";

const textBannerEl = cE("text");
textBannerEl.innerText = "Save the amphibians!";
textBannerEl.className = "frogtext";

sectionFourDivEl.append(textBannerEl, bannerEl);
sectionFourEl.appendChild(sectionFourDivEl);

//Section5
const sectionFiveEl = cE("section");
sectionFiveEl.className = "section5";

const divFiveEl = contentBlockGenThree(
  "Clinical signs",
  "The most typical symptoms of chytridiomycosis include thickening of the skin, reddening of the skin, convulsions, and a loss of the righting reflex.",
  "https://static01.nyt.com/images/2014/10/31/science/31salamander-1/31salamander-1-superJumbo.jpg",
  "infection",
  "img1",
  "List of infected Species",
  "btn1",
  "Infection"
);

sectionFiveEl.appendChild(divFiveEl);

//Section6

const sectionSixGen = (title, description, divClass) => {
  const sectionSixEl = cE("section");
  sectionSixEl.className = divClass;

  const contentBlock = contentBlockGenTwo(title, description);
  sectionSixEl.appendChild(contentBlock);

  return sectionSixEl;
};

const sectionSixEl = sectionSixGen(
  "Diagnostic",
  "There are several molecular methodologies to assess the presence of the fungi.",
  "section6"
);

//section7
const sectionSevenElGen = (data) => {
  const sectionSevenEl = cE("section");
  sectionSevenEl.className = "section7";

  data.forEach((cardData) => {
    const card = cardGenTwo(
      cardData.imgSrc,
      cardData.imgAlt,
      cardData.title,
      cardData.description,
      cardData.buttonLabel,
      cardData.imgClass,
      cardData.divClass
    );
    sectionSevenEl.appendChild(card);
  });
  return sectionSevenEl;
};

const cardDataSeven = [
  {
    imgSrc:
      "https://savethefrogs.com/wp-content/uploads/Swabbing-Litoria-wilcoxii-with-URL-1400.jpg",
    imgAlt: "swabs",
    title: "Swabs",
    description:
      "This protocol was developed to allow biologists to non-destructively sample amphibians in the field, taking the zoospores from the skin of the amphibians and transfer them into the swabs for further analysis.",
    buttonLabel: "Learn More",
    imgClass: "img3",
    divClass: "card2",
  },
  {
    imgSrc:
      "https://assets-global.website-files.com/64df2d1fa3fa6068106bca59/64e1fa77f6d96ed64ca98eef_animals-from-eDNA.jpeg",
    imgAlt: "eDNA",
    title: "Environmental DNA",
    description:
      "Environmental DNA or eDNA is DNA that is collected from a variety of environmental samples such as soil, seawater, snow or air, rather than directly sampled from an individual organism.",
    buttonLabel: "Learn More",
    imgClass: "img3",
    divClass: "card2",
  },
  {
    imgSrc:
      "http://www.optigene.co.uk/wp-content/uploads/2012/06/genie-ii-main-360x347.png",
    imgAlt: "LAMP",
    title: "LAMP",
    description:
      "The LAMP (Loop-Mediated Isothermal Amplification) molecular technique is a DNA amplification method that occurs at constant temperature, eliminating the need for thermal cycling.",
    buttonLabel: "Learn More",
    imgClass: "img3",
    divClass: "card2",
  },
];
const sectionSevenEl = sectionSevenElGen(cardDataSeven);

//section8
const sectionEightElGen = () => {
  const sectionEightEl = cE("section");
  sectionEightEl.className = "section8";

  const contactDiv = cE("div");
  contactDiv.className = "contact";

  const h2Contact = cE("h2");
  h2Contact.innerText = "Contact Us";
  contactDiv.appendChild(h2Contact);

  const contactInfo = [
    "PhD Student: Msc. Roberto Chiara",
    "Department of Ecology",
    "Česká zemědělská univerzita v Praze ČZU",
  ];

  contactInfo.forEach((info) => {
    const p = cE("p");
    p.innerText = info;
    contactDiv.appendChild(p);
  });

  const containerDiv = cE("div");
  containerDiv.className = "container";

  const txtcont1 = cE("div");
  txtcont1.className = "txtcont1";

  const txtcont2 = cE("div");
  txtcont2.className = "txtcont2";

  // input
  const inputFirstName = createInput("text", "firstName", "first name");
  const inputSurname = createInput("text", "surname", "Surname");
  const inputEmail = createInput("email", "email", "E-mail");
  const inputTelephone = createInput("text", "Telephone", "Telephone");
  const textareaMessage = cE("textarea");
  textareaMessage.placeholder = "Your message...";
  textareaMessage.id = "message";
  textareaMessage.name = "message";
  textareaMessage.rows = "4";

  const submitButton = cE("button");
  submitButton.type = "submit";
  submitButton.className = "btncont";
  submitButton.innerText = "Submit";

  txtcont1.append(inputFirstName, inputSurname);
  txtcont2.append(inputEmail, inputTelephone);

  containerDiv.append(txtcont1, txtcont2, textareaMessage, submitButton);

  sectionEightEl.append(contactDiv, containerDiv);

  return sectionEightEl;
};

// Funzione input
const createInput = (type, id, placeholder) => {
  const input = cE("input");
  input.type = type;
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;
  return input;
};

const sectionEightEl = sectionEightElGen();

//Footer
const footerGen = () => {
  const footerEl = cE("section");
  footerEl.className = "footer";

  const footerData = [
    {
      title: "Team members",
      items: [
        "Msc. Roberto Chiara",
        "Doc. Ing. Jiří Vojar, Ph.D.",
        "David Lastra-Gonzalez, PhD",
        "Vojtech Baláž, Mgr. Ph.D.",
      ],
    },
    {
      title: "University",
      items: ["Blog", "About Us", "Download", "Join Us"],
    },
    {
      title: "Partner",
      items: [
        "Universitá di Palermo",
        "University of Brno",
        "University of Okinawa",
      ],
    },
    {
      title: "Help",
      items: ["Contact Us", "FAQ"],
    },
    {
      title: "Newsletter",
      items: ["Subscribe"],
    },
  ];

  footerData.forEach((sectionData) => {
    const div = cE("div");
    div.className = "f1";

    const h3 = cE("h3");
    h3.innerText = sectionData.title;

    div.appendChild(h3);

    sectionData.items.forEach((item) => {
      const p = cE("p");
      p.innerHTML = item;
      div.appendChild(p);
    });

    if (sectionData.title === "Newsletter") {
      const input = cE("input");
      input.placeholder = "Your E-Mail";
      input.type = "text";
      input.id = "news";
      input.name = "news";
      div.appendChild(input);

      const socialDiv = cE("div");
      socialDiv.className = "social";

      const socialIcons = [
        "https://img.icons8.com/color/48/facebook-new.png",
        "https://img.icons8.com/color/48/instagram-new--v1.png",
        "https://img.icons8.com/color/48/twitter--v1.png",
      ];

      socialIcons.forEach((iconSrc) => {
        const img = cE("img");
        img.width = 48;
        img.height = 48;
        img.src = iconSrc;
        img.alt = "social-icon";
        img.className = "socialIcon";
        socialDiv.appendChild(img);
      });

      div.appendChild(socialDiv);
    }

    footerEl.appendChild(div);
  });

  return footerEl;
};

megadivEl.append(
  navbarGen(),
  heroEl,
  sectionOneEl,
  sectionTwoElGen(cardDatasectionTwoEl),
  sectionThreeEl,
  sectionFourEl,
  sectionFiveEl,
  sectionSixEl,
  sectionSevenEl,
  sectionEightEl,
  footerGen()
);

document.body.appendChild(megadivEl);
