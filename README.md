# Puku Lab HP

Puku Lab公式サイトのフロントエンドです。

## 構成

- React 19
- React Router
- Vite
- Vercel
- ビルド時プリレンダリング（SSG）
- Google Analytics 4
- Google Search Console

## 開発

```bash
npm install
npm run dev
```

## 本番ビルド

```bash
npm run build
```

`npm run build` では次の順に処理します。

1. Viteでクライアント用ビルド
2. SSR用バンドルを `dist-ssr` に生成
3. `scripts/prerender.mjs` で各ルートの静的HTMLを生成
4. sitemap.xmlを生成

## SEO設定

ページごとのSEO情報は `src/seoConfig.js` にまとめています。

新しいページを追加するときは、基本的に次の2か所を更新します。

1. `src/App.jsx` にRouteを追加
2. `src/seoConfig.js` にtitle、description、robotsなどを追加

`src/seoConfig.js` に追加したルートはビルド時に自動でプリレンダリングされます。
`sitemap` 設定があるページだけ sitemap.xml に載ります。

準備中ページや診断ツールなど、検索結果に出したくないページは `robots: "noindex, follow"` にします。

## URLルール

Vercelでは `cleanUrls: true` と `trailingSlash: false` を使っています。

- `/works` を正規URLとして使用
- `/works/` は末尾スラッシュなしへ統一
- プリレンダーは `dist/works.html` のような静的HTMLを生成

## Google Analytics

本番ドメインのみGA4へ送信します。

- `pukulab.com`
- `www.pukulab.com`

React Routerの画面遷移は `src/App.jsx` から手動で `page_view` を送信します。
`index.html` 側は `send_page_view: false` にして二重計測を防止しています。
