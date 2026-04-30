import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import "./Questionnaire.css";

const SURVEY_ENDPOINT = import.meta.env.VITE_SURVEY_ENDPOINT || "https://script.google.com/macros/s/AKfycbzr8yCaM-ejpk9_rUkbbN1m6M-x4OyLddhCxEeaAMAOkwQfLbua8-ET7XCc1Dz3N3ES4Q/exec";

const initialForm = {
  booksOwned: "",
  duplicateExperience: "",
  biggestProblem: "",
  wantedFeatures: [],
  missingAppNeed: "",
  missingAppIdea: "",
  deviceType: "",
  wantIos: "",
  appDecisionFactor: "",
  note: "",
};

const featureOptions = [
  { value: "duplicate_check", label: "ダブり防止" },
  { value: "new_release", label: "新刊通知" },
  { value: "collection_visual", label: "コレクションの見える化" },
  { value: "room_growth", label: "部屋が育つ演出" },
  { value: "memo_review", label: "感想メモ・レビュー" },
];

export default function Questionnaire() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const requiredFilled = useMemo(() => {
    return (
      form.booksOwned &&
      form.duplicateExperience &&
      form.biggestProblem &&
      form.missingAppNeed &&
      form.deviceType &&
      form.wantIos &&
      form.appDecisionFactor
    );
  }, [form]);

  function updateField(key, value) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function toggleFeature(value) {
    setForm((prev) => {
      const exists = prev.wantedFeatures.includes(value);

      return {
        ...prev,
        wantedFeatures: exists
          ? prev.wantedFeatures.filter((item) => item !== value)
          : [...prev.wantedFeatures, value],
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");

    if (!requiredFilled) {
      setSubmitError("未回答の必須項目があります。");
      return;
    }

    if (!SURVEY_ENDPOINT) {
      setSubmitError(
        "現在、研究データの送信先を準備中です。少し時間をおいてからお試しください。"
      );
      return;
    }

    const payload = {
      submitted_at: new Date().toISOString(),
      books_owned: form.booksOwned,
      duplicate_experience: form.duplicateExperience,
      biggest_problem: form.biggestProblem,
      wanted_features: form.wantedFeatures,
      missing_app_need: form.missingAppNeed,
      missing_app_idea: form.missingAppIdea.trim(),
      device_type: form.deviceType,
      want_ios: form.wantIos,
      app_decision_factor: form.appDecisionFactor,
      note: form.note.trim(),
      page_url: window.location.href,
      user_agent: navigator.userAgent,
    };

    try {
      setIsSubmitting(true);

      const body = new URLSearchParams();
      body.append("payload", JSON.stringify(payload));

      await fetch(SURVEY_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setIsSubmitted(true);
      setForm(initialForm);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      setSubmitError("送信に失敗しました。時間をおいてもう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="siteFrame innerPageFrame">
      <section className="chalkboard pageBoard surveyBoard">
        <header className="pageHead surveyHead">
          <p className="smallTag">MARKETING LAB</p>
          <h2>研究アンケート</h2>
          <p>
            Puku Labでは、使いたくなるアプリを研究しています。
            <br />
            あなたの声を、次の改善や新しいアプリ企画のヒントにします。
          </p>
        </header>

        {isSubmitted ? (
          <section className="surveyThanks" aria-live="polite">
            <p className="smallTag">ANALYSIS COMPLETE</p>
            <h3>研究データを受け取りました！</h3>
            <p>
              回答ありがとうございました。
              <br />
              巻ログの改善や、次のアプリ企画の参考に使わせていただきます。
            </p>

            <div className="pageActions">
              <Link className="navButton" to="/">
                ホームへ戻る
              </Link>

              <button
                type="button"
                className="navButton ghost"
                onClick={() => setIsSubmitted(false)}
              >
                もう一度回答する
              </button>
            </div>
          </section>
        ) : (
          <form className="surveyForm" onSubmit={handleSubmit}>
            <fieldset className="surveyBlock">
              <legend>01. あなたのコレクションについて</legend>

              <label className="surveyLabel">
                <span className="questionText">
                  漫画はどれくらい持っていますか？
                  <span className="requiredMark">*</span>
                </span>
                <select
                  value={form.booksOwned}
                  onChange={(e) => updateField("booksOwned", e.target.value)}
                >
                  <option value="">選んでください</option>
                  <option value="under_50">〜50冊</option>
                  <option value="50_200">50〜200冊</option>
                  <option value="200_500">200〜500冊</option>
                  <option value="500_over">500冊以上</option>
                </select>
              </label>

              <div className="surveyLabel">
                <span className="questionText">
                  ダブり買いをしたことはありますか？
                  <span className="requiredMark">*</span>
                </span>

                <div className="radioGroup">
                  <label>
                    <input
                      type="radio"
                      name="duplicateExperience"
                      value="often"
                      checked={form.duplicateExperience === "often"}
                      onChange={(e) =>
                        updateField("duplicateExperience", e.target.value)
                      }
                    />
                    <span>よくある</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="duplicateExperience"
                      value="sometimes"
                      checked={form.duplicateExperience === "sometimes"}
                      onChange={(e) =>
                        updateField("duplicateExperience", e.target.value)
                      }
                    />
                    <span>たまにある</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="duplicateExperience"
                      value="never"
                      checked={form.duplicateExperience === "never"}
                      onChange={(e) =>
                        updateField("duplicateExperience", e.target.value)
                      }
                    />
                    <span>ない</span>
                  </label>
                </div>
              </div>

              <label className="surveyLabel">
                <span className="questionText">
                  いちばん困ることは何ですか？
                  <span className="requiredMark">*</span>
                </span>
                <select
                  value={form.biggestProblem}
                  onChange={(e) => updateField("biggestProblem", e.target.value)}
                >
                  <option value="">選んでください</option>
                  <option value="forget_owned_books">持っている本を忘れる</option>
                  <option value="duplicate_purchase">ダブり購入</option>
                  <option value="new_release_check">新刊チェックが大変</option>
                  <option value="collection_management">
                    コレクション管理が面倒
                  </option>
                  <option value="storage_problem">置き場所や収納</option>
                </select>
              </label>
            </fieldset>

            <fieldset className="surveyBlock">
              <legend>02. 巻ログにほしいもの</legend>

              <div className="surveyLabel">
                <span className="questionText">
                  ほしい機能を選んでください（複数可）
                </span>

                <div className="checkboxGroup">
                  {featureOptions.map((feature) => (
                    <label key={feature.value}>
                      <input
                        type="checkbox"
                        checked={form.wantedFeatures.includes(feature.value)}
                        onChange={() => toggleFeature(feature.value)}
                      />
                      <span>{feature.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>

            <fieldset className="surveyBlock">
              <legend>03. 次にほしいアプリの研究</legend>

              <div className="surveyLabel">
                <span className="questionText">
                  欲しいのにストアにないアプリはありますか？
                  <span className="requiredMark">*</span>
                </span>

                <div className="radioGroup">
                  <label>
                    <input
                      type="radio"
                      name="missingAppNeed"
                      value="yes_clear"
                      checked={form.missingAppNeed === "yes_clear"}
                      onChange={(e) =>
                        updateField("missingAppNeed", e.target.value)
                      }
                    />
                    <span>はっきりある</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="missingAppNeed"
                      value="yes_maybe"
                      checked={form.missingAppNeed === "yes_maybe"}
                      onChange={(e) =>
                        updateField("missingAppNeed", e.target.value)
                      }
                    />
                    <span>なんとなくある</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="missingAppNeed"
                      value="none"
                      checked={form.missingAppNeed === "none"}
                      onChange={(e) =>
                        updateField("missingAppNeed", e.target.value)
                      }
                    />
                    <span>今は特にない</span>
                  </label>
                </div>
              </div>

              <label className="surveyLabel">
                <span className="questionText">どんなアプリが欲しいですか？</span>
                <textarea
                  rows={5}
                  value={form.missingAppIdea}
                  onChange={(e) => updateField("missingAppIdea", e.target.value)}
                />
              </label>
            </fieldset>

            <fieldset className="surveyBlock">
              <legend>04. 端末と今後の展開</legend>

              <label className="surveyLabel">
                <span className="questionText">
                  普段使っている端末は？
                  <span className="requiredMark">*</span>
                </span>
                <select
                  value={form.deviceType}
                  onChange={(e) => updateField("deviceType", e.target.value)}
                >
                  <option value="">選んでください</option>
                  <option value="iphone">iPhone</option>
                  <option value="android">Android</option>
                  <option value="both">両方</option>
                </select>
              </label>

              <div className="surveyLabel">
                <span className="questionText">
                  iOS版があれば使いたいですか？
                  <span className="requiredMark">*</span>
                </span>

                <div className="radioGroup">
                  <label>
                    <input
                      type="radio"
                      name="wantIos"
                      value="strong_yes"
                      checked={form.wantIos === "strong_yes"}
                      onChange={(e) => updateField("wantIos", e.target.value)}
                    />
                    <span>ぜひ使いたい</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="wantIos"
                      value="maybe"
                      checked={form.wantIos === "maybe"}
                      onChange={(e) => updateField("wantIos", e.target.value)}
                    />
                    <span>内容次第</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="wantIos"
                      value="not_needed"
                      checked={form.wantIos === "not_needed"}
                      onChange={(e) => updateField("wantIos", e.target.value)}
                    />
                    <span>特に必要ない</span>
                  </label>
                </div>
              </div>

              <label className="surveyLabel">
                <span className="questionText">
                  新しいアプリを入れるときの決め手は？
                  <span className="requiredMark">*</span>
                </span>
                <select
                  value={form.appDecisionFactor}
                  onChange={(e) =>
                    updateField("appDecisionFactor", e.target.value)
                  }
                >
                  <option value="">選んでください</option>
                  <option value="design">見た目</option>
                  <option value="features">機能</option>
                  <option value="easy_to_use">使いやすさ</option>
                  <option value="price">価格</option>
                  <option value="reviews">口コミ・評価</option>
                </select>
              </label>
            </fieldset>

            <fieldset className="surveyBlock">
              <legend>05. その他</legend>

              <label className="surveyLabel">
                <span className="questionText">ひとことメモ</span>
                <textarea
                  rows={5}
                  value={form.note}
                  onChange={(e) => updateField("note", e.target.value)}
                />
              </label>
            </fieldset>

            {submitError ? (
              <p className="surveyError" aria-live="polite">
                {submitError}
              </p>
            ) : null}

            <div className="metricPanel">
              <p>研究メモ</p>
              <strong>
                回答は今後の改善・新アプリ企画の参考に使われます
              </strong>
            </div>

            <div className="pageActions">
              <button className="navButton" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "送信中..." : "研究データを送る"}
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