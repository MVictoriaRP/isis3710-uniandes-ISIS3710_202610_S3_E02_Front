import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a0305 0%, #3D0A0A 50%, #5D1010 100%)",
      }}
    >
      {/* ── navegacion ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          height: "72px",
          background: "rgba(15, 2, 3, 0.90)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,215,0,0.12)",
        }}
      >
        {/* logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image
            src="/chiefs-fortune.png"
            alt="Beeso Logo"
            width={44}
            height={44}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
          <span className="text-gold" style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "0.15em" }}>
            BEESO
          </span>
        </Link>

        {/* links */}
        <div style={{ display: "flex", gap: "40px" }}>
          {[
            { label: "Home", href: "/" },
            { label: "Juegos", href: "/games" },
            { label: "Login", href: "/login" },
            { label: "Registro", href: "/register" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: "0.08em",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* boton */}
        <Link href="/register" className="btn-primary">
          Únete ahora
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 20px 60px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            padding: "8px 22px",
            borderRadius: "999px",
            border: "1px solid rgba(230,184,0,0.4)",
            background: "rgba(230,184,0,0.06)",
            fontSize: "13px",
            color: "#E6B800",
            marginBottom: "36px",
            letterSpacing: "0.1em",
          }}
        >
          ✦ Casino online premium
        </div>

        {/* Título */}
        <h1 style={{ marginBottom: "24px" }}>
          <span
            className="text-gold"
            style={{
              display: "block",
              fontSize: "clamp(52px, 9vw, 110px)",
              fontWeight: 900,
            }}
          >
            Where Legends
          </span>

          <span
            style={{
              display: "block",
              fontSize: "clamp(60px, 11vw, 130px)",
              fontWeight: 900,
              color: "#fff",
            }}
          >
            Play
          </span>
        </h1>

        {/* Texto */}
        <p
          style={{
            maxWidth: "540px",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.75)",
            marginBottom: "44px",
          }}
        >
          Vive la experiencia definitiva de casino. Juegos premium, jackpots
          enormes y un trato VIP que impone respeto.
        </p>

        {/* Botón */}
        <Link href="/games" className="btn-primary">
          Empezar a jugar →
        </Link>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "80px",
            flexWrap: "wrap",
            justifyContent: "center",
            borderTop: "1px solid rgba(230,184,0,0.15)",
            paddingTop: "44px",
            marginTop: "60px",
          }}
        >
          {[
            { value: "500+", label: "Juegos" },
            { value: "$2M+", label: "Jackpots" },
            { value: "24/7", label: "Soporte" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div className="text-gold" style={{ fontSize: "48px", fontWeight: 900 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}