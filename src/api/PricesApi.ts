// Internal deps
import { startSearchPrices, getSearchPrices, getPrice, stopSearchPrices } from '@/api/mocks/api';
import type { StartSearchResponse, GetSearchPricesResponse, ErrorResponse, PriceOffer, StopSearchResponse } from '@/api/types.ts';
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
    console.debug('debug API getList кількість спроб ', this.getListAttempt);

    try {
      const res = await getSearchPrices(token);
      if (!res.ok) {
        throw {
          error: true,
          code: res.status,
          message: res.statusText || "HTTP error",
        } as ErrorResponse;
      }

      this.getListAttempt = 0;
      return await res.json();
    } catch (error: unknown) {
      if (error instanceof Response) {
        const errorBody = await error.json();

        if (errorBody.code === 404 && this.getListAttempt <= 2) {
          return this.getList(token);
        }
        this.getListAttempt = 0;

        if (errorBody.code === 425) {
          const waitUntilMs = new Date(errorBody.waitUntil).getTime() - new Date().getTime();
          await delay(waitUntilMs);
          return this.getList(token);
        }
        throw errorBody as ErrorResponse;
      }

      if (typeof error === "object" && error && "message" in error) {
        throw error;
      }

      throw { error: true, code: 0, message: "Unknown error" } as ErrorResponse;
    }
  }

  async stopSearchPrices(token: string): Promise<StopSearchResponse> {
    try {
      const res = await stopSearchPrices(token);

      if (!res.ok) {
        const errorBody = await res.json();
        throw errorBody as ErrorResponse;
      }

      return await res.json();
    } catch (error: unknown) {
      if (error instanceof Response) {
        const errorBody = await error.json();
        throw errorBody as ErrorResponse;
      }

      if (typeof error === "object" && error && "message" in error) {
        throw error;
      }

      throw { error: true, code: 0, message: "Unknown error" } as ErrorResponse;
    }
  }

  async getPriceById(priceId: string): Promise<PriceOffer | undefined> {
    try {
      const res = await getPrice(priceId);

      if (!res.ok) {
        const err = await res.json();
        handleError(err as ErrorResponse);
      }

      return await res.json() as PriceOffer;
    } catch (error: unknown) {
      handleError(error);
    }
  }
}

export default PricesApi;
