import { useState } from "react";
import { Link } from "react-router-dom";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "";

const initialForm = {
  name: "",
  email: "",
  category: "app",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = status === "submitting";
  const isSent = status === "sent";

  function updateField(key, value) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setErrorMessage("");

    if (!CONTACT_ENDPOINT) {
      setErrorMessage(
        "現在、送信機能の接続準備中です。お急ぎの場合はXまたはnoteからご連絡ください。"
      );
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMessage("未入力の項目があります。");
      return;
    }

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      category: form.category,
      message: form.message.trim(),
      source: "Puku Lab Contact",
      submitted_at: new Date().toISOString(),
    };

    try {
      setStatus("submitting");

      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("送信に失敗しました。");
      }

      setStatus("sent");
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setStatus("idle");
      setErrorMessage(
        "送信に失敗しました。時間をおいてもう一度お試しください。"
      );
    }
  }

  return (
    <main className="siteFrame innerPageFrame">
      <section className="chalkboard pageBoard">
        <header className="pageHead">
          <p className="smallTag">CONTACT DESK</p>
          <h2>アプリについてのお問い合わせ</h2>
          <p>
            改善案・バグ報告・マーケ相談など、気軽にどうぞ。
            <br />
            研究所宛てのメモとして、大切に確認します。
          </p>
        </header>

        {isSent ? (
          <section className="surveyThanks" aria-live="polite">
            <p className="smallTag">MESSAGE RECEIVED</p>
            <h3>メッセージを受け取りました</h3>
            <p>
              研究所にお問い合わせ内容が届きました。
              <br />
              内容を確認して、必要に応じてご連絡します。
            </p>

            <div className="pageActions">
              <button
                type="button"
                className="navButton"
                onClick={() => setStatus("idle")}
              >
                もう一度送る
              </button>

              <Link className="navButton ghost" to="/">
                ホームへ戻る
              </Link>
            </div>
          </section>
        ) : (
          <form className="contactForm" onSubmit={onSubmit}>
            <label>
              お名前
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                required
              />
            </label>

            <label>
              メール
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
              />
            </label>

            <label>
              内容の種類
              <select
                name="category"
                value={form.category}
                onChange={(event) => updateField("category", event.target.value)}
              >
                <option value="app">アプリについて</option>
                <option value="bug">バグ報告</option>
                <option value="idea">改善案・アイデア</option>
                <option value="business">相談・お仕事</option>
                <option value="other">その他</option>
              </select>
            </label>

            <label>
              お問い合わせ内容
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                required
              />
            </label>

            {errorMessage ? (
              <p className="surveyError" aria-live="polite">
                {errorMessage}
              </p>
            ) : null}

            <div className="metricPanel">
              <p>CONTACT MEMO</p>
              <strong>
                いただいた内容は、返信・改善・今後の開発の参考に使います
              </strong>
            </div>

            <div className="pageActions">
              <button className="navButton" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "送信中..." : "研究所へ届ける"}
              </button>

              <Link className="navButton ghost" to="/">
                ホームへ戻る
              </Link>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}