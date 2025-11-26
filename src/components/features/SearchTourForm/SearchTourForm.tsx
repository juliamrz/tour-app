// External deps
import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import clsx from 'clsx';

// Internal deps
import useAppSelector from '@/hooks/useAppSelector.ts';
import Button from '@/components/ui/Button';
import useCountries from '@/hooks/useCountries.tsx';
import useGeo from '@/hooks/useGeo.tsx';
import usePrices from '@/hooks/usePrices.ts';
import useHotels from '@/hooks/useHotels.ts';
import type { SelectOptionItem } from '@/components/ui/Select/Select.tsx';
import AutoComplete from '@/components/ui/AutoComplete';
import { selectIsToursLoaded, selectTours } from '@/context/app/app.prices.selectors.ts';

// Local deps
import './SearchTourForm.css';

const SearchTourForm = () => {
  const [ inputValue, setInputValue ] = useState<SelectOptionItem["value"]>('');
  const [ searchText, setSearchText ] = useState<string>('');
  const { countriesOptions } = useCountries();
  const { geoOptions, isGeoSearchLoading, searchGeo } = useGeo();
  const { startSearch, isStopSearchLoading } = usePrices();
  const { getHotels } = useHotels();
  const isToursLoaded = useAppSelector(selectIsToursLoaded);
  const tours = useAppSelector(selectTours);

  const handleSearch = (newValue: string) => {
    setSearchText(newValue);
  }

  const handleChange = (newValue: SelectOptionItem["value"]) => {
    setInputValue(String(newValue).split('_')[0]);
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = inputValue ? String(inputValue) : searchText;
    startSearch(searchValue);
  }

  useEffect(() => {
    if (!searchText.length) {
      return;
    }

    searchGeo(searchText);
  }, [searchText]);

  useEffect(() => {
    if(isToursLoaded && !!tours.length && !!inputValue) {
     getHotels(String(inputValue));
    }
  }, [tours.length]);

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
          disabled={isGeoSearchLoading || isStopSearchLoading}
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default SearchTourForm;
