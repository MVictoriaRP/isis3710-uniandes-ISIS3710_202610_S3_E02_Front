import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Beeso Casino</h1>
      <p>Where legends play</p>

      <hr />

      <h2>Navegación</h2>

      <ul>
        <li><Link href="/games">Ver Juegos</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Registrarse</Link></li>
      </ul>
    </main>
  );
}