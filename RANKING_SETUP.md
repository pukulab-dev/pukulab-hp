# DEBUGGER オンラインランキング接続メモ

現時点ではDBへ接続していません。
`VITE_DEBUGGER_RANKING_ENDPOINT` が未設定なら、従来どおり「このタブ内ランキング」で動きます。

将来オンライン化するときは、Vercel API / Supabase Edge Function などのサーバー側エンドポイントを用意して、

VITE_DEBUGGER_RANKING_ENDPOINT=/api/debugger-ranking

のように設定します。

## POST

フロントから送るJSON:

{
  "game": "debugger",
  "version": "2026-10-02-v1",
  "id": "run UUID",
  "difficulty": "beginner | intermediate | advanced",
  "clearMs": 36210,
  "misses": 2,
  "penaltyMs": 6000,
  "finalMs": 42210
}

想定レスポンス:

{
  "rows": [
    {
      "id": "...",
      "nickname": "PLAYER",
      "finalMs": 42210
    }
  ],
  "currentRank": 18,
  "total": 247
}

## GET

例:
?game=debugger&version=2026-10-02-v1&difficulty=beginner

想定レスポンス:

{
  "rows": [...],
  "currentRank": null,
  "total": 247
}

## サーバー側で必ず確認すること

- difficulty が許可値か
- misses が0以上の整数か
- penaltyMs = misses * 3000 か
- finalMs = clearMs + penaltyMs か
- 異常に短いスコアの拒否
- 同一送信元からの大量投稿対策
- nickname追加時の文字数・禁止文字
- game/versionごとのランキング分離

ブラウザからSupabaseテーブルへ直接INSERTする形にはせず、検証できるサーバー側処理を1枚挟む想定です。
