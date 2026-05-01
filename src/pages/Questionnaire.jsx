import { Link } from "react-router-dom";
import { useState } from "react";
import "./Questionnaire.css";

const SURVEY_ENDPOINT =
  import.meta.env.VITE_SURVEY_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbxlN4pN8ERn4gp0jjK-pqvyRMguIXe8fq8_biKMe7BKyBJE9aKuqQnjA6HQ6xiu6hE/exec";

const featureOptions = [
  { value: "duplicate_check", label: "ダブり防止" },
  { value: "new_release", label: "新刊通知" },
  { value: "collection_visual", label: "コレクションの見える化" },
  { value: "room_growth", label: "部屋が育つ演出" },
  { value: "memo_review", label: "感想メモ・レビュー" },
];

const lifeProblemOptions = [
  { value: "collection", label: "本・漫画・コレクション管理" },
  { value: "task_schedule", label: "予定・タスク管理" },
  { value: "money_shopping", label: "買い物・お金まわり" },
  { value: "health_life", label: "生活習慣・体調管理" },
  { value: "travel_outing", label: "旅行・おでかけ" },
  { value: "communication", label: "人間関係・連絡" },
  { value: "learning_work", label: "学習・仕事・作業" },
  { value: "none", label: "今は特にない" },
];

const pukulabInterestOptions = [
  { value: "manga_management", label: "漫画・コレクション管理" },
  { value: "life_record", label: "生活を整えるアプリ" },
  { value: "travel_memory", label: "旅行・思い出系のアプリ" },
  { value: "ai_dev_log", label: "AIを使った開発記録" },
  { value: "note_story", label: "note記事・開発日誌" },
  { value: "fictional_world", label: "物語・世界観づくり" },
  { value: "local_project", label: "地域企画・リアル展開" },
  { value: "not_sure", label: "まだよく分からない" },
];

function getText(formData, key) {
  return String(formData.get(key) || "").trim();
}

