import Link from "next/link";

export default function Learn() {
  return (
    <>
      <Link href="/">Go back to Homepage</Link>
      <h1>How It Works</h1>
      <img src="/screen1.png" alt="pokedex" />
      <img src="/screen2.png" alt="pokeList" />
      <p>
        The Pokedex allows you to search through all Pokémon from every
        generation, providing images and statistics. At the bottom, there is an
        option to keep track of your collection progress for the first
        generation.
      </p>
    </>
  );
}
// qui mi sono creato la pagina di spiegazione del pokedex (consegna 16.01)
