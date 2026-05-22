import { Link } from "react-router-dom";
import { galleryCategories, galleryItems } from "../data/galleryItems";
import "./GalleryCategory.css";

export default function GalleryCategory({ category }) {
  const currentCategory = galleryCategories[category];
  const items = galleryItems.filter((item) => item.category === category);

  if (!currentCategory) {
    return (
      <main className="siteFrame">
        <section className="chalkboard galleryCategoryBoard">
          <p className="smallTag">PUKU LAB VISUAL ARCHIVE</p>
          <h1>展示室が見つかりません</h1>
          <p className="galleryCategoryLead">
            指定された展示室はまだ準備されていないようです。
          </p>
          <Link className="galleryBackLink" to="/gallery">
            展示室トップへ戻る
          </Link>
        </section>
      </main>
    );
  }

  const otherCategories = Object.values(galleryCategories).filter(
    (item) => item.id !== currentCategory.id
  );

  return (
    <main className="siteFrame">
      <section className="chalkboard galleryCategoryBoard">
        <div className="galleryCategoryDoodles" aria-hidden="true">
          <span className="galleryCategoryNote noteA">visual log</span>
          <span className="galleryCategoryNote noteB">archive</span>
          <span className="galleryCategoryCircle circleA" />
          <span className="galleryCategoryCircle circleB" />
          <span className="galleryCategoryLine lineA" />
          <span className="galleryCategoryLine lineB" />
        </div>

        <header className="galleryCategoryHero">
          <p className="smallTag">PUKU LAB / {currentCategory.label}</p>
          <h1>{currentCategory.title}</h1>
          <p className="galleryCategoryLead">{currentCategory.lead}</p>

          <div className="galleryCategoryMeta">
            <span>{currentCategory.note}</span>
            <span>{items.length} items</span>
          </div>
        </header>

        {items.length > 0 ? (
          <section className="galleryItemGrid" aria-label="展示画像一覧">
            {items.map((item) => (
              <article className="galleryItemCard" key={item.id}>
                <div className="galleryImageWrap">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
                <div className="galleryItemText">
                  <p className="galleryItemLabel">{currentCategory.label}</p>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="galleryEmptyState" aria-label="展示準備中">
            <p className="galleryEmptyLabel">NOW PREPARING</p>
            <h2>この展示室は準備中です。</h2>
            <p>
              画像を追加すると、このページに展示されます。
              まずはページだけ開通して、Puku Labのビジュアルアーカイブとして育てていきます。
            </p>
            <code>{currentCategory.folder}</code>
          </section>
        )}

        <nav className="galleryCategoryNav" aria-label="展示室カテゴリ">
          <Link className="galleryBackLink" to="/gallery">
            展示室トップへ
          </Link>

          <div className="galleryOtherLinks">
            {otherCategories.map((item) => (
              <Link key={item.id} to={item.path}>
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      </section>
    </main>
  );
}