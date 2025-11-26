// External deps
import { useContext } from 'react';

// Internal deps
import HotelsApi from '@/api/HotelsApi.ts';
import type { Country, Hotel } from '@/api/types.ts';
import { AppContext } from '@/context/app/AppContext.ts';
import { HOTELS_GET_LIST, HOTELS_GET_DETAILS_LIST } from '@/context/app/app.constants.ts';

const useHotels = () => {
  const appCtx = useContext(AppContext);
  const hotelsApi = new HotelsApi();

  const getHotels = async (countryID: Country['id']) => {
    appCtx.dispatch({ type: HOTELS_GET_LIST.LOADING })

    try {
      const resp = await hotelsApi.getListByCountryId(countryID);
      appCtx.dispatch({ type: HOTELS_GET_LIST.SUCCESS, payload: resp });
    } catch (error) {
      appCtx.dispatch({ type: HOTELS_GET_LIST.ERROR, payload: error });
    }
  }

  const getHotelDetails = async (hotelID: Hotel['id']) => {
    appCtx.dispatch({ type: HOTELS_GET_DETAILS_LIST.LOADING });

    try {
      const resp = await hotelsApi.getHotel(hotelID);
      appCtx.dispatch({ type: HOTELS_GET_DETAILS_LIST.SUCCESS, payload: resp });
    } catch (error) {
      appCtx.dispatch({ type: HOTELS_GET_DETAILS_LIST.ERROR, payload: error });
    }
  };

  return {
    getHotels,
    getHotelDetails,
  }
};

export default useHotels;
