import "./Game.css";
import { Link } from "react-router-dom";

export default function Game() {
  return (
    <main className="gamePage">
      <div className="gameBoard">
        <p className="gameEyebrow">Puku Lab / Play Lab</p>
        <h1 className="gameTitle">COMING SOON</h1>

        <p className="gameLead">
          ここでは、Puku Lab の実験的なWEBゲームを公開予定です。
        </p>

        <p className="gameText">
          るの：ゲーム実験室はまだ準備中だよ。
          <br />
          もう少ししたら、この黒板から遊べるようになる予定！
        </p>

        <div className="gameNote">
          <span className="gameNoteLabel">研究メモ</span>
          <ul>
            <li>ミニゲームを今後追加予定</li>
            <li>世界観に合う遊び場として育成予定</li>
            <li>公開までは他のページから研究所を見学できます</li>
          </ul>
        </div>

        <div className="gameActions">
          <Link to="/" className="gameButton">
            ホームへ戻る
          </Link>
          <Link to="/apps" className="gameButton ghost">
            Appsを見る
          </Link>
        </div>
      </div>
    </main>
  );
}