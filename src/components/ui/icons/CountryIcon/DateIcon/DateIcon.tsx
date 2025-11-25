import React from "react";

type DateIconProps = React.SVGProps<SVGSVGElement>;

const DateIcon: React.FC<DateIconProps> = (props) => {
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
        d="M3 8H21"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
      />
      <path
        d="M8 3V7"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 3V7"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DateIcon;
