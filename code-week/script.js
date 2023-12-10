const cE = (type) => document.createElement(type);

// Array province
const sicilianProvinces = [
  {
    name: "Agrigento",
    id: "AG",
    imgSrc:
      "https://beborghi.com/wp-content/uploads/2020/11/Beborghi_agrigento_valle-dei-templi-2-scaled-jpg.webp",
    description:
      "Known for the Valley of the Temples, an archaeological site with well-preserved ancient Greek temples",
  },
  {
    name: "Caltanissetta",
    id: "CL",
    imgSrc:
      "https://mediaim.expedia.com/destination/3/3405c3dd6d704be92bcae608c7865dda.jpg",
    description:
      "The historic center of Caltanissetta offers interesting architecture and traditional atmosphere",
  },
  {
    name: "Catania",
    id: "CT",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Catania_vista_dall%27alto_e_il_vulcano_Etna_a_sovrastarla.jpg/2560px-Catania_vista_dall%27alto_e_il_vulcano_Etna_a_sovrastarla.jpg",
    description:
      "Baroque city with a vibrant nightlife and traditional markets",
  },
  {
    name: "Enna",
    id: "EN",
    imgSrc:
      "https://www.raccontaviaggi.it/wp-content/uploads/2021/04/Enna-Sicilia.jpg",
    description:
      "Characterized by hilly landscapes and the picturesque Pergusa Lake",
  },
  {
    name: "Messina",
    id: "ME",
    imgSrc:
      "https://images.placesonline.com/photos/guida_messina__1599216726.jpg",
    description:
      "Strategic location facing Calabria, with a close connection to the continent",
  },
  {
    name: "Palermo",
    id: "PA",
    imgSrc:
      "https://www.italia.it/content/dam/tdh/en/interests/sicilia/palermo/palermo/media/20210401173355-cattedrale-di-palermo-sicilia-gettyimages-691244576-1.jpg",
    description: "The capital of Sicily with a rich history and culture",
  },
  {
    name: "Ragusa",
    id: "RG",
    imgSrc:
      "https://siviaggia.it/wp-content/uploads/sites/2/2019/09/viaggio-a-ragusa9.jpg",
    description:
      "Known for its fascinating historic centers of Ragusa Ibla and Ragusa Superiore",
  },
  {
    name: "Siracusa",
    id: "SR",
    imgSrc:
      "https://www.federculture.it/wp-content/uploads/2021/09/Siracusa.jpg",
    description:
      "Important Greek city with the Greek Theater and the Ear of Dionysius",
  },
  {
    name: "Trapani",
    id: "TP",
    imgSrc:
      "https://www.sicilia.info/wp-content/uploads/sites/91/trapani-hd.jpg",
    description:
      "The historic center is characterized by narrow streets and ancient churches",
  },
];

//welcome modale---------------------------------------
const createModale = () => {
  const modaleEl = cE("div");
  modaleEl.className = "modale";

  const modaleLogo = cE("img");
  modaleLogo.src = "./media/logo1.png";
  modaleLogo.className = "modaleLogo";

  const modaleTitleText = cE("h1");
  modaleTitleText.textContent = "Welcome to your Web Weather app!!!";
  modaleTitleText.className = "modaleTitle";

  const modaleText = cE("p");
  modaleText.textContent = "";
  modaleText.className = "modaleText";

  // close button
  const closeButton = cE("button");
  closeButton.textContent = "Discovery";
  closeButton.className = "close-button";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(modaleEl);
    document.body.style.overflow = ""; // ristabilisco il body scrolling
  });

  modaleEl.append(modaleTitleText, modaleLogo, modaleText, closeButton);

  document.body.appendChild(modaleEl);
  document.body.style.overflow = "hidden"; // per disabilitare lo scrolling se la modale é aperta
};

createModale();

