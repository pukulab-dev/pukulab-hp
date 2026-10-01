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
    slug: "flask-mix",
    number: "002",
    label: "MIX PUZZLE",
    title: "FLASK MIX",
    text: "指定された条件に合わせて素材を組み合わせる、フラスコ実験パズル。混ぜ方ひとつで結果が変わる小さな研究室。",
    status: "COMING SOON",
    meta: "PUZZLE / QUICK",
    accent: "amber",
    icon: "flask",
    playable: false,
  },
  {
    slug: "lab-memory",
    number: "003",
    label: "MEMORY TEST",
    title: "LAB MEMORY",
    text: "研究道具や記号の組み合わせを覚えてそろえる記憶ゲーム。短く遊べて、少しずつ難しくなる実験を予定しています。",
    status: "COMING SOON",
    meta: "MEMORY / CASUAL",
    accent: "blue",
    icon: "memory",
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
      <span className="gameCardIcon gameCardIcon-debug" aria-hidden="true">
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

  if (type === "flask") {
    return (
      <span className="gameCardIcon gameCardIcon-flask" aria-hidden="true">
        <i className="gameFlaskNeck" />
        <i className="gameFlaskBody" />
        <i className="gameFlaskLiquid" />
        <i className="gameBubble bubbleOne" />
        <i className="gameBubble bubbleTwo" />
      </span>
    );
  }

  if (type === "memory") {
    return (
      <span className="gameCardIcon gameCardIcon-memory" aria-hidden="true">
        <i className="gameMemoryCard cardOne">?</i>
        <i className="gameMemoryCard cardTwo">?</i>
        <i className="gameMemoryCard cardThree">★</i>
      </span>
    );
  }

  return (
    <span className="gameCardIcon gameCardIcon-secret" aria-hidden="true">
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
    game.playable ? "gameLabCardPlayable" : "gameLabCardDisabled"
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
      <Link className={cardClass} to={`/game/${game.slug}`}>
        {content}
      </Link>
    );
  }

  return (
    <article className={cardClass} aria-label={`${game.title} ${game.status}`}>
      {content}
    </article>
  );
}

export default function Game() {
  return (
    <main className="siteFrame innerPageFrame gameLabPage">
      <section className="chalkboard pageBoard gameLabBoard">
        <header className="pageHead gameLabHead">
          <p className="smallTag">PLAY LAB / GAME EXPERIMENTS</p>
          <h1>遊べる実験室</h1>
          <p>
            Puku Labで作る、小さなブラウザゲームの研究室です。
            <br />
            短く遊べる実験から、少しずつゲームを増やしていきます。
          </p>
        </header>

        <section className="gameLabGrid" aria-label="Puku Labのゲーム一覧">
          {games.map((game) => (
            <GameCard key={`${game.number}-${game.title}`} game={game} />
          ))}
        </section>

        <div className="gameLabMemo">
          <p>PLAY LAB MEMO</p>
          <strong>
            最初の実験「DEBUGGER」を公開中。公開したゲームから順番に、このページから遊べるようにしていきます。
          </strong>
        </div>

        <div className="pageActions gameLabFooterActions">
          <Link className="navButton ghost" to="/">
            ホームへ戻る
          </Link>
          <Link className="navButton ghost" to="/apps">
            アプリを見る
          </Link>
        </div>
      </section>
    </main>
  );
}
