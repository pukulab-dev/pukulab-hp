import { Routes, Route, useLocation } from "react-router-dom";
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
import PageAssistNav from "./components/PageAssistNav";

const SITE_URL = "https://www.pukulab.com";

const pageTitleMap = {
  "/": "Puku Lab | ワクワクとドキドキが増えていく研究所",
  "/apps": "アプリ紹介 | Puku Lab",
  "/apps/kanlog": "巻ログ | Puku Lab",
  "/gallery": "AIビジュアル実験室 | Puku Lab",
  "/gallery/illustrations": "イラスト実験室 | Puku Lab",
  "/gallery/photo-style": "写真風実験室 | Puku Lab",
  "/gallery/others": "没案・試作ログ | Puku Lab",
  "/works": "HP制作・LP制作・運営導線サポート | Puku Lab制作相談室",
  "/questionnaire": "アンケート | Puku Lab",
  "/contact": "お問い合わせ | Puku Lab",
  "/experiments": "実験室 | Puku Lab",
  "/about": "この研究所について | Puku Lab",
  "/secret": "ひみつの休憩室 | Puku Lab",
  "/game": "ゲーム | Puku Lab",
};

const pageDescriptionMap = {
  "/":
    "Puku Labは、黒板の中の2D研究室でアプリ・AI画像・遊びの実験を育てている個人開発の研究所です。ワクワクとドキドキが少しずつ増えていくものを作っています。",
  "/apps":
    "Puku Labで開発しているアプリを紹介しています。巻ログを中心に、これから育っていくプロジェクトもまとめています。",
  "/apps/kanlog":
    "巻ログは、持っている漫画やラノベを登録して、自分だけのコレクションと本棚を育てていく漫画・ラノベ管理アプリです。",
  "/gallery":
    "AIを使って作ったイラストや写真風ビジュアルを、実験結果として展示しているPuku LabのAIビジュアル実験室です。",
  "/gallery/illustrations":
    "Puku Labのイラスト実験室です。水彩・アニメ調・キャラクター絵など、AIで試したビジュアル表現を展示していきます。",
  "/gallery/photo-style":
    "Puku Labの写真風実験室です。リアル寄りの空気感や、写真風AIビジュアルの実験結果を保管しています。",
  "/gallery/others":
    "Puku Labの没案・試作ログです。ロゴ案、UI風画像、試作ビジュアルなど、分類しきれない実験画像を保管しています。",
  "/works":
    "個人開発者・創作者・小さなお店向けに、HP制作、LP制作、アプリ紹介ページ、SNS・note・pixivの導線整理をサポートします。料金目安と制作実績も掲載しています。",
  "/questionnaire":
    "Puku Labのアプリや今後の開発の参考にするためのアンケートページです。",
  "/contact":
    "Puku Labへのお問い合わせページです。感想やご相談、HP制作・アプリ制作まわりの連絡はこちらからどうぞ。",
  "/experiments":
    "Puku Labの実験室ページです。遊び心のある試作やコンテンツを少しずつ育てています。",
  "/about":
    "Puku Labを運営しているぷくりんと、研究所の相棒るのについて紹介しています。",
  "/secret":
    "Puku Labのすみっこにある、見つけた人だけのひみつの休憩室です。",
  "/game":
    "Puku Labのゲーム実験室です。ミニゲームや遊びの入口を準備しています。",
};

function SeoTracker() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const title = pageTitleMap[pathname] || "Puku Lab";
    const description =
      pageDescriptionMap[pathname] ||
      "Puku Labは、黒板の中の2D研究室でアプリ・AI画像・遊びの実験を育てている個人開発の研究所です。";

    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute("href", `${SITE_URL}${pathname}`);
    }

    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: title,
        page_location: `${SITE_URL}${pathname}`,
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

        <Route path="/works" element={<Works />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/about" element={<About />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/game" element={<Game />} />
      </Routes>

      <SiteFooter />
      <PageAssistNav />
    </>
  );
}