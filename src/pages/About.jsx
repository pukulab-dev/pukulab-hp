import { Link } from "react-router-dom";
import "./About.css";

const NOTE_URL = "https://note.com/rich_bison8482";
const X_URL = "https://x.com/pukurin5573607";
const PIXIV_URL = "https://www.pixiv.net/users/126319212";

export default function About() {
  return (
    <main className="aboutPage">
      <section className="aboutHero">
        <div className="aboutHeroInner">
          <p className="aboutEyebrow">ABOUT / PUKU LAB</p>
          <h1 className="aboutTitle">この研究所について</h1>
          <p className="aboutLead">
            Puku Lab は、アプリ・文章・AIビジュアル・HP制作をつなぎながら、
            少しずつ形にしていく個人開発の研究所です。
            便利さだけではなく、使っていてちょっと愛着が湧くもの、
            また見に来たくなる空気まで含めて育てていく場所を目指しています。
          </p>

          <div className="aboutHeroLinks">
            <Link className="aboutHeroLink" to="/apps">
              アプリ紹介へ
            </Link>
            <Link className="aboutHeroLink" to="/works">
              制作相談室へ
            </Link>
            <Link className="aboutHeroLink" to="/">
              ホームへ戻る
            </Link>
          </div>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p className="aboutSectionMini">PROFILE</p>
          <h2>運営している人</h2>
        </div>

        <div className="aboutProfileGrid">
          <article className="aboutCard">
            <h3>ぷくりん</h3>
            <p>
              Puku Lab を少しずつ育てている個人開発者。
              アプリ、文章、企画、世界観づくりを横断しながら、
              「実用」と「遊び心」が同居するものを作っています。
            </p>
            <p>
              完成品を並べるよりも、作っている途中の熱や試行錯誤ごと
              価値に変えていくスタイルで進めています。
            </p>
          </article>

          <article className="aboutCard">
            <h3>るの</h3>
            <p>
              Puku Lab の相棒ポジション。
              アイデア整理、言葉づくり、構成の壁打ち、
              世界観の微調整まで、研究所の裏側を一緒に支えている存在です。
            </p>
            <p>
              この研究所は一人で作っているようでいて、
              実は対話しながら進化していく場所でもあります。
            </p>
          </article>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p className="aboutSectionMini">MISSION</p>
          <h2>Puku Lab が目指していること</h2>
        </div>

        <div className="aboutTextBlock">
          <p>
            Puku Lab は、「作って終わり」ではなく、
            アプリ、ホームページ、記事、SNS、AIビジュアルをつなぎながら
            少しずつ広がっていく研究所を目指しています。
          </p>
          <p>
            ひとつの作品だけで勝つのではなく、
            いくつもの小さな導線をつないで、
            興味を持った人がまた戻ってこられる拠点にしていきます。
          </p>
          <p>
            自分のプロジェクトを育てながら、
            HP制作やLP制作、運営導線づくりの相談にもつながる場所にしていきます。
          </p>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p className="aboutSectionMini">PROJECTS</p>
          <h2>いま進めていること</h2>
        </div>

        <div className="aboutProjectGrid">
          <article className="aboutProjectCard">
            <h3>巻ログ</h3>
            <p>
              持っている漫画やラノベを登録して、
              自分だけのコレクションと本棚を育てていく漫画・ラノベ管理アプリです。
            </p>
          </article>

          <article className="aboutProjectCard">
            <h3>制作相談室</h3>
            <p>
              HP制作・LP制作・運営導線づくりを通して、
              個人開発者や創作者、小さな活動の拠点づくりをサポートする入口です。
            </p>
          </article>

          <article className="aboutProjectCard">
            <h3>AIビジュアル実験室</h3>
            <p>
              AIで作ったイラストや写真風ビジュアルを、
              pixivやホームページに残しながら、見せ方や世界観を研究しています。
            </p>
          </article>

          <article className="aboutProjectCard">
            <h3>次のアプリ研究</h3>
            <p>
              日々の記録や好きなものの管理を、少し楽しく続けられるような
              アプリを制作予定です。
              詳細は形になってから少しずつ公開していきます。
            </p>
          </article>

          <article className="aboutProjectCard">
            <h3>記事・実験コンテンツ</h3>
            <p>
              note やホームページを通して、
              開発の裏側や世界観、制作中に見つけた気づきを発信しています。
            </p>
          </article>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p className="aboutSectionMini">LINKS</p>
          <h2>活動している場所</h2>
        </div>

        <div className="aboutTextBlock">
          <p>
            開発の裏側や試行錯誤、物語として読める記録は note で発信しています。
            日々の動きや更新のお知らせ、ちょっとしたボヤキは X で流しています。
          </p>
          <p>
            AIビジュアルやイラスト作品は pixiv にも投稿しています。
            研究所の外側と内側、どちらも気になったらのぞいてみてください。
          </p>
        </div>

        <div className="aboutLinkGrid">
          <a
            className="aboutEntryLink"
            href={NOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            noteを見る
          </a>

          <a
            className="aboutEntryLink"
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Xを見る
          </a>

          <a
            className="aboutEntryLink"
            href={PIXIV_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            pixivを見る
          </a>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutSectionHeader">
          <p className="aboutSectionMini">ENTRY</p>
          <h2>研究所の入口</h2>
        </div>

        <div className="aboutLinkGrid">
          <Link className="aboutEntryLink" to="/apps">
            アプリを見る
          </Link>

          <Link className="aboutEntryLink" to="/works">
            制作相談室へ
          </Link>

          <Link className="aboutEntryLink" to="/gallery">
            AIビジュアル実験室へ
          </Link>

          <Link className="aboutEntryLink" to="/questionnaire">
            アンケートに答える
          </Link>

          <Link className="aboutEntryLink" to="/contact">
            お問い合わせ
          </Link>
        </div>
      </section>
    </main>
  );
}