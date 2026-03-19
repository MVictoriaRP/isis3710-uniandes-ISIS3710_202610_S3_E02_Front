import Link from "next/link";

export default function GamesPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Juegos</h1>

      <ul>
        <li><Link href="/games/1">Chiefs Fortune</Link></li>
        <li><Link href="/games/2">Golden Buffalo</Link></li>
        <li><Link href="/games/3">High Stakes Poker</Link></li>
        <li><Link href="/games/4">Thunder Blackjack</Link></li>
        <li><Link href="/games/5">Warpath Roulette</Link></li>
        <li><Link href="/games/6">Spirit Wheel</Link></li>
        <li><Link href="/games/7">Totem Treasures</Link></li>
        <li><Link href="/games/7">Progressive Jackpot</Link></li>
      </ul>
    </main>
  );
}