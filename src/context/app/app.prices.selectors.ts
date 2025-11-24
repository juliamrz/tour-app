import type { AppState } from '@/context/app/app.types.ts';

export const selectPricesState = (state: AppState) => state.prices;

export const selectTours = (state: AppState) => {
  const list = state.prices.list;
  if (!list || !list.prices) {
    return [];
  }

  return list ? Object.values(list.prices) : [];
};

export const selectIsToursLoaded = (state: AppState) => state.prices.isLoaded;
export const selectIsToursLoading = (state: AppState) => state.prices.isLoadingGetList;
export const selectIsToursError = (state: AppState) => state.prices.isErrorGetList;
export const selectToursErrorMessage = (state: AppState) => state.prices.errorMessage;