// Funzione per ottenere i dati meteo da OpenWeatherMap
const getWeatherData = async (cityName) => {
  const apiKey = "63738d48e07dc66dc64f7f5716f4a904";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},IT&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Errore nella richiesta meteo:", error);
  }
};

// Weathercard ---------------------------------------

const weathercard = cE("div");
weathercard.className = "weather";

// Menu a tendina
const provinceSelect = cE("select");
provinceSelect.className = "province-select";

sicilianProvinces.forEach((province) => {
  const option = cE("option");
  option.value = province.id;
  option.textContent = province.name;
  provinceSelect.appendChild(option);
});

// Bottone per generare la card
const generateCardButton = cE("button");
generateCardButton.textContent = "Generate Weather Card";
generateCardButton.className = "generate-card-button";
generateCardButton.addEventListener("click", () => {
  const selectedProvinceId = provinceSelect.value;
  // Funzione che genera la card della provincia selezionata
  handleProvinceSelection(selectedProvinceId);
});

// Bottone per mostrare/nascondere la sezione meteo
const showWeatherButton = cE("button");
showWeatherButton.textContent = "Show more Information";
showWeatherButton.className = "show-weather-button";
showWeatherButton.addEventListener("click", () => {
  toggleWeatherSection();
});

weathercard.append(provinceSelect, generateCardButton);

// Funzione per creare una card meteo dinamicamente
const createWeatherCard = async (city) => {
  const card = cE("div");
  card.className = "weather-card";
  card.setAttribute("data-province-id", city.id);

  const title = cE("h2");
  title.textContent = city.name;
  card.appendChild(title);

  // Dati meteo
  const weatherData = await getWeatherData(city.name);

  // Info meteo card
  const weatherInfo = cE("p");
  weatherInfo.innerHTML = `<span class="weather-text">${weatherData.weather[0].main}</span>, 
  <span class="weather-text">🌡️Temperature: ${weatherData.main.temp}°C</span>, 
  <span class="weather-text">Max Temp: ${weatherData.main.temp_max}°C</span>, 
  <span class="weather-text">Min Temp: ${weatherData.main.temp_min}°C</span>, 
  <span class="weather-text">☴Wind: ${weatherData.wind.speed} m/s</span>, 
  <span class="weather-text">💧Humidity: ${weatherData.main.humidity}%</span>`;
  card.appendChild(weatherInfo);

  // Immagine in base al tipo di weather
  const weatherImage = cE("img");
  weatherImage.className = "weather-image";

  switch (weatherData.weather[0].main.toLowerCase()) {
    case "clouds":
      weatherImage.src = "./media/clouds.png";
      break;
    case "rain":
      weatherImage.src = "./media/rain.png";
      break;
    case "clear":
      weatherImage.src = "./media/sun.png";
      break;
    case "snow":
      weatherImage.src = "./media/snow.png";
      break;

    default:
      weatherImage.src = "./media/coperto.png";
      break;
  }

  card.insertBefore(weatherImage, card.firstChild);

  return card;
};

// Funzione per gestire la selezione della provincia
const handleProvinceSelection = async (selectedProvinceId) => {
  const selectedProvince = sicilianProvinces.find(
    (province) => province.id === selectedProvinceId
  );

  // per rimuovere la card esistente, se presente
  const existingCard = weathercard.querySelector(".weather-card");
  if (existingCard) {
    weathercard.removeChild(existingCard);
  }

  // Creo la nuova card meteo per la provincia selezionata
  if (selectedProvince) {
    const card = await createWeatherCard(selectedProvince);
    weathercard.appendChild(card);
    weathercard.appendChild(showWeatherButton);
  }
};

document.body.appendChild(weathercard);

