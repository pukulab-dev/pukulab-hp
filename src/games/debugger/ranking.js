// DEBUGGER ranking provider.
//
// Current behavior:
// - Without VITE_DEBUGGER_RANKING_ENDPOINT, ranking is kept only in this tab.
// - When an endpoint is configured later, the same UI automatically switches
//   to the online provider.
//
// Expected online response shape:
// {
//   rows: [{ id, nickname?, finalMs, misses?, sequence? }],
//   currentRank: 18,
//   total: 247
// }
//
// IMPORTANT:
// The online endpoint must validate scores server-side.
// Do not trust finalMs sent by the browser.

export const DEBUGGER_GAME_ID = "debugger";
export const DEBUGGER_RANKING_VERSION = "2026-10-02-v1";

const ALLOWED_DIFFICULTIES = new Set([
  "beginner",
  "intermediate",
  "advanced",
]);

function validateEntry(entry) {
  if (
    !entry ||
    !entry.id ||
    !ALLOWED_DIFFICULTIES.has(entry.difficulty) ||
    !Number.isInteger(entry.misses) ||
    entry.misses < 0 ||
    !Number.isFinite(entry.clearMs) ||
    entry.clearMs < 0 ||
    entry.penaltyMs !== entry.misses * 3000 ||
    entry.finalMs !==
      entry.clearMs + entry.penaltyMs
  ) {
    throw new Error("Invalid result");
  }
}

function normalizeSummary(payload, currentId = null) {
  const rows = Array.isArray(payload?.rows)
    ? payload.rows
        .filter(
          (row) =>
            row &&
            row.id &&
            Number.isFinite(row.finalMs) &&
            row.finalMs >= 0
        )
        .slice(0, 10)
    : [];

  let currentRank = Number.isInteger(
    payload?.currentRank
  )
    ? payload.currentRank
    : null;

  const total = Number.isInteger(payload?.total)
    ? payload.total
    : rows.length;

  if (!currentRank && currentId) {
    const index = rows.findIndex(
      (row) => row.id === currentId
    );

    if (index >= 0) {
      currentRank = index + 1;
    }
  }

  return {
    rows,
    currentRank,
    total,
  };
}

export function createSessionRanking() {
  const records = new Map();

  function listRows(difficulty) {
    return [
      ...(records.get(difficulty) || []),
    ]
      .sort(
        (a, b) =>
          a.finalMs - b.finalMs ||
          a.sequence - b.sequence
      )
      .slice(0, 10);
  }

  return {
    mode: "session",
    isOnline: false,
    scope:
      "このタブ内の仮ランキングです。再読み込みでリセットされます。オンラインランキング接続用の受け口は準備済みです。",

    async list(difficulty) {
      if (!ALLOWED_DIFFICULTIES.has(difficulty)) {
        throw new Error("Invalid difficulty");
      }

      const rows = listRows(difficulty);

      return {
        rows,
        currentRank: null,
        total: rows.length,
      };
    },

    async submit(entry) {
      validateEntry(entry);

      const current =
        records.get(entry.difficulty) || [];

      if (
        !current.some(
          (row) => row.id === entry.id
        )
      ) {
        const sequence =
          Math.max(
            0,
            ...current.map(
              (row) => row.sequence
            )
          ) + 1;

        current.push({
          ...entry,
          sequence,
        });

        records.set(
          entry.difficulty,
          current
        );
      }

      const rows = listRows(entry.difficulty);
      const currentRank =
        rows.findIndex(
          (row) => row.id === entry.id
        ) + 1;

      return {
        rows,
        currentRank:
          currentRank > 0
            ? currentRank
            : null,
        total: current.length,
      };
    },
  };
}

export function createHttpRanking(endpoint) {
  const baseUrl = endpoint.replace(/\/+$/, "");

  async function request(
    path = "",
    options = {}
  ) {
    const response = await fetch(
      `${baseUrl}${path}`,
      {
        ...options,
        headers: {
          Accept: "application/json",
          ...(options.body
            ? {
                "Content-Type":
                  "application/json",
              }
            : {}),
          ...options.headers,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Ranking request failed: ${response.status}`
      );
    }

    return response.json();
  }

  return {
    mode: "online",
    isOnline: true,
    scope:
      "オンラインランキング。難易度ごとのFINAL TIME上位10件を表示します。",

    async list(difficulty) {
      if (!ALLOWED_DIFFICULTIES.has(difficulty)) {
        throw new Error("Invalid difficulty");
      }

      const params = new URLSearchParams({
        game: DEBUGGER_GAME_ID,
        version:
          DEBUGGER_RANKING_VERSION,
        difficulty,
      });

      const payload = await request(
        `?${params.toString()}`
      );

      return normalizeSummary(payload);
    },

    async submit(entry) {
      validateEntry(entry);

      const payload = await request("", {
        method: "POST",
        body: JSON.stringify({
          game: DEBUGGER_GAME_ID,
          version:
            DEBUGGER_RANKING_VERSION,
          ...entry,
        }),
      });

      return normalizeSummary(
        payload,
        entry.id
      );
    },
  };
}

const configuredEndpoint =
  import.meta.env
    .VITE_DEBUGGER_RANKING_ENDPOINT
    ?.trim();

export const rankingProvider =
  configuredEndpoint
    ? createHttpRanking(configuredEndpoint)
    : createSessionRanking();
