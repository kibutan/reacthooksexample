import { useStackV6 } from "./useStackV6";

export interface LocalHistory {
  Top: () => void;
  Next: () => void;
  Back: () => void;
  Last: () => void;
  Reset: () => void;
}

export const useLocalHistoryV6 = (
  topPage: number,
  lastPage: number
): [number, LocalHistory] => {
  const initHistory: number[] = [topPage];
  const [currentPage, stack] = useStackV6<number>(initHistory);
  const Top = (): void => {
    if (currentPage === topPage) {
      return;
    }
    stack.Push(topPage);
  };

  const Next = (): void => {
    const nextPage = currentPage + 1;
    if (lastPage < nextPage) {
      return;
    }
    stack.Push(nextPage);
  };

  const Back = (): void => {
    if (stack.Length() <= 1) {
      return;
    }
    stack.Pop();
  };

  const Last = (): void => {
    if (currentPage === lastPage) {
      return;
    }
    stack.Push(lastPage);
  };

  const Reset = (): void => {
    stack.Reset();
  };
  return [currentPage, { Top, Next, Back, Last, Reset }];
};
