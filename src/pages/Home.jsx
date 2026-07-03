import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

function LabIcon({ type }) {
  const iconMap = {
    flask: (
      <>
        <path
          className="labSvgStroke labSvgMainStroke"
          d="M67 25H113M73 25V52L42 112C31 133 46 153 70 153H110C134 153 149 133 138 112L107 52V25"
        />
        <path
          className="labSvgMint labSvgLiquid"
          d="M46 121C57 112 70 117 82 121C99 126 112 117 131 116V135C131 145 123 151 110 151H70C57 151 49 145 46 135V121Z"
        />
        <circle className="labSvgMint labSvgBubble" cx="112" cy="116" r="5" />
        <circle className="labSvgChalk labSvgBubble" cx="123" cy="130" r="4" />
        <circle className="labSvgMint labSvgBubble" cx="72" cy="112" r="4" />
        <circle className="labSvgEye" cx="75" cy="79" r="5" />
        <circle className="labSvgEye" cx="105" cy="79" r="5" />
        <path className="labSvgMouth" d="M78 94C85 102 95 102 102 94" />
        <path className="labSvgShine" d="M58 68V106" />
        <path
          className="labSvgStar"
          d="M133 34L139 47L153 50L141 58L143 72L133 63L121 72L124 58L112 50L126 47Z"
        />
        <path className="labSvgStarRay" d="M134 18V26" />
        <path className="labSvgStarRay" d="M158 36L150 42" />
        <path className="labSvgStarRay" d="M111 34L118 41" />
        <circle className="labSvgMint labSvgFloatBubble" cx="93" cy="47" r="4" />
        <circle className="labSvgAccent labSvgFloatBubble delay" cx="104" cy="59" r="3" />
      </>
    ),

    microscope: (
      <>
        <path
          className="labSvgStroke labSvgMainStroke"
          d="M48 53L76 39M69 62L120 36C129 31 138 42 130 50L82 80"
        />
        <rect
          className="labSvgStroke labSvgMainStroke labSvgSoftFill"
          x="116"
          y="70"
          width="30"
          height="34"
          rx="10"
          transform="rotate(-12 131 87)"
        />
        <path
          className="labSvgStroke labSvgMainStroke"
          d="M83 58C78 84 79 113 104 128"
        />
        <path
          className="labSvgStroke labSvgMainStroke"
          d="M52 135H128M62 153H136C142 153 146 159 146 164H47C48 158 53 153 62 153Z"
        />
        <rect className="labSvgMintStroke labSvgSoftFill" x="70" y="118" width="62" height="16" rx="8" />
        <circle className="labSvgMint labSvgBubble" cx="46" cy="84" r="4" />
        <circle className="labSvgMintStroke" cx="138" cy="122" r="5" />
        <path className="labSvgAccent labSvgDot" d="M72 35a4 4 0 1 0 0.1 0" />
        <path className="labSvgStar small" d="M148 48L153 57L163 59L154 65L156 76L148 69L138 76L141 65L132 59L143 57Z" />
      </>
    ),

    gamepad: (
      <>
        <path
          className="labSvgStroke labSvgMainStroke labSvgSoftFill"
          d="M50 76C56 66 68 63 82 68H98C112 63 124 66 130 76C136 88 143 116 135 130C129 139 117 138 108 126H72C63 138 51 139 45 130C37 116 44 88 50 76Z"
        />
        <path className="labSvgStroke" d="M72 89V115M59 102H85" />
        <circle className="labSvgMint labSvgButton" cx="112" cy="91" r="7" />
        <circle className="labSvgAccent labSvgButton" cx="128" cy="106" r="7" />
        <circle className="labSvgMint labSvgButton" cx="116" cy="121" r="6" />
        <path className="labSvgStroke labSvgCable" d="M90 65V41C90 29 99 22 114 22H124" />
        <circle className="labSvgEye" cx="87" cy="103" r="4" />
        <path className="labSvgMouth subtle" d="M91 116C96 120 103 120 108 116" />
        <circle className="labSvgAccent labSvgFloatBubble" cx="45" cy="63" r="4" />
        <circle className="labSvgAccent labSvgFloatBubble delay" cx="135" cy="64" r="4" />
        <path className="labSvgStar small" d="M145 34L149 43L159 45L151 51L153 61L145 55L136 61L138 51L130 45L140 43Z" />
      </>
    ),

    works: (
      <>
        <rect
          className="labSvgStroke labSvgMainStroke labSvgSoftFill"
          x="42"
          y="58"
          width="104"
          height="74"
          rx="16"
          transform="rotate(-2 94 95)"
        />
        <path className="labSvgStroke soft" d="M58 82H126M58 101H120" />
        <path className="labSvgAccentStroke labSvgRuler" d="M63 143L143 122" />
        <path className="labSvgAccentStroke thin" d="M74 140L72 132M90 136L88 128M106 132L104 124M122 128L120 120M137 124L135 116" />
        <path className="labSvgMintStroke labSvgPencil" d="M56 111L137 30" />
        <path className="labSvgChalk" d="M136 24L153 17L146 35Z" />
        <circle className="labSvgEye" cx="79" cy="92" r="3.8" />
        <path className="labSvgMouth subtle" d="M86 109C92 113 101 113 107 109" />
        <path className="labSvgStar" d="M147 54L152 65L164 67L154 75L157 87L147 80L136 87L139 75L129 67L141 65Z" />
        <path className="labSvgStar small" d="M44 122L48 130L57 132L50 137L52 146L44 141L36 146L38 137L31 132L40 130Z" />
      </>
    ),

    about: (
      <>
        <rect
          className="labSvgStroke labSvgMainStroke labSvgSoftFill"
          x="31"
          y="62"
          width="118"
          height="82"
          rx="16"
        />
        <path className="labSvgStroke" d="M70 52H110" />
        <path className="labSvgStroke" d="M72 62V54C72 48 77 44 84 44H96C103 44 108 48 108 54V62" />
        <circle className="labSvgMintStroke labSvgSoftFill" cx="65" cy="103" r="18" />
        <circle className="labSvgEye" cx="61" cy="99" r="3" />
        <circle className="labSvgEye" cx="70" cy="99" r="3" />
        <path className="labSvgMouth subtle" d="M61 111C65 115 70 115 74 111" />
        <path className="labSvgStroke soft" d="M92 89H133M92 107H130M92 125H118" />
        <circle className="labSvgAccent labSvgFloatBubble" cx="137" cy="78" r="4" />
        <circle className="labSvgAccent labSvgFloatBubble delay" cx="139" cy="134" r="4" />
      </>
    ),

    survey: (
      <>
        <path
          className="labSvgStroke labSvgMainStroke labSvgSoftFill"
          d="M63 31H117M68 31V55L50 111C44 131 58 148 80 148H100C122 148 136 131 130 111L112 55V31"
        />
        <path className="labSvgAccent labSvgLiquid" d="M54 113H126V131C126 141 117 148 100 148H80C63 148 54 141 54 131Z" />
        <path className="labSvgStroke soft" d="M118 58H139M118 74H139M118 90H139M118 106H139M118 122H139" />
        <circle className="labSvgEye" cx="78" cy="90" r="4" />
        <circle className="labSvgEye" cx="99" cy="90" r="4" />
        <path className="labSvgMouth subtle" d="M79 104C85 110 94 110 100 104" />
        <circle className="labSvgMint labSvgFloatBubble" cx="83" cy="63" r="5" />
        <circle className="labSvgMint labSvgFloatBubble delay" cx="101" cy="72" r="3.5" />
        <path className="labSvgStar small" d="M138 38L142 46L151 48L144 54L146 63L138 58L130 63L132 54L125 48L134 46Z" />
      </>
    ),

    contact: (
      <>
        <rect
          className="labSvgStroke labSvgMainStroke labSvgSoftFill"
          x="32"
          y="65"
          width="116"
          height="78"
          rx="14"
        />
        <path className="labSvgStroke soft" d="M36 75L90 112L144 75" />
        <path className="labSvgStroke soft" d="M36 134L76 104M144 134L104 104" />
        <path className="labSvgMintStroke" d="M50 128H87M50 140H103" />
        <circle className="labSvgEye" cx="78" cy="105" r="3.5" />
        <circle className="labSvgEye" cx="96" cy="105" r="3.5" />
        <path className="labSvgMouth subtle" d="M80 116C86 120 93 120 99 116" />
        <circle className="labSvgAccent labSvgFloatBubble" cx="143" cy="60" r="4" />
        <circle className="labSvgAccent labSvgFloatBubble delay" cx="39" cy="134" r="4" />
        <path className="labSvgStar small" d="M150 37L154 45L163 47L156 53L158 62L150 57L142 62L144 53L137 47L146 45Z" />
      </>
    ),

    atom: (
      <>
        <ellipse className="labSvgStroke labSvgAtomOrbit" cx="90" cy="92" rx="62" ry="24" />
        <ellipse className="labSvgStroke labSvgAtomOrbit orbitTiltA" cx="90" cy="92" rx="62" ry="24" />
        <ellipse className="labSvgStroke labSvgAtomOrbit orbitTiltB" cx="90" cy="92" rx="62" ry="24" />
        <circle className="labSvgChalk labSecretCore" cx="90" cy="92" r="10" />
        <circle className="labSvgEye secretEye eyeA" cx="86" cy="90" r="2.5" />
        <circle className="labSvgEye secretEye eyeB" cx="94" cy="90" r="2.5" />
        <path className="labSvgMouth secretMouth" d="M86 98C89 101 93 101 96 98" />
        <circle className="labSvgMint labSvgElectron" cx="150" cy="92" r="4" />
        <circle className="labSvgAccent labSvgElectron delay" cx="55" cy="73" r="4" />
        <path className="labSvgStar" d="M137 38L142 49L154 51L144 59L147 71L137 64L126 71L129 59L119 51L131 49Z" />
      </>
    ),
  };

  return (
    <span className={`labSvgWrap labSvgWrap-${type}`} aria-hidden="true">
      <svg
        className={`labSvg labSvg-${type}`}
        viewBox="0 0 180 180"
        role="img"
        focusable="false"
      >
        {iconMap[type]}
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
            <LabIcon type="flask" />
          </button>

          <Link
            className="doodle doodleMicroscope doodleFeatured homeSlotTop2"
            to="/gallery"
          >
            <span className="doodleLabel">MICROSCOPE / GALLERY</span>
            <span className="doodleBadge">OPEN</span>
            <span className="doodleHint">AIビジュアル実験を観察する</span>
            <LabIcon type="microscope" />
          </Link>

          <Link className="doodle doodleGamePad homeSlotTop3" to="/game">
            <span className="doodleLabel">GAME PAD / PLAY TEST</span>
            <span className="doodleBadge">SOON</span>
            <span className="doodleHint">準備中の遊び場</span>
            <LabIcon type="gamepad" />
          </Link>

          <Link className="doodle doodleDesignDesk homeSlotTop4" to="/works">
            <span className="doodleLabel">DESIGN DESK / WORKS</span>
            <span className="doodleBadge">NEW</span>
            <span className="doodleHint">HP制作・運営相談</span>
            <LabIcon type="works" />
          </Link>

          <Link className="doodle doodleAbout homeSlotBottom1" to="/about">
            <span className="doodleLabel">NAME TAG / ABOUT</span>
            <span className="doodleHint">研究所のことを見る</span>
            <LabIcon type="about" />
          </Link>

          <Link
            className="doodle doodleCylinder homeSlotBottom2"
            to="/questionnaire"
          >
            <span className="doodleLabel">BEAKER / SURVEY</span>
            <span className="doodleHint">研究所に声を届ける</span>
            <LabIcon type="survey" />
          </Link>

          <Link className="doodle doodleMail homeSlotBottom3" to="/contact">
            <span className="doodleLabel">LETTER / CONTACT</span>
            <span className="doodleHint">研究所へメモを送る</span>
            <LabIcon type="contact" />
          </Link>

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
            <LabIcon type="atom" />
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
