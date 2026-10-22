// 公開用税込料金。2026-10-19 改訂の内部見積マスターに準拠。
// 開発中の商品は、提供可能な月額プランに混在させない。
export const plans = {
  app: { name: "基本コース", monthly: 1980, note: "自分で活動や原稿を管理したい方へ。" },
  ai: { name: "AI秘書コース", monthly: 25000, note: "AIの力を借りながら、自分で発信を進めたい方へ。" },
  busy: { name: "繁忙月サポート", monthly: 66000, note: "AI秘書をベースに、忙しい月の支援を相談したい方へ。" },
  basic: { name: "基本運用", label: "SNS SUPPORT", monthly: 66000, note: "SNS運用を継続して任せたい方へ。", maxMedia: 2, features: ["2媒体までを目安に運用", "原稿作成・簡易画像・投稿代行", "発信内容の整理・基本相談"] },
  pr: { name: "広報運用", label: "PUBLIC RELATIONS", monthly: 99000, note: "複数媒体をつないで発信したい方へ。", maxMedia: 3, features: ["3媒体までを目安に運用", "原稿・画像・投稿代行・媒体別調整", "LINE配信・簡易動画にも対応", "企画の相談・月次振り返り"] },
  room: { name: "外部広報室", label: "COMMUNICATION TEAM", monthly: 148000, note: "発信全体を任せる広報担当がほしい方へ。", maxMedia: 5, features: ["媒体選定から最大5媒体", "企画・制作・投稿・振り返り", "LINE・HPの軽微な更新", "簡易動画を含めた発信全体の提案"] },
};

export const upcomingPlans = {
  supporter: {
    code: "M-07",
    name: "後援会活動コース",
    monthly: 5000,
    status: "in-development",
    note: "基本アプリ機能に加え、地図・後援会名簿管理・標準文字認識（OCR）を提供予定。AI秘書・人的代行は含みません。",
  },
};

export const yen = (value) => new Intl.NumberFormat("ja-JP").format(value);

// Delegation preference is a hard constraint, never outweighed by scores.
// 開発中の後援会活動コースを、利用できるコースとして推薦しない。
export function recommendPlan({ delegate, media, pain }) {
  if (delegate === "self") return pain === "write" ? "ai" : "app";
  if (delegate === "assist") return "ai";
  if (delegate === "whole") return "room";
  if (media === "many") return "room";
  if (media === "three" || pain === "strategy") return "pr";
  return "basic";
}

export const setupPrices = { handover: 5500, newSns: 16500, newLine: 22000 };
export const webChoices = [
  { value: "none", label: "HPの制作・更新は不要", price: 0 },
  { value: "update", label: "既存HPの1ページ更新", price: 5500, detail: "文章・画像の更新。構造変更なし" },
  { value: "templateLp", label: "簡易LP制作（既存デザイン流用）", price: 33000, detail: "1ページ。テンプレート流用、素材は原則支給" },
  { value: "lp", label: "LP制作（構成・デザイン込み）", price: 55000, detail: "1ページ。複雑な機能は別途相談" },
  { value: "newSite", label: "簡易HP制作（3ページまで）", price: 88000, detail: "トップ＋2ページ。素材は原則支給" },
  { value: "custom", label: "本格HP・大規模な改修・その他", price: 0, detail: "専門業者の紹介または個別相談" },
];

// `none` は月額契約を含めない見積専用の値。既存の plans へ混ぜない。
export function estimatePrice({ plan = "none", existing = 0, newSns = 0, line = "none", web = "none", extra = false }) {
  if (plan !== "none" && !Object.hasOwn(plans, plan)) {
    throw new Error(`不正なコース: ${String(plan)}`);
  }
  const rows = [];
  if (existing) rows.push({ label: `既存SNS引継ぎ ${existing}媒体`, amount: existing * setupPrices.handover });
  if (newSns) rows.push({ label: `SNS新規立ち上げ ${newSns}媒体`, amount: newSns * setupPrices.newSns });
  if (line === "handover") rows.push({ label: "既存LINE引継ぎ", amount: setupPrices.handover });
  if (line === "new") rows.push({ label: "LINE公式 初期設定一式", amount: setupPrices.newLine });
  const selectedWeb = webChoices.find((item) => item.value === web);
  if (!selectedWeb) throw new Error(`不正なHP制作項目: ${String(web)}`);
  if (selectedWeb.price) rows.push({ label: selectedWeb.label, amount: selectedWeb.price });
  const setup = rows.reduce((sum, row) => sum + row.amount, 0);
  const monthly = plan === "none" ? 0 : plans[plan].monthly;
  const mediaCount = existing + newSns + (line === "none" ? 0 : 1);
  const scopeNotes = [];
  if (plan !== "none" && plans[plan].maxMedia && mediaCount > plans[plan].maxMedia) {
    scopeNotes.push("準備する媒体数が、このプランの運用目安を超えています。継続して運用する媒体とコースは相談時に確認します。");
  }
  if (plan === "basic" && line !== "none") {
    scopeNotes.push("基本運用のLINE継続配信は標準外です。ここでは初期準備のみを計算しています。");
  }
  if (plan === "busy") {
    scopeNotes.push("繁忙月の支援範囲・対象条件は事前確認が必要です。通常月のAI秘書コースは25,000円です。");
  }
  return {
    monthly,
    setup,
    firstMonth: monthly + setup,
    rows,
    scopeNotes,
    noMonthly: plan === "none",
    needsQuote: extra || web === "custom" || scopeNotes.length > 0,
  };
}
