// External deps
import { useEffect, useRef, useState, useMemo } from 'react';
import type { ReactNode, KeyboardEvent } from 'react';
import clsx from 'clsx';

// Internal deps
import ListItem from '@/components/ui/ListItem';

// Local deps
import './Select.css';

export interface SelectOptionItem {
  value: string | number;
  displayName: string;
  label?: ReactNode;
}

interface SelectProps {
  name: string;
  value: SelectOptionItem["value"];
  options: SelectOptionItem[];
  placeholder?: string;
  onChange: (newValue: SelectOptionItem["value"]) => void;
  renderInput?: (props: { toggleList: () => void }) => ReactNode;
}

const Select = (props: SelectProps) => {
  const {
    name,
    value,
    options,
    onChange,
    placeholder = "Select...",
    renderInput,
  } = props;

  const [ isSelectListOpen, setIsSelectListOpen ] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = useMemo(() => {
    return options.find(item => item.value === value)
  }, [options, value])

  const onSelectItemClickHandler = (item: SelectOptionItem) => {
    onChange(item.value);
    setIsSelectListOpen(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isSelectListOpen) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex((prev) => Math.min(prev + 1, options.length - 1));
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    }

    if (event.key === 'Enter' && highlightedIndex >= 0) {
      event.preventDefault();
      onSelectItemClickHandler(options[highlightedIndex]);
    }

    if (event.key === 'Escape') {
      setIsSelectListOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsSelectListOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      tabIndex={0}
      ref={wrapperRef}
      onKeyDown={handleKeyDown}
      className={clsx("select")}
    >
      {renderInput
        ? renderInput({ toggleList: () => setIsSelectListOpen(prev => !prev) })
        : (
          <div className={clsx("select__input")} onClick={() => setIsSelectListOpen((prev) => !prev)}>
            {selectedOption?.displayName || placeholder}
          </div>
        )
      }
      <input
        type="hidden"
        name={name}
        value={value}
      />
      {isSelectListOpen && options.length > 0 && (
        <ul ref={listRef} className={clsx("select__list")}>
          {options.map((item, index) => (
            <ListItem
              key={item.value}
              isSelected={item.value === value}
              isHighlighted={index === highlightedIndex}
              onClick={() => onSelectItemClickHandler(item)}
            >
              {item.label ? item.label : item.displayName}
            </ListItem>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select;
