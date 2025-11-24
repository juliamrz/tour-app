// External deps
import type { Dispatch } from 'react';

// Internal deps
import type { GetSearchPricesResponse, HotelsMap, Country } from '@/api/types.ts';

export interface AppAction {
  type: string;
  payload?: unknown;
}

export interface AppState {
  prices: {
    list: GetSearchPricesResponse | null,
    isLoaded: boolean,
    isLoadingGetList: boolean,
    isErrorGetList: boolean,
    errorMessage: string,
  },
  hotels: {
    list: HotelsMap | null,
    isLoaded: boolean,
    isLoadingGetList: boolean,
    isErrorGetList: boolean,
    errorMessage: string,
  },
  countries: {
    searchId: Country['id'],
  },
}

export interface AppContextType {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}
