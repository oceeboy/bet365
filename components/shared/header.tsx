/* eslint-disable @next/next/no-img-element */

export function HeaderComp() {
  return (
    <header className="hgr-background min-w-[320px]  h-12 lg:h-17.5 transition-all duration-200 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-3 md:px-4 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <button className="flex items-center cursor-pointer focus:outline-none">
            <img
              src={'/bet365_Logo_Inline.svg'}
              alt="logo"
              className="w-20.25 object-contain box-border"
            />
          </button>
        </div>

        {/* Nav Section (Placeholder for future items) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Add nav links here if needed */}
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-2">
          {/* Rewards Button */}
          <button className="cursor-pointer focus:outline-none">
            <span className="px-3 text-xs font-heading font-bold bg-[#ffffff12] h-8 hover:border-[#00ffb6] border group flex items-center justify-center transition-all duration-200 border-[rgba(0,255,182,0.4)] rounded-full">
              <span className="whitespace-nowrap group-hover:text-[#00ffb6] text-white">
                Rewards
              </span>
            </span>
          </button>

          {/* Balance & Profile Section */}
          <div className="flex items-center ">
            <button className="cursor-pointer focus:outline-none">
              <span className="px-2.5 text-xs font-heading font-bold bg-[#ffffff12] h-8 border group hover:border-[#00ffb6] flex items-center gap-1.5 transition-all duration-200 border-[rgba(0,255,182,0.4)] rounded-full">
                <span className="whitespace-nowrap text-white">£176,000.00</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  className="size-4 text-[#00ffb6]"
                >
                  <circle cx="7" cy="7" r="6.5" stroke="#00ffb6" fill="transparent" />
                  <path fill="#00ffb6" d="M6.563 4.375h1v5.25h-1z" />
                  <path fill="#00ffb6" d="M9.625 6.563v1h-5.25v-1z" />
                </svg>
              </span>
            </button>

            <button className="w-10 h-10 flex items-center transition-all duration-200 relative justify-center cursor-pointer focus:outline-none ">
              <div className=" border rounded-full border-[#28ffbb] transition-all duration-200 ease-in-out opacity-60 hover:opacity-100 absolute size-8" />
              <SumoIcon string="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SumoIcon({ string }: { string: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="size-8">
      <mask id="ui27header-sumo" fill="#fff">
        <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16" />
      </mask>

      <path
        fill="#fff"
        fillOpacity=".05"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16"
      />

      <path
        className="hrm-9a"
        fill={string}
        fillOpacity=".4"
        d="M16 32v-1C7.716 31 1 24.284 1 16h-2c0 9.389 7.611 17 17 17zm16-16h-1c0 8.284-6.716 15-15 15v2c9.389 0 17-7.611 17-17zM16 0v1c8.284 0 15 6.716 15 15h2c0-9.389-7.611-17-17-17zm0 0v-1C6.611-1-1 6.611-1 16h2C1 7.716 7.716 1 16 1z"
        mask="url(#ui27header-sumo)"
      />

      <g clipPath="url(#ui27header-clipsumo)">
        <mask id="ui27header-mask-c" width="30" height="30" x="1" y="1" maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M1 16C1 7.716 7.716 1 16 1s15 6.716 15 15-6.716 15-15 15S1 24.284 1 16"
          />
        </mask>

        <g stroke="#28ffbb" mask="url(#ui27header-mask-c)">
          <circle cx="16" cy="32.364" r="11.773" />
          <circle cx="16" cy="13.273" r="4.955" />
        </g>
      </g>

      <defs>
        <clipPath id="ui27header-clipsumo">
          <path fill="#fff" d="M1 1h30v30H1z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default HeaderComp;
