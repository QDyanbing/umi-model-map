import { useState } from 'react';

interface IStore {
  data: { code: string }[];
  dataMap: Map<string, boolean>;
}

export default function usePageStore(): IStore {
  const [state, setState] = useState<{ code: string }[]>([]);

  setTimeout(() => {
    setState([{ code: 'AAAAA' }]);
  }, 3000);

  return {
    data: state,
    dataMap:
      state.reduce((prev, cur) => {
        prev.set(cur.code, true);
        return prev;
      }, new Map<string, boolean>()) || new Map<string, boolean>(),
  };
}
