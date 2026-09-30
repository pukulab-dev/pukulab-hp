import { Link } from "react-router-dom";
import "./apps.css";

const apps = [
  {
    slug: "kanlog",
    label: "COLLECTION APP",
    name: "巻ログ",
    text: "紙の漫画・ラノベを登録して、所持巻・抜け巻・ダブり買いを防ぎながら、自分だけの本棚を育てていくコレクション管理アプリです。",
    status: "AVAILABLE",
    action: "巻ログを見る",
    accent: "mint",
    icon: "books",
    available: true,
  },
  {
    slug: "",
    label: "NEXT APP",
    name: "研究中",
    text: "Puku Labで次に育てるアプリを研究中です。日常のちょっとした困りごとを、遊び心のある形で解決できるものを探しています。",
    status: "IN LAB",
    action: "研究中",
    accent: "amber",
    icon: "flask",
    available: false,
  },
  {
    slug: "",
    label: "PROTOTYPE",
    name: "試作準備中",
    text: "アイデアを小さく試しながら、使い続けたくなる仕組みや画面を検証していくプロトタイプ枠です。",
    status: "COMING SOON",
    action: "準備中",
    accent: "blue",
    icon: "blocks",
    available: false,
  },
  {
    slug: "",
    label: "FUTURE PROJECT",
    name: "次の実験",
    text: "アンケートや反応、日々の気づきから、次にアプリとして育てるテーマを少しずつ集めています。",
    status: "IDEA STOCK",
    action: "構想中",
    accent: "purple",
    icon: "spark",
    available: false,
  },
];

function AppCardIcon({ type }) {
  if (type === "books") {
    return (
      <span className="appsCardIcon appsCardIcon-books" aria-hidden="true">
        <i className="appsBook bookOne" />
        <i className="appsBook bookTwo" />
        <i className="appsBook bookThree" />
        <i className="appsIconDot dotOne" />
        <i className="appsIconDot dotTwo" />
      </span>
    );
  }

  if (type === "flask") {
    return (
      <span className="appsCardIcon appsCardIcon-flask" aria-hidden="true">
        <i className="appsFlaskNeck" />
        <i className="appsFlaskBody" />
        <i className="appsFlaskLiquid" />
        <i className="appsIconDot dotOne" />
        <i className="appsIconDot dotTwo" />
      </span>
    );
  }

  if (type === "blocks") {
    return (
      <span className="appsCardIcon appsCardIcon-blocks" aria-hidden="true">
        <i className="appsBlock blockOne" />
        <i className="appsBlock blockTwo" />
        <i className="appsBlock blockThree" />
        <i className="appsIconDot dotOne" />
      </span>
    );
  }

  return (
    <span className="appsCardIcon appsCardIcon-spark" aria-hidden="true">
      <i className="appsSparkCore" />
      <i className="appsSparkRay rayOne" />
      <i className="appsSparkRay rayTwo" />
      <i className="appsSparkRay rayThree" />
      <i className="appsSparkRay rayFour" />
      <i className="appsIconDot dotOne" />
      <i className="appsIconDot dotTwo" />
    </span>
  );
}

function AppCard({ app }) {
  const cardClass = `appsCard appsCard-${app.accent} ${
    app.available ? "appsCardLink" : "appsCardDisabled"
  }`;

  const content = (
    <>
      <div className="appsCardTop">
        <p>{app.label}</p>
        <span>{app.status}</span>
      </div>

      <AppCardIcon type={app.icon} />

      <div className="appsCardText">
        <h2>{app.name}</h2>
        <p>{app.text}</p>
        <span className="appsCardAction">
          {app.action}
          {app.available ? " →" : ""}
        </span>
      </div>
    </>
  );

  if (app.available) {
    return (
      <Link className={cardClass} to={`/apps/${app.slug}`}>
        {content}
      </Link>
    );
  }

  return (
    <article className={cardClass} aria-label={`${app.name} ${app.status}`}>
      {content}
    </article>
  );
}

export default function Apps() {
  return (
    <main className="siteFrame innerPageFrame appsIndexPage">
      <section className="chalkboard pageBoard appsIndexBoard">
        <header className="pageHead appsIndexHead">
          <p className="smallTag">APPS / PRODUCT LAB</p>
          <h1>Puku Labのアプリ</h1>
          <p>
            Puku Labから生まれたアプリや、これから育てていく実験を紹介しています。
            <br />
            公開中のアプリから、気になる入口をのぞいてみてください。
          </p>
        </header>

        <section className="appsIndexGrid" aria-label="Puku Labのアプリ一覧">
          {apps.map((app, index) => (
            <AppCard key={app.slug || `${app.label}-${index}`} app={app} />
          ))}
        </section>

        <div className="appsIndexMemo">
          <p>APP LAB MEMO</p>
          <strong>
            公開したものだけでなく、次のアイデアや試作も少しずつ研究所に並べていきます。
          </strong>
        </div>

        <div className="pageActions appsIndexFooterActions">
          <Link className="navButton" to="/contact?type=app">
            アプリについて問い合わせる
          </Link>
          <Link className="navButton ghost" to="/">
            ホームへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
