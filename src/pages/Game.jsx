import { Link } from "react-router-dom";
import "./Game.css";

const games = [
  {
    slug: "debugger",
    number: "001",
    label: "CODE FINDING",
    title: "DEBUGGER",
    text: "コードの中に潜んでいる間違いを見つける、短時間のバグ探しゲーム。正しそうに見える1行を疑うところから実験開始。",
    status: "PLAY NOW",
    meta: "1〜3 MIN / CODE",
    accent: "mint",
    icon: "debug",
    playable: true,
  },
  {
    slug: "",
    number: "002",
    label: "NEXT EXPERIMENT",
    title: "準備中",
    text: "次に置くミニゲームはまだ未定です。遊びやすくて、ちょっと試したくなる小さな実験を考えています。",
    status: "COMING SOON",
    meta: "GAME IDEA / TBD",
    accent: "amber",
    icon: "pending",
    playable: false,
  },
  {
    slug: "",
    number: "003",
    label: "OPEN SLOT",
    title: "準備中",
    text: "この枠も内容はまだ決めていません。思いついたアイデアを試しながら、形になったものから追加していきます。",
    status: "COMING SOON",
    meta: "GAME IDEA / TBD",
    accent: "blue",
    icon: "pending",
    playable: false,
  },
  {
    slug: "",
    number: "???",
    label: "SECRET PROJECT",
    title: "大型実験",
    text: "もっと大きなゲームも別ラインで制作中。完成まで時間がかかるため、まずはこの実験室に小さなゲームを増やしていきます。",
    status: "IN DEVELOPMENT",
    meta: "LONG PROJECT",
    accent: "purple",
    icon: "secret",
    playable: false,
  },
];

function GameIcon({ type }) {
  if (type === "debug") {
    return (
      <span
        className="gameCardIcon gameCardIcon-debug"
        aria-hidden="true"
      >
        <i className="gameCodeFrame" />
        <i className="gameCodeLine lineOne" />
        <i className="gameCodeLine lineTwo" />
        <i className="gameBugBody" />
        <i className="gameBugLeg legOne" />
        <i className="gameBugLeg legTwo" />
        <i className="gameBugLeg legThree" />
        <i className="gameBugLeg legFour" />
      </span>
    );
  }

  if (type === "pending") {
    return (
      <span
        className="gameCardIcon gameCardIcon-pending"
        aria-hidden="true"
      >
        <i className="gamePendingFrame" />
        <i className="gamePendingLine lineOne" />
        <i className="gamePendingLine lineTwo" />
        <i className="gamePendingMark">?</i>
        <i className="gamePendingDot" />
      </span>
    );
  }

  return (
    <span
      className="gameCardIcon gameCardIcon-secret"
      aria-hidden="true"
    >
      <i className="gameSecretRing ringOne" />
      <i className="gameSecretRing ringTwo" />
      <i className="gameSecretCore">?</i>
      <i className="gameSecretDot dotOne" />
      <i className="gameSecretDot dotTwo" />
    </span>
  );
}

function GameCard({ game }) {
  const cardClass = `gameLabCard gameLabCard-${game.accent} ${
    game.playable
      ? "gameLabCardPlayable"
      : "gameLabCardDisabled"
  }`;

  const content = (
    <>
      <div className="gameLabCardTop">
        <p>
          EXPERIMENT {game.number} / {game.label}
        </p>
        <span>{game.status}</span>
      </div>

      <GameIcon type={game.icon} />

      <div className="gameLabCardText">
        <p className="gameLabMeta">{game.meta}</p>
        <h2>{game.title}</h2>
        <p>{game.text}</p>
        <span className="gameLabAction">
          {game.playable ? "実験開始 →" : "準備中"}
        </span>
      </div>
    </>
  );

  if (game.playable && game.slug) {
    return (
      <Link
        className={cardClass}
        to={`/game/${game.slug}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <article
      className={cardClass}
      aria-label={`${game.title} ${game.status}`}
    >
      {content}
    </article>
  );
}

export default function Game() {
  return (
    <main className="siteFrame innerPageFrame gameLabPage">
      <section className="chalkboard pageBoard gameLabBoard">
        <header className="pageHead gameLabHead">
          <p className="smallTag">
            PLAY LAB / GAME EXPERIMENTS
          </p>
          <h1>遊べる実験室</h1>
          <p>
            Puku Labで作る、小さなブラウザゲームの研究室です。
            <br />
            短く遊べる実験から、少しずつゲームを増やしていきます。
          </p>
        </header>

        <section
          className="gameLabGrid"
          aria-label="Puku Labのゲーム一覧"
        >
          {games.map((game) => (
            <GameCard
              key={`${game.number}-${game.title}`}
              game={game}
            />
          ))}
        </section>

        <div className="gameLabMemo">
          <p>PLAY LAB MEMO</p>
          <strong>
            最初の実験「DEBUGGER」を公開中。ほかのミニゲームはまだ白紙の研究枠です。形になったものから、このページに追加していきます。
          </strong>
        </div>

        <div className="pageActions gameLabFooterActions">
          <Link
            className="navButton ghost"
            to="/"
          >
            ホームへ戻る
          </Link>
          <Link
            className="navButton ghost"
            to="/apps"
          >
            アプリを見る
          </Link>
        </div>
      </section>
    </main>
  );
}
