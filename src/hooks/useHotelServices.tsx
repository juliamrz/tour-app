// hooks/useHotelServices.ts
import WifiIcon from "@/components/ui/icons/WifiIcon/WifiIcon.ts";
import LaundryIcon from "@/components/ui/icons/LaundryIcon";
import ParkingIcon from "@/components/ui/icons/ParkingIcon";
import TennisIcon from "@/components/ui/icons/TennisIcon";
import AquaparkIcon from "@/components/ui/icons/AquaparkIcon";
import HotelIcon from "@/components/ui/icons/HotelIcon";
import type { ReactNode } from 'react';

export type HotelService = {
  key: string;
  label: string;
  icon: ReactNode;
};

const DEFAULT_ICON = <HotelIcon />;

const serviceIcons: Record<string, ReactNode> = {
  wifi: <WifiIcon />,
  laundry: <LaundryIcon />,
  parking: <ParkingIcon />,
  tennis_court: <TennisIcon />,
  aquapark: <AquaparkIcon />,
};

const serviceLabels: Record<string, string> = {
  wifi: 'Wi-Fi',
  laundry: 'Прання',
  parking: 'Паркінг',
  tennis_court: 'Теніс',
  aquapark: 'Аквапарк',
};

const useHotelServices = (services?: Record<string, string | undefined>): HotelService[] => {
  if (!services) {
    return [];
  };

  return Object.keys(services)
    .filter((key) => services[key] === 'yes')
    .map((key) => ({
      key,
      label: serviceLabels[key] ?? key,
      icon: serviceIcons[key] ?? DEFAULT_ICON,
    }));
};

export default useHotelServices;
