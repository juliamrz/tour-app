import React from "react";

type FoodIconProps = React.SVGProps<SVGSVGElement>;

const FoodIcon: React.FC<FoodIconProps> = (props) => {
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
        d="M6 3V9M8 3V9M6 6H8M7 9V21"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3C14 8 17 8 17 13V21"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FoodIcon;
