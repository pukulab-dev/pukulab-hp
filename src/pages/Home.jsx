import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const flaskBubbles = ["a", "b", "c", "d", "e", "f"];
const smokeClouds = ["1", "2", "3"];

export default function Home() {
  const navigate = useNavigate();
  const [flaskBurst, setFlaskBurst] = useState(false);
  const [discoverCount, setDiscoverCount] = useState(0);

  const isSecretUnlocked = discoverCount >= 5;

  const statusText = useMemo(() => {
    if (isSecretUnlocked) {
      return "隠しページ解放：ようこそ CHALK CODE へ";
    }

    return `研究ログ解析中... ${discoverCount}/5`;
  }, [discoverCount, isSecretUnlocked]);

  const handleFlaskTap = () => {
    if (flaskBurst) return;

    setFlaskBurst(true);
    window.setTimeout(() => {
      navigate("/apps");
      setFlaskBurst(false);
    }, 900);
  };

  return (
    <main className="siteFrame">
      <section className="chalkboard homeBoard">
        <div className="chalkDoodles" aria-hidden="true">
          <span className="chalkNote note1">mix!</span>
          <span className="chalkNote note2">idea?</span>
          <span className="chalkNote note3">lab log</span>
          <span className="chalkNote note4">play test</span>
          <span className="chalkCircle circle1" />
          <span className="chalkCircle circle2" />
          <span className="chalkArrow arrow1" />
          <span className="chalkArrow arrow2" />
          <span className="chalkLine line1" />
          <span className="chalkLine line2" />
          <span className="chalkLine line3" />
          <span className="chalkDust dust1" />
          <span className="chalkDust dust2" />
          <span className="chalkDust dust3" />
        </div>

        <header className="boardHeader">
          <p className="smallTag">WAKU WAKU / DOKI DOKI INSTITUTE</p>
          <h1>Puku Lab</h1>
          <p className="leadText">ワクワクとドキドキが増えていく研究所</p>
        </header>

        <div className="boardGrid">
          {/* FLASK */}
          <button
            type="button"
            className={`doodle doodleFlask doodlePrimary ${flaskBurst ? "active" : ""}`}
            onClick={handleFlaskTap}
          >
            <span className="doodleLabel">FLASK / APPS</span>
            <span className="doodleHint">アプリ紹介を見る</span>

            <span className="flaskNeck" />
            <span className="flaskBody" />
            <span className="flaskLiquid" />
            <span className="flaskShine" />

            <span className="bubbleField">
              {flaskBubbles.map((b) => (
                <span key={b} className={`bubble bubble${b}`} />
              ))}
            </span>

            <span className="smokeField">
              {smokeClouds.map((c) => (
                <span key={c} className={`smoke smoke${c}`} />
              ))}
            </span>
          </button>

          {/* SURVEY */}
          <Link className="doodle doodleCylinder" to="/questionnaire">
            <span className="doodleLabel">QUESTIONNAIRE / SURVEY</span>
            <span className="doodleHint">アンケートに答える</span>

            <span className="cylinderBody" />
            <span className="cylinderLiquid" />
            <span className="cylinderMarks" />
          </Link>

          {/* GAME */}
          <Link className="doodle doodleGame doodleFeatured" to="/game">
            <span className="doodleLabel">GAME / COMING SOON</span>
            <span className="doodleHint">ミニゲーム実験室は準備中</span>

            <span className="gameMonitor" />
            <span className="gameStand" />
            <span className="gameBase" />
            <span className="gamePad gamePadLeft" />
            <span className="gamePad gamePadRight" />
            <span className="gameSpark spark1" />
            <span className="gameSpark spark2" />
            <span className="gameSpark spark3" />
          </Link>

          {/* ABOUT */}
          <Link className="doodle doodleAbout" to="/about">
            <span className="doodleLabel">NAME TAG / ABOUT</span>
            <span className="doodleHint">研究所と自己紹介を見る</span>

            <span className="aboutCardBody" />
            <span className="aboutCardClip" />
            <span className="aboutCardAvatar" />
            <span className="aboutCardLine aboutCardLine1" />
            <span className="aboutCardLine aboutCardLine2" />
            <span className="aboutCardLine aboutCardLine3" />
            <span className="aboutCardSpark aboutCardSpark1" />
            <span className="aboutCardSpark aboutCardSpark2" />
          </Link>

          {/* CONTACT */}
          <Link className="doodle doodleClip" to="/contact">
            <span className="doodleLabel">CLIP BOARD / CONTACT</span>
            <span className="doodleHint">お問い合わせはこちら</span>

            <span className="clipBody" />
            <span className="clipHead" />
            <span className="clipLines" />
          </Link>

          {/* ATOM */}
          <button
            type="button"
            className="doodle doodleAtom"
            onClick={() => setDiscoverCount((c) => Math.min(c + 1, 5))}
          >
            <span className="doodleLabel">TAP THE ATOM</span>
            <span className="doodleHint">ひみつを探す</span>

            <span className="atomCore" />
            <span className="atomOrbit orbit1" />
            <span className="atomOrbit orbit2" />
            <span className="atomOrbit orbit3" />
          </button>
        </div>

        <footer className="boardFooter">
          <p>{statusText}</p>
          {isSecretUnlocked ? (
            <Link className="secretDoor" to="/secret">
              CHALK CODE
            </Link>
          ) : (
            <span className="secretDoor disabled">LOCKED</span>
          )}
        </footer>
      </section>
    </main>
  );
}