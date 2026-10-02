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
    "🐛 DEBUGGER CLEAR!",
    "",
    `${difficultyLabel} / 10 STAGES`,
    `FINAL ${formatTime(result.finalMs)}`,
    `MISS ${result.misses} (+${(
      result.penaltyMs / 1000
    ).toFixed(2)}s)`,
  ];

  if (
    Number.isInteger(rank) &&
    rank > 0 &&
    Number.isInteger(total) &&
    total > 0
  ) {
    lines.push(
      `RANK ${rank} / ${total}`
    );
  }

  lines.push(
    "",
    "コードのバグ探しタイムアタックに挑戦",
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
