'use client';

import { cn } from 'cn';
import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
export function OpenTicketCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleState() {
    setIsOpen(!isOpen);
  }

  return (
    <div className=" box-border relative overflow-hidden rounded-[8px] border-2 border-transparent mb-2.5 bg-linear-to-br from-[#303d39] to-[#353535]">
      <div className="relative cursor-pointer overflow-hidden rounded-lg outline-none">
        <div
          onClick={toggleState}
          className="flex justify-between text-white items-center h-13.75 relative box-border"
        >
          <div className=" flex cursor-pointer flex-1 flex-wrap items-baseline self-center gap-x-2 overflow-hidden pl-3.75 ">
            <span className="shrink-0 text-[#00ffb6] text-[15px] font-bold leading-5.75">
              $300.00
            </span>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap shrink-0 text-[#00ffb6] text-[15px] font-bold leading-[23px]">
              Double
            </span>
            <span
              className={cn(
                'min-w-0 flex-1 basis-0 text-[#ddd] text-[11px] leading-[23px] ml-0 mr-auto pr-[10px] overflow-hidden text-ellipsis whitespace-nowrap transition-opacity duration-300 ease-in-out',
                isOpen ? 'opacity-0' : 'opacity-100',
              )}
            >
              Worthing 2-1 , Draw 2-2{' '}
            </span>
          </div>
          <div className=" hidden cursor-pointer">
            <div>
              <span className="flex flex-col items-center justify-center h-8 min-w-[85px] max-w-[140px] rounded-2xl bg-[#4f4f4f] px-3">
                <span className="text-xs whitespace-nowrap box-border font-bold text-center text-[#48dbac] block">
                  Cashed Out
                </span>
                <span className="text-xs whitespace-nowrap box-border font-bold text-center text-[#48dbac] block">
                  $0.10
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="animation to make the content visible when clicked"> */}
      <div
        className={cn(
          'grid transition-[grid-template-rows,opacity] ease-in-out duration-300',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
        aria-hidden={!isOpen}
      >
        {/* This wrapper is required: min-h-0 + overflow-hidden lets the row collapse to 0 */}
        <div className="min-h-0 overflow-hidden">
          <div className="block relative box-border ">
            <div className=" box-border pb-3.75 flex flex-col">
              <div className="relative flex w-full flex-col items-center justify-center px-[15px]">
                <div className="flex w-full items-center justify-center gap-[5px] box-border">
                  <div className="min-w-0  flex-1">
                    {/* hidden cause of the open bet need it.. for the reuse selection bttn */}
                    <button className="flex h-[35px] w-full cursor-pointer items-center justify-center gap-[5px] rounded-[3px] border-0 bg-[#ffffff12] shadow-none">
                      <div className="ml-[10px] flex h-[15px] min-w-[15px] w-[15px] items-center justify-center text-[#e4e4e4]">
                        <svg
                          width="15"
                          height="23"
                          viewBox="0 0 15 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-4"
                        >
                          <path
                            d="M8 0V3.5H6.66513C5.57556 3.5 4.50647 3.79612 3.57216 4.3567C2.86495 4.78103 2.25262 5.34633 1.77325 6.01745L1.51605 6.37752C0.530048 7.75793 0 9.41193 0 11.1083V15L2.5 12.5V10.5534C2.5 9.25227 3.07791 8.01841 4.07743 7.18547C4.99662 6.41949 6.15526 6 7.35177 6H8V8.5L12 4.5L8 0Z"
                            fill="currentColor"
                          />
                          <path
                            d="M7 22.5V19H8.33487C9.42444 19 10.4935 18.7039 11.4278 18.1433C12.135 17.719 12.7474 17.1537 13.2267 16.4826L13.4839 16.1225C14.47 14.7421 15 13.0881 15 11.3917V7.5L12.5 10V11.9466C12.5 13.2477 11.9221 14.4816 10.9226 15.3145C10.0034 16.0805 8.84474 16.5 7.64823 16.5H7V14L3 18L7 22.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>

                      <p className="mr-[10px] line-clamp-2 overflow-hidden break-words text-[12px] leading-[15px] font-bold text-[#e4e4e4] max-h-[30px]">
                        Reuse Selections
                      </p>
                    </button>
                  </div>
                  <div className="min-w-0 flex-1">
                    <button className="flex h-[35px] w-full cursor-pointer items-center justify-center gap-[5px] rounded-[3px] border-0 bg-[#ffffff12] shadow-none">
                      <div className="ml-[10px] flex h-[15px] min-w-[15px] w-[15px] items-center justify-center text-[#e4e4e4]">
                        <svg
                          width="12"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                        >
                          {/* Calendar outline */}
                          <path
                            fill="currentColor"
                            transform="translate(0 5.11612)"
                            fillRule="evenodd"
                            d="M3.5 1.5L2.5 1.5C1.9477153 1.5 1.5 1.9477153 1.5 2.5L1.5 7.5C1.5 8.0522852 1.9477153 8.5 2.5 8.5L9.5 8.5C10.052285 8.5 10.5 8.0522852 10.5 7.5L10.5 2.5C10.5 1.9477153 10.052285 1.5 9.5 1.5L8.5 1.5L8.5 0L10 0C11.104569 0 12 0.89543051 12 2L12 8C12 9.1045694 11.104569 10 10 10L2 10C0.89543051 10 0 9.1045694 0 8L0 2C0 0.89543051 0.89543051 2.220446e-16 2 0L3.5 0L3.5 1.5Z"
                          />

                          {/* Upload arrow */}
                          <path
                            fill="currentColor"
                            transform="translate(2.96967 0.323226)"
                            fillRule="evenodd"
                            d="M2.6767766 0.14644662C2.8720388 -0.048815537 3.1886213 -0.048815537 3.3838835 0.14644662L5.9053302 2.6678932C6.1124368 2.875 6.1124368 3.2107863 5.9053302 3.4178932C5.6982231 3.625 5.3624368 3.625 5.1553302 3.4178932L3.53 1.7920001L3.5303302 8.2928934C3.5303302 8.5690355 3.3064725 8.7928934 3.0303302 8.7928934C2.7541878 8.7928934 2.5303302 8.5690355 2.5303302 8.2928934L2.53 1.7920001L0.90533006 3.4178932C0.72123516 3.6019881 0.43546745 3.6224432 0.22877856 3.4792583L0.15533009 3.4178932C-0.051776696 3.2107863 -0.051776696 2.875 0.15533009 2.6678932L2.6767766 0.14644662Z"
                          />

                          {/* Arrow outline */}
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            strokeMiterlimit="10"
                            transform="translate(2.96967 0.323226)"
                            fillRule="evenodd"
                            d="M2.6767766 0.14644662C2.8720388 -0.048815537 3.1886213 -0.048815537 3.3838835 0.14644662L5.9053302 2.6678932C6.1124368 2.875 6.1124368 3.2107863 5.9053302 3.4178932C5.6982231 3.625 5.3624368 3.625 5.1553302 3.4178932L3.53 1.7920001L3.5303302 8.2928934C3.5303302 8.5690355 3.3064725 8.7928934 3.0303302 8.7928934C2.7541878 8.7928934 2.5303302 8.5690355 2.5303302 8.2928934L2.53 1.7920001L0.90533006 3.4178932C0.72123516 3.6019881 0.43546745 3.6224432 0.22877856 3.4792583L0.15533009 3.4178932C-0.051776696 3.2107863 -0.051776696 2.875 0.15533009 2.6678932L2.6767766 0.14644662Z"
                          />
                        </svg>
                      </div>

                      <p className="mr-[10px] line-clamp-2 overflow-hidden break-words text-[12px] leading-[15px] font-bold text-[#e4e4e4] max-h-[30px]">
                        Share
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-y-[5px] px-[15px] pt-[10px] pb-[15px] relative [--ruc-fixture-fallback-indent:16px] box-border relative after:content-[''] after:absolute after:bottom-0 after:left-[10px] after:right-[10px] after:h-px after:bg-[#ffffff1a] not-last:after:content-['']">
                  <div className="flex items-start box-border">
                    <div className="self-stretch   flex-[0_0_16px] min-h-[20px] block box-border">
                      <span
                        className="

  flex

  relative

  h-[20px]

  w-[22px]

  flex-[0_0_22px]

  bg-no-repeat

  items-center 
  bg-[position:50%]

  bg-[size:13px_13px]

  animate-[ruc-27a020_0.5s]

"
                      >
                        <span className="w-2 h-2 border-1 ml-1 rounded-full border-[#ffffffcc]"></span>
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-1 min-w-0 [unicode-bidi:isolate] box-border">
                      <div className="flex gap-x-[10px]  justify-start">
                        <span className="text-[14px] leading-[20px] flex-[0_1_auto] font-bold min-w-0 whitespace-normal break-words box-border">
                          Worthing 2-1
                        </span>
                        <span className="flex-[0_0_auto] mr-[5px] whitespace-nowrap text-[14px] leading-[20px] text-[var(--color-greyFF)] box-border">
                          11.00
                        </span>
                      </div>
                      <div className="[-webkit-box-orient:vertical] line-clamp-2 wrap-break-word [display:-webkit-box] text-[11px] leading-3.25 max-h-6.5 overflow-hidden [word-break:break-word] text-[#ffffffcc]">
                        Correct Score
                      </div>
                    </div>
                  </div>
                  <div className="ml-6.25 w-[calc(100%-25px)] self-stretch flex box-border"></div>
                  <div className="flex w-full flex-col box-border [unicode-bidi:isolate]">
                    <div className="mb-1.25 flex items-center box-border [unicode-bidi:isolate]">
                      <div className="inline-flex flex-[0_0_auto] items-center mr-1.25 box-border [unicode-bidi:isolate]">
                        <div className="relative inline-flex h-4 w-4 items-center box-border [unicode-bidi:isolate]">
                          <img
                            src={'/Worthing_Home_2026_27.svg'}
                            alt=""
                            className="h-full w-full box-border [overflow-clip-margin:content-box] overflow-clip [-webkit-user-drag:none]"
                          />
                        </div>
                      </div>
                      <span className="flex flex-1 items-center min-h-5 mr-1.25 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] leading-[13px] font-semibold text-[var(--color-greyFF)] box-border">
                        Worthing
                      </span>
                      <span className="flex-[0_0_auto] hidden bg-[#4f4f4f] rounded-xs px-1.5 py-px text-white text-[11px] font-bold h-5 leading-4 min-w-5.25 text-center box-border">
                        3
                      </span>
                      <span className="text-[11px] leading-[13px] text-[#ffffffcc] font-semibold ">
                        Mon 26 Oct
                      </span>
                    </div>
                    <div className=" flex items-center box-border [unicode-bidi:isolate]">
                      <div className="inline-flex flex-[0_0_auto] items-center mr-1.25 box-border [unicode-bidi:isolate]">
                        <div className="relative inline-flex h-4 w-4 items-center box-border [unicode-bidi:isolate]">
                          <img
                            src={'/Southend_United_Home_Front_26_27.svg'}
                            alt=""
                            className="h-full w-full box-border [overflow-clip-margin:content-box] overflow-clip [-webkit-user-drag:none]"
                          />
                        </div>
                      </div>
                      <span className="flex flex-1 items-center min-h-5 mr-1.25 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] leading-[13px] font-semibold text-[var(--color-greyFF)] box-border">
                        Southend
                      </span>
                      <span className="flex-[0_0_auto] hidden bg-[#4f4f4f] rounded-xs px-1.5 py-px text-white text-[11px] font-bold h-5 leading-4 min-w-5.25 text-center box-border">
                        3
                      </span>
                      <span className="text-[11px] leading-[13px] text-[#ffffffcc] font-semibold ">
                        18:30
                      </span>
                    </div>
                  </div>
                  <div className="ml-6.25 w-[calc(100%-25px)] self-stretch flex box-border"></div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-y-[5px] px-[15px] pt-[10px] pb-[15px] relative [--ruc-fixture-fallback-indent:16px] box-border">
                  <div className="flex items-start box-border">
                    <div className="self-stretch   flex-[0_0_16px] min-h-[20px] block box-border">
                      <span
                        className="

  flex

  relative

  h-[20px]

  w-[22px]

  flex-[0_0_22px]

  bg-no-repeat

  items-center 
  bg-[position:50%]

  bg-[size:13px_13px]

  animate-[ruc-27a020_0.5s]

"
                      >
                        <span className="w-2 h-2 border-1 ml-1 rounded-full border-[#ffffffcc]"></span>
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-1 min-w-0 [unicode-bidi:isolate] box-border">
                      <div className="flex gap-x-[10px]  justify-start">
                        <span className="text-[14px] leading-[20px] flex-[0_1_auto] font-bold min-w-0 whitespace-normal break-words box-border">
                          Draw 2-2
                        </span>
                        <span className="flex-[0_0_auto] mr-[5px] whitespace-nowrap text-[14px] leading-[20px] text-[var(--color-greyFF)] box-border">
                          11.00
                        </span>
                      </div>
                      <div className="[-webkit-box-orient:vertical] line-clamp-2 wrap-break-word [display:-webkit-box] text-[11px] leading-3.25 max-h-6.5 overflow-hidden [word-break:break-word] text-[#ffffffcc]">
                        Correct Score
                      </div>
                    </div>
                  </div>
                  <div className="ml-6.25 w-[calc(100%-25px)] self-stretch flex box-border"></div>
                  <div className="flex w-full flex-col box-border [unicode-bidi:isolate]">
                    <div className="mb-1.25 flex items-center box-border [unicode-bidi:isolate]">
                      <div className="inline-flex flex-[0_0_auto] items-center mr-1.25 box-border [unicode-bidi:isolate]">
                        <div className="relative inline-flex h-4 w-4 items-center box-border [unicode-bidi:isolate]">
                          <img
                            src={'/Tamworth_Home_2627_front.svg'}
                            alt=""
                            className="h-full w-full box-border [overflow-clip-margin:content-box] overflow-clip [-webkit-user-drag:none]"
                          />
                        </div>
                      </div>
                      <span className="flex flex-1 items-center min-h-5 mr-1.25 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] leading-[13px] font-semibold text-[var(--color-greyFF)] box-border">
                        Tamworth
                      </span>
                      <span className="flex-[0_0_auto] hidden bg-[#4f4f4f] rounded-xs px-1.5 py-px text-white text-[11px] font-bold h-5 leading-4 min-w-5.25 text-center box-border">
                        4
                      </span>
                      <span className="text-[11px] leading-[13px] text-[#ffffffcc] font-semibold ">
                        Mon 26 Oct
                      </span>
                    </div>
                    <div className=" flex items-center box-border [unicode-bidi:isolate]">
                      <div className="inline-flex flex-[0_0_auto] items-center mr-1.25 box-border [unicode-bidi:isolate]">
                        <div className="relative inline-flex h-4 w-4 items-center box-border [unicode-bidi:isolate]">
                          <img
                            src={
                              'https://content001.bet365.com/SoccerSilks/RealMadrid_Home_Front_2627.svg'
                            }
                            alt=""
                            className="h-full w-full box-border [overflow-clip-margin:content-box] overflow-clip [-webkit-user-drag:none]"
                          />
                        </div>
                      </div>
                      <span className="flex flex-1 items-center min-h-5 mr-1.25 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] leading-[13px] font-semibold text-[var(--color-greyFF)] box-border">
                        Scunthorpe
                      </span>
                      <span className="flex-[0_0_auto] hidden bg-[#4f4f4f] rounded-xs px-1.5 py-px text-white text-[11px] font-bold h-5 leading-4 min-w-5.25 text-center box-border">
                        1
                      </span>
                      <span className="text-[11px] leading-[13px] text-[#ffffffcc] font-semibold ">
                        18:30
                      </span>
                    </div>
                  </div>
                  <div className="ml-6.25 w-[calc(100%-25px)] self-stretch flex box-border"></div>
                </div>
              </div>

              <div className="flex  flex-wrap items-center w-full pt-3.75 box-border   min-[590px]:border-t   min-[590px]:border-[#ffffff1a]   min-[590px]:flex-nowrap ">
                <div
                  className="
  box-border
  self-start
  flex-[1_0_50%]
  px-3.75

  items-start

  min-[590px]:flex-[1_1_25%]

  min-[950px]:flex-[1_1_33.333%]
"
                >
                  <div className="flex flex-col text-white">
                    <span className="text-white text-[12px] leading-3.5 opacity-60 pb-0.5 whitespace-nowrap">
                      Stake
                    </span>
                    <span className="text-[17px] font-semibold leading-5 text-white ">$300.00</span>
                  </div>
                </div>
                <div
                  className="

  box-border

  flex

  flex-[1_0_50%]

  flex-col

  items-end

  px-3.75

  min-[590px]:flex-[1_1_25%]

  min-[590px]:self-start

  min-[590px]:items-start
min-[950px]:flex-[1_1_33.333%]
"
                >
                  <div className="flex flex-col text-white">
                    <span className="text-[#fff] text-[12px] leading-3.5 opacity-60 pb-0.5 whitespace-nowrap">
                      To Return
                    </span>
                    <div className="flex items-baseline gap-2 whitespace-nowrap box-border ">
                      <span className="text-[17px] font-semibold leading-5 text-[#fff] ">
                        $60,670.00
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="

  flex-[1_0_100%]

  -mb-3.75

  mt-3.75

  min-[590px]:flex

  min-[590px]:flex-[1_1_50%]

  min-[590px]:justify-end

  min-[590px]:my-0

  min-[590px]:px-3.75

  min-[950px]:flex-[1_1_33.333%]

"
                >
                  <div className="flex w-full h-11.25 box-border cursor-default items-center justify-center rounded-[5px] bg-[#008F5A] px-[10px]">
                    <div className="box-border flex-row-reverse flex flex-wrap items-center justify-center gap-x-2.5">
                      <span className="text-[#fff] text-[15px] font-bold leading-4.5">$300.10</span>
                      <span className="text-[#fff] text-[15px] font-bold leading-4.5">
                        Cash Out
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
