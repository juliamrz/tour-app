// External deps
import {type ChangeEvent, useRef} from 'react';
import { useEffect, useState } from 'react';

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

  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [ isSelectOpen, setIsSelectOpen ] = useState<boolean>(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
    setIsSelectOpen(true);
  }

  const onSelectChangeHandler = (newValue: SelectOptionItem["value"]) => {
    setIsSelectOpen(false);
    onChange(newValue);
    const selectedOption = options.find(item => item.value === newValue);
    onSearch(selectedOption?.displayName ?? '');
    if(searchRef.current) {
      searchRef.current.focus();
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsSelectOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef}>
      <Select
        name='autoComplete'
        isOpen={isSelectOpen}
        value={value}
        options={options}
        onChange={onSelectChangeHandler}
        renderInput={({ toggleList }) => (
          <input
            ref={searchRef}
            name={name}
            autoComplete="off"
            value={searchText}
            onChange={onChangeHandler}
            onClick={toggleList}
            placeholder={placeholder}
            className="autocomplete__input"
          />
        )
        }
      />
    </div>
  )
}

export default AutoComplete;
