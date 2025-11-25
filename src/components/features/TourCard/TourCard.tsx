// External deps
import clsx from 'clsx';

// Internal deps
import useAppSelector from '@/hooks/useAppSelector.ts';
import type { PriceOffer } from '@/api/types.ts';
import CardContainer from '@/components/ui/CardContainer';
import ImgWithSkeleton from '@/components/ui/ImgWithSkeleton';
import TextWithSkeleton from '@/components/ui/TextWithSkeleton';
import TextButton from '@/components/ui/TextButton';
import { formatDate } from '@/utils/formatDate.ts';
import { formatNumber } from '@/utils/formatNumber.ts';
import { selectHotelById } from '@/context/app/app.prices.selectors.ts';
import { selectCountryById } from '@/context/app/app.countries.selectors.ts';

// Local deps
import './TourCard.css'

interface TourCardProps {
  startDate: PriceOffer['startDate'];
  hotelID: PriceOffer['hotelID'];
  amount: PriceOffer['amount'];
  currency: PriceOffer['currency'];
}

const TourCard = (props: TourCardProps) => {
  const {
    startDate,
    hotelID = '',
    amount,
    currency,
  } = props;

  const hotel = useAppSelector((state) => selectHotelById(state, hotelID));
  const country = useAppSelector(state => selectCountryById(state, hotel?.countryId ?? ''));

  return (
    <CardContainer>
      <ImgWithSkeleton
        src={hotel?.img || ''}
        alt={hotel?.name || ''}
        isShowSkeleton={!hotel}
      />
      <TextWithSkeleton text={hotel?.name} className={clsx("tourСard__hotelName")} isTitle />
      <div className={clsx("tourСard__countryInfo")}>
        <img src={country?.flag} alt={hotel?.name} width={18}/>
        <TextWithSkeleton text={`${country?.name}, ${hotel?.cityName}`} className={clsx("tourСard__country")} />
      </div>
      <span>Старт туру</span>
      <span>{formatDate(startDate)}</span>
      <h3 className={clsx("tourСard__amount")}>{formatNumber(amount)} {currency}</h3>
      <TextButton className={clsx("tourСard__link")}>Відкрити ціну</TextButton>
    </CardContainer>
  )
}

export default TourCard;
