// External deps
import { useState } from 'react';

// Internal deps
import GeoApi from '@/api/GeoApi.ts';
import type { GeoResponse, ErrorResponse } from '@/api/types.ts';

const useGeo = () => {
  const [ geo, setGeo ] = useState<GeoResponse | null>(null);
  const [ isGeoSearchLoading, setIsGeoSearchLoading ] = useState<boolean>(false);
  const [ isGeoSearchError, setIsGeoSearchError ] = useState<ErrorResponse | null>(null);

  const searchGeo = async (query: string) => {
    if (!query) {
      setGeo(null);
      return;
    }

    setIsGeoSearchLoading(true);
    const geoApi = new GeoApi();

    try {
      const resp = await geoApi.search(query);
      console.debug(`debug resp ${query}}: /////////`, resp);
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
    isGeoSearchLoading,
    isGeoSearchError,
    searchGeo,
  }
}

export default useGeo;
