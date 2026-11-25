'use client';
import { BetTicketCard } from '@/components/bet';
import { ControlHeaderUi } from '@/components/shared';
import type { BetData } from '@/constants/bet';
import { fixture, selection, team } from '@/constants/bet-data';
import { useState } from 'react';

type TabType = 'Open' | 'Live' | 'Settled';

const cashout_offers: Record<string, number> = {
  'bet-1': 300.0,
  'bet-2': 41.5,
  'bet-7': 18.2,
};

// 13.11.

const home_1 = team(
  't25',
  'Padova',
  'https://content001.bet365.com/SoccerSilks/Padova_Home_Front_26_27.svg',
);

const away_1 = team(
  't26',
  'Sampdoria',
  'https://content001.bet365.com/SoccerSilks/Sampdoria_Home_Front_25_26.svg',
);

const home_2 = team(
  't27',
  'Pisa',
  'https://content001.bet365.com/SoccerSilks/Pisa_Home_2627_Front.svg',
);

const away_2 = team(
  't28',
  'Modena',
  'https://content001.bet365.com/SoccerSilks/Modena_third_2627_front.svg',
);

export function CashoutPage({ word }: { word?: string }) {
  const [activeTab, setActiveTab] = useState<TabType>('Open');

  const bet_data: BetData =
    // 1. every leg pending, match not started -> PENDING
    {
      id: 'bet-1',
      type: 'double',
      stake: 300,
      returns: 19110,
      status: 'won',
      selections: [
        selection(
          's1',
          `Sampdoria 2-1`,
          9.8,
          'won',
          fixture('f1', home_1, away_1, 'Wed 25 Nov', '14:00', 'finished', [1, 2]),
        ),
        selection(
          's2',
          `${'Draw 1-1'}`,
          6.5,
          'won',
          fixture('f2', home_2, away_2, 'Wed 25 Nov', '14:00', 'finished', [1, 1]),
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
