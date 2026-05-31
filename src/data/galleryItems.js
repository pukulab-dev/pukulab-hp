export const galleryCategories = {
  illustrations: {
    id: "illustrations",
    path: "/gallery/illustrations",
    label: "ILLUSTRATIONS",
    title: "イラスト展示室",
    lead:
      "水彩・アニメ調・キャラクター絵など、Puku Labの世界観から生まれたイラストを展示していく場所です。",
    note: "水彩・アニメ調・読書少女・キャラクター系",
    folder: "/gallery/illustrations/",
  },

  "photo-style": {
    id: "photo-style",
    path: "/gallery/photo-style",
    label: "PHOTO STYLE",
    title: "写真風展示室",
    lead:
      "本を読む時間、静かな部屋、窓辺の光。実在しそうな空気感を意識した写真風ビジュアルを展示していく場所です。",
    note: "写真風・読書時間・リアル寄り・空気感重視",
    folder: "/gallery/photo-style/",
  },

  others: {
    id: "others",
    path: "/gallery/others",
    label: "OTHERS",
    title: "その他の記録",
    lead:
      "実験画像、ロゴ案、UI風画像など、分類しきれないPuku Labのビジュアル記録を残していく場所です。",
    note: "実験画像・ロゴ案・UI風・その他",
    folder: "/gallery/others/",
  },
};

export const galleryItems = [
  {
    id: "photo-reading-001",
    category: "photo-style",
    title: "静かな読書時間 01",
    description:
      "本を読むひとときの静けさをテーマにした、Puku Labの写真風ビジュアル実験です。",
    image: "/gallery/photo-style/photo-001.png",
    alt: "室内で本を読む人物の写真風ビジュアル",
  },
  {
    id: "photo-reading-002",
    category: "photo-style",
    title: "静かな読書時間 02",
    description:
      "古い部屋、やわらかな光、読書に沈む空気感を意識した一枚です。",
    image: "/gallery/photo-style/photo-002.png",
    alt: "落ち着いた部屋で本を読む人物の写真風ビジュアル",
  },
  {
    id: "photo-reading-003",
    category: "photo-style",
    title: "静かな読書時間 03",
    description:
      "夕暮れのような光と読書の時間をテーマにした、リアル寄りのビジュアル記録です。",
    image: "/gallery/photo-style/photo-003.png",
    alt: "窓辺の光の中で本を読む人物の写真風ビジュアル",
  },
];