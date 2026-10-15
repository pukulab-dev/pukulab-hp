import { Link } from "react-router-dom";
import { getPublishedNews } from "../data/news";
import "./News.css";

function NewsDestination({ href, children }) {
  if (/^https:\/\//i.test(href)) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
  }
  return <Link to={href}>{children}</Link>;
}

export default function News() {
  const items = getPublishedNews();

  return (
    <main className="siteFrame innerPageFrame">
      <section className="chalkboard pageBoard newsBoard">
        <header className="pageHead newsPageHead">
          <p className="smallTag">LABORATORY BULLETIN / PUKU LAB</p>
          <h1>新着情報</h1>
          <p>研究所の連絡帳。アプリ・ゲーム・制作などの更新を記録しています。</p>
        </header>

        {items.length ? (
          <ol className="newsArchiveList">
            {items.map((item) => (
              <li className="newsArchiveItem" key={item.id}>
                <div className="newsArchiveMeta">
                  <time dateTime={item.date}>{item.date.replaceAll("-", ".")}</time>
                  <span>{item.category}</span>
                </div>
                <h2 className="newsArchiveTitle">
                  <NewsDestination href={item.href}>
                    {item.title} <span className="newsArchiveArrow" aria-hidden="true">↗</span>
                  </NewsDestination>
                </h2>
              </li>
            ))}
          </ol>
        ) : (
          <p className="newsArchiveEmpty">お知らせはただいま準備中です。</p>
        )}

        <p className="newsArchiveHome"><Link to="/">← 黒板トップへ戻る</Link></p>
      </section>
    </main>
  );
}
