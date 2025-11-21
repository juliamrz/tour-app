// External deps
import { useState } from 'react';
import type { FormEvent } from 'react';
import clsx from 'clsx';

// Internal deps
import DropDown from '@/components/ui/DropDown';
import Button from '@/components/ui/Button';

// Local deps
import './SearchTourForm.css';

const SearchTourForm = () => {
  const [currentSelectedValue, setCurrentSelectedValue] = useState<string>("");

  const handleOpen = () => {

  }

  const handleSearch = () => {

  }

  function handleSelect() {

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
        options={[]}
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
