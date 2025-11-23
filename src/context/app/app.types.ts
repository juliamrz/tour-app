// External deps
import type { Dispatch } from 'react';

// Internal deps
import type { GetSearchPricesResponse } from '@/api/types.ts';

export interface AppAction {
  type: string;
  payload?: unknown;
}

export interface AppState {
  prices: {
    list: GetSearchPricesResponse | null,
    isLoadingGetList: boolean,
    isErrorGetList: boolean,
  }
}

export interface AppContextType {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}
