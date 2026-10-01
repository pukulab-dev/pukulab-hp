import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
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
import Debugger from "./pages/Debugger";
import Gallery from "./pages/Gallery";
import GalleryCategory from "./pages/GalleryCategory";
import Works from "./pages/Works";
import WorksIndex from "./pages/WorksIndex";
import Entsumugi from "./pages/Entsumugi";
import EntsumugiStartup from "./pages/EntsumugiStartup";
import EntsumugiDiagnosis from "./pages/EntsumugiDiagnosis";
import EntsumugiEstimate from "./pages/EntsumugiEstimate";
import PageAssistNav from "./components/PageAssistNav";

import {
  GA_MEASUREMENT_ID,
  SITE_NAME,
  getAbsoluteImageUrl,
  getCanonicalUrl,
  getPageMeta,
  normalizePathname,
} from "./seoConfig.js";

function syncMetaByName(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!content) {
    tag?.remove();
    return;
  }

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function syncMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!content) {
    tag?.remove();
    return;
  }

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function syncCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

function syncJsonLd(data) {
  const id = "pukulab-json-ld";
  const oldTag = document.getElementById(id);

  if (!data) {
    oldTag?.remove();
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
  const previousPageLocationRef = useRef(
    typeof document !== "undefined" ? document.referrer || "" : ""
  );

  useEffect(() => {
    const pathname = normalizePathname(location.pathname);
    const meta = getPageMeta(pathname);
    const canonicalUrl = getCanonicalUrl(pathname);
    const ogImageUrl = getAbsoluteImageUrl(meta.image);

    document.title = meta.title;

    syncMetaByName("description", meta.description);
    syncMetaByName("robots", meta.robots || "index, follow");

    syncCanonical(canonicalUrl);

    syncMetaByProperty("og:site_name", SITE_NAME);
    syncMetaByProperty("og:locale", "ja_JP");
    syncMetaByProperty("og:type", "website");
    syncMetaByProperty("og:title", meta.title);
    syncMetaByProperty("og:description", meta.description);
    syncMetaByProperty("og:url", canonicalUrl);
    syncMetaByProperty("og:image", ogImageUrl);
    syncMetaByProperty("og:image:secure_url", ogImageUrl);
    syncMetaByProperty("og:image:alt", meta.imageAlt || SITE_NAME);

    syncMetaByName("twitter:card", "summary_large_image");
    syncMetaByName("twitter:title", meta.title);
    syncMetaByName("twitter:description", meta.description);
    syncMetaByName("twitter:image", ogImageUrl);
    syncMetaByName("twitter:image:alt", meta.imageAlt || SITE_NAME);

    syncJsonLd(meta.structuredData);

    // React Routerでページが変わるたびにGA4へpage_viewを送る。
    // index.html側ではsend_page_view:falseにして自動送信を止めている。
    if (typeof window.gtag === "function") {
      const pageViewParams = {
        send_to: GA_MEASUREMENT_ID,
        page_title: meta.title,
        page_location: canonicalUrl,
      };

      if (previousPageLocationRef.current) {
        pageViewParams.page_referrer = previousPageLocationRef.current;
      }

      window.gtag("event", "page_view", pageViewParams);
      previousPageLocationRef.current = canonicalUrl;
    }
  }, [location.pathname]);

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
  const location = useLocation();
  const isEntsumugiPage = normalizePathname(location.pathname).startsWith(
    "/entsumugi"
  );

  const isDebuggerPage = normalizePathname(location.pathname) === "/game/debugger";

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
        <Route path="/entsumugi/startup" element={<EntsumugiStartup />} />
        <Route path="/entsumugi/diagnosis" element={<EntsumugiDiagnosis />} />
        <Route path="/entsumugi/estimate" element={<EntsumugiEstimate />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/about" element={<About />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/debugger" element={<Debugger />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isEntsumugiPage ? <SiteFooter /> : null}
      {!isEntsumugiPage && !isDebuggerPage ? <PageAssistNav /> : null}
    </>
  );
}
