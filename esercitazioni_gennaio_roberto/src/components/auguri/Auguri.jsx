import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Auguri = ({ isCatched }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    if (isCatched) {
      setConfettiActive(true);

      // Attiva il timer per disattivare i confetti dopo 3 secondi
      const timer = setTimeout(() => {
        setConfettiActive(false);
      }, 3000);

      // Pulisce il timer quando il componente viene smontato
      return () => clearTimeout(timer);
    }
  }, [isCatched]);

  return (
    <>
      {confettiActive && (
        <Confetti
          width={width}
          height={height}
          colors={["red"]}
          numberOfPieces={100}
        />
      )}
    </>
  );
};

export default Auguri;
