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
        color: "#fff",
        fontFamily: "'Cinzel', 'Georgia', serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 48px 80px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');
        .btn-gold { display:inline-block; padding:16px 40px; border-radius:8px; background:linear-gradient(135deg,#E6B800,#CC8800); color:#1a0305; font-weight:700; font-size:15px; text-decoration:none; font-family:'Cinzel',serif; letter-spacing:0.06em; box-shadow:0 4px 28px rgba(230,184,0,0.4); transition:all 0.15s ease; }
        .btn-gold:hover { background:linear-gradient(135deg,#FFD700,#E6A000); transform:translateY(-1px); }
        .btn-gold:active { background:linear-gradient(135deg,#B8860B,#996600); transform:translateY(1px); }
        .btn-outline { display:inline-block; padding:16px 40px; border-radius:8px; border:2px solid #E6B800; color:#E6B800; font-weight:700; font-size:15px; text-decoration:none; font-family:'Cinzel',serif; letter-spacing:0.06em; transition:all 0.15s ease; }
        .btn-outline:hover { background:rgba(230,184,0,0.08); }
      `}</style>

      <div style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}>

        <p style={{ color: "rgba(230,184,0,0.7)", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "12px" }}>
          {game.category}
        </p>

        <h1 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 900, color: "#E6B800", textShadow: "0 0 30px rgba(230,184,0,0.7)", marginBottom: "16px", textTransform: "uppercase" }}>
          {game.name}
        </h1>

        <p style={{ color: "#E6B800", fontSize: "16px", marginBottom: "24px" }}>
          {"★".repeat(Math.round(game.rating))}{" "}
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>{game.rating} / 5.0</span>
        </p>

        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: 1.8, fontFamily: "'Georgia',serif", marginBottom: "40px" }}>
          {game.description}
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/register" className="btn-gold">Play Now →</Link>
          <Link href="/games" className="btn-outline">← Back to Games</Link>
        </div>
      </div>
    </main>
  );
}