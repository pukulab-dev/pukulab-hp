import { Link } from "react-router-dom";
import "./Works.css";

const serviceCards = [
  {
    title: "HP制作",
    label: "WEB SITE",
    text: "個人活動・小さなお店・作品紹介など、最初の拠点になるホームページを作ります。",
  },
  {
    title: "LP制作",
    label: "LANDING PAGE",
    text: "アプリ、サービス、イベント、企画などを分かりやすく伝える紹介ページを整えます。",
  },
  {
    title: "運営導線サポート",
    label: "GROWTH ROUTE",
    text: "X、note、pixiv、アプリ、問い合わせなどをつなぎ、見に来た人が迷わない導線を考えます。",
  },
  {
    title: "AI制作サポート",
    label: "AI CREATIVE",
    text: "AIを使った画像案、文章案、世界観づくり、更新ネタづくりまで一緒に整理します。",
  },
];

const processSteps = [
  "相談する",
  "方向性を決める",
  "小さく作る",
  "公開後に育てる",
];

export default function Works() {
  return (
    <main className="siteFrame innerPageFrame worksPage">
      <section className="chalkboard pageBoard worksBoard">
        <header className="pageHead worksHead">
          <p className="smallTag">WORKS / SUPPORT LAB</p>
          <h2>制作相談室</h2>
          <p>
            黒板の中の2D研究室から、HP制作・LP制作・運営導線づくりをお手伝いします。
          </p>
        </header>

        <section className="worksHero">
          <div className="worksHeroIcon" aria-hidden="true">
            <span className="worksHeroMonitor" />
            <span className="worksHeroScreen" />
            <span className="worksHeroTool" />
            <span className="worksHeroStar" />
            <span className="worksHeroBubble bubbleA" />
            <span className="worksHeroBubble bubbleB" />
          </div>

          <div className="worksHeroText">
            <p className="worksMiniLabel">SMALL WEB SUPPORT</p>
            <h3>小さく作って、少しずつ育てる。</h3>
            <p>
              Puku Labでは、ただページを作るだけではなく、
              「何を見せるか」「どこへ案内するか」「どう続けるか」まで含めて考えます。
            </p>
            <p>
              個人開発、創作活動、小さなお店、イベント告知など、
              まずは小さな拠点を作りたい時に相談できる制作室です。
            </p>
          </div>
        </section>

        <section className="worksSection">
          <div className="worksSectionHead">
            <p className="worksSectionTag">MENU</p>
            <h3>できること</h3>
          </div>

          <div className="worksServiceGrid">
            {serviceCards.map((card) => (
              <article className="worksServiceCard" key={card.title}>
                <p>{card.label}</p>
                <h4>{card.title}</h4>
                <span>{card.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="worksSection">
          <div className="worksSectionHead">
            <p className="worksSectionTag">FLOW</p>
            <h3>進め方</h3>
          </div>

          <div className="worksFlow">
            {processSteps.map((step, index) => (
              <div className="worksFlowStep" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>

          <p className="worksNote">
            いきなり大きく作り込むより、まずは見える形にして、
            反応を見ながら少しずつ育てる進め方を大切にしています。
          </p>
        </section>

        <section className="worksCta">
          <p className="worksSectionTag">CONTACT</p>
          <h3>HP制作や運営まわりで困っていたら</h3>
          <p>
            「まだふわっとしている」くらいの段階でも大丈夫です。
            どんなページにしたいか、何を届けたいかを一緒に整理します。
          </p>

          <div className="pageActions worksActions">
            <Link className="navButton" to="/contact?type=works">
              相談してみる
           </Link>
            <Link className="navButton ghost" to="/">
              ホームへ戻る
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}