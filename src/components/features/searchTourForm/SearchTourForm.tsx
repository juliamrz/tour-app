// External deps
import { useState } from 'react';
import type { FormEvent } from 'react';
import clsx from 'clsx';

// Internal deps
import DropDown from '@/components/ui/DropDown';
import Button from '@/components/ui/Button';
import useCountries from '@/hooks/api/useCountries.ts';
import type { DropdownOptionItem } from '@/components/ui/DropDown/DropDown.tsx';

// Local deps
import './SearchTourForm.css';

const SearchTourForm = () => {
  const [currentSelectedValue, setCurrentSelectedValue] = useState<string>("");
  const { countries, isLoadingCountries, isErrorCountries } = useCountries();

  const countriesOptions =
    countries
      ? Object.values(countries).map((item) => ({ value: item.name, label: item.name }))
      : [];

  const handleOpen = () => {

  }

  const handleSearch = () => {

  }

  function handleSelect(newItem: DropdownOptionItem) {
    setCurrentSelectedValue(newItem.label as any)
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  }

  return (
    <form onSubmit={onSubmitHandler} className={clsx("searchTourForm")}>
      <DropDown
        name="searchTour"
        value={currentSelectedValue}
        options={countriesOptions}
        onOpen={handleOpen}
        onSearch={handleSearch}
        onSelect={handleSelect}
        placeholder="Select country, city or hotel"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default SearchTourForm;
