import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Entsumugi.css";

const basePlans = {
  app: { name: "アプリ利用のみ", monthly: 1980 },
  ai: { name: "AI秘書コース", monthly: 22000 },
  busy: { name: "繁忙月サポート", monthly: 66000 },
  basic: { name: "基本運用プラン", monthly: 66000 },
  pr: { name: "広報運用プラン", monthly: 99000 },
  room: { name: "外部広報室プラン", monthly: 148000 },
};

const addons = [
  { id: "existing", label: "既存SNSの引継ぎ・初期確認", unit: "媒体", price: 5500, type: "counter" },
  { id: "new", label: "SNS新規立ち上げ一式", unit: "媒体", price: 16500, type: "counter" },
  { id: "expand", label: "追加SNSへの展開設定", unit: "媒体", price: 11000, type: "counter" },
  { id: "line", label: "LINE公式 初期設定一式", unit: "件", price: 22000, type: "counter", max: 1 },
  { id: "draft", label: "SNS原稿作成", unit: "本", price: 3300, type: "counter" },
  { id: "post", label: "原稿 + 投稿代行", unit: "本", price: 5500, type: "counter" },
  { id: "imagePost", label: "原稿 + 簡易画像 + 投稿代行", unit: "本", price: 6600, type: "counter" },
  { id: "adjust", label: "同内容を別SNS向けに文章調整", unit: "媒体", price: 2200, type: "counter" },
  { id: "shortVideo", label: "縦動画・簡易編集", unit: "本", price: 11000, type: "counter" },
  { id: "hpUpdate", label: "既存HP 1ページ更新", unit: "ページ", price: 5500, type: "counter" },
];

function yen(value) {
  return new Intl.NumberFormat("ja-JP").format(value);
}

