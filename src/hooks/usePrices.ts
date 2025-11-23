// External deps
import { useEffect, useState, useContext } from 'react';

// Internal deps
import PricesApi from '@/api/PricesApi.ts';
import type { StartSearchResponse } from '@/api/types.ts';
import { delay } from '@/utils/delay.ts';
import { AppContext } from '@/context/app/AppContext.ts';
import { PRICES_GET_SEARCH } from '@/context/app/app.constants.ts';

const usePrices = () => {
  const appCTX = useContext(AppContext);

  const [ searchResponse, setSearchResponse ] = useState<StartSearchResponse | null>(null);

  const priceApi = new PricesApi();

  const startSearch = async (id: string) => {
    if (!id) {
      setSearchResponse(null);
      return;
    }
    appCTX.dispatch({ type: PRICES_GET_SEARCH.LOADING })

    try {
      const resp = await priceApi.startSearchPrices(id);
      const waitUntilMs = new Date(resp.waitUntil).getTime() - new Date().getTime();
      await delay(waitUntilMs);
      setSearchResponse(resp);
    } catch (error) {
      appCTX.dispatch({ type: PRICES_GET_SEARCH.ERROR, payload: error });
    }
  }

  const getPrices = async () => {
    if (!searchResponse?.token) {
      appCTX.dispatch({ type: PRICES_GET_SEARCH.ERROR })
      return;
    }
    appCTX.dispatch({ type: PRICES_GET_SEARCH.LOADING })

    try {
      const resp = await priceApi.getList(searchResponse.token);
      appCTX.dispatch({ type: PRICES_GET_SEARCH.SUCCESS, payload: resp });
    } catch (error) {
      appCTX.dispatch({ type: PRICES_GET_SEARCH.ERROR, payload: error });
    }
  }

  useEffect(() => {
    if(searchResponse?.token) {
      getPrices();
    }
  }, [searchResponse?.token]);

  return {
    startSearch,
  }
}

export default usePrices;
