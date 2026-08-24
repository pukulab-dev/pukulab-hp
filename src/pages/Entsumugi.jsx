import { Link } from "react-router-dom";
import "./Entsumugi.css";

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
    text: "日程、地域行事、相談対応、議会。日々の活動の中で、SNSだけに時間を使うことはできません。",
  },
  {
    number: "03",
    title: "写真や情報がバラバラになる",
    text: "写真はスマホ、予定は手帳、連絡はLINE。発信に必要な情報が散らばるほど、投稿準備にも時間がかかります。",
  },
];

const flowSteps = [
  {
    number: "01",
    label: "SHARE",
    title: "予定・写真を共有",
    text: "外出先ではスマートフォン、事務所ではPC。活動や写真を縁紡に共有します。",
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
    text: "公開前に内容を確認。承認・修正依頼など、最後の判断は議員本人が行えます。",
  },
  {
    number: "04",
    label: "PUBLISH",
    title: "発信へ",
    text: "確認が終わった内容を、それぞれの媒体に合わせて発信につなげます。",
  },
];

const features = [
  {
    icon: "calendar",
    title: "予定管理",
    text: "日・週・月で活動予定を確認。発信準備の起点として使えます。",
  },
  {
    icon: "pen",
    title: "原稿作成",
    text: "議員本人や事務所から、発信したい内容を原稿として登録できます。",
  },
  {
    icon: "check",
    title: "原稿確認",
    text: "作成された原稿をスマートフォンから確認し、承認・修正依頼ができます。",
  },
  {
    icon: "signal",
    title: "発信状況",
    text: "確認待ち・進行中・投稿済みなど、現在どこまで進んでいるか把握できます。",
  },
  {
    icon: "camera",
    title: "写真共有",
    text: "活動中の写真を、その場から原稿や新しい活動として共有できます。",
  },
  {
    icon: "video",
    title: "動画共有",
    text: "現場で撮影した動画も共有し、発信用素材として活用できます。",
  },
  {
    icon: "chat",
    title: "相談管理",
    text: "相談内容や対応状況を記録し、事務所内で情報を整理できます。",
  },
  {
    icon: "receipt",
    title: "領収書・リンク",
    text: "領収書の記録や、よく使うHP・LINE・Google Driveへの入口もまとめられます。",
  },
];

const experienceStats = [
  {
    number: "約3年",
    label: "議員秘書として勤務",
  },
  {
    number: "8回",
    label: "選挙現場を経験",
  },
  {
    number: "4回",
    label: "実務取りまとめを担当",
  },
];

const plans = [
  {
    label: "SELF SERVICE",
    title: "アプリ利用",
    price: "1,980",
    unit: "円 / 月",
    text: "人的な運用支援を付けず、議員本人・事務所で縁紡を利用するプラン。",
    points: [
      "スマートフォン・PC連携",
      "予定・活動・原稿を管理",
      "相談・領収書を記録",
      "必要な時だけ単品依頼を追加",
    ],
  },
  {
    label: "MONTHLY SUPPORT",
    title: "継続運用",
    price: "66,000〜",
    unit: "円 / 月",
    text: "原稿作成・投稿代行から、媒体に合わせた継続的な情報発信まで支援します。",
    points: [
      "2〜最大5媒体",
      "原稿作成・投稿代行",
      "画像・動画制作",
      "上位プランでは広報全体も支援",
    ],
    featured: true,
  },
  {
    label: "ONE SHOT",
    title: "単品依頼",
    price: "3,300〜",
    unit: "円 / 回",
    text: "原稿・動画・アカウント開設・HP更新など、必要な制作だけ個別に依頼できます。",
    points: [
      "SNS原稿",
      "投稿・簡易画像",
      "動画編集",
      "LINE・HP・LP制作",
    ],
  },
];

