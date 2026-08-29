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

const addonGroups = [
  {
    title: "SNS・LINEの初期設定",
    items: [
      { id: "existing", label: "既存SNS運用引継ぎ・初期確認", unit: "媒体", price: 5500 },
      { id: "new", label: "SNS新規立ち上げ一式", unit: "媒体", price: 16500 },
      { id: "expand", label: "追加SNSへの展開設定", unit: "媒体", price: 11000 },
      { id: "header", label: "アイコン・ヘッダー簡易作成", unit: "セット", price: 5500 },
      { id: "line", label: "LINE公式 初期設定一式", unit: "件", price: 22000, max: 1 },
    ],
  },
  {
    title: "単品の原稿・投稿",
    optionalForManaged: true,
    items: [
      { id: "draft", label: "SNS原稿作成", unit: "本", price: 3300 },
      { id: "draftImage", label: "原稿 + 簡易画像", unit: "本", price: 5500 },
      { id: "post", label: "原稿 + 投稿代行", unit: "本", price: 5500 },
      { id: "imagePost", label: "原稿 + 簡易画像 + 投稿代行", unit: "本", price: 6600 },
      { id: "adjust", label: "同内容を別SNS向けに文章調整", unit: "媒体", price: 2200 },
      { id: "linePost", label: "LINE原稿 + 配信代行", unit: "回", price: 6600 },
    ],
  },
  {
    title: "動画・画像",
    items: [
      { id: "verticalCut", label: "縦動画・カットのみ", unit: "本", price: 8800 },
      { id: "shortVideo", label: "縦動画・簡易編集", unit: "本", price: 11000 },
      { id: "video5", label: "通常動画 5分以内・簡易編集", unit: "本", price: 11000 },
      { id: "video10", label: "通常動画 10分以内・簡易編集", unit: "本", price: 16500 },
      { id: "shorts", label: "既存動画からShorts切り出し", unit: "本", price: 5500 },
      { id: "thumbnail", label: "動画用簡易サムネイル", unit: "点", price: 3300 },
    ],
  },
];

const allAddons = addonGroups.flatMap((group) => group.items);

const webOptions = {
  none: { name: "追加なし", price: 0 },
  text: { name: "既存HP 文字修正", price: 3300 },
  image: { name: "既存HP 画像差し替え", price: 3300 },
  update: { name: "既存HP 1ページ更新", price: 5500 },
  page: { name: "既存HP 新規ページ追加", price: 11000 },
  lpTemplate: { name: "簡易LP制作・既存デザイン流用", price: 33000 },
  lp: { name: "LP制作・構成 + デザイン", price: 55000 },
  hp3: { name: "簡易HP制作 3ページまで", price: 88000 },
  hp5: { name: "標準HP制作 5ページまで", price: 132000 },
};

function yen(value) {
  return new Intl.NumberFormat("ja-JP").format(value);
}

function getInitialCounts(preset) {
  const base = Object.fromEntries(allAddons.map((item) => [item.id, 0]));
  if (preset === "startup") {
    base.new = 1;
    base.line = 1;
  }
  return base;
}

