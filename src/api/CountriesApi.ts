// internal deps
import { getCountries } from '@/api/mocks/api';
import type { CountriesMap, ErrorResponse } from '@/api/types.ts';
import { handleError } from '@/api/utils/handleApiError.ts';

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
      handleError(error)
    }
  }
}

export default CountriesApi;
