import { Link } from "react-router-dom";
import "./apps.css";

const apps = [
  {
    slug: "kanlog",
    name: "巻ログ",
    type: "るのと始める漫画管理アプリ",
    note: "紙漫画の管理・巻数チェック・ダブり防止。漫画コレクションを楽しく整理。",
    status: "AVAILABLE DETAIL",
  },
  {
    slug: "",
    name: "開発中",
    type: "研究中のプロトタイプ",
    note: "次のアイデアを育てながら、Puku Lab の新しいアプリとして準備中です。",
    status: "COMING SOON",
  },
  {
    slug: "",
    name: "開発中",
    type: "構想中のアプリ",
    note: "日常のちょっとした困りごとを、遊び心のあるかたちで解決する案を検討しています。",
    status: "COMING SOON",
  },
  {
    slug: "",
    name: "開発中",
    type: "次回プロトタイプ候補",
    note: "アンケートや反応も見ながら、次に育てるテーマを研究しています。",
    status: "COMING SOON",
  },
];

export default function Apps() {
  return (
    <main className="siteFrame innerPageFrame">
      <section className="chalkboard pageBoard appsBoard">
        <header className="pageHead appsHead">
          <p className="smallTag">APP SHOWCASE</p>
          <h2>開発中のアプリ</h2>
          <p>フラスコから生まれたプロトタイプを紹介。</p>
        </header>

        <div className="appsList">
          {apps.map((app, index) => {
            const isLinked = Boolean(app.slug);
            const key = app.slug || `coming-soon-${index}`;

            if (isLinked) {
              return (
                <Link
                  key={key}
                  to={`/apps/${app.slug}`}
                  className="appEntry appEntryLink"
                >
                  <div className="appEntryMain">
                    <p className="appEntryStatus">{app.status}</p>
                    <h3>{app.name}</h3>
                    <p className="meta">{app.type}</p>
                    <p className="appEntryNote">{app.note}</p>
                  </div>

                  <div className="appEntryActions">
                    <span className="navButton small">詳細を見る</span>
                  </div>
                </Link>
              );
            }

            return (
              <article key={key} className="appEntry">
                <div className="appEntryMain">
                  <p className="appEntryStatus">{app.status}</p>
                  <h3>{app.name}</h3>
                  <p className="meta">{app.type}</p>
                  <p className="appEntryNote">{app.note}</p>
                </div>

                <div className="appEntryActions">
                  <span className="comingBadge">準備中</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pageActions appsFooterActions">
          <Link className="navButton" to="/contact">
            このアプリについて問い合わせる
          </Link>
          <Link className="navButton ghost" to="/">
            ホームへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}