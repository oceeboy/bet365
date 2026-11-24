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
  'Botafogo',
  'https://content001.bet365.com/SoccerSilks/Botafogo_Front_Home_25_26.svg',
);

const away_1 = team(
  't26',
  'Sao Paulo',
  'https://content001.bet365.com/SoccerSilks/SaoPaulo_Home_Front_2026.svg',
);

const home_2 = team(
  't27',
  'Santos',
  'https://content001.bet365.com/SoccerSilks/Santos%20home_front_25_26.svg',
);

const away_2 = team(
  't28',
  'Gremio',
  'https://content001.bet365.com/SoccerSilks/Gremio_Home_Front_2026.svg',
);

export function CashoutPage({ word }: { word?: string }) {
  const [activeTab, setActiveTab] = useState<TabType>('Open');

  const bet_data: BetData =
    // 1. every leg pending, match not started -> PENDING
    {
      id: 'bet-1',
      type: 'double',
      stake: 300,
      returns: 65100,
      status: 'won',
      selections: [
        selection(
          's1',
          `Draw 1-1`,
          7,
          'won',
          fixture('f1', home_1, away_1, 'Mon 23 Nov', '18:00', 'finished', [1, 1]),
        ),
        selection(
          's2',
          `${'Gremio 2-0'}`,
          31,
          'won',
          fixture('f2', home_2, away_2, 'Mon 23 Nov', '19:00', 'finished', [0, 2]),
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