export default function EntsumugiEstimate() {
  const [searchParams] = useSearchParams();
  const incomingPlan = searchParams.get("plan");
  const initialPlan = basePlans[incomingPlan] ? incomingPlan : "basic";

  const [plan, setPlan] = useState(initialPlan);
  const [counts, setCounts] = useState(() => Object.fromEntries(addons.map((item) => [item.id, 0])));
  const [web, setWeb] = useState("none");
  const [custom, setCustom] = useState(false);

  const webOptions = {
    none: { name: "追加なし", price: 0 },
    lp: { name: "LP制作（構成 + デザイン）", price: 55000 },
    hp3: { name: "簡易HP制作（3ページまで）", price: 88000 },
    hp5: { name: "標準HP制作（5ページまで）", price: 132000 },
  };

  const managedPlan = ["basic", "pr", "room"].includes(plan);
  const visibleAddons = managedPlan
    ? addons.filter((item) => !["draft", "post", "imagePost", "adjust"].includes(item.id))
    : addons;

  const calc = useMemo(() => {
    const monthly = basePlans[plan].monthly;
    const calculationAddons = managedPlan
      ? addons.filter((item) => !["draft", "post", "imagePost", "adjust"].includes(item.id))
      : addons;
    const addonRows = calculationAddons
      .map((item) => ({ ...item, count: counts[item.id] || 0, subtotal: (counts[item.id] || 0) * item.price }))
      .filter((item) => item.count > 0);
    const oneTime = addonRows.reduce((sum, item) => sum + item.subtotal, 0) + webOptions[web].price;
    return { monthly, oneTime, firstMonth: monthly + oneTime, addonRows };
  }, [plan, counts, web, managedPlan]);

  function setCount(id, rawValue, max = 10) {
    const value = Math.max(0, Math.min(max, Number.parseInt(rawValue, 10) || 0));
    setCounts((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <main className="enPage enToolPage">
      <header className="enHeader">
        <div className="enHeaderInner">
          <Link to="/entsumugi" className="enBrand"><strong>縁紡</strong><span>議員サポートデスク</span></Link>
          <Link className="enBackLink" to="/entsumugi">LPへ戻る</Link>
        </div>
      </header>

      <section className="enToolHero">
        <p className="enEyebrow">PRICE SIMULATOR</p>
        <h1>料金シミュレーター</h1>
        <p>月額コースと必要な初期設定・追加制作を選んで、概算料金を確認できます。</p>
      </section>

      <div className="enEstimateLayout">
        <section className="enEstimateForm">
          <div className="enEstimateBlock">
            <p className="enEyebrow">STEP 1</p>
            <h2>月額コース</h2>
            <div className="enPlanSelectGrid">
              {Object.entries(basePlans).map(([key, item]) => (
                <label className={`enPlanOption ${plan === key ? "selected" : ""}`} key={key}>
                  <input type="radio" name="plan" checked={plan === key} onChange={() => setPlan(key)} />
                  <span><strong>{item.name}</strong><small>月額 {yen(item.monthly)}円</small></span>
                </label>
              ))}
            </div>
          </div>

          <div className="enEstimateBlock">
            <p className="enEyebrow">STEP 2</p>
            <h2>初期設定・追加制作</h2>
            <p className="enEstimateLead">
              {managedPlan
                ? "月額プランの通常範囲に含まれる原稿・投稿は二重加算せず、初期設定や追加制作だけを入力します。"
                : "必要なものだけ数量を入れてください。0の項目は加算されません。"}
            </p>
            <div className="enAddonList">
              {visibleAddons.map((item) => (
                <label className="enAddonRow" key={item.id}>
                  <span><strong>{item.label}</strong><small>{yen(item.price)}円 / {item.unit}</small></span>
                  <input
                    type="number"
                    min="0"
                    max={item.max || 10}
                    inputMode="numeric"
                    value={counts[item.id]}
                    onChange={(event) => setCount(item.id, event.target.value, item.max || 10)}
                    aria-label={`${item.label}の数量`}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="enEstimateBlock">
            <p className="enEyebrow">STEP 3</p>
            <h2>WEB制作</h2>
            <select className="enSelect" value={web} onChange={(event) => setWeb(event.target.value)}>
              {Object.entries(webOptions).map(([key, item]) => (
                <option key={key} value={key}>{item.name}{item.price ? `（${yen(item.price)}円）` : ""}</option>
              ))}
            </select>

            <label className="enCustomCheck">
              <input type="checkbox" checked={custom} onChange={(event) => setCustom(event.target.checked)} />
              <span><strong>本格動画・複雑なWEB機能などがある</strong><small>この場合は標準単価に当てはめず、個別見積になります。</small></span>
            </label>
          </div>
        </section>

        <aside className="enEstimateResult" aria-live="polite">
          <p className="enEyebrow">ESTIMATE</p>
          <h2>概算結果</h2>
          <div className="enEstimateTotals">
            <div><span>月額</span><strong>{yen(calc.monthly)}円</strong></div>
            <div><span>初期・追加</span><strong>{yen(calc.oneTime)}円</strong></div>
            <div className="total"><span>初月概算</span><strong>{yen(calc.firstMonth)}円</strong></div>
          </div>

          <div className="enEstimateSummary">
            <p><strong>{basePlans[plan].name}</strong></p>
            {calc.addonRows.map((item) => (
              <p key={item.id}><span>{item.label} × {item.count}</span><b>{yen(item.subtotal)}円</b></p>
            ))}
            {webOptions[web].price ? <p><span>{webOptions[web].name}</span><b>{yen(webOptions[web].price)}円</b></p> : null}
            {custom ? <p className="custom"><span>標準外作業</span><b>個別見積</b></p> : null}
          </div>

          <div className="enEstimateNotice">
            <strong>この結果は概算です</strong>
            <p>実際の作業内容・素材・運用状況により料金が前後する場合があります。正式な料金はヒアリング後のお見積もりで確定します。</p>
          </div>

          <div className="enResultActions">
            <Link className="enButton primary" to="/contact?type=entsumugi">この内容で相談する →</Link>
            <Link className="enButton secondary" to="/entsumugi/diagnosis">先にコース診断をする</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
