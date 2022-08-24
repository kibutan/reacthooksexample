import React from "react";
import { LocalHistory, useLocalHistoryV6 } from "./useLocalHistoryV6";

export const PageContainer: React.FC = () => {
  const topPage = 1;
  const lastPage = 4;

  const [currentPage, history] = useLocalHistoryV6(topPage, lastPage);
  return <V6 currentPage={currentPage} history={history} />;
};

interface PageProps {
  currentPage: number;
  history: LocalHistory;
}

const V6: React.FC<PageProps> = ({ currentPage, history }: PageProps) => {
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
};
