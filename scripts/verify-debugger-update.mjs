import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { questions } from "../src/games/debugger/questions.js";
import {
  selectQuestions,
  validateQuestions,
  starsForStage,
} from "../src/games/debugger/engine.js";

validateQuestions(questions);
assert.equal(questions.length, 60, "question bank must contain 60 questions");

for (const difficulty of ["beginner", "intermediate", "advanced"]) {
  assert.equal(
    questions.filter((q) => q.difficulty === difficulty && q.group === "A").length,
    6,
    `${difficulty}/A question count`
  );
  assert.equal(
    questions.filter((q) => q.difficulty === difficulty && q.group === "B").length,
    6,
    `${difficulty}/B question count`
  );
  assert.equal(
    questions.filter((q) => q.difficulty === difficulty && q.group === "C").length,
    8,
    `${difficulty}/C question count`
  );
}

assert.deepEqual(
  Array.from({ length: 10 }, (_, index) => starsForStage(index)),
  [1, 1, 1, 2, 2, 2, 3, 3, 3, 3],
  "star progression"
);

function mulberry32(seed) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

for (const difficulty of ["beginner", "intermediate", "advanced"]) {
  for (let run = 0; run < 500; run++) {
    const picked = selectQuestions(questions, difficulty, mulberry32(run + 100));
    assert.equal(picked.length, 10);
    assert.equal(new Set(picked.map((q) => q.id)).size, 10, "no duplicate questions");
    assert.equal(
      picked.map((q) => q.bugs.length).join(""),
      "1112223333",
      "bug count progression"
    );

    const mistakeKeys = picked.flatMap((q) => q.mistakeKeys);
    assert.equal(
      new Set(mistakeKeys).size,
      mistakeKeys.length,
      "the same exact mistake pattern must not repeat in one run"
    );

    if (difficulty === "beginner") {
      assert.ok(picked.every((q) => q.difficulty === "beginner"));
    }
    if (difficulty === "advanced") {
      assert.ok(picked.every((q) => q.difficulty === "advanced"));
    }
  }
}

const sourceStats = {
  A: { beginner: 0, intermediate: 0, advanced: 0, total: 0 },
  B: { beginner: 0, intermediate: 0, advanced: 0, total: 0 },
  C: { beginner: 0, intermediate: 0, advanced: 0, total: 0 },
};
const random = mulberry32(20261001);
for (let run = 0; run < 4000; run++) {
  for (const q of selectQuestions(questions, "intermediate", random)) {
    sourceStats[q.group][q.difficulty] += 1;
    sourceStats[q.group].total += 1;
  }
}

const ratio = (group, difficulty) =>
  sourceStats[group][difficulty] / sourceStats[group].total;

assert.ok(ratio("A", "beginner") > 0.64 && ratio("A", "beginner") < 0.76);
assert.ok(ratio("A", "advanced") > 0.02 && ratio("A", "advanced") < 0.09);
assert.ok(ratio("B", "intermediate") > 0.54 && ratio("B", "intermediate") < 0.66);
assert.ok(ratio("C", "advanced") > 0.34 && ratio("C", "advanced") < 0.46);
assert.ok(ratio("C", "beginner") > 0.02 && ratio("C", "beginner") < 0.09);

const home = await readFile(new URL("../src/pages/Home.jsx", import.meta.url), "utf8");
assert.match(home, /<span className="doodleBadge">PLAY<\/span>/);
assert.match(home, /<span className="doodleHint">DEBUGGER公開中<\/span>/);
assert.doesNotMatch(
  home,
  /DESIGN DESK \/ WORKS<\/span>\s*<span className="doodleBadge">NEW<\/span>/
);

const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
assert.match(sitemap, /https:\/\/www\.pukulab\.com\/game\/debugger/);
assert.match(sitemap, /<lastmod>2026-10-01<\/lastmod>/);

console.log("DEBUGGER question/home/sitemap update: passed");
