import { Link } from "react-router-dom";

export default function Experiments() {
  return (
    <div className="pageShell">
      <div className="pagePaper">
        <header className="pageHeader">
          <h2>Experiments</h2>
          <Link className="backLink" to="/">
            ← Home
          </Link>
        </header>

        <div className="pageBody">
          <p className="pageLead">ここに「実験」を追加していく。</p>

          <ul className="list">
            <li>ボタンでフラスコ状態変化（useState）</li>
            <li>小さいWebツール置き場</li>
            <li>アプリのUI試作</li>
          </ul>

          <div className="noteBox">
            <p>次は「実験スタート」ボタンで液体を泡立てるのが気持ちいい。</p>
          </div>
        </div>
      </div>
    </div>
  );
}