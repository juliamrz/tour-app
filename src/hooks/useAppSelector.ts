// External deps
import { useContext } from 'react';

// Internal deps
import { AppContext } from '@/context/app/AppContext.ts';
import type { AppState } from '@/context/app/app.types.ts';

const useAppSelector = <T,>(selector: (state: AppState) => T): T => {
  const ctx = useContext(AppContext);
  return selector(ctx.state);
};

export default useAppSelector;
