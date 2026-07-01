import { Link } from "react-router-dom";
import { galleryItems } from "../data/galleryItems";
import "./Gallery.css";

const photoStyleCount = galleryItems.filter(
  (item) => item.category === "photo-style"
).length;

const galleryCards = [
  {
    title: "写真風展示室",
    tag: "PHOTO STYLE",
    status: "展示中",
    count: `${photoStyleCount} items`,
    text: "本を読む時間、静かな部屋、窓辺の光。実在しそうな空気感を意識した写真風ビジュアルを展示しています。",
    to: "/gallery/photo-style",
    isOpen: true,
  },
  {
    title: "イラスト展示室",
    tag: "ILLUSTRATIONS",
    status: "準備中",
    count: "coming soon",
    text: "読書・本棚・キャラクター絵など、Puku Labの世界観から生まれたイラストを今後追加予定です。",
    to: "/gallery/illustrations",
    isOpen: false,
  },
  {
    title: "その他の記録",
    tag: "OTHERS",
    status: "準備中",
    count: "archive plan",
    text: "ロゴ案、UI風画像、試作ビジュアルなど、分類しきれないPuku Labの制作記録を今後保管していきます。",
    to: "/gallery/others",
    isOpen: false,
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
            Puku Labで生まれたビジュアルを保管する展示室です。
          </p>

          <p className="galleryText">
            まずは、読書時間や静かな部屋の空気感をテーマにした
            写真風展示室から公開しています。
            イラストや試作ビジュアルも、今後少しずつ追加予定です。
          </p>
        </div>

        <div className="galleryNotice">
          <span className="galleryNoticeLabel">NOW OPEN</span>
          <p>
            現在は写真風展示室を中心に展示中です。
            Puku Labの世界観や、読書・本棚・アプリづくりから生まれた画像を、
            カテゴリごとに少しずつ増やしていきます。
          </p>
        </div>

        <div className="galleryCardGrid">
          {galleryCards.map((card) => (
            <Link
              className={`galleryCard galleryCardLink ${
                card.isOpen ? "galleryCardOpen" : "galleryCardPreparing"
              }`}
              to={card.to}
              key={card.title}
            >
              <p className="galleryCardTag">{card.tag}</p>

              <div className="galleryPlaceholder" aria-hidden="true">
                <span className="galleryPlaceholderFrame" />
                <span className="galleryPlaceholderMoon" />
                <span className="galleryPlaceholderLine lineA" />
                <span className="galleryPlaceholderLine lineB" />
              </div>

              <div className="galleryCardMeta">
                <span>{card.status}</span>
                <span>{card.count}</span>
              </div>

              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </Link>
          ))}
        </div>

        <div className="gallerySecretHint">
          <p>
            通常の展示室に出す前の試作画像や、制作途中の記録は、
            研究所のどこかにある部屋にだけ残していく予定です。
            HP内を探してみてください。
          </p>
        </div>

        <div className="galleryActions">
          <Link to="/gallery/photo-style" className="galleryButton">
            写真風展示室を見る
          </Link>
          <Link to="/apps/kanlog" className="galleryButton">
            巻ログを見る
          </Link>
          <Link to="/" className="galleryButton">
            ホームへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}