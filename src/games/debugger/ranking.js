// DEBUGGER online ranking provider.
//
// Backend:
// Supabase Edge Function "debugger-ranking"
//
// The endpoint issues a server-side run ID when play starts.
// Score submission requires that run ID, validates score arithmetic,
// and compares the client timer with the server-side play session.
//
// VITE_DEBUGGER_RANKING_ENDPOINT can override the endpoint for testing.
export const DEBUGGER_GAME_ID = "debugger";
export const DEBUGGER_RANKING_VERSION = "2026-10-02-v1";

export const DEFAULT_DEBUGGER_RANKING_ENDPOINT =
  "https://kgdobmsphbugmlpnqmhe.supabase.co/functions/v1/debugger-ranking";

const ALLOWED_DIFFICULTIES = new Set([
  "beginner",
  "intermediate",
  "advanced",
]);

function validateDifficulty(difficulty) {
  if (!ALLOWED_DIFFICULTIES.has(difficulty)) {
    throw new Error("Invalid difficulty");
  }
}

function validateEntry(entry) {
  if (
    !entry ||
    !entry.id ||
    !entry.rankingRunId ||
    !ALLOWED_DIFFICULTIES.has(entry.difficulty) ||
    typeof entry.nickname !== "string" ||
    entry.nickname.trim().length < 1 ||
    entry.nickname.trim().length > 12 ||
    !Number.isInteger(entry.misses) ||
    entry.misses < 0 ||
    !Number.isFinite(entry.clearMs) ||
    entry.clearMs < 0 ||
    entry.penaltyMs !== entry.misses * 3000 ||
    entry.finalMs !== entry.clearMs + entry.penaltyMs
  ) {
    throw new Error("Invalid result");
  }
}

function normalizeSummary(payload) {
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

  return {
    rows,
    currentRank:
      Number.isInteger(payload?.currentRank) &&
      payload.currentRank > 0
        ? payload.currentRank
        : null,
    total:
      Number.isInteger(payload?.total) &&
      payload.total >= 0
        ? payload.total
        : rows.length,
  };
}

export function createHttpRanking(endpoint) {
  const baseUrl = endpoint.replace(/\/+$/, "");

  async function request(path = "", options = {}) {
    const response = await fetch(`${baseUrl}${path}`, {
      ...options,
      headers: {
        Accept: "application/json",
        ...(options.body
          ? { "Content-Type": "application/json" }
          : {}),
        ...options.headers,
      },
    });

    const payload = await response
      .json()
      .catch(() => null);

    if (!response.ok) {
      throw new Error(
        payload?.error ||
          `Ranking request failed: ${response.status}`
      );
    }

    return payload;
  }

  return {
    mode: "online",
    isOnline: true,
    scope:
      "オンラインランキング。難易度ごとのFINAL TIME上位10件を表示します。",

    async start(difficulty) {
      validateDifficulty(difficulty);

      const payload = await request("", {
        method: "POST",
        body: JSON.stringify({
          action: "start",
          game: DEBUGGER_GAME_ID,
          version: DEBUGGER_RANKING_VERSION,
          difficulty,
        }),
      });

      if (!payload?.runId) {
        throw new Error(
          "Ranking run could not be created"
        );
      }

      return payload.runId;
    },

    async list(difficulty) {
      validateDifficulty(difficulty);

      const params = new URLSearchParams({
        game: DEBUGGER_GAME_ID,
        version: DEBUGGER_RANKING_VERSION,
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
          action: "submit",
          game: DEBUGGER_GAME_ID,
          version: DEBUGGER_RANKING_VERSION,
          runId: entry.rankingRunId,
          id: entry.id,
          nickname: entry.nickname.trim(),
          difficulty: entry.difficulty,
          clearMs: entry.clearMs,
          misses: entry.misses,
          penaltyMs: entry.penaltyMs,
          finalMs: entry.finalMs,
        }),
      });

      return normalizeSummary(payload);
    },
  };
}

const configuredEndpoint =
  import.meta.env
    .VITE_DEBUGGER_RANKING_ENDPOINT
    ?.trim();

export const rankingProvider =
  createHttpRanking(
    configuredEndpoint ||
      DEFAULT_DEBUGGER_RANKING_ENDPOINT
  );
