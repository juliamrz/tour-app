// internal deps
import { getCountries } from '@/api/mocks/api';
import type { CountriesMap, ErrorResponse } from '@/api/types.ts';

class CountriesApi {
  async getList(): Promise<CountriesMap> {
    try {
      const res = await getCountries();
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

export default CountriesApi;
