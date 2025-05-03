import React from 'react';

const LogoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        {...props}
    >
        <path
            d="M31.9998 40L39.9998 32M39.9998 32L31.9998 24M39.9998 32L10.6665 32"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M24 18.6667V13.3333C24 11.8606 25.1939 10.6667 26.6667 10.6667H50.6667C52.1394 10.6667 53.3333 11.8606 53.3333 13.3333V50.6667C53.3333 52.1394 52.1394 53.3333 50.6667 53.3333H26.6667C25.1939 53.3333 24 52.1394 24 50.6667V45.3333"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default LogoutIcon;
