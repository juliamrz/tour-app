import React from 'react';

type AquaparkIconProps = React.SVGProps<SVGSVGElement>;

const AquaparkIcon: React.FC<AquaparkIconProps> = (props) => {
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
        d="M6 3V14M6 3H10M6 3L10 7M10 7V14"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10C14 10 15 12 17 12C19 12 20 11 21 10"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 17C4 18 5 18 6 17C7 16 8 16 9 17C10 18 11 18 12 17C13 16 14 16 15 17C16 18 17 18 18 17C19 16 20 16 21 17"
        stroke={props.stroke ?? "#6B7280"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AquaparkIcon;
