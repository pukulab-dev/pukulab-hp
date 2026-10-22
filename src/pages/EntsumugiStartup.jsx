import { Link } from "react-router-dom";
import { upcomingPlans } from "../data/entsumugiPlans.js";
import "./Entsumugi.css";
import "./EntsumugiEnhancements.css";
import "./EntsumugiStartup.css";

const INITIAL_ITEMS = [
  {
    code: "WEB-07",
    title: "簡易HP制作 3ページまで",
    price: "88,000円",
    text: "活動方針やプロフィール、連絡先などを整理するサイト。トップ＋2ページまで。",
  },
  {
    code: "INIT-03",
    title: "SNS新規立ち上げ一式",
    price: "16,500円",
    text: "SNSアカウント開設・プロフィール文章・自己紹介投稿1本まで。",
  },
  {
    code: "LINE-05",
    title: "LINE公式 初期設定一式",
    price: "22,000円",
    text: "開設・基本情報・初期配信の準備まで。",
  },
];

const FIT_ITEMS = [
  "立候補に向けて、HPやSNSをこれから準備したい",
  "後援会活動や地域活動の情報を整理したい",
  "SNSの発信準備を自分で効率よく進めたい",
  "必要な時だけ、原稿作成や投稿を依頼したい",
];

const contactUrl = (purpose, plan) => {
  const params = new URLSearchParams({ type: "entsumugi", source: "startup", purpose });
  if (plan) params.set("plan", plan);
  return `/contact?${params.toString()}`;
};

