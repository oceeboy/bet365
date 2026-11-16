'use client';
import { BetTicketCard } from '@/components/bet';
import { ControlHeaderUi } from '@/components/shared';
import type { BetData } from '@/constants/bet';
import { fixture, selection, team } from '@/constants/bet-data';
import { useState } from 'react';

type TabType = 'Open' | 'Live' | 'Settled';

const cashout_offers: Record<string, number> = {
  'bet-1': 200.0,
  'bet-2': 41.5,
  'bet-7': 18.2,
};

// 13.11.

const fc_roskilde = team(
  't25',
  'FC Roskilde',
  'https://content001.bet365.com/SoccerSilks/Generic_Stripes_Blue_White_Front.svg',
);

const nykobing = team(
  't26',
  'Nykobing',
  'https://content001.bet365.com/SoccerSilks/Soccer_Generic_Solid_Green_Front.svg',
);

const skive = team(
  't27',
  'Skive',
  'https://content001.bet365.com/SoccerSilks/Generic_Solid_Yellow_Front.svg',
);

const thisted_fc = team(
  't28',
  'Thisted FC',
  'https://content001.bet365.com/SoccerSilks/Generic_Stripes_Blue_White_Front.svg',
);

export function CashoutPage({ word }: { word?: string }) {
  const [activeTab, setActiveTab] = useState<TabType>('Open');

  const bet_data: BetData =
    // 1. every leg pending, match not started -> PENDING
    {
      id: 'bet-1',
      type: 'single',
      stake: 200,
      returns: 23400,
      status: 'pending',
      selections: [
        // selection(
        //   's1',
        //   `${word}`,
        //   9,
        //   'pending',
        //   fixture('f1', fc_roskilde, nykobing, 'Fri 13 Nov', '18:00', 'pending', [2, 1]),
        // ),
        selection(
          's2',
          `${word}`,
          13,
          'pending',
          fixture('f2', skive, thisted_fc, 'Fri 13 Nov', '18:00', 'pending', [1, 2]),
        ),
      ],
    };

  return (
    <section className="  text-white">
      {/* Pass state handlers to ControlHeaderUi */}
      <ControlHeaderUi activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        <div className="px-2.5 flex flex-col pb-[200px]">
          <BetTicketCard bet={bet_data} cashoutValue={cashout_offers[bet_data.id]} />
        </div>
      </div>
    </section>
  );
}