function ServiceIcon({ type }) {
  const icons = {
    calendar: (
      <>
        <rect x="5" y="7" width="14" height="12" rx="2" />
        <path d="M8 4v5M16 4v5M5 11h14" />
      </>
    ),
    pen: (
      <>
        <path d="M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z" />
        <path d="M13.5 7.5l3 3" />
      </>
    ),
    check: (
      <>
        <path d="M7 3h8l4 4v14H7Z" />
        <path d="M15 3v5h5M10 14l2 2 4-5" />
      </>
    ),
    signal: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7" />
        <path d="M5.5 5.5a9 9 0 0 0 0 13M18.5 5.5a9 9 0 0 1 0 13" />
      </>
    ),
    camera: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="3" />
        <circle cx="12" cy="13.5" r="4" />
        <path d="M8 7l1.5-3h5L16 7" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="6" width="13" height="12" rx="3" />
        <path d="M16 10l5-3v10l-5-3Z" />
      </>
    ),
    chat: (
      <>
        <path d="M4 5h16v11H9l-5 4Z" />
        <path d="M8 9h8M8 12h6" />
      </>
    ),
    receipt: (
      <>
        <path d="M6 3h12v18l-2-1.5L14 21l-2-1.5L10 21l-2-1.5L6 21Z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </>
    ),
  };

  return (
    <span className="entsumugiFeatureIcon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{icons[type]}</svg>
    </span>
  );
}

