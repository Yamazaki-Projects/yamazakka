"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/config/site";

function OrderForm() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const product = siteConfig.products.find((p) => p.id === productId);
  const preselectedSize = searchParams.get("size") ?? product?.sizes[0] ?? "";
  const preselectedColor = searchParams.get("color") ?? product?.colors[0] ?? "";

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    kana: "",
    email: "",
    tel: "",
    postal: "",
    address: "",
    size: preselectedSize,
    color: preselectedColor,
    quantity: "1",
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <section className="section">
        <div className="container" style={{ maxWidth: 680 }}>
          <div className="alert alert-success" style={{ textAlign: "center", padding: "40px 32px" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>✓</div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>ご注文を受け付けました</h2>
            <p style={{ fontSize: "0.9rem" }}>
              {form.email} 宛に確認メールをお送りしました。<br />
              以下の口座へ{product ? `¥${(product.price * Number(form.quantity)).toLocaleString()}` : "ご請求金額"}をお振込みください。
            </p>
          </div>

          {/* 振込先 */}
          <div className="bank-box">
            <h3>お振込先</h3>
            <dl>
              <div className="bank-row">
                <dt>銀行名</dt>
                <dd>{siteConfig.bank.bankName}</dd>
              </div>
              <div className="bank-row">
                <dt>支店名</dt>
                <dd>{siteConfig.bank.branchName}</dd>
              </div>
              <div className="bank-row">
                <dt>口座種別</dt>
                <dd>{siteConfig.bank.accountType}</dd>
              </div>
              <div className="bank-row">
                <dt>口座番号</dt>
                <dd>{siteConfig.bank.accountNumber}</dd>
              </div>
              <div className="bank-row">
                <dt>口座名義</dt>
                <dd>{siteConfig.bank.accountHolder}</dd>
              </div>
              {product && (
                <div className="bank-row">
                  <dt>お振込金額</dt>
                  <dd style={{ color: "var(--accent)", fontSize: "1.1rem" }}>
                    ¥{(product.price * Number(form.quantity)).toLocaleString()}（税込）
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="alert alert-info">
            <p>{siteConfig.bank.note}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="page-header">
        <h1>ご注文フォーム</h1>
        <p>必要事項をご入力ください</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 680 }}>
          {/* 商品確認 */}
          {product && (
            <div style={{ background: "var(--bg-sub)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "20px", marginBottom: "32px", display: "flex", gap: "16px", alignItems: "center" }}>
              <img src={product.image} alt={product.name} style={{ width: 80, height: 100, objectFit: "cover", borderRadius: "4px" }} />
              <div>
                <p style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>{product.category}</p>
                <p style={{ fontWeight: 700, marginBottom: "4px" }}>{product.name}</p>
                <p style={{ fontWeight: 700, color: "var(--accent)" }}>¥{product.price.toLocaleString()}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div className="form-group">
                <label className="form-label">お名前<span className="required">*必須</span></label>
                <input className="form-input" name="name" value={form.name} onChange={handleChange} required placeholder="山田 花子" />
              </div>
              <div className="form-group">
                <label className="form-label">フリガナ<span className="required">*必須</span></label>
                <input className="form-input" name="kana" value={form.kana} onChange={handleChange} required placeholder="ヤマダ ハナコ" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">メールアドレス<span className="required">*必須</span></label>
              <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="example@email.com" />
            </div>

            <div className="form-group">
              <label className="form-label">電話番号<span className="required">*必須</span></label>
              <input className="form-input" type="tel" name="tel" value={form.tel} onChange={handleChange} required placeholder="090-0000-0000" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "16px" }}>
              <div className="form-group">
                <label className="form-label">郵便番号<span className="required">*必須</span></label>
                <input className="form-input" name="postal" value={form.postal} onChange={handleChange} required placeholder="000-0000" />
              </div>
              <div className="form-group">
                <label className="form-label">住所<span className="required">*必須</span></label>
                <input className="form-input" name="address" value={form.address} onChange={handleChange} required placeholder="東京都渋谷区..." />
              </div>
            </div>

            {product && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
                <div className="form-group">
                  <label className="form-label">サイズ</label>
                  <select className="form-select" name="size" value={form.size} onChange={handleChange}>
                    {product.sizes.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">カラー</label>
                  <select className="form-select" name="color" value={form.color} onChange={handleChange}>
                    {product.colors.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">数量</label>
                  <select className="form-select" name="quantity" value={form.quantity} onChange={handleChange}>
                    {[1,2,3,4,5].map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">備考</label>
              <textarea className="form-textarea" name="note" value={form.note} onChange={handleChange} placeholder="ご要望などがあればご記入ください" />
            </div>

            <div className="alert alert-info">
              <p>ご注文後、振込先口座をメールにてご案内いたします。ご入金確認後、3〜5営業日以内に発送いたします。</p>
            </div>

            <button type="submit" className="btn btn-accent" style={{ width: "100%", padding: "16px", fontSize: "1rem" }}>
              注文を確定する
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default function OrderPage() {
  return (
    <Suspense>
      <OrderForm />
    </Suspense>
  );
}
