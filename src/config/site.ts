// ============================================================
// ヤマザッカ サイト設定
// ============================================================

export const siteConfig = {
  // ---- 基本情報 ----
  siteName: "ヤマザッカ",
  siteNameEn: "Yamazakka",
  tagline: "毎日をもっと、おしゃれに。",
  description: "大人女性のための上質なレディースファッション。トレンドを取り入れながら、長く愛用できるアイテムを厳選してお届けします。",
  category: "レディースファッション",

  // ---- カラーテーマ（グリーン系）----
  colors: {
    primary: "#4A7C59",
    primaryDark: "#336244",
    secondary: "#F2F7F4",
    accent: "#2D5A3D",
    text: "#333333",
    textLight: "#777777",
    bg: "#ffffff",
    bgSub: "#F4F9F6",
  },

  // ---- ヘッダーナビ ----
  nav: [
    { label: "ホーム", href: "/" },
    { label: "商品一覧", href: "/products" },
    { label: "会社概要", href: "/about" },
    { label: "お問い合わせ", href: "/contact" },
  ],

  // ---- 商品一覧（30枚の画像を使用）----
  products: [
    { id: "1",  name: "ミニマルブラックテーラードジャケット",    price: 18000, category: "アウター",   description: "シンプルで無駄のないデザイン。程よいオーバーサイズでカジュアルにもフォーマルにも対応可能。",         sizes: ["S","M","L"],       colors: ["ブラック"],                               image: "/images/item-01.jpg", images: ["/images/item-01.jpg"], stock: true,  isNew: true  },
    { id: "2",  name: "ハーフジップニットプルオーバー",          price: 11000, category: "トップス",   description: "トレンドのハーフジップ仕様。ゆったりシルエットで抜け感があり、レイヤードにも最適。",                    sizes: ["S","M","L"],       colors: ["グレー","ブラック","ベージュ"],             image: "/images/item-02.jpg", images: ["/images/item-02.jpg"], stock: true,  isNew: true  },
    { id: "3",  name: "ワイドカーゴパンツ",                      price: 12000, category: "パンツ",     description: "大きめポケットが特徴のストリート系デザイン。ルーズシルエットで動きやすさも抜群。",                      sizes: ["S","M","L","XL"], colors: ["ブラック","カーキ","グレー"],               image: "/images/item-03.jpg", images: ["/images/item-03.jpg"], stock: true,  isNew: false },
    { id: "4",  name: "モックネックロングスリーブT",              price: 8000,  category: "トップス",   description: "首元に高さのあるモックネック。インナーにも1枚着にも使える万能トップス。",                              sizes: ["S","M","L","XL"], colors: ["ホワイト","ブラック","グレー"],             image: "/images/item-04.jpg", images: ["/images/item-04.jpg"], stock: true,  isNew: false },
    { id: "5",  name: "フェイクレザージップブルゾン",             price: 16000, category: "アウター",   description: "光沢感のあるレザー調素材。短丈でスタイルアップ効果あり、都会的な印象。",                                sizes: ["S","M","L"],       colors: ["ブラック"],                               image: "/images/item-05.jpg", images: ["/images/item-05.jpg"], stock: true,  isNew: true  },
    { id: "6",  name: "シャギーニットカーディガン",               price: 12000, category: "アウター",   description: "毛足の長い柔らかい素材感。羽織るだけで季節感と女性らしさを演出。",                                      sizes: ["FREE"],            colors: ["グレー","ベージュ","ホワイト"],             image: "/images/item-06.jpg", images: ["/images/item-06.jpg"], stock: true,  isNew: false },
    { id: "7",  name: "フォトプリントロングTシャツ",              price: 9000,  category: "トップス",   description: "モノクロフォトがアクセント。シンプルコーデの主役になるデザイン。",                                      sizes: ["S","M","L","XL"], colors: ["ホワイト"],                               image: "/images/item-07.jpg", images: ["/images/item-07.jpg"], stock: true,  isNew: false },
    { id: "8",  name: "ブラックデニムジャケット",                 price: 15000, category: "アウター",   description: "定番デニムをブラックで洗練。カジュアルにもモードにも合わせやすい万能アウター。",                        sizes: ["S","M","L"],       colors: ["ブラック"],                               image: "/images/item-08.jpg", images: ["/images/item-08.jpg"], stock: true,  isNew: false },
    { id: "9",  name: "メタリックショルダーバッグ",               price: 14000, category: "バッグ",     description: "存在感のある光沢素材。コーデのアクセントになるトレンドアイテム。",                                      sizes: ["ワンサイズ"],      colors: ["シルバー"],                               image: "/images/item-09.jpg", images: ["/images/item-09.jpg"], stock: true,  isNew: true  },
    { id: "10", name: "ストライプオーバーサイズシャツ",           price: 10000, category: "トップス",   description: "縦ラインでスタイルアップ効果。ゆったりシルエットで抜け感のある着こなしに。",                            sizes: ["S","M","L","XL"], colors: ["ブルー","ホワイト"],                       image: "/images/item-10.jpg", images: ["/images/item-10.jpg"], stock: true,  isNew: false },
    { id: "11", name: "スウェットワイドパンツ",                   price: 11000, category: "パンツ",     description: "柔らかい素材で履き心地抜群。ストレートシルエットで脚長効果あり。",                                      sizes: ["S","M","L"],       colors: ["グレー","ブラック","ベージュ"],             image: "/images/item-11.jpg", images: ["/images/item-11.jpg"], stock: true,  isNew: false },
    { id: "12", name: "ティアードミニスカート",                   price: 10000, category: "スカート",   description: "段フリルデザインでボリューム感あり。ウエストゴムで楽に着用可能。",                                      sizes: ["S","M","L"],       colors: ["ブラック","カーキ"],                       image: "/images/item-12.jpg", images: ["/images/item-12.jpg"], stock: true,  isNew: false },
    { id: "13", name: "リブタンクトップ",                         price: 7000,  category: "トップス",   description: "伸縮性のあるリブ素材。シンプルでインナーにも1枚着にも使える。",                                        sizes: ["S","M","L"],       colors: ["ブラック","ホワイト","グレー"],             image: "/images/item-13.jpg", images: ["/images/item-13.jpg"], stock: true,  isNew: false },
    { id: "14", name: "ボリュームソールスニーカー",               price: 15000, category: "シューズ",   description: "厚底でスタイルアップ効果。存在感のあるデザインでコーデの主役に。",                                      sizes: ["22.5cm","23cm","23.5cm","24cm","24.5cm","25cm"], colors: ["ホワイト"], image: "/images/item-14.jpg", images: ["/images/item-14.jpg"], stock: true,  isNew: true  },
    { id: "15", name: "ベーシックジップパーカー",                 price: 12000, category: "トップス",   description: "定番デザインで着回し力抜群。軽め素材で季節の変わり目に最適。",                                          sizes: ["S","M","L","XL"], colors: ["グレー","ブラック","ホワイト"],             image: "/images/item-15.jpg", images: ["/images/item-15.jpg"], stock: true,  isNew: false },
    { id: "16", name: "キャミソールロングワンピース",             price: 13000, category: "ワンピース", description: "ストンと落ちるシルエットで細見え。インナー次第でオールシーズン対応。",                                  sizes: ["S","M","L"],       colors: ["ブラック"],                               image: "/images/item-16.jpg", images: ["/images/item-16.jpg"], stock: true,  isNew: false },
    { id: "17", name: "ショート丈シャツ",                         price: 9000,  category: "トップス",   description: "クロップド丈でトレンド感あり。ハイウエストボトムと相性抜群。",                                          sizes: ["S","M","L"],       colors: ["ブルー","ホワイト","ブラック"],             image: "/images/item-17.jpg", images: ["/images/item-17.jpg"], stock: true,  isNew: false },
    { id: "18", name: "ワイドスラックスパンツ",                   price: 12000, category: "パンツ",     description: "落ち感のある素材で上品な印象。オンオフどちらにも使える万能パンツ。",                                    sizes: ["S","M","L","XL"], colors: ["ブラック","グレー","ネイビー"],             image: "/images/item-18.jpg", images: ["/images/item-18.jpg"], stock: true,  isNew: true  },
    { id: "19", name: "エナメルショルダーバッグ",                 price: 13000, category: "バッグ",     description: "光沢感があり高見え。コンパクトながら収納力も確保。",                                                    sizes: ["ワンサイズ"],      colors: ["ブラック"],                               image: "/images/item-19.jpg", images: ["/images/item-19.jpg"], stock: true,  isNew: false },
    { id: "20", name: "シアーロングスリーブトップス",             price: 9000,  category: "トップス",   description: "透け感のある素材で抜け感演出。レイヤードスタイルに最適。",                                              sizes: ["S","M","L"],       colors: ["ブラック","ホワイト"],                     image: "/images/item-20.jpg", images: ["/images/item-20.jpg"], stock: true,  isNew: false },
    { id: "21", name: "ミニマルテーラードベスト",                 price: 11000, category: "トップス",   description: "すっきりしたシルエットでレイヤードに最適。コーデにこなれ感をプラス。",                                  sizes: ["S","M","L"],       colors: ["グレー","ブラック","ベージュ"],             image: "/images/item-21.jpg", images: ["/images/item-21.jpg"], stock: true,  isNew: false },
    { id: "22", name: "フレアロングスカート",                     price: 12000, category: "スカート",   description: "裾に向かって広がるシルエットで女性らしさ演出。軽やかな印象で季節問わず使える。",                        sizes: ["S","M","L"],       colors: ["ホワイト","ブラック","ベージュ"],           image: "/images/item-22.jpg", images: ["/images/item-22.jpg"], stock: true,  isNew: false },
    { id: "23", name: "リブジップニットトップス",                 price: 11000, category: "トップス",   description: "縦リブで細見え効果。フロントジップで着こなしの調整が可能。",                                            sizes: ["S","M","L"],       colors: ["ブラック","グレー","ホワイト"],             image: "/images/item-23.jpg", images: ["/images/item-23.jpg"], stock: true,  isNew: false },
    { id: "24", name: "ギャザーメタリックバッグ",                 price: 14000, category: "バッグ",     description: "立体的なギャザーデザインが特徴。コーデのアクセントに最適。",                                            sizes: ["ワンサイズ"],      colors: ["シルバー"],                               image: "/images/item-24.jpg", images: ["/images/item-24.jpg"], stock: true,  isNew: true  },
    { id: "25", name: "ナイロンジップブルゾン",                   price: 13000, category: "アウター",   description: "軽量素材で動きやすい。カジュアルにもスポーティにも合わせやすい。",                                      sizes: ["S","M","L"],       colors: ["グレー","ブラック","カーキ"],               image: "/images/item-25.jpg", images: ["/images/item-25.jpg"], stock: true,  isNew: false },
    { id: "26", name: "ロゴスウェット",                           price: 9000,  category: "トップス",   description: "シンプルロゴで着回し力高め。ラフに着れる万能トップス。",                                                sizes: ["S","M","L","XL"], colors: ["ブラック","グレー","ホワイト"],             image: "/images/item-26.jpg", images: ["/images/item-26.jpg"], stock: true,  isNew: false },
    { id: "27", name: "ダメージデニムミニスカート",               price: 11000, category: "スカート",   description: "ヴィンテージ感のある加工。カジュアルスタイルの主役アイテム。",                                          sizes: ["S","M","L"],       colors: ["ブルー","ブラック"],                       image: "/images/item-27.jpg", images: ["/images/item-27.jpg"], stock: true,  isNew: false },
    { id: "28", name: "ドレープオフショルダートップス",           price: 10000, category: "トップス",   description: "肩見せデザインで女性らしさ強調。フィット感がありシルエットが綺麗。",                                    sizes: ["S","M","L"],       colors: ["ブラック","ホワイト"],                     image: "/images/item-28.jpg", images: ["/images/item-28.jpg"], stock: true,  isNew: true  },
    { id: "29", name: "厚底サイドゴアブーツ",                     price: 16000, category: "シューズ",   description: "ボリュームソールで脚長効果。安定感があり歩きやすい設計。",                                              sizes: ["22.5cm","23cm","23.5cm","24cm","24.5cm","25cm"], colors: ["ブラック"], image: "/images/item-29.jpg", images: ["/images/item-29.jpg"], stock: true,  isNew: false },
    { id: "30", name: "スタジャン",                               price: 17000, category: "アウター",   description: "配色切替が特徴の王道デザイン。ストリートコーデに最適。",                                                sizes: ["S","M","L"],       colors: ["ブラック×ホワイト"],                       image: "/images/item-30.jpg", images: ["/images/item-30.jpg"], stock: true,  isNew: true  },
  ],

  // ---- 振込先情報 ----
  bank: {
    bankName: "住信SBIネット銀行",
    branchName: "ミカン支店（103）",
    accountType: "普通",
    accountNumber: "6925844",
    accountHolder: "ヤマモト ユウキ",
    note: "ご注文後3日以内にお振込みください。確認後、3〜5営業日以内に発送いたします。",
  },

  // ---- 会社情報 ----
  company: {
    name: "ヤマザッカ",
    nameEn: "Yamazakka",
    postalCode: "561-0882",
    address: "大阪府豊中市中桜塚2-16-25-201",
    tel: "050-1725-9865",
    email: "yama-zakka@e-mail.jp",
    businessHours: "平日 10:00〜18:00（土日祝除く）",
    established: "—",
    capital: "—",
    representative: "山本 有紀",
    description: "大人女性のための上質なレディースファッションを厳選してお届けするオンラインショップです。",
  },

  // ---- 返品・送料ポリシー ----
  policy: {
    shippingFee: "全国一律550円（税込）",
    freeShippingOver: 10000,
    returnPeriod: "商品到着後7日以内",
    returnNote: "未使用・タグ付きのものに限り返品・交換を承ります。",
  },
};

export type SiteConfig = typeof siteConfig;
