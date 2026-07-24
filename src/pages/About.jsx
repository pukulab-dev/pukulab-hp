import { Link } from "react-router-dom";
import "./About.css";

const NOTE_URL = "https://note.com/rich_bison8482";
const X_URL = "https://x.com/pukurin5573607";
const PIXIV_URL = "https://www.pixiv.net/users/126319212";

const proofItems = [
  "元議員秘書として3年間勤務",
  "漫画管理アプリをGoogle Playで公開",
  "Puku Lab公式サイト・LPを自作",
  "noteで個人開発の試行錯誤を発信",
];

const storySteps = [
  {
    number: "01",
    label: "SECRETARY",
    title: "伝える仕事を、支える。",
    text: "議員秘書として、日程調整、文章整理、連絡、情報発信などを経験しました。表に出る言葉の前には、事実を整理し、相手に合わせて順番を組み直す仕事があります。",
  },
  {
    number: "02",
    label: "TURNING POINT",
    title: "仕事を離れ、つくる側へ。",
    text: "退職後、AIとの対話をきっかけに個人開発を開始。分からないことを一つずつ調べ、試し、失敗しながら、アプリとホームページを自分の手で形にしてきました。",
  },
  {
    number: "03",
    label: "FIRST RELEASE",
    title: "漫画好きから、アプリ公開へ。",
    text: "『持っている漫画が分からなくなる』という自分の困りごとから、漫画・ラノベ管理アプリ『巻ログ』を企画。AndroidアプリとしてGoogle Playで公開しました。",
  },
  {
    number: "04",
    label: "PUKU LAB",
    title: "点だった活動を、研究所へ。",
    text: "アプリ、HP・LP制作、文章、AIビジュアル、SNS発信をPuku Labに集約。作ることと届けることを、別々にしない個人開発の拠点として育てています。",
  },
];

const experienceCards = [
  {
    label: "APP DEVELOPMENT",
    title: "漫画・ラノベ管理アプリ『巻ログ』",
    text: "企画、機能設計、画面づくり、テスト、Google Play公開、紹介LP、発信まで進めている個人開発アプリです。",
    linkLabel: "巻ログの機能を見る",
    to: "/apps/kanlog",
  },
  {
    label: "WEB / LANDING PAGE",
    title: "Puku Lab公式サイト・制作相談室",
    text: "黒板の中の2D研究室という世界観を軸に、アプリ、実績、発信、問い合わせをつなぐホームページとLPを制作しています。",
    linkLabel: "HP・LP制作の内容を見る",
    to: "/works",
  },
  {
    label: "AI VISUAL",
    title: "AIビジュアル実験室",
    text: "AIで生成したイラストや写真風表現を、そのまま並べるのではなく、用途・空気感・世界観まで考えて展示しています。",
    linkLabel: "AIビジュアルを見る",
    to: "/gallery",
  },
  {
    label: "DEVELOPMENT STORY",
    title: "無職おじさんの個人開発記録",
    text: "うまくいった話だけでなく、審査、失敗、集客の難しさ、AIとのすれ違いまで、開発途中の実感をnoteに残しています。",
    linkLabel: "noteで開発記録を読む",
    href: NOTE_URL,
  },
];

const skillCards = [
  {
    title: "企画を整理する",
    text: "誰に、何を、どう届けるのか。ぼんやりしたアイデアを、作れる単位まで分解します。",
  },
  {
    title: "言葉を組み立てる",
    text: "説明文、キャッチコピー、ページ構成を、読む人が迷わない順番へ整えます。",
  },
  {
    title: "小さく形にする",
    text: "完璧を待たず、まず公開できる形へ。実際の反応を見ながら改善を重ねます。",
  },
  {
    title: "届け方まで考える",
    text: "HP、LP、SNS、note、アプリストアをつなぎ、見つけた人が次へ進める導線を設計します。",
  },
];

const principles = [
  {
    catchCopy: "便利だけで、終わらせない。",
    concrete: "実用性と遊び心",
    text: "役に立つことは大前提。そのうえで、使っていて愛着が湧くこと、また開きたくなる空気も大切にしています。",
  },
  {
    catchCopy: "小さく出して、育てていく。",
    concrete: "公開後の改善",
    text: "最初から完璧な答えを決めず、実際に使い、反応を確かめ、必要なところから少しずつ直していきます。",
  },
  {
    catchCopy: "作るだけでは、届かない。",
    concrete: "制作と発信の接続",
    text: "良いものを作る力と、見つけてもらう力は別です。検索、SNS、記事、問い合わせまで一つの流れとして考えます。",
  },
];

