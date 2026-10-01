// 問題の追加方法は DEBUGGER_README.md を参照。
// [[...]] は出題時に取り除かれ、bugs の文字範囲になる。画面に正解は表示しない。
function question(id, difficulty, group, objective, markedCode, fixes) {
  const bugs = [];
  let code = "";
  let cursor = 0;
  for (const match of markedCode.matchAll(/\[\[([\s\S]*?)\]\]/g)) {
    code += markedCode.slice(cursor, match.index);
    const start = code.length;
    code += match[1];
    const [replacement, explanation] = fixes[bugs.length];
    bugs.push({ id: `${id}-${bugs.length + 1}`, start, end: code.length, replacement, explanation });
    cursor = match.index + match[0].length;
  }
  code += markedCode.slice(cursor);
  if (bugs.length !== fixes.length) throw new Error(`Invalid fixes: ${id}`);
  return { id, difficulty, group, language: "JavaScript", objective, code, bugs,
    explanation: bugs.map(bug => bug.explanation).join(" ") };
}

export const DIFFICULTIES = [
  { id: "beginner", label: "初級", caption: "見つける", description: "括弧・スペル・記号の違いを観察しよう" },
  { id: "intermediate", label: "中級", caption: "読み解く", description: "条件・ループ・関数の動きを追おう" },
  { id: "advanced", label: "上級", caption: "見抜く", description: "境界値や参照に潜むロジックバグへ" },
];

