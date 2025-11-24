// External deps
import { createContext } from 'react';

// Internal deps
import type { AppContextType } from '@/context/app/app.types.ts';

export const initialState = {
  prices: {
    list: null,
    isLoaded: false,
    isLoadingGetList: false,
    isErrorGetList: false,
    errorMessage: '',
  },
  hotels: {
    list: null,
    isLoaded: false,
    isLoadingGetList: false,
    isErrorGetList: false,
    errorMessage: '',
  },
  countries: {
    searchId: '',
  }
};

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => undefined
});
