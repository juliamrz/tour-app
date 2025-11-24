import type { AppState } from '@/context/app/app.types.ts';

export const selectCountriesState = (state: AppState) => state.countries;

export const selectCountries = (state: AppState) => {
  const list = state.countries.list;
  if (!list) {
    return [];
  }
  return Object.values(list);
};

export const selectCountryById = (state: AppState, countryId: string | number) => {
  const list = state.countries.list;
  if (!list) {
    return null;
  }
  return list[countryId] ?? null;
};

export const selectIsCountriesLoaded = (state: AppState) => state.countries.isLoaded;

export const selectIsCountriesLoading = (state: AppState) => state.countries.isLoadingGetList;

export const selectIsCountriesError = (state: AppState) => state.countries.isErrorGetList;

export const selectCountriesErrorMessage = (state: AppState) => state.countries.errorMessage;

export const selectSearchCountryId = (state: AppState) => state.countries.searchId;
