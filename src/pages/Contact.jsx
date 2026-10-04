import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./EntsumugiContact.css";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "";

const categoryOptions = [
  { value: "works", label: "HP制作・運営相談" },
  { value: "entsumugi", label: "縁紡・議員向けサポート相談" },
  { value: "app", label: "アプリについて" },
  { value: "bug", label: "バグ報告" },
  { value: "idea", label: "改善案・アイデア" },
  { value: "collaboration", label: "コラボ・お仕事相談" },
  { value: "other", label: "その他" },
];

const initialForm = {
  name: "",
  email: "",
  category: "works",
  message: "",
  website: "",
};

function getCategoryFromQuery(type) {
  const allowedCategories = categoryOptions.map((item) => item.value);
  return allowedCategories.includes(type) ? type : "works";
}

function getCategoryLabel(value) {
  return categoryOptions.find((item) => item.value === value)?.label || "その他";
}

function getEntsumugiContext(searchParams) {
  if (searchParams.get("type") !== "entsumugi") return null;

  const source = searchParams.get("source");
  const rows = [];

  const push = (label, key) => {
    const value = searchParams.get(key);
    if (value) rows.push([label, value]);
  };

  push("希望コース", "plan");
  push("月額目安", "monthly");
  push("診断時の料金", "price");
  push("初期設定・追加制作", "setup");
  push("初月目安", "firstMonth");
  push("SNS", "sns");
  push("LINE公式", "line");
  push("WEB", "web");
  push("追加制作", "creative");

  const sourceLabel = source === "estimate"
    ? "料金目安シミュレーター"
    : source === "diagnosis"
      ? "コース診断"
      : "縁紡LP";

  return { source, sourceLabel, rows };
}

function makePrefill(context) {
  if (!context || context.rows.length === 0) return "";

  const summary = context.rows
    .map(([label, value]) => `・${label}：${value}`)
    .join("\n");

  return `【${context.sourceLabel}の結果】\n${summary}\n\n相談したいこと：\n`;
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const entsumugiContext = useMemo(() => getEntsumugiContext(searchParams), [searchParams]);
  const prefillMessage = useMemo(() => makePrefill(entsumugiContext), [entsumugiContext]);

  const [form, setForm] = useState(() => ({
    ...initialForm,
    category: getCategoryFromQuery(searchParams.get("type")),
    message: prefillMessage,
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
      message: prev.message.trim() ? prev.message : prefillMessage,
    }));
  }, [prefillMessage, searchParams]);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setErrorMessage("");

    if (!CONTACT_ENDPOINT) {
      setErrorMessage("現在、送信機能の接続準備中です。お急ぎの場合はXまたはnoteからご連絡ください。");
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMessage("未入力の項目があります。");
      return;
    }

    if (form.website.trim()) {
      setStatus("sent");
      return;
    }

    const categoryLabel = getCategoryLabel(form.category);
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: `【Puku Lab】${categoryLabel}｜${form.name.trim()}様`,
      category: categoryLabel,
      category_code: form.category,
      message: form.message.trim(),
      source: entsumugiContext ? `Puku Lab公式HP ${entsumugiContext.sourceLabel}` : "Puku Lab公式HP お問い合わせフォーム",
      simulation_context: entsumugiContext?.rows?.map(([label, value]) => `${label}: ${value}`).join(" / ") || "",
      page_url: window.location.href,
      submitted_at_jst: new Intl.DateTimeFormat("ja-JP", {
        timeZone: "Asia/Tokyo",
        dateStyle: "full",
        timeStyle: "medium",
      }).format(new Date()),
      _gotcha: form.website,
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
        const result = await response.json().catch(() => null);
        const formspreeMessage = result?.errors?.[0]?.message;
        throw new Error(formspreeMessage || "送信に失敗しました。");
      }

      setStatus("sent");
      setForm({
        ...initialForm,
        category: getCategoryFromQuery(searchParams.get("type")),
      });
    } catch (error) {
      console.error(error);
      setStatus("idle");
      setErrorMessage("送信に失敗しました。通信状況を確認して、時間をおいてもう一度お試しください。");
    }
  }

  return (
    <main className="siteFrame innerPageFrame">
      <section className="chalkboard pageBoard">
        <header className="pageHead">
          <p className="smallTag">CONTACT DESK / LAB MEMO</p>
          <h2>お問い合わせ</h2>
          <p>
            アプリの感想・不具合報告・HP制作相談・運営まわりの相談など、Puku Labへの連絡はこちらからどうぞ。
          </p>
        </header>

        {isSent ? (
          <section className="surveyThanks" aria-live="polite">
            <p className="smallTag">MESSAGE RECEIVED</p>
            <h3>メッセージを受け取りました</h3>
            <p>
              内容を確認して、必要に応じてご連絡します。
            </p>
            <div className="pageActions">
              <button type="button" className="navButton" onClick={() => setStatus("idle")}>もう一度送る</button>
              <Link className="navButton ghost" to="/">戻る</Link>
            </div>
          </section>
        ) : (
          <form className="contactForm" onSubmit={onSubmit}>
            {entsumugiContext?.rows?.length ? (
              <section className="entsumugiContactContext" aria-label="引き継いだ診断・料金目安">
                <div>
                  <span>引き継ぎ済み</span>
                  <strong>{entsumugiContext.sourceLabel}の内容</strong>
                </div>
                <dl>
                  {entsumugiContext.rows.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <p>この内容はお問い合わせ本文にも入っています。必要に応じて書き換えてください。</p>
              </section>
            ) : null}

            <label>
              お名前
              <input type="text" name="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} autoComplete="name" required />
            </label>

            <label>
              メール
              <input type="email" name="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} autoComplete="email" required />
            </label>

            <label>
              内容の種類
              <select name="category" value={form.category} onChange={(event) => updateField("category", event.target.value)}>
                {categoryOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
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

            <label aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>
              ウェブサイト
              <input type="text" name="_gotcha" value={form.website} onChange={(event) => updateField("website", event.target.value)} tabIndex={-1} autoComplete="off" />
            </label>

            {errorMessage ? <p className="surveyError" aria-live="polite">{errorMessage}</p> : null}

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
              <Link className="navButton ghost" to="/">ホームへ戻る</Link>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
