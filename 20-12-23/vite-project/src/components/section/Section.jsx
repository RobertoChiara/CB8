import "./index.css";

const Section = () => {
  return (
    <div className="suggested__section">
      <div className="search__section">
        <input type="text" className="search-bar" placeholder="🔍Search" />

        <div>
          <div className="person-card">
            <img
              src="https://robohash.org/sample.png"
              alt="Person sample"
              className="person-image"
            />
            <div>
              <strong>Romualdo De La Vega</strong>
              <p>I like a fresh cup of lube oil in the morning!</p>
            </div>
          </div>
        </div>
        <div className="tags__section">
          <span className="tag">#Oil </span>
          <span className="tag">#Morning </span>
          <span className="tag">#KillAllHumans </span>
        </div>
      </div>
    </div>
  );
};

export default Section;
