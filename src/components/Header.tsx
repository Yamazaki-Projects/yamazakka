import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#fff", borderBottom: "1px solid var(--border)",
    }}>
      {/* トップバー */}
      <div style={{
        background: "var(--accent)", color: "#fff",
        textAlign: "center", fontSize: "0.75rem", padding: "6px",
        letterSpacing: "0.1em"
      }}>
        送料一律550円 ／ {siteConfig.policy.freeShippingOver.toLocaleString()}円以上で送料無料
      </div>
      <div style={{
        maxWidth: "var(--max-width)", margin: "0 auto",
        padding: "0 24px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <Link href="/" style={{
          fontFamily: "Georgia, serif", fontSize: "1.5rem",
          fontWeight: 400, letterSpacing: "0.12em",
          color: "var(--accent)", textDecoration: "none"
        }}>
          {siteConfig.siteNameEn.toUpperCase()}
        </Link>
        <nav style={{ display: "flex", gap: 32 }}>
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} style={{
              fontSize: "0.8rem", letterSpacing: "0.08em",
              color: "var(--text)", textDecoration: "none",
              textTransform: "uppercase", fontWeight: 500
            }}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
