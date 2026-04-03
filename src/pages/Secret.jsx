import { Link } from "react-router-dom";
import "./Secret.css";

const devLogs = [
  {
    date: "2026.04.03",
    tag: "HP",
    title: "公開したのに、もう直したくなっている。",
    body: "公開できた達成感はある。でも整えば整うほど、次に気になる場所も増えていく。たぶん作る側って、完成した瞬間に次の未完成を見つける生き物なんだと思う。",
  },
  {
    date: "2026.04.02",
    tag: "巻ログ",
    title: "見た目が良くなると、今度は細かい違和感が気になる。",
    body: "タイトルの改行、文字サイズ、余白、導線。前より良くなったはずなのに、まだ触りたくなる。たぶんこれは不満じゃなくて、もっと良くできる予感なんだと思う。",
  },
  {
    date: "2026.04.01",
    tag: "思考メモ",
    title: "きれいな表ページと、リアルな裏ページは両方必要かもしれない。",
    body: "表では世界観を整えて、裏では迷いや試行錯誤を残す。その両方があると、研究所っぽさも人間っぽさも出せる気がしている。",
  },
];

const grumbles = [
  "AIとの意思疎通、たまに日本語の奥深さを思い知らされる。",
  "1個直すと3個直したくなる現象に、そろそろ名前が欲しい。",
  "無職おじさんなのに、なぜか毎日やることが多い。",
  "本当の敵は技術不足じゃなく、PCの重さかもしれない。",
];

const hiddenNotes = [
  {
    title: "巻ログの裏テーマ",
    text: "漫画管理アプリを作りながら、実は“集めたくなる気持ち”そのものをどう残すかも考えている。",
  },
  {
    title: "旅ログの気配",
    text: "次は“計画から思い出まで共有する”方向も面白い。記録だけじゃなく、過程そのものを残したい。",
  },
  {
    title: "るのメモ",
    text: "研究所っぽい見た目は整ってきた。ここからは、見つけた人が少しニヤッとできる温度を足していきたい。",
  },
];

export default function Secret() {
  return (
    <main className="siteFrame innerPageFrame secretPage">
      <section className="chalkboard pageBoard secretBoard">
        <header className="pageHead secretHead">
          <p className="smallTag secretTopTag">SECRET ARCHIVE</p>
          <h2>裏研究記録室</h2>
          <p className="secretLead">
            ここには、表には出していない試作中の記録や、
            開発途中の迷い、少しだけ人間くさい独り言が残されています。
          </p>
        </header>

        <section className="secretHero">
          <div className="secretHeroOrbWrap">
            <div className="pulseOrb" />
            <div className="pulseRing pulseRingA" />
            <div className="pulseRing pulseRingB" />
          </div>

          <div className="secretHeroText">
            <p className="secretMiniLabel">FOUND ENTRY</p>
            <h3>ようこそ、見つけた人だけの裏側へ。</h3>
            <p>
              このページは、ATOMを5回タップした人だけが辿り着ける
              ちょっとした隠し記録室。
              <br />
              公開前の実験、開発の空気、無職おじさんのぼやきまで、
              きれいに整えていないまま置いてあります。
            </p>
          </div>
        </section>

        <section className="secretSection">
          <div className="secretSectionHead">
            <p className="secretSectionTag">PICK UP</p>
            <h3>注目ログ</h3>
          </div>

          <article className="featuredLog">
            <div className="featuredLogMeta">
              <span>2026.04.03</span>
              <span>HP</span>
            </div>
            <h4>表はきれいに、裏はリアルに。</h4>
            <p>
              Puku Labの表側は、世界観や導線を整えた案内ページ。
              でも本当に面白いのは、その裏で何を考えて、何に悩んで、
              どこを直そうとしているのかだったりする。
              <br />
              このSecretは、その温度を残すための場所。
            </p>
          </article>
        </section>

        <section className="secretSection">
          <div className="secretSectionHead">
            <p className="secretSectionTag">DEV LOG</p>
            <h3>開発日誌</h3>
          </div>

          <div className="secretLogGrid">
            {devLogs.map((log) => (
              <article className="secretCard secretLogCard" key={`${log.date}-${log.title}`}>
                <div className="secretCardMeta">
                  <span>{log.date}</span>
                  <span>{log.tag}</span>
                </div>
                <h4>{log.title}</h4>
                <p>{log.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secretSection">
          <div className="secretSectionHead">
            <p className="secretSectionTag">GRUMBLE</p>
            <h3>無職おじさんのボヤキ</h3>
          </div>

          <div className="grumbleList">
            {grumbles.map((item, index) => (
              <div className="grumbleItem" key={`${index}-${item}`}>
                <span className="grumbleBullet">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="secretSection">
          <div className="secretSectionHead">
            <p className="secretSectionTag">HIDDEN FILES</p>
            <h3>裏側コンテンツ</h3>
          </div>

          <div className="hiddenNotesGrid">
            {hiddenNotes.map((note) => (
              <article className="secretCard hiddenNoteCard" key={note.title}>
                <p className="hiddenStamp">UNLISTED</p>
                <h4>{note.title}</h4>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secretSection nextPlanSection">
          <div className="secretSectionHead">
            <p className="secretSectionTag">NEXT</p>
            <h3>次の研究予定</h3>
          </div>

          <div className="nextPlanBox">
            <ul>
              <li>Secretページの記録を少しずつ増やしていく</li>
              <li>巻ログの裏話や開発の失敗談も追加する</li>
              <li>旅ログや次の実験企画の断片も置いていく</li>
              <li>“見つけた人だけ得するページ” に育てていく</li>
            </ul>
          </div>
        </section>

        <div className="pageActions secretActions">
          <Link className="navButton ghost" to="/">
            ホームへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}