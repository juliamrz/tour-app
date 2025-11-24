// External deps
import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import clsx from 'clsx';

// Internal deps
import Button from '@/components/ui/Button';
import useCountries from '@/hooks/useCountries.tsx';
import useGeo from '@/hooks/useGeo.tsx';
import usePrices from '@/hooks/usePrices.ts';
import type { SelectOptionItem } from '@/components/ui/Select/Select.tsx';
import AutoComplete from '@/components/ui/AutoComplete';
import Notification from '@/components/ui/Notification';
import Loader from '@/components/ui/Loader';
import Section from '@/components/ui/Section';
import useAppSelector from '@/hooks/useAppSelector.ts';
import {
  selectTours, selectIsToursLoading, selectIsToursError, selectToursErrorMessage, selectIsToursLoaded,
} from '@/context/app/app.prices.selectors.ts';

// Local deps
import './SearchTourForm.css';

const SearchTourForm = () => {
  const [ inputValue, setInputValue ] = useState<SelectOptionItem["value"]>('');
  const [ searchText, setSearchText ] = useState<string>('');
  const { countriesOptions, isLoadingCountries } = useCountries();
  const { geoOptions, isGeoSearchLoading, searchGeo } = useGeo();
  const { startSearch } = usePrices();

  const isToursLoaded = useAppSelector(selectIsToursLoaded);
  const isToursLoading = useAppSelector(selectIsToursLoading);
  const isToursError = useAppSelector(selectIsToursError);
  const toursErrorMessage = useAppSelector(selectToursErrorMessage);
  const tours = useAppSelector(selectTours);
  console.debug('debug tours:', JSON.stringify(tours));
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
    <Section>
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
      {isToursLoading ? <Loader /> : null}
      {!tours.length && isToursLoaded
        ? <Notification message="За вашим запитом турів не знайдено" type="info"/>
        : null
      }
      {isToursError ? <Notification message={toursErrorMessage} type="error" /> : null}
    </Section>
  );
}

export default SearchTourForm;
