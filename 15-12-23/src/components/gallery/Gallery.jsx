import React from "react";
import "./index.css";
import Gallerycard from "../galleryCard";
import Button from "../button/Button";

const Gallery = ({ galleryList, title }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    console.log("Next button clicked");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryList.length);
  };

  const handleBack = () => {
    console.log("Back button clicked");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryList.length) % galleryList.length
    );
  };

  return (
    <div className="Gallery">
      <h2>{title}</h2>
      <div className="container">
        <Button
          textContent="Back"
          color="lightskyblue"
          onClick={handleBack}
          disabled={currentIndex === 0} // Disabilita il bottone "Back" se si è alla prima immagine
        />
        <div>
          <Gallerycard
            GalleryObj={galleryList[currentIndex]}
            key={galleryList[currentIndex].id}
          />
        </div>
        <Button
          className="button__G"
          textContent="Next"
          color="lightskyblue"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Gallery;
