import Button from "../button/Button";
import "./index.css";

const Card = ({ cardObj }) => {
  return (
    <div className="Card">
      <img src={cardObj.img} alt={cardObj.title} />
      <div className="Card__info">
        <Button textContent="Show" color="lightskyblue" />
      </div>
    </div>
  );
};

export default Card;
