// External deps
import { useParams } from 'react-router-dom';

// Internal deps
import Section from '@/components/ui/Section';
import MainContainer from '@/components/ui/MainContainer';
import TourCardDetail from '@/components/features/TourCardDetail';

const TourPage = () => {
  const { priceId, hotelId } = useParams<{ priceId: string, hotelId: string }>();

  return (
    <MainContainer>
      <Section>
        <TourCardDetail hotelId={hotelId ?? ''} priceId={priceId ?? ''} />
      </Section>
    </MainContainer>
  )
}

export default TourPage;
