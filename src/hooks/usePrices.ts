// External deps
import { useEffect, useState, useContext } from 'react';

// Internal deps
import PricesApi from '@/api/PricesApi.ts';
import type { StartSearchResponse } from '@/api/types.ts';
import { delay } from '@/utils/delay.ts';
import { AppContext } from '@/context/app/AppContext.ts';
import { PRICES_GET_SEARCH, PRICE_GET_BY_ID } from '@/context/app/app.constants.ts';

const usePrices = () => {
  const appCTX = useContext(AppContext);

  const [ searchResponse, setSearchResponse ] = useState<StartSearchResponse | null>(null);

  const priceApi = new PricesApi();

  const startSearch = async (id: string) => {
    if (!id) {
      setSearchResponse(null);
      appCTX.dispatch({ type: PRICES_GET_SEARCH.ERROR, payload: 'Please select a country.' });
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
      if (Object.keys(resp.prices).length === 0) {
        appCTX.dispatch({ type: PRICES_GET_SEARCH.SUCCESS, payload: {} });
        return;
      }
      appCTX.dispatch({ type: PRICES_GET_SEARCH.SUCCESS, payload: resp });
    } catch (error) {
      appCTX.dispatch({ type: PRICES_GET_SEARCH.ERROR, payload: error });
    }
  }

  const getPriceById = async (priceId: string) => {
    if (!priceId) {
      return;
    }
    appCTX.dispatch({ type: PRICE_GET_BY_ID.LOADING });

    try {
      const price = await priceApi.getPriceById(priceId);
      appCTX.dispatch({ type: PRICE_GET_BY_ID.SUCCESS, payload: price });
    } catch (error) {
      appCTX.dispatch({ type: PRICE_GET_BY_ID.ERROR, payload: error });
    }
  };

  useEffect(() => {
    if(searchResponse?.token) {
      getPrices();
    }
  }, [searchResponse?.token]);

  return {
    startSearch,
    getPriceById,
  }
}

export default usePrices;
