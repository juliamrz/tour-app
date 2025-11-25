// External deps
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

// Local deps
import './Button.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  viewType?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    type = 'button',
    onClick,
    disabled = false,
    children,
    className,
    viewType = 'primary',
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx('btn', `btn--${viewType}`, className)}
    >
      {children}
    </button>
  )
}

export default Button;
