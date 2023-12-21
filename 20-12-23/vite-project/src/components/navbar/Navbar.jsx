import "./index.css";

const Navbar = ({ links }) => {
  return (
    <nav className="Navbar">
      <div className="Navbar__list">
        {links.map((link, index) => (
          <a key={index} href={link.url}>
            <img className="logo" src={link.icon} alt={link.alt} />
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
