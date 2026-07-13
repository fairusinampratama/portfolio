# Implementation Plan

No implementation begins until Phase 0 is explicitly approved.

## Phase 0 — Discovery approval

**Objective:** agree on positioning, project selection, evidence boundaries, information architecture, technical direction, and V1 scope.

**Deliverables:** approved planning documents; resolved approval decisions in `decisions-and-todos.md`; written permission boundaries for repository/live links and code excerpts.

**Dependencies:** Fairus reviews this planning set.

**Validation:** walk through the recruiter journey, project claims, status labels, screenshot workload, privacy constraints, and deferrals. Check that each selected project proves a distinct claim.

**Completion criteria:** Fairus explicitly approves or amends the positioning, four full studies, NetEngine supporting entry, Saleskit exclusion, homepage/case-study IA, Astro direction, V1 scope, and publication policy.

## Phase 1 — Factual content preparation

**Objective:** turn evidence and Fairus's confirmations into an approved factual content brief without writing marketing-heavy final copy.

**Deliverables:** completed fact sheets for homepage, experience, leadership, and each selected project; source ledger; approved status wording; confirmed role/ownership boundaries; thesis methodology/testing/conclusion/limitations notes; link-permission matrix.

**Dependencies:** Phase 0 approval; answers to critical factual TODOs; readable thesis full text or Fairus-confirmed extracts.

**Validation:** every claim maps to the CV, official record, repository evidence, live-deployment evidence, or Fairus confirmation. Review numbers for exact scope. Run a contradiction check across CV, GitHub READMEs, and planned copy.

**Completion criteria:** no critical `TODO` remains in content that will ship; E-Billing adoption language and all scale figures are approved; unconfirmed claims are removed rather than softened into implication.

## Phase 2 — Screenshot and diagram preparation

**Objective:** produce the minimum safe evidence set before page design relies on it.

**Deliverables:** 11 required sanitized authenticated screenshots or documented diagram substitutions; three public captures by Codex; approved captions; booking, deployment, monitoring, retention, billing-state, migration, E-Letter verification, and NetEngine concurrency diagrams; asset ledger with privacy approval.

**Dependencies:** approved fact sheets and capture guide; Fairus's authenticated access; safe test/synthetic records; confirmation that no production data must be modified.

**Validation:** inspect every image at full resolution; verify opaque removal of sensitive fields; compare captions to the exact claim; test diagram accuracy with Fairus; remove metadata; confirm no unredacted original enters the repository or task history.

**Completion criteria:** each full case study has 3–5 distinct visual evidence items, no asset duplicates another claim, all sensitive data is absent, and any unavailable screenshot has an approved diagram/text replacement.

## Phase 3 — Project scaffolding

**Objective:** create the smallest maintainable static-site foundation after approval.

**Deliverables:** Astro/TypeScript project; locked dependencies; scripts for dev/build/check/test; static route structure; typed content schema; initial README; license decision; `.gitignore` retaining `/references/`; CI baseline.

**Dependencies:** Phase 0 stack approval; Phase 1 content schema; repository-publication decision may remain private.

**Validation:** clean install, type/content check, production build, local preview, dependency audit, Git ignore check, and secret scan.

**Completion criteria:** only foundation/routes/schema exist; build is reproducible; no placeholder claims or sensitive assets are published; CI passes.

## Phase 4 — Design system

**Objective:** implement the approved light-first visual system and accessible content primitives.

**Deliverables:** tokens, typography, spacing/grid, status labels, buttons/links, project cards, case-study layout, evidence figure/caption, diagram container, callout, navigation, footer, and responsive behavior.

**Dependencies:** Phase 3 foundation; approved design direction; representative real content and assets to prevent designing against lorem ipsum.

**Validation:** visual review at 320/390/768/1024/1280/1440 widths; keyboard/focus test; contrast check; 200% zoom; reduced-motion and forced-colors review.

**Completion criteria:** primitives support all approved content without one-off styling; no horizontal overflow; focus and hierarchy are clear; accessibility baseline passes.

## Phase 5 — Homepage

**Objective:** deliver the complete two-minute recruiter argument.

**Deliverables:** hero, proof themes, ordered selected work, NetEngine supporting entry, experience, capabilities, working approach, leadership, contact, CV actions, metadata, social image, structured data where accurate.

**Dependencies:** approved homepage content; design system; authorized links; sanitized public CV.

**Validation:** timed 10-second/30-second/two-minute comprehension review with at least one recruiter-like reader and one technical reader; link checks; keyboard/mobile review; metadata preview.

**Completion criteria:** readers can state positioning and two differentiators; all status labels are visible; every CTA works; no unsupported metric or generic filler remains.

## Phase 6 — Selected case studies

