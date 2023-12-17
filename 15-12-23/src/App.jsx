import Navbar from "./components/navbar";
import Hero from "./components/hero/Hero";
import CardList from "./components/cardList/CardList";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?6",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?21",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?31",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?41",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?51",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?61",
      title: "Image card",
    },
  ];
  const galleryList = [
    {
      id: 1,
      src: "https://picsum.photos/250/300?1",
      alt: "image",
    },
    {
      id: 2,
      src: "https://picsum.photos/250/300?2",
      alt: "image",
    },
    {
      id: 3,
      src: "https://picsum.photos/250/300?3",
      alt: "image",
    },
    {
      id: 4,
      src: "https://picsum.photos/250/300?4",
      alt: "image",
    },
    {
      id: 5,
      src: "https://picsum.photos/250/300?5",
      alt: "image",
    },
    {
      id: 6,
      src: "https://picsum.photos/250/300?6",
      alt: "image",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardList cardListObj={{ title: "Indie", list: imagesList1 }} />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />
      <Gallery title="Gallery" galleryList={galleryList} />
      <Footer />
    </div>
  );
}

export default App;
