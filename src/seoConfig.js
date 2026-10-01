export const SITE_URL = "https://www.pukulab.com";
export const SITE_NAME = "Puku Lab";
export const GA_MEASUREMENT_ID = "G-6WET7857MJ";
export const DEFAULT_OGP_IMAGE = "/ogp/pukulab-ogp.png";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.pukulab.makilog";

const DEFAULT_IMAGE_ALT = "Puku Lab";
const LASTMOD = "2026-09-30";

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Puku Lab",
  url: SITE_URL,
  description:
    "Puku Labは、アプリ・AIビジュアル・HP制作・LP制作をつなぎながら育てている個人開発の研究所です。",
  sameAs: [
    "https://x.com/pukurin5573607",
    "https://note.com/rich_bison8482",
    "https://www.pixiv.net/users/126319212",
  ],
};

const pages = {
  "/": {
    title: "Puku Lab | ワクワクとドキドキが増えていく研究所",
    description:
      "Puku Labは、黒板の中の2D研究室でアプリ・AI画像・遊びの実験を育てている個人開発の研究所です。ワクワクとドキドキが少しずつ増えていくものを作っています。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: "黒板の中の2D研究室を表現したPuku LabのOGP画像",
    robots: "index, follow",
    sitemap: { changefreq: "weekly", priority: "1.0", lastmod: LASTMOD },
    structuredData: [
      organizationData,
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Puku Lab",
        url: SITE_URL,
        description:
          "アプリ、AI画像、HP制作、LP制作、遊びの実験を育てる個人開発の研究所です。",
        publisher: {
          "@type": "Organization",
          name: "Puku Lab",
          url: SITE_URL,
        },
      },
    ],
  },

  "/apps": {
    title: "アプリ紹介 | Puku Lab",
    description:
      "Puku Labで開発しているアプリを紹介しています。巻ログを中心に、これから育っていくプロジェクトもまとめています。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    robots: "index, follow",
    sitemap: { changefreq: "weekly", priority: "0.9", lastmod: LASTMOD },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Puku Lab アプリ紹介",
      url: `${SITE_URL}/apps`,
      description:
        "Puku Labで開発しているアプリやプロトタイプを紹介するページです。",
      publisher: {
        "@type": "Organization",
        name: "Puku Lab",
        url: SITE_URL,
      },
    },
  },

  "/apps/kanlog": {
    title: "巻ログ | 漫画・ラノベのコレクション管理アプリ",
    description:
      "巻ログは、持っている漫画やラノベを登録して、自分だけのコレクションと本棚を育てていく漫画・ラノベ管理アプリです。所持巻確認、抜け巻チェック、ダブり買い防止にも役立ちます。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: "漫画・ラノベ管理アプリ巻ログの紹介",
    robots: "index, follow",
    sitemap: { changefreq: "weekly", priority: "0.9", lastmod: LASTMOD },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "巻ログ",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android",
      url: `${SITE_URL}/apps/kanlog`,
      downloadUrl: PLAY_STORE_URL,
      description:
        "巻ログは、持っている漫画やラノベを登録して、自分だけのコレクションと本棚を育てていく漫画・ラノベ管理アプリです。",
      publisher: {
        "@type": "Organization",
        name: "Puku Lab",
        url: SITE_URL,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
      },
    },
  },

  "/gallery": {
    title: "AIビジュアル実験室 | Puku Lab",
    description:
      "AIを使って作ったイラストや写真風ビジュアルを、実験結果として展示しているPuku LabのAIビジュアル実験室です。",
    image: "/gallery/photo-style/photo-001.png",
    imageAlt: "Puku LabのAIビジュアル実験室",
    robots: "index, follow",
    sitemap: { changefreq: "weekly", priority: "0.8", lastmod: LASTMOD },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "AIビジュアル実験室",
      url: `${SITE_URL}/gallery`,
      description:
        "AIを使って作ったイラストや写真風ビジュアルを展示するPuku Labのギャラリーページです。",
      publisher: {
        "@type": "Organization",
        name: "Puku Lab",
        url: SITE_URL,
      },
    },
  },

  "/gallery/illustrations": {
    title: "イラスト実験室 | Puku Lab",
    description:
      "Puku Labのイラスト実験室です。水彩・アニメ調・キャラクター絵など、AIで試したビジュアル表現を展示していきます。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    robots: "noindex, follow",
  },

  "/gallery/photo-style": {
    title: "写真風実験室 | Puku Lab",
    description:
      "Puku Labの写真風実験室です。リアル寄りの空気感や、写真風AIビジュアルの実験結果を保管しています。",
    image: "/gallery/photo-style/photo-001.png",
    imageAlt: "Puku Labの写真風AIビジュアル実験",
    robots: "index, follow",
    sitemap: { changefreq: "weekly", priority: "0.7", lastmod: LASTMOD },
  },

  "/gallery/others": {
    title: "没案・試作ログ | Puku Lab",
    description:
      "Puku Labの没案・試作ログです。ロゴ案、UI風画像、試作ビジュアルなど、分類しきれない実験画像を保管しています。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    robots: "noindex, follow",
  },

  "/works": {
    title: "サービス・制作支援 | Puku Lab WORKS",
    description:
      "Puku Labが提供するサービス・制作支援の一覧ページです。HP・LP制作と、地方議員向けSNS運用・情報発信支援サービス『縁紡』を紹介しています。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    robots: "index, follow",
    sitemap: { changefreq: "weekly", priority: "0.8", lastmod: LASTMOD },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Puku Lab WORKS",
      url: `${SITE_URL}/works`,
      description:
        "Puku Labが提供するHP・LP制作と、地方議員向け情報発信支援サービス『縁紡』を紹介するサービス一覧ページです。",
      publisher: {
        "@type": "Organization",
        name: "Puku Lab",
        url: SITE_URL,
      },
    },
  },

  "/works/web": {
    title: "HP制作・LP制作・個人向けホームページ制作 | Puku Lab制作相談室",
    description:
      "個人開発者・創作者・小さなお店向けに、ホームページ制作、LP制作、アプリ紹介ページ、ポートフォリオ制作、SNS導線整理をサポートします。全国オンライン対応。料金目安と制作実績も掲載しています。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    robots: "index, follow",
    sitemap: { changefreq: "monthly", priority: "0.8", lastmod: LASTMOD },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "個人向けホームページ制作・LP制作",
        serviceType: [
          "ホームページ制作",
          "LP制作",
          "個人向けホームページ制作",
          "小規模ホームページ制作",
          "アプリ紹介ページ制作",
          "ポートフォリオ制作",
          "SNS導線整理",
          "運営導線サポート",
        ],
        url: `${SITE_URL}/works/web`,
        areaServed: {
          "@type": "Country",
          name: "日本",
        },
        description:
          "Puku Labは、個人開発者・創作者・小さなお店向けに、ホームページ制作、LP制作、アプリ紹介ページ制作、SNS導線整理をサポートします。",
        provider: {
          "@type": "Organization",
          name: "Puku Lab",
          url: SITE_URL,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "個人でもホームページ制作を相談できますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "はい。個人開発者、創作者、個人活動、小さなお店など、大きな制作会社に頼むほどではない規模のホームページ制作やLP制作を想定しています。",
            },
          },
          {
            "@type": "Question",
            name: "アプリ紹介ページやサービス紹介LPも作れますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "対応できます。アプリの特徴、画面説明、料金、Google Playや問い合わせへの導線を整理し、1ページで伝わる紹介LPとして制作します。",
            },
          },
          {
            "@type": "Question",
            name: "文章や構成がまだ決まっていなくても相談できますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "大丈夫です。作りたいものがふわっとしている段階でも、誰に何を届けたいか、どのページが必要か、どんな導線にするかを一緒に整理します。",
            },
          },
          {
            "@type": "Question",
            name: "遠方からでも依頼できますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "はい。ホームページ制作やLP制作はオンラインで全国から相談できます。やり取りしながら、必要な情報やページ構成を一緒に整理します。",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Puku Lab", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "WORKS", item: `${SITE_URL}/works` },
          {
            "@type": "ListItem",
            position: 3,
            name: "HP・LP制作",
            item: `${SITE_URL}/works/web`,
          },
        ],
      },
    ],
  },

  "/entsumugi": {
    title: "縁紡 | 地方議員向けSNS運用・情報発信支援サービス | Puku Lab",
    description:
      "縁紡（えんつむぎ）は、地方議員向けのSNS運用・情報発信支援サービスです。日々の活動、予定、写真、原稿を整理し、継続的な情報発信につなげる仕組みと運用を支援します。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: "地方議員向け情報発信支援サービス縁紡",
    robots: "index, follow",
    sitemap: { changefreq: "weekly", priority: "0.9", lastmod: LASTMOD },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "縁紡",
        alternateName: "えんつむぎ",
        serviceType: [
          "地方議員向けSNS運用支援",
          "地方議員向け情報発信支援",
          "AI秘書",
          "SNS原稿作成支援",
          "議員活動の情報整理",
        ],
        url: `${SITE_URL}/entsumugi`,
        areaServed: { "@type": "Country", name: "日本" },
        audience: { "@type": "Audience", audienceType: "地方議員" },
        description:
          "地方議員の日々の活動・予定・写真・原稿を整理し、専用アプリとAI秘書、運用支援を通じて継続的な情報発信につなげるサービスです。",
        provider: { "@type": "Organization", name: "Puku Lab", url: SITE_URL },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Puku Lab", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "WORKS", item: `${SITE_URL}/works` },
          { "@type": "ListItem", position: 3, name: "縁紡", item: `${SITE_URL}/entsumugi` },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "遠方でも縁紡を利用できますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "はい。縁紡はPC・スマートフォンを使い、オンライン中心で情報共有と運用支援を進められるように設計しています。",
            },
          },
          {
            "@type": "Question",
            name: "SNS投稿前に内容を確認できますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "できます。原稿確認画面から内容を確認し、承認または修正依頼を出せます。",
            },
          },
          {
            "@type": "Question",
            name: "すでにSNSアカウントがあっても利用できますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "はい。既存アカウントを確認して運用を始める形にも対応しています。新規立ち上げが必要な媒体だけ追加することもできます。",
            },
          },
          {
            "@type": "Question",
            name: "縁紡ではどのSNSや媒体を扱えますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "X、Facebook、Instagram、YouTube Shorts、公式LINE、HP活動報告などを想定しています。実際の運用媒体は現在の発信状況を見ながら決めます。",
            },
          },
        ],
      },
    ],
  },

  "/entsumugi/startup": {
    title: "地方選候補者向け情報発信スタートアップ | 縁紡 | Puku Lab",
    description:
      "統一地方選に向けて、SNS・LINE公式・HPなど候補者の情報発信環境をまとめて整える縁紡のスタートアップ支援ページです。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: "縁紡の地方選候補者向け情報発信スタートアップ支援",
    robots: "index, follow",
    sitemap: { changefreq: "weekly", priority: "0.8", lastmod: LASTMOD },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "縁紡 候補者向け情報発信スタートアップ",
        serviceType: "地方選候補者向け情報発信環境の立ち上げ支援",
        url: `${SITE_URL}/entsumugi/startup`,
        areaServed: { "@type": "Country", name: "日本" },
        provider: { "@type": "Organization", name: "Puku Lab", url: SITE_URL },
        description:
          "SNS新規立ち上げ、LINE公式初期設定、候補者向け簡易HP制作、継続的な情報発信支援を組み合わせるスタートアップ支援です。",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Puku Lab", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "縁紡", item: `${SITE_URL}/entsumugi` },
          {
            "@type": "ListItem",
            position: 3,
            name: "候補者向けスタートアップ",
            item: `${SITE_URL}/entsumugi/startup`,
          },
        ],
      },
    ],
  },

  "/entsumugi/diagnosis": {
    title: "縁紡 30秒コース診断 | 地方議員向け情報発信支援",
    description:
      "3つの質問から、縁紡のアプリ利用・AI秘書・基本運用・広報運用・外部広報室の中で、現在の希望に近いコースを簡易診断します。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: "縁紡30秒コース診断",
    robots: "noindex, follow",
  },

  "/entsumugi/estimate": {
    title: "縁紡 料金シミュレーター | 地方議員向け情報発信支援",
    description:
      "縁紡の月額コース、SNS初期設定、原稿、動画、WEB制作などを選び、概算料金を確認できる料金シミュレーターです。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: "縁紡料金シミュレーター",
    robots: "noindex, follow",
  },

  "/questionnaire": {
    title: "アンケート | Puku Lab",
    description:
      "Puku Labのアプリや今後の開発の参考にするためのアンケートページです。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    robots: "index, follow",
    sitemap: { changefreq: "monthly", priority: "0.5", lastmod: LASTMOD },
  },

  "/contact": {
    title: "お問い合わせ | Puku Lab",
    description:
      "Puku Labへのお問い合わせページです。感想やご相談、HP制作・アプリ制作まわりの連絡はこちらからどうぞ。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    robots: "index, follow",
    sitemap: { changefreq: "monthly", priority: "0.5", lastmod: LASTMOD },
  },

  "/experiments": {
    title: "実験室 | Puku Lab",
    description:
      "Puku Labの実験室ページです。遊び心のある試作やコンテンツを少しずつ育てています。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    robots: "noindex, follow",
  },

  "/about": {
    title: "ぷくりん｜元議員秘書からAI個人開発へ｜Puku Lab",
    description:
      "Puku Lab運営者・ぷくりんのプロフィール。元議員秘書を経てAIを活用した個人開発を始め、漫画・ラノベ管理アプリ『巻ログ』をGoogle Playで公開。HP・LP制作、文章、AIビジュアルにも取り組んでいます。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: "Puku Lab運営者ぷくりんのプロフィール",
    robots: "index, follow",
    sitemap: { changefreq: "monthly", priority: "0.6", lastmod: LASTMOD },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/about#profilepage`,
        name: "Puku Lab運営者・ぷくりんのプロフィール",
        url: `${SITE_URL}/about`,
        description:
          "元議員秘書を経てAIを活用した個人開発を始めた、Puku Lab運営者・ぷくりんのプロフィールページです。",
        dateModified: "2026-07-24",
        mainEntity: {
          "@type": "Person",
          "@id": `${SITE_URL}/about#pukurin`,
          name: "ぷくりん",
          alternateName: "pukurin",
          url: `${SITE_URL}/about`,
          image: `${SITE_URL}/icon.png`,
          description:
            "元議員秘書として3年間勤務した後、AIを活用した個人開発を開始。漫画・ラノベ管理アプリ『巻ログ』、Puku Lab公式サイト、HP・LP、AIビジュアルを制作しています。",
          sameAs: [
            "https://x.com/pukurin5573607",
            "https://note.com/rich_bison8482",
            "https://www.pixiv.net/users/126319212",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Puku Lab",
            url: SITE_URL,
          },
          knowsAbout: [
            "AIを活用した個人開発",
            "Androidアプリ開発",
            "漫画・ラノベ管理アプリ",
            "ホームページ制作",
            "LP制作",
            "Web導線設計",
            "文章構成",
            "AIビジュアル制作",
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Puku Lab", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "ぷくりんについて",
            item: `${SITE_URL}/about`,
          },
        ],
      },
    ],
  },

  "/secret": {
    title: "ひみつの休憩室 | Puku Lab",
    description:
      "Puku Labのすみっこにある、見つけた人だけのひみつの休憩室です。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    robots: "noindex, nofollow",
  },

  "/game/debugger": {
    title: "DEBUGGER（デバッガー）| コードのバグ探しゲーム | Puku Lab",
    description: "コードの間違いを見つけるタイムアタック。初級・中級・上級の全10ステージにPC・スマホで挑戦できます。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    robots: "index, follow",
    sitemap: { changefreq: "monthly", priority: "0.6", lastmod: LASTMOD },
  },

  "/game": {
    title: "ゲーム実験室 | Puku Lab",
    description:
      "Puku Labのゲーム実験室です。ミニゲームや遊びの入口を準備しています。",
    image: DEFAULT_OGP_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    robots: "noindex, follow",
  },
};

