// External deps

// Internal deps
import useAppSelector from '@/hooks/useAppSelector.ts';
import Section from '@/components/ui/Section';
import MainContainer from '@/components/ui/MainContainer';
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
    <MainContainer>
      <Section>
        <SearchTourForm />
        {isToursLoading
          ? <Loader />
          : null
        }
        {(isToursLoaded && !tours.length)
          ? <Notification message="За вашим запитом турів не знайдено" type="info"/>
          : null
        }
        {isToursError
          ? <Notification message={toursErrorMessage} type="error" />
          : null
        }
        {tours.length > 0 && (<TourList />)}
      </Section>
    </MainContainer>
  )
}

export default SearchTourPage;
