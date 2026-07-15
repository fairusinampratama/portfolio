# Fairus In'am Pratama — Portfolio

Recruiter-oriented portfolio for Fairus In'am Pratama, a Laravel backend / full-stack developer building operational systems, business workflows, integrations, and production delivery pipelines.

**Live site:** [fairusinampratama.github.io](https://fairusinampratama.github.io/)

## Portfolio scope

The portfolio presents four evidence-backed case studies:

- TinggalJalan — live travel booking and operations platform.
- Customer Health — deployed and operationally used connectivity-monitoring system.
- E-Billing — deployed and technically completed ISP billing platform that was not fully adopted as the replacement platform.
- E-Letter — deployed undergraduate thesis application using ECDSA-based digital signatures and SHA-256 integrity checks.

Skynet NetEngine API appears as supporting technical evidence. Saleskit and unrelated repositories are intentionally excluded from the portfolio UI.

## Technology

- Astro and TypeScript
- MDX content collections
- Authored responsive CSS
- Playwright and axe accessibility checks
- Static deployment through GitHub Actions and GitHub Pages

## Local development

The supported Node.js and npm versions are declared in `.nvmrc` and `package.json`.

```bash
npm ci
npm run dev
```

Create and inspect a production build with:

```bash
npm run build
npm run preview
```

Run the complete repository quality gate with:

```bash
npm run verify
```

The verification pipeline checks formatting, linting, TypeScript, the static build, public assets, privacy-sensitive output, routes, links, responsive behavior, navigation, and accessibility.

## Deployment

Pushes to `main` run the complete verification pipeline before GitHub Actions deploys the generated static site to GitHub Pages. The production site is served from the root path at `https://fairusinampratama.github.io/`.

## Accuracy and privacy

Published claims follow the boundaries in `AGENTS.md`. In particular:

- The `1,100+` figure refers to active customer accounts in Fairus's ISP work environment, not monitoring rows or imported records.
- The `3,000+` figure refers to E-Billing source records processed during migration, not active customers or final cleaned records.
- E-Billing is described as deployed and technically completed, but not fully adopted as the replacement billing platform.
- E-Letter is a deployed undergraduate thesis application and uses the precise term “ECDSA-based digital signatures.”

Raw references, production data, credentials, and unsanitized evidence must never be committed. The `references/` directory remains ignored. Published screenshots must use public, synthetic, test, or thoroughly anonymized data.

## Documentation status

[`docs/current-status.md`](docs/current-status.md) records the current implementation and deployment status. The other files in `docs/` preserve the planning rationale and approved constraints; their historical TODOs are not automatically active work.

## Reuse and licensing

This repository is public for portfolio review and technical evaluation. No open-source license is granted for its source code, written content, CV, diagrams, screenshots, branding, or other assets. Do not copy, redistribute, or reuse them without Fairus In'am Pratama's explicit permission. Third-party products and trademarks shown in approved evidence remain the property of their respective owners.
