export const statusLabels = {
  'live-production': 'Live production application',
  operational: 'Deployed \u00b7 Used operationally',
  'deployed-limited-adoption': 'Deployed \u00b7 Technically completed \u00b7 Not fully adopted',
  'deployed-thesis': 'Deployed undergraduate thesis',
} as const;

export type WorkStatus = keyof typeof statusLabels;
