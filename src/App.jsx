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
import PageAssistNav from "./components/PageAssistNav";

const pageTitleMap = {
  "/": "Puku Lab | ワクワクとドキドキが増えていく研究所",
  "/apps": "アプリ紹介 | Puku Lab",
  "/apps/kanlog": "巻ログ | Puku Lab",
  "/questionnaire": "アンケート | Puku Lab",
  "/contact": "お問い合わせ | Puku Lab",
  "/experiments": "実験室 | Puku Lab",
  "/about": "この研究所について | Puku Lab",
  "/secret": "CHALK CODE | Puku Lab",
  "/game": "ゲーム | Puku Lab",
};

const pageDescriptionMap = {
  "/":
    "Puku Labは、アプリ・記事・実験コンテンツをつなぐ個人開発の研究所です。ワクワクとドキドキが少しずつ増えていくものを作っています。",
  "/apps":
    "Puku Labで開発しているアプリを紹介しています。巻ログを中心に、これから育っていくプロジェクトもまとめています。",
  "/apps/kanlog":
    "巻ログは、持っている漫画を記録してダブり買いを防ぎながら、自分だけの本棚を育てていく漫画管理アプリです。",
  "/questionnaire":
    "Puku Labのアプリや今後の開発の参考にするためのアンケートページです。",
  "/contact":
    "Puku Labへのお問い合わせページです。感想やご相談、連絡はこちらからどうぞ。",
  "/experiments":
    "Puku Labの実験室ページです。遊び心のある試作やコンテンツを少しずつ育てています。",
  "/about":
    "Puku Labを運営しているぷくりんと、研究所の相棒るのについて紹介しています。",
  "/secret":
    "Puku Labの隠しページです。",
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
      "Puku Labは、アプリ・記事・実験コンテンツをつなぐ個人開発の研究所です。";

    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute("href", `https://pukulab.com${pathname}`);
    }

    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: title,
        page_location: `https://pukulab.com${pathname}`,
        page_path: pathname,
      });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <SeoTracker />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/apps/kanlog" element={<Kanlog />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/about" element={<About />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}