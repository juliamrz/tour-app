// internal deps
import { searchGeo } from '@/api/mocks/api';
import type { GeoResponse, ErrorResponse } from '@/api/types.ts';

class GeoApi {
  async search(query: string = ""): Promise<GeoResponse> {
    try {
      const res = await searchGeo(query);
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

export default GeoApi;
