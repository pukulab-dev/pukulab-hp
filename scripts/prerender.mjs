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
  const regex = new RegExp(
    `<meta\\s+name=["']${name}["'][^>]*>`,
    "i"
  );

  const tag = `<meta name="${name}" content="${escapedContent}" />`;

  if (regex.test(html)) {
    return html.replace(regex, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setMetaProperty(html, property, content) {
  const escapedContent = escapeHtml(content);
  const regex = new RegExp(
    `<meta\\s+property=["']${property}["'][^>]*>`,
    "i"
  );

  const tag = `<meta property="${property}" content="${escapedContent}" />`;

  if (regex.test(html)) {
    return html.replace(regex, tag);
  }

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