"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a0305 0%, #3D0A0A 60%, #2a0707 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px 60px",
        fontFamily: "'Cinzel', 'Georgia', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');
        .input-field {
          width: 100%;
          padding: 14px 16px;
          borderRadius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(230,184,0,0.25);
          color: #fff;
          font-family: 'Georgia', serif;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .input-field:focus { border-color: #E6B800; }
        .input-field::placeholder { color: rgba(255,255,255,0.3); }
        .btn-gold { width:100%; padding:16px; border-radius:8px; background:linear-gradient(135deg,#E6B800,#CC8800); color:#1a0305; font-weight:700; font-size:15px; border:none; cursor:pointer; font-family:'Cinzel',serif; letter-spacing:0.06em; box-shadow:0 4px 28px rgba(230,184,0,0.4); transition:all 0.15s ease; }
        .btn-gold:hover { background:linear-gradient(135deg,#FFD700,#E6A000); transform:translateY(-1px); }
        .btn-gold:active { background:linear-gradient(135deg,#B8860B,#996600); transform:translateY(1px); }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(230,184,0,0.15)",
          borderRadius: "16px",
          padding: "48px 40px",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <img
              src="/chiefs-fortune.png"
              alt="Beeso Logo"
              width={52}
              height={52}
              style={{ borderRadius: "10px", objectFit: "cover", marginBottom: "12px" }}
            />
            <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: "22px", color: "#E6B800", letterSpacing: "0.15em" }}>
              BEESO
            </div>
          </Link>
        </div>

        {/* Título */}
        <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "8px", fontFamily: "'Cinzel', serif" }}>
          Welcome Back
        </h1>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "14px", fontFamily: "'Georgia', serif", marginBottom: "32px" }}>
          Sign in to your account
        </p>

        {/* Formulario */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          <div>
            <label style={{ display: "block", color: "rgba(230,184,0,0.8)", fontSize: "11px", letterSpacing: "0.1em", fontFamily: "'Cinzel', serif", marginBottom: "8px" }}>
              EMAIL
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label style={{ display: "block", color: "rgba(230,184,0,0.8)", fontSize: "11px", letterSpacing: "0.1em", fontFamily: "'Cinzel', serif", marginBottom: "8px" }}>
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>

          <div style={{ textAlign: "right" }}>
            <span style={{ color: "rgba(230,184,0,0.6)", fontSize: "12px", fontFamily: "'Georgia', serif", cursor: "pointer" }}>
              Forgot password?
            </span>
          </div>

          <button className="btn-gold" onClick={() => {}}>
            Sign In
          </button>

        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "24px 0" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontFamily: "'Georgia', serif" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
        </div>

        {/* Register link */}
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "14px", fontFamily: "'Georgia', serif" }}>
          Don&apos;t have an account?{" "}
          <Link href="/register" style={{ color: "#E6B800", textDecoration: "none", fontWeight: 700 }}>
            Join Now
          </Link>
        </p>
      </div>
    </main>
  );
}