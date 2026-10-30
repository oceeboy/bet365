'use client';
import { Dispatch, SetStateAction } from 'react';

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
  return (
    <div className="h-12.5 px-4 md:px-6 text-white flex items-center">
      <div className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <nav className="flex items-center gap-1 h-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative h-6 px-2 text-xs  transition-all duration-200 cursor-pointer flex items-center justify-center whitespace-nowrap rounded-[16px] ${
                  isActive
                    ? 'bg-white text-black font-bold '
                    : 'bg-transparent text-white hover:bg-[#ffffff1a]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