**Objective:** publish four concise evidence-backed technical narratives.

**Deliverables:** separate TinggalJalan, Customer Health, E-Billing, and E-Letter pages with shared structure, unique metadata, 3–5 visual evidence items each, diagrams, explicit limitations, and contact/next-study actions.

**Dependencies:** Phases 1–2; homepage/design system; full thesis facts for E-Letter; permissions for external links/excerpts.

**Validation:** claim-to-source audit; Fairus factual review; privacy review at source and built-output levels; technical-reader review; mobile diagram and caption review; external link/status check.

**Completion criteria:** every case study answers problem, actors, role, workflow/data, decisions, integrations, testing/delivery, evidence, status, limitations, and reflection; no `TODO` appears in built pages.

## Phase 7 — Responsive, accessibility, and quality testing

**Objective:** verify the complete site under representative browsers, devices, assistive settings, and failure conditions.

**Deliverables:** automated type/build/lint/smoke/accessibility/link reports; manual QA checklist; fixed defects; performance report; sensitive-pattern and generated-output audit.

**Dependencies:** complete homepage and case studies.

**Validation:** Chromium/Firefox/WebKit smoke coverage where practical; keyboard-only; screen-reader landmarks/name checks; 200% and 400% zoom spot checks; forced colors; reduced motion; broken/missing image behavior; slow mobile performance profile.

**Completion criteria:** WCAG 2.2 AA target met for reviewed flows; no critical/serious axe issues; all routes and links work; no unexpected overflow; agreed Core Web Vitals/performance targets met; no sensitive text/assets in output.

## Phase 8 — Deployment and publication

**Objective:** release a safe, stable production portfolio with a reversible deployment process.

**Deliverables:** hosting project, custom domain/HTTPS if approved, production build, sitemap/robots/canonical URLs, deployment/rollback notes, optional public repository after its separate gate.

**Dependencies:** Phase 7 completion; final Fairus approval; domain/host decision; repository visibility decision.

**Validation:** production smoke test; DNS/HTTPS/canonical check; live metadata preview; external link check; source-map/build-output/privacy audit; rollback rehearsal or documented host rollback.

**Completion criteria:** production URL is stable and approved; no preview placeholder remains; all assets/links work; rollback path is known. Repository becomes public only if the separate privacy/licensing/history gate passes; otherwise it remains private.

## Phase 9 — GitHub, CV, LinkedIn, and job-platform integration

**Objective:** make the portfolio discoverable and consistent wherever recruiters encounter Fairus.

**Deliverables:** GitHub profile link update; LinkedIn Featured/contact update; CV portfolio URL; reusable short project links/descriptions for job platforms; consistent positioning text.

**Dependencies:** production URL; current approved CV; access to Fairus-controlled profiles. External edits require Fairus's explicit authorization at execution time.

**Validation:** verify public view while signed out, link previews, mobile URLs, and wording consistency. Ensure no platform truncation changes status meaning.

**Completion criteria:** GitHub, CV, LinkedIn, and selected job profiles point to the production URL and use consistent, accurate positioning.

## Smallest useful V1 acceptance criteria

- Homepage and four case-study routes are complete; NetEngine appears as a compact supporting entry; Saleskit is absent from the portfolio UI.
- Positioning and recruiter timing goals are met.
- Required facts are confirmed; no public `TODO` or unsupported metrics.
- Status distinctions are explicit and correct.
- Required screenshot set is sanitized, or approved diagrams replace unavailable items.
- All required workflow/architecture/deployment diagrams are accurate and accessible.
- Contact, GitHub, LinkedIn, live-app, approved repository, and CV links work.
- Static production build, metadata, sitemap, responsive behavior, WCAG 2.2 AA review, performance targets, link checks, secret scan, and privacy audit pass.
- `/references/` is ignored and absent from Git history.
- No blog, CMS, login, admin panel, testimonials, skill percentages, GitHub stats, or excessive animation.

## When to make the repository public

Only after Phase 7 and immediately before or after production deployment, and only if Fairus wants public source. Required gate: clean history, secret scan, ignored references, sanitized assets only, source/excerpt rights confirmed, license chosen, README accurate, and final content approved. Otherwise keep it private indefinitely.

## When to deploy

- A host-connected preview may be created after Phase 4 only if all included content/assets are already safe; preview URLs are treated as public.
- A release-candidate preview should be created after Phase 6.
- Production deployment occurs only after Phase 7 and Fairus's final approval.

## Exact first task after approval

Create a **factual content and evidence ledger** for the four full case studies—one row per publishable claim with source, approved wording, status, confidentiality, required asset, and Fairus confirmation. Resolve the critical TODOs before scaffolding Astro.
