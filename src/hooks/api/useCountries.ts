// External deps
import { useState, useEffect } from 'react';

// Internal deps
import CountriesApi from '@/api/CountriesApi.ts';
import type { CountriesMap, ErrorResponse } from '@/api/types.ts';

const useCountries = () => {
  const [ countries, setCountries ] = useState<CountriesMap | null>(null);
  const [ isLoadingCountries, setIsLoadingCountries ] = useState<boolean>(false);
  const [ isErrorCountries, setIsErrorCountries ] = useState<ErrorResponse | null>(null);

  const getCountries = async () => {
    setIsLoadingCountries(true);
    const countriesApi = new CountriesApi();
    try {
      const resp = await countriesApi.getList();
      setCountries(resp);
      setIsErrorCountries(null);
    } catch (error) {
      setCountries(null);
      setIsErrorCountries(error as ErrorResponse);
    } finally {
      setIsLoadingCountries(false);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  return {
    countries,
    isLoadingCountries,
    isErrorCountries,
  }
};

export default useCountries;
