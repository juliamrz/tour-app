// Internal deps
import { startSearchPrices, getSearchPrices } from '@/api/mocks/api';
import type { StartSearchResponse, GetSearchPricesResponse, ErrorResponse } from '@/api/types.ts';
import { delay } from '@/utils/delay.ts';
import { handleError } from '@/api/utils/handleApiError.ts';

class PricesApi {
  private getListAttempt: number = 0;
  async startSearchPrices(id: string): Promise<StartSearchResponse> {
    try {
      const res = await startSearchPrices(id);
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

  async getList(token: string): Promise<GetSearchPricesResponse> {
    this.getListAttempt++;

    try {
      const res = await getSearchPrices(token);
      if (!res.ok) {
        if (res.status === 404 && this.getListAttempt <= 2) {
          return this.getList(token);
        }

        if (res.status === 425) {
          const delayTime = 1000; // Check data source for delay time
          await delay(delayTime);
          return this.getList(token);
        }

        this.getListAttempt = 0;
        throw {
          error: true,
          code: res.status,
          message: res.statusText || "HTTP error",
        } as ErrorResponse;
      }

      this.getListAttempt = 0;
      return await res.json();
    } catch (error: unknown) {
      handleError(error);
    }
  }
}

export default PricesApi;
