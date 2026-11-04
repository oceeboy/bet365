declare type TeamKit = {
  id: string;
  type: 'home' | 'away' | 'third';
  image: string;

  colors?: {
    primary: string;
    secondary?: string;
    tertiary?: string;
  };

  season?: string;
};

declare type Leaague = '';

declare type Team = {
  id: string;
  name: string;
  shortName: string;
  slug: string;

  countryId: string; // and league they play for
  league: Leaague;
  assets: {
    logo: string;
    kits: TeamKit[];
  };

  competitionIds: string[];
};
