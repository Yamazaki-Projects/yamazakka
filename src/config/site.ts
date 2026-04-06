// ============================================================
// ヤマザッカ サイト設定
// ============================================================

export const siteConfig = {
  // ---- 基本情報 ----
  siteName: "ヤマザッカ楽天市場店",
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
    { id: "1",  name: "リネンシャツブラウス",      price: 4980, category: "トップス",    description: "さらっとした肌触りのリネン混ブラウス。ゆとりのあるシルエットで一枚でサマになります。",           sizes: ["S","M","L","XL"], colors: ["オフホワイト","セージグリーン","ベージュ"], image: "/images/item-01.png", images: ["/images/item-01.png"], stock: true,  isNew: true  },
    { id: "2",  name: "フレアスカート",             price: 3980, category: "スカート",   description: "動くたびに揺れる上品なフレアシルエット。膝下丈でオフィスにも対応できる万能スカートです。",          sizes: ["S","M","L"],       colors: ["ブラック","カーキ","テラコッタ"],          image: "/images/item-02.png", images: ["/images/item-02.png"], stock: true,  isNew: false },
    { id: "3",  name: "ワイドデニムパンツ",         price: 5480, category: "パンツ",     description: "ゆったりしたワイドシルエットのデニムパンツ。トップスを選ばず着回し力抜群の一枚です。",                sizes: ["S","M","L","XL"], colors: ["インディゴ","ライトブルー","ブラック"],     image: "/images/item-03.png", images: ["/images/item-03.png"], stock: true,  isNew: false },
    { id: "4",  name: "リブニットカーディガン",     price: 4480, category: "アウター",   description: "細かいリブ編みが美しいロングカーディガン。羽織るだけでコーデに上品さをプラスします。",                sizes: ["FREE"],            colors: ["アイボリー","グレー","モカ"],              image: "/images/item-04.png", images: ["/images/item-04.png"], stock: true,  isNew: true  },
    { id: "5",  name: "サテンブラウス",             price: 3780, category: "トップス",   description: "上品な光沢感のサテンブラウス。タックインでもアウトでも、ドレスアップしたい日の一枚に。",              sizes: ["S","M","L"],       colors: ["ホワイト","ブラック","ダスティピンク"],     image: "/images/item-05.png", images: ["/images/item-05.png"], stock: true,  isNew: false },
    { id: "6",  name: "プリーツワンピース",         price: 6980, category: "ワンピース", description: "エレガントなプリーツが美しいワンピース。シンプルなデザインで季節を問わず活躍します。",                  sizes: ["S","M","L"],       colors: ["ネイビー","ブラック","オリーブ"],           image: "/images/item-06.png", images: ["/images/item-06.png"], stock: true,  isNew: false },
    { id: "7",  name: "テーパードスラックス",       price: 4980, category: "パンツ",     description: "きれいめなテーパードシルエットのスラックス。オフィスからデートまで幅広く使えます。",                    sizes: ["S","M","L","XL"], colors: ["ブラック","グレー","ネイビー"],             image: "/images/item-07.png", images: ["/images/item-07.png"], stock: true,  isNew: false },
    { id: "8",  name: "フローラルワンピース",       price: 5980, category: "ワンピース", description: "春らしい花柄が華やかなAラインワンピース。柔らかいシフォン素材で、デートや女子会にぴったり。",          sizes: ["S","M","L"],       colors: ["ブルー×ホワイト","ピンク×ホワイト"],       image: "/images/item-08.png", images: ["/images/item-08.png"], stock: true,  isNew: true  },
    { id: "9",  name: "オーバーサイズTシャツ",     price: 2480, category: "トップス",   description: "ゆったりとしたシルエットのオーバーサイズT。スキニーパンツやタイトスカートと相性抜群です。",            sizes: ["FREE"],            colors: ["ホワイト","ブラック","グレー","カーキ"],   image: "/images/item-09.png", images: ["/images/item-09.png"], stock: true,  isNew: false },
    { id: "10", name: "ミモレ丈スカート",           price: 4280, category: "スカート",   description: "女性らしいミモレ丈のタイトスカート。高めのウエストラインで脚長効果も期待できます。",                    sizes: ["S","M","L"],       colors: ["ブラック","ベージュ","チェック"],           image: "/images/item-10.png", images: ["/images/item-10.png"], stock: true,  isNew: false },
    { id: "11", name: "クルーネックニット",         price: 3980, category: "トップス",   description: "シンプルなクルーネックニット。素材にこだわったやわらかい肌触りで長く愛用できます。",                    sizes: ["S","M","L","XL"], colors: ["アイボリー","ベージュ","グリーン","ブラック"], image: "/images/item-11.png", images: ["/images/item-11.png"], stock: true, isNew: false },
    { id: "12", name: "ラップスカート",             price: 3780, category: "スカート",   description: "巻きスカート風のデザインが女性らしいラップスカート。ウエストのリボンがアクセントに。",                  sizes: ["FREE"],            colors: ["テラコッタ","グリーン","ネイビー"],         image: "/images/item-12.png", images: ["/images/item-12.png"], stock: true,  isNew: true  },
    { id: "13", name: "ノーカラージャケット",       price: 7980, category: "アウター",   description: "上品なノーカラーデザインのジャケット。セットアップとしても、単品使いにも対応します。",                  sizes: ["S","M","L"],       colors: ["ベージュ","ブラック","グレー"],             image: "/images/item-13.png", images: ["/images/item-13.png"], stock: true,  isNew: false },
    { id: "14", name: "ガウチョパンツ",             price: 4480, category: "パンツ",     description: "ゆったりとしたシルエットのガウチョパンツ。動きやすく、リラックス感のあるスタイリングに。",              sizes: ["S","M","L"],       colors: ["ブラック","ベージュ","オリーブ"],           image: "/images/item-14.png", images: ["/images/item-14.png"], stock: true,  isNew: false },
    { id: "15", name: "シャツワンピース",           price: 5480, category: "ワンピース", description: "清潔感のあるシャツ素材のワンピース。ベルトでウエストマークすれば、よりスタイリッシュに。",              sizes: ["S","M","L","XL"], colors: ["ホワイト","ライトブルー","チェック"],       image: "/images/item-15.png", images: ["/images/item-15.png"], stock: true,  isNew: false },
    { id: "16", name: "タートルネックニット",       price: 4280, category: "トップス",   description: "首元をしっかり温めるタートルネックニット。シンプルながら存在感のある冬の定番アイテム。",                sizes: ["S","M","L"],       colors: ["アイボリー","グレー","ブラック","ワイン"],  image: "/images/item-16.png", images: ["/images/item-16.png"], stock: true,  isNew: false },
    { id: "17", name: "バルーンスカート",           price: 4780, category: "スカート",   description: "ふんわりとしたバルーンシルエットがかわいいスカート。トレンド感のあるスタイリングが楽しめます。",        sizes: ["FREE"],            colors: ["ブラック","ベージュ","テラコッタ"],         image: "/images/item-17.png", images: ["/images/item-17.png"], stock: true,  isNew: true  },
    { id: "18", name: "Vネックブラウス",            price: 3280, category: "トップス",   description: "さりげないVネックが女性らしいブラウス。デイリーからオフィスまで、幅広いシーンで活躍します。",           sizes: ["S","M","L"],       colors: ["ホワイト","ブラック","ピンク","グリーン"],  image: "/images/item-18.png", images: ["/images/item-18.png"], stock: true,  isNew: false },
    { id: "19", name: "チェスターコート",           price: 12800,category: "アウター",   description: "上品なチェスターフィールドコート。きれいめコーデに欠かせない大人の定番アウターです。",                  sizes: ["S","M","L"],       colors: ["キャメル","ブラック","グレー"],             image: "/images/item-19.png", images: ["/images/item-19.png"], stock: true,  isNew: false },
    { id: "20", name: "ハイウエストジーンズ",       price: 5980, category: "パンツ",     description: "スタイルアップ効果抜群のハイウエストデニム。スリムなシルエットで脚長効果も期待できます。",                sizes: ["S","M","L","XL"], colors: ["インディゴ","ライトブルー","ホワイト"],     image: "/images/item-20.png", images: ["/images/item-20.png"], stock: true,  isNew: true  },
    { id: "21", name: "ドルマンニット",             price: 3780, category: "トップス",   description: "ゆったりとしたドルマンスリーブが特徴のニット。着こなしやすく、体型をカバーしてくれます。",             sizes: ["FREE"],            colors: ["グレー","ベージュ","モカ"],                 image: "/images/item-21.png", images: ["/images/item-21.png"], stock: true,  isNew: false },
    { id: "22", name: "タイトスカート",             price: 3980, category: "スカート",   description: "すっきりとしたシルエットのタイトスカート。オフィスコーデの定番として長く愛用できます。",                  sizes: ["S","M","L"],       colors: ["ブラック","グレー","ネイビー"],             image: "/images/item-22.png", images: ["/images/item-22.png"], stock: true,  isNew: false },
    { id: "23", name: "ストライプシャツ",           price: 3480, category: "トップス",   description: "清潔感のあるストライプ柄シャツ。タックインスタイルでよりシャープな印象に仕上がります。",                  sizes: ["S","M","L","XL"], colors: ["ホワイト×ブルー","ホワイト×グリーン"],     image: "/images/item-23.png", images: ["/images/item-23.png"], stock: true,  isNew: false },
    { id: "24", name: "マキシワンピース",           price: 6480, category: "ワンピース", description: "足首まで届くマキシ丈ワンピース。動くたびに揺れるシルエットが女性らしさを演出します。",                  sizes: ["S","M","L"],       colors: ["ネイビー","ブラック","カーキ"],             image: "/images/item-24.png", images: ["/images/item-24.png"], stock: true,  isNew: false },
    { id: "25", name: "ボアフリースジャケット",     price: 6980, category: "アウター",   description: "もこもこのボア素材が暖かいジャケット。カジュアルコーデにほっこり感をプラスします。",                    sizes: ["S","M","L"],       colors: ["オフホワイト","グレー","ブラック"],         image: "/images/item-25.png", images: ["/images/item-25.png"], stock: true,  isNew: true  },
    { id: "26", name: "カシュクールトップス",       price: 3780, category: "トップス",   description: "胸元のカシュクールデザインが女性らしいトップス。シンプルなボトムスと合わせるだけで旬のスタイルに。",  sizes: ["S","M","L"],       colors: ["ホワイト","ブラック","テラコッタ"],         image: "/images/item-26.png", images: ["/images/item-26.png"], stock: true,  isNew: false },
    { id: "27", name: "ベイカーパンツ",             price: 4980, category: "パンツ",     description: "ゆったりとしたシルエットのベイカーパンツ。ポケットが多くて実用的、カジュアルコーデに最適。",             sizes: ["S","M","L","XL"], colors: ["カーキ","ベージュ","ブラック"],             image: "/images/item-27.png", images: ["/images/item-27.png"], stock: true,  isNew: false },
    { id: "28", name: "ニットベスト",               price: 3480, category: "トップス",   description: "今季トレンドのニットベスト。シャツやブラウスの上に重ねて旬のレイヤードスタイルを楽しんで。",             sizes: ["FREE"],            colors: ["アイボリー","グリーン","ブラウン"],         image: "/images/item-28.png", images: ["/images/item-28.png"], stock: true,  isNew: true  },
    { id: "29", name: "アシメントリースカート",     price: 4480, category: "スカート",   description: "裾のアシメントリーデザインがおしゃれなスカート。個性的なシルエットでコーデのアクセントに。",             sizes: ["FREE"],            colors: ["ブラック","グリーン","テラコッタ"],         image: "/images/item-29.png", images: ["/images/item-29.png"], stock: true,  isNew: false },
    { id: "30", name: "デニムシャツジャケット",     price: 7480, category: "アウター",   description: "シャツ感覚で羽織れるデニムジャケット。ワンピースやスカートに合わせてカジュアルダウンに。",                sizes: ["S","M","L","XL"], colors: ["インディゴ","ライトブルー","ブラック"],     image: "/images/item-30.png", images: ["/images/item-30.png"], stock: true,  isNew: false },
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
