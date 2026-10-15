import { Link } from "react-router-dom";
import { formatNewsDate, getPublishedNews } from "../data/news";

function NewsDestination({ href, className, children }) {
  if (/^https:\/\//i.test(href)) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link className={className} to={href}>{children}</Link>;
}

export default function HomeNews() {
  const items = getPublishedNews(3);

  return (
    <section className="homeNews" aria-labelledby="homeNewsHeading">
      <h2 className="homeNewsHeading" id="homeNewsHeading">
        <Link to="/news" aria-label="新着情報の一覧を見る" title="新着情報の一覧を見る">
          新着情報
        </Link>
      </h2>

      <div className="homeNewsBody">
        {items.length > 0 ? (
          <ul className="homeNewsList">
            {items.map((item) => (
              <li className="homeNewsItem" key={item.id}>
                <NewsDestination href={item.href} className="homeNewsLink">
                  <span className="homeNewsMeta">
                    <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
                    <span className="homeNewsCategory">{item.category}</span>
                  </span>
                  <span className="homeNewsTitle">{item.title}</span>
                </NewsDestination>
              </li>
            ))}
          </ul>
        ) : (
          <p className="homeNewsEmpty">お知らせはただいま準備中です。</p>
        )}
      </div>
    </section>
  );
}
