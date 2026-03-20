import Link from "next/link";

const games: Record<string, { name: string; category: string; rating: number; description: string }> = {
  "chief-s-fortune":     { name: "Chief's Fortune",    category: "SLOTS",     rating: 4.9, description: "Spin the reels of the legendary Chief's Fortune. Wild multipliers and free spins await the brave." },
  "golden-buffalo":      { name: "Golden Buffalo",      category: "SLOTS",     rating: 4.8, description: "Chase the golden herd across the plains. Massive jackpots and cascading wilds." },
  "high-stakes-poker":   { name: "High Stakes Poker",   category: "TABLE",     rating: 4.9, description: "The ultimate poker experience. High stakes, high rewards — only for true legends." },
  "thunder-blackjack":   { name: "Thunder Blackjack",   category: "TABLE",     rating: 4.7, description: "Classic blackjack with a thunderous twist. Beat the dealer and claim your fortune." },
  "warpath-roulette":    { name: "Warpath Roulette",    category: "TABLE",     rating: 4.8, description: "Follow the warpath to riches. Place your bets and let the wheel decide your fate." },
  "spirit-wheel":        { name: "Spirit Wheel",        category: "GAME SHOW", rating: 4.6, description: "Spin the Spirit Wheel for multiplied prizes. A game show experience like no other." },
  "totem-treasures":     { name: "Totem Treasures",     category: "SLOTS",     rating: 4.7, description: "Uncover ancient totem treasures hidden deep in the reels. Free spins and bonus rounds." },
  "progressive-jackpot": { name: "Progressive Jackpot", category: "JACKPOT",   rating: 5.0, description: "The ultimate jackpot. Every spin grows the prize pool. One spin could change everything." },
};

export default async function GameDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const game = games[id] ?? {
    name: id.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    category: "GAME",
    rating: 4.5,
    description: "An exciting casino experience awaits you.",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a0305 0%, #3D0A0A 60%, #2a0707 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 48px 80px",
      }}
    >
      <div style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}>

        <p
          style={{
            color: "rgba(230,184,0,0.7)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            marginBottom: "12px",
          }}
        >
          {game.category}
        </p>

        <h1
          className="text-gold"
          style={{
            fontSize: "clamp(32px,5vw,56px)",
            fontWeight: 900,
            marginBottom: "16px",
            textTransform: "uppercase",
          }}
        >
          {game.name}
        </h1>

        <p className="text-gold" style={{ fontSize: "16px", marginBottom: "24px" }}>
          {"★".repeat(Math.round(game.rating))}{" "}
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
            {game.rating} / 5.0
          </span>
        </p>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "16px",
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          {game.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/register" className="btn-primary">
            Play Now →
          </Link>

          <Link href="/games" className="btn-outline">
            ← Back to Games
          </Link>
        </div>
      </div>
    </main>
  );
}