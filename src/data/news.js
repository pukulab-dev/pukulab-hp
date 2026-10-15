/**
 * Puku Lab 新着情報
 *
 * 必須項目: id（重複なし）, date（YYYY-MM-DD）, category, title, href
 * 公開: published: true。非公開の下書きは false にする。
 * 日付の新しい順に自動整列します。同じ日付は記載順を保ちます。
 *
 * 管理画面化するときは getPublishedNews() の取得元を差し替える想定です。
 * 日時を閲覧時に生成しないことで、SSGとブラウザの表示差を避けます。
 */
export const newsItems = [
  {
    id: "pukulab-news-20261015",
    date: "2026-10-15",
    category: "Puku Lab",
    title: "新着情報ページを公開しました",
    href: "/news",
    published: true,
  },
];

/** 公開記事を新しい順に取得。limit指定なしなら全件を返します。 */
export function getPublishedNews(limit = Infinity) {
  const published = newsItems
    .filter((item) => item.published === true)
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const dateOrder = b.item.date.localeCompare(a.item.date);
      return dateOrder || a.index - b.index;
    })
    .map(({ item }) => item);

  return Number.isFinite(limit) ? published.slice(0, Math.max(0, limit)) : published;
}

export function formatNewsDate(value) {
  const parts = /^\d{4}-(\d{2})-(\d{2})$/.exec(value || "");
  return parts ? `${Number(parts[1])}/${Number(parts[2])}` : value;
}
