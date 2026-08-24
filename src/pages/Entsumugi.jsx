import { Link } from "react-router-dom";
import "./Entsumugi.css";

const servicePoints = [
  {
    label: "ACTIVITY",
    title: "活動を残す",
    text: "日々の地域活動や予定、写真など、発信のもとになる情報を整理します。",
  },
  {
    label: "DRAFT",
    title: "原稿につなぐ",
    text: "共有された活動内容をもとに、SNSなどで発信するための原稿づくりを支援します。",
  },
  {
    label: "PUBLISH",
    title: "発信を続ける",
    text: "一度きりではなく、日々の活動が継続的な情報発信につながる流れを整えます。",
  },
];

const SERVICE_URL = "https://entsumugi.pukulab.com/";

export default function Entsumugi() {
  return (
    <main className="entsumugiPage">
      <section className="entsumugiHero">
        <div className="entsumugiHeroGlow" aria-hidden="true" />

        <div className="entsumugiHeroInner">
          <div className="entsumugiHeroCopy">
            <p className="entsumugiEyebrow">ENTSUGUMI / PUBLIC COMMUNICATION SUPPORT</p>
            <p className="entsumugiStatus">FIELD TEST PHASE</p>

            <h1>縁紡</h1>
            <p className="entsumugiCatch">発信を、ひとつの流れへ。</p>

            <p className="entsumugiLead">
              縁紡は、地方議員向けのSNS運用・情報発信支援サービスです。
              日々の活動、予定、写真、原稿を整理し、継続的な情報発信につなげる仕組みと運用を支えます。
            </p>

            <div className="entsumugiHeroActions">
              <a
                className="entsumugiPrimaryButton"
                href={SERVICE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                縁紡を利用中の方
              </a>
              <a className="entsumugiTextLink" href="#entsumugi-about">
                サービス概要を見る ↓
              </a>
            </div>
          </div>

          <aside className="entsumugiPreview" aria-label="縁紡のサービス概要">
            <p>COMMUNICATION FLOW</p>
            <div className="entsumugiFlow">
              <span>活動</span>
              <i>→</i>
              <span>共有</span>
              <i>→</i>
              <span>原稿</span>
              <i>→</i>
              <span>発信</span>
            </div>
            <strong>日々の活動を、発信まで止めない。</strong>
          </aside>
        </div>
      </section>

      <section className="entsumugiSection" id="entsumugi-about">
        <div className="entsumugiSectionHead">
          <p>WHAT IS ENTSUGUMI?</p>
          <h2>議員活動と情報発信の間をつなぐ。</h2>
          <span>
            地域活動や議会活動は続いていても、そのすべてをSNSへ整理して発信するには時間がかかります。
            縁紡は、活動の記録から原稿づくり、確認、発信までをひとつの流れとして支えるために開発しているサービスです。
          </span>
        </div>

        <div className="entsumugiPointGrid">
          {servicePoints.map((point) => (
            <article className="entsumugiPointCard" key={point.title}>
              <p>{point.label}</p>
              <h3>{point.title}</h3>
              <span>{point.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="entsumugiTemporaryNotice">
        <p>PREVIEW PAGE</p>
        <h2>現在、本格LPを準備しています。</h2>
        <span>
          縁紡は現在、地方議員との実証運用段階です。
          実際の運用を通じて機能と支援内容を確認しながら、サービス紹介ページも順次更新していきます。
        </span>

        <div className="entsumugiNoticeActions">
          <Link className="entsumugiSecondaryButton" to="/works">
            Puku LabのWORKSへ
          </Link>
          <Link className="entsumugiSecondaryButton" to="/about">
            運営者について
          </Link>
        </div>
      </section>

      <footer className="entsumugiMiniFooter">
        <p>運営・開発 Puku Lab</p>
        <Link to="/">pukulab.com</Link>
      </footer>
    </main>
  );
}
