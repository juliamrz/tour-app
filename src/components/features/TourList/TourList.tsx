// External deps
import clsx from 'clsx';

// Internal deps
import useAppSelector from '@/hooks/useAppSelector.ts';
import { selectTours } from '@/context/app/app.prices.selectors.ts';
import TourCard from '@/components/features/TourCard';
import Section from '@/components/ui/Section';

// Local deps
import './TourList.css';

const TourList = () => {
  const tours = useAppSelector(selectTours);

  if (!tours.length) {
    return null;
  }

  return (
    <Section>
      <div className={clsx("tourList")}>
        {tours.map((tour) => {
          return (
            <TourCard
              key={tour.id}
              startDate={tour.startDate}
              hotelID={tour.hotelID}
              amount={tour.amount}
              currency={tour.currency}
            />
          )
        })}
      </div>
    </Section>
  )
}

export default TourList;
