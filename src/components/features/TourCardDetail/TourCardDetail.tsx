// External deps
import { useEffect } from 'react';

// Internal deps
import useAppSelector from '@/hooks/useAppSelector.ts';
import { selectHotelDetailsById, selectIsHotelDetailsLoading} from '@/context/app/app.hotels.selectors.ts';
import { selectPriceById, selectIsPriceByIdLoading } from '@/context/app/app.prices.selectors.ts';
import CardContainer from '@/components/ui/CardContainer';
import ImgWithSkeleton from '@/components/ui/ImgWithSkeleton';
import TextItemWithIcon from '@/components/ui/TextItemWithIcon';
import CountryIcon from '@/components/ui/icons/CountryIcon';
import CityIcon from '@/components/ui/icons/CityIcon';
import DateIcon from '@/components/ui/icons/CountryIcon/DateIcon';
import { formatDate } from '@/utils/formatDate.ts';
import Button from '@/components/ui/Button';
import useHotels from '@/hooks/useHotels.ts';
import usePrices from '@/hooks/usePrices.ts';
import useHotelServices from "@/hooks/useHotelServices.tsx";
import { formatCurrency } from '@/utils/formatCurrency.ts';

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

  const hotelDetailsById = useAppSelector((state) => selectHotelDetailsById(state, Number(hotelId)));
  const isHotelDetailsLoading = useAppSelector(selectIsHotelDetailsLoading);

  const hotelPrice = useAppSelector((state) => selectPriceById(state, priceId));
  const isPriceByIdLoading = useAppSelector(selectIsPriceByIdLoading);
  const { getHotelDetails } = useHotels();
  const { getPriceById } = usePrices();
  const hotelServices = useHotelServices(hotelDetailsById?.services);

  useEffect(() => {
    if (!hotelDetailsById && !isHotelDetailsLoading) {
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
      <h1 className="tourCardDetail__hotel">{hotelDetailsById?.name}</h1>
      <div className="tourCardDetail__row">
        <TextItemWithIcon text={hotelDetailsById?.countryName ?? ''} icon={<CountryIcon/>}/>
        <TextItemWithIcon text={hotelDetailsById?.cityName ?? ''} icon={<CityIcon/>}/>
      </div>
      <ImgWithSkeleton
        src={hotelDetailsById?.img || ''}
        alt={hotelDetailsById?.name || ''}
        isShowSkeleton={isHotelDetailsLoading}
        height={150}
        className="tourCardDetail__img"
      />
      <h2 className="tourCardDetail__title">Опис</h2>
      <p className="tourCardDetail__hotel">{hotelDetailsById?.description}</p>
      <h2 className="tourCardDetail__title">Сервіси</h2>
      <div className="tourCardDetail__row">
        {hotelServices.map((service) => (
          <TextItemWithIcon key={service.key} text={service.label} icon={service.icon} />
        ))}
      </div>
      <div className="tourCardDetail__footer">
        <TextItemWithIcon text={formatDate(hotelPrice?.startDate)} icon={<DateIcon />}/>
        <div className="tourCardDetail__sum">
          <h2>{formatCurrency(hotelPrice?.amount, hotelPrice?.currency)}</h2>
          <Button className="tourCardDetail__btn" viewType="secondary">Відкрити ціну</Button>
        </div>
      </div>
    </CardContainer>
  )
}

export default TourCardDetail;
