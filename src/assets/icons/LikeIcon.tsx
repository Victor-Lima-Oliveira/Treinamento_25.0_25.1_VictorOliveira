import React from 'react';

const LikeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        {...props}
    >
        <path
            d="M19.3717 12.3911L11.9999 20.5L4.62813 12.3911C3.15681 10.7726 3.21603 8.28388 4.76267 6.73724C6.48959 5.01032 9.33419 5.16787 10.8598 7.07493L11.9999 8.50001L13.14 7.07493C14.6656 5.16787 17.5102 5.01032 19.2371 6.73724C20.7838 8.28388 20.843 10.7726 19.3717 12.3911Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default LikeIcon;
