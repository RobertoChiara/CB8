import "./index.css";

const Nav = () => {
  return (
    <nav className="nav">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png?20150203195919"
        alt="logo"
      />
      <input className="search" type="text" placeholder="Search 🔍" />
    </nav>
  );
};

export default Nav;
