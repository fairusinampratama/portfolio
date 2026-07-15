# Portfolio Repository Rules

## Current implementation status

- Portfolio V1 is approved, implemented, public, and deployed at `https://fairusinampratama.github.io/`.
- The current homepage, four full case studies, NetEngine supporting entry, published copy, and sanitized evidence set are the approved baseline.
- GitHub, LinkedIn, Glints, JobStreet, and other job-profile integration was confirmed complete by Fairus on 15 July 2026.
- `docs/current-status.md` is the source of truth for delivery status. Older documents in `docs/` record the planning rationale; an unresolved item there is not active work unless it is carried forward in `docs/current-status.md`.
- Future work should maintain and improve the approved implementation. Do not restart discovery or scaffolding unless Fairus explicitly requests a redesign or new version.

## Purpose and audience

- Build a concise, recruiter-oriented argument for interviewing Fairus In'am Pratama for Laravel backend, PHP backend, backend-oriented full-stack, application-development, and internal-tools roles.
- Prioritize evidence of business understanding, workflow design, relational data design, integrations, migration/reconciliation, deployment, and production troubleshooting.
- Keep the positioning centered on Laravel backend/full-stack work unless later evidence clearly justifies a change.

## Accuracy

- Use the CV in `references/`, official records, public repositories, and approved first-party evidence as sources. Record the source for material claims.
- Never invent or imply users, traffic, revenue, adoption, performance gains, business outcomes, production scale, team size, ownership, or project results.
- Distinguish precisely between designed, built, technically completed, deployed, used operationally, prototyped, and not fully adopted.
- Keep the 1,100+ figure tied to active customer accounts in Fairus's ISP work environment. Do not equate it with monitoring rows, imports, historical records, or final migrated records.
- Keep the 3,000+ figure tied to E-Billing source records processed during migration. Do not call these active customers or final cleaned records.
- Describe E-Billing as deployed and technically completed but not fully adopted as the replacement billing platform.
- Describe E-Letter as a deployed undergraduate thesis application and use “ECDSA-based digital signatures,” not “PDF signing.”
- Describe PaddleOCR in Saleskit only as experimental or prototyped.
- Mark uncertain statements `TODO` until Fairus confirms them.

## Privacy and safe evidence

- Never publish customer or organization names, phone numbers, addresses, invoices, NIK/KK values, KTP images, credentials, private keys, internal IP addresses, router credentials, network topology, private documents, production configuration, or operational secrets.
- Use synthetic, test, or thoroughly anonymized data in screenshots and examples. If an asset cannot be safely sanitized, replace it with a diagram.
- Do not request production credentials or bypass authentication. Do not change data or submit real transactions on live applications.
- A live URL proves deployment only. It does not prove adoption, usage, impact, or scale.
- Use short code excerpts only after confirming the code may be publicly redistributed and the excerpt contains no sensitive details.

## Content and scope

- Write for scanning recruiters first and technical reviewers second. Lead with the problem, Fairus's role, engineering decisions, evidence, and honest status.
- Keep prose concise. Avoid a repository catalog, exhaustive skill lists, unsupported superlatives, and repeated ISP claims.
- Project scope is controlled by `docs/project-selection.md`; do not add projects without explicit approval and a distinct professional claim.
- Do not add a blog, CMS, login, portfolio admin panel, testimonials, skill percentages, progress bars, GitHub-stat widgets, or excessive animation unless explicitly approved later.
- Treat the currently published case-study copy and evidence as approved. New or materially changed claims still require factual confirmation and an approved source.

## Repository handling

- Work only inside this portfolio repository.
- Never modify source repositories or live applications from this repository's workflow.
- Never commit anything inside `references/`. Keep `/references/` ignored by Git and verify the ignore rule before commits.
- Do not commit credentials, production data, unredacted screenshots, temporary evidence exports, or internal documents.
- The repository is already implemented and public. Preserve the current architecture and scope unless Fairus authorizes a material change.
- Before each future production release, rerun the applicable factual, privacy, asset, link, and secret checks; do not assume the original approval covers newly added material.

## Quality gates

- Every published project claim must map to an approved source or sanitized asset.
- Every screenshot must follow `docs/screenshot-capture-guide.md` and pass a privacy review at full resolution.
- Case studies must remain useful without screenshots by using accessible captions, structured text, and diagrams where appropriate.
- Verify keyboard access, visible focus, semantic headings, color contrast, reduced motion, responsive layouts, metadata, canonical URLs, and link health before production deployment.
