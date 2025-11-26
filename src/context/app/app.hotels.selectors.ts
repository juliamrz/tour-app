// Internal deps
import type { AppState } from '@/context/app/app.types.ts';
import type { HotelDetails } from '@/api/types.ts';

export const selectHotelsDetailsList = (state: AppState): Record<HotelDetails["id"], HotelDetails> => {
  return state.hotels.detailsList ?? {};
};

export const selectHotelDetailsById = (state: AppState, hotelId: HotelDetails["id"]): HotelDetails | null => {
  const detailsList = state.hotels.detailsList;
  if (!detailsList) {
    return null;
  };
  return detailsList[hotelId] ?? null;
};

export const selectIsHotelDetailsLoading = (state: AppState): boolean => state.hotels.isLoadingGetList;
export const selectIsHotelDetailsLoaded = (state: AppState): boolean => state.hotels.isLoaded;
export const selectIsHotelDetailsError = (state: AppState): boolean => state.hotels.isErrorGetList;
export const selectHotelDetailsErrorMessage = (state: AppState): string => state.hotels.errorMessage;
