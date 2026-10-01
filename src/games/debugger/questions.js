// [[...]] は出題時に取り除かれ、bugs の文字範囲になる。
// 1問のバグ数は A=1、B=2、C=3 の仕様を維持。
// category は連続して似た問題が出にくくするために使用する。
function question(
  id,
  difficulty,
  group,
  category,
  objective,
  markedCode,
  fixes
) {
  const bugs = [];
  let code = "";
  let cursor = 0;

  for (const match of markedCode.matchAll(/\[\[([\s\S]*?)\]\]/g)) {
    code += markedCode.slice(cursor, match.index);

    const start = code.length;
    code += match[1];

    const [replacement, explanation] = fixes[bugs.length];

    bugs.push({
      id: `${id}-${bugs.length + 1}`,
      start,
      end: code.length,
      replacement,
      explanation,
    });

    cursor = match.index + match[0].length;
  }

  code += markedCode.slice(cursor);

  if (bugs.length !== fixes.length) {
    throw new Error(`Invalid fixes: ${id}`);
  }

  return {
    id,
    difficulty,
    group,
    category,
    language: "JavaScript",
    objective,
    code,
    bugs,
    explanation: bugs.map((bug) => bug.explanation).join(" "),
  };
}

export const DIFFICULTIES = [
  {
    id: "beginner",
    label: "初級",
    caption: "まず見つける",
    description: "名前・記号・値の違いを見つけるやさしい問題",
  },
  {
    id: "intermediate",
    label: "中級",
    caption: "流れを読む",
    description: "条件・ループ・戻り値を追って原因を探そう",
  },
  {
    id: "advanced",
    label: "上級",
    caption: "挙動を見抜く",
    description: "境界値・参照・JavaScript特有の罠を見抜こう",
  },
];

