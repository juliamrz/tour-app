import React from "react";

type PoolIconProps = React.SVGProps<SVGSVGElement>;

const PoolIcon: React.FC<PoolIconProps> = (props) => {
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
        d="M6 3V14"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 3V14"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M6 7H18"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M4 17C5 18 7 18 8 17C9 16 11 16 12 17C13 18 15 18 16 17C17 16 19 16 20 17"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M4 20C5 21 7 21 8 20C9 19 11 19 12 20C13 21 15 21 16 20C17 19 19 19 20 20"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PoolIcon;
