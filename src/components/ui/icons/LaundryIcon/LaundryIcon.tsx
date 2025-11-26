import React from 'react';

const LaundryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="8" x2="21" y2="8" />
    <circle cx="8" cy="6" r="1" />
    <circle cx="12" cy="6" r="1" />
    <circle cx="12" cy="14" r="5" />
  </svg>
);

export default LaundryIcon;
