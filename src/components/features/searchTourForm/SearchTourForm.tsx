// External deps
import { useState } from 'react';
import type { FormEvent } from 'react';
import clsx from 'clsx';

// Internal deps
import Button from '@/components/ui/Button';
import useCountries from '@/hooks/useCountries.tsx';
import useGeo from '@/hooks/useGeo.tsx';
import type {SelectOptionItem } from "@/components/ui/Select/Select.tsx";
import AutoComplete from "@/components/ui/AutoComplete";

// Local deps
import './SearchTourForm.css';

const SearchTourForm = () => {
  const [ inputValue, setInputValue ] = useState<SelectOptionItem["value"]>('');
  const [ searchText, setSearchText ] = useState<string>('');
  const { countriesOptions, isLoadingCountries, isErrorCountries } = useCountries();
  const { geoOptions, isGeoSearchLoading, isGeoSearchError, searchGeo } = useGeo();
  console.debug('debug countriesOptions:', countriesOptions);
  const handleSearch = (newValue: string) => {
    setSearchText(newValue);
  }

  const handleChange = (newValue: SelectOptionItem["value"]) => {
    setInputValue(newValue);
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  }

  return (
    <form onSubmit={onSubmitHandler} className={clsx("searchTourForm")}>
      <AutoComplete
        value={inputValue}
        searchText={searchText}
        onSearch={handleSearch}
        onChange={handleChange}
        name='searchTour'
        options={countriesOptions}
        placeholder="Search tour..."
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default SearchTourForm;
