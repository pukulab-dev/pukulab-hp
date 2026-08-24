import { Link, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Questionnaire from "./pages/Questionnaire";
import Contact from "./pages/Contact";
import Experiments from "./pages/Experiments";
import About from "./pages/About";
import Secret from "./pages/Secret";
import Kanlog from "./pages/Kanlog";
import Game from "./pages/Game";
import Gallery from "./pages/Gallery";
import GalleryCategory from "./pages/GalleryCategory";
import Works from "./pages/Works";
import WorksIndex from "./pages/WorksIndex";
import Entsumugi from "./pages/Entsumugi";
import PageAssistNav from "./components/PageAssistNav";

import kanlogHomeOgp from "./assets/kanlog-home.png";

const SITE_URL = "https://www.pukulab.com";
const SITE_NAME = "Puku Lab";
const DEFAULT_OGP_IMAGE = "/ogp/pukulab-ogp.png";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.pukulab.makilog";

const defaultDescription =
  "Puku Labは、黒板の中の2D研究室でアプリ・AI画像・遊びの実験を育てている個人開発の研究所です。";

const notFoundDescription =
  "指定されたページは見つかりませんでした。Puku Labのホーム、アプリ紹介、制作相談室、ギャラリーから目的のページを探してみてください。";

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Puku Lab",
  url: SITE_URL,
  description:
    "Puku Labは、アプリ・AIビジュアル・HP制作・LP制作をつなぎながら育てている個人開発の研究所です。",
  sameAs: [
    "https://x.com/pukurin5573607",
    "https://note.com/rich_bison8482",
    "https://www.pixiv.net/users/126319212",
  ],
};

