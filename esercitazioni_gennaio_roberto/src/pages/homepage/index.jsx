import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <nav>
        <ul>
          <li>
            <Link href="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link href="/learn">How it works?</Link>
          </li>
          <li>
            <Link href="/copyright">Copyright</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
