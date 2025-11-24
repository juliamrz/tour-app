// External deps
import { useEffect, useContext } from 'react';

// Internal deps
import CountriesApi from '@/api/CountriesApi.ts';
import type { SelectOptionItem } from '@/components/ui/Select/Select.tsx';
import { AppContext } from '@/context/app/AppContext.ts';
import {COUNTRIES_GET_LIST} from '@/context/app/app.constants.ts';
import useAppSelector from '@/hooks/useAppSelector.ts';
import { selectCountries } from '@/context/app/app.countries.selectors.ts';

const useCountries = () => {
  const appCtx = useContext(AppContext);
  const countries = useAppSelector(selectCountries);

  const countriesOptions: SelectOptionItem[] = countries
    ? Object.values(countries).map(item => ({
      value: item.id,
      displayName: item.name,
      label: (<img src={item.flag} alt={item.name} width={28} />)
    }))
    : [];

  const getCountries = async () => {
    appCtx.dispatch({ type: COUNTRIES_GET_LIST.LOADING });
    const countriesApi = new CountriesApi();
    try {
      const resp = await countriesApi.getList();
      appCtx.dispatch({ type: COUNTRIES_GET_LIST.SUCCESS, payload: resp });
    } catch (error) {
      appCtx.dispatch({ type: COUNTRIES_GET_LIST.ERROR, payload: error });
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  return {
    countriesOptions,
  }
};

export default useCountries;
