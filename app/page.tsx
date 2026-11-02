'use client';

import { useState } from 'react';
import { ControlHeaderUi, HeaderComp } from '@/components/shared';
import { OpendUi, SettledUi } from '@/components/comps';
type TabType = 'Open' | 'Live' | 'Settled';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('Open');
  const [isTrue, setIsTrue] = useState<boolean>(true);
  return (
    <section className="  text-white">
      {/* Pass state handlers to ControlHeaderUi */}
      <ControlHeaderUi activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dynamic Content Views based on activeTab */}
      <div>
        {activeTab === 'Open' &&
          (isTrue ? (
            <OpendUi />
          ) : (
            <section className="p-1.25 text-pretty text-center flex items-center justify-center flex-col  ">
              <div className="text-[13px] font-bold box-border leading-5.5 text-pretty">
                There are currently no bets to display
              </div>
              <div className="text-[13px] font-bold box-border leading-5.5 text-pretty">
                Bets that are unsettled will appear here
              </div>
            </section>
          ))}

        {activeTab === 'Live' && (
          <section className="p-1.25 text-pretty text-center flex items-center justify-center flex-col  ">
            <div className="text-[13px] font-bold box-border leading-5.5 text-pretty">
              There are currently no bets to display
            </div>
            <div className="text-[13px] font-bold box-border leading-5.5 text-pretty">
              Bets that are In-Play will appear here
            </div>
          </section>
        )}

        {activeTab === 'Settled' &&
          (isTrue ? (
            <SettledUi />
          ) : (
            <div className="bg-red-600 text-white p-6 rounded-2xl shadow-lg transition-all duration-200">
              <h2 className="text-lg font-bold">Settled Bets</h2>

              <p className="text-sm text-red-100 mt-1">
                Displaying history of completed and settled bets...
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
