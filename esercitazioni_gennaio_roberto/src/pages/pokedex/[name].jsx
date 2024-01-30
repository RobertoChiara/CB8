import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Pokedex.module.scss";
import Auguri from "../../components/auguri/Auguri.jsx";
import PokemonStatsChart from "../../components/chart/PokemonStatsChart.jsx";
//il componente per usare la libreria per il grafico a barre funziona. é collegato con le statistiche ma se lo attivo mi si spacca tutto perché non sò controllare lo stile sinceramente.

export default function Pokedex() {
  const router = useRouter();
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonSearch, setPokemonSearch] = useState("");
  const backgroundImageUrl = "/PokedexPNG.png";
  const [pokemonList, setPokemonList] = useState([]);
  const [isCatched, setIsCatched] = useState(false);
  const [confettiColor, setConfettiColor] = useState("red");
  const handleConfettiColorChange = (e) => {
    setConfettiColor(e.target.value);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  }, [router.query.name]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(pokemonSearch);
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  const handleCheckboxChange = (pokemonName) => {
    console.log(`Pokemon ${pokemonName} catched!`);
    setIsCatched(true);
  };

  return (
    <div>
      <h1>POKEDEX</h1>
      <Link href="/">Go back to Homepage</Link>
      <Auguri isCatched={isCatched} confettiColor={confettiColor} />
      <div
        className={styles.bgimg}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className={styles.Pokedex}>
          {pokemonData.sprites && (
            <div className={styles.PokemonStats}>
              <div className={styles.bio}>
                <p>Weight: {pokemonData.weight / 10}kg</p>
                <p>Height: {pokemonData.height / 10}m</p>
              </div>

              <ul>
                {pokemonData.stats.map((stat, i) => (
                  <li className={styles.stats} key={i}>
                    <p>{stat.stat.name}: </p>
                    <br />
                    <p>{stat.base_stat}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.PokemonHeader}>
            <div className={styles.PokemonInfo}>
              <p className={styles.title}>{pokemonData.name?.toUpperCase()}</p>
              {pokemonData.sprites && (
                <img
                  className={styles.PokemonImg}
                  src={pokemonData.sprites.other.showdown.front_default}
                  alt={router.query.name}
                />
              )}
            </div>

            {pokemonData.sprites ? (
              <div className={styles.PokemonDetails}>
                <div className={styles.types}>
                  <h3>Type 1: {pokemonData.types[0].type.name}</h3>
                  {pokemonData.types[1] && (
                    <h3>Type 2: {pokemonData.types[1].type.name}</h3>
                  )}
                </div>
              </div>
            ) : (
              <p>{router.query.name} not found!</p>
            )}
          </div>
        </div>
      </div>
      {/* qui il comando della Library, disattivato perché rompe la formattazione ma funziona */}
      <div className={styles.pokeChartContainer}>
        <PokemonStatsChart
          className={styles.pokeChart}
          pokemonData={pokemonData}
        />
      </div>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        {/* Input per cercare i pokemon con nome o ID */}
        <input
          className={styles.inputPokemon}
          value={pokemonSearch}
          onChange={onHandleChange}
          type="text"
          placeholder="Search your Pokemon"
          required
        />
        <input className={styles.btnPokemon} type="submit" value="Search" />
        {/* Input per cambiare il colore dei coriandoli */}
        <input
          type="text"
          placeholder="Confetti Color"
          value={confettiColor}
          onChange={handleConfettiColorChange}
        />
      </form>
      <div className={styles.pokemonList}>
        {pokemonList.map((pokemon, index) => (
          <div key={index} className={styles.pokemonItem}>
            <p>
              #: {index + 1} {pokemon.name.toUpperCase()}
            </p>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(pokemon.name)}
              />
              Catched!
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
