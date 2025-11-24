// External deps
import { useContext } from 'react';

// Internal deps
import HotelsApi from '@/api/HotelsApi.ts';
import type { Country } from '@/api/types.ts';
import { AppContext } from '@/context/app/AppContext.ts';
import { HOTELS_GET_LIST } from '@/context/app/app.constants.ts';

const useHotels = () => {
  const appCtx = useContext(AppContext);

  const getHotels = async (countryID: Country['id']) => {
    appCtx.dispatch({ type: HOTELS_GET_LIST.LOADING })
    const hotelsApi = new HotelsApi();

    try {
      const resp = await hotelsApi.getListByCountryId(countryID);
      appCtx.dispatch({ type: HOTELS_GET_LIST.SUCCESS, payload: resp });
    } catch (error) {
      appCtx.dispatch({ type: HOTELS_GET_LIST.ERROR, payload: error });
    }
  }

  return {
    getHotels,
  }
};

export default useHotels;
