# Current Portfolio Status

**Status date:** 15 July 2026
**Release:** Portfolio V1
**Production URL:** <https://fairusinampratama.github.io/>

This document is the source of truth for the portfolio's implementation status. The remaining documents in this directory preserve the discovery and planning rationale that led to V1. Their TODOs and pre-implementation instructions are historical unless explicitly carried forward here.

## Completed and approved

- The Astro and TypeScript static portfolio is implemented and deployed from the public `fairusinampratama/fairusinampratama.github.io` repository.
- The site is served from the GitHub Pages root URL without a `/portfolio` base path.
- The recruiter-oriented Laravel backend / full-stack positioning is approved and published.
- The homepage includes selected work, experience, technical capabilities, leadership, contact, and CV access.
- Four separate case studies are published for TinggalJalan, Customer Health, E-Billing, and E-Letter.
- Skynet NetEngine API is included as compact supporting technical evidence. Saleskit remains excluded from the portfolio UI.
- Published project status labels and quantitative boundaries follow the accuracy rules in `AGENTS.md`.
- The public CV and approved project screenshots are included.
- Canonical metadata, Open Graph metadata, structured data, robots.txt, sitemap generation, responsive navigation, and a custom 404 page are implemented.
- Formatting, linting, TypeScript, build, asset, privacy, route, link, responsive, navigation, visual-capture, and accessibility checks are part of the automated verification pipeline.
- Pushes to `main` must pass verification before deployment to GitHub Pages.
- Fairus confirmed that GitHub, LinkedIn, Glints, JobStreet, and other relevant job profiles were updated and are functioning as intended.

## Approved V1 simplifications

The following differences from early planning are accepted and are not current defects:

- There is no separate “How Fairus works” homepage section; the hero, engineering-focus content, experience, and case studies communicate the working approach.
- Case studies use concise narrative sections instead of every proposed at-a-glance, role/date, reflection, and limitations block.
- Some originally proposed diagrams were consolidated or omitted when the published text and evidence already communicate the claim.
- TinggalJalan may contain more evidence images than the early three-to-five-image guideline.
- GitHub Pages was selected instead of the default Cloudflare Pages recommendation; GitHub Pages was explicitly listed as an acceptable static-host alternative.

## Ongoing maintenance rules

- Keep the current website structure and visual direction unless recruiter feedback or a new goal justifies a material change.
- Do not add features solely to satisfy an unused planning idea.
- Treat new claims, projects, screenshots, links, and metrics as unapproved until they pass the factual and privacy rules in `AGENTS.md`.
- Run `npm run verify` before merging or deploying changes.
- Keep `/references/`, raw evidence, production data, credentials, and private operational information out of Git history and public build output.
- Update this document when the release status, portfolio scope, deployment, or external-profile integration materially changes.

## Optional future work

There are no required website changes for V1. Future improvements should be driven by recruiter feedback, verified factual updates, broken links, accessibility findings, dependency maintenance, or a deliberate V2 decision.
