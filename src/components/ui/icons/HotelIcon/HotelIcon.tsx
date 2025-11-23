import React from "react";

type HotelIconProps = React.SVGProps<SVGSVGElement>;

const HotelIcon: React.FC<HotelIconProps> = (props) => {
  return (
    <svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 17V10M21 17V12C21 10.8954 20.1046 10 19 10H5C3.89543 10 3 10.8954 3 12V17M3 17H21M7 10V7C7 5.89543 7.89543 5 9 5H11C12.1046 5 13 5.89543 13 7V10"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HotelIcon;
