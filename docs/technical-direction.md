# Technical Direction

> **Implemented planning baseline:** Portfolio V1 uses the recommended Astro and TypeScript static architecture and is deployed on the approved GitHub Pages alternative. Use [`current-status.md`](current-status.md) for current delivery status.

## Requirements

The site needs static deployment, fast first load, strong metadata, accessible HTML, four case-study routes, maintainable structured content, responsive images, diagrams, link checks, and minimal operational cost. It does not need authentication, a database, runtime APIs, a CMS, server actions, or extensive client state.

Official references reviewed on 13 July 2026:

- [Astro deployment guide](https://docs.astro.build/en/guides/deploy/)
- [Vite static deployment guide](https://vite.dev/guide/static-deploy.html)
- [Next.js static exports guide](https://nextjs.org/docs/app/guides/static-exports)

Avoid pinning a framework version in planning. Select the current stable release and lockfile only when implementation is approved.

## Option comparison

| Option | Strengths for this portfolio | Costs/risks | Fit |
| --- | --- | --- | --- |
| React + Vite | Familiar React model; simple static build; full UI freedom; easy hosting | Routing, metadata, content schemas, image handling, and static page generation require more assembly; invites unnecessary client JavaScript for document-like pages | Good, but more manual than needed |
| Next.js static export | Strong routing/metadata conventions; React ecosystem; can statically export suitable routes | Larger conceptual/tooling surface; static export has feature constraints; server/runtime features add no value here; easier to overbuild | Capable but unnecessarily complex |
| Astro static site | Static HTML by default, file-based routes, content-oriented architecture, selective client hydration, Markdown/content collections, image pipeline, broad static-host support | New framework conventions if Fairus has not used Astro; interactive React components require explicit integration, though V1 barely needs them | **Best fit** |
| Eleventy or hand-authored static HTML | Very small runtime and strong static output | More manual content typing, image pipeline, TypeScript/schema ergonomics, and component organization | Viable but lower maintainability for four evidence-rich studies |

## Recommendation

Use **Astro with TypeScript in static-output mode**, content collections for project/case-study data, semantic Astro components, and minimal client-side JavaScript.

Recommended implementation shape after approval:

- Astro current stable release, strict TypeScript.
- Content collections or typed data files for project metadata/status/evidence references.
- Markdown/MDX only where it improves editorial maintenance; prefer ordinary Markdown/Astro and avoid React-dependent MDX components in body copy.
- Authored CSS with design tokens and a small reset; no component framework by default.
- Astro image tooling for local approved assets, with responsive AVIF/WebP and explicit width/height.
- Inline or local SVG diagrams with accessible titles/descriptions; no third-party diagram runtime in production.
- Tiny progressive-enhancement scripts only for mobile navigation and an optional accessible image dialog.
- No backend, database, CMS, contact form, cookie banner, or analytics in V1.

## Why Astro

- The portfolio is primarily structured documents and evidence, so HTML-first output matches the problem.
- Separate case-study routes and per-page metadata are natural.
- Content can stay in Git and be reviewed alongside evidence/TODOs.
- Minimal hydration supports performance and reduces failure surface.
- The stack remains understandable to a Laravel/React developer without making React the delivery runtime for static prose.

This recommendation does not change Fairus's professional positioning; the portfolio's implementation technology is not itself a featured project.

## Content model

Proposed case-study schema:

- `slug`, `title`, `displayTitle`, `summary`;
- `order`, `depth`, `statusLabel`, `statusDetail`;
- `domain`, `role`, `dates`, `stack`;
- `problem`, `actors`, `constraints`;
- `decisions`, `integrations`, `testing`, `delivery`;
- `evidence[]` with type, source, caption, sanitization status;
- `limitations[]`, `todos[]`;
- `liveUrl`, `repositoryUrl`, permission flags;
- `seo` fields.

Do not expose internal source notes or unresolved TODOs in production output. Build validation should fail if required public fields or evidence approvals are missing.

## SEO and sharing

- Server-rendered/static semantic HTML for every route.
- Unique title, description, canonical URL, Open Graph/Twitter metadata.
- Person and WebSite structured data on the homepage; project schema only if it accurately represents the content.
- Sitemap and robots file.
- Descriptive URLs and internal linking.
- No keyword stuffing or auto-generated technology pages.

## Performance

Targets for representative production pages on a mobile profile:

- Lighthouse performance/accessibility/SEO/best-practices target of 95+ as a diagnostic, not the only acceptance measure.
- LCP ≤ 2.5 s, CLS ≤ 0.1, INP ≤ 200 ms under agreed test conditions.
- Initial JavaScript kept close to zero except navigation/dialog enhancement.
- Self-hosted fonts only if the subset/weight cost is justified; otherwise use a system stack.
- Responsive image derivatives, lazy loading below the fold, and no video background.

## Accessibility

- Static semantic landmarks and heading order.
- Automated checks with axe through Playwright plus manual keyboard, screen-reader landmark, 200% zoom, forced-colors, and reduced-motion review.
- Diagram text alternatives and evidence captions.
- Accessible image dialog only if implemented; a direct full-size link is an acceptable simpler alternative.

## Testing and validation

Recommended checks after scaffolding:

- Astro/TypeScript type and content-schema checks.
- Formatting and linting.
- Unit tests only for data transformations or nontrivial helpers; avoid testing static markup implementation details.
- Playwright smoke tests for homepage, four case-study routes, navigation, links, CV action, and responsive menu.
- Automated accessibility checks on every route plus manual checks.
- Link checker for internal and approved external links.
- Build-time assertion that no `TODO`, reference path, unapproved asset, or sensitive-pattern placeholder reaches production.
- Secret scanning and generated-site text inspection before publication.

## Hosting and deployment

Recommend a static host with preview deployments, custom-domain HTTPS, atomic deploys, and zero-cost suitability. **Cloudflare Pages is the default recommendation**, subject to Fairus's domain/DNS preference; Netlify, Vercel static hosting, or GitHub Pages are acceptable alternatives.

Decision criteria:

- no server runtime required;
- custom domain and HTTPS;
- deploy previews that contain only sanitized content;
- easy rollback;
- clear build logs;
- predictable free-tier limits;
- no need to publish the source repository.

Do not connect deployment until the repository contains no sensitive evidence. Preview URLs are still public or shareable and must pass the same privacy gate.

## Deployment cost

The static site should fit common free hosting tiers. Expected unavoidable cost is only a custom domain if Fairus does not already own one. Do not add a paid CMS, image CDN, analytics, form provider, database, or server runtime in V1.

## Repository-publication recommendation

The portfolio source may become public only after:

- all `references/` and raw evidence remain ignored and absent from history;
- screenshots are sanitized derivatives only;
- no proprietary source excerpts or employer/customer details appear without permission;
- secret/history scanning passes;
- license and README accurately describe reuse boundaries;
- Fairus approves the final content.

If any code/evidence rights remain unclear, keep the repository private and deploy from the private repository. Public deployment is the goal; public source is optional.

## Deferred technical features

- CMS or portfolio admin.
- Search, tags, RSS, blog, newsletter.
- Analytics; consider later only with a clear question and privacy review.
- Contact form or serverless function.
- Manual dark-mode toggle.
- Internationalization of the portfolio itself.
- React islands unless a validated interaction requires them.
- Automated GitHub activity/stats integration.
