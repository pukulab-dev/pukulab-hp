import { Link } from "react-router-dom";
import "./Entsumugi.css";

import pcScreen from "../assets/entsumugi-pc.png";
import mobileScreen from "../assets/entsumugi-mobile.png";

const SERVICE_URL = "https://entsumugi.pukulab.com/";

const problemCards = [
  {
    number: "01",
    title: "活動していても、知られなければ伝わらない",
    text: "議会活動や地域活動を続けていても、市民が自分から情報を探しに来るとは限りません。",
  },
  {
    number: "02",
    title: "発信まで手が回らない",
    text: "議会、地域行事、相談対応、日程調整。SNSだけに時間を使えないのが議員活動の現実です。",
  },
  {
    number: "03",
    title: "写真や予定が、発信につながらない",
    text: "写真はスマホ、予定は手帳、連絡はLINE。情報が散らばるほど、投稿準備の手間も増えていきます。",
  },
];

const flowSteps = [
  {
    number: "01",
    label: "SHARE",
    title: "予定・写真を共有",
    text: "外出先はスマホ、事務所はPC。活動や写真を縁紡に共有します。",
  },
  {
    number: "02",
    label: "DRAFT",
    title: "原稿を準備",
    text: "共有された内容をもとに、発信するための原稿や素材を準備します。",
  },
  {
    number: "03",
    label: "APPROVE",
    title: "本人が確認",
    text: "公開前に内容を確認。承認・修正依頼など、最後の判断は議員本人が行います。",
  },
  {
    number: "04",
    label: "PUBLISH",
    title: "各媒体へ発信",
    text: "確認後は、X・Instagram・LINEなど媒体の役割に合わせて発信へつなげます。",
  },
];

const features = [
  ["予定管理", "日・週・月で活動予定を確認。発信準備の起点にできます。"],
  ["原稿作成", "本人・事務所から、発信したい内容を原稿として登録できます。"],
  ["原稿確認", "スマホから承認・修正依頼。公開前の最終判断をしやすくします。"],
  ["発信状況", "確認待ち・作業中・投稿予定・投稿済みをひとつの画面で確認。"],
  ["写真・動画共有", "現場の素材をその場で共有し、原稿や活動記録につなげます。"],
  ["相談・領収書", "相談対応や領収書も記録し、日々の業務情報をまとめて管理。"],
];

const pricingGroups = [
  {
    label: "SELF / AI",
    title: "自分で管理する",
    price: "1,980〜22,000",
    unit: "円 / 月",
    text: "アプリだけ使う方法から、AI秘書を使って自分で運用する方法まで。",
    notes: ["アプリ利用のみ 1,980円", "AI秘書コース 22,000円"],
  },
  {
    label: "MONTHLY SUPPORT",
    title: "継続して任せる",
    price: "66,000〜148,000",
    unit: "円 / 月",
    text: "原稿・投稿から、媒体ごとの企画や広報全体まで、必要な範囲を継続支援。",
    notes: ["基本運用 66,000円", "広報運用 99,000円", "外部広報室 148,000円"],
    featured: true,
  },
  {
    label: "ONE SHOT",
    title: "必要な時だけ頼む",
    price: "3,300〜",
    unit: "円 / 回",
    text: "原稿、画像、動画、LINE、HP更新など、必要な制作だけ個別に依頼できます。",
    notes: ["SNS原稿 3,300円〜", "動画・WEB制作にも対応"],
  },
];

