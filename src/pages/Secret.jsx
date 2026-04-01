import { Link } from "react-router-dom";

export default function Secret() {
  return (
    <main className="siteFrame innerPageFrame">
      <section className="chalkboard pageBoard secretBoard">
        <header className="pageHead">
          <p className="smallTag">SECRET CHAMBER</p>
          <h2>隠し部屋へようこそ</h2>
          <p>ここでは公開前の実験プロトタイプをテスト中。</p>
        </header>

        <div className="secretStuff">
          <div className="pulseOrb" />
          <p>
            この隠し機能のヒント：
            <br />
            原子（ATOM）を5回タップすると解放されるよ。
          </p>
        </div>

        <div className="pageActions">
          <Link className="navButton ghost" to="/">
            ホームへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}