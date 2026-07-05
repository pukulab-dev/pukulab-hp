import { Link } from "react-router-dom";
import "./Works.css";

const keywordBadges = [
  "ホームページ制作",
  "LP制作",
  "個人向けHP",
  "小規模サイト",
  "アプリ紹介ページ",
  "ポートフォリオ制作",
  "SNS導線整理",
  "全国オンライン対応",
];

const targetUsers = [
  {
    title: "個人開発者",
    text: "アプリやWebサービスの紹介ページ、Google PlayやSNSへの導線を整えたい人。",
  },
  {
    title: "創作者・発信者",
    text: "X、note、pixiv、作品ページなどをつなぐ活動拠点がほしい人。",
  },
  {
    title: "小さなお店・個人活動",
    text: "大きな制作会社に頼むほどではないけど、ちゃんと見せるHPがほしい人。",
  },
  {
    title: "世界観を整理したい人",
    text: "文章、画像、見せ方、導線まで含めて一緒に考えてほしい人。",
  },
];

const productCards = [
  {
    title: "個人活動用ホームページ制作",
    label: "HOME PAGE",
    text: "活動内容、プロフィール、サービス内容、リンク、問い合わせ先をまとめた小さな拠点を作ります。",
  },
  {
    title: "アプリ・サービス紹介LP制作",
    label: "APP / SERVICE LP",
    text: "アプリやWebサービスの魅力、使い方、料金、ダウンロード導線を1ページで伝える紹介ページを作ります。",
  },
  {
    title: "作品・ポートフォリオページ",
    label: "PORTFOLIO",
    text: "イラスト、写真、文章、制作物などを見やすくまとめるポートフォリオページを整えます。",
  },
  {
    title: "SNS・note・pixiv導線整理",
    label: "ROUTE DESIGN",
    text: "バラバラになりがちな発信場所をつなぎ、見に来た人が迷わない導線を作ります。",
  },
];