export default function EntsumugiStartup() {
  return (
    <main className="enPage enStartupPage">
      <header className="enHeader">
        <div className="enHeaderInner">
          <Link to="/entsumugi" className="enBrand" aria-label="縁紡トップへ">
            <strong>縁紡</strong>
            <span>議員サポートデスク</span>
          </Link>
          <div className="enHeaderActions">
            <Link className="enBackLink" to="/entsumugi">縁紡トップへ</Link>
            <Link className="enHeaderCta" to={contactUrl("立候補準備の相談")}>相談する</Link>
          </div>
        </div>
      </header>

      <section className="enStartupHero">
        <div className="enStartupHeroInner">
          <div className="enStartupHeroCopy">
            <div className="enPills">
              <span>2027年 統一地方選に向けて</span>
              <span>候補者向けスタートアップ</span>
            </div>
            <p className="enEyebrow">CANDIDATE STARTUP</p>
            <h1>
              <span className="enOnlyDesktop">
                立候補準備は、<br />
                <strong>必要なものから。</strong>
              </span>
              <span className="enOnlyMobile">
                立候補準備は、<br />
                <strong>必要なものから。</strong>
              </span>
            </h1>
            <p className="enLead">
              これから地方議会への立候補を目指す方へ。HP・SNS・LINE公式の立ち上げから、日々の活動や後援会情報の整理まで。必要な準備を組み合わせて始められる、縁紡のスタートアップ支援です。
            </p>
            <div className="enHeroActions">
              <a className="enButton primary" href="#startup-services">
                制作内容と料金を見る <span aria-hidden="true">→</span>
              </a>
              <Link className="enButton secondary" to={contactUrl("立候補準備の相談")}>
                立候補準備について相談する
              </Link>
            </div>
            <p className="enNote">初期制作だけの依頼も可能。すでにHP・SNS・LINE公式がある場合は、必要なものだけ選べます。</p>
          </div>

          <aside className="enStartupPriceCard" aria-label="初期構築モデル料金の目安">
            <p className="enEyebrow">STARTUP MODEL</p>
            <span className="enStartupPriceLabel">初期構築の参考価格（税込）</span>
            <strong className="enStartupPrice">126,500<small>円</small></strong>
            <p className="enStartupExample">簡易HP3ページ・SNS新規1媒体・LINE公式の初期設定をすべて依頼した場合</p>
            <div className="enStartupPriceBenefit">初期制作のみの依頼もOK</div>
            <small className="enStartupPriceNote">※月額契約は必須ではありません。外部サービス利用料や制作範囲による追加費用は別途確認します。</small>
          </aside>
        </div>
      </section>

      <section className="enSection enStartupFitSection">
        <div className="enSectionHead center">
          <p className="enEyebrow">FOR CANDIDATES</p>
          <p className="enSectionCatch">「何から準備する？」という段階から</p>
          <h2>こんな方に</h2>
        </div>
        <div className="enStartupFitGrid">
          {FIT_ITEMS.map((item, index) => (
            <div className="enStartupFitCard" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="enStartupPackageSection" id="startup-services">
        <div className="enStartupPackageInner">
          <div className="enSectionHead">
            <p className="enEyebrow">WHAT'S INCLUDED</p>
            <p className="enSectionCatch">活動を伝えるための入口づくり</p>
            <h2>初期構築 126,500円の内訳</h2>
            <p>SNS新規1媒体・LINE公式・簡易HP3ページをすべて準備した場合のモデル例です。必要なサービスだけでもご依頼いただけます。</p>
          </div>

          <div className="enStartupItemList">
            {INITIAL_ITEMS.map((item) => (
              <article className="enStartupItem" key={item.code}>
                <span>{item.code}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <strong>{item.price}</strong>
              </article>
            ))}
            <div className="enStartupItem total">
              <span>TOTAL</span>
              <div>
                <h3>初期構築 合計（税込）</h3>
                <p>上記3項目をすべて依頼した場合。セット契約の必須条件・割引はありません。</p>
              </div>
              <strong>126,500円</strong>
            </div>
          </div>
          <p className="enStartupPackageNote">1ページのLP制作にも対応しています。既存デザイン流用は33,000円、構成・デザイン込みは55,000円（税込）。本格HP制作は必要に応じて専門業者をご紹介します。ドメイン・サーバー・保守等は条件により別途確認します。</p>
          <Link className="enStartupTextLink" to="/entsumugi/estimate?preset=startup">必要な制作だけで料金目安を見る →</Link>
        </div>
      </section>

      <section className="enSection enStartupContinueSection" id="after-launch">
        <div className="enSectionHead center">
          <p className="enEyebrow">AFTER LAUNCH</p>
          <p className="enSectionCatch">自分で進める方も、任せたい方も</p>
          <h2>立ち上げ後も、活動スタイルに合わせて。</h2>
          <p>日々の活動や後援会情報を自分で整理したい方も、情報発信を継続して任せたい方も。必要なサポートを選べます。どちらも初期制作の必須契約ではありません。</p>
        </div>
        <div className="enStartupChoiceGrid">
          <article className="enStartupChoiceCard">
            <div className="enStartupChoiceTop">
              <span className="enStartupChoiceAudience">自分で効率よく進めたい方へ</span>
              <span className="enStartupChoiceStatus">開発中</span>
            </div>
            <h3>{upcomingPlans.supporter.name}</h3>
            <p className="enStartupChoiceDescription">活動記録やSNS原稿の下書き整理に加え、地図・後援会名簿の管理をサポート。日々の活動を自分で進めるためのコースです。</p>
            <strong className="enStartupChoicePrice">{upcomingPlans.supporter.monthly.toLocaleString("ja-JP")}<small>円 / 月（税込・提供予定価格）</small></strong>
            <p className="enStartupChoiceDetail">基本アプリ機能・地図・後援会名簿管理・標準文字認識（OCR）を提供予定。AI秘書・投稿代行は含みません。</p>
            <Link className="enButton secondary enStartupChoiceButton" to={contactUrl("後援会活動コースの提供について相談", `${upcomingPlans.supporter.name}（開発中）`)}>
              提供予定について相談する →
            </Link>
          </article>
          <article className="enStartupChoiceCard">
            <div className="enStartupChoiceTop">
              <span className="enStartupChoiceAudience">情報発信を任せたい方へ</span>
            </div>
            <h3>基本運用プラン</h3>
            <p className="enStartupChoiceDescription">活動内容の整理から原稿作成・簡易画像制作・投稿代行まで、継続的な情報発信をサポートします。</p>
            <strong className="enStartupChoicePrice">66,000<small>円 / 月（税込）</small></strong>
            <p className="enStartupChoiceDetail">2媒体までを目安に運用。月間の制作量や媒体別の配分は、活動内容に合わせて事前に確認します。</p>
            <Link className="enButton primary enStartupChoiceButton" to={contactUrl("基本運用プランの相談", "基本運用プラン")}>
              運用代行について相談する →
            </Link>
          </article>
        </div>
        <p className="enStartupChoiceFootnote">※後援会活動コースは開発中で、現時点では申込・利用開始できません。実際の提供時期・内容は確定後にご案内します。</p>
      </section>

      <section className="enStartupStepsSection">
        <div className="enStartupStepsInner">
          <div className="enSectionHead center">
            <p className="enEyebrow">START FLOW</p>
            <p className="enSectionCatch">必要なものだけ順番に</p>
            <h2>スタートまでの流れ</h2>
          </div>
          <div className="enStartupSteps">
            {[
              ["01", "現在の状況を確認", "立候補予定時期、既存SNS・LINE・HPの有無、必要な準備を確認します。"],
              ["02", "必要なものを選ぶ", "すでにあるものは除き、制作・初期設定・活動支援を組み合わせます。"],
              ["03", "立ち上げ・制作", "依頼内容に応じてSNS、LINE公式、HPなどを準備します。"],
              ["04", "自分に合った形で活動開始", "自分で管理する、制作だけ依頼する、運用を任せるなど、希望に合わせて進めます。"],
            ].map(([num, title, text]) => (
              <article key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="enStartupEstimateCta">
        <div className="enStartupEstimateCtaInner">
          <div>
            <p className="enEyebrow">YOUR CASE</p>
            <p className="enSectionCatch">全部そろっていなくても大丈夫です</p>
            <h2>自分の場合の<br />料金目安を確認</h2>
            <p>初期制作だけの依頼も、運用代行と組み合わせる場合も。今の準備状況に合わせて必要な項目を選べます。</p>
          </div>
          <div className="enFinalActions">
            <Link className="enButton primary" to="/entsumugi/estimate?preset=startup">必要な制作で料金目安を見る →</Link>
            <Link className="enButton secondary" to={contactUrl("立候補準備の相談")}>まず相談する</Link>
          </div>
        </div>
      </section>

      <section className="enStartupLegalNote">
        <p>※表示料金は税込です。特急対応、選挙期間中の対応、撮影、大型制作物、HPの大規模改修など、通常範囲を超える内容は事前に条件と料金を確認します。後援会活動コースは開発中です。</p>
      </section>

      <footer className="enFooter">
        <div><strong>縁紡</strong><span>議員サポートデスク</span></div>
        <p>地方議員・候補者向け情報発信支援</p>
        <Link to="/entsumugi">縁紡トップへ</Link>
      </footer>
    </main>
  );
}
