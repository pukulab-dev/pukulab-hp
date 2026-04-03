import { useNavigate } from "react-router-dom";
import "./kanlog.css";

import homeImg from "../assets/Screenshot_home.png";
import shelfImg from "../assets/Screenshot_hondana.png";
import detailImg from "../assets/Screenshot_book.png";

const PLAY_STORE_URL = "#";

export default function Kanlog() {
  const navigate = useNavigate();

  return (
    <main className="kanlog-page">
      <div className="kanlog-board">
        <aside className="kanlog-left">
          <p className="kanlog-eyebrow">KANLOG / MANGA MANAGEMENT APP</p>
          <h1 className="kanlog-title">
            巻ログ｜
            <br />
            漫画の巻数管理
            <br />
            ダブり防止アプリ
          </h1>
          <p className="kanlog-lead">
            るのと始める漫画管理。持っている漫画の巻数を記録して、ダブり買いを防ぎながら、
            自分だけの本棚を育てていく漫画管理アプリです。何巻まで買ったか分からなくなりやすい人でも、
            持っている巻や抜け巻きを見返しやすく整理できるようにしています。
          </p>

          <div className="kanlog-tags">
            <span>巻数管理</span>
            <span>ダブり防止</span>
            <span>一覧整理</span>
            <span>育成要素</span>
          </div>

          <section className="kanlog-panel">
            <p className="kanlog-label">CURRENT STATUS</p>
            <h2>現在の状況</h2>
            <p>
              巻ログは現在、クローズドテスト段階です。公開に向けて、使いやすさの調整や
              漫画管理に役立つ機能の追加を進めています。紙の漫画を集めている人が、
              「うっかり同じ巻を買ってしまった」を減らせるように整えています。
            </p>
          </section>

          <section className="kanlog-panel kanlog-cta-panel">
            <p className="kanlog-label">GET APP</p>
            <h2>公開後はここから使えるように</h2>
            <p>
              公開後は Google Play からすぐにダウンロードできるようにする予定です。
              漫画の巻数管理やダブり防止をしたい人は、公開後にチェックしてもらえるとうれしいです。
            </p>

            <div className="kanlog-store-actions">
              <a
                className="storeButton primary"
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Google Play で漫画管理アプリ巻ログを見る"
              >
                Google Play で見る
              </a>

              <button
                type="button"
                className="storeButton ghost"
                onClick={() => navigate("/questionnaire")}
              >
                アンケートを見る
              </button>
            </div>
          </section>

          <div className="kanlog-actions">
            <button type="button" onClick={() => navigate("/contact")}>
              巻ログについて問い合わせる
            </button>
            <button
              type="button"
              className="ghost"
              onClick={() => navigate("/apps")}
            >
              アプリ一覧へ戻る
            </button>
          </div>
        </aside>

        <section className="kanlog-right">
          <div className="kanlog-top">
            <section className="kanlog-panel">
              <p className="kanlog-label">APP PREVIEW</p>

              <div className="preview-row">
                <article className="preview-card">
                  <span>HOME</span>
                  <strong>巻ログ</strong>
                  <p>本棚を育てる漫画管理アプリ</p>
                </article>

                <article className="preview-card active">
                  <span>SHELF</span>
                  <strong>本棚一覧</strong>
                  <p>持っている巻を見やすく整理して確認</p>
                </article>

                <article className="preview-card">
                  <span>DETAIL</span>
                  <strong>作品詳細</strong>
                  <p>抜け巻や所持巻をすぐ確認できる</p>
                </article>
              </div>
            </section>

            <section className="kanlog-panel">
              <p className="kanlog-label">ABOUT</p>
              <h2>どんなアプリ？</h2>
              <p>
                巻ログは、紙漫画を中心にコレクション管理をしやすくするための漫画管理アプリです。
                何巻まで持っているか、まだ買っていない巻はどこか、同じ巻をうっかり買って
                しまわないかを、楽しく確認できるようにしています。
              </p>
              <p>
                ただ記録するだけではなく、部屋や世界観を少しずつ育てていく楽しさも加えながら、
                「集める・残す・眺める」が気持ちいい体験を目指しています。
                漫画の巻数管理やダブり防止を、少し愛着の湧く形で続けられるようにしたアプリです。
              </p>
            </section>
          </div>

          <div className="kanlog-middle">
            <section className="kanlog-panel">
              <p className="kanlog-label">FEATURES</p>
              <h2>主な機能</h2>
              <ul>
                <li>所持している漫画の巻数を記録</li>
                <li>買っていない巻を見つけやすく整理</li>
                <li>ダブり買い防止の確認</li>
                <li>コレクションを見返しやすい一覧表示</li>
                <li>お気に入りの表紙やレシートなど撮影した写真の保存</li>
              </ul>
            </section>

            <section className="kanlog-panel">
              <p className="kanlog-label">FOR WHO</p>
              <h2>こんな人に向いています</h2>
              <ul>
                <li>紙の漫画をたくさん持っている人</li>
                <li>何巻まで買ったか忘れやすい人</li>
                <li>同じ巻をうっかりダブって買いたくない人</li>
                <li>本棚やコレクションを見るのが好きな人</li>
                <li>管理アプリでも世界観や遊び心を楽しみたい人</li>
              </ul>
            </section>

            <section className="kanlog-panel">
              <p className="kanlog-label">NEXT</p>
              <h2>今後追加していきたいこと</h2>
              <ul>
                <li>世界観の強化</li>
                <li>登録作品数の増加</li>
                <li>保存できる写真数の増加</li>
                <li>新刊情報</li>
                <li>クラウド機能</li>
              </ul>
            </section>
          </div>

          <section className="kanlog-panel kanlog-screens-panel">
            <p className="kanlog-label">APP SCREEN IMAGE</p>
            <div className="kanlog-screens-head">
              <div>
                <h2>アプリ画面イメージ</h2>
                <p className="kanlog-screens-copy">
                  実際の画面はこんな雰囲気です。漫画の巻数管理や本棚整理を、
                  見返しやすく続けやすい形にしています。
                </p>
              </div>
            </div>

            <div className="screen-row">
              <article className="screen-card">
                <div className="screen-imageWrap">
                  <img src={homeImg} alt="巻ログのホーム画面。漫画管理アプリのトップ画面" />
                </div>
                <h3>ホーム画面</h3>
                <p>生活と本棚をつなぐ入口になる画面。</p>
              </article>

              <article className="screen-card">
                <div className="screen-imageWrap">
                  <img
                    src={shelfImg}
                    alt="巻ログの本棚一覧画面。所持している漫画の巻数を整理して確認できる画面"
                  />
                </div>
                <h3>本棚一覧</h3>
                <p>持っている巻や抜け巻きを見返しやすく整理。</p>
              </article>

              <article className="screen-card">
                <div className="screen-imageWrap">
                  <img
                    src={detailImg}
                    alt="巻ログの作品詳細画面。何巻まで持っているか確認しやすい画面"
                  />
                </div>
                <h3>作品詳細</h3>
                <p>
                  何巻まで持っているかをひと目で確認。追加も簡単に出来るようにしてあります
                </p>
              </article>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}