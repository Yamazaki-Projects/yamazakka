"use client";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#fff", borderBottom: "1px solid var(--border)",
    }}>
      {/* トップバー */}
      <div style={{
        background: "var(--accent)", color: "#fff",
        textAlign: "center", fontSize: "0.72rem", padding: "6px 16px",
        letterSpacing: "0.08em",
      }}>
        送料一律550円 ／ {siteConfig.policy.freeShippingOver.toLocaleString()}円以上で送料無料
      </div>

      <div style={{
        maxWidth: "var(--max-width)", margin: "0 auto",
        padding: "0 24px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* ロゴ */}
        <Link href="/" style={{
          fontFamily: "Georgia, serif", fontSize: "1.4rem",
          fontWeight: 400, letterSpacing: "0.12em",
          color: "var(--accent)", textDecoration: "none",
        }}>
          {siteConfig.siteNameEn.toUpperCase()}
        </Link>

        {/* PC ナビ */}
        <nav className="header-nav-pc">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} style={{
              fontSize: "0.78rem", letterSpacing: "0.08em",
              color: "var(--text)", textDecoration: "none",
              textTransform: "uppercase", fontWeight: 500,
            }}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ハンバーガーボタン（スマホのみ） */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          style={{
            display: "none", flexDirection: "column", gap: 5,
            background: "none", border: "none", cursor: "pointer", padding: 4,
          }}
        >
          <span style={{ display: "block", width: 22, height: 1.5, background: menuOpen ? "transparent" : "var(--accent)", transition: "all 0.2s" }} />
          <span style={{ display: "block", width: 22, height: 1.5, background: "var(--accent)", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(4px, -4px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 1.5, background: "var(--accent)", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(4px, 4px)" : "none" }} />
        </button>
      </div>

      {/* スマホ ドロワーメニュー */}
      {menuOpen && (
        <nav style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "#fff", borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          display: "flex", flexDirection: "column",
          zIndex: 200,
        }}>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "16px 24px", fontSize: "0.9rem",
                color: "var(--text)", textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                letterSpacing: "0.05em",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
