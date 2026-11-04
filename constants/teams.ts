// this are not and are also sample data

const team_Worthing: Team = {
  id: '',
  name: 'worthing',
  shortName: 'worthing',
  slug: 'worthing',
  countryId: '',
  assets: {
    logo: '',
    kits: [
      {
        id: 'worthing_home',
        type: 'home',
        image: '/Worthing_Home_2026_27.svg',
      },
    ],
  },
  competitionIds: [],
  league: '',
};

const team_southend: Team = {
  id: '',
  name: 'Southend',
  shortName: 'southend',
  slug: 'southend',
  countryId: '',
  assets: {
    logo: '',
    kits: [
      {
        id: 'southend_home',
        type: 'away',
        image: '/Southend_United_Home_Front_26_27.svg',
      },
    ],
  },
  competitionIds: [],
  league: '',
};

const tamworth_team: Team = {
  id: '',
  name: 'Tamworth',
  shortName: 'tamworth',
  slug: 'tamworth',
  countryId: '',
  assets: {
    logo: '',
    kits: [
      {
        id: 'tamworth_home',
        type: 'home',
        image: '/Tamworth_Home_2627_front.svg',
      },
    ],
  },
  competitionIds: [],
  league: '',
};

const scunthorpe_team: Team = {
  id: '',
  name: 'Scunthorpe',
  shortName: 'scunthorpe',
  slug: 'scunthorpe',
  countryId: '',
  assets: {
    logo: '',
    kits: [
      {
        id: 'scunthorpe_home',
        type: 'away',
        image: '/Scunthorpe_third_2627_front.svg',
      },
    ],
  },
  competitionIds: [],
  league: '',
};

export const teams_avaliable: Team[] = [
  tamworth_team,
  scunthorpe_team,
  team_southend,
  team_Worthing,
];
