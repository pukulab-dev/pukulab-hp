import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PageAssistNav() {
  const location = useLocation();
  const [showTop, setShowTop] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    function handleScroll() {
      setShowTop(window.scrollY > 260);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (isHome && !showTop) {
    return null;
  }

  return (
    <nav className="pageAssistNav" aria-label="ページ補助ナビ">
      {!isHome ? (
        <Link className="pageAssistButton" to="/">
          HOME
        </Link>
      ) : null}

      {showTop ? (
        <button
          className="pageAssistButton"
          type="button"
          onClick={scrollToTop}
        >
          TOP
        </button>
      ) : null}
    </nav>
  );
}