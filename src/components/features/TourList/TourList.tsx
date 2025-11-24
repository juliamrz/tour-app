// External deps
import clsx from 'clsx';

// Internal deps
import useAppSelector from '@/hooks/useAppSelector.ts';
import { selectTours } from '@/context/app/app.prices.selectors.ts';
import TourCard from '@/components/features/TourCard';

// Local deps
import './TourList.css';

const TourList = () => {
  const tours = useAppSelector(selectTours);

  return (
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
  )
}

export default TourList;