const serviceCards = [
  {
    title: "HP制作",
    label: "WEB SITE",
    text: "個人活動・小さなお店・作品紹介など、最初の拠点になるホームページを作ります。",
  },
  {
    title: "LP制作",
    label: "LANDING PAGE",
    text: "アプリ、サービス、イベント、企画などを分かりやすく伝えるランディングページを整えます。",
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

const seoSupportCards = [
  {
    title: "検索される言葉をページ内に整理",
    text: "HP制作、LP制作、アプリ紹介ページ、個人向けホームページなど、探している人が使いそうな言葉を自然に入れます。",
  },
  {
    title: "問い合わせまでの導線を設計",
    text: "見に来た人が、料金・制作内容・実績・相談先を迷わず確認できるようにページ構成を整えます。",
  },
  {
    title: "SNSや外部サービスと接続",
    text: "X、note、pixiv、Google Play、作品ページなどをつなぎ、活動全体の入口と出口を作ります。",
  },
  {
    title: "公開後も育てやすい形にする",
    text: "作って終わりではなく、反応を見ながら文章や導線を改善しやすいホームページにします。",
  },
];

const pricePlans = [
  {
    title: "既存ページの見直し・文章整理",
    price: "3万〜8万円",
    text: "今あるページの構成、文章、導線を見直して、伝わりやすく整えます。",
  },
  {
    title: "1ページLP制作 ライト",
    price: "8万〜15万円",
    text: "文章と構成を絞った、シンプルな紹介ページを制作します。",
  },
  {
    title: "1ページLP制作 標準",
    price: "15万〜28万円",
    text: "構成、文章、デザイン、導線までしっかり整えるLP制作です。",
  },
  {
    title: "小規模HP制作 3〜5ページ",
    price: "18万〜35万円",
    text: "トップ、紹介、実績、問い合わせなどを含む小さなホームページ制作です。",
  },
  {
    title: "アプリ・サービス紹介LP",
    price: "12万〜25万円",
    text: "アプリ画面や機能説明を整理し、ダウンロードや問い合わせにつなげます。",
  },
  {
    title: "運営導線サポート",
    price: "月2万〜5万円",
    text: "SNS、note、pixiv、アプリ、HPの導線や更新方針を一緒に整えます。",
  },
  {
    title: "AI制作サポート",
    price: "2万〜8万円",
    text: "AI画像、文章案、世界観づくり、告知用素材の方向性を一緒に作ります。",
  },
];

const worksCases = [
  {
    title: "Puku Lab 公式サイト",
    label: "OFFICIAL SITE",
    text: "黒板内の2D研究室をテーマに、アプリ・AI画像・制作相談をつなぐ拠点として制作。",
  },
  {
    title: "Puku Lab 制作相談室",
    label: "WORKS LP",
    text: "HP制作・LP制作・料金目安・問い合わせ導線をまとめた、Puku Labの営業用LPとして制作。",
  },
  {
    title: "AIビジュアル実験室",
    label: "GALLERY",
    text: "AIで作ったビジュアル実験を展示し、pixivやPuku Lab内への回遊導線を設計。",
  },
  {
    title: "外部制作実績",
    label: "COMING SOON",
    text: "これから制作相談やサポート事例が増えたら、ここに少しずつ追加していきます。",
  },
];

const appCases = [
  {
    title: "巻ログ",
    label: "APP / GOOGLE PLAY",
    text: "漫画・ラノベ管理アプリを企画・制作し、Google Play公開まで実施。機能設計、UI、世界観づくりまで含めた個人開発アプリです。",
  },
  {
    title: "巻ログ 紹介LP",
    label: "APP LP / ROUTE",
    text: "アプリの魅力、画面説明、Google Playへの導線、相棒るのの世界観を整理したアプリ紹介LPとして制作。",
  },
];

const processSteps = [
  {
    title: "相談する",
    text: "作りたいもの、困っていること、見せたい世界観を聞かせてください。",
  },
  {
    title: "方向性を決める",
    text: "ページ構成、必要な内容、導線、料金目安を一緒に整理します。",
  },
  {
    title: "小さく作る",
    text: "最初から作り込みすぎず、公開できる形まで丁寧に作ります。",
  },
  {
    title: "公開後に育てる",
    text: "反応を見ながら、文章・導線・見せ方を少しずつ改善していきます。",
  },
];

const faqItems = [
  {
    question: "個人でもホームページ制作を相談できますか？",
    answer:
      "はい。個人開発者、創作者、個人活動、小さなお店など、大きな制作会社に頼むほどではない規模のホームページ制作やLP制作を想定しています。",
  },
  {
    question: "アプリ紹介ページやサービス紹介LPも作れますか？",
    answer:
      "対応できます。アプリの特徴、画面説明、料金、Google Playや問い合わせへの導線を整理し、1ページで伝わる紹介LPとして制作します。",
  },
  {
    question: "文章や構成がまだ決まっていなくても相談できますか？",
    answer:
      "大丈夫です。作りたいものがふわっとしている段階でも、誰に何を届けたいか、どのページが必要か、どんな導線にするかを一緒に整理します。",
  },
  {
    question: "遠方からでも依頼できますか？",
    answer:
      "はい。ホームページ制作やLP制作はオンラインで全国から相談できます。やり取りしながら、必要な情報やページ構成を一緒に整理します。",
  },
];

export default function Works() {
  return (
    <main className="siteFrame innerPageFrame worksPage">
      <section className="chalkboard pageBoard worksBoard">
        <header className="pageHead worksHead">
          <p className="smallTag">WORKS / SUPPORT LAB</p>
          <h1>HP制作・LP制作の制作相談室</h1>
          <p>
            黒板の中の2D研究室から、個人開発者・創作者・小さなお店向けに、
            ホームページ制作、LP制作、アプリ紹介ページ、運営導線づくりをお手伝いします。
          </p>
        </header>

        <section className="worksHero">
          <div className="worksHeroIcon" aria-hidden="true">
            <span className="worksHeroPaper" />
            <span className="worksHeroScreen" />
            <span className="worksHeroPencil" />
            <span className="worksHeroRuler" />
            <span className="worksHeroStar" />
            <span className="worksHeroBubble bubbleA" />
            <span className="worksHeroBubble bubbleB" />
          </div>

          <div className="worksHeroText">
            <p className="worksMiniLabel">SMALL WEB SUPPORT</p>
            <h2>小さく作って、少しずつ育てる。</h2>
            <p>
              Puku Labでは、ただページを作るだけではなく、
              「何を見せるか」「どこへ案内するか」「どう続けるか」まで含めて考えます。
            </p>
            <p>
              個人開発、創作活動、小さなお店、イベント告知など、
              まずは小さな拠点を作りたい時に相談できる制作室です。
            </p>

            <div className="worksHeroActions">
              <Link className="navButton" to="/contact?type=works">
                相談してみる
              </Link>
              <a className="navButton ghost" href="#works-price">
                料金目安を見る
              </a>
            </div>
          </div>
        </section>

        <section className="worksSeoIntro" aria-label="制作相談室の対応内容">
          <p className="worksSectionTag">SEO / SEARCH WORDS</p>
          <h2>個人向けホームページ制作・小規模LP制作を、相談しやすい形で。</h2>
          <p>
            Puku Labの制作相談室では、ホームページ制作、LP制作、アプリ紹介ページ制作、
            ポートフォリオ制作、SNS導線整理などをまとめて相談できます。
            オンラインで全国の個人開発者・創作者・小さなお店の
            Web制作をサポートします。
          </p>

          <div className="worksKeywordList" aria-label="対応キーワード">
            {keywordBadges.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </section>

        <section className="worksSection">
          <div className="worksSectionHead">
            <p className="worksSectionTag">FOR YOU</p>
            <h2>こんな人に向いています</h2>
            <p>
              大きな制作会社に頼むほどではないけれど、
              自分の活動やサービスをちゃんと見せる場所がほしい人向けです。
            </p>
          </div>

          <div className="worksTargetGrid">
            {targetUsers.map((item) => (
              <article className="worksTargetCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="worksSection">
          <div className="worksSectionHead">
            <p className="worksSectionTag">WHAT WE MAKE</p>
            <h2>制作できるもの</h2>
            <p>
              HP単体だけでなく、SNS・note・pixiv・アプリストアなど、
              活動全体の入口と出口をつなぐことを大切にしています。
            </p>
          </div>

          <div className="worksProductGrid">
            {productCards.map((card) => (
              <article className="worksProductCard" key={card.title}>
                <p>{card.label}</p>
                <h3>{card.title}</h3>
                <span>{card.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="worksSection worksSearchSection">
          <div className="worksSectionHead">
            <p className="worksSectionTag">SEARCH SUPPORT</p>
            <h2>検索で見つけてもらうために整えること</h2>
            <p>
              SEOは魔法ではありません。けれど、ページの目的・見出し・文章・導線を整理することで、
              「探している人」に伝わりやすいページへ近づけられます。
            </p>
          </div>

          <div className="worksSeoGrid">
            {seoSupportCards.map((card) => (
              <article className="worksSeoCard" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="worksSection">
          <div className="worksSectionHead">
            <p className="worksSectionTag">MENU</p>
            <h2>お手伝いできること</h2>
          </div>

          <div className="worksServiceGrid">
            {serviceCards.map((card) => (
              <article className="worksServiceCard" key={card.title}>
                <p>{card.label}</p>
                <h3>{card.title}</h3>
                <span>{card.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="worksSection worksPriceSection" id="works-price">
          <div className="worksSectionHead">
            <p className="worksSectionTag">PRICE GUIDE</p>
            <h2>料金の目安</h2>
            <p>
              料金は内容・ページ数・素材の有無によって変わります。
              下記は相談前にイメージしやすくするための目安です。
              正式なお見積もりと請求書の金額は、作業範囲を確認してから決定します。
            </p>
          </div>

          <div className="worksPriceGrid">
            {pricePlans.map((plan) => (
              <article className="worksPriceCard" key={plan.title}>
                <h3>{plan.title}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="worksSection">
          <div className="worksSectionHead">
            <p className="worksSectionTag">WORKS</p>
            <h2>制作実績</h2>
            <p>
              現在は自分のプロジェクトを中心に制作しています。
              Puku Lab自体も、HP制作・LP制作・導線設計の実績として育てています。
            </p>
          </div>

          <div className="worksCaseGrid">
            {worksCases.map((item) => (
              <article className="worksCaseCard" key={item.title}>
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="worksSection">
          <div className="worksSectionHead">
            <p className="worksSectionTag">APP CASE</p>
            <h2>アプリ開発・LP実績</h2>
            <p>
              Webページだけでなく、実際に公開しているアプリと、
              その紹介LP・HP導線まで含めて制作しています。
            </p>
          </div>

          <div className="worksCaseGrid worksAppCaseGrid">
            {appCases.map((item) => (
              <article className="worksCaseCard" key={item.title}>
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="worksSection">
          <div className="worksSectionHead">
            <p className="worksSectionTag">FLOW</p>
            <h2>進め方</h2>
          </div>

          <div className="worksFlow">
            {processSteps.map((step, index) => (
              <div className="worksFlowStep" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <p className="worksNote">
            いきなり大きく作り込むより、まずは見える形にして、
            反応を見ながら少しずつ育てる進め方を大切にしています。
          </p>
        </section>

        <section className="worksSection worksFaqSection">
          <div className="worksSectionHead">
            <p className="worksSectionTag">FAQ</p>
            <h2>よくある質問</h2>
            <p>
              ホームページ制作やLP制作の相談前に、気になりやすいことをまとめました。
            </p>
          </div>

          <div className="worksFaqList">
            {faqItems.map((item) => (
              <details className="worksFaqItem" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="worksCta">
          <p className="worksSectionTag">CONTACT</p>
          <h2>HP制作や運営まわりで困っていたら</h2>
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