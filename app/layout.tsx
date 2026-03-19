import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beeso Casino",
  description: "Where Legends Play",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          .nav-join { padding:12px 28px; border-radius:8px; background:linear-gradient(135deg,#E6B800,#CC8800); color:#1a0305; font-weight:700; font-size:14px; text-decoration:none; font-family:'Cinzel',serif; letter-spacing:0.05em; box-shadow:0 4px 20px rgba(230,184,0,0.35); transition:all 0.15s ease; display:inline-block; }
          .nav-join:hover { background:linear-gradient(135deg,#FFD700,#E6A000); box-shadow:0 6px 28px rgba(255,215,0,0.55); transform:translateY(-1px); }
          .nav-join:active { background:linear-gradient(135deg,#B8860B,#996600); transform:translateY(1px); }
          .nav-link { color:rgba(255,255,255,0.85); text-decoration:none; font-family:'Cinzel',serif; font-size:14px; letter-spacing:0.08em; font-weight:400; transition:color 0.15s ease; }
          .nav-link:hover { color:#E6B800; }
        `}</style>

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
            <img
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
            <Link href="/"         className="nav-link">Home</Link>
            <Link href="/games"    className="nav-link">Games</Link>
            <Link href="/login"    className="nav-link">Login</Link>
            <Link href="/register" className="nav-link">Register</Link>
          </div>

          {/* Join Now */}
          <Link href="/register" className="nav-join">
            Join Now
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
}