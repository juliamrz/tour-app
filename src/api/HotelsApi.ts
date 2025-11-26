// internal deps
import { getHotels, getHotel } from '@/api/mocks/api';
import type { HotelsMap, Country, Hotel, ErrorResponse } from '@/api/types.ts';
import { handleError } from '@/api/utils/handleApiError.ts';

class HotelsApi {
  async getListByCountryId(countryID: Country['id']): Promise<HotelsMap> {
    try {
      const res = await getHotels(countryID);
      if (!res.ok) {
        throw {
          error: true,
          code: res.status,
          message: res.statusText || "HTTP error",
        } as ErrorResponse;
      }

      return await res.json();
    } catch (error: unknown) {
      handleError(error);
    }
  }

  async getHotel(hotelId: Hotel['id']): Promise<Hotel> {
    try {
      const res = await getHotel(hotelId);
      if (!res.ok) {
        const err = await res.json();
        throw err as ErrorResponse;
      }
      return await res.json();
    } catch (error: unknown) {
      handleError(error);
    }
  }
}

export default HotelsApi;
