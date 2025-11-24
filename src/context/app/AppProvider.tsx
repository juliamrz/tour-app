// External deps
import { useReducer } from 'react';
import type { PropsWithChildren } from 'react';

// Internal deps
import type { GetSearchPricesResponse, HotelsMap, Country } from '@/api/types.ts';

// Local deps
import {
  PRICES_GET_SEARCH, HOTELS_GET_LIST, COUNTRIES,
} from '@/context/app/app.constants.ts';
import { AppContext, initialState } from './AppContext.ts';
import type { AppState, AppAction} from './app.types.ts';

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case PRICES_GET_SEARCH.SUCCESS:
      return {
        ...state,
        prices: {
          list: action.payload as GetSearchPricesResponse ?? null,
          isLoaded: true,
          isLoadingGetList: false,
          isErrorGetList: false,
          errorMessage: '',
        }
      }
    case PRICES_GET_SEARCH.LOADING:
      return {
        ...state,
        prices: {
          list: null,
          isLoaded: false,
          isLoadingGetList: true,
          isErrorGetList: false,
          errorMessage: '',
        }
      }
    case PRICES_GET_SEARCH.ERROR:
      return {
        ...state,
        prices: {
          list: null,
          isLoaded: false,
          isLoadingGetList: false,
          isErrorGetList: true,
          errorMessage: String(action.payload),
        }
      }
    case HOTELS_GET_LIST.SUCCESS: {
      const newHotels = action.payload as HotelsMap;
      return {
        ...state,
        hotels: {
          list: {
            ...state.hotels.list,
            ...newHotels,
          },
          isLoaded: true,
          isLoadingGetList: false,
          isErrorGetList: false,
          errorMessage: '',
        }
    }}
    case HOTELS_GET_LIST.LOADING:
      return {
        ...state,
        hotels: {
          list: null,
          isLoaded: false,
          isLoadingGetList: true,
          isErrorGetList: false,
          errorMessage: '',
        }
      }
    case HOTELS_GET_LIST.ERROR:
      return {
        ...state,
        hotels: {
          list: null,
          isLoaded: false,
          isLoadingGetList: false,
          isErrorGetList: true,
          errorMessage: String(action.payload),
        }
      }
    case COUNTRIES.SET_SEARCH_ID:
      return {
        ...state,
        countries: {
          ...state.countries,
          searchId: action.payload as Country['id'],
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
