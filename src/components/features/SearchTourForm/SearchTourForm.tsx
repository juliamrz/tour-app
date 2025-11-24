// External deps
import { useState, useEffect, useContext } from 'react';
import type { FormEvent } from 'react';
import clsx from 'clsx';

// Internal deps
import Button from '@/components/ui/Button';
import useCountries from '@/hooks/useCountries.tsx';
import useGeo from '@/hooks/useGeo.tsx';
import usePrices from '@/hooks/usePrices.ts';
import type { SelectOptionItem } from '@/components/ui/Select/Select.tsx';
import AutoComplete from '@/components/ui/AutoComplete';
import { AppContext } from '@/context/app/AppContext.ts';
import Notification from '@/components/ui/Notification';
import Loader from '@/components/ui/Loader';

// Local deps
import './SearchTourForm.css';

const SearchTourForm = () => {
  const [ inputValue, setInputValue ] = useState<SelectOptionItem["value"]>('');
  const [ searchText, setSearchText ] = useState<string>('');
  const { countriesOptions, isLoadingCountries } = useCountries();
  const { geoOptions, isGeoSearchLoading, searchGeo } = useGeo();
  const { startSearch } = usePrices();

  const appCtx = useContext(AppContext);
  const isLoadingGetPrices = appCtx.state.prices.isLoadingGetList;
  const isErrorGetPrices = appCtx.state.prices.isErrorGetList;
  const errorGetPricesMessage = appCtx.state.prices.errorMessage;
  const pricesList = appCtx.state.prices.list;

  const handleSearch = (newValue: string) => {
    setSearchText(newValue);
  }

  const handleChange = (newValue: SelectOptionItem["value"]) => {
    setInputValue(newValue);
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startSearch(String(inputValue));
  }

  useEffect(() => {
    if (!searchText.length) {
      return;
    }

    searchGeo(searchText);
  }, [searchText]);

  return (
    <>
      <form onSubmit={onSubmitHandler} className={clsx("searchTourForm")}>
        <AutoComplete
          value={inputValue}
          searchText={searchText}
          onSearch={handleSearch}
          onChange={handleChange}
          name='searchTour'
          options={searchText.length ? geoOptions : countriesOptions}
          placeholder="Search tour..."
        />
        <Button
          type="submit"
          disabled={isLoadingCountries || isGeoSearchLoading}
        >
          Submit
        </Button>
      </form>
      {isLoadingGetPrices ? <Loader /> : null}
      {!!pricesList && Object.keys(pricesList).length === 0
        ? <Notification message="За вашим запитом турів не знайдено" type="info"/>
        : null
      }
      {isErrorGetPrices ? <Notification message={errorGetPricesMessage} type="error" /> : null}
    </>
  );
}

export default SearchTourForm;