const pageMetaMap = {
  "/": {
    title: "Puku Lab | ワクワクとドキドキが増えていく研究所",
    description:
      "Puku Labは、黒板の中の2D研究室でアプリ・AI画像・遊びの実験を育てている個人開発の研究所です。ワクワクとドキドキが少しずつ増えていくものを作っています。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
    structuredData: [
      organizationData,
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Puku Lab",
        url: SITE_URL,
        description:
          "アプリ、AI画像、HP制作、LP制作、遊びの実験を育てる個人開発の研究所です。",
        publisher: {
          "@type": "Organization",
          name: "Puku Lab",
          url: SITE_URL,
        },
      },
    ],
  },

  "/apps": {
    title: "アプリ紹介 | Puku Lab",
    description:
      "Puku Labで開発しているアプリを紹介しています。巻ログを中心に、これから育っていくプロジェクトもまとめています。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Puku Lab アプリ紹介",
      url: `${SITE_URL}/apps`,
      description:
        "Puku Labで開発しているアプリやプロトタイプを紹介するページです。",
      publisher: {
        "@type": "Organization",
        name: "Puku Lab",
        url: SITE_URL,
      },
    },
  },

  "/apps/kanlog": {
    title: "巻ログ | 漫画・ラノベのコレクション管理アプリ",
    description:
      "巻ログは、持っている漫画やラノベを登録して、自分だけのコレクションと本棚を育てていく漫画・ラノベ管理アプリです。所持巻確認、抜け巻チェック、ダブり買い防止にも役立ちます。",
    image: kanlogHomeOgp,
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "巻ログ",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android",
      url: `${SITE_URL}/apps/kanlog`,
      downloadUrl: PLAY_STORE_URL,
      description:
        "巻ログは、持っている漫画やラノベを登録して、自分だけのコレクションと本棚を育てていく漫画・ラノベ管理アプリです。",
      publisher: {
        "@type": "Organization",
        name: "Puku Lab",
        url: SITE_URL,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
      },
    },
  },

  "/gallery": {
    title: "AIビジュアル実験室 | Puku Lab",
    description:
      "AIを使って作ったイラストや写真風ビジュアルを、実験結果として展示しているPuku LabのAIビジュアル実験室です。",
    image: "/gallery/photo-style/photo-001.png",
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "AIビジュアル実験室",
      url: `${SITE_URL}/gallery`,
      description:
        "AIを使って作ったイラストや写真風ビジュアルを展示するPuku Labのギャラリーページです。",
      publisher: {
        "@type": "Organization",
        name: "Puku Lab",
        url: SITE_URL,
      },
    },
  },

  "/gallery/illustrations": {
    title: "イラスト実験室 | Puku Lab",
    description:
      "Puku Labのイラスト実験室です。水彩・アニメ調・キャラクター絵など、AIで試したビジュアル表現を展示していきます。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
  },

  "/gallery/photo-style": {
    title: "写真風実験室 | Puku Lab",
    description:
      "Puku Labの写真風実験室です。リアル寄りの空気感や、写真風AIビジュアルの実験結果を保管しています。",
    image: "/gallery/photo-style/photo-001.png",
    robots: "index, follow",
  },

  "/gallery/others": {
    title: "没案・試作ログ | Puku Lab",
    description:
      "Puku Labの没案・試作ログです。ロゴ案、UI風画像、試作ビジュアルなど、分類しきれない実験画像を保管しています。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
  },

  "/works": {
    title: "サービス・制作支援 | Puku Lab WORKS",
    description:
      "Puku Labが提供するサービス・制作支援の一覧ページです。HP・LP制作と、地方議員向けSNS運用・情報発信支援サービス『縁紡』を紹介しています。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Puku Lab WORKS",
      url: `${SITE_URL}/works`,
      description:
        "Puku Labが提供するHP・LP制作と、地方議員向け情報発信支援サービス『縁紡』を紹介するサービス一覧ページです。",
      publisher: {
        "@type": "Organization",
        name: "Puku Lab",
        url: SITE_URL,
      },
    },
  },

  "/works/web": {
    title: "HP制作・LP制作・個人向けホームページ制作 | Puku Lab制作相談室",
    description:
      "個人開発者・創作者・小さなお店向けに、ホームページ制作、LP制作、アプリ紹介ページ、ポートフォリオ制作、SNS導線整理をサポートします。全国オンライン対応。料金目安と制作実績も掲載しています。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "個人向けホームページ制作・LP制作",
        serviceType: [
          "ホームページ制作",
          "LP制作",
          "個人向けホームページ制作",
          "小規模ホームページ制作",
          "アプリ紹介ページ制作",
          "ポートフォリオ制作",
          "SNS導線整理",
          "運営導線サポート",
        ],
        url: `${SITE_URL}/works/web`,
        areaServed: {
          "@type": "Country",
          name: "日本",
        },
        description:
          "Puku Labは、個人開発者・創作者・小さなお店向けに、ホームページ制作、LP制作、アプリ紹介ページ制作、SNS導線整理をサポートします。",
        provider: {
          "@type": "Organization",
          name: "Puku Lab",
          url: SITE_URL,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "個人でもホームページ制作を相談できますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "はい。個人開発者、創作者、個人活動、小さなお店など、大きな制作会社に頼むほどではない規模のホームページ制作やLP制作を想定しています。",
            },
          },
          {
            "@type": "Question",
            name: "アプリ紹介ページやサービス紹介LPも作れますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "対応できます。アプリの特徴、画面説明、料金、Google Playや問い合わせへの導線を整理し、1ページで伝わる紹介LPとして制作します。",
            },
          },
          {
            "@type": "Question",
            name: "文章や構成がまだ決まっていなくても相談できますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "大丈夫です。作りたいものがふわっとしている段階でも、誰に何を届けたいか、どのページが必要か、どんな導線にするかを一緒に整理します。",
            },
          },
          {
            "@type": "Question",
            name: "遠方からでも依頼できますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "はい。ホームページ制作やLP制作はオンラインで全国から相談できます。やり取りしながら、必要な情報やページ構成を一緒に整理します。",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Puku Lab",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "WORKS",
            item: `${SITE_URL}/works`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "HP・LP制作",
            item: `${SITE_URL}/works/web`,
          },
        ],
      },
    ],
  },

  "/entsumugi": {
    title: "縁紡 | 地方議員向けSNS運用・情報発信支援サービス | Puku Lab",
    description:
      "縁紡（えにしつむぎ）は、地方議員向けのSNS運用・情報発信支援サービスです。日々の活動、予定、写真、原稿を整理し、継続的な情報発信につなげる仕組みと運用を支援します。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "縁紡",
        alternateName: "えにしつむぎ",
        serviceType: [
          "地方議員向けSNS運用支援",
          "地方議員向け情報発信支援",
          "SNS原稿作成支援",
          "議員活動の情報整理",
        ],
        url: `${SITE_URL}/entsumugi`,
        areaServed: {
          "@type": "Country",
          name: "日本",
        },
        audience: {
          "@type": "Audience",
          audienceType: "地方議員",
        },
        description:
          "地方議員の日々の活動・予定・写真・原稿を整理し、SNSなどで継続的に情報発信する流れを支えるサービスです。",
        provider: {
          "@type": "Organization",
          name: "Puku Lab",
          url: SITE_URL,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Puku Lab",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "WORKS",
            item: `${SITE_URL}/works`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "縁紡",
            item: `${SITE_URL}/entsumugi`,
          },
        ],
      },
    ],
  },

  "/questionnaire": {
    title: "アンケート | Puku Lab",
    description:
      "Puku Labのアプリや今後の開発の参考にするためのアンケートページです。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
  },

  "/contact": {
    title: "お問い合わせ | Puku Lab",
    description:
      "Puku Labへのお問い合わせページです。感想やご相談、HP制作・アプリ制作まわりの連絡はこちらからどうぞ。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
  },

  "/experiments": {
    title: "実験室 | Puku Lab",
    description:
      "Puku Labの実験室ページです。遊び心のある試作やコンテンツを少しずつ育てています。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
  },

  "/about": {
    title: "ぷくりん｜元議員秘書からAI個人開発へ｜Puku Lab",
    description:
      "Puku Lab運営者・ぷくりんのプロフィール。元議員秘書を経てAIを活用した個人開発を始め、漫画・ラノベ管理アプリ『巻ログ』をGoogle Playで公開。HP・LP制作、文章、AIビジュアルにも取り組んでいます。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/about#profilepage`,
        name: "Puku Lab運営者・ぷくりんのプロフィール",
        url: `${SITE_URL}/about`,
        description:
          "元議員秘書を経てAIを活用した個人開発を始めた、Puku Lab運営者・ぷくりんのプロフィールページです。",
        dateModified: "2026-07-24",
        mainEntity: {
          "@type": "Person",
          "@id": `${SITE_URL}/about#pukurin`,
          name: "ぷくりん",
          alternateName: "pukurin",
          url: `${SITE_URL}/about`,
          image: `${SITE_URL}/icon.png`,
          description:
            "元議員秘書として3年間勤務した後、AIを活用した個人開発を開始。漫画・ラノベ管理アプリ『巻ログ』、Puku Lab公式サイト、HP・LP、AIビジュアルを制作しています。",
          sameAs: [
            "https://x.com/pukurin5573607",
            "https://note.com/rich_bison8482",
            "https://www.pixiv.net/users/126319212",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Puku Lab",
            url: SITE_URL,
          },
          knowsAbout: [
            "AIを活用した個人開発",
            "Androidアプリ開発",
            "漫画・ラノベ管理アプリ",
            "ホームページ制作",
            "LP制作",
            "Web導線設計",
            "文章構成",
            "AIビジュアル制作",
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Puku Lab",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "ぷくりんについて",
            item: `${SITE_URL}/about`,
          },
        ],
      },
    ],
  },

  "/secret": {
    title: "ひみつの休憩室 | Puku Lab",
    description:
      "Puku Labのすみっこにある、見つけた人だけのひみつの休憩室です。",
    image: DEFAULT_OGP_IMAGE,
    robots: "noindex, nofollow",
  },

  "/game": {
    title: "ゲーム実験室 | Puku Lab",
    description:
      "Puku Labのゲーム実験室です。ミニゲームや遊びの入口を準備しています。",
    image: DEFAULT_OGP_IMAGE,
    robots: "index, follow",
  },
};

