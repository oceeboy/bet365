export type SelectionStatusData = 'pending' | 'won' | 'lost' | 'void';

export type SelectionTypes = {
  id: string;
  name: string;
  odds: number;
  status: SelectionStatusData;
  matchFixture: MatchFixtureData;
  matchSelectionType: 'correct score' | 'over/under' | 'match result'; // extensible for other types
};

export type MatchStatusData = 'pending' | 'live' | 'finished';

export type MatchFixtureData = {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  kickOffDate: string; // e.g., "Mon 26 Oct"
  kickOffTime: string; // e.g., "19:45"
  homeTeamScore: number;
  awayTeamScore: number;
  status: MatchStatusData;
};

export type BetStatusData = 'pending' | 'won' | 'lost' | 'void' | 'cashout' | 'partially-won';

export type BetData = {
  id: string;
  type: 'single' | 'double' | 'multiple';
  stake: number;
  returns: number;
  status: BetStatusData;
  selections: SelectionTypes[];
};

// Example usage adhering to the types:
export const bet_data: BetData[] = [
  {
    id: 'bet-1',
    type: 'single',
    stake: 10,
    returns: 25,
    status: 'pending',
    selections: [
      {
        id: 'sel-1',
        name: 'Team A to win',
        odds: 2.5,
        status: 'pending',
        matchSelectionType: 'correct score',
        matchFixture: {
          id: 'fix-1',
          homeTeam: {
            id: 'team-1',
            name: 'Team A',
            shortName: '',
            slug: '',
            countryId: '',
            league: '',
            assets: {
              logo: '',
              kits: [
                {
                  id: '',
                  type: 'home',
                  image: '',
                },
              ],
            },
            competitionIds: [],
          },
          awayTeam: {
            id: 'team-2',
            name: 'Team B',
            shortName: '',
            slug: '',
            countryId: '',
            league: '',
            assets: {
              logo: '',
              kits: [
                {
                  id: '',
                  type: 'away',
                  image: '',
                },
              ],
            },
            competitionIds: [],
          },
          kickOffDate: 'Mon 26 Oct',
          kickOffTime: '19:45',

          homeTeamScore: 0,
          awayTeamScore: 0,
          status: 'pending',
        },
      },
    ],
  },
];
