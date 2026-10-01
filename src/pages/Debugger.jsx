import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DIFFICULTIES, questions } from "../games/debugger/questions.js";
import { CLEAR_DELAY_MS, MISS_LOCK_MS, MISS_PENALTY_MS, STAGE_COUNT, codeLines, formatTime, resultFor, selectQuestions } from "../games/debugger/engine.js";
import { rankingProvider } from "../games/debugger/ranking.js";
import "./Debugger.css";

function Countdown({ count }) {
  return <div className="dbg-center dbg-countdown" role="status" aria-live="assertive"><span key={count}>{count}</span></div>;
}

function Clock({ startedAt, penaltyMs, finalMs }) {
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    if (finalMs !== null) return;
    let frame;
    function tick() {
      setElapsed(performance.now() - startedAt);
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [startedAt, finalMs]);
  return <time className="dbg-time" data-testid="timer">{formatTime(finalMs ?? elapsed + penaltyMs)}</time>;
}

function CodePanel({ question, found, disabled, onPick }) {
  const lines = useMemo(() => codeLines(question), [question]);
  return (
    <div className="dbg-code-scroll" tabIndex={0} role="region" aria-label="問題コード・横スクロール可能">
      <div className="dbg-code" aria-label="JavaScriptコード">
        {lines.map((line, index) => <div className="dbg-code-line" key={index}>
          <span className="dbg-line-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <code>{line.map(token => token.selectable ?
            <button key={token.start} type="button" className={`dbg-token${found.includes(token.bugId) ? " dbg-fixed" : ""}`}
              disabled={disabled || found.includes(token.bugId)}
              aria-label={`${index + 1}行目 ${token.text}${found.includes(token.bugId) ? " 発見済み" : ""}`}
              data-offset={token.start} onClick={() => onPick(token.bugId)}>{token.text}</button> :
            <span key={token.start}>{token.text}</span>)}</code>
        </div>)}
      </div>
    </div>
  );
}

function Result({ result, difficulty, onReplay, onLevels }) {
  const [ranking, setRanking] = useState({ status: "loading", rows: [] });
  useEffect(() => {
    let active = true;
    rankingProvider.submit(result).then(rows => {
      if (active) setRanking({ status: "ready", rows });
    }).catch(() => {
      if (active) setRanking({ status: "error", rows: [] });
    });
    return () => { active = false; };
  }, [result]);
  return <div className="dbg-result">
    <header className="dbg-result-heading">
      <p className="dbg-eyebrow">10 / 10 STAGES CLEARED · {difficulty.label}</p>
      <h1 tabIndex={-1} className="dbg-focus-heading">DEBUG COMPLETE</h1>
    </header>
    <dl className="dbg-result-stats">
      <div><dt>CLEAR TIME</dt><dd data-testid="clear-time">{formatTime(result.clearMs)}</dd></div>
      <div><dt>MISS</dt><dd data-testid="miss-count">{result.misses}</dd></div>
      <div><dt>PENALTY</dt><dd data-testid="penalty">+{(result.penaltyMs / 1000).toFixed(2)} <small>sec</small></dd></div>
      <div className="dbg-final"><dt>FINAL TIME</dt><dd data-testid="final-time">{formatTime(result.finalMs)}</dd></div>
    </dl>
    <div className="dbg-actions">
      <button type="button" className="dbg-button dbg-primary" onClick={onReplay}>もう一度遊ぶ</button>
      <button type="button" className="dbg-button" onClick={onLevels}>レベル選択へ戻る</button>
      <Link className="dbg-button" to="/game">ゲーム一覧へ戻る</Link>
    </div>
    <section className="dbg-ranking" aria-label={`${difficulty.label}ランキング`}>
      <div className="dbg-ranking-heading"><h2>{difficulty.label} RANKING</h2><span>FINAL TIME / TOP 10</span></div>
      <p>{rankingProvider.scope}。オンラインランキングは未接続です。</p>
      {ranking.status === "loading" && <p role="status">記録を集計中…</p>}
      {ranking.status === "error" && <p role="status">ランキングに記録できませんでした。今回の結果は上に表示しています。</p>}
      {ranking.status === "ready" && <ol className="dbg-ranking-list">{ranking.rows.map((row, i) =>
        <li key={row.id} className={row.id === result.id ? "dbg-current-record" : ""}>
          <span className="dbg-rank">{String(i + 1).padStart(2, "0")}</span>
          <span>{row.id === result.id ? "今回の記録" : `記録 ${row.sequence}`}</span>
          <time>{formatTime(row.finalMs)}</time>
        </li>)}</ol>}
    </section>
  </div>;
}

