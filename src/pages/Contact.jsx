import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "";

const categoryOptions = [
  {
    value: "works",
    label: "HP制作・運営相談",
  },
  {
    value: "app",
    label: "アプリについて",
  },
  {
    value: "bug",
    label: "バグ報告",
  },
  {
    value: "idea",
    label: "改善案・アイデア",
  },
  {
    value: "collaboration",
    label: "コラボ・お仕事相談",
  },
  {
    value: "other",
    label: "その他",
  },
];

const initialForm = {
  name: "",
  email: "",
  category: "works",
  message: "",
};

function getCategoryFromQuery(type) {
  const allowedCategories = categoryOptions.map((item) => item.value);

  if (allowedCategories.includes(type)) {
    return type;
  }

  return "works";
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(() => ({
    ...initialForm,
    category: getCategoryFromQuery(searchParams.get("type")),
  }));
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = status === "submitting";
  const isSent = status === "sent";

  useEffect(() => {
    const categoryFromQuery = getCategoryFromQuery(searchParams.get("type"));

    setForm((prev) => ({
      ...prev,
      category: categoryFromQuery,
    }));
  }, [searchParams]);

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
      page_url: window.location.href,
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
      setForm({
        ...initialForm,
        category: getCategoryFromQuery(searchParams.get("type")),
      });
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
          <p className="smallTag">CONTACT DESK / LAB MEMO</p>
          <h2>お問い合わせ</h2>
          <p>
            アプリの感想・不具合報告・HP制作相談・運営まわりの相談など、
            Puku Labへの連絡はこちらからどうぞ。
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
                {categoryOptions.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label>
              お問い合わせ内容
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="相談したい内容、気になったこと、制作したいページのイメージなどを自由に書いてください。"
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
                HP制作・アプリ・AI画像・運営導線など、Puku Labに関する連絡を受け付けています
              </strong>
            </div>

            <div className="pageActions">
              <button className="navButton" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "送信中..." : "研究所へ届ける"}
              </button>

              <Link className="navButton ghost" to="/works">
                制作相談室へ戻る
              </Link>

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