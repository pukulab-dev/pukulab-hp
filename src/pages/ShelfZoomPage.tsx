import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import shelfBg from "../assets/bookshelf/shelf_zoom/shelf_empty_5x10.png";
import uiPlate from "../assets/bookshelf/shelf_zoom/ui_plate_wood_wide.png";
import BookSpine from "../components/BookSpine";
import {
  getSafeSpineThemeId,
  getSpineBackground,
  getStableSpineColorIndex,
} from "../models/spineThemes";
import { useApp } from "../state/AppStateContext";
import { sanitizeLanguage, t, type AppLanguage } from "../i18n";
import "./ShelfZoomPage.css";

type SortMode = "new" | "title";
type BookType = "manga" | "light_novel";
type ShelfTabKey = "favorite" | "all" | "manga" | "light_novel";

const TOTAL_ROWS = 10;
const BASE_COLS = 10;
const SHELF_PAGE_SIZE_STORAGE_KEY = "makilog_shelf_page_size_v1";

type ShelfPageSize = 5 | 10;

const DEFAULT_SHELF_TAB_ORDER: ShelfTabKey[] = [
  "favorite",
  "all",
  "manga",
  "light_novel",
];

function getShelfTabLabel(key: ShelfTabKey, language: AppLanguage): string {
  if (key === "favorite") return t(language, "favorites");
  if (key === "all") return t(language, "all");
  if (key === "manga") return t(language, "manga");
  return t(language, "lightNovel");
}

function sanitizeShelfPageSize(value: unknown): ShelfPageSize {
  return Number(value) === 5 ? 5 : 10;
}

function loadShelfPageSize(): ShelfPageSize {
  try {
    return sanitizeShelfPageSize(localStorage.getItem(SHELF_PAGE_SIZE_STORAGE_KEY));
  } catch {
    return 10;
  }
}

function getTotalPages(pageSize: ShelfPageSize) {
  return Math.ceil((TOTAL_ROWS * BASE_COLS) / pageSize);
}

function getUnlockedPages(unlockedRows: number, pageSize: ShelfPageSize) {
  return Math.max(1, Math.ceil((unlockedRows * BASE_COLS) / pageSize));
}

function clampPage(next: number, pageSize: ShelfPageSize) {
  return Math.max(1, Math.min(getTotalPages(pageSize), Math.floor(next)));
}

function getSafeWorks(app: any): any[] {
  if (Array.isArray(app?.works)) return app.works;
  if (Array.isArray(app?.state?.works)) return app.state.works;
  return [];
}

function getSafeVolumes(app: any): any[] {
  if (Array.isArray(app?.volumes)) return app.volumes;
  if (Array.isArray(app?.state?.volumes)) return app.state.volumes;
  return [];
}

function getSafeVolumeStates(app: any): any[] {
  if (Array.isArray(app?.volumeStates)) return app.volumeStates;
  if (Array.isArray(app?.state?.volumeStates)) return app.state.volumeStates;
  return [];
}

function workHasUnreadOwnedVolume(workId: string, volumes: any[], volumeStates: any[]) {
  const owned = new Set<number>();
  for (const item of volumes) {
    if (item?.workId !== workId || item?.status !== "confirmed") continue;
    if (typeof item?.volume !== "number" || !Number.isSafeInteger(item.volume) || item.volume <= 0) continue;
    owned.add(item.volume);
  }

  if (owned.size === 0) return false;

  const read = new Set<number>();
  for (const item of volumeStates) {
    if (item?.workId !== workId || item?.isRead !== true) continue;
    if (typeof item?.volume !== "number" || !Number.isSafeInteger(item.volume) || item.volume <= 0) continue;
    read.add(item.volume);
  }

  return Array.from(owned).some((volume) => !read.has(volume));
}

