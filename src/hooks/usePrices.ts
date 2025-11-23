// External deps
import { useEffect, useState } from 'react';

// Internal deps
import PricesApi from '@/api/PricesApi.ts';
import type { StartSearchResponse, GetSearchPricesResponse, ErrorResponse } from '@/api/types.ts';
import { delay } from '@/utils/delay.ts';

const usePrices = () => {
  const [ searchResponse, setSearchResponse ] = useState<StartSearchResponse | null>(null);
  const [ isStartSearchLoading, setIsStartSearchLoading ] = useState<boolean>(false);
  const [ isStartSearchError, setIsStartSearchError ] = useState<ErrorResponse | null>(null);

  const [ prices, setPrices ] = useState<GetSearchPricesResponse | null>(null);
  const [ isPricesLoading, setIsPricesLoading ] = useState<boolean>(false);
  const [ isPricesError, setIsPricesError ] = useState<ErrorResponse | null>(null);

  const priceApi = new PricesApi();

  const startSearch = async (id: string) => {
    if (!id) {
      setSearchResponse(null);
      return;
    }
    setIsStartSearchLoading(true);

    try {
      const resp = await priceApi.startSearchPrices(id);
      const waitUntilMs = new Date(resp.waitUntil).getTime() - new Date().getTime();
      await delay(waitUntilMs);
      setSearchResponse(resp);
      setIsStartSearchError(null);
    } catch (error) {
      setSearchResponse(null);
      setIsStartSearchError(error as ErrorResponse);
    } finally {
      setIsStartSearchLoading(false);
    }
  }

  const getPrices = async () => {
    if (!searchResponse?.token) {
      setPrices(null);
      return;
    }
    setIsPricesLoading(true);

    try {
      const resp = await priceApi.getList(searchResponse.token);
      setPrices(resp);
      setIsPricesError(null);
    } catch (error) {
      setPrices(null);
      setIsPricesError(error as ErrorResponse);
    } finally {
      setIsPricesLoading(false);
    }
  }

  useEffect(() => {
    if(searchResponse?.token) {
      getPrices();
    }
  }, [searchResponse?.token]);

  return {
    prices,
    isPricesLoading,
    isPricesError,
    startSearch,
    isStartSearchLoading,
    isStartSearchError,
  }
}

export default usePrices;
