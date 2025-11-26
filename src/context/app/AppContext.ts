// External deps
import { createContext } from 'react';

// Internal deps
import type { AppContextType } from '@/context/app/app.types.ts';

export const initialState = {
  prices: {
    list: null,
    byId: {},
    isLoaded: false,
    isLoadingGetList: false,
    isErrorGetList: false,
    errorMessage: '',
    isLoadedById: false,
    isLoadingById: false,
    isErrorById: false,
    errorByIdMessage: '',
  },
  hotels: {
    list: null,
    detailsList: {},
    isLoaded: false,
    isLoadingGetList: false,
    isErrorGetList: false,
    errorMessage: '',
  },
  countries: {
    searchId: '',
    list: null,
    isLoaded: false,
    isLoadingGetList: false,
    isErrorGetList: false,
    errorMessage: '',
  }
};

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => undefined
});
