// External deps
import { useState } from 'react';

// Internal deps
import GeoApi from '@/api/GeoApi.ts';
import type { GeoResponse, ErrorResponse } from '@/api/types.ts';
import type { SelectOptionItem } from '@/components/ui/Select/Select.tsx';
import CityIcon from '@/components/ui/icons/CityIcon';
import HotelIcon from '@/components/ui/icons/HotelIcon';

interface GeoItem {
  id: string | number;
  name: string;
  type: 'country' | 'city' | 'hotel';
  flag?: string;
}

const useGeo = () => {
  const [ geo, setGeo ] = useState<GeoResponse | null>(null);
  const [ isGeoSearchLoading, setIsGeoSearchLoading ] = useState<boolean>(false);
  const [ isGeoSearchError, setIsGeoSearchError ] = useState<ErrorResponse | null>(null);

  const typeIcons = {
    country: (item: GeoItem) => <img src={item.flag} alt={item.name} width={28} height={19} />,
    city: () => <CityIcon />,
    hotel: () => <HotelIcon />
  };

  const geoOptions: SelectOptionItem[] = geo
    ? Object.values(geo).map(item => ({
      value: item.id,
      displayName: item.name,
      label: typeIcons[item.type]?.(item) ?? null
    }))
    : [];

  const searchGeo = async (query: string) => {
    if (!query) {
      setGeo(null);
      return;
    }

    setIsGeoSearchLoading(true);
    const geoApi = new GeoApi();

    try {
      const resp = await geoApi.search(query);
      setGeo(resp);
      setIsGeoSearchError(null);
    } catch (error) {
      setGeo(null);
      setIsGeoSearchError(error as ErrorResponse);
    } finally {
      setIsGeoSearchLoading(false);
    }
  }

  return {
    geo,
    geoOptions,
    isGeoSearchLoading,
    isGeoSearchError,
    searchGeo,
  }
}

export default useGeo;
