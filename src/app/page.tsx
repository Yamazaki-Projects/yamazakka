import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Home() {
  const { products } = siteConfig;
  const featured = products.slice(0, 5);
  const rest = products.slice(5, 11);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="hero-section">
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src={products[0].image} alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%)" }} />
        <div className="hero-content">
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.7, marginBottom: 14 }}>
            {siteConfig.category}
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 6vw, 5rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: 20, letterSpacing: "-0.01em" }}>
            {siteConfig.tagline}
          </h1>
          <Link href="/products" className="hero-btn">
            Collection →
          </Link>
        </div>
      </section>

      {/* ─── New Arrivals ─── */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 400, color: "var(--accent)" }}>New Arrivals</h2>
            <Link href="/products" style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--primary)", textDecoration: "none", whiteSpace: "nowrap" }}>
              All items →
            </Link>
          </div>

          {/* マガジングリッド */}
          <div className="magazine-grid">
            {featured[0] && (
              <Link href={`/products/${featured[0].id}`} className="magazine-main">
                <Image src={featured[0].image} alt={featured[0].name} width={600} height={800} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 320 }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}>
                  {featured[0].isNew && <span style={{ fontSize: "0.65rem", letterSpacing: "0.12em", background: "var(--primary)", color: "#fff", padding: "3px 10px", marginBottom: 8, display: "inline-block" }}>NEW</span>}
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>{featured[0].name}</p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>¥{featured[0].price.toLocaleString()}</p>
                </div>
              </Link>
            )}
            <div className="magazine-sub">
              {featured.slice(1, 5).map((p) => (
                <Link key={p.id} href={`/products/${p.id}`} style={{ textDecoration: "none", background: "#f5f5f5", overflow: "hidden", display: "block" }}>
                  <Image src={p.image} alt={p.name} width={400} height={300} style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "12px" }}>
                    <p style={{ fontSize: "0.7rem", color: "var(--text-light)", marginBottom: 2 }}>{p.category}</p>
                    <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--text)", marginBottom: 2 }}>{p.name}</p>
                    <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.85rem" }}>¥{p.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── コンセプトバナー ─── */}
      <section style={{ background: "var(--accent)", color: "#fff", padding: "64px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6, marginBottom: 14 }}>Our Story</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.5, maxWidth: 560, margin: "0 auto 24px" }}>
          毎日を、もっと<br />おしゃれに。
        </h2>
        <p style={{ fontSize: "0.88rem", opacity: 0.7, maxWidth: 440, margin: "0 auto 32px", lineHeight: 1.9 }}>
          {siteConfig.description}
        </p>
        <Link href="/about" style={{ display: "inline-block", padding: "12px 32px", border: "1px solid rgba(255,255,255,0.5)", color: "#fff", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          About us →
        </Link>
      </section>

      {/* ─── Collection ─── */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 400, color: "var(--accent)" }}>Collection</h2>
            <Link href="/products" style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--primary)", textDecoration: "none", whiteSpace: "nowrap" }}>
              View all →
            </Link>
          </div>
          <div className="collection-grid">
            {rest.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ overflow: "hidden", marginBottom: 10 }}>
                  <Image
                    src={p.image} alt={p.name}
                    width={400} height={480}
                    style={{ width: "100%", height: 260, objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                    className="hover-zoom"
                  />
                </div>
                <p style={{ fontSize: "0.72rem", color: "var(--text-light)", marginBottom: 3 }}>{p.category}</p>
                <p style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--text)", marginBottom: 4 }}>{p.name}</p>
                <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem" }}>¥{p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3つの安心 ─── */}
      <section style={{ background: "var(--bg-sub)", padding: "48px 24px" }}>
        <div className="features-strip">
          {[
            { icon: "🚚", title: "送料一律550円", desc: `¥${siteConfig.policy.freeShippingOver.toLocaleString()}以上で無料` },
            { icon: "🔄", title: "返品・交換OK", desc: "到着後7日以内・未使用品" },
            { icon: "💳", title: "銀行振込", desc: "ご注文後に口座をご案内" },
          ].map((item) => (
            <div key={item.title} style={{ background: "#fff", padding: "32px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{item.icon}</div>
              <p style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--accent)", marginBottom: 4 }}>{item.title}</p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-light)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .hover-zoom:hover { transform: scale(1.04); }

        /* ─── Hero ─── */
        .hero-section {
          position: relative;
          height: 90vh;
          min-height: 480px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          padding: 0 48px 64px;
          color: #fff;
        }
        .hero-btn {
          display: inline-block;
          padding: 14px 40px;
          border: 1.5px solid #fff;
          color: #fff;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          background: transparent;
        }

        /* ─── Magazine Grid ─── */
        .magazine-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .magazine-main {
          text-decoration: none;
          display: block;
          position: relative;
          overflow: hidden;
          background: #f5f5f5;
        }
        .magazine-sub {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }

        /* ─── Collection Grid ─── */
        .collection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px 16px;
        }

        /* ─── Features Strip ─── */
        .features-strip {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
        }

        /* ─── Footer Grid ─── */
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }

        /* ─── Header Nav PC ─── */
        .header-nav-pc {
          display: flex;
          gap: 32px;
        }
        .hamburger {
          display: none !important;
        }

        /* ─── Mobile ─── */
        @media (max-width: 768px) {
          .hero-section { height: 75vh; min-height: 400px; }
          .hero-content { padding: 0 24px 40px; }

          .magazine-grid { grid-template-columns: 1fr; }
          .magazine-sub { grid-template-columns: 1fr 1fr; }

          .collection-grid { grid-template-columns: repeat(2, 1fr); gap: 16px 12px; }

          .features-strip { grid-template-columns: 1fr; }

          .footer-grid { grid-template-columns: 1fr; gap: 32px; }

          .header-nav-pc { display: none !important; }
          .hamburger { display: flex !important; }
        }

        @media (max-width: 480px) {
          .collection-grid { grid-template-columns: 1fr; }
          .magazine-sub { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  );
}
