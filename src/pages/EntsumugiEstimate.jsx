import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { plans, upcomingPlans, yen, webChoices, estimatePrice } from "../data/entsumugiPlans.js";
import "./Entsumugi.css";
import "./EntsumugiEstimate.css";

const lineChoices = [
  { value: "none", label: "初期準備は不要" },
  { value: "handover", label: "既存LINEの引継ぎ" },
  { value: "new", label: "LINE公式を新規開設" },
];

export default function EntsumugiEstimate() {
  const [params] = useSearchParams();
  const startup = params.get("preset") === "startup";
  const incoming = params.get("plan");
  const validPlan = incoming === "none" || Object.hasOwn(plans, incoming);
  const [plan, setPlan] = useState(validPlan ? incoming : startup ? "none" : "basic");
  const [existing, setExisting] = useState(0);
  const [newSns, setNewSns] = useState(startup ? 1 : 0);
  const [line, setLine] = useState(startup ? "new" : "none");
  const [web, setWeb] = useState(startup ? "newSite" : "none");
  const [extra, setExtra] = useState(false);
  const result = estimatePrice({ plan, existing, newSns, line, web, extra });
  const planName = plan === "none" ? "月額契約なし（初期制作のみ）" : plans[plan].name;
  const contactParams = new URLSearchParams({
    type: "entsumugi", source: "estimate", plan: planName,
    monthly: result.noMonthly ? "なし" : `${yen(result.monthly)}円 / 月${plan === "busy" ? "（繁忙月）" : ""}`,
    setup: `${yen(result.setup)}円${result.needsQuote ? "＋個別相談分" : ""}`,
    firstMonth: `${yen(result.firstMonth)}円${result.needsQuote ? "＋個別相談分" : ""}`,
    sns: `既存引継ぎ ${existing}媒体 / 新規 ${newSns}媒体（LINEを除く）`,
    line: lineChoices.find((item) => item.value === line)?.label || "未選択",
    web: webChoices.find((item) => item.value === web)?.label || "未選択",
    creative: extra ? "追加制作を相談したい（計算に含まず）" : "追加制作なし",
  }).toString();

  function resetStartup() {
    setPlan("none"); setExisting(0); setNewSns(1); setLine("new"); setWeb("newSite"); setExtra(false);
  }

  return <main className="enPage enToolPage enPublicEstimatePage">
    <header className="enHeader"><div className="enHeaderInner">
      <Link to="/entsumugi" className="enBrand"><strong>縁紡</strong><span>議員サポートデスク</span></Link>
      <div className="enHeaderActions"><Link className="enBackLink" to="/entsumugi/diagnosis">コース診断</Link><Link className="enBackLink" to="/entsumugi">縁紡トップへ</Link></div>
    </div></header>
    <section className="enToolHero enEstimateHero enPublicEstimateHero">
      <p className="enEyebrow">PRICE GUIDE</p><p className="enPublicEstimateCatch">自分の場合、いくらから？</p>
      <h1>料金目安シミュレーター</h1>
      <p>初期制作だけ、または月額サポートとの組み合わせを選び、費用の目安を確認できます。表示価格はすべて税込です。</p>
    </section>
    {startup && <div className="enPresetBanner enPublicPresetBanner"><div><strong>候補者向けスタートアップの条件を選択済みです</strong><p>SNS新規1媒体・LINE新規・簡易HP3ページ。月額契約なしの初期制作例です。</p></div><button type="button" onClick={resetStartup}>初期条件に戻す</button></div>}
    <div className="enPublicEstimateLayout">
      <section className="enPublicEstimateForm" aria-label="料金計算の条件">
        <fieldset className="enEstimateBlock enPublicEstimateBlock enEstimateFieldset">
          <legend>1. 月額サポート（任意）</legend>
          <p className="enEstimateLead">初期制作だけでもご依頼いただけます。継続利用・運用代行が必要な場合は、月額コースを選んでください。</p>
          <div className="enPublicPlanGrid">
            <label className={`enPublicPlanOption ${plan === "none" ? "selected" : ""}`}>
              <input type="radio" name="plan" value="none" checked={plan === "none"} onChange={() => setPlan("none")} />
              <span><strong>月額契約なし</strong><b>0円 / 月</b><small>初期制作だけを依頼したい方へ。</small></span>
            </label>
            {Object.entries(plans).map(([key, item]) => <label className={`enPublicPlanOption ${plan === key ? "selected" : ""}`} key={key}>
              <input type="radio" name="plan" value={key} checked={plan === key} onChange={() => setPlan(key)} />
              <span><strong>{item.name}</strong><b>{yen(item.monthly)}円 / 月</b><small>{item.note}</small></span>
            </label>)}
          </div>
          {(plan === "app" || plan === "ai") && <p className="enEstimateLead">人的な原稿作成・投稿代行は含みません。必要な作業は別途ご相談ください。</p>}
          <div className="enPublicEstimateNotice" style={{ marginTop: "18px" }}>
            <strong>{upcomingPlans.supporter.name}：月額{yen(upcomingPlans.supporter.monthly)}円（税込・開発中）</strong>
            <p>現在は提供準備中のため、このシミュレーターの選択・合計には含めていません。<a href="/entsumugi/startup#after-launch">提供予定の内容を見る</a></p>
          </div>
        </fieldset>
        <fieldset className="enEstimateBlock enPublicEstimateBlock enEstimateFieldset">
          <legend>2. 初期準備</legend>
          <p className="enEstimateLead">引継ぎ・立ち上げを依頼する媒体数を選んでください。LINEは下の欄で選ぶため、SNSの媒体数には含めません。</p>
          <div className="enCountFields">
            <label>既存SNSの引継ぎ<select value={existing} onChange={(e) => setExisting(Number(e.target.value))}>{[0,1,2,3,4,5].map((n) => <option key={n} value={n}>{n === 0 ? "不要" : `${n}媒体`}</option>)}</select><small>1媒体 5,500円</small></label>
            <label>SNSの新規立ち上げ<select value={newSns} onChange={(e) => setNewSns(Number(e.target.value))}>{[0,1,2,3,4,5].map((n) => <option key={n} value={n}>{n === 0 ? "不要" : `${n}媒体`}</option>)}</select><small>1媒体 16,500円（開設・プロフィール・自己紹介投稿）</small></label>
          </div>
          <fieldset className="enEstimateSubFieldset"><legend>LINE公式</legend><div className="enPublicChoiceGrid">{lineChoices.map((item) => <label className={`enPublicChoice ${line === item.value ? "selected" : ""}`} key={item.value}>
            <input type="radio" name="line" checked={line === item.value} onChange={() => setLine(item.value)} /><span><strong>{item.label}</strong><small>{item.value === "new" ? "22,000円（開設・基本情報・初期配信準備）" : item.value === "handover" ? "5,500円" : "0円"}</small></span>
          </label>)}</div></fieldset>
          <fieldset className="enEstimateSubFieldset"><legend>HP・LPの制作／更新</legend><div className="enPublicChoiceGrid">{webChoices.map((item) => <label className={`enPublicChoice ${web === item.value ? "selected" : ""}`} key={item.value}>
            <input type="radio" name="web" checked={web === item.value} onChange={() => setWeb(item.value)} /><span><strong>{item.label}</strong><small>{item.value === "custom" ? "個別見積・紹介相談" : `${yen(item.price)}円`}{item.detail && ` / ${item.detail}`}</small></span>
          </label>)}</div><p className="enEstimateLead">ここは追加で依頼する制作・更新の欄です。ご契約プランの標準範囲で対応する更新には加算しません。本格HPは専門業者の紹介となる場合があります。</p></fieldset>
        </fieldset>
        <fieldset className="enEstimateBlock enPublicEstimateBlock enEstimateFieldset"><legend>3. 追加の相談</legend>
          <label className={`enPublicChoice ${extra ? "selected" : ""}`}><input type="checkbox" checked={extra} onChange={(e) => setExtra(e.target.checked)} /><span><strong>通常範囲を超える画像・動画なども相談したい</strong><small>制作内容を確認するため、右の合計には含めません。</small></span></label>
        </fieldset>
      </section>
      <aside className="enPublicEstimateResult" aria-live="polite" aria-atomic="true">
        <p className="enEyebrow">YOUR ESTIMATE</p><h2>選んだ条件での目安</h2>
        <div className="enPublicEstimateMainPrice"><span>{result.noMonthly ? "初期制作の合計" : "初月"}{result.needsQuote ? "・計算できる分" : ""}</span><strong>{yen(result.firstMonth)}<small>円</small></strong><p>{result.needsQuote ? "＋個別相談分（合計未確定）" : result.noMonthly ? "月額契約なし" : "月額＋初期準備"}</p></div>
        <div className="enPublicEstimateBand"><span>{result.noMonthly ? "翌月以降の月額契約" : plan === "busy" ? "通常月のAI秘書コース" : "翌月以降・追加作業がない場合"}</span><strong>{result.noMonthly ? "なし" : `${yen(plan === "busy" ? plans.ai.monthly : result.monthly)}円 / 月`}</strong><p>{result.noMonthly ? "初期制作のみの見積です" : plan === "busy" ? "繁忙月は66,000円。適用条件は事前に確認します。" : plans[plan].name}</p></div>
        <div className="enPublicEstimateSelections"><p><span>月額</span><strong>{result.noMonthly ? "契約なし" : `${yen(result.monthly)}円`}</strong></p>{result.rows.map((row) => <p key={row.label}><span>{row.label}</span><strong>{yen(row.amount)}円</strong></p>)}<p><span>初期準備 小計</span><strong>{yen(result.setup)}円</strong></p></div>
        {result.scopeNotes.map((note) => <p className="enScopeNote" key={note}>{note}</p>)}
        <div className="enPublicEstimateNotice"><strong>正式な内容は、ご相談後に確認します</strong><p>初期準備と継続運用は別の作業です。継続する媒体・制作範囲・標準内の作業を確認し、重複のない見積をご案内します。開発中の後援会活動コース、AI追加枠、外部サービス利用料、個別相談の作業はこの計算に含みません。</p></div>
        <div className="enResultActions enPublicEstimateActions"><Link className="enButton primary" to={`/contact?${contactParams}`}>この条件で相談する →</Link><Link className="enButton secondary" to="/entsumugi/startup">候補者向けの案内に戻る</Link></div>
      </aside>
    </div>
  </main>;
}