export default function Debugger() {
  const [count, setCount] = useState(3);
  const [phase, setPhase] = useState("title");
  const [difficultyId, setDifficultyId] = useState("beginner");
  const [round, setRound] = useState(null);
  const [flash, setFlash] = useState(null);
  const runRef = useRef(null);
  const timers = useRef(new Set());
  const root = useRef(null);
  const difficulty = DIFFICULTIES.find(level => level.id === difficultyId);

  useEffect(() => {
    const pending = timers.current;
    return () => { for (const timer of pending) window.clearTimeout(timer); pending.clear(); };
  }, []);
  useEffect(() => {
    root.current?.querySelector(".dbg-focus-heading")?.focus({ preventScroll: true });
    if (["title", "levels", "result"].includes(phase)) window.scrollTo(0, 0);
  }, [phase]);

  function later(callback, delay) {
    const timer = window.setTimeout(() => { timers.current.delete(timer); callback(); }, delay);
    timers.current.add(timer);
  }
  function showFlash(text, kind, duration) {
    const notice = { text, kind };
    setFlash(notice);
    later(() => setFlash(current => current === notice ? null : current), duration);
  }
  function begin(level) {
    for (const timer of timers.current) window.clearTimeout(timer);
    timers.current.clear();
    const run = { id: crypto.randomUUID(), difficulty: level, stages: selectQuestions(questions, level),
      index: 0, found: [], misses: 0, startedAt: null, lockedUntil: 0, clearing: false, result: null };
    runRef.current = run;
    setRound({ ...run });
    setDifficultyId(level);
    setFlash(null);
    setCount(3);
    setPhase("countdown");
  }
  useEffect(() => {
    if (phase !== "countdown") return;
    let step = 3;
    const interval = window.setInterval(() => {
      step--;
      if (step > 0) { setCount(step); return; }
      window.clearInterval(interval);
      const run = runRef.current;
      if (!run || run.startedAt !== null) return;
      run.startedAt = performance.now();
      setRound({ ...run });
      setFlash({ text: "START", kind: "start" });
      setPhase("playing");
      const timer = window.setTimeout(() => {
        timers.current.delete(timer);
        setFlash(current => current?.kind === "start" ? null : current);
      }, 550);
      timers.current.add(timer);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [phase]);

  function pick(bugId) {
    const run = runRef.current;
    const now = performance.now();
    if (!run || run.startedAt === null || run.result || run.clearing || now < run.lockedUntil) return;
    if (bugId && run.found.includes(bugId)) return;
    if (!bugId) {
      run.misses++;
      run.lockedUntil = now + MISS_LOCK_MS;
      setRound({ ...run });
      showFlash("MISS · +3.00 sec", "miss", MISS_LOCK_MS);
      return;
    }
    run.found = [...run.found, bugId];
    const complete = run.found.length === run.stages[run.index].bugs.length;
    if (complete) {
      run.clearing = true;
      if (run.index === STAGE_COUNT - 1) {
        run.result = { id: run.id, difficulty: run.difficulty, ...resultFor(run.startedAt, now, run.misses) };
      }
      showFlash("STAGE CLEAR", "clear", CLEAR_DELAY_MS);
      later(() => {
        if (runRef.current !== run) return;
        if (run.result) { setPhase("result"); return; }
        run.index++;
        run.found = [];
        run.clearing = false;
        setRound({ ...run });
      }, CLEAR_DELAY_MS);
    } else showFlash("BUG FIXED", "fixed", 550);
    setRound({ ...run });
  }

  const question = round?.stages[round.index];
  return <main className="dbg-page" ref={root}>
    <div className="dbg-shell">
      <header className="dbg-topbar"><Link to="/game" className="dbg-lab-link">Puku Lab <span>/ PLAY LAB</span></Link><span className="dbg-window-label">debugger.js</span></header>
      <section className="dbg-terminal" aria-label="DEBUGGER デバッガー">
        <div className="dbg-terminal-bar"><span>EXPERIMENT 001</span><span>CODE FINDING</span></div>
        {phase === "title" && <div className="dbg-center dbg-title">
          <h1 className="dbg-focus-heading" tabIndex={-1}>DEBUGGER<span className="dbg-cursor" aria-hidden="true">_</span></h1>
          <button type="button" className="dbg-button dbg-primary dbg-start" onClick={() => setPhase("levels")}>START</button>
        </div>}
        {phase === "levels" && <div className="dbg-levels">
          <p className="dbg-eyebrow">DEBUGGER / デバッガー</p>
          <h1 className="dbg-focus-heading" tabIndex={-1}>SELECT LEVEL</h1>
          <p className="dbg-instruction">コードの間違っている部分を選ぼう<br />全10ステージ · 指摘ミスは +3秒</p>
          <div className="dbg-level-grid">{DIFFICULTIES.map((level, i) => <button type="button" key={level.id} className="dbg-level" onClick={() => begin(level.id)}>
            <span className="dbg-level-number">LEVEL 0{i + 1}</span><strong>{level.label}</strong><span className="dbg-level-caption">{level.caption}</span><span className="dbg-level-description">{level.description}</span>
          </button>)}</div>
          <p className="dbg-small">JavaScript / 前半1か所 → 中盤2か所 → 後半3か所のバグ</p>
        </div>}
        {phase === "countdown" && <Countdown count={count} />}
        {phase === "playing" && <div className="dbg-play">
          <div className="dbg-hud">
            <div><span className="dbg-label">LEVEL</span><strong>{difficulty.label}</strong></div>
            <div><span className="dbg-label">STAGE</span><strong data-testid="stage">{round.index + 1} <small>/ {STAGE_COUNT}</small></strong></div>
            <div className="dbg-clock"><span className="dbg-label">TIME <small>ペナルティ込</small></span><Clock startedAt={round.startedAt} penaltyMs={round.misses * MISS_PENALTY_MS} finalMs={round.result?.finalMs ?? null} /></div>
            <div><span className="dbg-label">BUGS</span><strong className="dbg-bug-count" data-testid="bugs">{round.found.length} <small>/ {question.bugs.length}</small></strong></div>
          </div>
          <div className="dbg-progress" aria-hidden="true">{Array.from({ length: STAGE_COUNT }, (_, i) => <span key={i} className={i < round.index ? "done" : i === round.index ? "active" : ""} />)}</div>
          <div className="dbg-objective"><span>EXPECTED OUTPUT</span><p>{question.objective}</p></div>
          <div className="dbg-editor" aria-busy={round.clearing}>
            <div className="dbg-editor-bar"><span>{question.language} / STAGE {String(round.index + 1).padStart(2, "0")}</span><span>{question.id}</span></div>
            <CodePanel key={question.id} question={question} found={round.found} disabled={round.clearing || flash?.kind === "miss"} onPick={pick} />
          </div>
          <div className="dbg-status-line"><span>間違っているコード部分を選択</span><span>MISS {round.misses} / +{(round.misses * 3).toFixed(2)} sec</span></div>
          <div className={`dbg-feedback ${flash ? `dbg-feedback-${flash.kind}` : ""}`} role="status" aria-live="polite">{flash?.text || "\u00a0"}</div>
        </div>}
        {phase === "result" && <Result result={round.result} difficulty={difficulty} onReplay={() => begin(difficultyId)} onLevels={() => setPhase("levels")} />}
      </section>
      <footer className="dbg-bottom"><span>DEBUGGER / デバッガー</span><Link to="/game">ゲーム一覧へ戻る</Link></footer>
    </div>
  </main>;
}
