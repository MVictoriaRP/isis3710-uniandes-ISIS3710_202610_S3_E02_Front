import Link from "next/link";

export default function GamesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a0305 0%, #3D0A0A 50%, #2a0707 100%)",
        color: "#fff",
        fontFamily: "'Cinzel', 'Georgia', serif",
        padding: "100px 48px 80px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');
        .game-card:hover { border-color: rgba(230,184,0,0.5) !important; transform: translateY(-4px); }
        .play-btn { display:inline-block; padding:10px 24px; border-radius:6px; background:linear-gradient(135deg,#E6B800,#CC8800); color:#1a0305; font-size:12px; font-weight:700; font-family:'Cinzel',serif; letter-spacing:0.05em; text-decoration:none; transition:all 0.15s ease; }
        .play-btn:hover { background:linear-gradient(135deg,#FFD700,#E6A000); transform:translateY(-1px); }
        .play-btn:active { background:linear-gradient(135deg,#B8860B,#996600); transform:translateY(1px); }
      `}</style>

      {/* Título */}
      <h1 style={{ textAlign: "center", marginBottom: "12px" }}>
        <span style={{ color: "#fff", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900 }}>ALL </span>
        <span style={{ color: "#E6B800", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, textShadow: "0 0 20px rgba(230,184,0,0.6)" }}>GAMES</span>
      </h1>

      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: "15px", fontFamily: "'Georgia',serif", marginBottom: "40px" }}>
        500+ premium casino games
      </p>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { name: "Chief's Fortune",    category: "SLOTS",     rating: 4.9 },
          { name: "Golden Buffalo",      category: "SLOTS",     rating: 4.8 },
          { name: "High Stakes Poker",   category: "TABLE",     rating: 4.9 },
          { name: "Thunder Blackjack",   category: "TABLE",     rating: 4.7 },
          { name: "Warpath Roulette",    category: "TABLE",     rating: 4.8 },
          { name: "Spirit Wheel",        category: "GAME SHOW", rating: 4.6 },
          { name: "Totem Treasures",     category: "SLOTS",     rating: 4.7 },
          { name: "Progressive Jackpot", category: "JACKPOT",   rating: 5.0 },
        ].map((game) => (
          <div
            key={game.name}
            className="game-card"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(230,184,0,0.15)", borderRadius: "12px", padding: "24px 20px", position: "relative", cursor: "pointer", transition: "border-color 0.2s, transform 0.2s" }}
          >
            <span style={{ position: "absolute", top: "12px", right: "12px", color: "#E6B800", fontSize: "12px", fontFamily: "'Cinzel',serif" }}>
              ★ {game.rating}
            </span>
            <p style={{ color: "rgba(230,184,0,0.6)", fontSize: "10px", fontFamily: "'Cinzel',serif", letterSpacing: "0.12em", textAlign: "center", marginBottom: "6px", marginTop: "24px" }}>{game.category}</p>
            <p style={{ color: "#fff", fontSize: "14px", fontFamily: "'Cinzel',serif", fontWeight: 700, textAlign: "center", marginBottom: "16px" }}>{game.name}</p>
            <div style={{ textAlign: "center" }}>
              <Link href={`/games/${game.name.toLowerCase().replace(/\s+/g, "-")}`} className="play-btn">Play Now</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}