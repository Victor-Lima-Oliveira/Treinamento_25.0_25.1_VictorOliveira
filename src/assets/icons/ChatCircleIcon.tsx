import React from 'react';

const ChatCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        {...props}
    >
        <path
            d="M21 12.5C21 17.4706 16.9706 21.5 12 21.5C10.2289 21.5 8.57736 20.9884 7.18497 20.105L3 21.5L4.39499 17.315C3.51156 15.9226 3 14.2711 3 12.5C3 7.52944 7.02944 3.5 12 3.5C16.9706 3.5 21 7.52944 21 12.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ChatCircle;
