// External deps
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

// Local deps
import './CardContainer.css';

interface CardContainerProps {
  onClick?: () => void;
  className?: string;
}

const CardContainer = (props: PropsWithChildren<CardContainerProps>) => {
  const {
    children,
    onClick,
    className,
  } = props;

  return (
    <article className={clsx("cardContainer", className)} onClick={onClick}>
      {children}
    </article>
  )
}

export default CardContainer;
