import { formatTime } from "./engine.js";

export const DEBUGGER_SHARE_URL =
  "https://www.pukulab.com/game/debugger";

export function buildXShareText({
  result,
  difficultyLabel,
  rank = null,
  total = null,
}) {
  const lines = [
    "🐛 DEBUGGERをクリア！",
    "",
    `【${difficultyLabel}】FINAL ${formatTime(
      result.finalMs
    )}`,
    `MISS ${result.misses}回`,
  ];

  if (
    Number.isInteger(rank) &&
    rank > 0 &&
    Number.isInteger(total) &&
    total > 0
  ) {
    lines.push(
      `🏆 現在${rank}位 / ${total}人`
    );
  }

  lines.push(
    "",
    "コードに潜むバグを10ステージで発見🔍",
    "あなたはこの記録を超えられる？",
    "",
    "#DEBUGGER #PukuLab"
  );

  return lines.join("\n");
}

export function buildXShareUrl(args) {
  const params = new URLSearchParams({
    text: buildXShareText(args),
    url: DEBUGGER_SHARE_URL,
  });

  return `https://x.com/intent/tweet?${params.toString()}`;
}