// Navbar---------------------------------------
const createDynamicNavbarFn = () => {
  const navbar = cE("nav");
  navbar.className = "navbar";

  const titleDiv = cE("div");
  titleDiv.className = "titleDiv";

  const titleEl = cE("h1");
  titleEl.className = "title";
  titleEl.textContent = "Sicily Weather App";

  const logoImg = cE("img");
  logoImg.src = "./media/logo1.png";
  logoImg.alt = "sicily-logo";
  logoImg.className = "logo";

  const searchDiv = cE("div");
  searchDiv.className = "search-div";

  const searchInput = cE("select");
  searchInput.className = "search";

  sicilianProvinces.forEach((province) => {
    const option = cE("option");
    option.value = province.id;
    option.textContent = province.name;
    searchInput.appendChild(option);
  });

  searchInput.addEventListener("change", () => {
    const selectedProvinceId = searchInput.value;
    // Funzione che evidenzi la card della provincia selezionata
    highlightSelectedCard(selectedProvinceId);
  });

  const highlightSelectedCard = (selectedProvinceId) => {
    const cardContainers = document.querySelectorAll(".card-container");

    cardContainers.forEach((cardContainer) => {
      const cards = cardContainer.querySelectorAll(".main-card");
      cards.forEach((card) => {
        const cardId = card.getAttribute("data-province-id");

        if (cardId === selectedProvinceId) {
          card.classList.add("selected-card");

          // Scroll verso la card selezionata
          card.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          card.classList.remove("selected-card");
        }
      });
    });
  };

  titleDiv.appendChild(titleEl);

  searchDiv.append(logoImg, searchInput);

  navbar.append(titleDiv, searchDiv);

  return navbar;
};

const dynamicNavbarEl = createDynamicNavbarFn();
document.body.appendChild(dynamicNavbarEl);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!in caso di scelta NON ricadente tra le 9 province siciliane!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Main---------------------------------------
const main = cE("div");
main.className = "main";
main.style.display = "none";

document.body.appendChild(main);

//Home button
const homeBtn = () => {
  const scrollTopButton = cE("button");
  scrollTopButton.textContent = "Torna in Alto";
  scrollTopButton.className = "home-button";
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  main.appendChild(scrollTopButton);

  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollTopButton.classList.add("show");
    } else {
      scrollTopButton.classList.remove("show");
    }
  });
};

homeBtn();

//Section---------------------------------------

const sectionEl = cE("div");
sectionEl.className = "section";
const createProvinceCards = () => {
  const cardContainer = cE("div");
  cardContainer.className = "card-container";

  sicilianProvinces.forEach(async (province) => {
    const card = cE("div");
    card.className = "main-card";
    card.setAttribute("data-province-id", province.id);

    const title = cE("h3");
    title.textContent = province.name;

    const image = cE("img");
    image.src = province.imgSrc;
    image.alt = `${province.name}-image`;

    const paragraph = cE("p");
    paragraph.textContent = province.description;

    const weather = cE("div");
    weather.className = "main-weather";

    try {
      const response = await fetch(`https://wttr.in/${province.name}?format=4`); // qui uso un'altra API meteo per non caricare troppo la versione free di Openweathermap
      if (!response.ok) {
        throw new Error(`Unable to fetch weather for ${province.name}`);
      }

      const weatherText = await response.text();

      const forecast = cE("p");
      forecast.textContent = `${weatherText.trim()}`;

      weather.appendChild(forecast);
      card.append(title, image, paragraph, weather);
      cardContainer.appendChild(card);
    } catch (error) {
      console.error(error.message);
      const errorText = cE("p");
      errorText.textContent = "Unable to fetch weather";
      weather.appendChild(errorText);
      card.append(title, image, paragraph, weather);
      cardContainer.appendChild(card);
    }
  });

  sectionEl.appendChild(cardContainer);
};

// Chiamo la funzione per creare le card delle province
createProvinceCards();
main.appendChild(sectionEl);

// Funzione per mostrare/nascondere la sezione meteo
const toggleWeatherSection = () => {
  const main = document.querySelector(".main");

  // Toggle tra display none/display per il div .main
  main.style.display = main.style.display === "none" ? "block" : "none";
};
