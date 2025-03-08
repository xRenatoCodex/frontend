import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props:React.SVGProps<any>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" height={'auto'} width={'auto'} {...props}>
        <defs>
            <linearGradient
                id=":r7:-1"
                x1="152"
                x2="65.523"
                y1="167.79"
                y2="259.624"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#007867"></stop>
                <stop offset="1" stopColor="#00A76F"></stop>
            </linearGradient>
            <linearGradient
                id=":r7:-2"
                x1="86"
                x2="86"
                y1="128"
                y2="384"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#5BE49B"></stop>
                <stop offset="1" stopColor="#00A76F"></stop>
            </linearGradient>
            <linearGradient
                id=":r7:-3"
                x1="402"
                x2="402"
                y1="288"
                y2="384"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#5BE49B"></stop>
                <stop offset="1" stopColor="#00A76F"></stop>
            </linearGradient>
        </defs>
        <path
            fill="url(#:r7:-1)"
            d="M86.352 246.358c51.159-32.175 75.484-1.341 96.816 39.215q-26.479 48.215-35.036 58.845c-10.759 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704z"
        ></path>
        <path
            fill="url(#:r7:-2)"
            fillRule="evenodd"
            d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.749-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.689 229.584c-3.482 6.106-6.827 11.932-9.689 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.861-5.062-6.206-10.888-9.69-16.994"
            clipRule="evenodd"
        ></path>
        <path
            fill="url(#:r7:-3)"
            fillRule="evenodd"
            d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
            clipRule="evenodd"
        ></path>
    </svg>
);

export default SvgIcon;
