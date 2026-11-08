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
  kickOffDate: string,
  kickOffTime: string,
  status: MatchStatusData,
  score: [number, number] = [0, 0],
): MatchFixtureData => ({
  id,
  homeTeam: home,
  awayTeam: away,
  kickOffDate: kickOffDate,
  kickOffTime: kickOffTime,
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
const palmeiras = team(
  't5',
  'Palmeiras',
  'https://content001.bet365.com/SoccerSilks/Palmeiras_Home_Front_26.svg',
);
const remo = team('t6', 'Remo', 'https://content001.bet365.com/SoccerSilks/Remo_Home_Front_26.svg');
const botafogosp = team(
  't7',
  'Botafogo SP',
  'https://content001.bet365.com/SoccerSilks/Botafogo%20SP_Front_Home_25.svg',
);

const londrina = team(
  't8',
  'Londrina',
  'https://content001.bet365.com/SoccerSilks/Londrina_Home_Front_2026.svg',
);

const cruzeiro = team(
  't9',
  'Cruzeiro',
  'https://content001.bet365.com/SoccerSilks/Cruzeiro_Home_Front_26.svg',
);

const ab = team('t10', 'AB', 'https://content001.bet365.com/SoccerSilks/AB_Home_Front_2627.svg');
const vendsysselff = team(
  't11',
  'Vendsyssel FF',
  'https://content001.bet365.com/SoccerSilks/Vendsyseel%20_Home_Front_2627.svg',
);

const hbkøge = team(
  't12',
  'HB Køge',
  'https://content001.bet365.com/SoccerSilks/HBKoge_Home_Front_2627.svg',
);

const aab = team('t13', 'AaB', 'https://content001.bet365.com/SoccerSilks/AaB_Home_Front_2627.svg');

const cuiaba = team(
  't14',
  'Cuiaba',
  'https://content001.bet365.com/SoccerSilks/Cuiaba%20Home%2024-25.svg',
);

const juventude = team(
  't15',
  'Juventude',
  'https://content001.bet365.com/SoccerSilks/Juventude_Home_Front_2026.svg',
);

const vilanova = team(
  't15',
  'Vila Nova',
  'https://content001.bet365.com/SoccerSilks/Vila%20Nova_Home_Front_26.svg',
);

const criciuma = team(
  't16',
  'Criciuma',
  'https://content001.bet365.com/SoccerSilks/Cruciuma_Home_Front_2026.svg',
);
export const bet_data: BetData[] = [
  // 1. every leg pending, match not started -> PENDING
  {
    id: 'bet-1',
    type: 'double',
    stake: 400,
    returns: 42000,
    status: 'won',
    selections: [
      selection(
        's1',
        'Juventude 2-1',
        15,
        'won',
        fixture('f1', cuiaba, juventude, 'Sat 07 Nov', '18:00', 'finished', [2, 1]),
      ),
      selection(
        's2',
        'Vila Nova 1-0',
        7,
        'won',
        fixture('f2', vilanova, criciuma, 'Sat 07 Nov', '18:00', 'finished', [1, 0]),
      ),
    ],
  },

  // 2. one won, one live, one not started
  //   {
  //     id: 'bet-2',
  //     type: 'multiple',
  //     stake: 20,
  //     returns: 480,
  //     status: 'lost',
  //     selections: [
  //       selection(
  //         's3',
  //         'Worthing 2-1',
  //         3.5,
  //         'won',
  //         fixture('f3', worthing, southend, 'Mon 26 Oct', '15:00', 'finished', [2, 1]),
  //       ),
  //       selection(
  //         's4',
  //         'Draw 2-2',
  //         4,
  //         'pending',
  //         fixture('f4', tamworth, scunthorpe, 'Mon 26 Oct', '16:30', 'live', [1, 1]),
  //       ),
  //       selection(
  //         's5',
  //         'Over 2.5 Goals',
  //         1.9,
  //         'pending',
  //         fixture('f5', worthing, scunthorpe, 'Mon 26 Oct', '18:00', 'pending'),
  //         'over/under',
  //       ),
  //     ],
  //   },

  // 3. all won
  //   {
  //     id: 'bet-3',
  //     type: 'double',
  //     stake: 0.1,
  //     returns: 0.1,
  //     status: 'won',
  //     selections: [
  //       selection(
  //         's6',
  //         'Worthing 2-1',
  //         11,
  //         'won',
  //         fixture('f6', worthing, southend, 'Sun 25 Oct', '14:00', 'finished', [2, 1]),
  //       ),
  //       selection(
  //         's7',
  //         'Draw 2-2',
  //         11,
  //         'won',
  //         fixture('f7', tamworth, scunthorpe, 'Sun 25 Oct', '16:30', 'finished', [2, 2]),
  //       ),
  //     ],
  //   },

  // 4. backend is stale ('pending') but a leg lost
  //   {
  //     id: 'bet-4',
  //     type: 'double',
  //     stake: 0.1,
  //     returns: 0.1,
  //     status: 'lost',
  //     selections: [
  //       selection(
  //         's8',
  //         'Worthing 2-1',
  //         11,
  //         'lost',
  //         fixture('f8', worthing, southend, 'Sat 24 Oct', '15:00', 'finished', [3, 3]),
  //       ),
  //       selection(
  //         's9',
  //         'Draw 2-2',
  //         11,
  //         'won',
  //         fixture('f9', tamworth, scunthorpe, 'Sat 24 Oct', '17:30', 'finished', [2, 2]),
  //       ),
  //     ],
  //   },

  // 5. every leg void
  //   {
  //     id: 'bet-5',
  //     type: 'single',
  //     stake: 50,
  //     returns: 0,
  //     status: 'void',
  //     selections: [
  //       selection(
  //         's10',
  //         'Worthing to Win',
  //         2.1,
  //         'void',
  //         fixture('f10', worthing, southend, 'Fri 23 Oct', '19:45', 'finished', [0, 0]),
  //         'match result',
  //       ),
  //     ],
  //   },

  // 6. backend says cashout while legs are still open
  //   {
  //     id: 'bet-6',
  //     type: 'double',
  //     stake: 0.1,
  //     returns: 0.1,
  //     status: 'cashout',
  //     selections: [
  //       selection(
  //         's11',
  //         'Worthing 2-1',
  //         11,
  //         'won',
  //         fixture('f11', worthing, southend, 'Mon 26 Oct', '13:00', 'finished', [2, 1]),
  //       ),
  //       selection(
  //         's12',
  //         'Draw 2-2',
  //         11,
  //         'pending',
  //         fixture('f12', tamworth, scunthorpe, 'Mon 26 Oct', '15:30', 'live', [0, 1]),
  //       ),
  //     ],
  //   },

  // 7. backend wrongly says 'won' with a leg still pending
  //   {
  //     id: 'bet-7',
  //     type: 'double',
  //     stake: 10,
  //     returns: 120,
  //     status: 'won',
  //     selections: [
  //       selection(
  //         's13',
  //         'Worthing 2-1',
  //         6,
  //         'won',
  //         fixture('f13', worthing, southend, 'Thu 22 Oct', '16:00', 'finished', [2, 1]),
  //       ),
  //       selection(
  //         's14',
  //         'Draw 2-2',
  //         2,
  //         'pending',
  //         fixture('f14', tamworth, scunthorpe, 'Thu 22 Oct', '18:30', 'pending'),
  //       ),
  //     ],
  //   },
];

// live cash-out offers keyed by bet id (comes from your odds/cashout service, not BetData)
export const cashout_offers: Record<string, number> = {
  'bet-1': 400.0,
  'bet-2': 41.5,
  'bet-7': 18.2,
};