export default function Entsumugi() {
  return (
    <main className="enPage">
      <header className="enHeader">
        <div className="enHeaderInner">
          <Link to="/entsumugi" className="enBrand" aria-label="縁紡トップへ">
            <strong>縁紡</strong>
            <span>議員サポートデスク</span>
          </Link>

          <nav className="enNav" aria-label="縁紡ページ内ナビ">
            <a href="#about">縁紡とは</a>
            <a href="#flow">仕組み</a>
            <a href="#features">機能</a>
            <a href="#price">料金</a>
          </nav>

          <div className="enHeaderActions">
            <a className="enLoginLink" href={SERVICE_URL} target="_blank" rel="noreferrer">
              ご利用中の方
            </a>
            <Link className="enHeaderCta" to="/contact?type=entsumugi">
              相談する
            </Link>
          </div>
        </div>
      </header>

      <section className="enHero">
        <div className="enHeroInner">
          <div className="enHeroCopy">
            <div className="enPills">
              <span>地方議員向け</span>
              <span>実証運用中</span>
            </div>
            <p className="enEyebrow">ENTSUMUGI / PUBLIC COMMUNICATION SUPPORT</p>
            <h1>
              <span>議員活動を、</span>
              <strong>発信につなげる。</strong>
            </h1>
            <p className="enLead">
              対面で会わなくても、SNS運用を任せられる。PC・スマートフォン・縁紡をつなぎ、日々の活動から継続的な情報発信まで支えます。
            </p>
            <div className="enHeroTags" aria-label="縁紡の主な特徴">
              <span>SNS運用代行</span>
              <span>専用アプリ</span>
              <span>原稿制作</span>
              <span>情報共有</span>
            </div>
            <div className="enHeroActions">
              <Link className="enButton primary" to="/contact?type=entsumugi">
                まずは相談する <span aria-hidden="true">→</span>
              </Link>
              <Link className="enButton secondary" to="/entsumugi/diagnosis">
                30秒コース診断
              </Link>
            </div>
            <p className="enNote">現在、地方議員との実証運用を通じてサービス改善を進めています。</p>
          </div>

          <div className="enHeroVisual" aria-label="縁紡のPC版とスマートフォン版の画面">
            <div className="enPcFrame">
              <img src={pcScreen} alt="縁紡のPC版ホーム画面" />
            </div>
            <div className="enPhoneFrame">
              <img src={mobileScreen} alt="縁紡のスマートフォン版ホーム画面" />
            </div>
            <div className="enVisualBadge">
              <b>01</b>
              <span>スマホで共有<br /><strong>→ PC・縁紡へ</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className="enMiniFlow" aria-label="縁紡の基本フロー">
        <div className="enMiniFlowInner">
          {["共有", "作成", "承認", "投稿"].map((label, index) => (
            <div className="enMiniFlowUnit" key={label}>
              <span>{index + 1}</span>
              <strong>{label}</strong>
              {index < 3 ? <i aria-hidden="true">→</i> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="enSection" id="about">
        <div className="enSectionHead center">
          <p className="enEyebrow">WHY ENTSUMUGI?</p>
          <p className="enSectionCatch">活動していても、知られなければ伝わらない。</p>
          <h2>日頃の活動を、<br className="enDesktopBreak" />届く発信へ変えていく。</h2>
          <p>
            選挙の時だけではなく、日頃から少しずつ接点をつくる。そのためには、無理なく発信を続けられる仕組みが必要です。
          </p>
        </div>

        <div className="enProblemGrid">
          {problemCards.map((item) => (
            <article className="enProblemCard" key={item.number}>
              <span className="enRoundNumber">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="enStatement">
        <div className="enStatementInner">
          <p className="enEyebrow">OUR APPROACH</p>
          <h2>SNSは、魔法ではありません。</h2>
          <p>
            投稿さえすれば、すべての人へ情報が届くわけではありません。まずは関心を持ってくれている人へ、日々の活動をきちんと届ける。その積み重ねが、少しずつ関心の外側へ広がっていきます。
          </p>
          <div className="enStatementSteps">
            <div><span>01</span><strong>関心層へ届ける</strong></div>
            <i>→</i>
            <div><span>02</span><strong>無理なく続ける</strong></div>
            <i>→</i>
            <div><span>03</span><strong>少しずつ広げる</strong></div>
          </div>
        </div>
      </section>

      <section className="enSection" id="flow">
        <div className="enSectionHead">
          <p className="enEyebrow">HOW IT WORKS</p>
          <p className="enSectionCatch">会わなくても、SNS運用を任せられる。</p>
          <h2>活動から投稿までを、<br className="enDesktopBreak" />ひとつの流れへ。</h2>
          <p>
            予定や写真を共有するだけで、対面の打ち合わせがなくても発信準備を進められる仕組みを整えています。
          </p>
        </div>

        <div className="enFlowGrid">
          {flowSteps.map((step, index) => (
            <article className="enFlowCard" key={step.number}>
              <div className="enFlowTop">
                <span className="enRoundNumber">{step.number}</span>
                <small>{step.label}</small>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < flowSteps.length - 1 ? <i className="enFlowArrow" aria-hidden="true">→</i> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="enDeviceSection">
        <div className="enDeviceInner">
          <div className="enDeviceCopy">
            <p className="enEyebrow">PC + SMARTPHONE</p>
            <p className="enSectionCatch">外出先と事務所をつなぐ。</p>
            <h2>同じ情報を、<br />どこからでも確認。</h2>
            <p>
              外出先ではスマートフォン、事務所ではPC。議員本人・事務所スタッフ・共有を許可した縁紡が、同じ流れを確認できます。
            </p>
          </div>

          <div className="enDeviceDiagram" aria-label="スマートフォンとPCの連携イメージ">
            <div className="enDeviceCard">
              <small>外出先</small>
              <strong>SMARTPHONE</strong>
              <span>活動・写真を共有</span>
            </div>
            <div className="enDeviceBridge">
              <strong>縁紡</strong>
              <i>↕</i>
              <span>同じ情報</span>
            </div>
            <div className="enDeviceCard pc">
              <small>事務所</small>
              <strong>PC</strong>
              <span>予定・原稿を確認</span>
            </div>
          </div>
        </div>
      </section>

      <section className="enSection" id="features">
        <div className="enSectionHead center">
          <p className="enEyebrow">FEATURES</p>
          <p className="enSectionCatch">発信に関わる作業を、ひとつの入口へ。</p>
          <h2>縁紡でできること</h2>
          <p>予定、原稿、写真、動画、相談、領収書まで。よく使う機能を迷わず開けます。</p>
        </div>
        <div className="enFeatureGrid">
          {features.map(([title, text], index) => (
            <article className="enFeatureCard" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="enExperienceSection">
        <div className="enExperienceInner">
          <div>
            <p className="enEyebrow">FIELD EXPERIENCE</p>
            <p className="enSectionCatch">政治・選挙の現場経験を、サービス設計に。</p>
            <h2>「もっと投稿してください」だけでは終わらせない。</h2>
            <p>
              議員活動には、議会、地域行事、相談対応、日程調整など多くの仕事があります。発信だけに時間を使えない現場を知っているからこそ、縁紡では投稿作業だけでなく、活動を記録し、整理し、発信につなげる仕組みから考えます。
            </p>
          </div>
          <div className="enExperienceFacts">
            <span><b>元議員秘書</b> 約3年間勤務</span>
            <span><b>選挙実務</b> 衆院・参院・市長・県議・市議を経験</span>
            <span><b>運営実務</b> 地方選挙で事務所実務の取りまとめを担当</span>
          </div>
        </div>
      </section>

      <section className="enSection" id="price">
        <div className="enSectionHead center">
          <p className="enEyebrow">PRICE</p>
          <p className="enSectionCatch">必要な支援だけを、無理なく続けられる形へ。</p>
          <h2>利用方法は、大きく3つ。</h2>
          <p>自分で管理するか、継続して任せるか、必要な時だけ依頼するか。支援範囲に合わせて選べます。</p>
        </div>

        <div className="enPricingGrid">
          {pricingGroups.map((plan) => (
            <article className={`enPriceCard ${plan.featured ? "featured" : ""}`} key={plan.title}>
              {plan.featured ? <span className="enRecommend">おすすめ</span> : null}
              <small>{plan.label}</small>
              <h3>{plan.title}</h3>
              <div className="enPriceValue">
                <strong>{plan.price}</strong><span>{plan.unit}</span>
              </div>
              <p>{plan.text}</p>
              <ul>
                {plan.notes.map((note) => <li key={note}>{note}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="enToolsIntro">
          <div className="enToolsLead">
            <p className="enEyebrow">FIND YOUR PLAN</p>
            <h2>自分の場合を、もう少し具体的に。</h2>
            <p>
              コース名だけでは分かりにくい方へ。まずは3問の相性診断、そのあと必要なら概算料金まで確認できます。
            </p>
          </div>

          <div className="enToolCards">
            <Link className="enToolCard" to="/entsumugi/diagnosis">
              <span>STEP 1</span>
              <strong>30秒コース診断</strong>
              <p>質問は3つだけ。今の使い方に近いコースを案内します。</p>
              <b>診断してみる →</b>
            </Link>
            <Link className="enToolCard estimate" to="/entsumugi/estimate">
              <span>STEP 2</span>
              <strong>料金シミュレーター</strong>
              <p>媒体・初期設定・追加制作を選んで、概算を確認できます。</p>
              <b>概算を見る →</b>
            </Link>
          </div>
          <p className="enToolDisclaimer">
            ※ シミュレーション結果は目安です。実際の作業内容・素材・運用状況により料金が前後する場合があります。正式な料金はヒアリング後のお見積もりで確定します。
          </p>
        </div>
      </section>

      <section className="enFinalCta">
        <div className="enFinalCtaInner">
          <div>
            <p className="enEyebrow">CONTACT</p>
            <p className="enSectionCatch">活動を積み重ね、きちんと市民へ届ける。</p>
            <h2>その継続を、縁紡が支えます。</h2>
            <p>現在の発信方法、事務所の体制、希望する支援範囲を確認しながら、最適な使い方を一緒に整理します。</p>
          </div>
          <div className="enFinalActions">
            <Link className="enButton primary" to="/contact?type=entsumugi">まずは相談する →</Link>
            <a className="enButton secondary" href={SERVICE_URL} target="_blank" rel="noreferrer">縁紡をご利用中の方</a>
          </div>
        </div>
      </section>

      <footer className="enFooter">
        <div><strong>縁紡</strong><span>議員サポートデスク</span></div>
        <p>地方議員向けSNS運用・情報発信支援</p>
        <Link to="/">運営・開発 Puku Lab</Link>
      </footer>
    </main>
  );
}
