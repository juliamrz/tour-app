// External deps
import clsx from 'clsx';
import { useState } from 'react';

// Internal deps
import type { PriceOffer, Hotel } from '@/api/types.ts';
import CardContainer from '@/components/ui/CardContainer';
import ImgWithSkeleton from '@/components/ui/ImgWithSkeleton';
import TextWithSkeleton from '@/components/ui/TextWithSkeleton';
import TextButton from '@/components/ui/TextButton';
import { formatDate } from '@/utils/formatDate.ts';
import { formatNumber } from '@/utils/formatNumber.ts';

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
    hotelID,
    amount,
    currency,
  } = props;

  const [ hotel, setHotel ] = useState<Hotel | null>(null);

  return (
    <CardContainer>
      <ImgWithSkeleton
        src={hotel?.img || ''}
        alt={hotel?.name || ''}
        isShowSkeleton={true}
      />
      <TextWithSkeleton text={hotel?.name} className={clsx("tourСard__hotelName")} isTitle />
      <TextWithSkeleton text={hotel?.countryId} className={clsx("tourСard__country")} />
      <span>Старт туру</span>
      <span>{formatDate(startDate)}</span>
      <h3 className={clsx("tourСard__amount")}>{formatNumber(amount)} {currency}</h3>
      <TextButton className={clsx("tourСard__link")}>Відкрити ціну</TextButton>
    </CardContainer>
  )
}

export default TourCard;
