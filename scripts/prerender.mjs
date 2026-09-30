import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  SITE_URL,
  getAbsoluteImageUrl,
  getCanonicalUrl,
  getPageMeta,
  getPrerenderRoutes,
  getSitemapEntries,
} from "../src/seoConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const distDir = path.join(projectRoot, "dist");
const templatePath = path.join(distDir, "index.html");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function setTitle(html, title) {
  const tag = `<title>${escapeHtml(title)}</title>`;

  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(/<title>[\s\S]*?<\/title>/i, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setMetaName(html, name, content) {
  const regex = new RegExp(`<meta\\s+name=["']${name}["'][^>]*>`, "i");

  if (!content) {
    return html.replace(regex, "");
  }

  const tag = `<meta name="${name}" content="${escapeHtml(content)}" />`;
  if (regex.test(html)) return html.replace(regex, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setMetaProperty(html, property, content) {
  const regex = new RegExp(
    `<meta\\s+property=["']${property}["'][^>]*>`,
    "i"
  );

  if (!content) {
    return html.replace(regex, "");
  }

  const tag = `<meta property="${property}" content="${escapeHtml(content)}" />`;
  if (regex.test(html)) return html.replace(regex, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setCanonical(html, url) {
  const regex = /<link\s+rel=["']canonical["'][^>]*>/i;
  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`;

  if (regex.test(html)) return html.replace(regex, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setJsonLd(html, data) {
  const byIdRegex =
    /<script\s+id=["']pukulab-json-ld["'][^>]*>[\s\S]*?<\/script>/i;
  const firstJsonLdRegex =
    /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/i;

  if (!data) {
    return html.replace(byIdRegex, "").replace(firstJsonLdRegex, "");
  }

  const json = JSON.stringify(data).replaceAll("<", "\\u003c");
  const tag = `<script id="pukulab-json-ld" type="application/ld+json">${json}</script>`;

  if (byIdRegex.test(html)) return html.replace(byIdRegex, tag);
  if (firstJsonLdRegex.test(html)) return html.replace(firstJsonLdRegex, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function injectHead(html, routePath) {
  const meta = getPageMeta(routePath);
  const canonicalUrl = getCanonicalUrl(routePath);
  const imageUrl = getAbsoluteImageUrl(meta.image);

  let nextHtml = html;

  nextHtml = setTitle(nextHtml, meta.title);
  nextHtml = setMetaName(nextHtml, "description", meta.description);
  nextHtml = setMetaName(nextHtml, "robots", meta.robots || "index, follow");
  nextHtml = setCanonical(nextHtml, canonicalUrl);

  nextHtml = setMetaProperty(nextHtml, "og:site_name", "Puku Lab");
  nextHtml = setMetaProperty(nextHtml, "og:locale", "ja_JP");
  nextHtml = setMetaProperty(nextHtml, "og:type", "website");
  nextHtml = setMetaProperty(nextHtml, "og:title", meta.title);
  nextHtml = setMetaProperty(nextHtml, "og:description", meta.description);
  nextHtml = setMetaProperty(nextHtml, "og:url", canonicalUrl);
  nextHtml = setMetaProperty(nextHtml, "og:image", imageUrl);
  nextHtml = setMetaProperty(nextHtml, "og:image:secure_url", imageUrl);
  nextHtml = setMetaProperty(nextHtml, "og:image:alt", meta.imageAlt || "Puku Lab");

  nextHtml = setMetaName(nextHtml, "twitter:card", "summary_large_image");
  nextHtml = setMetaName(nextHtml, "twitter:title", meta.title);
  nextHtml = setMetaName(nextHtml, "twitter:description", meta.description);
  nextHtml = setMetaName(nextHtml, "twitter:image", imageUrl);
  nextHtml = setMetaName(
    nextHtml,
    "twitter:image:alt",
    meta.imageAlt || "Puku Lab"
  );

  nextHtml = setJsonLd(nextHtml, meta.structuredData);

  return nextHtml;
}

function getOutputPath(routePath) {
  if (routePath === "/") {
    return path.join(distDir, "index.html");
  }

  const relativePath = routePath.replace(/^\/+/, "");
  return path.join(distDir, `${relativePath}.html`);
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function createSitemapXml() {
  const urls = getSitemapEntries()
    .map((entry) => {
      const loc = entry.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${entry.path}`;
      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        entry.lastmod ? `    <lastmod>${escapeXml(entry.lastmod)}</lastmod>` : "",
        entry.changefreq
          ? `    <changefreq>${escapeXml(entry.changefreq)}</changefreq>`
          : "",
        entry.priority
          ? `    <priority>${escapeXml(entry.priority)}</priority>`
          : "",
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

async function main() {
  const template = await fs.readFile(templatePath, "utf-8");
  const { render } = await import("../dist-ssr/entry-server.js");

  for (const routePath of getPrerenderRoutes()) {
    const appHtml = render(routePath);
    let html = template.replace(
      /<div id="root">\s*<\/div>/i,
      `<div id="root">${appHtml}</div>`
    );

    html = injectHead(html, routePath);

    const outputPath = getOutputPath(routePath);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, html, "utf-8");
    console.log(`SSG created: ${routePath} -> ${path.relative(distDir, outputPath)}`);
  }

  await fs.writeFile(
    path.join(distDir, "sitemap.xml"),
    createSitemapXml(),
    "utf-8"
  );
  console.log("Sitemap created: /sitemap.xml");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
