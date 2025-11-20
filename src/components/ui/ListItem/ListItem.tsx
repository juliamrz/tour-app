// `External deps
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

// Local deps
import './ListItem.css';

interface ListItemProps {
  isSelected: boolean;
  isHighlighted: boolean;
  onClick: () => void;
}

const ListItem = (props: PropsWithChildren<ListItemProps>) => {
  const {
    isSelected,
    isHighlighted,
    onClick,
    children,
  } = props;

  return (
    <li
      onClick={onClick}
      className={clsx("listItem", {
        "listItem--active": isSelected,
        "listItem--highlighted": isHighlighted,
      })}
    >
      {children}
    </li>
  );
}

export default ListItem;
