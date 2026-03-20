"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a0305 0%, #3D0A0A 60%, #2a0707 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px 60px",
      }}
    >
      <div
        className="card"
        style={{
          maxWidth: "420px",
          width: "100%",
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
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                marginBottom: "12px",
              }}
            />
            <div
              className="text-gold"
              style={{
                fontWeight: 700,
                fontSize: "22px",
                letterSpacing: "0.15em",
              }}
            >
              BEESO
            </div>
          </Link>
        </div>

        {/* titulo */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Crear cuenta
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
            fontSize: "14px",
            marginBottom: "32px",
          }}
        >
          Crea tu cuenta y comienza a jugar
        </p>

        {/* form */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          <div>
            <label
              style={{
                display: "block",
                color: "rgba(230,184,0,0.8)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                marginBottom: "8px",
              }}
            >
              NOMBRE COMPLETO
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label style={{ display: "block", color: "rgba(230,184,0,0.8)", fontSize: "11px", letterSpacing: "0.1em", marginBottom: "8px" }}>
              CORREO
            </label>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label style={{ display: "block", color: "rgba(230,184,0,0.8)", fontSize: "11px", letterSpacing: "0.1em", marginBottom: "8px" }}>
              CONTRASEÑA
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label style={{ display: "block", color: "rgba(230,184,0,0.8)", fontSize: "11px", letterSpacing: "0.1em", marginBottom: "8px" }}>
              CONFIRMAR CONTRASEÑA
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="input-field"
            />
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "12px",
              lineHeight: 1.6,
            }}
          >
            Al crear una cuenta aceptas nuestros{" "}
            <span style={{ color: "rgba(230,184,0,0.6)" }}>Términos de servicio</span>
            {" "}y{" "}
            <span style={{ color: "rgba(230,184,0,0.6)" }}>Política de privacidad</span>.
          </p>

          <button className="btn-primary" onClick={() => {}}>
            Crear cuenta
          </button>
        </div>

        {/* division */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "24px 0" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
            o
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" }} />
        </div>

        {/* login */}
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/login"
            className="text-gold"
            style={{ textDecoration: "none", fontWeight: 700 }}
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </main>
  );
}