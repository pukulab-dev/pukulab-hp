import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Entsumugi.css";
import "./EntsumugiEstimate.css";

const basePlans = {
  app: {
    name: "アプリ利用のみ",
    monthly: 1980,
    note: "まずは自分と事務所で情報をまとめたい方へ。",
  },
  ai: {
    name: "AI秘書コース",
    monthly: 25000,
    note: "AIを使いながら、自分で運用を進めたい方へ。",
  },
  busy: {
    name: "繁忙月サポート",
    monthly: 66000,
    note: "AI秘書をベースに、忙しい月だけ支援を増やしたい方へ。",
  },
  basic: {
    name: "基本運用プラン",
    monthly: 66000,
    note: "原稿・投稿などを継続して任せたい方へ。",
  },
  pr: {
    name: "広報運用プラン",
    monthly: 99000,
    note: "複数媒体を使い分けながら、企画も相談したい方へ。",
  },
  room: {
    name: "外部広報室プラン",
    monthly: 148000,
    note: "広報全体を外部広報室のように任せたい方へ。",
  },
};

const snsOptions = [
  {
    value: "none",
    label: "今あるSNSを自分で使う",
    text: "新しい立ち上げや引継ぎは考えていない",
    score: 0,
  },
  {
    value: "handover",
    label: "既存SNSの引継ぎを頼みたい",
    text: "今あるアカウントを確認して運用を始めたい",
    score: 1,
  },
  {
    value: "newOne",
    label: "SNSを1つ新しく始めたい",
    text: "プロフィールや初回投稿も含めて準備したい",
    score: 2,
  },
  {
    value: "newMany",
    label: "SNSを複数まとめて整えたい",
    text: "複数媒体の立ち上げ・展開を考えている",
    score: 4,
  },
];

const lineOptions = [
  { value: "none", label: "LINE公式は不要・既に使える", score: 0 },
  { value: "new", label: "LINE公式を新しく準備したい", score: 2 },
];

const webOptions = [
  {
    value: "none",
    label: "HPは不要・既に整っている",
    text: "大きな修正は考えていない",
    score: 0,
  },
  {
    value: "update",
    label: "今あるHPを少し整えたい",
    text: "文字・画像・既存ページの更新が中心",
    score: 1,
  },
  {
    value: "lp",
    label: "LPや新しい案内ページがほしい",
    text: "1ページで内容をまとめたい",
    score: 4,
  },
  {
    value: "newSite",
    label: "HPを新しく作りたい",
    text: "候補者・議員サイトを一から準備したい",
    score: 6,
  },
];

const creativeOptions = [
  {
    value: "none",
    label: "追加制作はほぼ不要",
    text: "月額プランの通常範囲を中心に使いたい",
    score: 0,
  },
  {
    value: "sometimes",
    label: "画像・動画を時々お願いしたい",
    text: "必要な時だけ追加制作を頼みたい",
    score: 1,
  },
  {
    value: "regular",
    label: "動画や追加制作も継続して使いたい",
    text: "通常運用に加えて制作物も増えそう",
    score: 3,
  },
  {
    value: "custom",
    label: "まだ整理できていない・大型制作もありそう",
    text: "内容を相談しながら決めたい",
    score: 5,
  },
];

const setupBands = [
  { max: 0, label: "追加費用はほぼなし", sub: "月額コース中心で始められそうです。" },
  { max: 2, label: "1〜3万円程度", sub: "軽い初期設定や単発制作が中心のイメージです。" },
  { max: 4, label: "3〜6万円程度", sub: "複数の初期設定・制作が必要になりそうです。" },
  { max: 6, label: "6〜10万円程度", sub: "WEBや複数の準備を含む可能性があります。" },
  { max: 10, label: "10〜15万円程度", sub: "複数媒体やHP立ち上げをまとめて行う規模感です。" },
  { max: Infinity, label: "15万円〜・個別確認", sub: "制作範囲が広いため、内容を確認して正式見積します。" },
];

function yen(value) {
  return new Intl.NumberFormat("ja-JP").format(value);
}

function findLabel(options, value) {
  return options.find((item) => item.value === value)?.label || "未選択";
}