export default function Entsumugi() {
  return (
    <main className="entsumugiPage">
      <header className="entsumugiNav">
        <div className="entsumugiNavInner">
          <Link className="entsumugiBrand" to="/entsumugi">
            <span className="entsumugiBrandMark">縁紡</span>
            <span className="entsumugiBrandSub">
              議員サポートデスク
            </span>
          </Link>

          <nav className="entsumugiNavLinks" aria-label="縁紡ページ内ナビ">
            <a href="#about">縁紡とは</a>
            <a href="#flow">仕組み</a>
            <a href="#features">機能</a>
            <a href="#price">料金</a>
          </nav>

          <Link
            className="entsumugiNavCta"
            to="/contact?type=works"
          >
            相談する
          </Link>
        </div>
      </header>

      <section className="entsumugiHero">
        <div className="entsumugiHeroBlob blobOne" aria-hidden="true" />
        <div className="entsumugiHeroBlob blobTwo" aria-hidden="true" />

        <div className="entsumugiHeroInner">
          <div className="entsumugiHeroCopy">
            <div className="entsumugiHeroBadges">
              <span>地方議員向け</span>
              <span>実証運用中</span>
            </div>

            <p className="entsumugiEyebrow">
              ENTSUMUGI / PUBLIC COMMUNICATION SUPPORT
            </p>

            <h1>
              議員活動を、
              <br />
              <strong>発信につなげる。</strong>
            </h1>

            <p className="entsumugiHeroLead">
              対面で会わなくても、SNS運用を任せられる。
              <br />
              PC・スマートフォン・縁紡をつなぎ、
              日々の活動から継続的な情報発信まで支えます。
            </p>

            <div className="entsumugiHeroTags">
              <span>SNS運用代行</span>
              <span>専用アプリ</span>
              <span>原稿制作</span>
              <span>情報共有</span>
            </div>

            <div className="entsumugiHeroActions">
              <Link
                className="entsumugiButton primary"
                to="/contact?type=works"
              >
                まずは相談する
                <span aria-hidden="true">→</span>
              </Link>

              <a
                className="entsumugiButton secondary"
                href="#flow"
              >
                仕組みを見る
              </a>
            </div>

            <p className="entsumugiHeroNote">
              現在、地方議員との実証運用を通じて
              サービス改善を進めています。
            </p>
          </div>

          <div className="entsumugiHeroVisual">
            <div className="entsumugiDesktopMock">
              <div className="entsumugiDesktopSide">
                <div className="mockLogo">縁紡</div>
                <span className="mockSideActive">⌂</span>
                <span>▣</span>
                <span>▤</span>
                <span>◉</span>
                <span>▧</span>
              </div>

              <div className="entsumugiDesktopMain">
                <div className="mockGreeting">
                  <span>☀</span>
                  本日もお疲れさまです。
                </div>

                <div className="mockDashboard">
                  <div className="mockPanel">
                    <small>今後の予定</small>
                    <strong>活動予定を確認</strong>
                    <span>8/25　地域行事</span>
                  </div>

                  <div className="mockPanel">
                    <small>発信の状況</small>
                    <div className="mockStatusGrid">
                      <i>確認待ち</i>
                      <i>作業中</i>
                      <i>投稿予定</i>
                    </div>
                  </div>

                  <div className="mockPanel">
                    <small>原稿</small>
                    <strong>確認待ち 1件</strong>
                    <span>新しい原稿があります</span>
                  </div>

                  <div className="mockPanel">
                    <small>よく使う操作</small>
                    <div className="mockQuick">
                      <i>写真</i>
                      <i>原稿</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="entsumugiPhoneMock">
              <div className="phoneTop">
                <span>☰</span>
                <strong>縁紡</strong>
                <span>♢</span>
              </div>

              <div className="phoneDate">
                <span>8月25日</span>
                <strong>縁紡ホーム</strong>
              </div>

              <div className="phoneTiles">
                <div className="phoneTile blue">
                  <strong>予定<br />管理</strong>
                  <span>▣</span>
                </div>

                <div className="phoneTile orange">
                  <strong>原稿<br />作成</strong>
                  <span>✎</span>
                </div>

                <div className="phoneTile yellow">
                  <strong>原稿<br />確認</strong>
                  <span>✓</span>
                </div>

                <div className="phoneTile red">
                  <strong>発信<br />状況</strong>
                  <span>◉</span>
                </div>

                <div className="phoneTile green">
                  <strong>写真<br />共有</strong>
                  <span>▧</span>
                </div>

                <div className="phoneTile purple">
                  <strong>動画<br />共有</strong>
                  <span>▹</span>
                </div>
              </div>

              <div className="phoneBottom">
                <span>⌂</span>
                <span>▣</span>
                <span>✓</span>
                <span>▧</span>
                <span>☰</span>
              </div>
            </div>

            <div className="entsumugiHeroMiniCard">
              <span>01</span>
              <p>
                スマホで共有
                <strong>→ PC・縁紡へ</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="entsumugiQuickFlow">
        <div className="entsumugiQuickFlowInner">
          <div>
            <span>1</span>
            <strong>共有</strong>
          </div>

          <i>→</i>

          <div>
            <span>2</span>
            <strong>作成</strong>
          </div>

          <i>→</i>

          <div>
            <span>3</span>
            <strong>承認</strong>
          </div>

          <i>→</i>

          <div>
            <span>4</span>
            <strong>投稿</strong>
          </div>
        </div>
      </section>

      <section className="entsumugiSection" id="about">
        <div className="entsumugiSectionHead center">
          <p className="entsumugiSectionLabel">
            WHY ENTSUMUGI?
          </p>
          <p className="entsumugiSectionCatch">
            活動していても、知られなければ伝わらない。
          </p>
          <h2>
            政治に関心がない人へ、
            <br />
            活動の成果を届けるのは難しい。
          </h2>
          <p className="entsumugiSectionLead">
            選挙の時だけではなく、日頃から少しずつ接点を作る。
            そのためには、無理なく発信を続けられる仕組みが必要です。
          </p>
        </div>

        <div className="entsumugiProblemGrid">
          {problemCards.map((item) => (
            <article
              className="entsumugiProblemCard"
              key={item.number}
            >
              <span className="entsumugiNumber">
                {item.number}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="entsumugiPhilosophy">
        <div className="entsumugiPhilosophyInner">
          <p className="entsumugiSectionLabel">
            OUR APPROACH
          </p>

          <h2>SNSは、魔法ではありません。</h2>

          <p>
            投稿さえすれば、すべての人へ情報が届くわけではありません。
            <br />
            まずは関心を持ってくれている人へ、
            日々の活動をきちんと届ける。
          </p>

          <div className="entsumugiPhilosophySteps">
            <div>
              <span>01</span>
              <strong>関心層に届ける</strong>
              <p>まずは、すでに関心を持つ人へ。</p>
            </div>

            <i>→</i>

            <div>
              <span>02</span>
              <strong>継続する</strong>
              <p>無理のない範囲で発信を積み重ねる。</p>
            </div>

            <i>→</i>

            <div>
              <span>03</span>
              <strong>少しずつ広がる</strong>
              <p>信頼が積み重なり、関心の外側へ。</p>
            </div>
          </div>

          <p className="entsumugiPhilosophyBottom">
            一度のバズではなく、
            <strong>活動と発信の積み重ね</strong>
            を支えます。
          </p>
        </div>
      </section>

      <section
        className="entsumugiSection entsumugiFlowSection"
        id="flow"
      >
        <div className="entsumugiSectionHead">
          <p className="entsumugiSectionLabel">
            HOW IT WORKS
          </p>
          <p className="entsumugiSectionCatch">
            会わなくても、SNS運用を任せられる。
          </p>
          <h2>
            活動から投稿までを、
            <br />
            ひとつの流れへ。
          </h2>
          <p className="entsumugiSectionLead">
            予定や写真を共有するだけで、対面の打ち合わせがなくても
            発信準備が進められる仕組みを整えています。
          </p>
        </div>

        <div className="entsumugiFlowGrid">
          {flowSteps.map((step, index) => (
            <article
              className="entsumugiFlowCard"
              key={step.number}
            >
              <div className="entsumugiFlowCardTop">
                <span className="entsumugiFlowNumber">
                  {step.number}
                </span>
                <p>{step.label}</p>
              </div>

              <h3>{step.title}</h3>
              <p>{step.text}</p>

              {index < flowSteps.length - 1 ? (
                <span
                  className="entsumugiFlowArrow"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="entsumugiDeviceSection">
        <div className="entsumugiDeviceInner">
          <div className="entsumugiDeviceCopy">
            <p className="entsumugiSectionLabel">
              PC + SMARTPHONE
            </p>
            <p className="entsumugiSectionCatch">
              外出先と事務所をつなぐ。
            </p>
            <h2>
              同じ情報を、
              <br />
              どこからでも確認。
            </h2>

            <p>
              外出先ではスマートフォン。
              事務所ではPC。
              議員本人・事務所スタッフ・共有を許可した縁紡が、
              同じ流れを確認できます。
            </p>

            <div className="entsumugiDevicePoints">
              <span>スマートフォンから活動を登録</span>
              <span>PCで予定・原稿・発信状況を確認</span>
              <span>共有を許可した情報だけ運用に活用</span>
            </div>
          </div>

          <div className="entsumugiDeviceDiagram">
            <div className="deviceCard phone">
              <small>外出先</small>
              <strong>SMARTPHONE</strong>
              <span>活動・写真を共有</span>
            </div>

            <div className="deviceConnect">
              <span>縁紡</span>
              <i>↔</i>
              <small>同じ情報</small>
            </div>

            <div className="deviceCard pc">
              <small>事務所</small>
              <strong>PC</strong>
              <span>予定・原稿を確認</span>
            </div>
          </div>
        </div>
      </section>

      <section className="entsumugiSection" id="features">
        <div className="entsumugiSectionHead center">
          <p className="entsumugiSectionLabel">
            FEATURES
          </p>
          <p className="entsumugiSectionCatch">
            縁紡ひとつで、発信に関わる作業をまとめて管理。
          </p>
          <h2>できること</h2>
          <p className="entsumugiSectionLead">
            予定、原稿、写真、動画、相談、領収書まで。
            よく使う機能への入口を一か所にまとめます。
          </p>
        </div>

        <div className="entsumugiFeatureGrid">
          {features.map((feature) => (
            <article
              className="entsumugiFeatureCard"
              key={feature.title}
            >
              <ServiceIcon type={feature.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="entsumugiBeforeAfter">
        <div className="entsumugiBeforeAfterInner">
          <div className="entsumugiSectionHead center">
            <p className="entsumugiSectionLabel">
              BEFORE / AFTER
            </p>
            <p className="entsumugiSectionCatch">
              情報がつながると、動きやすくなる。
            </p>
            <h2>
              議員本人は、
              <br />
              活動と最終判断に集中。
            </h2>
          </div>

          <div className="entsumugiCompare">
            <div className="entsumugiCompareCard before">
              <span>導入前</span>
              <h3>情報がバラバラ</h3>
              <ul>
                <li>予定は手帳</li>
                <li>写真はスマートフォン</li>
                <li>連絡はLINE</li>
                <li>確認状況は記憶だのみ</li>
              </ul>
              <p>
                探す・送り直す・確認する作業が増えやすい。
              </p>
            </div>

            <div
              className="entsumugiCompareArrow"
              aria-hidden="true"
            >
              →
            </div>

            <div className="entsumugiCompareCard after">
              <span>導入後</span>
              <h3>情報がひとつの流れに</h3>
              <ul>
                <li>予定と活動がつながる</li>
                <li>写真と原稿がつながる</li>
                <li>確認状況と担当が見える</li>
                <li>発信内容が記録に残る</li>
              </ul>
              <p>
                活動と、公開前の最終判断に集中できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="entsumugiExperience">
        <div className="entsumugiExperienceInner">
          <div className="entsumugiExperienceCopy">
            <p className="entsumugiSectionLabel">
              FIELD EXPERIENCE
            </p>

            <p className="entsumugiSectionCatch">
              現場を知っているから、
              続けられる形を考える。
            </p>

            <h2>
              「もっと投稿してください」
              <br />
              だけでは終わらせない。
            </h2>

            <p>
              議員活動には、議会、地域行事、相談対応、
              日程調整など多くの仕事があります。
              情報発信だけに時間を使えないことを、
              実際の政治・選挙現場で経験してきました。
            </p>

            <p>
              だから縁紡では、
              投稿作業だけではなく、
              <strong>
                活動を記録し、整理し、発信につなげる仕組み
              </strong>
              から支えます。
            </p>
          </div>

          <div className="entsumugiExperienceStats">
            {experienceStats.map((item) => (
              <article key={item.label}>
                <strong>{item.number}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <p className="entsumugiExperienceNote">
            ※ 衆院選1回・参院選1回・市長選1回・県議選2回・市議選3回を経験。
            うち県議選1回・市議選3回では実務取りまとめを担当。
          </p>
        </div>
      </section>

      <section
        className="entsumugiSection entsumugiPriceSection"
        id="price"
      >
        <div className="entsumugiSectionHead center">
          <p className="entsumugiSectionLabel">
            PRICE
          </p>
          <p className="entsumugiSectionCatch">
            必要な支援だけを、無理なく続けられる形へ。
          </p>
          <h2>3つの利用方法</h2>
          <p className="entsumugiSectionLead">
            自分で管理するか、継続して任せるか、
            必要な時だけ依頼するか。
            支援する範囲に合わせて選べます。
          </p>
        </div>

        <div className="entsumugiPlanGrid">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`entsumugiPlanCard ${
                plan.featured ? "featured" : ""
              }`}
            >
              {plan.featured ? (
                <span className="entsumugiRecommend">
                  おすすめ
                </span>
              ) : null}

              <p className="entsumugiPlanLabel">
                {plan.label}
              </p>
              <h3>{plan.title}</h3>

              <div className="entsumugiPrice">
                <small>月額・税込</small>
                <strong>{plan.price}</strong>
                <span>{plan.unit}</span>
              </div>

              <p className="entsumugiPlanText">
                {plan.text}
              </p>

              <ul>
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="entsumugiPriceNote">
          ※ 継続運用は支援範囲により
          月額66,000円・99,000円・148,000円のプランがあります。
          特別対応・選挙期間・大型制作物などは事前に内容と金額を確認します。
        </p>
      </section>

      <section className="entsumugiFinalCta">
        <div className="entsumugiFinalCtaInner">
          <div>
            <p className="entsumugiSectionLabel">
              CONTACT
            </p>
            <p className="entsumugiSectionCatch">
              活動を積み重ね、きちんと市民へ届ける。
            </p>
            <h2>
              その継続を、
              <br />
              縁紡が支えます。
            </h2>

            <p>
              現在の発信方法、事務所の体制、
              希望する支援範囲を確認しながら、
              最適な使い方を一緒に整理します。
            </p>
          </div>

          <div className="entsumugiFinalActions">
            <Link
              className="entsumugiButton primary large"
              to="/contact?type=works"
            >
              まずは相談する
              <span aria-hidden="true">→</span>
            </Link>

            <a
              className="entsumugiButton secondary large"
              href={SERVICE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              縁紡を利用中の方
            </a>
          </div>
        </div>
      </section>

      <footer className="entsumugiFooter">
        <div>
          <strong>縁紡</strong>
          <span>議員サポートデスク</span>
        </div>

        <p>
          地方議員向けSNS運用・情報発信支援
        </p>

        <Link to="/">
          運営・開発 Puku Lab
        </Link>
      </footer>
    </main>
  );
}