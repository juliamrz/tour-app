// External deps
import { useReducer } from 'react';
import type { PropsWithChildren } from 'react';

// Internal deps
import type { GetSearchPricesResponse } from '@/api/types.ts';

// Local deps
import {
  PRICES_START_SEARCH,
  PRICES_GET_SEARCH,
} from '@/context/app/app.constants.ts';
import { AppContext, initialState } from './AppContext.ts';
import type { AppState, AppAction} from './app.types.ts';

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case PRICES_START_SEARCH.SUCCESS:
      return {
        ...state,
      }
    case PRICES_START_SEARCH.LOADING:
      return {
        ...state,
      }
    case PRICES_START_SEARCH.ERROR:
      return {
        ...state,
      }
    case PRICES_GET_SEARCH.SUCCESS:
      return {
        ...state,
        prices: {
          ...state.prices,
          list: action.payload as GetSearchPricesResponse ?? null,
          isLoadingGetList: false,
          isErrorGetList: false,
        }
      }
    case PRICES_GET_SEARCH.LOADING:
      return {
        ...state,
        prices: {
          ...state.prices,
          isLoadingGetList: true,
        }
      }
    case PRICES_GET_SEARCH.ERROR:
      return {
        ...state,
        prices: {
          ...state.prices,
          isErrorGetList: true,
        }
      }
    default:
      return state;
  }
}

const init = (initialState: AppState) => {
  return initialState;
}

const AppProvider = (props: PropsWithChildren<object>) => {
  const {
    children,
  } = props;

  const [ state, dispatch ] = useReducer(reducer, initialState, init);

  const app = {
    state,
    dispatch,
  }

  return (
    <AppContext.Provider value={app}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
