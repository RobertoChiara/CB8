import { useState } from "react";
import "./index.css";
import Gallerycard from "../galleryCard";
import Button from "../button/Button";

const Gallery = ({ galleryList, title }) => {
  const [currentIndex, setCurrentIndex] = useState("0");

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryList.length);
  };
  // console.log(handleNext)

  const handleBack = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryList.length) % galleryList.length
    );
  };
  // console.log(handleBack);
  return (
    <div className="Gallery">
      <h2>{title}</h2>
      <div className="container">
        <Button textContent="Back" color="lightskyblue" onClick={handleBack} />
        <div>
          <Gallerycard
            GalleryObj={galleryList[currentIndex]}
            key={galleryList[currentIndex].id}
          />
        </div>
        <Button textContent="Next" color="lightskyblue" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Gallery;
