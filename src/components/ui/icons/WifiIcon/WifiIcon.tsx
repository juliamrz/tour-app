import React from "react";

type WifiIconProps = React.SVGProps<SVGSVGElement>;

const WifiIcon: React.FC<WifiIconProps> = (props) => {
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
        d="M5.1 9.9C9.3 6.4 14.7 6.4 18.9 9.9"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.8 12.6C10.7 10.2 13.3 10.2 16.2 12.6"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10.5 15.3C11.6 14.4 12.4 14.4 13.5 15.3"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="18"
        r="1"
        fill={props.stroke ?? "#6B7280"}
      />
    </svg>
  );
};

export default WifiIcon;