export default function EntsumugiEstimate() {
  const [searchParams] = useSearchParams();
  const preset = searchParams.get("preset");
  const incomingPlan = searchParams.get("plan");
  const initialPlan = preset === "startup"
    ? "basic"
    : basePlans[incomingPlan]
      ? incomingPlan
      : "basic";

  const [plan, setPlan] = useState(initialPlan);
  const [sns, setSns] = useState(preset === "startup" ? "newOne" : "none");
  const [line, setLine] = useState(preset === "startup" ? "new" : "none");
  const [web, setWeb] = useState(preset === "startup" ? "newSite" : "none");
  const [creative, setCreative] = useState("none");

  const result = useMemo(() => {
    const score =
      (snsOptions.find((item) => item.value === sns)?.score || 0) +
      (lineOptions.find((item) => item.value === line)?.score || 0) +
      (webOptions.find((item) => item.value === web)?.score || 0) +
      (creativeOptions.find((item) => item.value === creative)?.score || 0);

    const setupBand = setupBands.find((band) => score <= band.max) || setupBands[setupBands.length - 1];

    return {
      monthly: basePlans[plan].monthly,
      setupBand,
      score,
    };
  }, [plan, sns, line, web, creative]);

  function resetStartupPreset() {
    setPlan("basic");
    setSns("newOne");
    setLine("new");
    setWeb("newSite");
    setCreative("none");
  }

  return (
    <main className="enPage enToolPage enPublicEstimatePage">
      <header className="enHeader">
        <div className="enHeaderInner">
          <Link to="/entsumugi" className="enBrand">
            <strong>縁紡</strong>
            <span>議員サポートデスク</span>
          </Link>
          <div className="enHeaderActions">
            <Link className="enBackLink" to="/entsumugi/diagnosis">コース診断</Link>
            <Link className="enBackLink" to="/entsumugi">縁紡トップへ</Link>
          </div>
        </div>
      </header>

      <section className="enToolHero enEstimateHero enPublicEstimateHero">
        <div className="enPills enToolPills">
          <span>ざっくり料金目安</span>
          <span>正式見積ではありません</span>
        </div>
        <p className="enEyebrow">PRICE GUIDE</p>
        <p className="enPublicEstimateCatch">まずは、料金感だけ。</p>
        <h1>料金目安シミュレーター</h1>
        <p>
          月額コースと現在の準備状況を選ぶと、初期費用や追加制作を細かく積み上げず、
          おおまかな料金帯だけ確認できます。
        </p>
      </section>

      {preset === "startup" ? (
        <div className="enPresetBanner enPublicPresetBanner">
          <div>
            <strong>候補者向けスタートアップに近い条件を選択済みです</strong>
            <p>SNS新規1媒体・LINE公式・新規HP・基本運用を想定した状態です。</p>
          </div>
          <button type="button" onClick={resetStartupPreset}>初期条件に戻す</button>
        </div>
      ) : null}

      <div className="enPublicEstimateLayout">
        <section className="enPublicEstimateForm">
          <div className="enEstimateBlock enPublicEstimateBlock">
            <p className="enEyebrow">STEP 1</p>
            <h2>月額コース</h2>
            <p className="enEstimateLead">まず、継続的にどこまで任せたいかを選びます。</p>

            <div className="enPublicPlanGrid">
              {Object.entries(basePlans).map(([key, item]) => (
                <label className={`enPublicPlanOption ${plan === key ? "selected" : ""}`} key={key}>
                  <input
                    type="radio"
                    name="plan"
                    checked={plan === key}
                    onChange={() => setPlan(key)}
                  />
                  <span>
                    <strong>{item.name}</strong>
                    <b>{yen(item.monthly)}円 / 月</b>
                    <small>{item.note}</small>
                  </span>
                </label>
              ))}
            </div>

            {(plan === "ai" || plan === "busy") ? (
              <p className="enAiAddonNote">
                AI秘書の利用回数を増やしたい場合は、追加枠を1枠1,000円で追加できます。
              </p>
            ) : null}
          </div>

          <div className="enEstimateBlock enPublicEstimateBlock">
            <p className="enEyebrow">STEP 2</p>
            <h2>今の準備状況</h2>
            <p className="enEstimateLead">単価や数量ではなく、「何を準備したいか」だけ選んでください。</p>

            <div className="enPublicQuestionGroup">
              <div className="enPublicQuestionHead">
                <span>01</span>
                <div>
                  <h3>SNS</h3>
                  <p>アカウントの立ち上げ・引継ぎについて</p>
                </div>
              </div>
              <div className="enPublicChoiceGrid">
                {snsOptions.map((item) => (
                  <label className={`enPublicChoice ${sns === item.value ? "selected" : ""}`} key={item.value}>
                    <input type="radio" name="sns" checked={sns === item.value} onChange={() => setSns(item.value)} />
                    <span><strong>{item.label}</strong><small>{item.text}</small></span>
                  </label>
                ))}
              </div>
            </div>

            <div className="enPublicQuestionGroup compact">
              <div className="enPublicQuestionHead">
                <span>02</span>
                <div>
                  <h3>LINE公式</h3>
                  <p>新しく準備する必要があるか</p>
                </div>
              </div>
              <div className="enPublicChoiceGrid two">
                {lineOptions.map((item) => (
                  <label className={`enPublicChoice ${line === item.value ? "selected" : ""}`} key={item.value}>
                    <input type="radio" name="line" checked={line === item.value} onChange={() => setLine(item.value)} />
                    <span><strong>{item.label}</strong></span>
                  </label>
                ))}
              </div>
            </div>

            <div className="enPublicQuestionGroup">
              <div className="enPublicQuestionHead">
                <span>03</span>
                <div>
                  <h3>HP・LP</h3>
                  <p>WEB側で必要になりそうな準備</p>
                </div>
              </div>
              <div className="enPublicChoiceGrid">
                {webOptions.map((item) => (
                  <label className={`enPublicChoice ${web === item.value ? "selected" : ""}`} key={item.value}>
                    <input type="radio" name="web" checked={web === item.value} onChange={() => setWeb(item.value)} />
                    <span><strong>{item.label}</strong><small>{item.text}</small></span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="enEstimateBlock enPublicEstimateBlock">
            <p className="enEyebrow">STEP 3</p>
            <h2>追加制作のイメージ</h2>
            <p className="enEstimateLead">動画・画像・大型制作などがどのくらいありそうかを選びます。</p>
            <div className="enPublicChoiceGrid">
              {creativeOptions.map((item) => (
                <label className={`enPublicChoice ${creative === item.value ? "selected" : ""}`} key={item.value}>
                  <input
                    type="radio"
                    name="creative"
                    checked={creative === item.value}
                    onChange={() => setCreative(item.value)}
                  />
                  <span><strong>{item.label}</strong><small>{item.text}</small></span>
                </label>
              ))}
            </div>
          </div>
        </section>

        <aside className="enPublicEstimateResult" aria-live="polite">
          <p className="enEyebrow">PRICE RANGE</p>
          <p className="enSectionCatch">今の選択だと</p>
          <h2>このくらいが目安です。</h2>

          <div className="enPublicEstimateMainPrice">
            <span>月額</span>
            <strong>{yen(result.monthly)}<small>円 / 月</small></strong>
            <p>{basePlans[plan].name}</p>
          </div>

          <div className="enPublicEstimateBand">
            <span>初期設定・追加制作の目安</span>
            <strong>{result.setupBand.label}</strong>
            <p>{result.setupBand.sub}</p>
          </div>

          <div className="enPublicEstimateSelections">
            <p><span>SNS</span><strong>{findLabel(snsOptions, sns)}</strong></p>
            <p><span>LINE</span><strong>{findLabel(lineOptions, line)}</strong></p>
            <p><span>WEB</span><strong>{findLabel(webOptions, web)}</strong></p>
            <p><span>追加制作</span><strong>{findLabel(creativeOptions, creative)}</strong></p>
          </div>

          <div className="enPublicEstimateNotice">
            <strong>これは「料金感」を見るためのシミュレーションです</strong>
            <p>
              個別の単価や数量を積み上げた正式見積ではありません。
              実際の作業範囲・既存環境・素材・運用頻度を確認したうえで、正式な料金をお伝えします。
            </p>
          </div>

          <div className="enResultActions enPublicEstimateActions">
            <Link className="enButton primary" to="/contact?type=entsumugi">この条件で相談する →</Link>
            <Link className="enButton secondary" to="/entsumugi/diagnosis">コース診断へ戻る</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
