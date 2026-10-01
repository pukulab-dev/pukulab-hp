// [[...]] は出題時に取り除かれ、bugs の文字範囲になる。
// A=★1（1バグ） / B=★2（2バグ） / C=★3（3バグ）。
// beginner は★3でもやさしめ、advanced は実戦的、intermediate は両方が混ざる抽選用プール。
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
    const wrong = match[1];

    bugs.push({
      id: `${id}-${bugs.length + 1}`,
      start,
      end: code.length,
      replacement,
      explanation,
      mistakeKey: `${wrong.trim()}=>${replacement.trim()}`,
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
    mistakeKeys: bugs.map((bug) => bug.mistakeKey),
    explanation: bugs.map((bug) => bug.explanation).join(" "),
  };
}

export const DIFFICULTIES = [
  {
    id: "beginner",
    label: "初級",
    caption: "見つけて爽快",
    description: "★3でもやさしめ。記号・名前・見た目で気づける問題が中心",
  },
  {
    id: "intermediate",
    label: "中級",
    caption: "運も実力も",
    description: "簡単〜上級寄りまで混在。後半ほど難しい問題を引きやすい",
  },
  {
    id: "advanced",
    label: "上級",
    caption: "実戦デバッグ",
    description: "境界値・非同期・参照など、実際に起きやすいミスを見抜く",
  },
];

