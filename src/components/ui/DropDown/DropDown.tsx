// External deps
import { useState, useEffect, useRef } from 'react';
import type { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

// Internal deps
import ListItem from '@/components/ui/ListItem';

// Local deps
import './DropDown.css';

export interface DropdownOptionItem {
  value: string | number;
  label: ReactNode;
}

interface DropdownProps {
  name: string;
  value: string;
  options: DropdownOptionItem[];
  onOpen?: () => void;
  onSearch?: (query: string) => void;
  onSelect?: (item: DropdownOptionItem) => void;
  placeholder?: string;
}

const DropDown = (props: DropdownProps) => {
  const {
    name,
    value,
    options,
    onOpen,
    onSearch,
    onSelect,
    placeholder = "Select...",
  } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleOpen = () => {
    setOpen(true);
    onOpen?.();
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch?.(event.target.value);
    setOpen(true);
    setHighlightedIndex(-1);
  };

  const handleSelect = (item: DropdownOptionItem) => {
    onSelect?.(item);
    setOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!open) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((prev) => Math.min(prev + 1, options.length - 1));
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < options.length) {
        handleSelect(options[highlightedIndex]);
      }
    }

    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="dropdown">
      <input
        value={value}
        onClick={handleOpen}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        name={name}
        className="dropdown__input"
      />
      {open && options.length > 0 && (
        <ul ref={listRef} className="dropdown__list">
          {options.map((item, index) => (
            <ListItem
              key={item.value}
              isSelected={item.value === value}
              isHighlighted={index === highlightedIndex}
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </ListItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
