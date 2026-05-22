import { Link } from "react-router-dom";
import "./Gallery.css";

const galleryCards = [
  {
    title: "読書少女シリーズ",
    tag: "READING GIRL",
    text: "紙の本、古書店、図書館、静かな読書時間をテーマにしたイラストを展示していく予定です。",
  },
  {
    title: "巻ログ世界観",
    tag: "KANLOG WORLD",
    text: "漫画、本棚、コレクション管理アプリ「巻ログ」につながるビジュアルを保管していきます。",
  },
  {
    title: "研究所の記録",
    tag: "LAB ARCHIVE",
    text: "Puku Labの実験、開発、隠し部屋につながるイメージを少しずつ残していきます。",
  },
];

export default function Gallery() {
  return (
    <main className="siteFrame">
      <section className="chalkboard galleryBoard">
        <div className="galleryHero">
          <p className="smallTag">GALLERY / ARCHIVE</p>
          <h1>Puku Lab 展示室</h1>
          <p className="galleryLead">
            Puku Labの世界観や、読書・本棚・アプリづくりから生まれた
            イメージを保管していく展示室です。
          </p>
          <p className="galleryText">
            pixivで公開している作品や、HPだけに残していく記録も、
            ここに少しずつ増やしていきます。
          </p>
        </div>

        <div className="galleryNotice">
          <span className="galleryNoticeLabel">COMING SOON</span>
          <p>
            現在、展示準備中です。まずは仮展示として、今後増えていく
            作品カテゴリを置いています。
          </p>
        </div>

        <div className="galleryCardGrid">
          {galleryCards.map((card) => (
            <article className="galleryCard" key={card.title}>
              <p className="galleryCardTag">{card.tag}</p>
              <div className="galleryPlaceholder" aria-hidden="true">
                <span className="galleryPlaceholderFrame" />
                <span className="galleryPlaceholderMoon" />
                <span className="galleryPlaceholderLine lineA" />
                <span className="galleryPlaceholderLine lineB" />
              </div>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className="gallerySecretHint">
          <p>
            一部の記録は、研究所のどこかにだけ残されるかもしれません。
          </p>
        </div>

        <div className="galleryActions">
          <Link to="/" className="galleryButton">
            ホームへ戻る
          </Link>
          <Link to="/apps" className="galleryButton">
            アプリを見る
          </Link>
          <Link to="/secret" className="galleryButton galleryButtonGhost">
            ひみつを探す
          </Link>
        </div>
      </section>
    </main>
  );
}