export const NOT_FOUND_META = {
  title: "ページが見つかりません | Puku Lab",
  description:
    "指定されたページは見つかりませんでした。Puku Labのホーム、アプリ紹介、制作相談室、ギャラリーから目的のページを探してみてください。",
  image: DEFAULT_OGP_IMAGE,
  imageAlt: DEFAULT_IMAGE_ALT,
  robots: "noindex, follow",
};

export function normalizePathname(pathname = "/") {
  const path = pathname.split("?")[0].split("#")[0] || "/";

  if (path === "/") return "/";

  const normalized = path.replace(/\/+$/, "");
  return normalized || "/";
}

export function getPageMeta(pathname) {
  const normalizedPath = normalizePathname(pathname);
  return pages[normalizedPath] || NOT_FOUND_META;
}

export function getCanonicalUrl(pathname) {
  const normalizedPath = normalizePathname(pathname);
  return normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
}

export function getAbsoluteImageUrl(image) {
  if (!image) return `${SITE_URL}${DEFAULT_OGP_IMAGE}`;
  if (/^https?:\/\//i.test(image)) return image;
  return image.startsWith("/") ? `${SITE_URL}${image}` : `${SITE_URL}/${image}`;
}

export function getPrerenderRoutes() {
  return Object.keys(pages);
}

export function getSitemapEntries() {
  return Object.entries(pages)
    .filter(([, meta]) => meta.sitemap && !meta.robots?.startsWith("noindex"))
    .map(([path, meta]) => ({
      path,
      ...meta.sitemap,
    }));
}
