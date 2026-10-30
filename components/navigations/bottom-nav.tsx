'use client';

import { cn } from 'cn';
import { useRouter, usePathname } from 'next/navigation';

type BottomNavigationItems = {
  activeSvg: React.ReactNode;
  inactiveSvg: React.ReactNode;
  label: string;
  href: string;
};

const gradientId = 'globe-gradient-c';
const filterId = 'globe-filter-a';
const pathId = 'globe-path-b';
const bottom_navigation_items: BottomNavigationItems[] = [
  {
    label: '£176,000.00',
    href: '/home',
    inactiveSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className="size-7"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5.91 10.42 15 4.88l9.09 5.54v14.83h-5.88v-5.76c0-.69-.56-1.24-1.24-1.24h-3.94c-.69 0-1.24.55-1.24 1.24v5.76H5.91V10.42Z" />
          <path d="m3.5 11.88 11.5-7 11.5 7" />
        </g>
      </svg>
    ),
    activeSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <defs>
          <linearGradient id="home-gradient" x1="0%" y1="10%" x2="115%" y2="87%">
            <stop offset="0%" stopColor="#FFDF1B" />
            <stop offset="100%" stopColor="#28FFBB" />
          </linearGradient>

          <filter id="home-shadow" x="-15%" y="-15%" width="130%" height="135%">
            <feGaussianBlur stdDeviation="1" />
          </filter>

          <path
            id="home-shape"
            d="M11.839.12 23.729 7.36a.75.75 0 0 1-.779 1.281l-1.272-.774v14.254h-7.38v-6.508a.492.492 0 0 0-.492-.492H9.872a.492.492 0 0 0-.492.492v6.508H2V7.867l-1.27.774a.75.75 0 0 1-.78-1.281L11.839.12Zm0 1.756L3.5 6.961V20.62h4.379v-5.008c0-1.1.892-1.992 1.992-1.992h3.935c1.1 0 1.992.892 1.992 1.992v5.008h4.379V6.961l-8.339-5.085Z"
          />
        </defs>

        <g transform="translate(3.16 3.88)">
          <use href="#home-shape" fill="#48DBAC" opacity=".5" filter="url(#home-shadow)" />
          <use href="#home-shape" fill="url(#home-gradient)" />
        </g>
      </svg>
    ),
  },
  {
    label: 'All Sports',
    href: '/sports',
    inactiveSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className="size-7"
        fill="none"
      >
        <g
          transform="translate(4.5 4.5)"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10.5" cy="10.5" r="10.5" />
          <path d="M18.075 3.075A10.467 10.467 0 0 0 15 10.5c0 2.9 1.175 5.524 3.075 7.425" />
          <path d="M2.925 3.075A10.467 10.467 0 0 1 6 10.5c0 2.9-1.175 5.524-3.075 7.425" />
        </g>
      </svg>
    ),
    activeSvg: (
      <svg
        width={30}
        height={30}
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="size-7"
      >
        <defs>
          {/* Radial Gradient matching original #FFDF1B to #28FFBB */}
          <radialGradient id={gradientId} cx="0%" cy="0%" fx="0%" fy="0%" r="141.421%">
            <stop stopColor="#FFDF1B" offset="0%" />
            <stop stopColor="#28FFBB" offset="100%" />
          </radialGradient>

          {/* Shadow filter matching precise feColorMatrix RGBA parameters */}
          <filter
            id={filterId}
            x="-13.3%"
            y="-13.3%"
            width="126.7%"
            height="126.7%"
            filterUnits="objectBoundingBox"
          >
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.282352941 0 0 0 0 0.858823529 0 0 0 0 0.674509804 0 0 0 0.499535621 0"
            />
          </filter>

          {/* Shared Globe Geometry Path */}
          <path
            id={pathId}
            d="M10.5-.75c6.213 0 11.25 5.037 11.25 11.25S16.713 21.75 10.5 21.75-.75 16.713-.75 10.5 4.287-.75 10.5-.75Zm0 1.5a9.713 9.713 0 0 0-6.45 2.439 11.201 11.201 0 0 1 2.7 7.311 11.21 11.21 0 0 1-2.7 7.312 9.716 9.716 0 0 0 6.45 2.438 9.713 9.713 0 0 0 6.45-2.439 11.201 11.201 0 0 1-2.7-7.311c0-2.725.974-5.297 2.7-7.312A9.716 9.716 0 0 0 10.5.75ZM18 4.27l-.039.046A9.709 9.709 0 0 0 15.75 10.5c0 2.315.81 4.5 2.25 6.23a9.71 9.71 0 0 0 2.25-6.23A9.71 9.71 0 0 0 18 4.27Zm-15 0-.153.189A9.708 9.708 0 0 0 .75 10.5 9.71 9.71 0 0 0 3 16.73a9.702 9.702 0 0 0 2.25-6.23C5.25 8.185 4.44 6 3 4.27Z"
          />
        </defs>

        <g transform="translate(4.5 4.5)" fillRule="nonzero" fill="none">
          {/* Layer 1: Colored drop shadow */}
          <use
            fill="#000"
            filter={`url(#${filterId})`}
            href={`#${pathId}`}
            xlinkHref={`#${pathId}`}
          />
          {/* Layer 2: White background fallback layer */}
          <use fill="#FFF" href={`#${pathId}`} xlinkHref={`#${pathId}`} />
          {/* Layer 3: Top radial gradient layer */}
          <use fill={`url(#${gradientId})`} href={`#${pathId}`} xlinkHref={`#${pathId}`} />
        </g>
      </svg>
    ),
  },
  {
    label: 'In-Play',
    href: '/in-play',
    inactiveSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="30"
        viewBox="0 0 34 30"
        fill="none"
        className="size-7"
      >
        <g
          transform="translate(4 5.808)"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3.808 0A12.96 12.96 0 0 0 0 9.193c0 3.59 1.455 6.84 3.808 9.192" />
          <path d="M22.192 0A12.96 12.96 0 0 1 26 9.192c0 3.59-1.455 6.84-3.808 9.192" />
          <path d="M7.343 3.536A7.971 7.971 0 0 0 5 9.193c0 2.209.895 4.209 2.343 5.657" />
          <path d="M18.657 3.536A7.975 7.975 0 0 1 21 9.193c0 2.21-.895 4.21-2.343 5.657" />
          <circle cx="13" cy="9.192" r="3" />
        </g>
      </svg>
    ),
    activeSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="30"
        viewBox="0 0 34 30"
        fill="none"
        className="size-7"
      >
        <defs>
          <radialGradient
            id="radar-gradient"
            cx="0%"
            cy="0%"
            r="170.663%"
            gradientTransform="scale(.7231 1) rotate(35.87)"
          >
            <stop offset="0%" stopColor="#FFDF1B" />
            <stop offset="100%" stopColor="#28FFBB" />
          </radialGradient>

          <filter id="radar-shadow" x="-10.9%" y="-15.1%" width="121.8%" height="130.2%">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>

        <g transform="translate(3.25 5.058)" fillRule="nonzero">
          <path
            fill="#48DBAC"
            opacity=".5"
            filter="url(#radar-shadow)"
            d="M5.088.22a.749.749 0 0 1 0 1.06A12.208 12.208 0 0 0 1.5 9.942c0 3.294 1.305 6.38 3.588 8.662a.75.75 0 0 1-1.06 1.061A13.705 13.705 0 0 1 0 9.942C0 6.247 1.466 2.782 4.027.22a.749.749 0 0 1 1.06 0Zm18.385 0A13.707 13.707 0 0 1 27.5 9.942c0 3.696-1.466 7.162-4.027 9.723a.749.749 0 1 1-1.06-1.06A12.214 12.214 0 0 0 26 9.942c0-3.293-1.305-6.379-3.588-8.662a.749.749 0 1 1 1.06-1.06ZM8.623 3.755a.749.749 0 0 1 0 1.06A7.232 7.232 0 0 0 6.5 9.942c0 1.95.772 3.776 2.123 5.127a.749.749 0 1 1-1.06 1.06A8.722 8.722 0 0 1 5 9.942c0-2.351.933-4.557 2.563-6.187a.749.749 0 0 1 1.06 0Zm11.314 0A8.724 8.724 0 0 1 22.5 9.942a8.724 8.724 0 0 1-2.563 6.188.75.75 0 0 1-1.06-1.061A7.229 7.229 0 0 0 21 9.942c0-1.95-.772-3.775-2.123-5.126a.749.749 0 1 1 1.06-1.06ZM13.75 6.192a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 .001-7.501Z"
          />
          <path
            fill="url(#radar-gradient)"
            d="M5.088.22a.749.749 0 0 1 0 1.06A12.208 12.208 0 0 0 1.5 9.942c0 3.294 1.305 6.38 3.588 8.662a.75.75 0 0 1-1.06 1.061A13.705 13.705 0 0 1 0 9.942C0 6.247 1.466 2.782 4.027.22a.749.749 0 0 1 1.06 0Zm18.385 0A13.707 13.707 0 0 1 27.5 9.942c0 3.696-1.466 7.162-4.027 9.723a.749.749 0 1 1-1.06-1.06A12.214 12.214 0 0 0 26 9.942c0-3.293-1.305-6.379-3.588-8.662a.749.749 0 1 1 1.06-1.06ZM8.623 3.755a.749.749 0 0 1 0 1.06A7.232 7.232 0 0 0 6.5 9.942c0 1.95.772 3.776 2.123 5.127a.749.749 0 1 1-1.06 1.06A8.722 8.722 0 0 1 5 9.942c0-2.351.933-4.557 2.563-6.187a.749.749 0 0 1 1.06 0Zm11.314 0A8.724 8.724 0 0 1 22.5 9.942a8.724 8.724 0 0 1-2.563 6.188.75.75 0 0 1-1.06-1.061A7.229 7.229 0 0 0 21 9.942c0-1.95-.772-3.775-2.123-5.126a.749.749 0 1 1 1.06-1.06ZM13.75 6.192a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 .001-7.501Z"
          />
        </g>
      </svg>
    ),
  },
  {
    label: 'My Bets',
    href: '/',
    inactiveSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        className="size-7"
      >
        <g
          transform="translate(4.5 4.5)"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10.5" cy="10.5" r="10.5" />
          <path d="m15.192 7.828-6.362 6.364L6 11.364" />
        </g>
      </svg>
    ),
    activeSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        className="size-7"
      >
        <defs>
          <radialGradient id="check-gradient" cx="0%" cy="0%" r="141.421%">
            <stop offset="0%" stopColor="#FFDF1B" />
            <stop offset="100%" stopColor="#28FFBB" />
          </radialGradient>

          <filter id="check-shadow" x="-13.3%" y="-13.3%" width="126.7%" height="126.7%">
            <feGaussianBlur stdDeviation="1" />
          </filter>

          <path
            id="check-shape"
            d="M10-1.25c6.213 0 11.25 5.037 11.25 11.25S16.213 21.25 10 21.25-1.25 16.213-1.25 10 3.787-1.25 10-1.25Zm0 1.5A9.75 9.75 0 0 0 .25 10 9.75 9.75 0 0 0 10 19.75 9.75 9.75 0 0 0 19.75 10 9.75 9.75 0 0 0 10 .25Zm5.146 6.481.077.067a.749.749 0 0 1 0 1.06l-6.364 6.365a.749.749 0 0 1-1.06 0l-2.83-2.829a.75.75 0 0 1 1.061-1.06l2.298 2.298 5.834-5.834a.752.752 0 0 1 .984-.067Z"
          />
        </defs>

        <g transform="translate(5 5)" fillRule="nonzero">
          <use href="#check-shape" fill="#48DBAC" opacity=".5" filter="url(#check-shadow)" />

          <use href="#check-shape" fill="#FFF" />

          <use href="#check-shape" fill="url(#check-gradient)" />
        </g>
      </svg>
    ),
  },
  {
    label: 'Casino',
    href: '/casino',
    inactiveSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        className="size-7"
      >
        <g transform="translate(1 7.25)" stroke="currentColor" strokeWidth="1.5">
          <rect width="28" height="16" rx="1" />
          <path d="M9.333 0v16M18.667 0v16" />
          <path d="M3-4h21.5M3 20h21.5" strokeLinecap="round" />
        </g>
        <g transform="translate(3.25 12.086)" fill="currentColor">
          <path d="M0 0h.925l.357-.725.403.077.737.512.626.201-1.766 1.61-.357 1.826h2.417l.325-2.115 1.061-2.034.272-1.678h-.806l-.421.55-.431-.185c-.367-.365-.815-.538-1.125-.538-.404 0-.77.137-1.1.41L0 0Z" />
        </g>
        <g transform="translate(12.5 12.086)" fill="currentColor">
          <path d="M0 0h.925l.357-.725.403.077.737.512.626.201-1.766 1.61-.357 1.826h2.417l.325-2.115 1.061-2.034.272-1.678h-.806l-.421.55-.431-.185c-.367-.365-.815-.538-1.125-.538-.404 0-.77.137-1.1.41L0 0Z" />
        </g>
        <g transform="translate(21.75 12.086)" fill="currentColor">
          <path d="M0 0h.925l.357-.725.403.077.738.512.625.201-1.766 1.61-.357 1.826h2.417l.325-2.115 1.061-2.034.272-1.678h-.806l-.421.55-.431-.185c-.367-.365-.815-.538-1.125-.538-.404 0-.77.137-1.1.41L0 0Z" />
        </g>
      </svg>
    ),
    activeSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="currentColor"
        className="size-7"
      >
        <g transform="translate(1 7.25)" stroke="currentColor" strokeWidth="1.5">
          <rect width="28" height="16" rx="1" />
          <path d="M9.333 0v16M18.667 0v16" />
          <path d="M3-4h21.5M3 20h21.5" strokeLinecap="round" />
        </g>
        <g transform="translate(3.25 12.086)" fill="currentColor">
          <path d="M0 0h.925l.357-.725.403.077.737.512.626.201-1.766 1.61-.357 1.826h2.417l.325-2.115 1.061-2.034.272-1.678h-.806l-.421.55-.431-.185c-.367-.365-.815-.538-1.125-.538-.404 0-.77.137-1.1.41L0 0Z" />
        </g>
        <g transform="translate(12.5 12.086)" fill="currentColor">
          <path d="M0 0h.925l.357-.725.403.077.737.512.626.201-1.766 1.61-.357 1.826h2.417l.325-2.115 1.061-2.034.272-1.678h-.806l-.421.55-.431-.185c-.367-.365-.815-.538-1.125-.538-.404 0-.77.137-1.1.41L0 0Z" />
        </g>
        <g transform="translate(21.75 12.086)" fill="currentColor">
          <path d="M0 0h.925l.357-.725.403.077.738.512.625.201-1.766 1.61-.357 1.826h2.417l.325-2.115 1.061-2.034.272-1.678h-.806l-.421.55-.431-.185c-.367-.365-.815-.538-1.125-.538-.404 0-.77.137-1.1.41L0 0Z" />
        </g>
      </svg>
    ),
  },
];

export function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 z-90 md:hidden transition-all duration-200 ease-in w-full box-border bg-[#282828]">
      <div className="grid-auto-cols-[minmax(0,1fr)] grid-flow-col w-full grid justify-self-center max-w-[450px]">
        {bottom_navigation_items.map((item) => {
          const isActive = pathname === item.href;

          return (
            <div
              key={item.label}
              onClick={() => router.push(item.href)}
              className={`self-stretch items-center bg-transparent bg-[position:top_7px_center] bg-no-repeat bg-[length:28px] border-0 text-white flex flex-col text-[10px] font-bold h-[60px] justify-end min-w-[30px] outline-none pb-[10px] text-center transition-colors duration-[250ms] cursor-pointer 
            `}
            >
              {isActive ? item.activeSvg : item.inactiveSvg}
              <span className={cn('mt-1', isActive ? 'text-[#00ffb6]' : 'text-white')}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