export const questions = [
  // ============================================================
  // BEGINNER / A / ★1 : かなりあからさま、バグ1個
  // ============================================================
  question(
    "b-a1",
    "beginner",
    "A",
    "jp-bracket-call",
    "message に入れた Hello! を表示する",
    `const message = "Hello!";\nconsole.log[[【message】]];`,
    [["(message)", "関数の呼び出しは 【】 ではなく () を使います。"]]
  ),

  question(
    "b-a2",
    "beginner",
    "A",
    "fullwidth-operator",
    "10 に 5 を足した 15 を表示する",
    `const total = 10 [[＜]] 5;\nconsole.log(total);`,
    [["+", "足し算なので + を使います。"]]
  ),

  question(
    "b-a3",
    "beginner",
    "A",
    "odd-array-close",
    "red と blue の2つを配列に入れる",
    `const colors = ["red", "blue"[[〉]];\nconsole.log(colors);`,
    [["]", "配列は [ で始めたら ] で閉じます。"]]
  ),

  question(
    "b-a4",
    "beginner",
    "A",
    "console-punctuation",
    "Hello と表示する",
    `console[[,]]log("Hello");`,
    [[".", "console.log の間はカンマではなく . です。"]]
  ),

  question(
    "b-a5",
    "beginner",
    "A",
    "smart-quotes",
    "YES という文字列を answer に入れる",
    `const answer = [[“YES”]];\nconsole.log(answer);`,
    [['"YES"', "JavaScriptの文字列は通常のクォートで囲みます。"]]
  ),

  question(
    "b-a6",
    "beginner",
    "A",
    "jp-condition-bracket",
    "isReady が true のとき START と表示する",
    `const isReady = true;\nif [[【isReady】]] {\n  console.log("START");\n}`,
    [["(isReady)", "if の条件は 【】 ではなく () で囲みます。"]]
  ),

  // ============================================================
  // BEGINNER / B / ★2 : まだ簡単、バグ2個
  // ============================================================
  question(
    "b-b1",
    "beginner",
    "B",
    "greet-symbols",
    "Puku に Hello とあいさつする",
    `function greet[[【name】]] {\n  return "Hello " [[-]] name;\n}\n\nconsole.log(greet("Puku"));`,
    [
      ["(name)", "関数の引数は () で囲みます。"],
      ["+", "文字列をつなぐので + を使います。"],
    ]
  ),

  question(
    "b-b2",
    "beginner",
    "B",
    "array-and-console",
    "cat と dog を配列に入れて表示する",
    `const pets = [[{]]"cat", "dog"];\nconsole[[::]]log(pets);`,
    [
      ["[", "配列の開始は { ではなく [ です。"],
      [".", "console.log の区切りは :: ではなく . です。"],
    ]
  ),

  question(
    "b-b3",
    "beginner",
    "B",
    "object-punctuation",
    "user の名前 Puku を表示する",
    `const user = { name[[;]] "Puku", age: 38 };\nconsole.log(user.[[title]]);`,
    [
      [":", "オブジェクトのキーと値は : で区切ります。"],
      ["name", "名前のプロパティは name です。"],
    ]
  ),

  question(
    "b-b4",
    "beginner",
    "B",
    "condition-shape",
    "score が10より大きいとき OK と表示する",
    `const score = 20;\nif [[<score > 10>]] {\n  console.log([[“OK”]]);\n}`,
    [
      ["(score > 10)", "if の条件は () で囲みます。"],
      ['"OK"', "文字列のクォートを通常の \" に直します。"],
    ]
  ),

  question(
    "b-b5",
    "beginner",
    "B",
    "method-typos",
    "items に A を追加して、個数1を表示する",
    `const items = [];\nitems.[[pussh]]("A");\nconsole.log(items.[[lenght]]);`,
    [
      ["push", "配列へ追加するメソッドは push です。"],
      ["length", "配列の個数は length で取得します。"],
    ]
  ),

  question(
    "b-b6",
    "beginner",
    "B",
    "string-and-math-symbol",
    "Puku Lab と表示する",
    `const first = [[“Puku ”]];\nconst second = "Lab";\nconsole.log(first [[×]] second);`,
    [
      ['"Puku "', "文字列は通常のクォートで囲みます。"],
      ["+", "文字列をつなげるので + を使います。"],
    ]
  ),

  // ============================================================
  // BEGINNER / C / ★3 : 初級の中では少し見る、でもやさしい、バグ3個
  // ============================================================
  question(
    "b-c1",
    "beginner",
    "C",
    "function-obvious",
    "add(2, 3) の結果5を表示する",
    `function add[[【a, b】]] {\n  return a [[／]] b;\n}\n\nconsole.log([[ad]](2, 3));`,
    [
      ["(a, b)", "引数は () で囲みます。"],
      ["+", "足し算なので + を使います。"],
      ["add", "呼び出す関数名は add です。"],
    ]
  ),

  question(
    "b-c2",
    "beginner",
    "C",
    "profile-obvious",
    "Puku と 38 を表示する",
    `const user = { name[[=]] "Puku", age: 38 };\nconsole.[[print]](user.name);\nconsole.log(user.[[years]]);`,
    [
      [":", "キーと値は : で区切ります。"],
      ["log", "表示には console.log を使います。"],
      ["age", "年齢のプロパティは age です。"],
    ]
  ),

  question(
    "b-c3",
    "beginner",
    "C",
    "loop-obvious",
    "colors の red と blue を順番に表示する",
    `const colors = ["red", "blue"[[}]];\nfor (let i = 0; i [[>]] colors.length; i++) {\n  console.log(colors[[{i}]]);\n}`,
    [
      ["]", "配列は ] で閉じます。"],
      ["<", "先頭から末尾へ進むので i < length です。"],
      ["[i]", "配列の要素は [i] で取り出します。"],
    ]
  ),

  question(
    "b-c4",
    "beginner",
    "C",
    "age-obvious",
    "18歳以上なら OK と表示する",
    `const age = [[81]];\nif (age [[<]] 18) {\n  console.log([["NG"]]);\n}`,
    [
      ["18", "この例の年齢は18です。"],
      [">=", "18歳以上なので >= です。"],
      ['"OK"', "条件を満たしたら OK と表示します。"],
    ]
  ),

  question(
    "b-c5",
    "beginner",
    "C",
    "string-obvious",
    "Puku Lab と表示する",
    `const first = [["Puko "]];\nconst second = "Lab";\nconst message = first [[&]] second;\nconsole.[[write]](message);`,
    [
      ['"Puku "', "Puko ではなく Puku です。"],
      ["+", "文字列をつなぐので + です。"],
      ["log", "表示には console.log を使います。"],
    ]
  ),

  question(
    "b-c6",
    "beginner",
    "C",
    "array-obvious",
    "A を1個追加して A を表示する",
    `const items = [[{}]];\nitems.[[pushh]]("A");\nconsole.log(items[[[1]]]);`,
    [
      ["[]", "配列は [] で作ります。"],
      ["push", "追加メソッドは push です。"],
      ["[0]", "最初の要素は0番です。"],
    ]
  ),

  question(
    "b-c7",
    "beginner",
    "C",
    "boolean-obvious",
    "開いているとき OPEN と表示する",
    `const isOpen = [[false]];\nif [[{isOpen}]] {\n  console.log([[“OPEN”]]);\n}`,
    [
      ["true", "この例では開いているので true です。"],
      ["(isOpen)", "if の条件は () で囲みます。"],
      ['"OPEN"', "文字列のクォートを通常のものに直します。"],
    ]
  ),

  question(
    "b-c8",
    "beginner",
    "C",
    "total-obvious",
    "2と3を足した5を表示する",
    `let total = [[10]];\ntotal [[=+]] 2;\ntotal += 3;\nconsole.log([[count]]);`,
    [
      ["0", "合計は0から始めます。"],
      ["+=", "加算代入は += の順番です。"],
      ["total", "結果が入っている変数は total です。"],
    ]
  ),

  // ============================================================
  // INTERMEDIATE / A / ★1 : 中間プールの軽め、バグ1個
  // ============================================================
  question(
    "i-a1",
    "intermediate",
    "A",
    "boundary",
    "score が60以上なら true。60も含む",
    `function passed(score) {\n  return score [[>]] 60;\n}\n\nconsole.log(passed(60));`,
    [[">=", "境界の60点を含めるには >= を使います。"]]
  ),

  question(
    "i-a2",
    "intermediate",
    "A",
    "loop-end",
    "配列の全要素を合計する。空配列なら0",
    `function sum(values) {\n  let total = 0;\n\n  for (let i = 0; i [[<=]] values.length; i++) {\n    total += values[i];\n  }\n\n  return total;\n}`,
    [["<", "length 番目は存在しないため i < length までです。"]]
  ),

  question(
    "i-a3",
    "intermediate",
    "A",
    "return-value",
    "square は入力値の2乗を返す",
    `function square(value) {\n  const result = value * value;\n  return [[value]];\n}\n\nconsole.log(square(3));`,
    [["result", "計算結果を保存した result を返します。"]]
  ),

  question(
    "i-a4",
    "intermediate",
    "A",
    "last-index",
    "配列の最後の要素を返す",
    `function last(values) {\n  return values[ [[values.length]] ];\n}\n\nconsole.log(last([10, 20, 30]));`,
    [["values.length - 1", "最後の添字は length - 1 です。"]]
  ),

  question(
    "i-a5",
    "intermediate",
    "A",
    "logical-operator",
    "ログイン済みで管理者のときだけ true を返す",
    `function canEdit(loggedIn, isAdmin) {\n  return loggedIn [[||]] isAdmin;\n}`,
    [["&&", "両方を満たす必要があるので && です。"]]
  ),

  question(
    "i-a6",
    "intermediate",
    "A",
    "find-vs-filter",
    "id が一致する最初のユーザー1人を返す",
    `function findUser(users, id) {\n  return users.[[filter]]((user) => user.id === id);\n}`,
    [["find", "最初の1件を返すなら filter ではなく find です。"]]
  ),

  // ============================================================
  // INTERMEDIATE / B / ★2 : 標準的な中間、バグ2個
  // ============================================================
  question(
    "i-b1",
    "intermediate",
    "B",
    "accumulator",
    "0以上の数だけを合計する",
    `function sumPositive(values) {\n  let total = [[-1]];\n\n  for (const value of values) {\n    if (value [[<]] 0) {\n      total += value;\n    }\n  }\n\n  return total;\n}`,
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
    `function doubled(items) {\n  const result = [];\n\n  for (let i = [[1]]; i < items.length; i++) {\n    result.push(items[i] * 2);\n  }\n\n  return [[items]];\n}`,
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
    `function label(value) {\n  if (value [[/]] 5 === 0) {\n    return "fizz";\n  }\n\n  return [[5]];\n}`,
    [
      ["%", "倍数判定には余りを求める % を使います。"],
      ["value", "それ以外は元の value を返します。"],
    ]
  ),

  question(
    "i-b4",
    "intermediate",
    "B",
    "tax-calculation",
    "税込価格を返す。税率は0.1のような小数",
    `function withTax(price, rate) {\n  const tax = price [[+]] rate;\n  const total = price + tax;\n  return [[tax]];\n}\n\nconsole.log(withTax(100, 0.1));`,
    [
      ["*", "税額は価格 × 税率です。"],
      ["total", "返すのは税込価格 total です。"],
    ]
  ),

  question(
    "i-b5",
    "intermediate",
    "B",
    "string-normalize",
    "前後の空白を除き、小文字にして返す",
    `function normalizeName(name) {\n  const trimmed = name.[[slice]]();\n  return trimmed.[[toUpperCase]]();\n}`,
    [
      ["trim", "前後の空白を除くのは trim です。"],
      ["toLowerCase", "小文字にするのは toLowerCase です。"],
    ]
  ),

  question(
    "i-b6",
    "intermediate",
    "B",
    "slice-range",
    "先頭から3件だけを新しい配列で返す",
    `function firstThree(items) {\n  const end = [[2]];\n  return items.[[splice]](0, end);\n}`,
    [
      ["3", "slice の終了位置は含まれないので3です。"],
      ["slice", "元配列を変えないため slice を使います。"],
    ]
  ),

  // ============================================================
  // INTERMEDIATE / C / ★3 : 中間の中では重め、バグ3個
  // ============================================================
  question(
    "i-c1",
    "intermediate",
    "C",
    "count-even",
    "配列に含まれる偶数の個数を返す",
    `function countEven(values) {\n  let count = [[99]];\n\n  for (let i = [[-1]]; i < values.length; i++) {\n    if (values[i] % [[3]] === 0) {\n      count++;\n    }\n  }\n\n  return count;\n}`,
    [
      ["0", "個数は0から数えます。"],
      ["0", "先頭要素も調べるので0から開始します。"],
      ["2", "偶数判定は2で割った余りを調べます。"],
    ]
  ),

  question(
    "i-c2",
    "intermediate",
    "C",
    "average",
    "空でない数値配列の平均値を返す",
    `function average(values) {\n  let total = 0;\n\n  for (let i = [[2]]; i < values.length; i++) {\n    total [[=]] values[i];\n  }\n\n  return total [[*]] values.length;\n}`,
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
    "object-profile",
    "user の name と age を使って Puku (38) を返す",
    `function profile(user) {\n  const name = user.[[title]];\n  const age = user.age [[+]] 1;\n  return [[age + " (" + name + ")"]];\n}\n\nprofile({ name: "Puku", age: 38 });`,
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
    "filter-map",
    "空文字を除き、残りを大文字にした配列を返す",
    `function clean(names) {\n  return names\n    .filter((name) => name [[===]] "")\n    .map((name) => name.[[toLowerCase]]())\n    .[[reverse]]();\n}`,
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
    "sum-range",
    "1から n までの整数を合計する",
    `function sumTo(n) {\n  let total = [[10]];\n\n  for (let i = 1; i [[<]] n; i++) {\n    total += [[n]];\n  }\n\n  return total;\n}`,
    [
      ["0", "合計の初期値は0です。"],
      ["<=", "n自身も含めるので <= です。"],
      ["i", "毎回現在の i を加算します。"],
    ]
  ),

  question(
    "i-c6",
    "intermediate",
    "C",
    "shopping-total",
    "price×count の小計に shipping を足して返す",
    `function total(price, count, shipping) {\n  const subtotal = price [[-]] count;\n  const amount = subtotal [[-]] shipping;\n  return [[shipping]];\n}`,
    [
      ["*", "小計は価格 × 個数です。"],
      ["+", "送料は小計へ足します。"],
      ["amount", "返すのは最終金額 amount です。"],
    ]
  ),

  question(
    "i-c7",
    "intermediate",
    "C",
    "search-result",
    "見つかった最初の active ユーザーの name を返す。いなければ null",
    `function activeName(users) {\n  const user = users.[[map]]((item) => item.active);\n  if ([[user]]) return null;\n  return user.[[id]];\n}`,
    [
      ["find", "最初の1人なら find を使います。"],
      ["!user", "見つからないときに null を返します。"],
      ["name", "返したいのは name です。"],
    ]
  ),

  question(
    "i-c8",
    "intermediate",
    "C",
    "dedupe-simple",
    "重複を除いた値を、元の登場順で配列にして返す",
    `function unique(values) {\n  const seen = new Set();\n  const result = [];\n\n  for (const value of values) {\n    if ([[!seen.has(value)]]) {\n      continue;\n    }\n    seen.[[delete]](value);\n    result.[[unshift]](value);\n  }\n\n  return result;\n}`,
    [
      ["seen.has(value)", "すでに見た値ならスキップします。"],
      ["add", "初登場の値は Set に追加します。"],
      ["push", "登場順を保つため末尾へ追加します。"],
    ]
  ),

  // ============================================================
  // ADVANCED / A / ★1 : 上級の入口、実戦あるある1個
  // ============================================================
  question(
    "a-a1",
    "advanced",
    "A",
    "numeric-sort",
    "数値配列を昇順に並べたコピーを返す。元配列は保持する",
    `function ascending(values) {\n  return [...values].[[sort()]];\n}\n\nconsole.log(ascending([2, 10, 1]));`,
    [["sort((a, b) => a - b)", "既定の sort は文字列順なので数値用の比較関数が必要です。"]]
  ),

  question(
    "a-a2",
    "advanced",
    "A",
    "nullish-default",
    "limit が null / undefined のときだけ10にする。0は有効",
    `function limitOf(options) {\n  return options.limit [[||]] 10;\n}\n\nconsole.log(limitOf({ limit: 0 }));`,
    [["??", "|| は0も既定値に置き換えるため ?? を使います。"]]
  ),

  question(
    "a-a3",
    "advanced",
    "A",
    "binary-search-boundary",
    "昇順配列から target の位置を二分探索する。なければ -1",
    `function search(values, target) {\n  let low = 0;\n  let high = values.length - 1;\n\n  while (low [[<]] high) {\n    const mid = Math.floor((low + high) / 2);\n\n    if (values[mid] === target) return mid;\n    if (values[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n\n  return -1;\n}`,
    [["<=", "low と high が一致した最後の1要素も調べます。"]]
  ),

  question(
    "a-a4",
    "advanced",
    "A",
    "nan-dedupe",
    "同じ値をまとめる。NaN 同士も1個にまとめる",
    `function unique(values) {\n  return [[values.filter((v, i) => values.indexOf(v) === i)]];\n}\n\nconsole.log(unique([NaN, NaN, 1, 1]));`,
    [["[...new Set(values)]", "indexOf は NaN を見つけられません。Set なら NaN も重複として扱えます。"]]
  ),

  question(
    "a-a5",
    "advanced",
    "A",
    "missing-await",
    "fetcher の完了を待って JSON を返す",
    `async function load(fetcher) {\n  const response = [[fetcher()]];\n  return response.json();\n}`,
    [["await fetcher()", "Promise の完了を待たないと response.json() を呼べません。"]]
  ),

  question(
    "a-a6",
    "advanced",
    "A",
    "sort-mutation",
    "数値を昇順にした配列を返す。入力配列は変更しない",
    `function sorted(values) {\n  return [[values.sort((a, b) => a - b)]];\n}`,
    [["[...values].sort((a, b) => a - b)", "sort は元配列を変更するため、先にコピーします。"]]
  ),

  // ============================================================
  // ADVANCED / B / ★2 : 実戦的な複合ミス、バグ2個
  // ============================================================
  question(
    "a-b1",
    "advanced",
    "B",
    "nested-immutability",
    "user の name と settings.theme だけを更新したコピーを返す。元は変更しない",
    `function update(user, name, theme) {\n  const next = [[user]];\n  next.name = name;\n\n  next.settings = [[user.settings]];\n  next.settings.theme = theme;\n\n  return next;\n}`,
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
    `function median(values) {\n  if (!values.length) return null;\n\n  const sorted = [...values].[[sort()]];\n  const mid = Math.floor(sorted.length / 2);\n\n  if (sorted.length % 2) return sorted[mid];\n\n  return (sorted[[[mid]]] + sorted[mid]) / 2;\n}`,
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
    `function pageOf(items, page, size) {\n  const start = [[page * size]];\n  const end = start + [[size - 1]];\n\n  return items.slice(start, end);\n}`,
    [
      ["(page - 1) * size", "1ページ目の開始添字は0です。"],
      ["size", "slice の終了位置は含まれないので start + size です。"],
    ]
  ),

  question(
    "a-b4",
    "advanced",
    "B",
    "strict-conversion",
    "入力を整数に変換する。無効値は null、0は有効",
    `function integerOf(input) {\n  if (typeof input !== "string" && typeof input !== "number") return null;\n  if (typeof input === "string" && input.trim() === "") return null;\n\n  const value = [[parseInt(input, 10)]];\n\n  if ([[!value]] || !Number.isInteger(value)) return null;\n\n  return value;\n}`,
    [
      ["Number(input)", "12px などを許可しないため全体を Number で変換します。"],
      ["!Number.isFinite(value)", "!value は有効な0も拒否するため有限数かどうかを確認します。"],
    ]
  ),

  question(
    "a-b5",
    "advanced",
    "B",
    "fetch-status",
    "fetcher の完了を待ち、HTTPエラーなら null を返す",
    `async function loadUser(fetcher) {\n  const response = [[fetcher("/user")]];\n  if ([[response.ok]]) return null;\n  return response.json();\n}`,
    [
      ['await fetcher("/user")', "fetcher の Promise 完了を待ちます。"],
      ["!response.ok", "HTTPエラーのときだけ null を返します。"],
    ]
  ),

  question(
    "a-b6",
    "advanced",
    "B",
    "promise-array",
    "全ユーザーの名前を非同期取得し、文字列配列で返す",
    `async function names(users, loadName) {\n  const tasks = users.map((user) => loadName([[user]]));\n  return [[tasks]];\n}`,
    [
      ["user.id", "loadName に渡すのは user.id です。"],
      ["await Promise.all(tasks)", "Promise 配列ではなく完了後の値配列を返します。"],
    ]
  ),

  // ============================================================
  // ADVANCED / C / ★3 : 最難関、訓練向けの複合ミス、バグ3個
  // ============================================================
  question(
    "a-c1",
    "advanced",
    "C",
    "deep-copy",
    "全ユーザーの done を true にしたコピー配列を返す。元データは保持する",
    `function complete(users) {\n  const result = [[users]];\n\n  for (let i = 0; i < result.length; i++) {\n    const next = [[result[i]]];\n    next.done = true;\n    result[i] = next;\n  }\n\n  return [[users]];\n}`,
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
    `function smallest(values, limit) {\n  const count = limit [[||]] 3;\n  const unique = [...new Set(values)];\n  const sorted = unique.[[sort()]];\n\n  return sorted.slice(0, [[count - 1]]);\n}`,
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
    `function uniqueById(items) {\n  const seen = new Map();\n  const result = [];\n\n  for (const item of items) {\n    if ([[!item.id]]) continue;\n    if (seen.has([[item]])) continue;\n\n    seen.set(item.id, true);\n    result.[[unshift]](item);\n  }\n\n  return result;\n}`,
    [
      ["item.id == null", "0を除外せず null / undefined だけを除外します。"],
      ["item.id", "Map に保存しているキーは id です。"],
      ["push", "入力順を保つため末尾へ追加します。"],
    ]
  ),

  question(
    "a-c4",
    "advanced",
    "C",
    "cache-expiry",
    "期限が now 以下のキャッシュを削除し、残った値を返す。値0も残す",
    `function readLive(cache, now) {\n  const result = [];\n\n  for (const [key, entry] of cache) {\n    if (entry.expires [[<]] now) {\n      cache.delete([[entry]]);\n    } else if ([[entry.value]]) {\n      result.push(entry.value);\n    }\n  }\n\n  return result;\n}`,
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
    "closed-range",
    "整数の閉区間 [start, end] の全整数を配列で返す。start > end は空配列",
    `function range(start, end) {\n  if (start [[>=]] end) return [];\n\n  const count = end - start [[-]] 1;\n\n  return Array.from(\n    { length: count },\n    (_, index) => [[index]]\n  );\n}`,
    [
      [">", "start === end なら1要素を返すため除外しません。"],
      ["+", "両端を含む個数は end - start + 1 です。"],
      ["start + index", "値は start から始めます。"],
    ]
  ),

  question(
    "a-c6",
    "advanced",
    "C",
    "async-pipeline",
    "ids のユーザーを全件取得し、active なユーザー名だけを返す",
    `async function activeNames(ids, fetchUser) {\n  const tasks = ids.map((id) => fetchUser([[id + 1]]));\n  const users = [[tasks]];\n  return [[users.filter((user) => user.active)]];\n}`,
    [
      ["id", "取得対象は元の id です。"],
      ["await Promise.all(tasks)", "全 Promise の完了を待ってユーザー配列にします。"],
      ["users.filter((user) => user.active).map((user) => user.name)", "active なユーザーを絞ったあと name だけを返します。"],
    ]
  ),

  question(
    "a-c7",
    "advanced",
    "C",
    "safe-settings",
    "settings がない場合も落ちずに theme を返す。未設定なら dark、空文字は有効",
    `function themeOf(user) {\n  const settings = [[user.settings]];\n  const theme = settings.theme [[||]] "dark";\n  return [[theme || "dark"]];\n}`,
    [
      ["user.settings ?? {}", "settings がない場合は空オブジェクトへフォールバックします。"],
      ["??", "空文字を有効にするため || ではなく ?? を使います。"],
      ["theme", "すでに既定値処理済みなのでそのまま theme を返します。"],
    ]
  ),

  question(
    "a-c8",
    "advanced",
    "C",
    "immutable-toggle",
    "指定idのtodoだけ done を反転した新しい配列を返す。元データは変更しない",
    `function toggle(todos, id) {\n  const result = [[todos]];\n  const index = result.findIndex((todo) => todo.id === id);\n  if (index < 0) return result;\n  result[index] = [[result[index]]];\n  result[index].done = !result[index].done;\n  return [[todos]];\n}`,
    [
      ["[...todos]", "配列をコピーして元配列の変更を避けます。"],
      ["{ ...result[index] }", "対象todoもコピーして参照共有を避けます。"],
      ["result", "更新した新しい配列 result を返します。"],
    ]
  ),
];