const entryCards = [
  {
    label: "MANGA APP",
    title: "漫画の管理で困っている",
    text: "所持巻、抜け巻、ダブり買いをスマホで確認したい方へ。",
    linkLabel: "漫画管理アプリ『巻ログ』へ",
    to: "/apps/kanlog",
    featured: true,
  },
  {
    label: "WEB SUPPORT",
    title: "HP・LPを相談したい",
    text: "個人活動、創作、アプリ、小さなお店のWeb拠点を整えたい方へ。",
    linkLabel: "個人向けHP・LP制作へ",
    to: "/works",
  },
  {
    label: "STORY / NOTE",
    title: "個人開発の裏側を読みたい",
    text: "AIと試行錯誤しながら、アプリを公開するまでの記録を読みたい方へ。",
    linkLabel: "noteの開発記録へ",
    href: NOTE_URL,
  },
  {
    label: "VISUAL LAB",
    title: "AI画像や世界観を見たい",
    text: "写真風ビジュアル、イラスト、没案や試作を見たい方へ。",
    linkLabel: "AIビジュアル実験室へ",
    to: "/gallery",
  },
];

const faqItems = [
  {
    question: "ぷくりんは、どんな人ですか？",
    answer:
      "元議員秘書として3年間働いた後、AIを活用した個人開発を始めたPuku Labの運営者です。漫画・ラノベ管理アプリ『巻ログ』の開発、HP・LP制作、文章、AIビジュアルなどに取り組んでいます。",
  },
  {
    question: "元議員秘書の経験は、制作にどう活きていますか？",
    answer:
      "情報を整理すること、相手に合わせて言葉を組み直すこと、公開する情報と扱いに注意する情報を分けること、複数の予定や確認を順番に進めることに活きています。",
  },
  {
    question: "AIに全部作ってもらっているのですか？",
    answer:
      "AIは、アイデア整理、文章案、コード、構成を一緒に考える相棒として使っています。ただし、何を作るか、どこに違和感があるか、公開してよい状態かは自分で判断し、実際に触りながら修正しています。",
  },
  {
    question: "Puku Labには、何を相談できますか？",
    answer:
      "個人向けホームページ、LP、アプリ紹介ページ、ポートフォリオ、SNSやnoteを含む運営導線などを相談できます。内容がまだ固まっていない段階でも、目的と必要なページから整理します。",
  },
];

