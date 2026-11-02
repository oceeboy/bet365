'use client';
import { Dispatch, SetStateAction, useId } from 'react';
import { motion } from 'motion/react'; // or 'framer-motion', whichever you already use

type TabType = 'Open' | 'Live' | 'Settled';

interface ControlHeaderUiProps {
  activeTab: TabType;
  setActiveTab: Dispatch<SetStateAction<TabType>>;
  tabs?: TabType[];
}

export function ControlHeaderUi({
  activeTab,
  setActiveTab,
  tabs = ['Open', 'Live', 'Settled'],
}: ControlHeaderUiProps) {
  const pillId = useId();

  return (
    <div className="h-12.5 px-4 md:px-6 text-white flex items-center">
      <div className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <nav className="flex items-center gap-1 h-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative h-6 px-2 text-xs transition-colors duration-200 cursor-pointer flex items-center justify-center whitespace-nowrap rounded-[16px] ${
                  isActive
                    ? 'text-black font-bold'
                    : 'bg-transparent text-white hover:bg-[#ffffff1a]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId={pillId}
                    className="absolute inset-0 rounded-[16px] bg-white"
                    transition={{ type: 'tween', stiffness: 500, damping: 30, duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
