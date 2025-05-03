import React from 'react';

const CloudIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 19C21.2091 19 23 17.2091 23 15C23 12.7909 21.2091 11 19 11C18.9764 11 18.9528 11.0002 18.9292 11.0006C18.4442 7.60802 15.5267 5 12 5C9.20335 5 6.78975 6.64004 5.6685 9.01082C3.06162 9.18144 1 11.35 1 14C1 16.7614 3.23858 19 6 19H19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M15 11L11 15L9 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default CloudIcon;
