// External deps
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

// Local deps
import './Button.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    type = 'button',
    onClick,
    disabled = false,
    children,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx('btn')}
    >
      {children}
    </button>
  )
}

export default Button;