export default function Questionnaire() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");

    if (!SURVEY_ENDPOINT) {
      setSubmitError(
        "現在、研究データの送信先を準備中です。少し時間をおいてからお試しください。"
      );
      return;
    }

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const payload = {
      form_version: "pukulab_marketing_survey_v2",
      submitted_at: new Date().toISOString(),

      age_range: getText(formData, "ageRange"),
      gender: getText(formData, "gender"),
      device_type: getText(formData, "deviceType"),
      app_decision_factor: getText(formData, "appDecisionFactor"),

      life_problem_categories: formData.getAll("lifeProblemCategories"),
      life_problem_note: getText(formData, "lifeProblemNote"),

      books_owned: getText(formData, "booksOwned"),
      duplicate_experience: getText(formData, "duplicateExperience"),
      biggest_problem: getText(formData, "biggestProblem"),
      wanted_features: formData.getAll("wantedFeatures"),

      pukulab_interests: formData.getAll("pukulabInterests"),
      note: getText(formData, "note"),

      page_url: window.location.href,
      user_agent: navigator.userAgent,
    };

    if (!payload.device_type || !payload.app_decision_factor) {
      setSubmitError("未回答の必須項目があります。");
      return;
    }

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
      formElement.reset();
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
            Puku Labでは、使いたくなるアプリやコンテンツを研究しています。
            <br />
            答えられる範囲で、あなたの声を聞かせてください。
          </p>
        </header>

        {isSubmitted ? (
          <section className="surveyThanks" aria-live="polite">
            <p className="smallTag">ANALYSIS COMPLETE</p>
            <h3>研究データを受け取りました！</h3>
            <p>
              回答ありがとうございました。
              <br />
              今後の改善や、新しい企画の参考に使わせていただきます。
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
              <legend>01. あなたについて</legend>

              <p className="surveyHint">
                年代・性別は任意です。答えたくない項目は飛ばして大丈夫です。
              </p>

              <label className="surveyLabel">
                <span className="questionText">年代</span>
                <select name="ageRange" defaultValue="">
                  <option value="">回答しない</option>
                  <option value="10s">10代</option>
                  <option value="20s">20代</option>
                  <option value="30s">30代</option>
                  <option value="40s">40代</option>
                  <option value="50s">50代</option>
                  <option value="60_over">60代以上</option>
                </select>
              </label>

              <label className="surveyLabel">
                <span className="questionText">性別</span>
                <select name="gender" defaultValue="">
                  <option value="">回答しない</option>
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                  <option value="other">その他</option>
                </select>
              </label>

              <label className="surveyLabel">
                <span className="questionText">
                  普段よく使う端末
                  <span className="requiredMark">*</span>
                </span>
                <select name="deviceType" defaultValue="" required>
                  <option value="">選んでください</option>
                  <option value="iphone">iPhone</option>
                  <option value="android">Android</option>
                  <option value="both_mobile">iPhone / Android 両方</option>
                  <option value="pc_main">PC中心</option>
                  <option value="other">その他</option>
                </select>
              </label>

              <label className="surveyLabel">
                <span className="questionText">
                  新しいアプリを入れるときの決め手
                  <span className="requiredMark">*</span>
                </span>
                <select name="appDecisionFactor" defaultValue="" required>
                  <option value="">選んでください</option>
                  <option value="easy_to_use">使いやすさ</option>
                  <option value="features">機能</option>
                  <option value="design">見た目・デザイン</option>
                  <option value="worldview">世界観・雰囲気</option>
                  <option value="price">価格</option>
                  <option value="reviews">口コミ・評価</option>
                  <option value="privacy">安心感・信頼感</option>
                </select>
              </label>
            </fieldset>

            <fieldset className="surveyBlock">
              <legend>02. 日常の困りごと</legend>

              <div className="surveyLabel">
                <span className="questionText">
                  日常や趣味で「少し面倒」と感じるものはありますか？（複数可）
                </span>

                <div className="checkboxGroup">
                  {lifeProblemOptions.map((item) => (
                    <label key={item.value}>
                      <input
                        type="checkbox"
                        name="lifeProblemCategories"
                        value={item.value}
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <label className="surveyLabel">
                <span className="questionText">
                  具体的に「ちょっと不便」と感じていることがあれば教えてください
                </span>
                <textarea name="lifeProblemNote" rows={4} />
              </label>
            </fieldset>

            <fieldset className="surveyBlock">
              <legend>03. 漫画・コレクションについて</legend>

              <p className="surveyHint">
                巻ログ改善の参考にします。漫画をあまり読まない方は飛ばして大丈夫です。
              </p>

              <label className="surveyLabel">
                <span className="questionText">漫画はどれくらい持っていますか？</span>
                <select name="booksOwned" defaultValue="">
                  <option value="">選んでください</option>
                  <option value="under_50">〜50冊</option>
                  <option value="50_200">50〜200冊</option>
                  <option value="200_500">200〜500冊</option>
                  <option value="500_over">500冊以上</option>
                  <option value="not_read">あまり読まない</option>
                </select>
              </label>

              <div className="surveyLabel">
                <span className="questionText">ダブり買いをしたことはありますか？</span>

                <div className="radioGroup">
                  <label>
                    <input type="radio" name="duplicateExperience" value="often" />
                    <span>よくある</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="duplicateExperience"
                      value="sometimes"
                    />
                    <span>たまにある</span>
                  </label>

                  <label>
                    <input type="radio" name="duplicateExperience" value="never" />
                    <span>ない</span>
                  </label>
                </div>
              </div>

              <label className="surveyLabel">
                <span className="questionText">
                  コレクション管理で困ることがあれば選んでください
                </span>
                <select name="biggestProblem" defaultValue="">
                  <option value="">選んでください</option>
                  <option value="forget_owned_books">持っている本を忘れる</option>
                  <option value="duplicate_purchase">ダブり購入</option>
                  <option value="new_release_check">新刊チェックが大変</option>
                  <option value="collection_management">
                    コレクション管理が面倒
                  </option>
                  <option value="storage_problem">置き場所や収納</option>
                  <option value="no_problem">特に困っていない</option>
                </select>
              </label>

              <div className="surveyLabel">
                <span className="questionText">
                  巻ログにあると嬉しい機能を選んでください（複数可）
                </span>

                <div className="checkboxGroup">
                  {featureOptions.map((feature) => (
                    <label key={feature.value}>
                      <input
                        type="checkbox"
                        name="wantedFeatures"
                        value={feature.value}
                      />
                      <span>{feature.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>

            <fieldset className="surveyBlock">
              <legend>04. Puku Labで気になるもの</legend>

              <div className="surveyLabel">
                <span className="questionText">
                  今後のPuku Labで少し気になるものがあれば教えてください（複数可）
                </span>

                <div className="checkboxGroup">
                  {pukulabInterestOptions.map((item) => (
                    <label key={item.value}>
                      <input
                        type="checkbox"
                        name="pukulabInterests"
                        value={item.value}
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>

            <fieldset className="surveyBlock">
              <legend>05. その他</legend>

              <label className="surveyLabel">
                <span className="questionText">
                  Puku Labやアプリについて、ひとことあればどうぞ
                </span>
                <textarea name="note" rows={5} />
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
                回答は、今後の改善・企画・マーケティング研究の参考に使われます
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