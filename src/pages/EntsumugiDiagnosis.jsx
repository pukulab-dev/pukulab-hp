import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Entsumugi.css";
import { recommendPlan, plans as pricePlans, yen } from "../data/entsumugiPlans.js";

const questions = [
  {
    id: "delegate",
    kicker: "Q1",
    title: "発信を、どこまで自分でやりたいですか？",
    options: [
      { value: "self", label: "基本は自分で管理したい" },
      { value: "assist", label: "文章づくりなどをAIに手伝ってほしい" },
      { value: "operate", label: "原稿や投稿を継続して任せたい" },
      { value: "whole", label: "広報全体を相談しながら任せたい" },
    ],
  },
  {
    id: "media",
    kicker: "Q2",
    title: "継続して使いたい媒体は、どのくらいですか？",
    options: [
      { value: "one", label: "1媒体くらい" },
      { value: "two", label: "2媒体くらい" },
      { value: "three", label: "3媒体くらい" },
      { value: "many", label: "4媒体以上" },
      { value: "unsure", label: "まだ決まっていない" },
    ],
  },
  {
    id: "pain",
    kicker: "Q3",
    title: "今いちばん減らしたい負担は？",
    options: [
      { value: "organize", label: "予定・活動・原稿などの整理" },
      { value: "write", label: "何をどう書けばいいか考える時間" },
      { value: "continue", label: "投稿が続かない・手が回らないこと" },
      { value: "strategy", label: "媒体の使い分けや広報全体の判断" },
    ],
  },
];

const plans = {
  app: {
    name: "アプリ利用のみ",
    price: "月額 1,980円",
    copy: "まずは情報を一か所に整理したい方に。",
    detail: "予定・活動・原稿・相談・領収書などを、自分と事務所で管理する使い方が近そうです。",
  },
  ai: {
    name: "AI秘書コース",
    price: "月額 25,000円",
    copy: "自分で運用しながら、AIの力を借りたい方に。",
    detail: "日程・案件・原稿づくりなどをAIで補助しつつ、最終判断や投稿は自分で進める使い方が近そうです。AI利用回数の追加枠は1枠1,000円で追加できます。",
  },
  basic: {
    name: "基本運用プラン",
    price: "月額 66,000円",
    copy: "原稿・投稿を継続して任せたい方に。",
    detail: "2媒体程度を中心に、原稿作成・投稿代行・簡易画像・発信相談まで任せる使い方が近そうです。",
  },
  pr: {
    name: "広報運用プラン",
    price: "月額 99,000円",
    copy: "複数媒体を使い分けながら、企画も相談したい方に。",
    detail: "媒体別の文章や簡易動画も含め、3媒体程度を継続して運用する使い方が近そうです。",
  },
  room: {
    name: "外部広報室プラン",
    price: "月額 148,000円",
    copy: "発信全体を外部広報室のように任せたい方に。",
    detail: "媒体選定からLINE・HPの軽微更新、月次振り返りまで、広報全体を一緒に組み立てる使い方が近そうです。",
  },
};

export default function EntsumugiDiagnosis() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const completed = questions.every((question) => answers[question.id]);

  const resultKey = useMemo(() => recommendPlan(answers), [answers]);

  const result = { ...plans[resultKey], name: pricePlans[resultKey].name, price: `月額 ${yen(pricePlans[resultKey].monthly)}円（税込）` };
  const contactParams = new URLSearchParams({
    type: "entsumugi",
    source: "diagnosis",
    plan: result.name,
    price: result.price,
  }).toString();

  function reset() {
    setAnswers({});
    setShowResult(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="enPage enToolPage">
      <header className="enHeader">
        <div className="enHeaderInner">
          <Link to="/entsumugi" className="enBrand"><strong>縁紡</strong><span>議員サポートデスク</span></Link>
          <div className="enHeaderActions">
            <Link className="enBackLink" to="/entsumugi/startup">候補者向け</Link>
            <Link className="enBackLink" to="/entsumugi">縁紡トップへ</Link>
          </div>
        </div>
      </header>

      <section className="enToolHero enDiagnosisHero">
        <div className="enPills enToolPills"><span>質問は3つだけ</span><span>約30秒</span></div>
        <p className="enEyebrow">COURSE DIAGNOSIS</p>
        <h1>あなたと相性のいい<br />コースを3問で。</h1>
        <p>厳密な判定ではなく、今の希望に近い使い方を探すための簡易診断です。迷ったら、直感に近いものを選んでください。</p>
      </section>

      {!showResult ? (
        <section className="enDiagnosisPanel">
          <div className="enDiagnosisProgress" aria-label={`回答 ${Object.keys(answers).length} / 3`}>
            <span style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }} />
          </div>

          {questions.map((question) => (
            <fieldset className="enQuestion" key={question.id}>
              <legend><span>{question.kicker}</span>{question.title}</legend>
              <div className="enChoiceGrid">
                {question.options.map((option) => {
                  const checked = answers[question.id] === option.value;
                  return (
                    <label className={`enChoice ${checked ? "selected" : ""}`} key={option.value}>
                      <input
                        type="radio"
                        name={question.id}
                        value={option.value}
                        checked={checked}
                        onChange={() => setAnswers((prev) => ({ ...prev, [question.id]: option.value }))}
                      />
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <button className="enButton primary enToolSubmit" type="button" disabled={!completed} onClick={() => setShowResult(true)}>
            診断結果を見る →
          </button>
          {!completed ? <p className="enFormHint">3問すべて選ぶと結果を表示できます。</p> : null}
        </section>
      ) : (
        <section className="enDiagnosisResult" aria-live="polite">
          <p className="enEyebrow">YOUR MATCH</p>
          <p className="enSectionCatch">あなたに近そうなのは</p>
          <h2>{result.name}</h2>
          <strong className="enResultPrice">{result.price}</strong>
          <h3>{result.copy}</h3>
          <p>{result.detail}</p>
          <div className="enDiagnosisNext">
            <span>次は</span>
            <strong>必要な準備状況を選んで、初月と翌月以降の料金目安を確認できます。</strong>
          </div>
          <div className="enResultActions">
            <Link className="enButton primary" to={`/entsumugi/estimate?plan=${resultKey}`}>このコースで料金目安を見る →</Link>
            <Link className="enButton secondary" to={`/contact?${contactParams}`}>この結果で相談する</Link>
            <button className="enTextButton" type="button" onClick={reset}>もう一度診断する</button>
          </div>
          <p className="enToolDisclaimer">※ 簡易診断です。実際の発信状況・事務所体制・希望する支援範囲によって、より適したコースが変わる場合があります。</p>
        </section>
      )}
    </main>
  );
}
