// External deps
import type { Dispatch } from 'react';

// Internal deps
import type {
  GetSearchPricesResponse, HotelsMap, Country,
  Hotel, CountriesMap, HotelDetails, PriceOffer
} from '@/api/types.ts';

export interface AppAction {
  type: string;
  payload?: unknown;
}

export interface AppState {
  prices: {
    list: GetSearchPricesResponse | null,
    byId: Record<PriceOffer["id"], PriceOffer>,
    isLoaded: boolean,
    isLoadingGetList: boolean,
    isErrorGetList: boolean,
    errorMessage: string,
    isLoadedById: boolean,
    isLoadingById: boolean,
    isErrorById: boolean,
    errorByIdMessage: string,
  },
  hotels: {
    list: HotelsMap | null,
    detailsList: Record<Hotel["id"], HotelDetails>
    isLoaded: boolean,
    isLoadingGetList: boolean,
    isErrorGetList: boolean,
    errorMessage: string,
  },
  countries: {
    searchId: Country['id'],
    list: CountriesMap | null,
    isLoaded: boolean,
    isLoadingGetList: boolean,
    isErrorGetList: boolean,
    errorMessage: string,
  },
}

export interface AppContextType {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}
