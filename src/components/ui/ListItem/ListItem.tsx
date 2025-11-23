// `External deps
import type { ReactNode } from 'react';
import clsx from 'clsx';

// Local deps
import './ListItem.css';

interface ListItemProps {
  name: string;
  label: ReactNode;
  isSelected: boolean;
  isHighlighted: boolean;
  onClick: () => void;
}

const ListItem = (props: ListItemProps) => {
  const {
    name,
    label,
    isSelected,
    isHighlighted,
    onClick,
  } = props;

  return (
    <li
      onClick={onClick}
      className={clsx("listItem", {
        "listItem--active": isSelected,
        "listItem--highlighted": isHighlighted,
      })}
    >
      {label ? label : null}
      <span>{name}</span>
    </li>
  );
}

export default ListItem;
