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
      return "ひみつの休憩室が開きました。ようこそ。";
    }

    return `ひみつ反応チェック中... ${discoverCount}/5`;
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

          <span className="chalkStar star1" />
          <span className="chalkStar star2" />
          <span className="chalkStar star3" />

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

        <header className="boardHeader cuteBoardHeader">
          <div className="homeMascot" aria-hidden="true">
            <span className="homeMascotNeck" />
            <span className="homeMascotBody" />
            <span className="homeMascotLiquid" />
            <span className="homeMascotEye eyeLeft" />
            <span className="homeMascotEye eyeRight" />
            <span className="homeMascotMouth" />
            <span className="homeMascotStar" />
            <span className="homeMascotBubble bubbleOne" />
            <span className="homeMascotBubble bubbleTwo" />
          </div>

          <div className="homeTitleText">
            <p className="smallTag">WAKU WAKU / DOKI DOKI INSTITUTE</p>
            <h1>Puku Lab</h1>
            <p className="leadText">ワクワクとドキドキが増えていく研究所</p>
            <p className="homeTinyMemo">
              黒板の中の2D研究室で、アプリ・AI画像・遊びの実験を育てています。
            </p>
          </div>
        </header>

        <div className="boardGrid boardGridSeven">
          {/* FLASK */}
          <button
            type="button"
            className={`doodle doodleFlask doodlePrimary homeSlotTopLeft ${
              flaskBurst ? "active" : ""
            }`}
            onClick={handleFlaskTap}
          >
            <span className="doodleLabel">FLASK / APPS</span>
            <span className="doodleBadge">START</span>
            <span className="doodleHint">フラスコをタップしてアプリへ</span>

            <span className="flaskNeck" />
            <span className="flaskBody" />
            <span className="flaskLiquid" />
            <span className="flaskShine" />

            <span className="flaskFace" aria-hidden="true">
              <span className="flaskEye flaskEyeLeft" />
              <span className="flaskEye flaskEyeRight" />
              <span className="flaskMouth" />
            </span>

            <span className="flaskTinyStar" aria-hidden="true" />

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

          {/* GALLERY */}
          <Link
            className="doodle doodleGallery doodleFeatured homeSlotTopCenter"
            to="/gallery"
          >
            <span className="doodleLabel">GALLERY / ARCHIVE</span>
            <span className="doodleBadge">OPEN</span>
            <span className="doodleHint">AIビジュアル実験を見る</span>

            <span className="galleryFrameBody" />
            <span className="galleryFrameInner" />
            <span className="galleryFrameHook" />
            <span className="galleryFrameSpark galleryFrameSpark1" />
            <span className="galleryFrameSpark galleryFrameSpark2" />
            <span className="galleryFrameLine galleryFrameLine1" />
            <span className="galleryFrameLine galleryFrameLine2" />
          </Link>

          {/* GAME */}
          <Link className="doodle doodleGame homeSlotTopRight" to="/game">
            <span className="doodleLabel">GAME / COMING SOON</span>
            <span className="doodleBadge">SOON</span>
            <span className="doodleHint">準備中の遊び場</span>

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
          <Link className="doodle doodleAbout homeSlotBottom1" to="/about">
            <span className="doodleLabel">NAME TAG / ABOUT</span>
            <span className="doodleHint">研究所のことを見る</span>

            <span className="aboutCardBody" />
            <span className="aboutCardClip" />
            <span className="aboutCardAvatar" />
            <span className="aboutCardLine aboutCardLine1" />
            <span className="aboutCardLine aboutCardLine2" />
            <span className="aboutCardLine aboutCardLine3" />
            <span className="aboutCardSpark aboutCardSpark1" />
            <span className="aboutCardSpark aboutCardSpark2" />
          </Link>

          {/* SURVEY */}
          <Link
            className="doodle doodleCylinder homeSlotBottom2"
            to="/questionnaire"
          >
            <span className="doodleLabel">LAB VOICE / SURVEY</span>
            <span className="doodleHint">研究所に声を届ける</span>

            <span className="cylinderBody" />
            <span className="cylinderLiquid" />
            <span className="cylinderMarks" />
          </Link>

          {/* CONTACT */}
          <Link className="doodle doodleClip homeSlotBottom3" to="/contact">
            <span className="doodleLabel">CLIP BOARD / CONTACT</span>
            <span className="doodleHint">メモを送る</span>

            <span className="clipBody" />
            <span className="clipHead" />
            <span className="clipLines" />
          </Link>

          {/* ATOM */}
          <button
            type="button"
            className={`doodle doodleAtom homeSlotBottom4 ${
              isSecretUnlocked ? "secretReady" : ""
            }`}
            onClick={() => setDiscoverCount((c) => Math.min(c + 1, 5))}
          >
            <span className="doodleLabel">SECRET ATOM</span>
            <span className="doodleHint">
              {isSecretUnlocked ? "ひみつの休憩室へ" : `ひみつ反応 ${discoverCount}/5`}
            </span>

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
              SECRET LOUNGE
            </Link>
          ) : (
            <span className="secretDoor disabled">LOCKED</span>
          )}
        </footer>
      </section>
    </main>
  );
}