export default function EntsumugiEstimate() {
  const [searchParams] = useSearchParams();
  const preset = searchParams.get("preset");
  const incomingPlan = searchParams.get("plan");
  const initialPlan = preset === "startup" ? "basic" : (basePlans[incomingPlan] ? incomingPlan : "basic");

  const [plan, setPlan] = useState(initialPlan);
  const [counts, setCounts] = useState(() => getInitialCounts(preset));
  const [web, setWeb] = useState(preset === "startup" ? "hp3" : "none");
  const [custom, setCustom] = useState(false);
  const [showManagedSingles, setShowManagedSingles] = useState(false);

  const managedPlan = ["basic", "pr", "room"].includes(plan);

  const calc = useMemo(() => {
    const monthly = basePlans[plan].monthly;
    const hiddenIds = managedPlan && !showManagedSingles
      ? new Set(addonGroups.find((group) => group.optionalForManaged)?.items.map((item) => item.id) || [])
      : new Set();

    const addonRows = allAddons
      .filter((item) => !hiddenIds.has(item.id))
      .map((item) => ({ ...item, count: counts[item.id] || 0, subtotal: (counts[item.id] || 0) * item.price }))
      .filter((item) => item.count > 0);

    const oneTime = addonRows.reduce((sum, item) => sum + item.subtotal, 0) + webOptions[web].price;
    return { monthly, oneTime, firstMonth: monthly + oneTime, addonRows };
  }, [plan, counts, web, managedPlan, showManagedSingles]);

  function setCount(id, rawValue, max = 10) {
    const value = Math.max(0, Math.min(max, Number.parseInt(rawValue, 10) || 0));
    setCounts((prev) => ({ ...prev, [id]: value }));
  }

  function resetStartupPreset() {
    setPlan("basic");
    setCounts(getInitialCounts("startup"));
    setWeb("hp3");
    setCustom(false);
    setShowManagedSingles(false);
  }

  return (
    <main className="enPage enToolPage">
      <header className="enHeader">
        <div className="enHeaderInner">
          <Link to="/entsumugi" className="enBrand"><strong>縁紡</strong><span>議員サポートデスク</span></Link>
          <div className="enHeaderActions">
            <Link className="enBackLink" to="/entsumugi/diagnosis">コース診断</Link>
            <Link className="enBackLink" to="/entsumugi">縁紡トップへ</Link>
          </div>
        </div>
      </header>

      <section className="enToolHero enEstimateHero">
        <div className="enPills enToolPills"><span>概算</span><span>正式見積ではありません</span></div>
        <p className="enEyebrow">PRICE SIMULATOR</p>
        <h1>料金シミュレーター</h1>
        <p>月額コースと必要な初期設定・追加制作を選んで、自分の場合の料金目安を確認できます。</p>
      </section>

      {preset === "startup" ? (
        <div className="enPresetBanner">
          <div>
            <strong>候補者向けスタートアップ構成を入力済みです</strong>
            <p>SNS新規1媒体 + LINE公式初期設定 + 3ページHP + 基本運用</p>
          </div>
          <button type="button" onClick={resetStartupPreset}>初期構成に戻す</button>
        </div>
      ) : null}

      <div className="enEstimateLayout">
        <section className="enEstimateForm">
          <div className="enEstimateBlock">
            <p className="enEyebrow">STEP 1</p>
            <h2>月額コース</h2>
            <p className="enEstimateLead">まず、継続的な支援の範囲を選びます。</p>
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
                ? "月額運用の通常範囲に含まれる原稿・投稿は、初期状態では二重加算しません。初期設定や標準外の追加制作を入力してください。"
                : "必要なものだけ数量を入れてください。0の項目は加算されません。"}
            </p>

            {addonGroups.map((group) => {
              if (group.optionalForManaged && managedPlan && !showManagedSingles) return null;
              return (
                <div className="enAddonGroup" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="enAddonList">
                    {group.items.map((item) => (
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
              );
            })}

            {managedPlan ? (
              <button className="enInlineToggle" type="button" onClick={() => setShowManagedSingles((value) => !value)}>
                {showManagedSingles ? "単品の原稿・投稿を閉じる" : "標準外として単品の原稿・投稿も追加する"}
              </button>
            ) : null}
          </div>

          <div className="enEstimateBlock">
            <p className="enEyebrow">STEP 3</p>
            <h2>WEB制作</h2>
            <p className="enEstimateLead">代表的なWEB制作を1つ選べます。複数ページ追加などは正式見積で数量を確認します。</p>
            <select className="enSelect" value={web} onChange={(event) => setWeb(event.target.value)}>
              {Object.entries(webOptions).map(([key, item]) => (
                <option key={key} value={key}>{item.name}{item.price ? `（${yen(item.price)}円）` : ""}</option>
              ))}
            </select>

            <label className="enCustomCheck">
              <input type="checkbox" checked={custom} onChange={(event) => setCustom(event.target.checked)} />
              <span><strong>本格動画・複雑なWEB機能・大型制作などがある</strong><small>標準単価に無理に当てはめず、個別見積として確認します。</small></span>
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
            <p><strong>{basePlans[plan].name}</strong><b>{yen(calc.monthly)}円 / 月</b></p>
            {calc.addonRows.map((item) => (
              <p key={item.id}><span>{item.label} × {item.count}</span><b>{yen(item.subtotal)}円</b></p>
            ))}
            {webOptions[web].price ? <p><span>{webOptions[web].name}</span><b>{yen(webOptions[web].price)}円</b></p> : null}
            {custom ? <p className="custom"><span>標準外作業</span><b>個別見積</b></p> : null}
          </div>

          <div className="enEstimateNotice">
            <strong>この結果は概算です</strong>
            <p>実際の作業内容・素材・運用状況・既存環境などにより料金が前後する場合があります。正式な料金はヒアリング後のお見積もりで確定します。</p>
          </div>

          <div className="enResultActions">
            <Link className="enButton primary" to="/contact?type=entsumugi">この内容をもとに相談する →</Link>
            <Link className="enButton secondary" to="/entsumugi/diagnosis">コース診断へ戻る</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
