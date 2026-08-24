import { Link } from "react-router-dom";
import "./WorksIndex.css";

const workItems = [
  {
    label: "WEB SUPPORT",
    title: "HP・LP制作",
    text: "個人開発者・創作者・小さなお店向けに、ホームページやLP、アプリ紹介ページ、Web導線づくりをお手伝いします。",
    status: "AVAILABLE",
    to: "/works/web",
    button: "制作相談室を見る",
    accent: "mint",
  },
  {
    label: "ENTSUGUMI / SNS SUPPORT",
    title: "縁紡",
    text: "地方議員の日々の活動・予定・原稿・SNS発信を、ひとつの流れで支える情報発信支援サービスです。",
    status: "FIELD TEST",
    to: "/entsumugi",
    button: "縁紡を見る",
    accent: "amber",
  },
];

export default function WorksIndex() {
  return (
    <main className="siteFrame innerPageFrame worksIndexPage">
      <section className="chalkboard pageBoard worksIndexBoard">
        <header className="pageHead worksIndexHead">
          <p className="smallTag">WORKS / SERVICE LAB</p>
          <h1>Puku Labの仕事</h1>
          <p>
            Puku Labから生まれた制作支援やサービスを紹介しています。
            <br />
            気になる入口から、それぞれの詳しいページへ進めます。
          </p>
        </header>

        <section className="worksIndexGrid" aria-label="Puku Labのサービス一覧">
          {workItems.map((item) => (
            <Link
              className={`worksIndexCard worksIndexCard-${item.accent}`}
              to={item.to}
              key={item.title}
            >
              <div className="worksIndexCardTop">
                <p>{item.label}</p>
                <span>{item.status}</span>
              </div>

              <div className="worksIndexIcon" aria-hidden="true">
                <span className="worksIndexIconPaper" />
                <span className="worksIndexIconLine lineOne" />
                <span className="worksIndexIconLine lineTwo" />
                <span className="worksIndexIconDot dotOne" />
                <span className="worksIndexIconDot dotTwo" />
              </div>

              <div className="worksIndexCardText">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <span className="worksIndexAction">{item.button} →</span>
              </div>
            </Link>
          ))}
        </section>

        <div className="worksIndexMemo">
          <p>WORKS MEMO</p>
          <strong>
            制作支援と自社サービスを、それぞれ独立したページで育てていきます。
          </strong>
        </div>

        <div className="pageActions worksIndexFooterActions">
          <Link className="navButton ghost" to="/">
            ホームへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
