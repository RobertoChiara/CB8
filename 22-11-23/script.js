const cE = (type) => document.createElement(type);

//Esercizio 1----------------------------------------

//uso la funzioncina di base per eseguire la fetch con Async/Await e provo ad usare il try/catch in caso di errore nella fetch
const getFetchFn = async (BASE_URL) => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error: ", error);
    throw error;
  } finally {
    console.log("Fetch completed");
  }
};

// mi richiamo l'URL con la funzione=fetch e risolvo la promise risultante con il .then
getFetchFn("https://picsum.photos/v2/list").then((data) => {
  const images = data.map((image) => console.log(image.download_url));
});

//Esercizio 2 e 3-------------------------------------------------

//faccio gli elementi tag con la solita funzione
const imgAndText = (renderImgs) => {
  const containerEl = cE("div");
  const imgEl = cE("img");
  const textEl = cE("p");

  containerEl.className = "container";
  imgEl.className = "image";
  textEl.className = "text";
  imgEl.src = renderImgs.download_url;
  textEl.textContent = renderImgs.author;

  containerEl.append(imgEl, textEl);
  return containerEl;
};

// Definisco la funzione asincrona
const asyncFn = async () => {
  const fetchResultEl = await getFetchFn("https://picsum.photos/v2/list");
  const allcontainerEls = fetchResultEl.map((image) => imgAndText(image));
  document.body.append(...allcontainerEls);
};

// richiamo la funzione
asyncFn();
