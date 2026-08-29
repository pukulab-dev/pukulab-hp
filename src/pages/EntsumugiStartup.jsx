import { Link } from "react-router-dom";
import "./Entsumugi.css";

const INITIAL_ITEMS = [
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
  {
    code: "WEB-07",
    title: "簡易HP制作 3ページまで",
    price: "88,000円",
    text: "トップ＋2ページまでの、基本的な候補者・議員サイトを想定。",
  },
];

const FIT_ITEMS = [
  "立候補に向けて、SNSをこれから始めたい",
  "LINE公式やHPも一緒に整えたい",
  "何をどの順番で準備すればいいか迷っている",
  "立ち上げ後の発信も継続して任せたい",
];

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
            <Link className="enHeaderCta" to="/contact?type=entsumugi">相談する</Link>
          </div>
        </div>
      </header>

      <section className="enStartupHero">
        <div className="enStartupHeroInner">
          <div className="enStartupHeroCopy">
            <div className="enPills">
              <span>2027 統一地方選に向けて</span>
              <span>期間限定特設ページ</span>
            </div>
            <p className="enEyebrow">CANDIDATE STARTUP</p>
            <h1>
              <span>立候補の準備と、</span>
              <strong>発信の準備を同時に。</strong>
            </h1>
            <p className="enLead">
              SNS・LINE公式・HPを一つずつ別々に考えるのではなく、候補者として情報を届けるための入口をまとめて整えるスタートアップ支援です。
            </p>
            <div className="enHeroActions">
              <Link className="enButton primary" to="/entsumugi/estimate?preset=startup">
                この内容で概算を見る <span aria-hidden="true">→</span>
              </Link>
              <Link className="enButton secondary" to="/contact?type=entsumugi">
                まず相談する
              </Link>
            </div>
            <p className="enNote">すでにSNS・LINE・HPがある場合は、不要な項目を外して個別に組み替えられます。</p>
          </div>

          <aside className="enStartupPriceCard" aria-label="スタートアップパック料金の目安">
            <p className="enEyebrow">STARTUP MODEL</p>
            <span className="enStartupPriceLabel">初期構築</span>
            <strong className="enStartupPrice">126,500<small>円</small></strong>
            <div className="enStartupPlus">＋</div>
            <span className="enStartupPriceLabel">継続運用</span>
            <strong className="enStartupMonthly">66,000<small>円 / 月〜</small></strong>
            <p>初月の参考合計：<b>192,500円〜</b></p>
            <small className="enStartupPriceNote">※すべて税込。選択内容・素材・対応範囲により変動します。</small>
          </aside>
        </div>
      </section>

      <section className="enSection enStartupFitSection">
        <div className="enSectionHead center">
          <p className="enEyebrow">FOR CANDIDATES</p>
          <p className="enSectionCatch">「まず何を作る？」から整理したい方へ。</p>
          <h2>こんな準備段階に。</h2>
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

      <section className="enStartupPackageSection">
        <div className="enStartupPackageInner">
          <div className="enSectionHead">
            <p className="enEyebrow">WHAT'S INCLUDED</p>
            <p className="enSectionCatch">情報発信の土台を、まとめて立ち上げる。</p>
            <h2>初期構築 126,500円の内訳</h2>
            <p>一例として、SNS新規1媒体・LINE公式・3ページHPをまとめて準備する構成です。</p>
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
                <h3>初期構築 合計</h3>
                <p>上記3項目をすべて新規で準備した場合。</p>
              </div>
              <strong>126,500円</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="enSection enStartupContinueSection">
        <div className="enSectionHead center">
          <p className="enEyebrow">AFTER LAUNCH</p>
          <p className="enSectionCatch">作っただけで、終わらせない。</p>
          <h2>立ち上げ後は、月額運用へ。</h2>
          <p>SNSやHPは、用意しただけでは届きません。日々の活動を原稿・投稿へつなげる基本運用プランを組み合わせられます。</p>
        </div>
        <div className="enStartupMonthlyCard">
          <div>
            <span>MONTHLY SUPPORT</span>
            <h3>基本運用プラン</h3>
            <p>継続的な原稿作成・投稿代行・簡易画像・発信相談などを支援。</p>
          </div>
          <strong>66,000<small>円 / 月</small></strong>
        </div>
      </section>

      <section className="enStartupStepsSection">
        <div className="enStartupStepsInner">
          <div className="enSectionHead center">
            <p className="enEyebrow">START FLOW</p>
            <p className="enSectionCatch">必要なものだけ、順番に。</p>
            <h2>スタートまでの流れ</h2>
          </div>
          <div className="enStartupSteps">
            {[
              ["01", "現在の状況を確認", "既存SNS・LINE・HPの有無と、準備したい時期を確認します。"],
              ["02", "必要な項目を選ぶ", "すでにあるものは除き、必要な初期設定・制作だけを組みます。"],
              ["03", "立ち上げ・制作", "SNS、LINE公式、HPなどを順番に準備します。"],
              ["04", "発信を継続", "必要に応じて月額運用へつなぎ、日々の活動発信を続けます。"],
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
            <p className="enSectionCatch">全部そろっていなくても大丈夫です。</p>
            <h2>自分の場合の概算を確認。</h2>
            <p>すでにHPがある、SNSだけ新しく作りたい、LINEは不要など、現在の状況に合わせて項目を外せます。</p>
          </div>
          <div className="enFinalActions">
            <Link className="enButton primary" to="/entsumugi/estimate?preset=startup">スタートアップ構成で試す →</Link>
            <Link className="enButton secondary" to="/entsumugi/diagnosis">先にコース診断をする</Link>
          </div>
        </div>
      </section>

      <section className="enStartupLegalNote">
        <p>
          ※ このページは情報発信環境の立ち上げ支援を案内するものです。特急対応・選挙期間中の対応・撮影・大型制作物など、通常範囲を超える内容は事前に条件と料金を確認します。
        </p>
      </section>

      <footer className="enFooter">
        <div><strong>縁紡</strong><span>議員サポートデスク</span></div>
        <p>地方議員・候補者向け情報発信支援</p>
        <Link to="/entsumugi">縁紡トップへ</Link>
      </footer>
    </main>
  );
}