function getPageMeta(pathname) {
  return (
    pageMetaMap[pathname] || {
      title: "ページが見つかりません | Puku Lab",
      description: notFoundDescription,
      image: DEFAULT_OGP_IMAGE,
      robots: "noindex, follow",
    }
  );
}

function getCanonicalUrl(pathname) {
  if (pathname === "/") {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${pathname}`;
}

function getAbsoluteImageUrl(image) {
  if (!image) {
    return `${SITE_URL}${DEFAULT_OGP_IMAGE}`;
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  if (image.startsWith("/")) {
    return `${SITE_URL}${image}`;
  }

  return `${SITE_URL}/${image}`;
}

function upsertMetaByName(name, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

function upsertJsonLd(data) {
  const id = "pukulab-json-ld";
  const oldTag = document.getElementById(id);

  if (!data) {
    if (oldTag) {
      oldTag.remove();
    }

    return;
  }

  const tag = oldTag || document.createElement("script");
  tag.id = id;
  tag.type = "application/ld+json";
  tag.textContent = JSON.stringify(data);

  if (!oldTag) {
    document.head.appendChild(tag);
  }
}

function SeoTracker() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const meta = getPageMeta(pathname);
    const canonicalUrl = getCanonicalUrl(pathname);
    const ogImageUrl = getAbsoluteImageUrl(meta.image);

    document.title = meta.title;

    upsertMetaByName("description", meta.description);
    upsertMetaByName("robots", meta.robots || "index, follow");

    upsertCanonical(canonicalUrl);

    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertMetaByProperty("og:locale", "ja_JP");
    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:title", meta.title);
    upsertMetaByProperty("og:description", meta.description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", ogImageUrl);

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", meta.title);
    upsertMetaByName("twitter:description", meta.description);
    upsertMetaByName("twitter:image", ogImageUrl);

    upsertJsonLd(meta.structuredData);

    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: meta.title,
        page_location: canonicalUrl,
        page_path: pathname,
      });
    }
  }, [location]);

  return null;
}

function SiteFooter() {
  return (
    <footer className="siteFooter" aria-label="サイト情報">
      <p className="siteFooterBrand">Puku Lab</p>
      <p className="siteFooterText">Small Web & App Lab</p>
      <p className="siteFooterCopy">© 2026 Puku Lab</p>
    </footer>
  );
}

function NotFound() {
  return (
    <main className="siteFrame innerPageFrame">
      <section className="chalkboard pageBoard">
        <header className="pageHead">
          <p className="smallTag">404 / LOST IN THE LAB</p>
          <h2>ページが見つかりません</h2>
          <p>
            指定されたページは、まだ研究所の中にないみたいです。
            <br />
            目的の部屋に近い入口から、もう一度探してみてください。
          </p>
        </header>

        <div className="metricPanel">
          <p>ROUTE MEMO</p>
          <strong>
            アプリ、制作相談室、ギャラリーなどの正式な入口へ案内します。
          </strong>
        </div>

        <div className="pageActions">
          <Link className="navButton" to="/">
            ホームへ戻る
          </Link>
          <Link className="navButton ghost" to="/apps/kanlog">
            巻ログを見る
          </Link>
          <Link className="navButton ghost" to="/works">
            制作相談室へ
          </Link>
          <Link className="navButton ghost" to="/gallery">
            ギャラリーへ
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <SeoTracker />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/apps/kanlog" element={<Kanlog />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/gallery/illustrations"
          element={<GalleryCategory category="illustrations" />}
        />
        <Route
          path="/gallery/photo-style"
          element={<GalleryCategory category="photo-style" />}
        />
        <Route
          path="/gallery/others"
          element={<GalleryCategory category="others" />}
        />

        <Route path="/works" element={<WorksIndex />} />
        <Route path="/works/web" element={<Works />} />
        <Route path="/entsumugi" element={<Entsumugi />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/about" element={<About />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/game" element={<Game />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <SiteFooter />
      <PageAssistNav />
    </>
  );
}