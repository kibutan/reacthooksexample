import React from "react";
import { useLocalHistoryV2 } from "./useLocalHistoryV2";

function V2() {
  const topPage = 1;
  const lastPage = 4;
  const [currentPage, Top, Next, Back, Last, Reset] = useLocalHistoryV2(
    topPage,
    lastPage
  );
  return (
    <div>
      <div>現在のページ： {currentPage}</div>
      <button onClick={Top}>トップ</button>
      <button onClick={Next}>次へ</button>
      <button onClick={Back}>戻る</button>
      <button onClick={Last}>ラスト</button>
      <button onClick={Reset}>リセット</button>
    </div>
  );
}

export default V2;
