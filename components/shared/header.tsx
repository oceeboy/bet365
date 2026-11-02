/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';

export function HeaderComp({ triggerModal }: { triggerModal: () => void }) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };
  return (
    <header className="hgr-background sticky top-0 z-[100] min-w-[320px] h-12 lg:h-17.5 overflow-hidden transition-all duration-200">
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
            <button onClick={triggerModal} className="cursor-pointer focus:outline-none">
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

            <div className="relative">
              <button className="w-12 h-12 flex items-center transition-all duration-200 relative justify-center cursor-pointer focus:outline-none ">
                <div className=" border rounded-full border-[#28ffbb] transition-all duration-200 ease-in-out opacity-60 hover:opacity-100 absolute size-8" />
                <SumoIcon string="" />
              </button>
              <div className="fixed top-12 right-0 bottom-0 left-0 z-[98] bg-black/60">
                <div
                  className="fixed top-12 right-0 z-[99] inline-block
  w-full max-w-[375px] max-h-screen
  overflow-x-hidden overflow-y-auto
  overscroll-none
  rounded-none
  bg-[#f8f9fa]
  text-left
  shadow-[0_2px_10px_0_rgba(0,0,0,0.5)]
  transform-gpu
  transition-transform duration-150"
                >
                  <div>
                    <div className="w-full">
                      <div className="inline-flex w-full whitespace-nowrap text-[15px] leading-[17px] pt-5 pr-2.5 pl-[15px]">
                        <div className="flex pr-5">
                          <div className="inline-block align-top text-[#404040]">
                            <div>
                              <span className="block w-full text-[#404040] text-xs leading-4.25">
                                Ryanpicks33
                              </span>
                              <span className="inline-flex w-full leading-[23px]">
                                <span className="  text-[#404040] text-xl  leading-[23px] font-bold pr-[5px] inline-block ">
                                  $8.56
                                </span>
                                <div className="relative flex h-10 w-[18px] cursor-pointer items-center self-center">
                                  <span
                                    onClick={handleClick}
                                    className={`absolute  -top-2 -right-[11px] flex size-10 items-center justify-center ${
                                      isAnimating ? 'animate-[zsa-43_1s_linear]' : ''
                                    }`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                    >
                                      <g fill="none" fillRule="evenodd">
                                        <path d="M0 0h18v18H0z" />

                                        <path
                                          fill="#333"
                                          fillRule="nonzero"
                                          d="M9 15a6 6 0 1 1 6-6h-1a5 5 0 1 0-5 5v1Zm7.375-6.997-1.256 1.566c-.381.436-.84.446-1.222-.007L12.619 8 12 8.787l1.282 1.566c.73.872 1.719.85 2.449.012L17 8.785l-.625-.782Z"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-[15px] mb-[0.938rem] ml-auto min-w-[120px] text-right">
                          <button
                            className="flex h-11 min-w-[90px] flex-[0_1_auto] flex-col items-center justify-center rounded-[5px] border border-[#c3c3c3] bg-[#FAFBFC] px-3 py-1.5 text-[11px] leading-[14px] font-bold text-[#404040] cursor-pointer 
                          

  before:content-['']

  before:block

  before:h-[13px]

  before:w-3

  before:mb-1

  before:shrink-0

  before:bg-[#126e51]

  before:[mask-image:var(--icon-depositArrows)]

  before:[-webkit-mask-image:var(--icon-depositArrows)]

  before:[mask-repeat:no-repeat]

  before:[-webkit-mask-repeat:no-repeat]

  before:[mask-position:center]

  before:[-webkit-mask-position:center]

  before:scale-y-[-1]
                          "
                          >
                            Withdraw
                          </button>
                          <button
                            className="
  flex
  h-11
  min-w-[90px]
  flex-1
  flex-col
  items-center
  justify-center
  rounded-[5px]
  border
  border-[#58d7af]
  bg-[rgba(88,215,175,0.35)]
  px-3
  py-1.5
  text-[11px]
  leading-[14px]
  font-bold
  text-[#282828]
  cursor-pointer

  before:content-['']

  before:block

  before:h-[13px]

  before:w-3

  before:mb-1

  before:shrink-0

  before:bg-[#282828]

  before:[mask-image:var(--icon-depositArrows)]

  before:[-webkit-mask-image:var(--icon-depositArrows)]

  before:[mask-repeat:no-repeat]

  before:[-webkit-mask-repeat:no-repeat]

  before:[mask-position:center]

  before:[-webkit-mask-position:center]
"
                          >
                            Deposit
                          </button>
                        </div>
                      </div>
                      <div className="w-full border-b border-[#d4d4d4] px-[15px] pb-[5px] text-[#404040]">
                        <div className="relative flex">
                          <div className="flex flex-col">
                            <div
                              className="  inline-block

  pr-[50px]

  min-[375px]:pr-[70px]

  first:mt-0

  last:my-[10px]"
                            >
                              <div className="whitespace-nowrap text-[11px] leading-[17px] text-[#404040]">
                                Withdrawable
                              </div>
                              <div className="text-[15px] leading-5 font-bold text-[#404040]">
                                $8.56
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              className="  inline-block

  pr-[50px]

  min-[375px]:pr-[70px]

  first:mt-0

  last:my-[10px]"
                            >
                              <div className="whitespace-nowrap text-[11px] leading-[17px] text-[#404040]">
                                Bet Credits
                              </div>
                              <div className="text-[15px] leading-5 font-bold text-[#404040]">
                                $0.00
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex h-[51px] overflow-hidden border-b-0 bg-[#f3f5f4]">
                      <div className="relative flex h-full w-full bg-[#f3f5f4]">
                        <div className="h-[3.188rem] w-full overflow-hidden">
                          <div className="absolute hidden top-0 z-[2] flex h-[49px] w-10 cursor-pointer items-center justify-center bg-[#f3f5f4] " />
                          <div className="relative mr-[15px] h-full overflow-x-auto overflow-y-hidden [scrollbar-width:none]">
                            <div className="flex h-full items-center whitespace-nowrap">
                              <div className="h-full whitespace-nowrap mr-[25px] ml-[15px]">
                                <div className="relative inline-flex w-full h-full min-w-10 items-center justify-center align-middle text-[13px] leading-[33px] font-bold text-[#282828] cursor-pointer">
                                  <div className="whitespace-nowrap  text-[#282828]">Account</div>
                                </div>
                              </div>
                              <div className="h-full whitespace-nowrap mr-[25px] ">
                                <div className="relative inline-flex w-full h-full min-w-10 items-center justify-center align-middle text-[13px] leading-[33px]  text-[#282828] cursor-pointer">
                                  <div className="whitespace-nowrap  text-[#282828] hover:text-[#666] transition-all ease-in-out">
                                    Alerts
                                  </div>
                                </div>
                              </div>
                              <div className="h-full whitespace-nowrap mr-[25px] ">
                                <div className="relative inline-flex w-full h-full min-w-10 items-center justify-center align-middle text-[13px] leading-[33px]  text-[#282828] cursor-pointer">
                                  <div className="whitespace-nowrap  text-[#282828] hover:text-[#666] transition-all ease-in-out">
                                    Preferences
                                  </div>
                                </div>
                              </div>

                              <div className="absolute bottom-0 z-[1] h-0.5 w-[53.6172px] bg-[#58d7af] left-[15px] transition-all duration-300 ease-in-out" />
                            </div>
                          </div>
                          <div className="absolute hidden top-0 right-0 z-[2] flex h-[49px] w-10 cursor-pointer items-center justify-center bg-[#f3f5f4]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
