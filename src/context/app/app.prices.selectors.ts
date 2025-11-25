// Internal deps
import type { AppState } from '@/context/app/app.types.ts';
import type { PriceOffer } from '@/api/types.ts';

export const selectPricesState = (state: AppState) => state.prices;

export const selectTours = (state: AppState) => {
  const list = state.prices.list;
  if (!list || !list.prices) {
    return [];
  }

  return list ? Object.values(list.prices) : [];
};

export const selectTourById = (state: AppState, tourId: PriceOffer['id']) => {
  const list = state.prices.list;

  if (!list || !list.prices) {
    return null;
  }

  return list.prices[tourId] ?? null;
};

export const selectIsToursLoaded = (state: AppState) => state.prices.isLoaded;
export const selectIsToursLoading = (state: AppState) => state.prices.isLoadingGetList;
export const selectIsToursError = (state: AppState) => state.prices.isErrorGetList;
export const selectToursErrorMessage = (state: AppState) => state.prices.errorMessage;

export const selectIsHotelsLoaded = (state: AppState) => state.hotels.isLoaded;
export const selectIsHotelsLoading = (state: AppState) => state.hotels.isLoadingGetList;
export const selectIsHotelsError = (state: AppState) => state.hotels.isErrorGetList;

export const selectHotels = (state: AppState) => {
  const list = state.hotels.list;
  if (!list) {
    return [];
  }
  return Object.values(list);
}

export const selectHotelById = (state: AppState, hotelId: PriceOffer['id']) => {
  const hotelsMap = state.hotels.list;
  if (!hotelsMap) {
    return null;
  };

  return hotelsMap[hotelId] ?? null;
};

export const selectSearchCountryId = (state: AppState) => state.countries.searchId;

