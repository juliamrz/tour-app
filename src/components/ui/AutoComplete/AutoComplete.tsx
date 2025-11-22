// External deps
import type { ChangeEvent } from 'react';
import { useEffect } from 'react';

// Internal deps
import Select from '@/components/ui/Select';
import type { SelectOptionItem } from '@/components/ui/Select/Select.tsx';

// Local deps
import './AutoComplete.css';

interface AutoCompleteProps {
  name: string;
  value: SelectOptionItem["value"];
  searchText: string;
  options: SelectOptionItem[];
  placeholder?: string;
  currentValue?: string;
  onChange: (newValue: SelectOptionItem["value"]) => void;
  onSearch: (newValue: string) => void;
}

const AutoComplete = (props: AutoCompleteProps) => {
  const {
    name,
    value,
    searchText,
    options,
    placeholder,
    onChange,
    onSearch,
  } = props;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  }

  useEffect(() => {
    const selectedOption = options.find(item => item.value === value);
    onSearch(selectedOption?.displayName ?? '');
  }, [value])

  return (
    <Select
      name='autoComplete'
      value={value}
      options={options}
      onChange={onChange}
      renderInput={({ toggleList }) => (
        <input
          autoFocus
          name={name}
          value={searchText}
          onChange={onChangeHandler}
          onClick={toggleList}
          placeholder={placeholder}
          className="autocomplete__input"
        />
      )
      }
    />
  )
}

export default AutoComplete;
