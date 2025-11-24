// internal deps
import { getHotels } from '@/api/mocks/api';
import type { HotelsMap, Country, ErrorResponse } from '@/api/types.ts';

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
      if (error instanceof Error) {
        throw {
          error: true,
          code: 0,
          message: error.message,
        } as ErrorResponse;
      }
      throw error;
    }
  }
}

export default HotelsApi;
