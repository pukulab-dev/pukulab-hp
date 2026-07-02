import { Link } from "react-router-dom";
import "./Secret.css";

import { devLogs, grumbles } from "../data/secretLogs";

const secretVisuals = [
  {
    id: "secret-visual-001",
    title: "夏のゲーム案 01",
    image: "/gallery/secret/secret-001.png",
    alt: "夏の海辺をテーマにしたゲーム用ビジュアル案",
    text: "ゲームを作ろうとしていた時に試した、夏の海辺をテーマにしたビジュアル案です。雰囲気は好きだけど、今回は採用しなかった一枚。",
  },
  {
    id: "secret-visual-002",
    title: "夏のゲーム案 02",
    image: "/gallery/secret/secret-002.png",
    alt: "夏のビーチをテーマにしたゲーム用ビジュアル案",
    text: "ゲーム画面やイベント絵に使えるか試していた、少し明るめの夏ビジュアル案です。表の展示室ではなく、ひみつの部屋に保管しています。",
  },
];

export default function Secret() {
  const latestLog = devLogs[0];
  const latestGrumbles = grumbles.slice(0, 2);

  return (
    <main className="siteFrame innerPageFrame secretPage">
      <section className="chalkboard pageBoard secretBoard">
        <header className="pageHead secretHead">
          <p className="smallTag">SECRET LOUNGE</p>
          <h2>ひみつの休憩室</h2>
          <p className="secretLead">
            よく見つけました。
            <br />
            ここは、Puku Labのすみっこにある
            見つけた人だけの小さな休憩室です。
          </p>
        </header>

        <section className="secretHero">
          <div className="pulseOrb" aria-hidden="true" />
          <div>
            <p className="secretMiniLabel">FOUND ENTRY</p>
            <h3>来てくれてありがとう。</h3>
            <p>
              表のページには置かなかった試作メモや、
              少しだけ公開場所を選ぶビジュアル実験をこっそり残しています。
              せっかくなので、少しだけ裏側で休んでいってください。
            </p>
          </div>
        </section>

        <section className="secretSection secretVisualSection">
          <div className="secretSectionHead">
            <p className="secretSectionTag">SECRET VISUAL LOG</p>
            <h3>ゲーム用に作っていた没ビジュアル</h3>
            <p>
              現在ゲームを作ろうとして色々試していた中で、
              採用しなかった画像をここに少しだけ展示しています。
              表のギャラリーには置かない、見つけた人向けの小さな記録です。
            </p>
          </div>

          <div className="secretVisualGrid">
            {secretVisuals.map((item) => (
              <article className="secretVisualCard" key={item.id}>
                <div className="secretVisualImageWrap">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>

                <div className="secretVisualText">
                  <p className="secretVisualLabel">SECRET ARTIFACT</p>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {latestLog ? (
          <section className="secretSection">
            <div className="secretSectionHead">
              <p className="secretSectionTag">DEV MEMO</p>
              <h3>最近の開発メモ</h3>
            </div>

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
          <div className="secretSectionHead">
            <p className="secretSectionTag">GRUMBLE</p>
            <h3>無職おじさんのボヤキ</h3>
          </div>

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
          ※ この部屋は、見つけてくれた人向けに少しずつ更新していきます。
        </p>

        <div className="pageActions secretActions">
          <Link className="navButton" to="/gallery">
            表の展示室へ
          </Link>

          <Link className="navButton ghost" to="/">
            ホームへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}