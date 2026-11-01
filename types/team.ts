type TeamKit = {
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

type Team = {
  id: string;
  name: string;
  shortName: string;
  slug: string;

  countryId: string;

  assets: {
    logo: string;
    kits: TeamKit[];
  };

  competitionIds: string[];
};
