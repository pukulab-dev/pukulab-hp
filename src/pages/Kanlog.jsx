import { useNavigate } from "react-router-dom";
import "./kanlog.css";

import homeImg from "../assets/kanlog-home.png";
import shelfImg from "../assets/kanlog-shelf.png";
import detailImg from "../assets/kanlog-detail.png";
import personalityImg from "../assets/kanlog-personality.png";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.pukulab.makilog";

const problemCards = [
  "本棚に漫画やラノベが増えて、何を持っているか分からなくなる",
  "何巻まで買ったか、どこが抜けているか忘れやすい",
  "書店で「この巻、持ってたっけ？」と迷ってしまう",
  "コレクションを見返せる場所がほしい",
];

const registerFeatures = [
  {
    title: "バーコード読み込み",
    text: "手元の本を読み込んで、コレクション登録を始めやすく。",
  },
  {
    title: "まとめて登録",
    text: "巻数が多い作品も、まとめて登録しながら本棚を育てられます。",
  },
  {
    title: "キーワード検索",
    text: "バーコードが使えないときも、作品名から探して登録できます。",
  },
];

const screenShots = [
  {
    image: homeImg,
    title: "漫画部屋の入口",
    label: "HOME",
    text: "登録したコレクションと一緒に、あなたの部屋が少しずつ育っていきます。",
    alt: "巻ログのホーム画面。漫画やラノベのコレクション管理を始める入口",
  },
  {
    image: shelfImg,
    title: "コレクションを見える化",
    label: "SHELF",
    text: "持っている漫画やラノベを、本棚のように見返しやすく整理できます。",
    alt: "巻ログの本棚画面。登録した漫画やラノベを一覧で管理できる画面",
  },
  {
    image: detailImg,
    title: "所持巻を確認",
    label: "DETAIL",
    text: "何巻まで持っているか、どこが抜けているかを確認しやすく。",
    alt: "巻ログの作品詳細画面。所持巻や抜け巻を確認できる画面",
  },
  {
    image: personalityImg,
    title: "相棒を自分好みに",
    label: "RUNO",
    text: "コレクション管理の相棒るのの性格を、自分好みに選べます。",
    alt: "巻ログのるの性格変更画面。相棒キャラの性格を選べる画面",
  },
];

const utilityFeatures = [
  "所持巻の確認",
  "抜け巻チェック",
  "ダブり買い防止",
  "本棚・棚分け管理",
  "写真保存",
  "るのの一言",
];

const futurePlans = [
  "登録コレクションをもとにした新刊チェック",
  "AIによるおすすめ判定",
  "好みや所持傾向の見える化",
  "もっと楽しい部屋づくり",
];