function ExperienceLink({ item }) {
  if (item.href) {
    return (
      <a
        className="aboutCardLink"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.linkLabel}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link className="aboutCardLink" to={item.to}>
      {item.linkLabel}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function EntryLink({ item }) {
  if (item.href) {
    return (
      <a
        className="aboutEntryAction"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.linkLabel}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link className="aboutEntryAction" to={item.to}>
      {item.linkLabel}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export default function About() {
  return (
    <main className="aboutPage">
      <section className="aboutHero" aria-labelledby="about-main-title">
        <div className="aboutHeroDoodles" aria-hidden="true">
          <span className="aboutDoodle aboutDoodleA">idea → build</span>
          <span className="aboutDoodle aboutDoodleB">secretary / creator</span>
          <span className="aboutDoodleStar aboutDoodleStarA" />
          <span className="aboutDoodleStar aboutDoodleStarB" />
          <span className="aboutDoodleLine aboutDoodleLineA" />
          <span className="aboutDoodleLine aboutDoodleLineB" />
        </div>

        <div className="aboutHeroInner">
          <div className="aboutHeroCopy">
            <p className="aboutEyebrow">PUKURIN / PUKU LAB FOUNDER</p>
            <p className="aboutCatchCopy">遠回りから、つくる側へ。</p>
            <h1 className="aboutTitle" id="about-main-title">
              <span className="aboutFixedLine">元議員秘書から</span>
              <br />
              <span className="aboutFixedLine">AI個人開発へ</span>
            </h1>

            <p className="aboutLead">
              Puku Labを運営する「ぷくりん」のプロフィールです。
              議員秘書の仕事を経て、AIを相棒にアプリ開発とホームページ制作を始めました。
              漫画・ラノベ管理アプリ「巻ログ」、Puku Lab公式サイト、LP、記事、
              AIビジュアルを、一つずつ試しながら形にしています。
            </p>

            <div className="aboutProofList" aria-label="ぷくりんの実績と経験">
              {proofItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="aboutHeroActions">
              <Link className="aboutPrimaryButton" to="/apps/kanlog">
                公開したアプリを見る
              </Link>
              <Link className="aboutSecondaryButton" to="/works">
                HP・LP制作を見る
              </Link>
              <a className="aboutTextLink" href="#about-story">
                これまでの経歴を読む
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="aboutIdentityCard" aria-label="ぷくりんのプロフィール概要">
            <div className="aboutIdentityAvatar" aria-hidden="true">
              <span className="aboutAvatarFace">ぷ</span>
              <span className="aboutAvatarBubble bubbleOne" />
              <span className="aboutAvatarBubble bubbleTwo" />
            </div>

            <p className="aboutIdentityLabel">PROFILE NOTE</p>
            <h2>ぷくりん</h2>
            <p className="aboutIdentityRole">
              Puku Lab運営者
              <br />
              個人開発者・Web制作者
            </p>

            <dl className="aboutIdentityFacts">
              <div>
                <dt>前職</dt>
                <dd>議員秘書</dd>
              </div>
              <div>
                <dt>現在</dt>
                <dd>AIを活用した個人開発</dd>
              </div>
              <div>
                <dt>公開</dt>
                <dd>漫画管理アプリ「巻ログ」</dd>
              </div>
              <div>
                <dt>好き</dt>
                <dd>漫画・写真・ものづくり</dd>
              </div>
            </dl>

            <div className="aboutIdentitySocials">
              <a href={NOTE_URL} target="_blank" rel="noopener noreferrer">
                note
              </a>
              <a href={X_URL} target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a href={PIXIV_URL} target="_blank" rel="noopener noreferrer">
                pixiv
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="aboutQuickGuide" aria-label="このページで分かること">
        <p className="aboutQuickGuideLabel">このページで分かること</p>
        <div className="aboutQuickGuideGrid">
          <a href="#about-story">
            <span>01</span>
            <strong>どんな経歴の人か</strong>
          </a>
          <a href="#about-proof">
            <span>02</span>
            <strong>何を実際に作ったか</strong>
          </a>
          <a href="#about-entry">
            <span>03</span>
            <strong>どこから見ればよいか</strong>
          </a>
        </div>
      </section>

      <section className="aboutSection" id="about-story">
        <div className="aboutSectionHeader">
          <p className="aboutSectionMini">STORY / CAREER</p>
          <p className="aboutSectionCatch">元秘書から、個人開発へ。</p>
          <h2>
            <span className="aboutFixedLine">ぷくりんが</span>
            <br />
            <span className="aboutFixedLine">Puku Labを始めるまで</span>
          </h2>
          <p>
            最初からエンジニアだったわけではありません。
            人の活動を支える仕事から、自分のアイデアを形にする仕事へ。
            その途中で身につけた整理力も、現在のものづくりに残っています。
          </p>
        </div>

        <div className="aboutTimeline">
          {storySteps.map((step) => (
            <article className="aboutTimelineItem" key={step.number}>
              <div className="aboutTimelineNumber">{step.number}</div>
              <div className="aboutTimelineText">
                <p>{step.label}</p>
                <h3>{step.title}</h3>
                <span>{step.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="aboutSection aboutSecretarySection">
        <div className="aboutSecretaryIntro">
          <p className="aboutSectionMini">FORMER SECRETARY</p>
          <p className="aboutSectionCatch">伝える前に、整理する。</p>
          <h2>
            <span className="aboutFixedLine">元議員秘書の経験が、</span>
            <br />
            <span className="aboutFixedLine">制作の土台です</span>
          </h2>
          <p>
            秘書の仕事では、目立つ言葉を考える前に、事実、予定、相手、確認先を整理します。
            この経験は、アプリの機能整理や、ホームページの構成、文章づくりにもつながっています。
          </p>
        </div>

        <div className="aboutSecretaryGrid">
          {skillCards.map((item, index) => (
            <article className="aboutSecretaryCard" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aboutSection" id="about-proof">
        <div className="aboutSectionHeader">
          <p className="aboutSectionMini">PROOF / PROJECTS</p>
          <p className="aboutSectionCatch">作ったものが、名刺です。</p>
          <h2>
            <span className="aboutFixedLine">Puku Labで</span>
            <br />
            <span className="aboutFixedLine">形にしてきたもの</span>
          </h2>
          <p>
            肩書きだけではなく、実際に公開したものと、現在も育てている場所を紹介します。
            気になるものから中身を確認できます。
          </p>
        </div>

        <div className="aboutExperienceGrid">
          {experienceCards.map((item) => (
            <article className="aboutExperienceCard" key={item.title}>
              <p className="aboutExperienceLabel">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ExperienceLink item={item} />
            </article>
          ))}
        </div>
      </section>

      <section className="aboutSection aboutAiSection">
        <div className="aboutAiVisual" aria-hidden="true">
          <span className="aboutAiFlask" />
          <span className="aboutAiSpark sparkA" />
          <span className="aboutAiSpark sparkB" />
          <span className="aboutAiNote noteA">idea</span>
          <span className="aboutAiNote noteB">check</span>
          <span className="aboutAiNote noteC">revise</span>
        </div>

        <div className="aboutAiText">
          <p className="aboutSectionMini">AI × HUMAN JUDGMENT</p>
          <p className="aboutSectionCatch">AI任せには、しない。</p>
          <h2>
            <span className="aboutFixedLine">AIは答えではなく、</span>
            <br />
            <span className="aboutFixedLine">ものづくりの相棒</span>
          </h2>
          <p>
            AIには、アイデア整理、文章案、コード、構成の壁打ちを手伝ってもらっています。
            ただし、出てきたものをそのまま採用するわけではありません。
          </p>
          <p>
            何を作るか、誰に届けるか、どこに違和感があるか。
            最後は自分で触り、確かめ、直す。
            Puku Labは、人の判断とAIの速度を組み合わせて育てる研究所です。
          </p>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p className="aboutSectionMini">PRINCIPLES</p>
          <p className="aboutSectionCatch">つくる理由を、置いておく。</p>
          <h2>Puku Labが大切にしていること</h2>
        </div>

        <div className="aboutPrincipleGrid">
          {principles.map((item, index) => (
            <article className="aboutPrincipleCard" key={item.catchCopy}>
              <span className="aboutPrincipleNumber">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="aboutPrincipleConcrete">{item.concrete}</p>
              <h3>{item.catchCopy}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aboutSection" id="about-entry">
        <div className="aboutSectionHeader">
          <p className="aboutSectionMini">CHOOSE YOUR ENTRY</p>
          <p className="aboutSectionCatch">気になる入口から、どうぞ。</p>
          <h2>あなたの目的に近いページへ</h2>
          <p>
            Puku Labには、アプリ、制作相談、開発記録、AIビジュアルがあります。
            いま気になっているものに近い入口を選んでください。
          </p>
        </div>

        <div className="aboutEntryGrid">
          {entryCards.map((item) => (
            <article
              className={`aboutEntryCard ${item.featured ? "featured" : ""}`}
              key={item.title}
            >
              {item.featured ? (
                <span className="aboutRecommended">代表プロジェクト</span>
              ) : null}
              <p className="aboutEntryLabel">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <EntryLink item={item} />
            </article>
          ))}
        </div>
      </section>

      <section className="aboutSection aboutFaqSection">
        <div className="aboutSectionHeader">
          <p className="aboutSectionMini">QUESTIONS</p>
          <p className="aboutSectionCatch">知ってから、相談できる。</p>
          <h2>ぷくりんとPuku Labについて</h2>
        </div>

        <div className="aboutFaqList">
          {faqItems.map((item) => (
            <details className="aboutFaqItem" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="aboutFinalCta">
        <p className="aboutSectionMini">NEXT ACTION</p>
        <p className="aboutFinalCatch">つくったものから、話そう。</p>
        <h2>もう少しPuku Labを見てみませんか？</h2>
        <p>
          漫画管理アプリを試す、制作内容を見る、開発の裏側を読む。
          まずは気になる場所を一つだけ、のぞいてみてください。
        </p>

        <div className="aboutFinalActions">
          <Link className="aboutPrimaryButton" to="/apps/kanlog">
            巻ログを見る
          </Link>
          <Link className="aboutSecondaryButton" to="/works">
            制作相談室を見る
          </Link>
          <Link className="aboutSecondaryButton" to="/contact?type=works">
            ぷくりんに相談する
          </Link>
        </div>
      </section>
    </main>
  );
}