// Provider contract: { scope, list(difficulty): Promise<Entry[]>, submit(entry): Promise<Entry[]> }
// An online provider can replace this module's export without changing game timing / judging.
// No database / localStorage / external API is introduced. Reloading clears these records.
export function createSessionRanking() {
  const records = new Map();
  const allowed = new Set(["beginner", "intermediate", "advanced"]);
  function list(difficulty) {
    return [...(records.get(difficulty) || [])].sort((a, b) => a.finalMs - b.finalMs || a.sequence - b.sequence);
  }
  return {
    scope: "このタブ内・再読み込みでリセット",
    async list(difficulty) { return list(difficulty); },
    async submit(entry) {
      if (!allowed.has(entry.difficulty) || !Number.isInteger(entry.misses) || entry.misses < 0 ||
        !Number.isFinite(entry.clearMs) || entry.clearMs < 0 || entry.penaltyMs !== entry.misses * 3000 ||
        entry.finalMs !== entry.clearMs + entry.penaltyMs || !entry.id) throw new Error("Invalid result");
      const current = records.get(entry.difficulty) || [];
      if (!current.some(row => row.id === entry.id)) {
        const sequence = Math.max(0, ...current.map(row => row.sequence)) + 1;
        current.push({ ...entry, sequence });
        records.set(entry.difficulty, current);
        records.set(entry.difficulty, list(entry.difficulty).slice(0, 10));
      }
      return list(entry.difficulty);
    },
  };
}

export const rankingProvider = createSessionRanking();
