import { Link } from "react-router-dom";
import "./Entsumugi.css";
import "./EntsumugiEnhancements.css";
import "./EntsumugiSales.css";
import { plans, yen } from "../data/entsumugiPlans.js";

import pcScreen from "../assets/entsumugi-pc.png";
import mobileScreen from "../assets/entsumugi-mobile.png";

const SERVICE_URL = "https://entsumugi.pukulab.com/";

const problemCards = [
  {
    number: "01",
    title: "活動していても 知られなければ伝わらない",
    text: "議会活動や地域活動を続けていても、市民が自分から情報を探しに来るとは限りません。",
  },
  {
    number: "02",
    title: "発信まで手が回らない",
    text: "議会、地域行事、相談対応、日程調整。SNSだけに時間を使えないのが議員活動の現実です。",
  },
  {
    number: "03",
    title: "写真や予定が 発信につながらない",
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
  ["発信を任せる", "原稿作成・簡易画像・投稿代行。運用プランでは、媒体に合わせた発信準備をPuku Labが支えます。"],
  ["活動を共有する", "予定や写真を送り、できあがった原稿を確認。外出先からでも、発信準備を進められます。"],
  ["日々の仕事を整理する", "予定・活動・相談案件をひとつの入口へ。AI秘書コースでは、情報の確認や原稿づくりも補助します。"],
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
  { q: "最低契約期間や解約について教えてください。", a: "継続運用プラン（基本運用・広報運用・外部広報室）は原則3か月から。解約は希望月の前月末までにご連絡ください。アプリ・AI秘書・繁忙月サポートの条件は、お申し込み前に個別にご案内します。" },
  { q: "途中でプランを変えられますか？", a: "活動量や事務所体制の変化に合わせてご相談いただけます。変更する支援範囲・料金・適用時期を確認したうえでご案内します。" },
  { q: "初期費用や追加費用はかかりますか？", a: "既存SNSの引継ぎや新規立ち上げが必要な場合は、月額とは別に初期費用がかかります。通常範囲を超える制作・特急対応なども、内容と追加費用を事前にご案内します。" },
  { q: "LINE公式の配信はどう進めますか？", a: "登録者数と契約中アカウントの配信枠に合わせて、無理のない配信計画を設計します。LINE公式側の有料プラン料金が必要な場合は別途となります。" },
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


export default function Entsumugi() {
  return (
    <main className="enPage enSalesPage">
      <header className="enHeader">
        <div className="enHeaderInner">
          <Link to="/entsumugi" className="enBrand" aria-label="縁紡トップへ">
            <strong>縁紡</strong>
            <span>議員サポートデスク</span>
          </Link>

          <nav className="enNav" aria-label="縁紡ページ内ナビ">
            <a href="#about">縁紡とは</a>
            <a href="#flow">利用イメージ</a>
            <a href="#experience">現場経験</a>
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
              <span>SNS運用・情報発信支援</span>
            </div>
            <p className="enEyebrow">ENTSUMUGI / PUBLIC COMMUNICATION SUPPORT</p>
            <h1>
              <span>議員活動を</span>
              <strong>発信につなげる</strong>
            </h1>
            <p className="enLead">
              予定や写真を共有するところから。原稿づくり、本人確認、投稿までを支え、日々の議員活動を発信につなげます。
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
            <p className="enNote">地方議員との実運用をもとに、開発・改善しています。</p>
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
              <span>活動を共有<br /><strong>→ 原稿確認 → 発信</strong></span>
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
          <p className="enSectionCatch">活動していても 知られなければ伝わらない</p>
          <h2>
            <span className="enOnlyDesktop">
              日頃の活動を<br />
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
        <p className="enWhyClosing">すでに行っている活動を、発信につなげやすくする。<br />その準備を、縁紡が支えます。</p>
      </section>

      <section className="enSection" id="flow">
        <div className="enSectionHead">
          <p className="enEyebrow">HOW IT WORKS</p>
          <p className="enSectionCatch">写真とひとことから、発信を準備</p>
          <h2>
            <span className="enOnlyDesktop">
              ひとつの活動が<br />
              発信になるまで
            </span>
            <span className="enOnlyMobile">
              ひとつの活動が<br />
              発信になるまで
            </span>
          </h2>
          <p>
            たとえば、地域の防災訓練に参加した日。写真と活動メモをもとに、Puku Labが媒体に合う原稿を準備し、本人の確認後に投稿します。
          </p>
        </div>

        <div className="enActivityExample">
          <div className="enExampleInput">
            <span className="enExampleLabel">議員本人が共有</span>
            <h3>地域の防災訓練に参加</h3>
            <p className="enExampleMemo">○○地区の防災訓練へ参加。<br />自治会の皆さんと、災害時の避難経路について意見交換。</p>
            <span className="enPhotoNote">添付：現場の写真3枚</span>
            <p>文章が整っていなくても大丈夫。発信に必要なことは確認しながら整理します。</p>
          </div>
          <div className="enExampleOutput">
            <span className="enExampleLabel">Puku Labが発信用に整理</span>
            <div className="enSamplePosts">
              <article><h4>X｜短く活動を伝える</h4><p>本日は○○地区の防災訓練に参加しました。自治会の皆さんと、災害時の避難経路について意見交換。日頃から備えを確かめる大切な機会となりました。</p></article>
              <article><h4>Instagram｜写真と一緒に伝える</h4><p>○○地区の防災訓練へ。<br />自治会の皆さんと避難経路について話し合いました。訓練の様子を写真とともにお届けします。</p></article>
              <article><h4>LINE｜活動をまとめて届ける</h4><p>【地域での活動報告】<br />○○地区の防災訓練に参加し、避難経路について自治会の皆さんと意見交換しました。今回はその様子をご報告します。</p></article>
            </div>
          </div>
          <div className="enExampleApproval"><strong>議員本人が内容を確認・承認</strong><span aria-hidden="true">→</span><strong>各媒体へ投稿</strong></div>
          <p className="enExampleDisclaimer">※説明用の架空サンプルです。実際の実績・投稿ではありません。対象媒体・制作範囲はプランとご相談内容に応じて決定します。</p>
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

      <section className="enExperienceSection" id="experience">
        <div className="enExperienceInner">
          <div>
            <p className="enEyebrow">FIELD EXPERIENCE</p>
            <p className="enSectionCatch">政治の仕事が分かる相手に任せる</p>
            <h2>
              <span className="enOnlyDesktop">
                「もっと投稿して<br />
                ください」だけでは<br />
                終わらせない
              </span>
              <span className="enOnlyMobile">
                「もっと投稿して<br />
                ください」だけでは<br />
                終わらせない
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

      <section className="enSection" id="features">
        <div className="enSectionHead center">
          <p className="enEyebrow">FEATURES</p>
          <p className="enSectionCatch">活動する時間を、発信の準備で圧迫しない</p>
          <h2>縁紡でできること</h2>
          <p>任せたい仕事も、自分で進めたい仕事も。今の事務所体制に合う使い方を選べます。</p>
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

      <section className="enSection" id="price">
        <div className="enSectionHead center">
          <p className="enEyebrow">PRICE</p>
          <p className="enSectionCatch">どこまで任せるかで、選べます。</p>
          <h2>今の体制に合う支援を</h2>
          <p>日々のSNS運用から、発信全体の相談まで。まずは任せたい範囲を目安にお選びください。表示価格はすべて税込です。</p>
        </div>
        <h3 className="enPriceGroupTitle">運用を任せる</h3>
        <div className="enPricingGrid enManagedPlans">
          {["basic", "pr", "room"].map((key) => {
            const plan = plans[key];
            return <article className={`enPriceCard ${key === "pr" ? "featured" : ""}`} key={key}>
              {key === "pr" && <span className="enRecommend">複数媒体の発信に</span>}
              <small>{plan.label}</small>
              <h3>{plan.name}</h3>
              <p className="enPlanPurpose">{plan.note}</p>
              <div className="enPriceValue"><strong>{yen(plan.monthly)}</strong><span>円 / 月</span></div>
              <ul>{plan.features.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link className="enButton secondary" to={`/contact?type=entsumugi&plan=${encodeURIComponent(plan.name)}`}>このプランを相談する →</Link>
            </article>;
          })}
        </div>
        <p className="enPriceFinePrint">運用量は活動量・媒体・制作内容に応じて調整します。初期設定や通常範囲を超える制作等は、内容と費用を事前にご案内します。</p>
        <h3 className="enPriceGroupTitle">自分で使う</h3>
        <div className="enSelfPlans">
          {["app", "ai"].map((key) => <article key={key}>
            <div><h3>{plans[key].name}</h3><p>{plans[key].note}</p></div>
            <strong>{yen(plans[key].monthly)}<small>円 / 月</small></strong>
            <Link to={`/entsumugi/estimate?plan=${key}`}>料金目安を見る →</Link>
          </article>)}
        </div>
        <p className="enPriceFinePrint">アプリ・AI秘書コースには人的な原稿作成・投稿代行は含みません。AI利用には月間上限があり、追加枠は1枠1,000円です。利用枠は相談時にご案内します。</p>
        <details className="enOtherSupport"><summary>必要な時だけ頼みたい方へ</summary><p>原稿などの単発制作は3,300円〜。AI秘書をご利用の方には、繁忙月の支援を含めて月額66,000円とする使い方もご相談いただけます。対象範囲・時期は事前に確認します。</p></details>
        <div className="enToolsIntro">
          <div className="enToolsLead">
            <p className="enEyebrow">NEXT STEP</p>
            <h2>
              <span className="enOnlyDesktop">知りたいことから 次へ</span>
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
              <p>準備状況を選んで、自分の場合の初月と翌月以降の料金目安を確認。</p>
              <b>料金目安を見る →</b>
            </Link>
          </div>
          <p className="enToolDisclaimer">
            ※ 診断・シミュレーション結果は目安です。実際の作業内容・素材・運用状況により、適したコースや料金が前後する場合があります。正式な内容はヒアリング後に確認します。
          </p>
        </div>
      </section>

      <section className="enDeviceSection">
        <div className="enDeviceInner">
          <div className="enDeviceCopy">
            <p className="enEyebrow">PC + SMARTPHONE</p>
            <p className="enSectionCatch">任せやすくするための、縁紡。</p>
            <h2>
              <span className="enOnlyDesktop">
                同じ情報を<br />
                どこからでも確認
              </span>
              <span className="enOnlyMobile">
                同じ情報を<br />
                どこからでも確認
              </span>
            </h2>
            <p>
              外出先ではスマートフォン、事務所ではPC。議員本人・事務所スタッフ・Puku Labが、許可された共有範囲で予定や原稿の進み具合を確認できます。
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

      <section className="enAiSecretarySection" id="ai-secretary">
        <div className="enAiSecretaryInner">
          <div className="enAiSecretaryCopy">
            <p className="enEyebrow">AI SECRETARY</p>
            <p className="enSectionCatch">「あれどこだっけ？」を減らす</p>
            <h2>
              <span className="enOnlyDesktop">
                縁紡の中に<br />
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
              <p>月間の利用上限があります。利用枠は相談時にご案内し、追加は1枠1,000円です。</p>
            </div>
          </div>

          <div className="enAiSecretaryPanel" aria-label="AI秘書でできる主なこと">
            <div className="enAiSecretaryTop">
              <span className="enAiSecretaryMark">AI</span>
              <div>
                <strong>何をお手伝いしますか？</strong>
                <small>AI秘書への相談例</small>
              </div>
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
            <p className="enSectionCatch">公開前の最終判断は、議員本人。</p>
            <h2>
              <span className="enOnlyDesktop">必要な情報だけを<br />必要な範囲へ</span>
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

      <section className="enStatement">
        <div className="enStatementInner">
          <p className="enEyebrow">OUR APPROACH</p>
          <h2>
            <span className="enOnlyDesktop">SNSは魔法ではありません</span>
            <span className="enOnlyMobile">SNSは<br />魔法ではありません</span>
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

      <section className="enOnboardingSection">
        <div className="enOnboardingInner">
          <div className="enSectionHead center">
            <p className="enEyebrow">START FLOW</p>
            <p className="enSectionCatch">問い合わせのあとも迷わない</p>
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
              <span className="enOnlyDesktop">気になるところを<br />先に</span>
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
            <p className="enSectionCatch">活動を積み重ね きちんと市民へ届ける</p>
            <h2>
              <span className="enOnlyDesktop">今の発信方法を聞かせてください</span>
              <span className="enOnlyMobile">今の発信方法を<br />聞かせてください</span>
            </h2>
            <p>SNSの状況や事務所体制を確認しながら、縁紡が合うか、どの使い方が合うかを一緒に整理します。コースが決まっていなくてもご相談いただけます。</p>
          </div>
          <div className="enFinalActions">
            <Link className="enButton primary" to="/contact?type=entsumugi">縁紡について相談する →</Link>
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
