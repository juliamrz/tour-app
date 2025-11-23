import React from "react";

type CityIconProps = React.SVGProps<SVGSVGElement>;

const CityIcon: React.FC<CityIconProps> = (props) => {
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
        d="M12 21C12 21 5 14.75 5 10C5 6.68629 7.68629 4 11 4H13C16.3137 4 19 6.68629 19 10C19 14.75 12 21 12 21Z"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11H14M10 9H12M12 9V13"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CityIcon;