export default function Kanlog() {
  const navigate = useNavigate();

  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="kanlog-page">
      <section className="kanlog-hero">
        <div className="kanlog-heroOverlay" aria-hidden="true" />

        <div className="kanlog-heroText">
          <p className="kanlog-eyebrow">KANLOG / COLLECTION MANAGEMENT APP</p>

          <h1 className="kanlog-title">
            漫画・ラノベの
            <br />
            コレクションを、
            <br />
            スマホの中の本棚へ。
          </h1>

          <p className="kanlog-lead">
            巻ログは、持っている漫画やラノベを登録して、
            自分だけのコレクションを管理できるアプリです。
            本を登録するほど部屋や本棚が育ち、
            相棒るのと一緒に楽しくコレクションを増やしていけます。
          </p>

          <div className="kanlog-heroTags" aria-label="巻ログの特徴">
            <span>コレクション管理</span>
            <span>本棚育成</span>
            <span>バーコード登録</span>
            <span>相棒るの</span>
          </div>

          <div className="kanlog-heroActions">
            <a
              className="kanlog-button primary"
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Google Playで巻ログを見る"
            >
              Google Playで見る
            </a>

            <button
              type="button"
              className="kanlog-button ghost"
              onClick={() => scrollToSection("kanlog-features")}
            >
              できることを見る
            </button>
          </div>
        </div>

        <div className="kanlog-heroVisual" aria-label="巻ログの画面イメージ">
          <div className="kanlog-phoneStack">
            <img
              className="kanlog-phoneImage main"
              src={homeImg}
              alt="巻ログのホーム画面"
            />
            <img
              className="kanlog-phoneImage sub"
              src={shelfImg}
              alt="巻ログの本棚画面"
            />
          </div>
        </div>
      </section>

      <section className="kanlog-section kanlog-problem">
        <div className="kanlog-sectionHead">
          <p className="kanlog-label">COLLECTION PROBLEM</p>
          <h2>本が増えるほど、管理はむずかしくなる。</h2>
          <p>
            集めるのは楽しい。けれど、漫画やラノベが増えてくると、
            何を持っているか分からなくなることもあります。
          </p>
        </div>

        <div className="kanlog-problemGrid">
          {problemCards.map((item) => (
            <article className="kanlog-problemCard" key={item}>
              <span aria-hidden="true">?</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kanlog-section kanlog-concept" id="kanlog-features">
        <div className="kanlog-conceptText">
          <p className="kanlog-label">WHAT IS KANLOG?</p>
          <h2>巻ログは、コレクションを育てるアプリです。</h2>
          <p>
            持っている本を登録して、スマホの中に自分だけの本棚を作る。
            登録したコレクションを見返すことで、所持巻や抜け巻も確認しやすくなります。
          </p>
          <p>
            ただ記録するだけではなく、本を増やすほど部屋や本棚が育っていく。
            それが巻ログのいちばん楽しいところです。
          </p>
        </div>

        <div className="kanlog-conceptCard">
          <p className="kanlog-cardMini">APP CORE</p>
          <strong>登録する</strong>
          <span>→</span>
          <strong>本棚が育つ</strong>
          <span>→</span>
          <strong>コレクションが見える</strong>
        </div>
      </section>

      <section className="kanlog-section kanlog-register">
        <div className="kanlog-sectionHead">
          <p className="kanlog-label">EASY REGISTER</p>
          <h2>たくさんあっても、登録しやすい。</h2>
          <p>
            コレクション管理で最初に大変なのは、本の登録。
            巻ログではバーコード読み込みやまとめて登録に対応しているので、
            手元の本を少しずつスマホの本棚へ移していけます。
          </p>
        </div>

        <div className="kanlog-featureGrid">
          {registerFeatures.map((feature) => (
            <article className="kanlog-featureCard" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kanlog-section kanlog-room">
        <div className="kanlog-roomInner">
          <div>
            <p className="kanlog-label">ROOM GROWTH</p>
            <h2>本を登録するほど、あなたの部屋が育っていく。</h2>
            <p>
              巻ログでは、コレクションを増やすことがそのまま部屋の成長につながります。
              ただの記録ではなく、自分の漫画部屋を少しずつ育てていく感覚で、
              コレクション管理を楽しめます。
            </p>
          </div>

          <div className="kanlog-roomBadge">
            <span>COLLECTION</span>
            <strong>+</strong>
            <span>ROOM</span>
            <strong>+</strong>
            <span>RUNO</span>
          </div>
        </div>
      </section>

      <section className="kanlog-section kanlog-runo">
        <div className="kanlog-runoText">
          <p className="kanlog-label">PARTNER RUNO</p>
          <h2>コレクション管理の相棒、るの。</h2>
          <p>
            巻ログには、あなたのコレクション管理をそばで見守る相棒「るの」がいます。
            さらに、るのの性格は自分好みに変更可能。
          </p>
          <p>
            いつものるの、オタク友達るの、クールなるの、妹系るの、ツンデレるのなど、
            気分や好みに合わせて一緒にコレクション管理を楽しめます。
          </p>

          <div className="kanlog-runoCopy">
            巻ログを最大限楽しむなら、るのも自分好みに。
          </div>
        </div>

        <div className="kanlog-runoImageWrap">
          <img
            src={personalityImg}
            alt="巻ログのるの性格変更画面"
            className="kanlog-runoImage"
          />
        </div>
      </section>

      <section className="kanlog-section kanlog-utility">
        <div className="kanlog-sectionHead">
          <p className="kanlog-label">USEFUL FEATURES</p>
          <h2>育てるだけじゃなく、ちゃんと便利。</h2>
          <p>
            登録したコレクションをもとに、持っている巻や抜けている巻を確認。
            書店で迷ったときも、巻ログを見れば
            「この巻、持ってたっけ？」を確認しやすくなります。
          </p>
        </div>

        <div className="kanlog-utilityGrid">
          {utilityFeatures.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </section>

      <section className="kanlog-section kanlog-screens">
        <div className="kanlog-sectionHead">
          <p className="kanlog-label">APP SCREENS</p>
          <h2>コレクション管理が、少し楽しくなる画面たち。</h2>
          <p>
            本を登録する、見返す、部屋を育てる、るのを自分好みにする。
            巻ログでは、コレクション管理を続けたくなる体験を目指しています。
          </p>
        </div>

        <div className="kanlog-screenGrid">
          {screenShots.map((screen) => (
            <article className="kanlog-screenCard" key={screen.title}>
              <div className="kanlog-screenImageWrap">
                <img src={screen.image} alt={screen.alt} />
              </div>
              <p className="kanlog-screenLabel">{screen.label}</p>
              <h3>{screen.title}</h3>
              <p>{screen.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kanlog-section kanlog-future">
        <div className="kanlog-futureText">
          <p className="kanlog-label">NEXT UPDATE IDEA</p>
          <h2>コレクション管理から、その先へ。</h2>
          <p>
            巻ログは、登録したコレクションをもとに、
            今後さらに便利で楽しい機能へ広げていく予定です。
            新刊チェックやAIによるおすすめ判定など、
            自分だけの本棚データベースとして育てていけるアプリを目指しています。
          </p>
        </div>

        <div className="kanlog-futureList">
          {futurePlans.map((plan) => (
            <span key={plan}>{plan}</span>
          ))}
        </div>
      </section>

      <section className="kanlog-section kanlog-finalCta">
        <p className="kanlog-label">START YOUR COLLECTION</p>
        <h2>あなたの本棚も、今日から育ててみませんか。</h2>
        <p>
          まずは手元の漫画やラノベを登録して、
          スマホの中に自分だけの本棚を作るところから。
          相棒るのと一緒に、コレクション管理を始めてみませんか。
        </p>

        <div className="kanlog-finalActions">
          <a
            className="kanlog-button primary"
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Google Playで巻ログを見る"
          >
            Google Playで巻ログを見る
          </a>

          <button
            type="button"
            className="kanlog-button ghost"
            onClick={() => navigate("/questionnaire")}
          >
            アンケートに答える
          </button>

          <button
            type="button"
            className="kanlog-button text"
            onClick={() => navigate("/apps")}
          >
            アプリ一覧へ戻る
          </button>
        </div>
      </section>
    </main>
  );
}