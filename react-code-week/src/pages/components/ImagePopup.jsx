import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/styles/Popup.module.scss";

const ImagePopup = ({ selectedSpecies }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${selectedSpecies}&per_page=1`,
          {
            headers: {
              Authorization: process.env.NEXT_PUBLIC_PEXEL_API_TOKEN,
            },
          }
        );
        if (response.data.photos.length > 0) {
          setImageUrl(response.data.photos[0].src.medium);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (selectedSpecies) {
      fetchImage();
    }
  }, [selectedSpecies]);

  return (
    <div>
      {imageUrl && (
        <Image
          className={styles.popup}
          src={imageUrl}
          alt="Species"
          width={400}
          height={333.33}
        />
      )}
    </div>
  );
};

export default ImagePopup;
