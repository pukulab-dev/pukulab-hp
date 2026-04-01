import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pageShell">
      <div className="pagePaper">
        <header className="pageHeader">
          <h2>About</h2>
          <Link className="backLink" to="/">
            ← Home
          </Link>
        </header>

        <div className="pageBody">
          <p className="pageLead">
            Puku Labは「作りながら進化する」実験室コンセプトのWebプロジェクト。
          </p>

          <div className="noteBox">
            <p>
              完成を急がず、UIとアイデアを試しながら育てる。<br />
              “実験中” がテーマ。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}