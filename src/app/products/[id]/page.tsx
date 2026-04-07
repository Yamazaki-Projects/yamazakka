import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import ProductOptions from "@/components/ProductOptions";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return siteConfig.products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = siteConfig.products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = siteConfig.products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <>
      <section className="section">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">ホーム</Link>
            <span>/</span>
            <Link href="/products">商品一覧</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>

          <div className="product-detail-grid">
            {/* 画像 */}
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={800}
                style={{ width: "100%", height: "auto", borderRadius: "var(--radius)", objectFit: "cover" }}
                priority
              />
            </div>

            {/* 情報 */}
            <div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-light)", marginBottom: "8px" }}>{product.category}</p>
              <h1 style={{ fontSize: "clamp(1.4rem, 4vw, 1.75rem)", fontWeight: 700, marginBottom: "16px", color: "var(--accent)" }}>
                {product.name}
                {product.isNew && <span className="badge-new">NEW</span>}
              </h1>
              <p style={{ fontSize: "clamp(1.6rem, 5vw, 2rem)", fontWeight: 700, color: "var(--accent)", marginBottom: "4px" }}>
                ¥{product.price.toLocaleString()}
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-light)", marginBottom: "24px" }}>税込・送料別</p>

              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text)", marginBottom: "24px" }}>
                {product.description}
              </p>

              <ProductOptions product={product} />

              <div style={{ marginTop: "24px", padding: "16px", background: "var(--bg-sub)", borderRadius: "var(--radius)", fontSize: "0.8rem", color: "var(--text-light)", lineHeight: 1.8 }}>
                <p>送料：{siteConfig.policy.shippingFee}（{siteConfig.policy.freeShippingOver.toLocaleString()}円以上で送料無料）</p>
                <p>返品：{siteConfig.policy.returnPeriod}以内・{siteConfig.policy.returnNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .product-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          margin-top: 8px;
        }
        @media (max-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </>
  );
}
