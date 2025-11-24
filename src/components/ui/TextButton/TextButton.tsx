// External deps
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

// Local deps
import './TextButton.css';

interface TextButtonProps {
  onClick?: () => void;
  className?: string;
}

const TextButton = (props: PropsWithChildren<TextButtonProps>) => {
  const {
    children,
    onClick,
    className,
  } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("TextButton", className)}
    >
      {children}
    </button>
  );
};

export default TextButton;
