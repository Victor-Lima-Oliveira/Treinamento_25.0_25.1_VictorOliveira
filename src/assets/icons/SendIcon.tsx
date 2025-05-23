import React from 'react';

const SendIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <path
            d="M10.3076 13.6923L15.1538 8.84619"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M3.2326 10.27C2.42568 9.86652 2.52346 8.68509 3.38572 8.41978L19.1948 3.55543C19.9621 3.31935 20.6808 4.03802 20.4447 4.8053L15.5804 20.6144C15.315 21.4767 14.1336 21.5745 13.7302 20.7675L10.38 14.0673C10.2833 13.8738 10.1264 13.7169 9.93283 13.6201L3.2326 10.27Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SendIcon;
