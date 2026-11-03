/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, type ReactNode } from 'react';
import { BottomNavigation } from '../navigations/bottom-nav';
import { Footer } from '../navigations/footer';
import { HeaderComp } from '../shared';
import { cn } from 'cn';

export function MainRootLayout({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (isLoading) {
    return (
      <div>
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
          </div>
        </header>

        <div className="h-[calc(100%-50px)] bg-[#111]">
          <div className="absolute left-1/2 top-1/2 my-[25px] box-border h-[45px] w-[45px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-solid border-white/20 border-l-[#28FFBB] animate-[bl-Spinner_0.6s_linear_infinite]" />
        </div>
      </div>
    );
  }

  return (
    <section className="relative pb-[calc(64px+16px+env(safe-area-inset-bottom,0px))]">
      <HeaderComp triggerModal={() => setIsVisible(true)} />

      {children}

      <Footer />
      <BottomNavigation />

      {/* Backdrop */}
      <div
        aria-hidden={!isVisible}
        className={cn(
          'fixed inset-0 z-[9999] flex items-end justify-center',
          'bg-black/50 transition-[background-color] duration-300 ease-out',
          !isVisible && 'pointer-events-none bg-transparent',
        )}
        onClick={() => setIsVisible(false)}
      >
        {/* Payments Modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={cn(
            'relative w-[clamp(300px,100vw,500px)] max-w-full',
            'h-[min(500px,100dvh)]',
            'overflow-hidden',
            'rounded-t-[25px]',
            'text-[var(--color-text-primary)]',
            'bg-[linear-gradient(120deg,#203b32,#282828_60%)]',
            'pb-[env(safe-area-inset-bottom)]',
            'transition-[translate,visibility] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]',
            isVisible ? 'translate-y-0 visible' : 'translate-y-full invisible',
            'min-[620px]:h-[min(635px,100dvh)] [@media(height>=620px)]:h-[min(635px,100dvh)] [@media(height>=620px)]:min-h-[min(635px,100dvh)] [@media(height>=620px)]:max-h-[min(635px,100dvh)]',
          )}
        >
          {/* Modal content goes here */}

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="    absolute top-4 right-4 z-[2]

    w-8 h-8

    cursor-pointer

    border-none bg-transparent

 text-white before:w-[18px] 

    before:content-['']
      before:absolute
    before:h-[1.5px]
  before:top-1/2

    before:left-1/2
    before:bg-[#4adbac]

    before:rotate-45


    before:-translate-x-1/2

    before:-translate-y-1/2 
    
     after:content-['']

    after:absolute

    after:top-1/2

    after:left-1/2

    after:w-[18px]

    after:h-[1.5px]

    after:bg-[#4adbac]

    after:-rotate-45

    after:-translate-x-1/2

    after:-translate-y-1/2
    "
          ></button>

          <section className="relative h-full min-h-inherit translate-x-0 translate-y-0 opacity-100 pointer-events-auto">
            <section className="overflow-hidden px-[25px] pt-0 pb-4">
              <div className="relative grid h-[45px] mt-[10px] grid-cols-[65px_1fr_65px] grid-rows-[45px] grid-flow-col items-center [grid-template-areas:'back_title_dismiss']">
                <span className="text-[1.375rem] font-bold text-[#fff] text-center box-border [grid-area:title]">
                  Balance
                </span>
              </div>
              <div className="mt-[89px] mb-[44px] text-[45px] font-bold text-center text-white">
                $8.56
              </div>
              <div className="grid grid-flow-row gap-y-[5px]">
                <div className="grid h-[45px] grid-flow-col grid-cols-[1fr_auto] items-center">
                  <span className="grid grid-flow-row gap-0.5 text-base font-bold text-[#ddd]">
                    Withdrawable
                  </span>
                  <span className="text-lg font-bold text-white">$8.56</span>
                </div>
                <div className="grid h-[45px] grid-flow-col grid-cols-[1fr_auto] items-center">
                  <span className="grid grid-flow-row gap-0.5 text-base font-bold text-[#ddd]">
                    Bet Credits
                  </span>
                  <span className="text-lg font-bold text-white">$8.56</span>
                </div>
              </div>
              <div className="mt-[45px] grid grid-flow-col grid-cols-2 justify-center gap-x-[15px]">
                <button className="grid min-w-[115px] h-[50px] place-content-center cursor-pointer rounded-[5px] border border-[#28ffbb] bg-transparent px-[15px] text-base font-bold text-[#28ffbb]">
                  <span>Withdraw</span>
                </button>
                <button className="relative flex h-[var(--space-4xl)] w-full items-center justify-center overflow-hidden rounded-[var(--radius-md)] border-0 bg-[linear-gradient(to_right,#28ffbb,#8affab_50%)] transition-opacity duration-200">
                  <span className="text-(length:--text-16) font-bold text-black">Deposit</span>
                </button>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}
