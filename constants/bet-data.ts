import type {
  BetData,
  MatchFixtureData,
  MatchStatusData,
  SelectionStatusData,
  SelectionTypes,
} from '@/constants/bet';

const team = (id: string, name: string, logo = ''): Team => ({
  id,
  name,
  shortName: name,
  slug: name.toLowerCase(),
  countryId: '',
  league: '',
  assets: { logo, kits: [] },
  competitionIds: [],
});

const fixture = (
  id: string,
  home: Team,
  away: Team,
  status: MatchStatusData,
  score: [number, number] = [0, 0],
): MatchFixtureData => ({
  id,
  homeTeam: home,
  awayTeam: away,
  kickOffDate: 'Mon 26 Oct',
  kickOffTime: '18:30',
  homeTeamScore: score[0],
  awayTeamScore: score[1],
  status,
});

const selection = (
  id: string,
  name: string,
  odds: number,
  status: SelectionStatusData,
  matchFixture: MatchFixtureData,
  matchSelectionType: SelectionTypes['matchSelectionType'] = 'correct score',
): SelectionTypes => ({ id, name, odds, status, matchFixture, matchSelectionType });

const worthing = team('t1', 'Worthing', '/Worthing_Home_2026_27.svg');
const southend = team('t2', 'Southend', '/Southend_United_Home_Front_26_27.svg');
const tamworth = team('t3', 'Tamworth', '/Tamworth_Home_2627_front.svg');
const scunthorpe = team('t4', 'Scunthorpe', '/Scunthorpe_third_2627_front.svg');

export const bet_data: BetData[] = [
  // 1. every leg pending, match not started -> PENDING, "Double", kickoff date/time shown
  {
    id: 'bet-1',
    type: 'double',
    stake: 300,
    returns: 60670,
    status: 'pending',
    selections: [
      selection('s1', 'Worthing 2-1', 12, 'pending', fixture('f1', worthing, southend, 'pending')),
      selection('s2', 'Draw 2-2', 11, 'pending', fixture('f2', tamworth, scunthorpe, 'pending')),
    ],
  },

  // 2. one won, one live, one not started -> PENDING (open)
  {
    id: 'bet-2',
    type: 'multiple',
    stake: 20,
    returns: 480,
    status: 'lost',
    selections: [
      selection(
        's3',
        'Worthing 2-1',
        3.5,
        'won',
        fixture('f3', worthing, southend, 'finished', [2, 1]),
      ),
      selection(
        's4',
        'Draw 2-2',
        4,
        'pending',
        fixture('f4', tamworth, scunthorpe, 'live', [1, 1]),
      ),
      selection(
        's5',
        'Over 2.5 Goals',
        1.9,
        'pending',
        fixture('f5', worthing, scunthorpe, 'pending'),
        'over/under',
      ),
    ],
  },

  // 3. all won -> WON, ribbon, green border, "Doubles"
  {
    id: 'bet-3',
    type: 'double',
    stake: 0.1,
    returns: 0.1,
    status: 'won',
    selections: [
      selection(
        's6',
        'Worthing 2-1',
        11,
        'won',
        fixture('f6', worthing, southend, 'finished', [2, 1]),
      ),
      selection(
        's7',
        'Draw 2-2',
        11,
        'won',
        fixture('f7', tamworth, scunthorpe, 'finished', [2, 2]),
      ),
    ],
  },

  // 4. backend is stale ('pending') but a leg lost -> LOST (derived wins)
  {
    id: 'bet-4',
    type: 'double',
    stake: 0.1,
    returns: 0.1,
    status: 'lost',
    selections: [
      selection(
        's8',
        'Worthing 2-1',
        11,
        'lost',
        fixture('f8', worthing, southend, 'finished', [3, 3]),
      ),
      selection(
        's9',
        'Draw 2-2',
        11,
        'won',
        fixture('f9', tamworth, scunthorpe, 'finished', [2, 2]),
      ),
    ],
  },

  // 5. every leg void -> VOID (lost look, "Void", stake refunded)
  {
    id: 'bet-5',
    type: 'single',
    stake: 50,
    returns: 0,
    status: 'void',
    selections: [
      selection(
        's10',
        'Worthing to Win',
        2.1,
        'void',
        fixture('f10', worthing, southend, 'finished', [0, 0]),
        'match result',
      ),
    ],
  },

  // 6. backend says cashout while legs are still open -> CASHOUT (backend override)
  {
    id: 'bet-6',
    type: 'double',
    stake: 0.1,
    returns: 0.1,
    status: 'cashout',
    selections: [
      selection(
        's11',
        'Worthing 2-1',
        11,
        'won',
        fixture('f11', worthing, southend, 'finished', [2, 1]),
      ),
      selection(
        's12',
        'Draw 2-2',
        11,
        'pending',
        fixture('f12', tamworth, scunthorpe, 'live', [0, 1]),
      ),
    ],
  },

  // 7. backend wrongly says 'won' with a leg still pending -> PENDING (not trusted)
  {
    id: 'bet-7',
    type: 'double',
    stake: 10,
    returns: 120,
    status: 'won',
    selections: [
      selection(
        's13',
        'Worthing 2-1',
        6,
        'won',
        fixture('f13', worthing, southend, 'finished', [2, 1]),
      ),
      selection('s14', 'Draw 2-2', 2, 'pending', fixture('f14', tamworth, scunthorpe, 'pending')),
    ],
  },
];

// live cash-out offers keyed by bet id (comes from your odds/cashout service, not BetData)
export const cashout_offers: Record<string, number> = {
  'bet-1': 300.1,
  'bet-2': 41.5,
  'bet-7': 18.2,
};
