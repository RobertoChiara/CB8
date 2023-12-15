import "./index.css";

const Button = ({ textContent, color = "lightskyblue", onClick }) => {
  return (
    <button className="Button" style={{ color: color }} onClick={onClick}>
      {textContent}
    </button>
  );
};

export default Button;
