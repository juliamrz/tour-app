// External deps

// Internal deps
import useAppSelector from '@/hooks/useAppSelector.ts';
import Section from '@/components/ui/Section';
import SearchTourForm from '@/components/features/SearchTourForm';
import TourList from '@/components/features/TourList';
import Loader from '@/components/ui/Loader';
import Notification from '@/components/ui/Notification';
import {
  selectTours, selectIsToursLoading, selectIsToursLoaded,
  selectIsToursError, selectToursErrorMessage,
} from '@/context/app/app.prices.selectors.ts';

const SearchTourPage = () => {
  const isToursLoading = useAppSelector(selectIsToursLoading);
  const isToursLoaded = useAppSelector(selectIsToursLoaded);
  const tours = useAppSelector(selectTours);
  const isToursError = useAppSelector(selectIsToursError);
  const toursErrorMessage = useAppSelector(selectToursErrorMessage);

  return (
    <main>
      <Section>
        <SearchTourForm />
      </Section>
      {isToursLoading
        ? <Section><Loader /></Section>
        : null
      }
      {(isToursLoaded && !tours.length)
        ? <Section><Notification message="За вашим запитом турів не знайдено" type="info"/></Section>
        : null
      }
      {isToursError
        ? <Section><Notification message={toursErrorMessage} type="error" /></Section>
        : null
      }
      {tours.length > 0 && (
        <Section>
          <TourList />
        </Section>
      )}
    </main>
  )
}

export default SearchTourPage;
