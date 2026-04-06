import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Home() {
  const { products } = siteConfig;
  const newProducts = products.filter((p) => p.isNew);
  const featured = products.slice(0, 5);
  const rest = products.slice(5, 11);

  return (
    <>
      {/* ─── Hero：全画面テキストオーバーレイ ─── */}
      <section style={{ position: "relative", height: "90vh", minHeight: 560, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Image src={products[0].image} alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%)" }} />
        <div style={{ position: "relative", zIndex: 1, padding: "0 48px 64px", color: "#fff" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.7, marginBottom: 16 }}>
            {siteConfig.category}
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400, lineHeight: 1.15, marginBottom: 24, letterSpacing: "-0.01em" }}>
            {siteConfig.tagline}
          </h1>
          <Link href="/products" style={{
            display: "inline-block", padding: "14px 40px",
            border: "1.5px solid #fff", color: "#fff",
            fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase",
            textDecoration: "none", transition: "all 0.2s",
            background: "transparent"
          }}>
            Collection →
          </Link>
        </div>
      </section>

      {/* ─── マガジングリッド（非対称）─── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 400, color: "var(--accent)" }}>New Arrivals</h2>
            <Link href="/products" style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--primary)", textDecoration: "none" }}>
              All items →
            </Link>
          </div>

          {/* 大・小グリッド */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "auto auto", gap: 2 }}>
            {/* メイン大カード */}
            {featured[0] && (
              <Link href={`/products/${featured[0].id}`} style={{ gridColumn: "1 / 2", gridRow: "1 / 3", textDecoration: "none", display: "block", position: "relative", overflow: "hidden", background: "#f5f5f5" }}>
                <Image src={featured[0].image} alt={featured[0].name} width={600} height={800} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 480 }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 24px", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}>
                  {featured[0].isNew && <span style={{ fontSize: "0.65rem", letterSpacing: "0.12em", background: "var(--primary)", color: "#fff", padding: "3px 10px", marginBottom: 8, display: "inline-block" }}>NEW</span>}
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{featured[0].name}</p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>¥{featured[0].price.toLocaleString()}</p>
                </div>
              </Link>
            )}
            {/* 右側2枚 */}
            {featured.slice(1, 3).map((p, i) => (
              <Link key={p.id} href={`/products/${p.id}`} style={{ gridColumn: i === 0 ? "2 / 3" : "3 / 4", gridRow: "1 / 2", textDecoration: "none", position: "relative", overflow: "hidden", background: "#f5f5f5" }}>
                <Image src={p.image} alt={p.name} width={400} height={300} style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-light)", marginBottom: 4 }}>{p.category}</p>
                  <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: 4 }}>{p.name}</p>
                  <p style={{ color: "var(--primary)", fontWeight: 700 }}>¥{p.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
            {featured.slice(3, 5).map((p, i) => (
              <Link key={p.id} href={`/products/${p.id}`} style={{ gridColumn: i === 0 ? "2 / 3" : "3 / 4", gridRow: "2 / 3", textDecoration: "none", position: "relative", overflow: "hidden", background: "#f5f5f5" }}>
                <Image src={p.image} alt={p.name} width={400} height={300} style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "16px" }}>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-light)", marginBottom: 4 }}>{p.category}</p>
                  <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: 4 }}>{p.name}</p>
                  <p style={{ color: "var(--primary)", fontWeight: 700 }}>¥{p.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── バナー：コンセプト ─── */}
      <section style={{ background: "var(--accent)", color: "#fff", padding: "80px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6, marginBottom: 16 }}>Our Story</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.4, maxWidth: 600, margin: "0 auto 32px" }}>
          毎日を、もっと<br />おしゃれに。
        </h2>
        <p style={{ fontSize: "0.9rem", opacity: 0.7, maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.9 }}>
          {siteConfig.description}
        </p>
        <Link href="/about" style={{ display: "inline-block", padding: "12px 36px", border: "1px solid rgba(255,255,255,0.5)", color: "#fff", textDecoration: "none", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          About us →
        </Link>
      </section>

      {/* ─── 横スクロール風 商品リスト ─── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 400, color: "var(--accent)" }}>Collection</h2>
            <Link href="/products" style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--primary)", textDecoration: "none" }}>
              View all →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px 16px" }}>
            {rest.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ overflow: "hidden", marginBottom: 12 }}>
                  <Image
                    src={p.image} alt={p.name}
                    width={400} height={480}
                    style={{ width: "100%", height: 280, objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                    className="hover-zoom"
                  />
                </div>
                <p style={{ fontSize: "0.75rem", color: "var(--text-light)", marginBottom: 4 }}>{p.category}</p>
                <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: 6 }}>{p.name}</p>
                <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.95rem" }}>¥{p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3つの安心 ─── */}
      <section style={{ background: "var(--bg-sub)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }}>
          {[
            { icon: "🚚", title: "送料一律550円", desc: `¥${siteConfig.policy.freeShippingOver.toLocaleString()}以上で無料` },
            { icon: "🔄", title: "返品・交換OK", desc: "到着後7日以内・未使用品" },
            { icon: "💳", title: "銀行振込", desc: "ご注文後に口座をご案内" },
          ].map((item) => (
            <div key={item.title} style={{ background: "#fff", padding: "40px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: 12 }}>{item.icon}</div>
              <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--accent)", marginBottom: 6 }}>{item.title}</p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .hover-zoom:hover { transform: scale(1.04); }
      `}</style>
    </>
  );
}
