import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { company, nav } = siteConfig;

  return (
    <footer style={{ background: "#1a1a1a", color: "#fff", marginTop: 80 }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "64px 24px 40px" }}>
        <div className="footer-grid">
          {/* ブランド */}
          <div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", letterSpacing: "0.1em", marginBottom: 16, color: "var(--primary)" }}>
              {siteConfig.siteNameEn.toUpperCase()}
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.8, opacity: 0.6, maxWidth: 300 }}>
              {siteConfig.description}
            </p>
          </div>
          {/* ナビ */}
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.4, marginBottom: 16 }}>Menu</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ fontSize: "0.875rem", opacity: 0.7, textDecoration: "none", color: "#fff" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/law" style={{ fontSize: "0.875rem", opacity: 0.7, textDecoration: "none", color: "#fff" }}>
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
          {/* 会社情報 */}
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.4, marginBottom: 16 }}>Info</p>
            <p style={{ fontSize: "0.8rem", lineHeight: 2, opacity: 0.6 }}>
              {company.name}<br />
              〒{company.postalCode}<br />
              {company.address}<br />
              {company.tel}<br />
              {company.email}
            </p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, textAlign: "center", fontSize: "0.75rem", opacity: 0.3 }}>
          &copy; {new Date().getFullYear()} {company.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
