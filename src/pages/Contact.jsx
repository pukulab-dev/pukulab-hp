import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="siteFrame innerPageFrame">
      <section className="chalkboard pageBoard">
        <header className="pageHead">
          <p className="smallTag">CONTACT DESK</p>
          <h2>アプリについてのお問い合わせ</h2>
          <p>
            改善案・バグ報告・マーケ相談など、気軽にどうぞ。
          </p>
        </header>

        <form className="contactForm" onSubmit={onSubmit}>
          <label>
            お名前
            <input type="text" name="name" required />
          </label>

          <label>
            メール
            <input type="email" name="email" required />
          </label>

          <label>
            お問い合わせ内容
            <textarea name="message" rows={5} required />
          </label>

          <button className="navButton" type="submit">
            送信
          </button>

          {sent ? (
            <p className="successText">
              送信しました。24時間以内に返信します。
            </p>
          ) : null}
        </form>

        <div className="pageActions">
          <Link className="navButton ghost" to="/">
            ホームへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}