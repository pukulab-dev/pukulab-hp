export const MISS_PENALTY_MS = 3000;
export const MISS_LOCK_MS = 650;
export const CLEAR_DELAY_MS = 700;
export const STAGE_COUNT = 10;

const GROUPS = [
  { id: "A", count: 3, bugs: 1, stars: 1 },
  { id: "B", count: 3, bugs: 2, stars: 2 },
  { id: "C", count: 4, bugs: 3, stars: 3 },
];

// 中級だけは「簡単な問題を引ける運」と「難問を引く緊張感」を残す。
// ★が上がるほど advanced 寄りの問題を引きやすくする。
const INTERMEDIATE_SOURCE_WEIGHTS = {
  A: [
    ["beginner", 0.70],
    ["intermediate", 0.25],
    ["advanced", 0.05],
  ],
  B: [
    ["beginner", 0.20],
    ["intermediate", 0.60],
    ["advanced", 0.20],
  ],
  C: [
    ["beginner", 0.05],
    ["intermediate", 0.55],
    ["advanced", 0.40],
  ],
};

function shuffle(items, random) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function sourceDifficultyFor(runDifficulty, groupId, random) {
  if (runDifficulty !== "intermediate") return runDifficulty;

  const roll = random();
  let cursor = 0;

  for (const [difficulty, weight] of INTERMEDIATE_SOURCE_WEIGHTS[groupId]) {
    cursor += weight;
    if (roll < cursor) return difficulty;
  }

  return "intermediate";
}

function overlaps(set, values) {
  return values.some((value) => set.has(value));
}

function pickQuestion(pool, state, random, requireFreshMistakes = false) {
  let available = shuffle(
    pool.filter((question) => !state.usedIds.has(question.id)),
    random
  );

  if (requireFreshMistakes) {
    available = available.filter(
      (question) => !overlaps(state.usedMistakeKeys, question.mistakeKeys)
    );
  }

  if (!available.length) return null;

  const preferences = [
    (question) =>
      !state.usedCategories.has(question.category) &&
      !overlaps(state.usedMistakeKeys, question.mistakeKeys),
    (question) =>
      question.category !== state.previousCategory &&
      !overlaps(state.usedMistakeKeys, question.mistakeKeys),
    (question) => !overlaps(state.usedMistakeKeys, question.mistakeKeys),
    (question) => question.category !== state.previousCategory,
    () => true,
  ];

  for (const preference of preferences) {
    const candidate = available.find(preference);
    if (candidate) return candidate;
  }

  return available[0];
}

export function validateQuestions(bank) {
  const ids = new Set();

  for (const q of bank) {
    if (ids.has(q.id)) throw new Error(`Duplicate question: ${q.id}`);
    ids.add(q.id);

    const group = GROUPS.find((item) => item.id === q.group);

    if (
      !group ||
      q.bugs.length !== group.bugs ||
      !q.objective ||
      !q.category ||
      !Array.isArray(q.mistakeKeys) ||
      q.mistakeKeys.length !== q.bugs.length
    ) {
      throw new Error(`Invalid question: ${q.id}`);
    }

    let end = 0;

    for (const bug of q.bugs) {
      if (
        bug.start < end ||
        bug.end <= bug.start ||
        bug.end > q.code.length ||
        q.code.slice(bug.start, bug.end).includes("\n")
      ) {
        throw new Error(`Invalid bug range: ${bug.id}`);
      }

      end = bug.end;
    }
  }
}

export function selectQuestions(bank, difficulty, random = Math.random) {
  const result = [];
  const state = {
    usedIds: new Set(),
    usedCategories: new Set(),
    usedMistakeKeys: new Set(),
    previousCategory: null,
  };

  for (const group of GROUPS) {
    for (let i = 0; i < group.count; i++) {
      const sourceDifficulty = sourceDifficultyFor(difficulty, group.id, random);
      const sourcePool = bank.filter(
        (q) => q.difficulty === sourceDifficulty && q.group === group.id
      );

      // まず同じミス記号・同じ修正パターンを再登場させない候補を探す。
      let picked = pickQuestion(sourcePool, state, random, true);

      // 中級では抽選された難易度側に新鮮な候補がなければ、同じ★帯の別難易度へ逃がす。
      // 「簡単 / 中間 / 上級」の配分より、同じミスの連発を避ける方を優先する。
      if (!picked && difficulty === "intermediate") {
        const fallbackPool = bank.filter((q) => q.group === group.id);
        picked = pickQuestion(fallbackPool, state, random, true);
      }

      // 問題バンクを将来減らした場合の最後の保険。
      if (!picked) {
        picked = pickQuestion(sourcePool, state, random);
      }

      if (!picked && difficulty === "intermediate") {
        const fallbackPool = bank.filter((q) => q.group === group.id);
        picked = pickQuestion(fallbackPool, state, random);
      }

      if (!picked) {
        throw new Error(`Not enough questions: ${difficulty}/${group.id}`);
      }

      result.push(picked);
      state.usedIds.add(picked.id);
      state.usedCategories.add(picked.category);
      for (const key of picked.mistakeKeys) state.usedMistakeKeys.add(key);
      state.previousCategory = picked.category;
    }
  }

  if (new Set(result.map((q) => q.id)).size !== STAGE_COUNT) {
    throw new Error("Duplicate questions");
  }

  return result;
}

export function starsForStage(index) {
  if (index < 3) return 1;
  if (index < 6) return 2;
  return 3;
}

// All displayed times use integer centiseconds, so CLEAR + PENALTY exactly equals FINAL.
export function resultFor(startedAt, finishedAt, misses) {
  const clearMs =
    Math.floor(Math.max(0, finishedAt - startedAt) / 10) * 10;
  const penaltyMs = misses * MISS_PENALTY_MS;

  return {
    clearMs,
    misses,
    penaltyMs,
    finalMs: clearMs + penaltyMs,
  };
}

export function formatTime(ms) {
  const cs = Math.floor(Math.max(0, ms) / 10);

  return `${String(Math.floor(cs / 6000)).padStart(2, "0")}:${String(
    Math.floor(cs / 100) % 60
  ).padStart(2, "0")}.${String(cs % 100).padStart(2, "0")}`;
}

// Parse display tokens only. Never eval / execute the displayed JavaScript.
// Explicit bug ranges also support multi-token expressions and missing-symbol questions.
export function codeLines(question) {
  const lines = [[]];
  const tokenPattern =
    /\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|[A-Za-z_$][\w$]*|\d+(?:\.\d+)?|===|!==|=>|==|!=|<=|>=|\+\+|--|\+=|-=|&&|\|\||\?\?|\s+|./g;

  function add(text, start, bugId = null) {
    let offset = start;

    for (const [i, part] of text.split("\n").entries()) {
      if (i) {
        lines.push([]);
        offset++;
      }

      if (part) {
        lines.at(-1).push({
          text: part,
          start: offset,
          bugId,
          selectable:
            !!bugId ||
            (!/^\s+$/.test(part) && !part.startsWith("//")),
        });
      }

      offset += part.length;
    }
  }

  function plain(text, base) {
    for (const token of text.matchAll(tokenPattern)) {
      add(token[0], base + token.index);
    }
  }

  let cursor = 0;

  for (const bug of question.bugs) {
    plain(question.code.slice(cursor, bug.start), cursor);
    add(question.code.slice(bug.start, bug.end), bug.start, bug.id);
    cursor = bug.end;
  }

  plain(question.code.slice(cursor), cursor);
  return lines;
}
