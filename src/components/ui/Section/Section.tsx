// External deps
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

// Local deps
import './Section.css';

interface SectionProps {
  className?: string;
}

const Section = (props: PropsWithChildren<SectionProps>) => {
  const { className, children } = props;
  return (
    <section className={clsx('section', className)}>
      {children}
    </section>
  )
}

export default Section;
