import { Link } from "react-router-dom";
import "./Secret.css";

import { devLogs, grumbles } from "../data/secretLogs";

export default function Secret() {
  const latestLog = devLogs[0];
  const latestGrumbles = grumbles.slice(0, 2);

  return (
    <main className="siteFrame innerPageFrame secretPage">
      <section className="chalkboard pageBoard secretBoard">
        <header className="pageHead secretHead">
          <p className="smallTag">SECRET ARCHIVE</p>
          <h2>裏研究記録室</h2>
          <p className="secretLead">
            ここには、表には出していない試作中の記録や、
            開発途中の迷いが残されています。
          </p>
        </header>

        <section className="secretHero">
          <div className="pulseOrb" />
          <div>
            <p className="secretMiniLabel">FOUND ENTRY</p>
            <h3>ようこそ、見つけた人だけの裏側へ。</h3>
            <p>
              このページはATOMを5回タップした人だけが辿り着ける記録室。
              少しだけ、裏側を覗けます。
            </p>
          </div>
        </section>

        {latestLog ? (
          <section className="secretSection">
            <p className="secretSectionTag">DEV LOG</p>
            <h3>最近の開発ログ</h3>

            <article className="secretCard">
              <div className="secretCardMeta">
                <span>{latestLog.date}</span>
                <span>{latestLog.tag}</span>
              </div>
              <h4>{latestLog.title}</h4>
              <p>{latestLog.body}</p>
            </article>
          </section>
        ) : null}

        <section className="secretSection">
          <p className="secretSectionTag">GRUMBLE</p>
          <h3>無職おじさんのボヤキ</h3>

          <div className="grumbleList">
            {latestGrumbles.map((g, i) => (
              <div key={i} className="grumbleItem">
                <span>•</span>
                <p>{g}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="secretNote">
          ※ この記録は少しずつ増えていきます
        </p>

        <div className="pageActions secretActions">
          <Link className="navButton ghost" to="/">
            ホームへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}