function getUnlockedRows(app: any): number {
  const raw = app?.limits?.maxShelfRows;
  const rows = typeof raw === "number" && Number.isFinite(raw) ? raw : 4;
  return Math.max(1, Math.min(TOTAL_ROWS, rows));
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function sanitizeBookType(value: unknown): BookType {
  return value === "light_novel" ? "light_novel" : "manga";
}

function isShelfTabKey(value: unknown): value is ShelfTabKey {
  return (
    value === "favorite" ||
    value === "all" ||
    value === "manga" ||
    value === "light_novel"
  );
}

function sanitizeShelfTabOrder(value: unknown): ShelfTabKey[] {
  const raw = Array.isArray(value) ? value : [];
  const cleaned = raw.filter(isShelfTabKey);
  const unique = Array.from(new Set(cleaned));

  for (const key of DEFAULT_SHELF_TAB_ORDER) {
    if (!unique.includes(key)) unique.push(key);
  }

  return unique;
}

function getDisplayTitle(work: any) {
  const title = (work?.title ?? "").trim();
  const fullTitle = (work?.fullTitle ?? "").trim();
  return title || fullTitle || "";
}

function getSearchText(work: any) {
  const title = (work?.title ?? "").trim();
  const fullTitle = (work?.fullTitle ?? "").trim();
  const author = (work?.author ?? "").trim();
  const publisher = (work?.publisher ?? "").trim();
  return `${title} ${fullTitle} ${author} ${publisher}`.trim();
}

function getSortTitle(work: any) {
  return getDisplayTitle(work);
}

function isCollectedComplete(work: any) {
  return work?.isCollectedComplete === true;
}

function compareCollectedCompleteLast(a: any, b: any) {
  const ac = isCollectedComplete(a) ? 1 : 0;
  const bc = isCollectedComplete(b) ? 1 : 0;
  return ac - bc;
}

function filterByShelfTab(works: any[], activeTab: ShelfTabKey) {
  if (activeTab === "favorite") {
    return works.filter((w) => w?.isFavorite === true);
  }

  if (activeTab === "manga") {
    return works.filter((w) => sanitizeBookType(w?.bookType) === "manga");
  }

  if (activeTab === "light_novel") {
    return works.filter((w) => sanitizeBookType(w?.bookType) === "light_novel");
  }

  return works;
}

function getTabCount(works: any[], key: ShelfTabKey) {
  return filterByShelfTab(works, key).length;
}

function getShelfEmptyText(activeTab: ShelfTabKey, language: AppLanguage) {
  if (activeTab === "favorite") return t(language, "shelfEmptyFavorite");
  if (activeTab === "manga") return t(language, "shelfEmptyManga");
  if (activeTab === "light_novel") return t(language, "shelfEmptyLightNovel");
  return t(language, "shelfEmptyAll");
}

function formatHitText(label: string, count: number, language: AppLanguage) {
  if (language === "en") {
    return `${label}: ${count} ${count === 1 ? "work" : t(language, "shelfWorksUnit")}`;
  }

  return `${label}：${count} ${t(language, "shelfWorksUnit")}`;
}

function formatLockedHint(unlockedRows: number, isShelfExpanded: boolean, language: AppLanguage) {
  if (language === "en") {
    return `${t(language, "shelfLockedHintPrefix")} ${unlockedRows} ${t(
      language,
      "shelfLockedHintMiddle"
    )} ${TOTAL_ROWS} (${isShelfExpanded ? t(language, "shelfUnlocked") : t(language, "shelfNotUnlocked")})`;
  }

  return `${t(language, "shelfLockedHintPrefix")} ${unlockedRows} ${t(language, "shelfLockedHintMiddle")}（${
    isShelfExpanded ? t(language, "shelfUnlocked") : t(language, "shelfNotUnlocked")
  }）`;
}

export function ShelfZoomPage() {
  const nav = useNavigate();
  const params = useParams();
  const app = useApp() as any;
  const language = sanitizeLanguage(app?.language);

  const works = getSafeWorks(app);
  const volumes = getSafeVolumes(app);
  const volumeStates = getSafeVolumeStates(app);
  const unlockedRows = getUnlockedRows(app);

  const shelfTabOrder = useMemo(() => sanitizeShelfTabOrder(app?.shelfTabOrder), [app?.shelfTabOrder]);

  const shelfId = useMemo(() => {
    const n = Number(params.shelfId ?? "1");
    return Number.isFinite(n) ? Math.max(1, Math.floor(n)) : 1;
  }, [params.shelfId]);

  const [pageSize, setPageSize] = useState<ShelfPageSize>(() => loadShelfPageSize());
  const [row, setRow] = useState(() => clampPage(shelfId, pageSize));
  const [sortMode, setSortMode] = useState<SortMode>("new");
  const [query, setQuery] = useState("");
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [activeTab, setActiveTab] = useState<ShelfTabKey>(() => shelfTabOrder[0] ?? "favorite");
  const [orderEditorOpen, setOrderEditorOpen] = useState(false);

  useEffect(() => {
    setRow((current) => clampPage(shelfId || current, pageSize));
  }, [shelfId]);

  useEffect(() => {
    setRow((current) => clampPage(current, pageSize));

    try {
      localStorage.setItem(SHELF_PAGE_SIZE_STORAGE_KEY, String(pageSize));
    } catch {
      // UI setting only. Failure does not affect collection data.
    }
  }, [pageSize]);

  useEffect(() => {
    if (!shelfTabOrder.includes(activeTab)) {
      setActiveTab(shelfTabOrder[0] ?? "favorite");
    }
  }, [activeTab, shelfTabOrder]);

  useEffect(() => {
    setRow(1);
  }, [activeTab, query, sortMode, unreadOnly]);

  const totalPages = getTotalPages(pageSize);
  const unlockedPages = getUnlockedPages(unlockedRows, pageSize);
  const isLocked = row > unlockedPages;
  const isShelfExpanded = unlockedRows >= TOTAL_ROWS;

  // 本棚背景
  const BG_ZOOM = 140;
  const BG_POS_X = 45;
  const BG_POS_Y = 16;

  // 上部プレート背景は画像本来の縦横比を維持して表示する

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    if (Math.abs(e.deltaY) < 2) return;
    setRow((r) => clampPage(r + (e.deltaY > 0 ? 1 : -1), pageSize));
  };

  const swipeRef = useRef<{
    active: boolean;
    pointerId: number | null;
    startX: number;
    startY: number;
    decided: boolean;
    moved: boolean;
  }>({
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    decided: false,
    moved: false,
  });

  const blockClickUntilRef = useRef<number>(0);

  const SWIPE_THRESHOLD_PX = 34;
  const SWIPE_DOMINANCE_RATIO = 1.15;

  const shouldBlockClick = () => Date.now() < blockClickUntilRef.current;

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (e.button !== 0) return;

    swipeRef.current.active = true;
    swipeRef.current.pointerId = e.pointerId;
    swipeRef.current.startX = e.clientX;
    swipeRef.current.startY = e.clientY;
    swipeRef.current.decided = false;
    swipeRef.current.moved = false;

    try {
      (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    } catch {
      // noop
    }
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const st = swipeRef.current;
    if (!st.active) return;
    if (st.pointerId !== e.pointerId) return;

    const dx = e.clientX - st.startX;
    const dy = e.clientY - st.startY;

    if (!st.decided) {
      const adx = Math.abs(dx);
      const ady = Math.abs(dy);

      if (adx + ady < 6) return;

      st.decided = true;
      st.moved = true;

      // 縦スワイプじゃなければやめる（横スワイプや端スワイプを邪魔しない）
      if (!(ady >= adx * SWIPE_DOMINANCE_RATIO)) {
        st.active = false;
        st.pointerId = null;
        return;
      }
    }

    // 段切り替えが成立した瞬間だけ preventDefault
    if (Math.abs(dy) >= SWIPE_THRESHOLD_PX) {
      e.preventDefault();
      setRow((r) => clampPage(r + (dy < 0 ? 1 : -1), pageSize));
      st.active = false;
      st.pointerId = null;
      blockClickUntilRef.current = Date.now() + 220;
    }
  };

  const endPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const st = swipeRef.current;
    if (st.pointerId !== e.pointerId) return;

    st.active = false;
    st.pointerId = null;
    st.decided = false;
    st.moved = false;
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => endPointer(e);
  const onPointerCancel: React.PointerEventHandler<HTMLDivElement> = (e) => endPointer(e);

  const tabFilteredWorks = useMemo(() => {
    return filterByShelfTab(works, activeTab);
  }, [works, activeTab]);

  const unreadFilteredWorks = useMemo(() => {
    if (!unreadOnly) return tabFilteredWorks;
    return tabFilteredWorks.filter((work) =>
      workHasUnreadOwnedVolume(work.id, volumes, volumeStates)
    );
  }, [tabFilteredWorks, unreadOnly, volumes, volumeStates]);

  const filteredWorks = useMemo(() => {
    const sorted = [...unreadFilteredWorks];

    if (sortMode === "new") {
      sorted.sort((a, b) => {
        const completeOrder = compareCollectedCompleteLast(a, b);
        if (completeOrder !== 0) return completeOrder;
        return (b?.createdAt ?? 0) - (a?.createdAt ?? 0);
      });
    } else {
      sorted.sort((a, b) => {
        const completeOrder = compareCollectedCompleteLast(a, b);
        if (completeOrder !== 0) return completeOrder;
        return getSortTitle(a).localeCompare(getSortTitle(b), language);
      });
    }

    const q = query.trim();
    if (!q) return sorted;

    return sorted.filter((w) => getSearchText(w).includes(q));
  }, [unreadFilteredWorks, sortMode, query, language]);

  const pageWorks = useMemo(() => {
    if (isLocked) {
      return Array.from({ length: pageSize }, () => null) as (any | null)[];
    }

    const start = (row - 1) * pageSize;
    const page = filteredWorks.slice(start, start + pageSize) as (any | null)[];

    while (page.length < pageSize) page.push(null);
    return page;
  }, [filteredWorks, row, isLocked, pageSize]);

  const hitCount = filteredWorks.length;
  const activeTabLabel = getShelfTabLabel(activeTab, language);

  const moveShelfTab = (key: ShelfTabKey, direction: -1 | 1) => {
    if (typeof app?.moveShelfTab === "function") {
      app.moveShelfTab(key, direction);
      return;
    }

    if (typeof app?.setShelfTabOrder !== "function") return;

    const current = sanitizeShelfTabOrder(app?.shelfTabOrder);
    const from = current.indexOf(key);
    const to = from + direction;
    if (from < 0 || to < 0 || to >= current.length) return;

    const next = [...current];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    app.setShelfTabOrder(next);
  };

  const resetShelfTabs = () => {
    if (typeof app?.resetShelfTabOrder === "function") {
      app.resetShelfTabOrder();
      return;
    }

    if (typeof app?.setShelfTabOrder === "function") {
      app.setShelfTabOrder(DEFAULT_SHELF_TAB_ORDER);
    }
  };

  const changePageSize = (nextSize: ShelfPageSize) => {
    if (nextSize === pageSize) return;

    const firstVisibleIndex = Math.max(0, (row - 1) * pageSize);
    const nextRow = Math.floor(firstVisibleIndex / nextSize) + 1;

    setPageSize(nextSize);
    setRow(clampPage(nextRow, nextSize));
  };

  const SortControls = (
    <div className="shelfZoomSortWrap">
      <button
        type="button"
        className={cx("shelfZoomSortBtn", sortMode === "new" && "isActive")}
        onClick={() => setSortMode("new")}
        disabled={isLocked}
      >
        {t(language, "shelfSortNewest")}
      </button>
      <button
        type="button"
        className={cx("shelfZoomSortBtn", sortMode === "title" && "isActive")}
        onClick={() => setSortMode("title")}
        disabled={isLocked}
      >
        {t(language, "shelfSortTitle")}
      </button>

      <button
        type="button"
        className={cx("shelfZoomSortBtn", unreadOnly && "isActive")}
        onClick={() => setUnreadOnly((prev) => !prev)}
        aria-pressed={unreadOnly}
        disabled={isLocked}
      >
        {language === "en" ? "Unread" : "未読あり"}
      </button>

      <div className="shelfZoomPageSizeGroup" aria-label={language === "en" ? "Works per page" : "1ページの表示冊数"}>
        <span className="shelfZoomPageSizeLabel">
          {language === "en" ? "Per page" : "表示"}
        </span>
        <button
          type="button"
          className={cx("shelfZoomPageSizeBtn", pageSize === 10 && "isActive")}
          onClick={() => changePageSize(10)}
        >
          {language === "en" ? "10" : "10冊"}
        </button>
        <button
          type="button"
          className={cx("shelfZoomPageSizeBtn", pageSize === 5 && "isActive")}
          onClick={() => changePageSize(5)}
        >
          {language === "en" ? "5" : "5冊"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="shelfZoomPage">
      <div className="shelfZoomFrameCard">
        <div className="shelfZoomInner">
          <div
            className="shelfZoomTopBlock"
            style={{
              backgroundImage: `url(${uiPlate})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="shelfZoomTopBlockInner">
              <div className="shelfZoomHeaderBtns">
                <button
                  type="button"
                  className="shelfZoomHeaderBtn"
                  onClick={() => {
                    localStorage.setItem("makilog_return_context_v1", "after_shelf");
                    nav("/");
                  }}
                >
                  {t(language, "shelfGoRoom")}
                </button>

                <button type="button" className="shelfZoomHeaderBtn" onClick={() => nav("/add")}>
                  {t(language, "shelfGoAdd")}
                </button>
              </div>

              <div
                style={{
                  display: "grid",
                  gap: 8,
                  marginTop: 8,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                    alignItems: "stretch",
                    gap: 5,
                    overflowX: "visible",
                    padding: "1px 1px 3px",
                  }}
                  aria-label={t(language, "shelfTabsAria")}
                >
                  {shelfTabOrder.map((key) => {
                    const active = activeTab === key;
                    const count = getTabCount(works, key);

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveTab(key)}
                        aria-pressed={active}
                        style={{
                          minWidth: 0,
                          width: "100%",
                          display: "grid",
                          gridTemplateRows: "auto auto",
                          justifyItems: "center",
                          gap: 1,
                          borderRadius: 999,
                          border: active
                            ? "2px solid rgba(88, 48, 12, 0.92)"
                            : "1px solid rgba(88, 52, 20, 0.26)",
                          background: active
                            ? "linear-gradient(180deg, #ffe58f 0%, #e4a93e 100%)"
                            : "linear-gradient(180deg, rgba(255,250,236,0.98), rgba(236,222,198,0.94))",
                          color: active ? "#2f1a08" : "rgba(62,36,16,0.92)",
                          boxShadow: active
                            ? "0 4px 0 rgba(92,48,12,0.55), 0 10px 20px rgba(42,22,8,0.24), inset 0 1px 0 rgba(255,255,255,0.72)"
                            : "0 3px 9px rgba(48,28,12,0.15), inset 0 1px 0 rgba(255,255,255,0.70)",
                          padding: active ? "5px 2px 6px" : "5px 2px",
                          fontSize: 10,
                          fontWeight: active ? 1000 : 950,
                          lineHeight: 1,
                          whiteSpace: "nowrap",
                          cursor: "pointer",
                          transform: active ? "translateY(-1px)" : "translateY(0)",
                        }}
                      >
                        {active ? "✓ " : ""}{getShelfTabLabel(key, language)}
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 14,
                            marginLeft: 0,
                            padding: "1px 3px",
                            borderRadius: 999,
                            background: active
                              ? "rgba(55,30,10,0.18)"
                              : "rgba(88,52,20,0.10)",
                            color: active ? "#2f1a08" : "rgba(62,36,16,0.78)",
                            fontSize: 9,
                            fontWeight: 1000,
                          }}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() => setOrderEditorOpen((prev) => !prev)}
                    style={{
                      gridColumn: "4 / 5",
                      width: "100%",
                      minWidth: 0,
                      borderRadius: 999,
                      border: orderEditorOpen
                        ? "2px solid rgba(255, 229, 150, 0.92)"
                        : "1px solid rgba(255, 248, 232, 0.70)",
                      background: orderEditorOpen
                        ? "linear-gradient(180deg, #2f4e68 0%, #193449 100%)"
                        : "linear-gradient(180deg, #4a3320 0%, #2d1c10 100%)",
                      color: "rgba(255,250,236,0.98)",
                      boxShadow: orderEditorOpen
                        ? "0 4px 0 rgba(18,35,48,0.62), 0 8px 18px rgba(0,0,0,0.24)"
                        : "0 4px 0 rgba(34,19,8,0.48), 0 8px 14px rgba(0,0,0,0.18)",
                      padding: orderEditorOpen ? "6px 10px 7px" : "7px 10px",
                      fontSize: 12,
                      fontWeight: 1000,
                      lineHeight: 1,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t(language, "shelfOrder")}
                  </button>
                </div>

                {orderEditorOpen && (
                  <div
                    style={{
                      borderRadius: 15,
                      border: "1px solid rgba(255, 235, 200, 0.18)",
                      background: "linear-gradient(180deg, rgba(70,42,20,0.66), rgba(35,22,12,0.62))",
                      padding: 9,
                      display: "grid",
                      gap: 7,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 8,
                        color: "rgba(255,250,238,0.96)",
                        fontSize: 11,
                        fontWeight: 900,
                      }}
                    >
                      <span>{t(language, "shelfTabOrderTitle")}</span>
                      <button
                        type="button"
                        onClick={resetShelfTabs}
                        style={{
                          borderRadius: 999,
                          border: "1px solid rgba(255, 248, 232, 0.44)",
                          background: "rgba(255, 250, 238, 0.18)",
                          color: "rgba(255,250,238,0.98)",
                          padding: "5px 8px",
                          fontSize: 11,
                          fontWeight: 900,
                          cursor: "pointer",
                        }}
                      >
                        {t(language, "shelfReset")}
                      </button>
                    </div>

                    {shelfTabOrder.map((key, index) => (
                      <div
                        key={key}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto auto",
                          alignItems: "center",
                          gap: 7,
                          color: "rgba(255,250,238,0.98)",
                          fontSize: 12,
                          fontWeight: 900,
                        }}
                      >
                        <span>{getShelfTabLabel(key, language)}</span>
                        <button
                          type="button"
                          onClick={() => moveShelfTab(key, -1)}
                          disabled={index === 0}
                          style={{
                            borderRadius: 10,
                            border: "1px solid rgba(255, 235, 200, 0.20)",
                            background: "rgba(255, 244, 224, 0.10)",
                            color: "rgba(255,250,238,0.98)",
                            padding: "5px 9px",
                            fontWeight: 950,
                            opacity: index === 0 ? 0.35 : 1,
                            cursor: index === 0 ? "default" : "pointer",
                          }}
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          onClick={() => moveShelfTab(key, 1)}
                          disabled={index === shelfTabOrder.length - 1}
                          style={{
                            borderRadius: 10,
                            border: "1px solid rgba(255, 235, 200, 0.20)",
                            background: "rgba(255, 244, 224, 0.10)",
                            color: "rgba(255,250,238,0.98)",
                            padding: "5px 9px",
                            fontWeight: 950,
                            opacity: index === shelfTabOrder.length - 1 ? 0.35 : 1,
                            cursor: index === shelfTabOrder.length - 1 ? "default" : "pointer",
                          }}
                        >
                          ↓
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="shelfZoomControlsRow">
                <div className={cx("shelfZoomSectionSearch", isLocked && "isLocked")}>
                  <div className="shelfZoomSearchRow">
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={t(language, "shelfSearchPlaceholder")}
                      className="shelfZoomSearchInput"
                      disabled={isLocked}
                    />

                    <button
                      type="button"
                      className="shelfZoomClearBtn"
                      onClick={() => setQuery("")}
                      aria-label={t(language, "shelfClearSearch")}
                      title={t(language, "shelfClearTitle")}
                      disabled={isLocked}
                    >
                      ×
                    </button>
                  </div>

                  <div className="shelfZoomHitText">
                    {formatHitText(activeTabLabel, hitCount, language)}
                  </div>

                  {isLocked && (
                    <div className="shelfZoomSortHint">
                      {formatLockedHint(unlockedRows, isShelfExpanded, language)}
                    </div>
                  )}

                  <div className="shelfZoomSortInlineMobile">{SortControls}</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="shelfZoomShelfPanel"
            style={{
              backgroundImage: `url(${shelfBg})`,
              backgroundSize: `${BG_ZOOM}%`,
              backgroundPosition: `${BG_POS_X}% ${BG_POS_Y}%`,
            }}
            onWheel={onWheel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
          >
            <div className="shelfZoomSlotArea">
              {isLocked && (
                <div className="shelfZoomLockRibbon" aria-hidden="true">
                  {t(language, "shelfLockedRibbonBefore")}{unlockedRows}{t(language, "shelfLockedRibbonAfter")}
                </div>
              )}

              {!isLocked && filteredWorks.length === 0 && (
                <div
                  className="shelfZoomLockRibbon"
                  aria-hidden="true"
                  style={{
                    background: "rgba(18, 28, 20, 0.76)",
                    borderColor: "rgba(255,255,255,0.16)",
                  }}
                >
                  {getShelfEmptyText(activeTab, language)}
                </div>
              )}

              <div className={cx("shelfZoomSlotGrid", pageSize === 5 && "isFive")}>
                {Array.from({ length: pageSize }, (_, i) => {
                  const w = pageWorks[i];
                  const displayTitle = getDisplayTitle(w);
                  const isEmpty = !w || displayTitle.length === 0;

                  const themeId = getSafeSpineThemeId(w?.spineThemeId);
                  const stableColorIndex = getStableSpineColorIndex(w, i);
                  const spineBg = getSpineBackground(themeId, stableColorIndex);

                  return (
                    <BookSpine
                      key={w?.id ?? `empty-${activeTab}-${row}-${i}`}
                      title={displayTitle}
                      titleAttr={displayTitle}
                      themeId={themeId}
                      colorIndex={stableColorIndex}
                      empty={isEmpty}
                      locked={isLocked}
                      disabled={isLocked}
                      onClick={() => {
                        if (shouldBlockClick()) return;
                        if (isLocked) return;
                        if (isEmpty || !w) return;

                        nav(`/book/${encodeURIComponent(w.id)}`, {
                          state: {
                            title: displayTitle,
                            spineColor: spineBg,
                            shelfId,
                            row,
                            index: stableColorIndex,
                            shelfTab: activeTab,
                            shelfPageSize: pageSize,
                            orderedWorkIds: filteredWorks
                              .map((item) => (typeof item?.id === "string" ? item.id : ""))
                              .filter(Boolean),
                            orderIndex: filteredWorks.findIndex((item) => item?.id === w.id),
                          },
                        });
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="shelfZoomMobileRowBar" aria-label={t(language, "shelfRowAria")}>
              <div className="shelfZoomRowNowPillMobile">
                {row}/{totalPages}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShelfZoomPage;
