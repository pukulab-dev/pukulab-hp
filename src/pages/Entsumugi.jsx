import { Link } from "react-router-dom";
import "./Entsumugi.css";
import "./EntsumugiEnhancements.css";

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
  ["予定・活動管理", "日・週・月の予定と日々の活動記録をまとめ、発信準備の起点にできます。"],
  ["AI秘書", "日程・相談案件・原稿づくりなど、日々の事務作業をAIで補助します。"],
  ["原稿・発信管理", "原稿作成、本人確認、修正依頼、投稿予定・投稿済みまで流れを確認できます。"],
  ["写真・動画・資料共有", "現場の素材をその場で送り、原稿や活動記録、制作素材につなげます。"],
  ["相談・領収書管理", "相談・要望の対応状況や領収書を記録し、事務所内の情報を整理できます。"],
  ["リンク・情報整理", "HP、LINE、Driveなど、よく使う外部サービスへの入口もまとめられます。"],
];

const aiActions = [
  ["日程", "予定の確認・登録、空き時間の確認"],
  ["案件", "相談・要望の確認と整理"],
  ["原稿", "作成・修正・投稿準備をサポート"],
  ["共有", "Puku Labへ素材を送る流れを案内"],
  ["登録", "必要な情報を自分用に保存"],
  ["その他", "問い合わせや設定などを相談"],
];

const trustItems = [
  {
    title: "共有範囲を分けて管理",
    text: "情報は「事務所内のみ」と「サポート共有」を分けて扱える設計です。すべての情報が自動でPuku Labへ共有されるわけではありません。",
  },
  {
    title: "役割ごとに使い方を分ける",
    text: "議員本人、事務所スタッフ、Puku Lab側で役割を分け、必要な情報と操作にアクセスする前提で設計しています。",
  },
  {
    title: "公開前の最終判断は本人",
    text: "原稿は確認画面から承認・修正依頼ができ、公開前の最終判断を議員本人が行える流れを用意しています。",
  },
];

const onboardingSteps = [
  ["01", "まず相談", "現在のSNS運用、事務所体制、困っていることを確認します。"],
  ["02", "支援範囲を決める", "アプリだけ、AI秘書、運用代行など、必要な範囲を一緒に整理します。"],
  ["03", "初期設定", "事務所情報や利用環境、必要に応じてSNS・LINE・HPなどを整えます。"],
  ["04", "運用開始", "予定や活動を登録しながら、日々の情報発信へつなげていきます。"],
];

const faqItems = [
  {
    q: "遠方でも利用できますか？",
    a: "はい。縁紡はPC・スマートフォンを使い、オンライン中心で情報共有と運用支援を進められるように設計しています。",
  },
  {
    q: "投稿前に内容を確認できますか？",
    a: "できます。原稿確認画面から内容を確認し、承認または修正依頼を出せます。",
  },
  {
    q: "投稿は自分で行うこともできますか？",
    a: "できます。本人・事務所で投稿する運用と、Puku Lab側へ投稿を任せる運用を、支援内容に合わせて整理できます。",
  },
  {
    q: "すでにSNSアカウントがありますが利用できますか？",
    a: "はい。既存アカウントを確認して運用を始める形にも対応しています。新規立ち上げが必要な媒体だけ追加することもできます。",
  },
  {
    q: "どの媒体を扱えますか？",
    a: "X、Facebook、Instagram、YouTube Shorts、公式LINE、HP活動報告などを想定しています。実際の運用媒体は現在の発信状況を見ながら決めます。",
  },
  {
    q: "相談や領収書を登録すると、Puku Labにも全部見えますか？",
    a: "いいえ。事務所内だけで扱う情報と、運用支援のために共有する情報を分ける設計です。共有範囲は内容に応じて管理します。",
  },
];

