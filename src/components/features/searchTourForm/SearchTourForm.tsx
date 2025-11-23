// External deps
import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import clsx from 'clsx';

// Internal deps
import Button from '@/components/ui/Button';
import useCountries from '@/hooks/useCountries.tsx';
import useGeo from '@/hooks/useGeo.tsx';
import type { SelectOptionItem } from '@/components/ui/Select/Select.tsx';
import AutoComplete from "@/components/ui/AutoComplete";

// Local deps
import './SearchTourForm.css';

const SearchTourForm = () => {
  const [ inputValue, setInputValue ] = useState<SelectOptionItem["value"]>('');
  const [ searchText, setSearchText ] = useState<string>('');
  const { countriesOptions, isLoadingCountries } = useCountries();
  const { geoOptions, isGeoSearchLoading, searchGeo } = useGeo();

  const handleSearch = (newValue: string) => {
    setSearchText(newValue);
  }

  const handleChange = (newValue: SelectOptionItem["value"]) => {
    setInputValue(newValue);
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   // const formData = new FormData(event.currentTarget);
  }

  useEffect(() => {
    if (!searchText.length) {
      return;
    }

    searchGeo(searchText);
  }, [searchText]);

  return (
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
  );
}

export default SearchTourForm;
