import { Link } from "react-router-dom";
import "./Gallery.css";

const galleryCards = [
  {
    title: "イラスト展示室",
    tag: "ILLUSTRATIONS",
    text: "水彩・アニメ調・キャラクター絵など、Puku Labの世界観から生まれたイラストを展示していきます。",
    to: "/gallery/illustrations",
  },
  {
    title: "写真風展示室",
    tag: "PHOTO STYLE",
    text: "スマホで撮ったような一瞬や、実在しそうな空気感を意識した写真風ビジュアルを展示していきます。",
    to: "/gallery/photo-style",
  },
  {
    title: "その他の記録",
    tag: "OTHERS",
    text: "実験画像、ロゴ案、UI風画像など、分類しきれないPuku Labのビジュアル記録を残していきます。",
    to: "/gallery/others",
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
            <Link className="galleryCard galleryCardLink" to={card.to} key={card.title}>
              <p className="galleryCardTag">{card.tag}</p>
              <div className="galleryPlaceholder" aria-hidden="true">
                <span className="galleryPlaceholderFrame" />
                <span className="galleryPlaceholderMoon" />
                <span className="galleryPlaceholderLine lineA" />
                <span className="galleryPlaceholderLine lineB" />
              </div>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </Link>
          ))}
        </div>

        <div className="gallerySecretHint">
          <p>
            pixivにも通常の展示室にも出さない画像は、研究所のどこかにある部屋にだけ展示しています。
            HP内を探してみてください。
          </p>
        </div>

        <div className="galleryActions">
          <Link to="/" className="galleryButton">
            ホームへ戻る
          </Link>
          <Link to="/apps" className="galleryButton">
            アプリを見る
          </Link>
        </div>
      </section>
    </main>
  );
}