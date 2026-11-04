/* eslint-disable @next/next/no-img-element */
'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useId, useState } from 'react';

type ActionTabs = 'account' | 'alerts' | 'preferences';

export function HeaderComp({ triggerModal }: { triggerModal: () => void }) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState<ActionTabs>('preferences');
  const [winningBetsAlert, setWinningBetsAlert] = useState<boolean>(false);
  const [freeBetsAlert, setFreeBetsAlert] = useState<boolean>(false);
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const [allowOddsChange, setAllowOddsChange] = useState<boolean>(false);

  //

  const [showLangauageOptions, setShowLanguageOptions] = useState<boolean>(false);
  const [showTimezoneOptions, setShowTimezoneOptions] = useState<boolean>(false);
  const [showInactivityOptions, setShowInactivityOptions] = useState<boolean>(false);

  //
  const [showPasscodeOptions, setShowPasscodeOptions] = useState<boolean>(false);
  const [showGamingLink, setShowGamingLink] = useState<boolean>(false);

  const [isDeviceMobile, setIsDeviceMobile] = useState<boolean>(true);
  const underlineId = useId();
  const handleClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    function toggleProfileVisibility() {
      setIsVisible((prev) => !prev);
    }
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
            <button
              onClick={() => {
                triggerModal();
                setIsVisible(false);
              }}
              className="cursor-pointer focus:outline-none"
            >
              <span
                className={cn(
                  'px-2.5 text-xs font-heading font-bold bg-[#ffffff12] h-8 border group hover:border-[#00ffb6] flex items-center gap-1.5 transition-all duration-200 border-[rgba(0,255,182,0.4)] rounded-full',
                  isVisible && 'border-[#00ffb6]',
                )}
              >
                <span className={cn('whitespace-nowrap text-white', isVisible && 'text-[#00ffb6]')}>
                  £176,000.00
                </span>
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
              <button
                type="button"
                onClick={() => setIsVisible((prev) => !prev)}
                className="w-12 h-12 flex items-center transition-all duration-200 relative justify-center cursor-pointer focus:outline-none "
              >
                <div
                  className={cn(
                    ' border rounded-full border-[#28ffbb] transition-all duration-200 ease-in-out opacity-60 hover:opacity-100 absolute size-8',
                    isVisible && ' border-[#28ffbb] opacity-100',
                  )}
                />
                <SumoIcon string="" />
              </button>
              <div
                className={cn(
                  'fixed top-12 right-0 bottom-0 left-0 z-[98] bg-black/60',
                  !isVisible && 'pointer-events-none bg-transparent',
                )}
                onClick={() => setIsVisible(false)}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    `fixed top-12 right-0 z-[9991] inline-block
  w-full max-w-[375px] max-h-screen
  overflow-x-hidden overflow-y-auto
  overscroll-none
  rounded-none
  bg-[#f8f9fa]
  text-left
  shadow-[0_2px_10px_0_rgba(0,0,0,0.5)]
  transform-gpu
  transition-transform duration-150`,
                    !isVisible && 'hidden',
                  )}
                >
                  <div>
                    <div className="overflow-hidden overflow-y-auto max-h-[calc(100vh-208px)]">
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
  hover:bg-white
  hover:text-[#126e51]
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
  hover:bg-[rgba(88,215,175,0.6)]
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
                        <div className="relative flex h-full w-full bg-[#f3f5f4] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#e4e4e4] after:content-['']">
                          <div className="h-[3.188rem] w-full overflow-hidden">
                            <div className="absolute hidden top-0 z-[2] flex h-[49px] w-10 cursor-pointer items-center justify-center bg-[#f3f5f4] " />
                            <div className="relative mr-[15px] h-full overflow-x-auto overflow-y-hidden [scrollbar-width:none]">
                              <div className="flex h-full items-center whitespace-nowrap">
                                {/* Account */}
                                <div className="h-full whitespace-nowrap mr-[25px] ml-[15px]">
                                  <div
                                    onClick={() => setActiveTab('account')}
                                    className={cn(
                                      'relative inline-flex w-full h-full min-w-10 items-center justify-center align-middle text-[13px] leading-[33px] text-[#282828] cursor-pointer',
                                      activeTab === 'account' && 'font-bold',
                                    )}
                                  >
                                    <div
                                      className={cn(
                                        'whitespace-nowrap text-[#282828] transition-colors ease-in-out',
                                        activeTab !== 'account' && 'hover:text-[#666]',
                                      )}
                                    >
                                      Account
                                    </div>
                                    {activeTab === 'account' && !isDeviceMobile && (
                                      <motion.div
                                        layoutId={underlineId}
                                        className="absolute bottom-0 left-0 right-0 z-[1] h-0.5 bg-[#58d7af]"
                                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                      />
                                    )}
                                  </div>
                                </div>

                                {/* Alerts */}

                                {!isDeviceMobile && (
                                  <div className="h-full whitespace-nowrap mr-[25px]">
                                    <div
                                      onClick={() => setActiveTab('alerts')}
                                      className={cn(
                                        'relative inline-flex w-full h-full min-w-10 items-center justify-center align-middle text-[13px] leading-[33px] text-[#282828] cursor-pointer',
                                        activeTab === 'alerts' && 'font-bold',
                                      )}
                                    >
                                      <div
                                        className={cn(
                                          'whitespace-nowrap text-[#282828] transition-colors ease-in-out',
                                          activeTab !== 'alerts' && 'hover:text-[#666]',
                                        )}
                                      >
                                        Alerts
                                      </div>
                                      {activeTab === 'alerts' && !isDeviceMobile && (
                                        <motion.div
                                          layoutId={underlineId}
                                          className="absolute bottom-0 left-0 right-0 z-[1] h-0.5 bg-[#58d7af]"
                                          transition={{
                                            type: 'spring',
                                            stiffness: 500,
                                            damping: 35,
                                          }}
                                        />
                                      )}
                                    </div>
                                  </div>
                                )}

                                {/* Preferences */}
                                <div className="h-full whitespace-nowrap mr-[25px]">
                                  <div
                                    onClick={() => setActiveTab('preferences')}
                                    className={cn(
                                      'relative inline-flex w-full h-full min-w-10 items-center justify-center align-middle text-[13px] leading-[33px] text-[#282828] cursor-pointer',
                                      activeTab === 'preferences' && 'font-bold',
                                    )}
                                  >
                                    <div
                                      className={cn(
                                        'whitespace-nowrap text-[#282828] transition-colors ease-in-out',
                                        activeTab !== 'preferences' && 'hover:text-[#666]',
                                      )}
                                    >
                                      Preferences
                                    </div>
                                    {activeTab === 'preferences' && !isDeviceMobile && (
                                      <motion.div
                                        layoutId={underlineId}
                                        className="absolute bottom-0 left-0 right-0 z-[1] h-0.5 bg-[#58d7af]"
                                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                      />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute hidden top-0 right-0 z-[2] flex h-[49px] w-10 cursor-pointer items-center justify-center bg-[#f3f5f4]" />
                          </div>
                        </div>
                      </div>

                      {activeTab === 'account' && (
                        <div className="">
                          <div className="flex flex-wrap">
                            <div className="flex flex-wrap items-end justify-around w-full bg-[#F3F5F4] pt-5 pr-0 pb-2.5 pl-[5px]">
                              <div className="bank-button relative flex flex-[1_0_31%] flex-col items-center min-w-[100px] max-w-[31%] min-h-[92px] mr-[5px] pt-0 pb-5 cursor-pointer text-center text-[11px] leading-[17px] font-bold text-[#505050]">
                                <div className="flex h-[39px] items-end justify-center mb-[5px]">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="34"
                                      height="31"
                                      viewBox="0 0 34 31"
                                      className="flex h-[39px] items-end justify-center mb-[5px]"
                                      aria-hidden="true"
                                    >
                                      <g fill="none" fillRule="evenodd">
                                        {/* animated top band */}
                                        <path
                                          className="bank-inside"
                                          d="M27.5.518v5.982h-27v-2.5c.506-.53.9-.719 1.418-.904 1.145-.409 2.863-.774 5.153-1.101 4.568-.653 11.378-1.144 20.429-1.477h0z"
                                          stroke="#9C9C9C"
                                          fill="#EEF0F0"
                                        />
                                        {/* body */}
                                        <path
                                          d="M.5 5.569c3.226.34 13.432.485 30.903.497h0l1.286.001h.811v24.433h-30.5c-.69 0-1.315-.28-1.768-.732a2.492 2.492 0 0 1-.732-1.768h0z"
                                          stroke="#9C9C9C"
                                          fill="#FDFFFF"
                                        />
                                        {/* clasp pocket */}
                                        <path
                                          d="M33.471 16.25v6.314h-7.814a3.147 3.147 0 0 1-2.232-.924 3.147 3.147 0 0 1-.925-2.233c0-.872.353-1.661.925-2.232a3.147 3.147 0 0 1 2.232-.925h7.814z"
                                          stroke="#9C9C9C"
                                          fill="#FDFFFF"
                                        />
                                        {/* clasp dot */}
                                        <path
                                          d="M25.329 19h8.642v1h-8.641a.5.5 0 0 1 0-1z"
                                          fill="#9C9C9C"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <span className="w-full cursor-pointer break-words text-center text-[11px] font-bold leading-[17px] text-[#505050]">
                                  Bank
                                </span>
                              </div>
                              <div className=" message-button relative flex flex-[1_0_31%] flex-col items-center min-w-[100px] max-w-[31%] min-h-[92px] mr-[5px] pt-0 pb-5 cursor-pointer text-center text-[11px] leading-[17px] font-bold text-[#505050]">
                                <div className="flex h-[39px] items-end justify-center mb-[5px]">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width="36"
                                      height="25"
                                      viewBox="0 0 36 25"
                                      className="flex h-[39px] items-end justify-center mb-[5px]"
                                      aria-hidden="true"
                                    >
                                      <defs>
                                        <path
                                          d="m3.007.001 29.993.013a3.004 3.004 0 0 1 3 3v18.986a3 3 0 0 1-3 3h-29.961a3 3 0 0 1-3-2.995l-.034-18.998a3 3 0 0 1 3.002-3.007z"
                                          id="messagingUseA"
                                        />
                                      </defs>
                                      <g fill="none" fillRule="evenodd">
                                        <mask id="messagingMaskB" fill="#fff">
                                          <use xlinkHref="#messagingUseA" />
                                        </mask>

                                        {/* envelope outline */}
                                        <path
                                          stroke="#9C9C9C"
                                          fill="#FDFFFF"
                                          d="m3 .501 30 .013a2.501 2.501 0 0 1 2.5 2.501h0v18.985c0 .69-.28 1.315-.732 1.768a2.492 2.492 0 0 1-1.768.732h0-29.961c-.69 0-1.314-.28-1.766-.73a2.492 2.492 0 0 1-.734-1.766h0l-.034-18.998a2.492 2.492 0 0 1 .73-1.77 2.492 2.492 0 0 1 1.765-.734h0z"
                                        />
                                        <path
                                          d="m0 2 15.882 15.186c1.06 1.085 3.177 1.085 4.236 0l15.882-15.186h-36z"
                                          stroke="#EEF0F0"
                                          strokeWidth="2"
                                          fill="#FDFFFF"
                                          mask="url(#messagingMaskB)"
                                        />
                                        <path
                                          d="m0 2 18 17 18-17h-36z"
                                          fill="#EEF0F0"
                                          mask="url(#messagingMaskB)"
                                        />

                                        {/* static masked wrapper; only the inner flap animates */}
                                        <g mask="url(#messagingMaskB)">
                                          <path
                                            className="message-flap"
                                            d="m0 1 15.882 15.186c1.06 1.085 3.177 1.085 4.236 0l15.882-15.186"
                                            stroke="#9C9C9C"
                                            fill="#FDFFFF"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute top-[-5px] right-8 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#58d7af] text-center text-[10px] leading-[17px] font-bold text-[#505050]">
                                  1
                                </div>
                                <span className="w-full cursor-pointer break-words text-center text-[11px] font-bold leading-[17px] text-[#505050]">
                                  Messages
                                </span>
                              </div>
                              <div className="account-button relative flex flex-[1_0_31%] flex-col items-center min-w-[100px] max-w-[31%] min-h-[92px] mr-[5px] pt-0 pb-5 cursor-pointer text-center text-[11px] leading-[17px] font-bold text-[#505050]">
                                <div className="flex h-[39px] items-end justify-center mb-[5px]">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="38"
                                      height="36"
                                      viewBox="0 0 38 36"
                                      className="flex h-[39px] items-end justify-center mb-[5px]"
                                      aria-hidden="true"
                                    >
                                      <g fill="none" fillRule="evenodd">
                                        {/* body */}
                                        <path
                                          d="M16.5 13.5c4.43 0 8.444 1.481 11.348 3.885 2.867 2.372 4.652 5.647 4.652 9.27 0 1.503-.306 2.723-.883 3.708-.614 1.05-1.533 1.828-2.685 2.41-2.972 1.504-7.442 1.727-12.432 1.727-4.99 0-9.46-.223-12.432-1.727-1.152-.582-2.07-1.36-2.685-2.41-.577-.985-.883-2.205-.883-3.708 0-3.623 1.785-6.898 4.652-9.27 2.904-2.405 6.918-3.885 11.348-3.885z"
                                          stroke="#9C9C9C"
                                          fill="#FDFFFF"
                                        />
                                        {/* neck shadow */}
                                        <ellipse fill="#EEF0F0" cx="16.5" cy="10" rx="5.5" ry="7" />
                                        {/* head */}
                                        <circle
                                          stroke="#9C9C9C"
                                          fill="#FDFFFF"
                                          cx="16.5"
                                          cy="7.5"
                                          r="7"
                                        />

                                        {/* animated wheel: outer <g> rotates, inner <g> keeps its translate */}
                                        <g className="account-wheel">
                                          <g transform="translate(18 16)">
                                            <path
                                              d="m10.753-.555.39 2.149c.599.165 1.168.4 1.7.696h0l1.196-1.196 3.032 2.358-1.244 1.796c.3.529.54 1.096.71 1.693h1.691l.477 3.812-2.149.39a7.714 7.714 0 0 1-.696 1.7h0l1.196 1.196-2.358 3.032-1.796-1.244c-.529.3-1.096.54-1.693.71h0v1.691l-3.812.477-.39-2.149a7.714 7.714 0 0 1-1.7-.696h0l-1.196 1.196-3.032-2.358 1.244-1.796a7.716 7.716 0 0 1-.71-1.693h0-1.691l-.477-3.812 2.149-.39c.165-.599.4-1.168.696-1.7h0l-1.196-1.196 2.358-3.031 1.796 1.244c.529-.3 1.096-.54 1.693-.71h0v-1.693l3.812-.477z"
                                              stroke="#979797"
                                              fill="#FDFFFF"
                                            />
                                            <circle
                                              stroke="#9C9C9C"
                                              fill="#EEF0F0"
                                              cx="9.075"
                                              cy="9.075"
                                              r="2.75"
                                            />
                                          </g>
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                </div>

                                <span className="w-full cursor-pointer break-words text-center text-[11px] font-bold leading-[17px] text-[#505050]">
                                  My Account
                                </span>
                              </div>
                              <div className="shield-button relative flex flex-[1_0_31%] flex-col items-center min-w-[100px] max-w-[31%] min-h-[92px] mr-[5px] pt-0 pb-5 cursor-pointer text-center text-[11px] leading-[17px] font-bold text-[#505050]">
                                <div className="flex h-[39px] items-end justify-center mb-[5px]">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="33"
                                      height="38"
                                      viewBox="0 0 33 38"
                                      className="flex h-[39px] items-end justify-center mb-[5px]"
                                      aria-hidden="true"
                                    >
                                      <g stroke="#9C9C9C" fill="none" fillRule="evenodd">
                                        {/* shield */}
                                        <path
                                          d="m16.5 1-.161.092a106.33 106.33 0 0 1-7.559 3.915 94.713 94.713 0 0 1-7.554 3.159l-.198.072-.006.204c-.386 14.728 4.056 24.069 15.264 28.383l.465.175.12-.053c10.815-4.72 15.784-14.137 15.06-28.09l-.035-.62-.19-.07a97.35 97.35 0 0 1-7.538-3.167 106.83 106.83 0 0 1-6.666-3.433l-1.002-.567z"
                                          fill="#FDFFFF"
                                          fillRule="nonzero"
                                        />
                                        {/* keyhole */}
                                        <path
                                          d="M16.234 14.324c1.489 0 2.696 1.233 2.696 2.753a2.754 2.754 0 0 1-1.684 2.552l1.957 5.59a.397.397 0 0 1-.234.504.38.38 0 0 1-.13.023h-5.146a.39.39 0 0 1-.367-.518l1.814-5.635a2.756 2.756 0 0 1-1.601-2.516c0-1.52 1.207-2.753 2.695-2.753z"
                                          fill="#EEF0F0"
                                        />
                                        {/* animated dashes */}
                                        <g strokeLinecap="square">
                                          <path
                                            className="shield-dash-right"
                                            d="M16.75 5s3.016 1.721 5.027 2.734c1.34.674 3.175 1.515 5.503 2.522"
                                          />
                                          <path
                                            className="shield-dash-left"
                                            d="M5.75 10.256s3.684-1.675 5.394-2.522c1.71-.847 5.106-2.734 5.106-2.734"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <span className="w-full cursor-pointer break-words text-center text-[11px] font-bold leading-[17px] text-[#505050]">
                                  Gambling Controls
                                </span>
                              </div>
                              <div className="activity-button relative flex flex-[1_0_31%] flex-col items-center min-w-[100px] max-w-[31%] min-h-[92px] mr-[5px] pt-0 pb-5 cursor-pointer text-center text-[11px] leading-[17px] font-bold text-[#505050]">
                                <div className="flex h-[39px] items-end justify-center mb-[5px]">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="37"
                                      height="26"
                                      className="flex h-[39px] items-end justify-center mb-[5px]"
                                      viewBox="0 0 37 26"
                                      aria-hidden="true"
                                    >
                                      <g fill="none" fillRule="evenodd">
                                        {/* card */}
                                        <rect
                                          width="36"
                                          height="25"
                                          x=".5"
                                          y=".5"
                                          fill="#FDFFFF"
                                          stroke="#9C9C9C"
                                          rx="3"
                                        />
                                        {/* header band */}
                                        <path
                                          fill="#EEF0F0"
                                          d="M3 1h31.01a2 2 0 0 1 2 2v1.58h-35.01v-1.58a2 2 0 0 1 2-2z"
                                          opacity=".75"
                                        />
                                        {/* chart points */}
                                        <g fill="#9C9C9C">
                                          <path d="M8.003 17.733c0 .567-.448 1.027-1.001 1.027-.554 0-1.002-.46-1.002-1.027s.448-1.027 1.002-1.027c.553 0 1.001.46 1.001 1.027" />
                                          <path d="M13.726 11.866c0 .567-.448 1.026-1.001 1.026-.553 0-1.002-.46-1.002-1.026 0-.568.449-1.027 1.002-1.027.553 0 1.001.46 1.001 1.027" />
                                          <path d="M20.126 18.426c0 .567-.448 1.027-1.002 1.027-.553 0-1.001-.46-1.001-1.027s.448-1.027 1.001-1.027c.554 0 1.002.46 1.002 1.027" />
                                          <path d="M29.556 8.79c0 .568-.448 1.027-1.001 1.027-.553 0-1.002-.46-1.002-1.027s.449-1.026 1.002-1.026c.553 0 1.001.46 1.001 1.026" />
                                        </g>
                                        {/* animated trend line */}
                                        <path
                                          className="activity-line"
                                          stroke="#9C9C9C"
                                          strokeWidth=".5"
                                          d="m7.002 17.733 5.723-5.867 6.4 6.56 9.43-9.636"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <span className="w-full cursor-pointer break-words text-center text-[11px] font-bold leading-[17px] text-[#505050]">
                                  My Activity
                                </span>
                              </div>
                              <div className="history-button relative flex flex-[1_0_31%] flex-col items-center min-w-[100px] max-w-[31%] min-h-[92px] mr-[5px] pt-0 pb-5 cursor-pointer text-center text-[11px] leading-[17px] font-bold text-[#505050]">
                                <div className="flex h-[39px] items-end justify-center mb-[5px]">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="33"
                                      height="33"
                                      className="flex h-[39px] items-end justify-center mb-[5px]"
                                      viewBox="0 0 32 32"
                                      aria-hidden="true"
                                    >
                                      <g fill="none" fillRule="evenodd">
                                        <rect
                                          width="33"
                                          height="33"
                                          fill="#FDFFFF"
                                          fillRule="nonzero"
                                          rx="16"
                                        />
                                        <circle
                                          cx="16"
                                          cy="16"
                                          r="14.5"
                                          stroke="#EEF0F0"
                                          strokeWidth="3"
                                        />
                                        <circle cx="16" cy="16" r="15.5" stroke="#9C9C9C" />

                                        {/* animated minute hand */}
                                        <g className="history-minute">
                                          <line x1="16" x2="16" y1="16.5" y2="7" stroke="#C3C3C3" />
                                        </g>

                                        {/* static hour hand */}
                                        <line
                                          x1="24.007"
                                          x2="16"
                                          y1="16.469"
                                          y2="16.469"
                                          stroke="#C3C3C3"
                                        />

                                        {/* hour ticks */}
                                        <g
                                          fill="#9C9C9C"
                                          fillRule="nonzero"
                                          transform="translate(2 2)"
                                        >
                                          <circle cx="14" cy="26.5" r="1" />
                                          <circle cx="14" cy="1.5" r="1" />
                                          <circle cx="1.5" cy="14.5" r="1" />
                                          <circle cx="26.5" cy="14.5" r="1" />
                                        </g>

                                        {/* center pin */}
                                        <circle
                                          cx="16"
                                          cy="16.5"
                                          r="1"
                                          fill="#9E9E9E"
                                          fillRule="nonzero"
                                          stroke="#9E9E9E"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <span className="w-full cursor-pointer break-words text-center text-[11px] font-bold leading-[17px] text-[#505050]">
                                  History
                                </span>
                              </div>
                            </div>
                            <div className="w-full border-y border-[#d4d4d4]">
                              <div className="flex hover:bg-white flex-none flex-row items-center w-full pt-[5px] max-w-none min-h-0 overflow-hidden mr-0 px-[15px] pb-0 text-left text-ellipsis whitespace-nowrap text-[15px] font-normal leading-[45px] text-[#404040]">
                                <span className="box-border flex flex-none flex-row items-center w-full break-words text-[15px] font-normal leading-[45px] text-[#404040]">
                                  Responsible Gambling
                                </span>
                              </div>
                              <div className="flex hover:bg-white flex-none flex-row items-center w-full pb-[5px] max-w-none min-h-0 overflow-hidden mr-0 px-[15px] pb-0 text-left text-ellipsis whitespace-nowrap text-[15px] font-normal leading-[45px] text-[#404040]">
                                <span className="box-border flex flex-none flex-row items-center w-full break-words text-[15px] font-normal leading-[45px] text-[#404040]">
                                  Help
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className="flex h-[55px] hover:bg-white flex-none flex-row items-center w-full max-w-none overflow-hidden mr-0  px-[15px] text-left text-ellipsis whitespace-nowrap text-[15px] font-normal leading-[45px] text-[#404040] pt-[5px] pb-[5px]">
                                <span className="box-border flex flex-none flex-row items-center w-full break-words text-[15px] font-normal leading-[45px] text-[#404040]">
                                  Log Out
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === 'alerts' && !isDeviceMobile && (
                        <div>
                          <div>
                            <div>
                              <div>
                                <div
                                  className=" box-border
                          "
                                >
                                  <div className="p-[15px_15px_10px] bg-[#f3f5f4]">
                                    <div
                                      onClick={() => setWinningBetsAlert((prev) => !prev)}
                                      className="relative cursor-pointer text-[13px] leading-[45px] mb-[5px]"
                                    >
                                      <div className="inline-block w-full text-[#404040]">
                                        Winning Bets
                                      </div>
                                      <div className="absolute top-0 right-0 h-[45px] w-[53px] items-center flex justify-center">
                                        <div
                                          role="switch"
                                          aria-checked={winningBetsAlert}
                                          className={cn(
                                            'inline-flex relative mx-[10px] h-[20px] w-[33px] cursor-pointer rounded-[10px] transition-colors duration-200 ease-in-out',
                                            winningBetsAlert ? 'bg-[#58d7af]' : 'bg-[#9c9c9c]',
                                          )}
                                        >
                                          <div
                                            className={cn(
                                              'absolute left-[2px] top-[2px] h-4 w-4 rounded-full bg-white shadow-[2px_-2px_6px_0_rgba(0,0,0,0.15)] transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]',
                                              winningBetsAlert
                                                ? 'translate-x-[13px]'
                                                : 'translate-x-0',
                                            )}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      onClick={() => setFreeBetsAlert((prev) => !prev)}
                                      className="relative cursor-pointer text-[13px] leading-[45px] mb-[5px]"
                                    >
                                      <div className="inline-block w-full text-[#404040]">
                                        Free Bets
                                      </div>
                                      <div className="absolute top-0 right-0 h-[45px] w-[53px] items-center flex justify-center">
                                        <div
                                          role="switch"
                                          aria-checked={freeBetsAlert}
                                          className={cn(
                                            'inline-flex relative mx-[10px] h-[20px] w-[33px] cursor-pointer rounded-[10px] transition-colors duration-200 ease-in-out',
                                            freeBetsAlert ? 'bg-[#58d7af]' : 'bg-[#9c9c9c]',
                                          )}
                                        >
                                          <div
                                            className={cn(
                                              'absolute left-[2px] top-[2px] h-4 w-4 rounded-full bg-white shadow-[2px_-2px_6px_0_rgba(0,0,0,0.15)] transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]',
                                              freeBetsAlert
                                                ? 'translate-x-[13px]'
                                                : 'translate-x-0',
                                            )}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex justify-between pr-[10px] mb-[5px]">
                                      <div className="flex flex-[1_0_auto] flex-col self-end">
                                        <div className="leading-[45px] text-[13px] text-[#404040]">
                                          Event Alerts
                                        </div>
                                      </div>

                                      <div className="flex items-center text-[11px] leading-[13px] font-bold text-[#666]">
                                        None Set
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === 'preferences' && (
                        <div className="bg-[#F3F5F4] min-h-[200px]">
                          <div
                            className={cn(
                              '',
                              showLangauageOptions ? 'border-b border-[#E4E4E4' : '',
                            )}
                          >
                            <div
                              onClick={() => setShowLanguageOptions(!showLangauageOptions)}
                              className={cn(
                                'relative flex h-[60px] cursor-pointer flex-col hover:bg-white  transition-all ease-in-out duration-500 justify-center border-b border-[#E4E4E4] pl-[15px]',
                                showLangauageOptions ? 'bg-white' : '',
                              )}
                            >
                              <div className="box-border pt-[10px] text-[11px] leading-[17px] text-[#404040]">
                                Language
                              </div>
                              <div
                                className={cn(
                                  'box-border inline-block cursor-pointer py-[4px] pb-[10px] text-[15px] leading-[18px] text-[#282828]',
                                  showLangauageOptions ? 'font-bold' : '',
                                )}
                              >
                                English
                              </div>
                              <div className="absolute top-0 right-0 block h-full w-[10px] ml-[10px] mr-[25px] bg-[length:10px_6px] bg-[position:50%] bg-no-repeat [background-image:var(--icon-chevron-down)]"></div>
                            </div>

                            <div
                              className={cn(
                                'max-h-[495px] overscroll-auto overflow-y-scroll',
                                showLangauageOptions ? '' : 'hidden',
                              )}
                            >
                              <div className="relative inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center bg-white px-[15px] text-[13px] leading-[20px] font-bold text-[#282828]">
                                English
                                <div className="absolute top-0 left-0 h-[45px] w-[3px] bg-[#58d7af] box-border"></div>
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                繁體中文
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Español
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Français
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Deutsch
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Italiano
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Dansk
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Svenska
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                简体中文
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Български
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Ελληνικά
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Polski
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Português
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Română
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Česky
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Magyar
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Slovenčina
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Nederlands
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Eesti
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                Русский
                              </div>
                            </div>
                          </div>
                          <div
                            className={cn(
                              '',
                              showTimezoneOptions ? 'border-b border-[#E4E4E4' : '',
                            )}
                          >
                            <div
                              onClick={() => setShowTimezoneOptions(!showTimezoneOptions)}
                              className={cn(
                                'relative flex h-[60px] cursor-pointer flex-col hover:bg-white  transition-all ease-in-out duration-500 justify-center border-b border-[#E4E4E4] pl-[15px]',
                                showTimezoneOptions ? 'bg-white' : '',
                              )}
                            >
                              <div className="box-border pt-[10px] text-[11px] leading-[17px] text-[#404040]">
                                Time Zone
                              </div>
                              <div
                                className={cn(
                                  'box-border inline-block cursor-pointer py-[4px] pb-[10px] text-[15px] leading-[18px] text-[#282828]',
                                  showTimezoneOptions ? 'font-bold' : '',
                                )}
                              >
                                GMT-4
                              </div>
                              <div className="absolute top-0 right-0 block h-full w-[10px] ml-[10px] mr-[25px] bg-[length:10px_6px] bg-[position:50%] bg-no-repeat [background-image:var(--icon-chevron-down)]"></div>
                            </div>
                            <div
                              className={cn(
                                'max-h-[495px] overscroll-auto overflow-y-scroll',
                                showTimezoneOptions ? '' : 'hidden',
                              )}
                            >
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                UK
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                ET
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                PT
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                CET
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                CT
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                MT
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT-12
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT-11
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT-10
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT-9
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT-8
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT-7
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT-6
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT-5
                              </div>
                              <div className="relative inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center bg-white px-[15px] text-[13px] leading-[20px] font-bold text-[#282828]">
                                GMT-4
                                <div className="absolute top-0 left-0 h-[45px] w-[3px] bg-[#58d7af] box-border"></div>
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT-3
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT-2
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT-1
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+1
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+2
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+3
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+4
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+5
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+6
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+7
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+8
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+9
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+9.5
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+10
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+10.5
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+11
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+12
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                GMT+13
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                EET
                              </div>
                              <div className="relative hover:bg-white transition-all duration-500 ease-in-out inline-flex h-[45px] w-1/2 cursor-pointer flex-col justify-center px-[15px] text-[13px] leading-[20px] text-[#282828] box-border">
                                POR
                              </div>
                            </div>
                          </div>
                          <div
                            className={cn(
                              '',
                              showInactivityOptions ? 'border-b border-[#E4E4E4' : '',
                            )}
                          >
                            <div
                              onClick={() => setShowInactivityOptions(!showInactivityOptions)}
                              className={cn(
                                'relative flex h-[60px] cursor-pointer flex-col hover:bg-white  transition-all ease-in-out duration-500 justify-center border-b border-[#E4E4E4] pl-[15px]',
                                showInactivityOptions ? 'bg-white' : '',
                              )}
                            >
                              <div className="box-border pt-[10px] text-[11px] leading-[17px] text-[#404040]">
                                Max Inactivity Time
                              </div>
                              <div
                                className={cn(
                                  'box-border  inline-block cursor-pointer py-[4px] pb-[10px] text-[15px] leading-[18px] text-[#282828]',
                                  showInactivityOptions ? 'font-bold' : '',
                                )}
                              >
                                12 Hours
                              </div>
                              <div className="absolute top-0 right-0 block h-full w-[10px] ml-[10px] mr-[25px] bg-[length:10px_6px] bg-[position:50%] bg-no-repeat [background-image:var(--icon-chevron-down)]"></div>
                            </div>
                            <div
                              className={cn(
                                'max-h-[495px] overscroll-auto overflow-y-scroll',
                                showInactivityOptions ? '' : 'hidden',
                              )}
                            >
                              <div className="relative inline-flex h-[45px] w-full cursor-pointer flex-col justify-center px-[15px] text-[13px] hover:bg-white duration-500 ease-in-out leading-[20px] text-[#282828]">
                                20 Minutes
                              </div>
                              <div className="relative inline-flex h-[45px] w-full cursor-pointer flex-col justify-center px-[15px] text-[13px] hover:bg-white duration-500 ease-in-out leading-[20px] text-[#282828]">
                                1 Hour
                              </div>
                              <div className="relative inline-flex h-[45px] w-full cursor-pointer flex-col justify-center px-[15px] text-[13px] hover:bg-white duration-500 ease-in-out leading-[20px] text-[#282828]">
                                2 Hours
                              </div>
                              <div className="relative inline-flex h-[45px] w-full cursor-pointer flex-col justify-center px-[15px] text-[13px] hover:bg-white duration-500 ease-in-out leading-[20px] text-[#282828]">
                                3 Hours
                              </div>
                              <div className="relative inline-flex h-[45px] w-full cursor-pointer flex-col justify-center px-[15px] text-[13px] hover:bg-white duration-500 ease-in-out leading-[20px] text-[#282828]">
                                6 Hours
                              </div>
                              <div className="relative inline-flex h-[45px] w-full cursor-pointer flex-col justify-center bg-white px-[15px] text-[13px] leading-[20px] font-bold text-[#282828]">
                                12 Hours
                                <div className="absolute top-0 left-0 h-[45px] w-[3px] bg-[#58d7af] box-border"></div>
                              </div>
                            </div>
                          </div>

                          <div
                            onClick={() => setAllowOddsChange((prev) => !prev)}
                            className="relative flex h-[59px] w-full items-center border-b border-[#e4e4e4] px-0 py-[10px] pl-[15px] text-[13px]"
                          >
                            <div className="inline-block w-full max-w-[calc(100%-78px)] text-left text-[13px] leading-[18px] text-[#282828]">
                              Allow odds and line changes during bet placement
                            </div>

                            <div className="absolute top-0 right-0 h-[45px] w-[53px] items-center flex justify-center">
                              <div
                                role="switch"
                                aria-checked={allowOddsChange}
                                className={cn(
                                  'inline-flex relative mx-[10px] h-[20px] w-[33px] cursor-pointer rounded-[10px] transition-colors duration-200 ease-in-out',
                                  allowOddsChange ? 'bg-[#58d7af]' : 'bg-[#9c9c9c]',
                                )}
                              >
                                <div
                                  className={cn(
                                    'absolute left-[2px] top-[2px] h-4 w-4 rounded-full bg-white shadow-[2px_-2px_6px_0_rgba(0,0,0,0.15)] transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]',
                                    allowOddsChange ? 'translate-x-[13px]' : 'translate-x-0',
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            onClick={() => setShowPasscodeOptions((prev) => !prev)}
                            className="relative flex h-[59px] w-full items-center border-b border-[#e4e4e4] px-0 py-[10px] pl-[15px] text-[13px]"
                          >
                            <div className="inline-block w-full max-w-[calc(100%-78px)] text-left text-[13px] leading-[18px] text-[#282828]">
                              Log in Using Passcode
                            </div>

                            <div className="absolute top-0 right-0 h-[45px] w-[53px] items-center flex justify-center">
                              <div
                                role="switch"
                                aria-checked={showPasscodeOptions}
                                className={cn(
                                  'inline-flex relative mx-[10px] h-[20px] w-[33px] cursor-pointer rounded-[10px] transition-colors duration-200 ease-in-out',
                                  showPasscodeOptions ? 'bg-[#58d7af]' : 'bg-[#9c9c9c]',
                                )}
                              >
                                <div
                                  className={cn(
                                    'absolute left-[2px] top-[2px] h-4 w-4 rounded-full bg-white shadow-[2px_-2px_6px_0_rgba(0,0,0,0.15)] transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]',
                                    showPasscodeOptions ? 'translate-x-[13px]' : 'translate-x-0',
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            onClick={() => setShowBalance((prev) => !prev)}
                            className="relative flex h-[59px] w-full items-center border-b-0 px-0 py-[10px] pl-[15px] text-[13px]"
                          >
                            <div className="inline-block w-full max-w-[calc(100%-78px)] text-left text-[13px] leading-[18px] text-[#282828]">
                              Show Balance
                            </div>

                            <div className="absolute top-0 right-0 h-[45px] w-[53px] items-center flex justify-center">
                              <div
                                role="switch"
                                aria-checked={showBalance}
                                className={cn(
                                  'inline-flex relative mx-[10px] h-[20px] w-[33px] cursor-pointer rounded-[10px] transition-colors duration-200 ease-in-out',
                                  showBalance ? 'bg-[#58d7af]' : 'bg-[#9c9c9c]',
                                )}
                              >
                                <div
                                  className={cn(
                                    'absolute left-[2px] top-[2px] h-4 w-4 rounded-full bg-white shadow-[2px_-2px_6px_0_rgba(0,0,0,0.15)] transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]',
                                    showBalance ? 'translate-x-[13px]' : 'translate-x-0',
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            onClick={() => setShowGamingLink((prev) => !prev)}
                            className="relative flex h-[59px] w-full items-center border-b-0 px-0 py-[10px] pl-[15px] text-[13px]"
                          >
                            <div className="inline-block w-full max-w-[calc(100%-78px)] text-left text-[13px] leading-[18px] text-[#282828]">
                              Show Gaming Quick Link
                            </div>

                            <div className="absolute top-0 right-0 h-[45px] w-[53px] items-center flex justify-center">
                              <div
                                role="switch"
                                aria-checked={showGamingLink}
                                className={cn(
                                  'inline-flex relative mx-[10px] h-[20px] w-[33px] cursor-pointer rounded-[10px] transition-colors duration-200 ease-in-out',
                                  showGamingLink ? 'bg-[#58d7af]' : 'bg-[#9c9c9c]',
                                )}
                              >
                                <div
                                  className={cn(
                                    'absolute left-[2px] top-[2px] h-4 w-4 rounded-full bg-white shadow-[2px_-2px_6px_0_rgba(0,0,0,0.15)] transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]',
                                    showGamingLink ? 'translate-x-[13px]' : 'translate-x-0',
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
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
        className="transition-all duration-250 ease-in-out"
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
