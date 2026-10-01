export const MISS_PENALTY_MS = 3000;
export const MISS_LOCK_MS = 650;
export const CLEAR_DELAY_MS = 700;
export const STAGE_COUNT = 10;
const GROUPS = [{ id: "A", count: 3, bugs: 1 }, { id: "B", count: 3, bugs: 2 }, { id: "C", count: 4, bugs: 3 }];

export function validateQuestions(bank) {
  const ids = new Set();
  for (const q of bank) {
    if (ids.has(q.id)) throw new Error(`Duplicate question: ${q.id}`);
    ids.add(q.id);
    const group = GROUPS.find(g => g.id === q.group);
    if (!group || q.bugs.length !== group.bugs || !q.objective) throw new Error(`Invalid question: ${q.id}`);
    let end = 0;
    for (const bug of q.bugs) {
      if (bug.start < end || bug.end <= bug.start || bug.end > q.code.length || q.code.slice(bug.start, bug.end).includes("\n")) {
        throw new Error(`Invalid bug range: ${bug.id}`);
      }
      end = bug.end;
    }
  }
}

export function selectQuestions(bank, difficulty, random = Math.random) {
  const result = [];
  for (const group of GROUPS) {
    const pool = bank.filter(q => q.difficulty === difficulty && q.group === group.id);
    if (pool.length <= group.count) throw new Error(`Not enough questions: ${difficulty}/${group.id}`);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    result.push(...pool.slice(0, group.count));
  }
  if (new Set(result.map(q => q.id)).size !== STAGE_COUNT) throw new Error("Duplicate questions");
  return result;
}

// All displayed times use integer centiseconds, so CLEAR + PENALTY exactly equals FINAL.
export function resultFor(startedAt, finishedAt, misses) {
  const clearMs = Math.floor(Math.max(0, finishedAt - startedAt) / 10) * 10;
  const penaltyMs = misses * MISS_PENALTY_MS;
  return { clearMs, misses, penaltyMs, finalMs: clearMs + penaltyMs };
}

export function formatTime(ms) {
  const cs = Math.floor(Math.max(0, ms) / 10);
  return `${String(Math.floor(cs / 6000)).padStart(2, "0")}:${String(Math.floor(cs / 100) % 60).padStart(2, "0")}.${String(cs % 100).padStart(2, "0")}`;
}

// Parse display tokens only. Never eval / execute the displayed JavaScript.
// Explicit bug ranges also support multi-token expressions and missing-symbol questions.
export function codeLines(question) {
  const lines = [[]];
  const tokenPattern = /\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|[A-Za-z_$][\w$]*|\d+(?:\.\d+)?|===|!==|=>|==|!=|<=|>=|\+\+|--|\+=|-=|&&|\|\||\?\?|\s+|./g;
  function add(text, start, bugId = null) {
    let offset = start;
    for (const [i, part] of text.split("\n").entries()) {
      if (i) { lines.push([]); offset++; }
      if (part) lines.at(-1).push({ text: part, start: offset, bugId, selectable: !!bugId || (!/^\s+$/.test(part) && !part.startsWith("//")) });
      offset += part.length;
    }
  }
  function plain(text, base) {
    for (const token of text.matchAll(tokenPattern)) add(token[0], base + token.index);
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
