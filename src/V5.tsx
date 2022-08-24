// V5.tsx is same to V3.tsx

import React from "react";
import { useLocalHistoryV3 } from "./useLocalHistoryV3";

function V4() {
  const topPage = 1;
  const lastPage = 4;
  const [currentPage, history] = useLocalHistoryV3(topPage, lastPage);

  return (
    <div>
      <div>現在のページ：{currentPage}</div>
      <button onClick={history.Top}>トップ</button>
      <button onClick={history.Next}>次へ</button>
      <button onClick={history.Back}>戻る</button>
      <button onClick={history.Last}>ラスト</button>
      <button onClick={history.Reset}>リセット</button>
    </div>
  );
}

export default V4;
