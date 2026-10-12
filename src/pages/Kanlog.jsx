import { useNavigate } from "react-router-dom";
import "./kanlog-v2.css";

import roomPoster from "../assets/kanlog-lp/kanlog-room-growth.webp";
import worksPoster from "../assets/kanlog-lp/kanlog-works.webp";
import volumePoster from "../assets/kanlog-lp/kanlog-volumes.webp";
import shelfPoster from "../assets/kanlog-lp/kanlog-shelf.webp";
import duplicatePoster from "../assets/kanlog-lp/kanlog-duplicate.webp";
import runoPoster from "../assets/kanlog-lp/kanlog-runo.webp";
import roomEvolution from "../assets/kanlog-lp/kanlog-room-evolution.webp";
import pointsGuide from "../assets/kanlog-lp/kanlog-points-guide.webp";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.pukulab.makilog";

const STATS = [
  { label: "集める", desc: "所持巻や複数冊を記録", icon: "📚" },
  { label: "読む", desc: "未読・読了を見える化", icon: "📖" },
  { label: "育てる", desc: "ポイントで部屋が成長", icon: "🏠" },
];

const featureFacts = [
  { title: "所持巻", text: "何巻を持っているかを作品ごとに確認" },
  { title: "読了・未読", text: "読んだ巻とこれから読む巻を整理" },
  { title: "読了率", text: "どこまで読んだかを数字とバーで確認" },
  { title: "複数冊所有", text: "同じ巻を何冊持っているかも記録" },
];

function trackStoreClick(placement) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "kanlog_store_click", {
      app_name: "巻ログ",
      placement,
      destination: "google_play",
    });
  }
}

