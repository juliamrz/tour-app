// External deps
import { useEffect } from 'react';

// Internal deps
import useAppSelector from '@/hooks/useAppSelector.ts';
import { selectTourById, selectHotelById } from '@/context/app/app.prices.selectors.ts';
import { selectCountryById } from "@/context/app/app.countries.selectors.ts";
import {
  selectHotelDetailsById, selectIsHotelDetailsLoaded,
  selectIsHotelDetailsLoading
} from '@/context/app/app.hotels.selectors.ts';
import { selectPriceById, selectIsPriceByIdLoading } from '@/context/app/app.prices.selectors.ts';
import CardContainer from '@/components/ui/CardContainer';
import ImgWithSkeleton from '@/components/ui/ImgWithSkeleton';
import TextItemWithIcon from '@/components/ui/TextItemWithIcon';
import CountryIcon from '@/components/ui/icons/CountryIcon';
import CityIcon from '@/components/ui/icons/CityIcon';
import WifiIcon from '@/components/ui/icons/WifiIcon/WifiIcon.ts';
import DateIcon from '@/components/ui/icons/CountryIcon/DateIcon';
import { formatDate } from '@/utils/formatDate.ts';
import Button from '@/components/ui/Button';
import useHotels from '@/hooks/useHotels.ts';
import usePrices from '@/hooks/usePrices.ts';

// Local deps
import './TourCardDetail.css';

interface TourCardDetail {
  hotelId: string;
  priceId: string;
}

const TourCardDetail = (props: TourCardDetail) => {
  const {
    hotelId,
    priceId,
  } = props;

  const tour = useAppSelector((state) => selectTourById(state, priceId ?? ''));
  const hotel = useAppSelector((state) => selectHotelById(state, hotelId ?? ''));
  const hotelDetailsById = useAppSelector((state) => selectHotelDetailsById(state, Number(hotelId)));
  const isHotelDetailsLoaded = useAppSelector(selectIsHotelDetailsLoaded);
  const isHotelDetailsLoading = useAppSelector(selectIsHotelDetailsLoading);
  const hotelPrice = useAppSelector((state) => selectPriceById(state, priceId));
  const isPriceByIdLoading = useAppSelector(selectIsPriceByIdLoading);
  const country = useAppSelector((state) => selectCountryById(state, hotel?.countryId ?? ''));
  const { getHotelDetails } = useHotels();
  const { getPriceById } = usePrices();

  useEffect(() => {
    if (!hotelDetailsById && !isHotelDetailsLoaded) {
      getHotelDetails(Number(hotelId));
    }
  }, [hotelId]);

  useEffect(() => {
    if (!hotelPrice && !isPriceByIdLoading) {
      getPriceById(priceId);
    }
  }, [priceId]);

  return (
    <CardContainer className="tourCardDetail">
      <h1 className="tourCardDetail__hotel">{hotel?.name}</h1>
      <div className="tourCardDetail__row">
        <TextItemWithIcon text={country?.name ?? ''} icon={<CountryIcon/>}/>
        <TextItemWithIcon text={hotel?.cityName ?? ''} icon={<CityIcon/>}/>
      </div>
      <ImgWithSkeleton
        src={hotel?.img || ''}
        alt={hotel?.name || ''}
        isShowSkeleton={!hotel}
        height={150}
        className="tourCardDetail__img"
      />
      <h2>Опис</h2>
      <p className="tourCardDetail__hotel">Description</p>
      <h2>Сервіси</h2>
      <div className="tourCardDetail__row">
        <TextItemWithIcon text={'Wi-Fi'} icon={<WifiIcon/>}/>
      </div>
      <div className="tourCardDetail__footer">
        <TextItemWithIcon text={formatDate('2025-11-18')} icon={<DateIcon />}/>
        <div className="tourCardDetail__sum">
          <h3>3 021 usd</h3>
          <Button className="tourCardDetail__btn" viewType="secondary">Відкрити ціну</Button>
        </div>
      </div>
    </CardContainer>
  )
}

export default TourCardDetail;
