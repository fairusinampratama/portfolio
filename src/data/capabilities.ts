export const capabilities = [
  {
    title: 'Backend and workflows',
    items: [
      'Laravel application architecture',
      'Relational data modelling',
      'REST APIs, authentication, and role-based access',
      'Schedulers, queues, approvals, and stateful business workflows',
    ],
  },
  {
    title: 'Integrations and data',
    items: [
      'Midtrans payment workflows',
      'MikroTik and RouterOS operations',
      'Email and WhatsApp communication',
      'Legacy-data migration, cleaning, and reconciliation',
    ],
  },
  {
    title: 'Production delivery',
    items: [
      'Linux and container-based deployment',
      'GitHub Actions CI/CD',
      'Health checks, backups, and rollback planning',
      'Production diagnosis and operational documentation',
    ],
  },
] as const;