function StoreLink({ placement, children, variant = "primary" }) {
  return (
    <a
      className={`klv2-button klv2-button--${variant}`}
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackStoreClick(placement)}
      aria-label="巻ログをGoogle Playで見る（新しいタブで開きます）"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function Heading({ kicker, title, subtitle, id }) {
  return (
    <div className="klv2-heading" id={id}>
      <p className="klv2-kicker">{kicker}</p>
      <h2>{title}</h2>
      {subtitle ? <p className="klv2-headingLead">{subtitle}</p> : null}
    </div>
  );
}

function Poster({ src, alt, label, featured = false }) {
  return (
    <figure className={`klv2-poster ${featured ? "klv2-poster--featured" : ""}`}>
      <a className="klv2-imageLink" href={src} target="_blank" rel="noopener noreferrer" aria-label={`${label}の画像を拡大して見る`}>
        <img src={src} alt={alt} loading={featured ? "eager" : "lazy"} decoding="async" fetchPriority={featured ? "high" : "auto"} />
      </a>
      <figcaption>{label} <span aria-hidden="true">↗</span></figcaption>
    </figure>
  );
}

export default function Kanlog() {
  const navigate = useNavigate();
  return (
    <main className="klv2-page">
      <section className="klv2-hero" aria-labelledby="klv2-main-title">
        <div className="klv2-heroCopy">
          <p className="klv2-overline">漫画・ラノベのコレクション管理アプリ <strong>巻ログ KanLog</strong></p>
          <h1 id="klv2-main-title"><span>本棚が</span><span>もっと好きになる！</span></h1>
          <p className="klv2-heroCatch">集める　読む　記録する<br />その先に あなただけの部屋が待っている</p>
          <p className="klv2-heroBody">
            巻ログは、紙の漫画やライトノベルをスマホで管理できるAndroidアプリ。
            所持巻や読了状況、初版所有を記録すると、ポイントが貯まって部屋も成長！
            集める楽しさと、ダブり買いを防ぐ便利さを一緒に楽しめます。
          </p>
          <div className="klv2-tags" aria-label="主な特徴">
            <span>初版・所持巻を記録</span><span>読了率がわかる</span><span>ポイントで部屋育成</span>
          </div>
          <div className="klv2-actions">
            <StoreLink placement="hero">Google Playで無料ではじめる</StoreLink>
            <a className="klv2-button klv2-button--quiet" href="#klv2-fun">巻ログの楽しさを見る ↓</a>
          </div>
          <p className="klv2-tiny">※Android向け / 基本無料（一部有料要素あり）</p>
        </div>
        <div className="klv2-heroMedia">
          <Poster src={roomPoster} label="記録するほど部屋が育つ" alt="巻ログの部屋育成紹介。漫画の登録でポイントが貯まり、Lv0からLv10に向かって部屋の家具や見た目が変化する" featured />
        </div>
      </section>

      <section className="klv2-steps" aria-label="巻ログでできる3つのこと">
        {STATS.map((item) => (
          <div className="klv2-step" key={item.label}>
            <span aria-hidden="true" className="klv2-stepIcon">{item.icon}</span>
            <strong>{item.label}</strong><span>{item.desc}</span>
          </div>
        ))}
      </section>

      <section className="klv2-section klv2-section--fun" id="klv2-fun">
        <Heading kicker="COLLECT & GROW" title={<>集めるほど<br className="klv2-break-mobile" />もっと楽しい！</>} subtitle="本の記録が、部屋の成長につながる。便利なだけで終わらないコレクション管理。" />
        <div className="klv2-wideVisual">
          <img src={roomEvolution} alt="巻ログの部屋がレベル0のシンプルな状態からレベル10のオタク部屋へ成長する比較イメージ" loading="lazy" decoding="async" />
        </div>
        <div className="klv2-funColumns">
          <article className="klv2-infoCard">
            <span className="klv2-miniIcon" aria-hidden="true">⭐</span>
            <h3>記録でポイントをゲット！</h3>
            <p>作品の登録、巻の追加、読了や初版所有などでポイントを獲得。自分の積み重ねが数字で見えます。</p>
          </article>
          <article className="klv2-infoCard">
            <span className="klv2-miniIcon" aria-hidden="true">🪴</span>
            <h3>部屋が少しずつ成長！</h3>
            <p>レベルが上がると家具などが解放され、漫画部屋がにぎやかに。無料ルームはLv10まで楽しめます。</p>
          </article>
        </div>
        <details className="klv2-details">
          <summary>ポイントの仕組みをもう少し見る <span aria-hidden="true">＋</span></summary>
          <img src={pointsGuide} alt="作品登録、巻登録、読了、初版所有などでポイントが貯まる仕組みの紹介画像" loading="lazy" decoding="async" />
          <p>画像はポイント獲得の例です。実際の付与条件はアプリ内の表示をご確認ください。</p>
        </details>
      </section>

      <section className="klv2-section" id="klv2-management">
        <Heading kicker="COLLECTION MANAGEMENT" title={<><span className="klv2-mobileLine">作品も巻も</span> <span className="klv2-mobileLine">ひと目で！</span></>} subtitle="どこまで集めたか どこまで読んだか。好きな作品のコレクションを分かりやすく。" />
        <div className="klv2-split">
          <div className="klv2-textPanel">
            <p className="klv2-eyeline">作品詳細が見やすく進化</p>
            <h3>コレクションの状況を<br />まとめてチェック！</h3>
            <p>作品ごとに所持巻・読了数・未読数・読了率を確認。巻数が多い作品も、どこまで集めたかを整理できます。</p>
            <div className="klv2-facts">
              {featureFacts.map((f) => <div key={f.title}><strong>{f.title}</strong><span>{f.text}</span></div>)}
            </div>
          </div>
          <Poster src={worksPoster} label="作品ごとにまとめて管理" alt="巻ログの作品詳細画面。所持巻数と読了率、所持巻の一覧が見られることを説明するストア画像" />
        </div>
      </section>

      <section className="klv2-section klv2-section--first" id="klv2-first-edition">
        <Heading kicker="FIRST EDITION & VOLUME" title={<>大切な初版も<br className="klv2-break-mobile" />しっかり記録！</>} subtitle="漫画の初版を集める人にも。1巻ずつのこだわりを、ちゃんと残せます。" />
        <div className="klv2-split klv2-split--reverse">
          <Poster src={volumePoster} label="巻ごとの記録・初版所有" alt="巻ログの巻ごとの記録画面。初版所有、所持冊数、読了状態、副題を巻ごとに管理できる" />
          <div className="klv2-textPanel">
            <p className="klv2-eyeline">初版本のコレクション管理にも</p>
            <h3>同じ巻でも<br />一冊一冊が大切だから</h3>
            <p>漫画の初版所有を巻ごとに記録。初版を何冊持っているか、同じ巻を複数冊所有しているかも整理できます。</p>
            <p>読了・未読や巻ごとの副題も一緒に管理できるので、コレクションの記録がもっと詳しくなります。</p>
            <p className="klv2-note">※巻ログは初版の所有情報を記録する機能です。本が初版かどうかを自動判定する機能ではありません。</p>
          </div>
        </div>
      </section>

      <section className="klv2-section" id="klv2-bookshelf">
        <Heading kicker="YOUR BOOKSHELF" title={<><span className="klv2-mobileLine">探したい作品が</span> <span className="klv2-mobileLine">すぐ見つかる！</span></>} subtitle="漫画もラノベも。集めた作品を自分だけの本棚で楽しもう。" />
        <div className="klv2-split">
          <div className="klv2-textPanel">
            <p className="klv2-eyeline">本棚ページもアップデート</p>
            <h3>見やすい本棚で<br />コレクション整理！</h3>
            <p>本棚で一覧を眺めたり、作品名や作者名で検索したり。作品の種類や未読状況に合わせて探せます。</p>
            <ul className="klv2-checkList">
              <li>漫画・ライトノベルをまとめて管理</li>
              <li>作品検索や並び替えで探しやすい</li>
              <li>表示冊数の切り替えにも対応</li>
            </ul>
          </div>
          <Poster src={shelfPoster} label="新しくなった本棚画面" alt="巻ログの本棚画面。漫画やライトノベルを分類し、検索・並び替えを使いながら背表紙で一覧表示できる" />
        </div>
      </section>

      <section className="klv2-section klv2-section--practical" id="klv2-duplicate">
        <Heading kicker="SMART CHECK" title={<><span className="klv2-mobileLine">本屋でも</span> <span className="klv2-mobileLine">もう迷わない！</span></>} subtitle="楽しく集めたコレクション情報は、お買い物のときにも頼れる味方。" />
        <div className="klv2-split klv2-split--reverse">
          <Poster src={duplicatePoster} label="購入前のダブりチェック" alt="巻ログのバーコード読み取り画面。登録済みの本や似た作品を購入前に確認できる" />
          <div className="klv2-textPanel">
            <p className="klv2-eyeline">これまでの便利さもそのまま</p>
            <h3>「この巻 持ってたっけ？」<br />そんなときにも！</h3>
            <p>購入前にバーコードで本を確認。すでに登録されている作品や似た作品がないかをチェックできます。</p>
            <p>まとめて巻を追加したり、作品名から探して登録したり。普段の記録が、そのままダブり買い防止にも役立ちます。</p>
          </div>
        </div>
        <div className="klv2-midCta"><p>集める楽しさも 便利さも<br />まずは無料で体験！</p><StoreLink placement="duplicate">Google Playで巻ログを見る</StoreLink></div>
      </section>

      <section className="klv2-section" id="klv2-runo">
        <Heading kicker="YOUR PARTNER" title={<><span className="klv2-mobileLine">相棒るのと</span> <span className="klv2-mobileLine">もっと楽しく！</span></>} subtitle="コレクション管理を見守る相棒にも、あなた好みの個性を。" />
        <div className="klv2-split">
          <div className="klv2-textPanel">
            <p className="klv2-eyeline">いつものるの それとも？</p>
            <h3>話し方が変わると<br />楽しさも変わる！</h3>
            <p>いつものるの、オタク友達るの、クールなるの、妹系るの、ツンデレるの。好みに合わせて相棒の性格を選べます。</p>
            <p>本棚を育てる日々に、ちょっとした会話の楽しみを。</p>
          </div>
          <Poster src={runoPoster} label="相棒るのの性格変更" alt="巻ログの相棒るのの性格選択画面。話し方が変わる複数のタイプが紹介されている" />
        </div>
      </section>

      <section className="klv2-ending" aria-labelledby="klv2-ending-title">
        <p className="klv2-kicker">START YOUR COLLECTION</p>
        <h2 id="klv2-ending-title"><span>自分だけの本棚を</span><span>育ててみよう！</span></h2>
        <p>好きな漫画を一作品から。<br />集めて 読んで 記録する毎日を もっと楽しく。</p>
        <StoreLink placement="footer">Google Playで無料ではじめる</StoreLink>
        <p className="klv2-tiny">Android向け / 基本無料（一部有料要素あり）</p>
        <nav className="klv2-footerNav" aria-label="関連リンク">
          <button type="button" onClick={() => navigate("/questionnaire")}>巻ログへの感想・ご意見</button>
          <button type="button" onClick={() => navigate("/apps")}>アプリ一覧へ戻る</button>
        </nav>
      </section>
    </main>
  );
}