export const questions = [
  question("b-a1", "beginner", "A", "message に入れたあいさつを表示する", `const message = "Hello!";
console.log([[mesage]]);`, [["message", "宣言した名前は message。mesage は s が1つ足りません。"]]),
  question("b-a2", "beginner", "A", "colors 配列の要素数 3 を表示する", `const colors = ["red", "blue", "green"];
console.log(colors.[[lenght]]);`, [["length", "要素数を取得するプロパティは length です。"]]),
  question("b-a3", "beginner", "A", "文字列を大文字の LAB にして表示する", `const name = "lab";
console.log(name.[[toUppercase]]());`, [["toUpperCase", "大文字にするメソッドは toUpperCase。C も大文字です。"]]),
  question("b-a4", "beginner", "A", "1 と 2 の合計を表示する（閉じ括弧にも注目）", `const total = (1 + 2[[}]];
console.log(total);`, [[")", "丸括弧 ( は ) で閉じます。"]]),

  question("b-b1", "beginner", "B", "score に 5 を足して表示する", `[[lett]] score = 10;
score += 5;
console.log([[socre]]);`, [["let", "変数宣言は let です。"], ["score", "宣言した変数は score です。"]]),
  question("b-b2", "beginner", "B", "配列に moon を追加し、要素数 2 を表示する", `const items = ["sun"];
items.[[psuh]]("moon");
console.log(items.[[lenght]]);`, [["push", "要素の追加は push です。"], ["length", "配列の要素数は length で取得します。"]]),
  question("b-b3", "beginner", "B", "double(4) の結果 8 を表示する", `[[functon]] double(value) {
  return value * 2;
}
console.log([[dobule]](4));`, [["function", "関数の宣言は function です。"], ["double", "関数名は double です。"]]),
  question("b-b4", "beginner", "B", "name を小文字にして、その文字数 4 を表示する", `const name = "PUKU";
const lower = name.[[toLowercase]]();
console.log(lower.[[lenght]]);`, [["toLowerCase", "小文字化は toLowerCase。C は大文字です。"], ["length", "文字数は length です。"]]),

  question("b-c1", "beginner", "C", "apple と melon を配列に入れ、要素数 2 を表示する", `const fruits = ["apple"[[)]];
fruits.[[psuh]]("melon");
const count = fruits.length;
console.log([[coutn]]);`, [["]", "配列の [ は ] で閉じます。"], ["push", "配列への追加は push です。"], ["count", "表示する変数名は count です。"]]),
  question("b-c2", "beginner", "C", "greet に Puku を渡し、Hello Puku を表示する", `[[functoin]] greet(name) {
  const message = "Hello " + name;
  [[retrun]] message;
}
console.log([[great]]("Puku"));`, [["function", "関数宣言は function です。"], ["return", "値を返すキーワードは return です。"], ["greet", "呼び出す関数は greet です。"]]),
  question("b-c3", "beginner", "C", "points を 1 から 3 に増やし、増加前と増加後を表示する", `[[lat]] points = 1;
console.log(points);
[[ponits]] += 2;
console.[[loog]](points);`, [["let", "変数宣言は let です。"], ["points", "増やす変数名は points です。"], ["log", "表示するメソッドは console.log です。"]]),
  question("b-c4", "beginner", "C", "メモを1つ追加し、文字数とメモの個数を表示する", `const notes = ["lab"];
notes.[[puhs]]("code");
const first = notes[0];
console.log(first.[[lenght]]);
console.log([[ntoes]].length);`, [["push", "追加は push です。"], ["length", "文字数は length です。"], ["notes", "配列の名前は notes です。"]]),
  question("b-c5", "beginner", "C", "makeLabel で DEBUG を小文字にして表示する", `[[funtion]] makeLabel(text) {
  const label = text.[[toLowercase]]();
  return label;
}
const result = makeLabel("DEBUG");
console.log([[reslut]]);`, [["function", "関数宣言は function です。"], ["toLowerCase", "小文字化のメソッド名は toLowerCase です。"], ["result", "結果を入れた変数は result です。"]]),

  question("i-a1", "intermediate", "A", "score が 60 以上なら合格。60 も合格に含む", `function passed(score) {
  return score [[>]] 60;
}
console.log(passed(60));`, [[">=", "境界の60点を含めるには >= を使います。"]]),
  question("i-a2", "intermediate", "A", "配列の全要素を足す（空配列なら 0）", `function sum(values) {
  let total = 0;
  for (let i = 0; i [[<=]] values.length; i++) {
    total += values[i];
  }
  return total;
}`, [["<", "length 番目は存在しません。i < length までにします。"]]),
  question("i-a3", "intermediate", "A", "square は入力値の2乗を返す", `function square(value) {
  const result = value * value;
  return [[value]];
}
console.log(square(3));`, [["result", "計算結果を保存した result を返します。"]]),
  question("i-a4", "intermediate", "A", "配列の最後の要素を返す。空なら undefined", `function last(values) {
  return values[ [[values.length]] ];
}
console.log(last([10, 20, 30]));`, [["values.length - 1", "添字は0から始まるため最後は length - 1 です。"]]),

  question("i-b1", "intermediate", "B", "0 以上の数だけを合計する（空配列なら 0）", `function sumPositive(values) {
  let total = [[1]];
  for (const value of values) {
    if (value [[<]] 0) {
      total += value;
    }
  }
  return total;
}`, [["0", "合計の初期値は0です。"], [">=", "0以上の値を合計するので >= 0 です。"]]),
  question("i-b2", "intermediate", "B", "items の各値を2倍にした配列を返す", `function doubled(items) {
  const result = [];
  for (let i = [[1]]; i < items.length; i++) {
    result.push(items[i] * 2);
  }
  return [[items]];
}`, [["0", "先頭要素から処理するので添字0から開始します。"], ["result", "変換結果をためた result を返します。"]]),
  question("i-b3", "intermediate", "B", "5 の倍数に fizz、それ以外は元の数を返す", `function label(value) {
  if (value [[/]] 5 === 0) {
    return "fizz";
  }
  return [[5]];
}`, [["%", "倍数かどうかは余り % が0か調べます。"], ["value", "条件に合わない場合は元の value を返します。"]]),
  question("i-b4", "intermediate", "B", "税込価格を返す。税率は 0.1 のような小数で受け取る", `function withTax(price, rate) {
  const tax = price [[+]] rate;
  const total = price + tax;
  return [[tax]];
}
console.log(withTax(100, 0.1));`, [["*", "税額は価格×税率です。"], ["total", "税額だけではなく価格と税額を足した total を返します。"]]),

  question("i-c1", "intermediate", "C", "配列に含まれる偶数の個数を返す（0 も偶数）", `function countEven(values) {
  let count = [[1]];
  for (let i = [[1]]; i < values.length; i++) {
    if (values[i] % 2 === [[1]]) {
      count++;
    }
  }
  return count;
}`, [["0", "個数は0から数えます。"], ["0", "先頭の要素も調べるため添字0から始めます。"], ["0", "偶数を2で割った余りは0です。"]]),
  question("i-c2", "intermediate", "C", "空でない配列の平均値を返す", `function average(values) {
  let total = 0;
  for (let i = [[1]]; i < values.length; i++) {
    total [[=]] values[i];
  }
  const result = total [[*]] values.length;
  return result;
}`, [["0", "先頭も合計に含めるため0から始めます。"], ["+=", "上書きせず += で合計します。"], ["/", "平均は合計÷個数です。"]]),
  question("i-c3", "intermediate", "C", "数値の配列から最小値を返す。空配列なら Infinity", `function minimum(values) {
  let best = [[0]];
  for (const value of values) {
    if (value [[>]] best) {
      best = value;
    }
  }
  return [[values]];
}`, [["Infinity", "正数だけの配列や空配列にも対応する初期値は Infinity です。"], ["<", "今の最小値より小さければ更新します。"], ["best", "最小値を保持している best を返します。"]]),
  question("i-c4", "intermediate", "C", "文字列の配列から空文字を除き、残りを大文字にして返す", `function clean(names) {
  const output = [];
  for (let i = 0; i [[<=]] names.length; i++) {
    const name = names[i];
    if (name [[===]] "") {
      output.push(name.[[toLowerCase]]());
    }
  }
  return output;
}`, [["<", "存在する要素だけを処理します。"], ["!==", "空文字以外を出力へ追加します。"], ["toUpperCase", "大文字への変換は toUpperCase です。"]]),
  question("i-c5", "intermediate", "C", "1 から n までの整数の合計を返す。n は正の整数", `function sumTo(n) {
  let total = [[1]];
  for (let i = 1; i [[<]] n; i++) {
    total += [[n]];
  }
  return total;
}`, [["0", "合計の初期値は0です。"], ["<=", "n 自身も含めるため <= です。"], ["i", "毎回 n ではなく現在の i を足します。"]]),

  question("a-a1", "advanced", "A", "数値配列を昇順に並べたコピーを返す。元配列は保持する", `function ascending(values) {
  return [...values].[[sort()]];
}
console.log(ascending([2, 10, 1]));`, [["sort((a, b) => a - b)", "既定の sort は文字列順。数値用の比較関数が必要です。"]]),
  question("a-a2", "advanced", "A", "limit が null / undefined のときだけ 10 にする。0 は有効", `function limitOf(options) {
  return options.limit [[||]] 10;
}
console.log(limitOf({ limit: 0 }));`, [["??", "|| は0も既定値に置き換えます。nullish合体演算子 ?? を使います。"]]),
  question("a-a3", "advanced", "A", "昇順の配列から target の位置を二分探索する。なければ -1", `function search(values, target) {
  let low = 0;
  let high = values.length - 1;
  while (low [[<]] high) {
    const mid = Math.floor((low + high) / 2);
    if (values[mid] === target) return mid;
    if (values[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`, [["<=", "low と high が一致した最後の1要素も調べる必要があります。"]]),
  question("a-a4", "advanced", "A", "同じ値をまとめる。NaN 同士も同じ値として1個にする", `function unique(values) {
  return [[values.filter((v, i) => values.indexOf(v) === i)]];
}
console.log(unique([NaN, NaN, 1, 1]));`, [["[...new Set(values)]", "indexOf は NaN を見つけられず両方消します。Set は NaN 同士も重複扱いにします。"]]),

  question("a-b1", "advanced", "B", "user の name と settings.theme だけを更新したコピーを返す。元は変更しない", `function update(user, name, theme) {
  const next = [[user]];
  next.name = name;
  next.settings = [[user.settings]];
  next.settings.theme = theme;
  return next;
}`, [["{ ...user }", "外側のオブジェクトをコピーしないと name が元にも反映されます。"], ["{ ...user.settings }", "ネストした settings もコピーしないと theme が元にも反映されます。"]]),
  question("a-b2", "advanced", "B", "数値配列の中央値を返す。空なら null。元配列は保持する", `function median(values) {
  if (!values.length) return null;
  const sorted = [...values].[[sort()]];
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2) return sorted[mid];
  return (sorted[ [[mid]] ] + sorted[mid]) / 2;
}`, [["sort((a, b) => a - b)", "数値としてソートする必要があります。"], ["mid - 1", "偶数個なら中央の2値（mid - 1 と mid）の平均です。"]]),
  question("a-b3", "advanced", "B", "items を1始まりのページ番号で切り出す。size は正の整数", `function pageOf(items, page, size) {
  const start = [[page * size]];
  const end = start + [[size - 1]];
  return items.slice(start, end);
}`, [["(page - 1) * size", "1ページ目の開始添字は0です。"], ["size", "slice の終了位置は含まれないため start + size にします。"]]),
  question("a-b4", "advanced", "B", "入力を整数に変換する。文字列は全体が数値であること。無効値は null、0 は有効", `function integerOf(input) {
  if (typeof input !== "string" && typeof input !== "number") return null;
  if (typeof input === "string" && input.trim() === "") return null;
  const value = [[parseInt(input, 10)]];
  if ([[!value]] || !Number.isInteger(value)) return null;
  return value;
}`, [["Number(input)", "parseInt は 12px なども12にします。全体を変換するには Number を使います。"], ["!Number.isFinite(value)", "!value は有効な0も拒否します。有限数かどうかで判定します。"]]),

  question("a-c1", "advanced", "C", "全ユーザーの done を true にしたコピー配列を返す。元の配列と各ユーザーは保持する", `function complete(users) {
  const result = [[users]];
  for (let i = 0; i < result.length; i++) {
    const next = [[result[i] ]];
    next.done = true;
    result[i] = next;
  }
  return [[users]];
}`, [["[...users]", "配列自体をコピーしないと要素の置換が元に反映されます。"], ["{ ...result[i] }", "ユーザーのオブジェクトもコピーしないと done が元に反映されます。"], ["result", "加工した result を返します。"]]),
  question("a-c2", "advanced", "C", "整数配列から重複を除き、数値昇順の上位 limit 個を返す。limit=0 は空、未指定は3個", `function smallest(values, limit) {
  const count = limit [[||]] 3;
  const unique = [...new Set(values)];
  const sorted = unique.[[sort()]];
  return sorted.slice(0, [[count - 1]]);
}`, [["??", "0を指定できるように ?? を使います。"], ["sort((a, b) => a - b)", "数値順の比較関数が必要です。"], ["count", "終了位置を含まない slice では count を指定すると count 個取得できます。"]]),
  question("a-c3", "advanced", "C", "オブジェクト配列を id ごとに最初の1件だけ残す。id=0 も有効、null / undefined は除外。Map のキー比較を使う", `function uniqueById(items) {
  const seen = new Map();
  const result = [];
  for (const item of items) {
    if ([[!item.id]]) continue;
    if (seen.has([[item]])) continue;
    seen.set(item.id, true);
    result.[[unshift]](item);
  }
  return result;
}`, [["item.id == null", "0を除外しないよう null / undefined だけを除外します。"], ["item.id", "保存しているキーはオブジェクトではなく id です。"], ["push", "入力順を保つには末尾へ push します。"]]),
  question("a-c4", "advanced", "C", "期限が now 以下のキャッシュを削除し、残った値を返す。時刻は数値。期限切れでない値 0 も残す", `function readLive(cache, now) {
  const result = [];
  for (const [key, entry] of cache) {
    if (entry.expires [[<]] now) {
      cache.delete([[entry]]);
    } else if ([[entry.value]]) {
      result.push(entry.value);
    }
  }
  return result;
}`, [["<=", "期限ちょうども期限切れです。"], ["key", "Map から削除するのは値ではなくキーです。"], ["true", "有効期限内なら値0を含めてすべて残します。条件を true にすれば除外されません。"]]),
  question("a-c5", "advanced", "C", "整数の閉区間 [start, end] 内の全整数を配列で返す。start > end は空配列", `function range(start, end) {
  if (start [[>=]] end) return [];
  const count = end - start [[-]] 1;
  return Array.from(
    { length: count },
    (_, index) => [[index]]
  );
}`, [[">", "start === end なら1個の要素を返すため除外しません。"], ["+", "両端を含む個数は end - start + 1 です。"], ["start + index", "添字0からではなく start から始まる値を返します。"]]),
];
