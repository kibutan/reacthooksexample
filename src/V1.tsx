import React, { useState } from "react";

export default function V1() {
  const topPage = 1;
  const lastPage = 4;
  const initHistory: number[] = [topPage];
  const [history, setHistory] = useState<number[]>(initHistory);
  const currentPage = history[history.length - 1];

  return (
    <div>
      <div>現在のページ： {currentPage}</div>
      <button
        onClick={() => {
          if (currentPage === topPage) {
            return;
          }
          const nextHistory = [...history, topPage];
          setHistory(nextHistory);
        }}
      >
        トップ
      </button>
      <button
        onClick={() => {
          const nextPage = currentPage + 1;
          if (lastPage < nextPage) {
            return;
          } else {
            const nextHistory = [...history, nextPage];
            setHistory(nextHistory);
          }
        }}
      >
        次へ
      </button>
      <button
        onClick={() => {
          if (history.length <= 1) {
            return;
          }
          const nextHistory = [...history.slice(0, history.length - 1)];
          setHistory(nextHistory);
        }}
      >
        戻る
      </button>
      <button
        onClick={() => {
          if (currentPage === lastPage) {
            return;
          } else {
            const nextHistory = [...history, lastPage];
            setHistory(nextHistory);
          }
        }}
      >
        ラスト
      </button>
      <button
        onClick={() => {
          setHistory(initHistory);
        }}
      >
        履歴を消去
      </button>
    </div>
  );
}
