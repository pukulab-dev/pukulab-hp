import { Link } from "react-router-dom";
import { galleryItems } from "../data/galleryItems";
import "./Gallery.css";

const PIXIV_URL = "https://www.pixiv.net/users/126319212";

const photoStyleCount = galleryItems.filter(
  (item) => item.category === "photo-style"
).length;

const galleryCards = [
  {
    title: "写真風実験室",
    tag: "PHOTO STYLE",
    status: "展示中",
    count: `${photoStyleCount} items`,
    text: "読書時間、静かな部屋、窓辺の光。AIで作った写真風ビジュアル実験を展示しています。",
    to: "/gallery/photo-style",
    iconClass: "photo",
    iconLabel: "PHOTO",
    isOpen: true,
  },
  {
    title: "イラスト実験室",
    tag: "ILLUSTRATIONS",
    status: "追加予定",
    count: "pixiv別案予定",
    text: "水彩・アニメ調・キャラクター絵など、pixiv投稿作品の別案やHP限定イラストを追加予定です。",
    to: "/gallery/illustrations",
    iconClass: "illust",
    iconLabel: "ILLUST",
    isOpen: false,
  },
  {
    title: "没案・試作ログ",
    tag: "ARCHIVE LOG",
    status: "準備中",
    count: "archive plan",
    text: "没にした画像、同じテーマのフォトリアル版、ロゴ案、UI風画像などを保管していく予定です。",
    to: "/gallery/others",
    iconClass: "archive",
    iconLabel: "LOG",
    isOpen: false,
  },
];

export default function Gallery() {
  return (
    <main className="siteFrame">
      <section className="chalkboard galleryBoard">
        <div className="galleryHero">
          <p className="smallTag">AI VISUAL LAB / ARCHIVE</p>
          <h1>AIビジュアル実験室</h1>

          <p className="galleryLead">
            AIを使って作ったイラストや写真風ビジュアルを、
            実験結果として展示している部屋です。
          </p>

          <p className="galleryText">
            pixivでは完成作品を中心に公開し、この展示室では
            pixivに出していない別案、没にした画像、同じテーマのフォトリアル版なども
            少しずつ保管していきます。
          </p>
        </div>

        <div className="galleryNotice">
          <span className="galleryNoticeLabel">HP LIMITED LOG</span>
          <p>
            現在は写真風ビジュアル実験から公開中です。
            AIで試したビジュアルの別案や、pixivでは見せきれない制作ログを
            Puku Lab側にも少しずつ残していきます。
          </p>
        </div>

        <div className="galleryQuickActions" aria-label="ギャラリー主要リンク">
          <Link to="/gallery/photo-style" className="galleryButton">
            写真風実験室を見る
          </Link>

          <a
            href={PIXIV_URL}
            className="galleryButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            pixivを見る
          </a>
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
              <div className="galleryCardTop">
                <p className="galleryCardTag">{card.tag}</p>
                <span className="galleryStatusBadge">{card.status}</span>
              </div>

              <div
                className={`galleryIconBox ${card.iconClass}`}
                aria-hidden="true"
              >
                <span className="galleryIconShape" />
                <span className="galleryIconLabel">{card.iconLabel}</span>
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
            pixivに出さなかった別案や、制作途中で眠っていた画像も、
            このHP側では実験ログとして残していきます。
            完成品はpixiv、裏側や別パターンはPuku Lab展示室、という形で行き来できる場所を目指しています。
          </p>
        </div>

        <div className="galleryActions">
          <Link to="/gallery/photo-style" className="galleryButton">
            写真風実験室を見る
          </Link>

          <a
            href={PIXIV_URL}
            className="galleryButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            pixivを見る
          </a>

          <Link to="/apps/kanlog" className="galleryButton">
            巻ログを見る
          </Link>

          <Link to="/" className="galleryButton galleryButtonGhost">
            ホームへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}