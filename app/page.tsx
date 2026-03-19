import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a0305 0%, #3D0A0A 50%, #5D1010 100%)",
        color: "#fff",
        fontFamily: "'Cinzel', 'Georgia', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #1a0305; }

        .btn-primary {
          padding: 16px 40px;
          border-radius: 8px;
          background: linear-gradient(135deg, #E6B800, #CC8800);
          color: #1a0305;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          font-family: 'Cinzel', serif;
          letter-spacing: 0.06em;
          box-shadow: 0 4px 28px rgba(230,184,0,0.4);
          transition: all 0.15s ease;
          display: inline-block;
        }
        .btn-primary:hover {
          background: linear-gradient(135deg, #FFD700, #E6A000);
          box-shadow: 0 6px 36px rgba(255,215,0,0.6);
          transform: translateY(-1px);
        }
        .btn-primary:active {
          background: linear-gradient(135deg, #B8860B, #996600);
          box-shadow: 0 2px 12px rgba(180,134,0,0.3);
          transform: translateY(1px);
        }

        .nav-join {
          padding: 12px 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, #E6B800, #CC8800);
          color: #1a0305;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          font-family: 'Cinzel', serif;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 20px rgba(230,184,0,0.35);
          transition: all 0.15s ease;
          display: inline-block;
        }
        .nav-join:hover {
          background: linear-gradient(135deg, #FFD700, #E6A000);
          box-shadow: 0 6px 28px rgba(255,215,0,0.55);
          transform: translateY(-1px);
        }
        .nav-join:active {
          background: linear-gradient(135deg, #B8860B, #996600);
          transform: translateY(1px);
        }
      `}</style>

      {/* ── NAVBAR ── */}
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
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image
            src="/chiefs-fortune.png"
            alt="Beeso Logo"
            width={44}
            height={44}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "#E6B800",
              letterSpacing: "0.15em",
            }}
          >
            BEESO
          </span>
        </Link>

        {/* Links */}
        <div style={{ display: "flex", gap: "40px" }}>
          {[
            { label: "Home",     href: "/" },
            { label: "Games",    href: "/games" },
            { label: "Login",    href: "/login" },
            { label: "Register", href: "/register" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontFamily: "'Cinzel', serif",
                fontSize: "14px",
                letterSpacing: "0.08em",
                fontWeight: 400,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Join Now */}
        <Link href="/register" className="nav-join">
          Join Now
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
          backgroundImage: `
            radial-gradient(ellipse at 50% 0%, rgba(255,180,0,0.07) 0%, transparent 65%),
            radial-gradient(ellipse at 15% 50%, rgba(180,0,0,0.25) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 50%, rgba(180,0,0,0.25) 0%, transparent 55%)
          `,
        }}
      >
        {/* Puntos decorativos */}
        {[
          { top: "15%", left: "8%" },
          { top: "25%", left: "18%" },
          { top: "60%", left: "5%" },
          { top: "70%", left: "22%" },
          { top: "15%", left: "88%" },
          { top: "40%", left: "92%" },
          { top: "65%", left: "82%" },
          { top: "80%", left: "95%" },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#E6B800",
              opacity: 0.45,
              top: pos.top,
              left: pos.left,
              boxShadow: "0 0 6px #E6B800",
            }}
          />
        ))}

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 22px",
            borderRadius: "999px",
            border: "1px solid rgba(230,184,0,0.4)",
            background: "rgba(230,184,0,0.06)",
            fontSize: "13px",
            color: "#E6B800",
            marginBottom: "36px",
            letterSpacing: "0.1em",
            fontFamily: "'Cinzel', serif",
          }}
        >
          ✦ Premium Online Casino
        </div>

        {/* Título */}
        <h1 style={{ margin: "0 0 24px", lineHeight: 1 }}>
          <span
            style={{
              display: "block",
              fontSize: "clamp(52px, 9vw, 110px)",
              fontWeight: 900,
              color: "#E6B800",
              fontFamily: "'Cinzel', serif",
              textTransform: "uppercase",
              textShadow: `
                0 0 15px rgba(230,184,0,0.5),
                0 0 30px rgba(200,140,0,0.3),
                0 0 60px rgba(180,100,0,0.1)
              `,
              letterSpacing: "0.02em",
            }}
          >
            WHERE LEGENDS
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(60px, 11vw, 130px)",
              fontWeight: 900,
              color: "#ffffff",
              fontFamily: "'Cinzel', serif",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              marginTop: "-8px",
              textShadow: `
                0 0 10px rgba(255,255,255,0.2),
                0 0 25px rgba(230,184,0,0.1)
              `,
            }}
          >
            PLAY
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            maxWidth: "540px",
            fontSize: "clamp(14px, 1.8vw, 17px)",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.75)",
            margin: "0 0 44px",
            fontFamily: "'Georgia', serif",
            fontWeight: 400,
          }}
        >
          Experience the ultimate OG casino. Premium games, massive jackpots,
          and VIP treatment that commands respect.
        </p>

        {/* Botón */}
        <div style={{ marginBottom: "80px" }}>
          <Link href="/games" className="btn-primary">
            Start Playing →
          </Link>
        </div>

        {/* ── STATS ── */}
        <div
          style={{
            display: "flex",
            gap: "clamp(40px, 10vw, 120px)",
            flexWrap: "wrap",
            justifyContent: "center",
            borderTop: "1px solid rgba(230,184,0,0.15)",
            paddingTop: "44px",
            width: "100%",
            maxWidth: "680px",
          }}
        >
          {[
            { value: "500+", label: "Games" },
            { value: "$2M+", label: "Jackpots" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(38px, 6vw, 58px)",
                  fontWeight: 900,
                  color: "#E6B800",
                  fontFamily: "'Cinzel', serif",
                  lineHeight: 1,
                  textShadow: "0 0 24px rgba(230,184,0,0.7)",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.55)",
                  marginTop: "8px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Cinzel', serif",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}