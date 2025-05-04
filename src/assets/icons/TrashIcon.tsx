import React from 'react';

const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M14 10L14 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10 10L10 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M18 6H6V20C6 20.5523 6.44772 21 7 21H17C17.5523 21 18 20.5523 18 20V6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4 6H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M15 3H9C8.44772 3 8 3.44772 8 4V6H16V4C16 3.44772 15.5523 3 15 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default TrashIcon;
