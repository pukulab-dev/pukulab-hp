import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const distDir = path.join(projectRoot, "dist");
const templatePath = path.join(distDir, "index.html");

const SITE_URL = "https://www.pukulab.com";
const DEFAULT_OGP_IMAGE = `${SITE_URL}/ogp/pukulab-ogp.png`;

const routes = [
  {
    path: "/",
    title: "Puku Lab | ワクワクとドキドキが増えていく研究所",
    description:
      "Puku Labは、黒板の中の2D研究室でアプリ・AI画像・遊びの実験を育てている個人開発の研究所です。ワクワクとドキドキが少しずつ増えていくものを作っています。",
    image: DEFAULT_OGP_IMAGE,
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "Puku Lab",
          url: `${SITE_URL}/`,
          description:
            "Puku Labは、アプリ・AIビジュアル・HP制作・LP制作をつなぎながら育てている個人開発の研究所です。",
          sameAs: [
            "https://x.com/pukurin5573607",
            "https://note.com/rich_bison8482",
            "https://www.pixiv.net/users/126319212",
          ],
        },
        {
          "@type": "WebSite",
          name: "Puku Lab",
          url: `${SITE_URL}/`,
          description:
            "アプリ、AI画像、HP制作、LP制作、遊びの実験を育てる個人開発の研究所です。",
          publisher: {
            "@type": "Organization",
            name: "Puku Lab",
            url: `${SITE_URL}/`,
          },
        },
      ],
    },
  },
  {
    path: "/apps/kanlog",
    title: "巻ログ | 漫画・ラノベのコレクション管理アプリ",
    description:
      "巻ログは、持っている漫画やラノベを登録して、自分だけのコレクションと本棚を育てていく漫画・ラノベ管理アプリです。所持巻確認、抜け巻チェック、ダブり買い防止にも役立ちます。",
    image: DEFAULT_OGP_IMAGE,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "巻ログ",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android",
      url: `${SITE_URL}/apps/kanlog`,
      downloadUrl:
        "https://play.google.com/store/apps/details?id=com.pukulab.makilog",
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
  {
    path: "/works",
    title: "HP制作・LP制作・運営導線サポート | Puku Lab制作相談室",
    description:
      "個人開発者・創作者・小さなお店向けに、HP制作、LP制作、アプリ紹介ページ、SNS・note・pixivの導線整理をサポートします。料金目安と制作実績も掲載しています。",
    image: DEFAULT_OGP_IMAGE,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "HP制作・LP制作・運営導線サポート",
      serviceType: [
        "ホームページ制作",
        "LP制作",
        "アプリ紹介ページ制作",
        "SNS導線整理",
        "運営導線サポート",
      ],
      url: `${SITE_URL}/works`,
      areaServed: "JP",
      description:
        "個人開発者・創作者・小さなお店向けに、HP制作、LP制作、アプリ紹介ページ、SNS・note・pixivの導線整理をサポートします。",
      provider: {
        "@type": "Organization",
        name: "Puku Lab",
        url: SITE_URL,
      },
    },
  },
  {
    path: "/entsumugi",
    title: "縁紡 | 地方議員向けSNS運用・情報発信支援サービス | Puku Lab",
    description:
      "縁紡（えんつむぎ）は、地方議員向けのSNS運用・情報発信支援サービスです。専用アプリとAI秘書で予定・活動・写真・原稿を整理し、継続的な情報発信につなげます。",
    image: DEFAULT_OGP_IMAGE,
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
  {
    path: "/entsumugi/startup",
    title: "地方選候補者向け情報発信スタートアップ | 縁紡 | Puku Lab",
    description:
      "統一地方選に向けて、SNS・LINE公式・HPなど候補者の情報発信環境をまとめて整える縁紡のスタートアップ支援ページです。",
    image: DEFAULT_OGP_IMAGE,
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
          { "@type": "ListItem", position: 3, name: "候補者向けスタートアップ", item: `${SITE_URL}/entsumugi/startup` },
        ],
      },
    ],
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
}

function setMetaName(html, name, content) {
  const escapedContent = escapeHtml(content);
  const regex = new RegExp(`<meta\\s+name=["']${name}["'][^>]*>`, "i");
  const tag = `<meta name="${name}" content="${escapedContent}" />`;
  if (regex.test(html)) return html.replace(regex, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setMetaProperty(html, property, content) {
  const escapedContent = escapeHtml(content);
  const regex = new RegExp(`<meta\\s+property=["']${property}["'][^>]*>`, "i");
  const tag = `<meta property="${property}" content="${escapedContent}" />`;
  if (regex.test(html)) return html.replace(regex, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setCanonical(html, url) {
  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`;
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    return html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, tag);
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setJsonLd(html, data) {
  const json = JSON.stringify(data);
  const tag = `<script type="application/ld+json">${json}</script>`;
  if (/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/i.test(html)) {
    return html.replace(
      /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/i,
      tag
    );
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function injectHead(html, route) {
  const url = `${SITE_URL}${route.path}`;
  let nextHtml = html;

  nextHtml = setTitle(nextHtml, route.title);
  nextHtml = setMetaName(nextHtml, "description", route.description);
  nextHtml = setMetaName(nextHtml, "robots", "index, follow");
  nextHtml = setCanonical(nextHtml, url);
  nextHtml = setMetaProperty(nextHtml, "og:site_name", "Puku Lab");
  nextHtml = setMetaProperty(nextHtml, "og:locale", "ja_JP");
  nextHtml = setMetaProperty(nextHtml, "og:type", "website");
  nextHtml = setMetaProperty(nextHtml, "og:title", route.title);
  nextHtml = setMetaProperty(nextHtml, "og:description", route.description);
  nextHtml = setMetaProperty(nextHtml, "og:url", url);
  nextHtml = setMetaProperty(nextHtml, "og:image", route.image);
  nextHtml = setMetaProperty(nextHtml, "og:image:secure_url", route.image);
  nextHtml = setMetaProperty(nextHtml, "og:image:width", "1200");
  nextHtml = setMetaProperty(nextHtml, "og:image:height", "630");
  nextHtml = setMetaName(nextHtml, "twitter:card", "summary_large_image");
  nextHtml = setMetaName(nextHtml, "twitter:title", route.title);
  nextHtml = setMetaName(nextHtml, "twitter:description", route.description);
  nextHtml = setMetaName(nextHtml, "twitter:image", route.image);
  nextHtml = setJsonLd(nextHtml, route.structuredData);

  return nextHtml;
}

async function main() {
  const template = await fs.readFile(templatePath, "utf-8");
  const { render } = await import("../dist-ssr/entry-server.js");

  for (const route of routes) {
    const appHtml = render(route.path);
    let html = template.replace(
      /<div id="root">\s*<\/div>/i,
      `<div id="root">${appHtml}</div>`
    );

    html = injectHead(html, route);

    const outputDir = path.join(distDir, route.path);
    const outputPath = path.join(outputDir, "index.html");

    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(outputPath, html, "utf-8");
    console.log(`SSG created: ${route.path}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