const pricingGroups = [
  {
    label: "SELF / AI",
    title: "自分で管理する",
    price: "1,980〜25,000",
    unit: "円 / 月",
    text: "アプリだけ使う方法から、AI秘書を使って自分で運用する方法まで。",
    notes: ["アプリ利用のみ 1,980円", "AI秘書コース 25,000円", "AI利用回数追加 1,000円 / 枠"],
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
            <a href="#ai-secretary">AI秘書</a>
            <a href="#price">料金</a>
            <Link to="/entsumugi/startup">候補者向け</Link>
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
              <strong>発信につなげる</strong>
            </h1>
            <p className="enLead">
              対面で会わなくても、SNS運用を任せられる。PC・スマートフォン・縁紡をつなぎ、日々の活動から継続的な情報発信まで支えます。
            </p>
            <div className="enHeroTags" aria-label="縁紡の主な特徴">
              <span>SNS運用代行</span>
              <span>専用アプリ</span>
              <span>AI秘書</span>
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
          <p className="enSectionCatch">活動していても、知られなければ伝わらない</p>
          <h2>
            <span className="enOnlyDesktop">
              日頃の活動を、<br />
              届く発信へ変えていく
            </span>
            <span className="enOnlyMobile">
              日頃の活動を<br />
              届く発信へ<br />
              変えていく
            </span>
          </h2>
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
          <h2>
            <span className="enOnlyDesktop">SNSは、魔法ではありません</span>
            <span className="enOnlyMobile">SNSは、<br />魔法ではありません</span>
          </h2>
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
          <p className="enSectionCatch">会わなくても、SNS運用を任せられる</p>
          <h2>
            <span className="enOnlyDesktop">
              活動から投稿までを、<br />
              ひとつの流れへ
            </span>
            <span className="enOnlyMobile">
              活動から投稿までを<br />
              ひとつの流れへ
            </span>
          </h2>
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
            <p className="enSectionCatch">外出先と事務所をつなぐ</p>
            <h2>
              <span className="enOnlyDesktop">
                同じ情報を、<br />
                どこからでも確認
              </span>
              <span className="enOnlyMobile">
                同じ情報を<br />
                どこからでも確認
              </span>
            </h2>
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
          <p className="enSectionCatch">発信だけではなく、日々の仕事をひとつの入口へ</p>
          <h2>縁紡でできること</h2>
          <p>予定、活動、原稿、素材、相談、領収書まで。議員活動と発信に関わる情報を、使いやすい形でまとめます。</p>
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

      <section className="enAiSecretarySection" id="ai-secretary">
        <div className="enAiSecretaryInner">
          <div className="enAiSecretaryCopy">
            <p className="enEyebrow">AI SECRETARY</p>
            <p className="enSectionCatch">「あれ、どこだっけ？」を減らす</p>
            <h2>
              <span className="enOnlyDesktop">
                縁紡の中に、<br />
                AI秘書という入口
              </span>
              <span className="enOnlyMobile">
                縁紡の中に<br />
                AI秘書という入口
              </span>
            </h2>
            <p>
              日程、相談案件、原稿、共有した素材など、日々の仕事を探し回る時間を減らすためのAI機能です。自分で運用しながら、必要なところだけAIの力を借りられます。
            </p>
            <div className="enAiSecretaryPrice">
              <span>AI秘書コース</span>
              <strong>25,000<small>円 / 月</small></strong>
              <p>利用回数を増やしたい場合は追加枠も用意しています。</p>
            </div>
          </div>

          <div className="enAiSecretaryPanel" aria-label="AI秘書でできる主なこと">
            <div className="enAiSecretaryTop">
              <span className="enAiSecretaryMark">AI</span>
              <div>
                <strong>何をお手伝いしますか？</strong>
                <small>下の項目から仕事を選べます</small>
              </div>
            </div>
            <div className="enAiSecretaryGrid">
              {aiActions.map(([title, text]) => (
                <div key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="enAiSecretaryExample">
              <span>たとえば</span>
              <p>「来週の予定を確認して」</p>
              <p>「この活動をX用の原稿にしたい」</p>
              <p>「対応中の相談案件を見せて」</p>
            </div>
          </div>
        </div>
      </section>

      <section className="enTrustSection">
        <div className="enTrustInner">
          <div className="enSectionHead center">
            <p className="enEyebrow">INFORMATION SHARING</p>
            <p className="enSectionCatch">便利さと、情報の分け方を両立する</p>
            <h2>
              <span className="enOnlyDesktop">必要な情報だけを、必要な範囲へ</span>
              <span className="enOnlyMobile">必要な情報だけを<br />必要な範囲へ</span>
            </h2>
            <p>議員事務所には、発信に使う情報と、事務所内だけで扱いたい情報があります。縁紡は、その違いを前提にした設計です。</p>
          </div>
          <div className="enTrustGrid">
            {trustItems.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="enExperienceSection">
        <div className="enExperienceInner">
          <div>
            <p className="enEyebrow">FIELD EXPERIENCE</p>
            <p className="enSectionCatch">政治・選挙の現場経験を、サービス設計に</p>
            <h2>
              <span className="enOnlyDesktop">
                「もっと投稿してください」<br />
                だけでは終わらせない
              </span>
              <span className="enOnlyMobile">
                「もっと投稿して<br />
                ください」<br />
                だけでは終わらせない
              </span>
            </h2>
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
          <p className="enSectionCatch">必要な支援だけを、無理なく続けられる形へ</p>
          <h2>
            <span className="enOnlyDesktop">利用方法は、大きく3つ</span>
            <span className="enOnlyMobile">利用方法は<br />大きく3つ</span>
          </h2>
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
            <p className="enEyebrow">NEXT STEP</p>
            <h2>
              <span className="enOnlyDesktop">知りたいことから、次へ</span>
              <span className="enOnlyMobile">知りたいことから<br />次へ</span>
            </h2>
            <p>
              立候補準備をまとめて始めたい方、まず自分に合うコースを知りたい方、だいたいの料金感を確認したい方。それぞれの入口を用意しています。
            </p>
          </div>

          <div className="enToolCards three">
            <Link className="enToolCard startup" to="/entsumugi/startup">
              <span>CANDIDATE</span>
              <strong>候補者向けスタートアップ</strong>
              <p>SNS・LINE・HPなど、立候補に向けた情報発信の土台をまとめて準備。</p>
              <b>特設ページを見る →</b>
            </Link>
            <Link className="enToolCard" to="/entsumugi/diagnosis">
              <span>30 SEC</span>
              <strong>コース相性診断</strong>
              <p>質問は3つだけ。今の希望に近い使い方を案内します。</p>
              <b>診断してみる →</b>
            </Link>
            <Link className="enToolCard estimate" to="/entsumugi/estimate">
              <span>PRICE</span>
              <strong>料金目安シミュレーター</strong>
              <p>準備状況を選んで、自分の場合のおおまかな料金帯を確認。</p>
              <b>料金目安を見る →</b>
            </Link>
          </div>
          <p className="enToolDisclaimer">
            ※ 診断・シミュレーション結果は目安です。実際の作業内容・素材・運用状況により、適したコースや料金が前後する場合があります。正式な内容はヒアリング後に確認します。
          </p>
        </div>
      </section>

      <section className="enOnboardingSection">
        <div className="enOnboardingInner">
          <div className="enSectionHead center">
            <p className="enEyebrow">START FLOW</p>
            <p className="enSectionCatch">問い合わせのあとも、迷わない</p>
            <h2>導入までの流れ</h2>
            <p>最初から全部を決める必要はありません。今の発信状況を確認しながら、必要な範囲から始めます。</p>
          </div>
          <div className="enOnboardingGrid">
            {onboardingSteps.map(([num, title, text]) => (
              <article key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="enFaqSection" id="faq">
        <div className="enFaqInner">
          <div className="enSectionHead">
            <p className="enEyebrow">FAQ</p>
            <p className="enSectionCatch">相談前によくある質問</p>
            <h2>
              <span className="enOnlyDesktop">気になるところを、先に</span>
              <span className="enOnlyMobile">気になるところを<br />先に</span>
            </h2>
          </div>
          <div className="enFaqList">
            {faqItems.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="enFinalCta">
        <div className="enFinalCtaInner">
          <div>
            <p className="enEyebrow">CONTACT</p>
            <p className="enSectionCatch">活動を積み重ね、きちんと市民へ届ける</p>
            <h2>
              <span className="enOnlyDesktop">その継続を、縁紡が支えます</span>
              <span className="enOnlyMobile">その継続を<br />縁紡が支えます</span>
            </h2>
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
