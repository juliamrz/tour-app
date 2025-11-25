import React from "react";

type CountryIconProps = React.SVGProps<SVGSVGElement>;

const CountryIcon: React.FC<CountryIconProps> = (props) => {
  return (
    <svg
      width={props.width ?? 20}
      height={props.height ?? 20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
      />
      <path
        d="M3 12H21"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 3C14.5 6 14.5 18 12 21C9.5 18 9.5 6 12 3Z"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CountryIcon;
