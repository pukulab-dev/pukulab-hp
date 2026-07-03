import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

function LabFlaskIcon() {
  return (
    <span className="labIconSvgWrap" aria-hidden="true">
      <svg
        className="labIconSvg"
        viewBox="0 0 180 180"
        role="img"
        focusable="false"
      >
        <path
          className="labIconStroke labIconFlaskOutline"
          d="M67 25H113M73 25V52L42 112C31 133 46 153 70 153H110C134 153 149 133 138 112L107 52V25"
        />

        <path
          className="labIconLiquid"
          d="M46 121C57 112 70 117 82 121C99 126 112 117 131 116V135C131 145 123 151 110 151H70C57 151 49 145 46 135V121Z"
        />

        <circle className="labIconBubble mintBubble bubbleA" cx="112" cy="116" r="5" />
        <circle className="labIconBubble chalkBubble bubbleB" cx="123" cy="130" r="4" />
        <circle className="labIconBubble mintBubble bubbleC" cx="72" cy="112" r="4" />

        <circle className="labIconEye" cx="75" cy="79" r="5" />
        <circle className="labIconEye" cx="105" cy="79" r="5" />
        <path className="labIconMouth" d="M78 94C85 102 95 102 102 94" />

        <path
          className="labIconShine"
          d="M58 68V106"
        />

        <path
          className="labIconStar"
          d="M133 34L139 47L153 50L141 58L143 72L133 63L121 72L124 58L112 50L126 47Z"
        />
        <path className="labIconStarRay rayA" d="M134 18V26" />
        <path className="labIconStarRay rayB" d="M158 36L150 42" />
        <path className="labIconStarRay rayC" d="M111 34L118 41" />

        <circle className="labIconBubble floatBubble bubbleD" cx="93" cy="47" r="4" />
        <circle className="labIconBubble floatBubble bubbleE" cx="104" cy="59" r="3" />
      </svg>
    </span>
  );
}

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

  const handleSecretTap = () => {
    if (isSecretUnlocked) {
      navigate("/secret");
      return;
    }

    setDiscoverCount((count) => Math.min(count + 1, 5));
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

        <div className="boardGrid boardGridEight">
          {/* APPS */}
          <button
            type="button"
            className={`doodle doodleFlask doodlePrimary homeSlotTop1 ${
              flaskBurst ? "active" : ""
            }`}
            onClick={handleFlaskTap}
          >
            <span className="doodleLabel">FLASK / APPS</span>
            <span className="doodleBadge">START</span>
            <span className="doodleHint">フラスコをタップしてアプリへ</span>

            <LabFlaskIcon />
          </button>

          {/* GALLERY */}
          <Link
            className="doodle doodleMicroscope doodleFeatured homeSlotTop2"
            to="/gallery"
          >
            <span className="doodleLabel">MICROSCOPE / GALLERY</span>
            <span className="doodleBadge">OPEN</span>
            <span className="doodleHint">AIビジュアル実験を観察する</span>

            <span className="microEye" />
            <span className="microTube" />
            <span className="microLens" />
            <span className="microArm" />
            <span className="microStage" />
            <span className="microSlide" />
            <span className="microBase" />
            <span className="microSpark sparkA" />
            <span className="microSpark sparkB" />
          </Link>

          {/* GAME */}
          <Link className="doodle doodleGamePad homeSlotTop3" to="/game">
            <span className="doodleLabel">GAME PAD / PLAY TEST</span>
            <span className="doodleBadge">SOON</span>
            <span className="doodleHint">準備中の遊び場</span>

            <span className="padBody" />
            <span className="padGrip padGripLeft" />
            <span className="padGrip padGripRight" />
            <span className="padDpad" />
            <span className="padButton padButtonA" />
            <span className="padButton padButtonB" />
            <span className="padButton padButtonC" />
            <span className="padCable" />
            <span className="padSpark sparkA" />
            <span className="padSpark sparkB" />
          </Link>

          {/* WORKS */}
          <Link className="doodle doodleDesignDesk homeSlotTop4" to="/works">
            <span className="doodleLabel">DESIGN DESK / WORKS</span>
            <span className="doodleBadge">NEW</span>
            <span className="doodleHint">HP制作・運営相談</span>

            <span className="designPaper" />
            <span className="designRuler" />
            <span className="designPencil" />
            <span className="designPencilTip" />
            <span className="designSpark sparkA" />
            <span className="designSpark sparkB" />
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
            <span className="doodleLabel">BEAKER / SURVEY</span>
            <span className="doodleHint">研究所に声を届ける</span>

            <span className="cylinderBody" />
            <span className="cylinderLiquid" />
            <span className="cylinderMarks" />
          </Link>

          {/* CONTACT */}
          <Link className="doodle doodleMail homeSlotBottom3" to="/contact">
            <span className="doodleLabel">LETTER / CONTACT</span>
            <span className="doodleHint">研究所へメモを送る</span>

            <span className="mailBody" />
            <span className="mailFlap" />
            <span className="mailLine lineA" />
            <span className="mailLine lineB" />
            <span className="mailSpark sparkA" />
            <span className="mailSpark sparkB" />
          </Link>

          {/* SECRET */}
          <button
            type="button"
            className={`doodle doodleAtom homeSlotBottom4 ${
              isSecretUnlocked ? "secretReady" : ""
            }`}
            onClick={handleSecretTap}
          >
            <span className="doodleLabel">SECRET ATOM</span>
            <span className="doodleHint">
              {isSecretUnlocked
                ? "ひみつの休憩室へ"
                : `ひみつ反応 ${discoverCount}/5`}
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