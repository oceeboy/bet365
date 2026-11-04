declare type BetType = 'single' | 'double' | 'multiple';

declare type BetStatus = 'pending' | 'won' | 'lost' | 'void' | 'cashout' | 'partially-won';

declare type FixtureStatus =
  | 'upcoming'
  | 'live'
  | 'finished'
  | 'postponed'
  | 'cancelled'
  | 'abandoned';

declare type SelectionStatus = 'pending' | 'won' | 'lost' | 'void';

declare type MatchSelectionType =
  | 'match-winner'
  | 'double-chance'
  | 'correct-score'
  | 'over-under'
  | 'both-teams-to-score'
  | 'handicap'
  | 'half-time'
  | 'half-time-full-time'
  | 'total-goals'
  | 'corners'
  | 'cards'
  | 'outright'
  | 'other';

declare type TeamData = {
  id: string;
  name: string;
  shortName?: string;
  logo?: string;
};

declare type MatchScore = {
  home: number;
  away: number;
};

declare type MatchFixture = {
  id: string;
  sport: string;
  league: {
    id: string;
    name: string;
    country?: string;
    logo?: string;
  };

  homeTeam: TeamData;
  awayTeam: TeamData;

  kickOff: string;

  status: FixtureStatus;

  score: {
    current: MatchScore;
    halfTime?: MatchScore;
    fullTime?: MatchScore;
  };

  period?: string;
  minute?: number;
};

declare type SelectionType = {
  id: string;

  fixtureId: string;

  name: string;
  market: string;

  marketType: MatchSelectionType;

  odds: number;

  status: SelectionStatus;

  handicap?: number;

  line?: string;

  fixture: MatchFixture;
};

type BaseBet = {
  id: string;

  status: BetStatus;

  stake: number;

  potentialWinnings: number;

  actualWinnings?: number;

  totalOdds: number;

  selections: SelectionType[];

  createdAt: string;

  settledAt?: string;

  reference?: string;

  cashoutAvailable?: boolean;

  cashoutValue?: number;
};