export const questions = [
  // ============================================================
  // BEGINNER / A : バグ1個
  // ============================================================
  question(
    "b-a1",
    "beginner",
    "A",
    "name",
    "message に入れた Hello! を表示する",
    `const message = "Hello!";
console.log([[mesage]]);`,
    [["message", "宣言した変数名は message です。"]]
  ),

  question(
    "b-a2",
    "beginner",
    "A",
    "operator",
    "10 に 5 を足した 15 を表示する",
    `const score = 10;
console.log(score [[-]] 5);`,
    [["+", "足し算なので + を使います。"]]
  ),

  question(
    "b-a3",
    "beginner",
    "A",
    "bracket",
    "red と blue の2つを配列に入れる",
    `const colors = ["red", "blue"[[}]];
console.log(colors);`,
    [["]", "配列は [ で始めたら ] で閉じます。"]]
  ),

  question(
    "b-a4",
    "beginner",
    "A",
    "index",
    "colors から blue を表示する",
    `const colors = ["red", "blue"];
console.log(colors[[[0]]]);`,
    [["[1]", "配列は0から数えるので blue は1番です。"]]
  ),

  // ============================================================
  // BEGINNER / B : バグ2個
  // ============================================================
  question(
    "b-b1",
    "beginner",
    "B",
    "number",
    "10 に 5 を足して 15 を表示する",
    `let score = [[5]];
score [[-=]] 5;
console.log(score);`,
    [
      ["10", "開始時の score は10です。"],
      ["+=", "5を足すので += を使います。"],
    ]
  ),

  question(
    "b-b2",
    "beginner",
    "B",
    "array",
    "blue と配列の個数 2 を表示する",
    `const colors = ["red", "blue"[[}]];
console.log(colors[[[0]]]);
console.log(colors.length);`,
    [
      ["]", "配列は ] で閉じます。"],
      ["[1]", "blue は添字1です。"],
    ]
  ),

  question(
    "b-b3",
    "beginner",
    "B",
    "output",
    "Hello Puku と表示する",
    `const name = "Puku";
const message = "Hello " + [[user]];
console.[[write]](message);`,
    [
      ["name", "つなげるのは宣言済みの name です。"],
      ["log", "コンソールへ表示するメソッドは log です。"],
    ]
  ),

  question(
    "b-b4",
    "beginner",
    "B",
    "boolean",
    "isOpen が true のとき OPEN と表示する",
    `const isOpen = [[false]];

if ([[!isOpen]]) {
  console.log("OPEN");
}`,
    [
      ["true", "この例では isOpen は true です。"],
      ["isOpen", "true のとき表示したいので否定 ! は不要です。"],
    ]
  ),

  // ============================================================
  // BEGINNER / C : バグ3個
  // ============================================================
  question(
    "b-c1",
    "beginner",
    "C",
    "arithmetic",
    "2 と 3 を足した 5 を表示する",
    `let total = [[1]];
total += 2;
total [[-=]] 3;
console.log([[count]]);`,
    [
      ["0", "合計は0から始めます。"],
      ["+=", "3も足すので += を使います。"],
      ["total", "結果を入れている変数は total です。"],
    ]
  ),

  question(
    "b-c2",
    "beginner",
    "C",
    "array",
    "dog と配列の個数 2 を表示する",
    `const animals = ["cat", "dog"[[}]];
console.log(animals[[[0]]]);
console.[[write]](animals.length);`,
    [
      ["]", "配列は ] で閉じます。"],
      ["[1]", "dog は添字1です。"],
      ["log", "表示には console.log を使います。"],
    ]
  ),

  question(
    "b-c3",
    "beginner",
    "C",
    "condition",
    "18歳なら OK と表示する",
    `const age = [[17]];

if (age [[>]] 18) {
  console.log([["NG"]]);
}`,
    [
      ["18", "この例の年齢は18です。"],
      [">=", "18歳ちょうども含めるので >= です。"],
      ['"OK"', "条件を満たしたときは OK と表示します。"],
    ]
  ),

  question(
    "b-c4",
    "beginner",
    "C",
    "function",
    "add(2, 3) の結果 5 を表示する",
    `function add(a, b) {
  const result = a [[-]] b;
  return [[a]];
}

console.log([[subtract]](2, 3));`,
    [
      ["+", "足し算なので + を使います。"],
      ["result", "計算結果を入れた result を返します。"],
      ["add", "呼び出す関数名は add です。"],
    ]
  ),

  question(
    "b-c5",
    "beginner",
    "C",
    "string",
    "Puku Lab と表示する",
    `const first = "Puku ";
const second = [["Lap"]];
const message = first [[-]] second;
console.[[write]](message);`,
    [
      ['"Lab"', "つなげる文字は Lab です。"],
      ["+", "文字列をつなげるので + を使います。"],
      ["log", "表示には console.log を使います。"],
    ]
  ),

  // ============================================================
  // INTERMEDIATE / A : バグ1個
  // ============================================================
  question(
    "i-a1",
    "intermediate",
    "A",
    "boundary",
    "score が60以上なら true。60も含む",
    `function passed(score) {
  return score [[>]] 60;
}

console.log(passed(60));`,
    [[">=", "境界の60点を含めるには >= を使います。"]]
  ),

  question(
    "i-a2",
    "intermediate",
    "A",
    "loop",
    "配列の全要素を合計する。空配列なら0",
    `function sum(values) {
  let total = 0;

  for (let i = 0; i [[<=]] values.length; i++) {
    total += values[i];
  }

  return total;
}`,
    [["<", "length 番目は存在しないため i < length までです。"]]
  ),

  question(
    "i-a3",
    "intermediate",
    "A",
    "return",
    "square は入力値の2乗を返す",
    `function square(value) {
  const result = value * value;
  return [[value]];
}

console.log(square(3));`,
    [["result", "計算結果を保存した result を返します。"]]
  ),

  question(
    "i-a4",
    "intermediate",
    "A",
    "index",
    "配列の最後の要素を返す",
    `function last(values) {
  return values[ [[values.length]] ];
}

console.log(last([10, 20, 30]));`,
    [["values.length - 1", "最後の添字は length - 1 です。"]]
  ),

  // ============================================================
  // INTERMEDIATE / B : バグ2個
  // ============================================================
  question(
    "i-b1",
    "intermediate",
    "B",
    "accumulator",
    "0以上の数だけを合計する",
    `function sumPositive(values) {
  let total = [[1]];

  for (const value of values) {
    if (value [[<]] 0) {
      total += value;
    }
  }

  return total;
}`,
    [
      ["0", "合計の初期値は0です。"],
      [">=", "0以上の値を加算します。"],
    ]
  ),

  question(
    "i-b2",
    "intermediate",
    "B",
    "transform",
    "items の各値を2倍にした配列を返す",
    `function doubled(items) {
  const result = [];

  for (let i = [[1]]; i < items.length; i++) {
    result.push(items[i] * 2);
  }

  return [[items]];
}`,
    [
      ["0", "先頭要素から処理するので0から開始します。"],
      ["result", "変換結果をためた result を返します。"],
    ]
  ),

  question(
    "i-b3",
    "intermediate",
    "B",
    "modulo",
    "5の倍数なら fizz、それ以外は元の値を返す",
    `function label(value) {
  if (value [[/]] 5 === 0) {
    return "fizz";
  }

  return [[5]];
}`,
    [
      ["%", "倍数判定には余りを求める % を使います。"],
      ["value", "それ以外は元の value を返します。"],
    ]
  ),

  question(
    "i-b4",
    "intermediate",
    "B",
    "calculation",
    "税込価格を返す。税率は0.1のような小数",
    `function withTax(price, rate) {
  const tax = price [[+]] rate;
  const total = price + tax;
  return [[tax]];
}

console.log(withTax(100, 0.1));`,
    [
      ["*", "税額は価格 × 税率です。"],
      ["total", "返すのは税込価格 total です。"],
    ]
  ),

  // ============================================================
  // INTERMEDIATE / C : バグ3個
  // ============================================================
  question(
    "i-c1",
    "intermediate",
    "C",
    "count",
    "配列に含まれる偶数の個数を返す",
    `function countEven(values) {
  let count = [[1]];

  for (let i = [[1]]; i < values.length; i++) {
    if (values[i] % 2 === [[1]]) {
      count++;
    }
  }

  return count;
}`,
    [
      ["0", "個数は0から数えます。"],
      ["0", "先頭要素も調べるので0から開始します。"],
      ["0", "偶数を2で割った余りは0です。"],
    ]
  ),

  question(
    "i-c2",
    "intermediate",
    "C",
    "average",
    "空でない数値配列の平均値を返す",
    `function average(values) {
  let total = 0;

  for (let i = [[1]]; i < values.length; i++) {
    total [[=]] values[i];
  }

  return total [[*]] values.length;
}`,
    [
      ["0", "先頭要素も合計するため0から開始します。"],
      ["+=", "上書きせず合計するので += です。"],
      ["/", "平均は合計 ÷ 個数です。"],
    ]
  ),

  question(
    "i-c3",
    "intermediate",
    "C",
    "object",
    "user の name と age を使って Puku (38) を返す",
    `function profile(user) {
  const name = user.[[title]];
  const age = user.age [[+]] 1;
  return [[age + " (" + name + ")"]];
}

profile({ name: "Puku", age: 38 });`,
    [
      ["name", "名前は user.name です。"],
      ["", "年齢をそのまま使うので + 1 は不要です。"],
      ['name + " (" + age + ")"', "表示順は name (age) です。"],
    ]
  ),

  question(
    "i-c4",
    "intermediate",
    "C",
    "filter",
    "空文字を除き、残りを大文字にした配列を返す",
    `function clean(names) {
  return names
    .filter((name) => name [[===]] "")
    .map((name) => name.[[toLowerCase]]())
    .[[reverse]]();
}`,
    [
      ["!==", "空文字ではない要素を残します。"],
      ["toUpperCase", "大文字へ変換します。"],
      ["slice", "順番は変えないため reverse は不要です。ここでは slice() でコピーします。"],
    ]
  ),

  question(
    "i-c5",
    "intermediate",
    "C",
    "range",
    "1から n までの整数を合計する",
    `function sumTo(n) {
  let total = [[1]];

  for (let i = 1; i [[<]] n; i++) {
    total += [[n]];
  }

  return total;
}`,
    [
      ["0", "合計の初期値は0です。"],
      ["<=", "n自身も含めるので <= です。"],
      ["i", "毎回現在の i を加算します。"],
    ]
  ),

  // ============================================================
  // ADVANCED / A : バグ1個
  // ============================================================
  question(
    "a-a1",
    "advanced",
    "A",
    "sort",
    "数値配列を昇順に並べたコピーを返す。元配列は保持する",
    `function ascending(values) {
  return [...values].[[sort()]];
}

console.log(ascending([2, 10, 1]));`,
    [
      [
        "sort((a, b) => a - b)",
        "既定の sort は文字列順なので数値用の比較関数が必要です。",
      ],
    ]
  ),

  question(
    "a-a2",
    "advanced",
    "A",
    "nullish",
    "limit が null / undefined のときだけ10にする。0は有効",
    `function limitOf(options) {
  return options.limit [[||]] 10;
}

console.log(limitOf({ limit: 0 }));`,
    [["??", "|| は0も既定値に置き換えるため ?? を使います。"]]
  ),

  question(
    "a-a3",
    "advanced",
    "A",
    "binary-search",
    "昇順配列から target の位置を二分探索する。なければ -1",
    `function search(values, target) {
  let low = 0;
  let high = values.length - 1;

  while (low [[<]] high) {
    const mid = Math.floor((low + high) / 2);

    if (values[mid] === target) return mid;
    if (values[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}`,
    [["<=", "low と high が一致した最後の1要素も調べます。"]]
  ),

  question(
    "a-a4",
    "advanced",
    "A",
    "nan",
    "同じ値をまとめる。NaN 同士も1個にまとめる",
    `function unique(values) {
  return [[values.filter((v, i) => values.indexOf(v) === i)]];
}

console.log(unique([NaN, NaN, 1, 1]));`,
    [
      [
        "[...new Set(values)]",
        "indexOf は NaN を見つけられません。Set なら NaN も重複として扱えます。",
      ],
    ]
  ),

  // ============================================================
  // ADVANCED / B : バグ2個
  // ============================================================
  question(
    "a-b1",
    "advanced",
    "B",
    "immutability",
    "user の name と settings.theme だけを更新したコピーを返す。元は変更しない",
    `function update(user, name, theme) {
  const next = [[user]];
  next.name = name;

  next.settings = [[user.settings]];
  next.settings.theme = theme;

  return next;
}`,
    [
      ["{ ...user }", "外側のオブジェクトをコピーします。"],
      ["{ ...user.settings }", "ネストした settings もコピーします。"],
    ]
  ),

  question(
    "a-b2",
    "advanced",
    "B",
    "median",
    "数値配列の中央値を返す。空なら null。元配列は保持する",
    `function median(values) {
  if (!values.length) return null;

  const sorted = [...values].[[sort()]];
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2) return sorted[mid];

  return (sorted[[[mid]]] + sorted[mid]) / 2;
}`,
    [
      ["sort((a, b) => a - b)", "数値としてソートします。"],
      ["[mid - 1]", "偶数個なら中央の左側は mid - 1 です。"],
    ]
  ),

  question(
    "a-b3",
    "advanced",
    "B",
    "pagination",
    "items を1始まりのページ番号で切り出す。size は正の整数",
    `function pageOf(items, page, size) {
  const start = [[page * size]];
  const end = start + [[size - 1]];

  return items.slice(start, end);
}`,
    [
      ["(page - 1) * size", "1ページ目の開始添字は0です。"],
      ["size", "slice の終了位置は含まれないので start + size です。"],
    ]
  ),

  question(
    "a-b4",
    "advanced",
    "B",
    "conversion",
    "入力を整数に変換する。無効値は null、0は有効",
    `function integerOf(input) {
  if (typeof input !== "string" && typeof input !== "number") return null;
  if (typeof input === "string" && input.trim() === "") return null;

  const value = [[parseInt(input, 10)]];

  if ([[!value]] || !Number.isInteger(value)) return null;

  return value;
}`,
    [
      [
        "Number(input)",
        "12px などを許可しないため全体を Number で変換します。",
      ],
      [
        "!Number.isFinite(value)",
        "!value は有効な0も拒否するため有限数かどうかを確認します。",
      ],
    ]
  ),

  // ============================================================
  // ADVANCED / C : バグ3個
  // ============================================================
  question(
    "a-c1",
    "advanced",
    "C",
    "deep-copy",
    "全ユーザーの done を true にしたコピー配列を返す。元データは保持する",
    `function complete(users) {
  const result = [[users]];

  for (let i = 0; i < result.length; i++) {
    const next = [[result[i]]];
    next.done = true;
    result[i] = next;
  }

  return [[users]];
}`,
    [
      ["[...users]", "配列自体をコピーします。"],
      ["{ ...result[i] }", "各ユーザーオブジェクトもコピーします。"],
      ["result", "加工した result を返します。"],
    ]
  ),

  question(
    "a-c2",
    "advanced",
    "C",
    "pipeline",
    "重複を除き、数値昇順の上位 limit 個を返す。limit=0 は空、未指定は3個",
    `function smallest(values, limit) {
  const count = limit [[||]] 3;
  const unique = [...new Set(values)];
  const sorted = unique.[[sort()]];

  return sorted.slice(0, [[count - 1]]);
}`,
    [
      ["??", "0を有効にするため ?? を使います。"],
      ["sort((a, b) => a - b)", "数値順に並べます。"],
      ["count", "slice の終了位置は含まれないため count を指定します。"],
    ]
  ),

  question(
    "a-c3",
    "advanced",
    "C",
    "map-key",
    "id ごとに最初の1件だけ残す。id=0 は有効、null / undefined は除外",
    `function uniqueById(items) {
  const seen = new Map();
  const result = [];

  for (const item of items) {
    if ([[!item.id]]) continue;
    if (seen.has([[item]])) continue;

    seen.set(item.id, true);
    result.[[unshift]](item);
  }

  return result;
}`,
    [
      [
        "item.id == null",
        "0を除外せず null / undefined だけを除外します。",
      ],
      ["item.id", "Map に保存しているキーは id です。"],
      ["push", "入力順を保つため末尾へ追加します。"],
    ]
  ),

  question(
    "a-c4",
    "advanced",
    "C",
    "cache",
    "期限が now 以下のキャッシュを削除し、残った値を返す。値0も残す",
    `function readLive(cache, now) {
  const result = [];

  for (const [key, entry] of cache) {
    if (entry.expires [[<]] now) {
      cache.delete([[entry]]);
    } else if ([[entry.value]]) {
      result.push(entry.value);
    }
  }

  return result;
}`,
    [
      ["<=", "期限ちょうども期限切れです。"],
      ["key", "Map から削除するのは key です。"],
      ["true", "有効期限内なら値0も含めて残します。"],
    ]
  ),

  question(
    "a-c5",
    "advanced",
    "C",
    "range",
    "整数の閉区間 [start, end] の全整数を配列で返す。start > end は空配列",
    `function range(start, end) {
  if (start [[>=]] end) return [];

  const count = end - start [[-]] 1;

  return Array.from(
    { length: count },
    (_, index) => [[index]]
  );
}`,
    [
      [">", "start === end なら1要素を返すため除外しません。"],
      ["+", "両端を含む個数は end - start + 1 です。"],
      ["start + index", "値は start から始めます。"],
    ]
  ),
];
