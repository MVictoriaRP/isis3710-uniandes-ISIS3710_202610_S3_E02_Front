import Link from "next/link";

export default function GamesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a0305 0%, #3D0A0A 50%, #2a0707 100%)",
        padding: "100px 48px 80px",
      }}
    >
      {/* titulo */}
      <h1 style={{ textAlign: "center", marginBottom: "12px" }}>
        <span style={{ color: "#fff", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900 }}>
          TODOS LOS{" "}
        </span>
        <span className="text-gold" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900 }}>
          JUEGOS
        </span>
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.6)",
          fontSize: "15px",
          marginBottom: "40px",
        }}
      >
        Más de 500 juegos premium de casino
      </p>

      {/* grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {[
          { name: "Chief's Fortune", category: "SLOTS", rating: 4.9 },
          { name: "Golden Buffalo", category: "SLOTS", rating: 4.8 },
          { name: "High Stakes Poker", category: "TABLE", rating: 4.9 },
          { name: "Thunder Blackjack", category: "TABLE", rating: 4.7 },
          { name: "Warpath Roulette", category: "TABLE", rating: 4.8 },
          { name: "Spirit Wheel", category: "GAME SHOW", rating: 4.6 },
          { name: "Totem Treasures", category: "SLOTS", rating: 4.7 },
          { name: "Progressive Jackpot", category: "JACKPOT", rating: 5.0 },
        ].map((game) => (
          <div key={game.name} className="card">
            
            <span
              className="text-gold"
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                fontSize: "12px",
              }}
            >
              ★ {game.rating}
            </span>

            <p
              style={{
                color: "rgba(230,184,0,0.6)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textAlign: "center",
                marginBottom: "6px",
                marginTop: "24px",
              }}
            >
              {game.category}
            </p>

            <p
              style={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              {game.name}
            </p>

            <div style={{ textAlign: "center" }}>
              <Link
                href={`/games/${game.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="btn-primary"
              >
                Jugar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}