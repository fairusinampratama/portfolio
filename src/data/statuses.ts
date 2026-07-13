export const statusLabels = {
  'live-production': 'Live production application',
  operational: 'Deployed ? Used operationally',
  'deployed-limited-adoption': 'Deployed ? Technically completed ? Not fully adopted',
  'deployed-thesis': 'Deployed undergraduate thesis',
} as const;

export type WorkStatus = keyof typeof statusLabels;
