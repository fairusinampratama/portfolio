# Decisions and TODOs

This is the control sheet for the planning-to-implementation handoff. `BLOCKING` items must be resolved before the dependent phase.

## Codex recommendations

- Retain Laravel backend/full-stack positioning with the refined “building … delivery pipelines” wording.
- Show five projects: four full case studies plus one compact NetEngine supporting entry.
- Order: TinggalJalan, Customer Health, E-Billing, E-Letter, NetEngine.
- Keep Saleskit GitHub-only in Version 1.
- Use a focused homepage plus four separate case-study pages.
- Use approximately 3–5 screenshots per full case study, with 11 required authenticated captures from Fairus and diagrams for sequences/architecture.
- Use a calm light-first visual system; defer manual dark mode.
- Use Astro + TypeScript, static output, typed content, minimal JavaScript, authored CSS, and no CMS/backend.
- Keep the repository private until privacy/licensing/history review; public source remains optional.
- Deploy a sanitized preview after core design/content exists and production only after complete QA and Fairus approval.
- Start post-approval work with the claim/evidence ledger, not scaffolding.

## Decisions Fairus must approve

| Priority | Decision | Recommendation |
| --- | --- | --- |
| BLOCKING | Positioning wording | Approve refined line in `portfolio-strategy.md` |
| BLOCKING | Project selection/depth/order | Four full studies; NetEngine compact; Saleskit GitHub-only |
| BLOCKING | E-Billing honesty label | “Deployed · Technically completed · Not fully adopted” |
| BLOCKING | IA | Homepage plus four separate case-study routes |
| BLOCKING | Screenshot workload and privacy substitutions | Approve 11 required + 4 optional authenticated captures |
| BLOCKING | Stack | Astro/TypeScript static site; no CMS/backend |
| BLOCKING | V1 scope | Homepage, four case studies, compact NetEngine, experience/capabilities/leadership/contact/CV |
| BLOCKING | Repository visibility | Keep private through QA; decide later whether public source is desirable |
| BLOCKING | Proprietary/public-source policy | Which repositories may be linked and whether short excerpts may be reproduced |
| High | Theme | Light-first V1; dark mode deferred |
| High | Hosting | Cloudflare Pages default, subject to domain/DNS preference |
| High | Public contact data | Email, phone, location, availability, work arrangement preferences |
| High | CV access | View/download behavior and approved sanitized public CV |
| Medium | Portrait | Provide approved portrait or use typography/monogram only |
| Medium | Analytics | None in V1 |
| Medium | NetEngine future page | Defer unless deployment/use evidence becomes available |

## Facts Fairus must confirm

### Cross-project and career

- `BLOCKING` Exact role/ownership boundary for every selected project: built alone, led, inherited, maintained, or contributed.
- `BLOCKING` Which employer/client/business names and relationships may be stated publicly.
- `BLOCKING` Project start/end dates and whether dates should be month/year or year only.
- `BLOCKING` Repository/live-link/public-code-excerpt permissions, especially TinggalJalan's proprietary/private-use note.
- Whether “sole software developer” applies to the entire PT Skynet period and what stakeholder collaboration should be acknowledged.
- Current target-role priority, work arrangement, relocation, and availability.
- Preferred English naming/order for institutions and supervisors.

### TinggalJalan

- Fairus's relationship to the product/business and exact responsibility boundary.
- Which integrations are enabled in production versus implemented/configurable.
- Project and launch dates.
- Safe-to-share examples of booking states and deployment incidents/decisions without metrics.
- Whether live and GitHub links may both be published.

### Customer Health

- Definitions and safe counts for monitored customers/endpoints/servers/areas; keep separate from 1,100+ active-account context.
- Exact report cadence/recipients safe to state and one anonymized example of a supported maintenance/technician decision.
- Retention period rationale and whether seven-day detailed-log retention is current.
- Deployment/use dates, operational actors, and failure-handling details.
- Whether any sanitized dashboard/report screenshot can be publicly approved.

### E-Billing

- Fairus's exact ownership boundary and project dates.
- Which source formats/systems fed the >3,000 source-record migration.
- Normalization, duplicate/conflict, mapping, validation, reconciliation, and rollback process.
- Any safe final accepted/rejected/review counts; if not approved, omit them.
- Which payment, MikroTik, router-sync, and WhatsApp flows were tested/deployed versus actually used.
- A concise, non-blaming public explanation of why the platform was not fully adopted.

### E-Letter

- `BLOCKING` Thesis methodology, structured testing method/results, conclusions, and limitations from the official full text.
- Preferred concise English display title/translation.
- Project/research dates and exact Laravel 12 implementation scope.
- Whether thesis diagrams/tables may be adapted under the repository license and institutional rules.
- Preferred display of supervisors: official record lists Afrah, Ashri Shabrina and Imamudin, Mochamad.
- Deployment date and whether “deployed thesis application” is sufficient without usage claims.

### NetEngine

- Whether it was deployed, integrated, or used beyond development.
- Safe description of connection scale, if any; otherwise make no scale claim.
- Whether the main branch architecture is the intended public evidence and whether the `feature/full-stack` branch should be ignored.

### Saleskit

- Actual deployment/use status.
- Confirmation that PaddleOCR remained experimental/prototyped.
- No answer is required for V1 screenshots because the project is GitHub-only.

### Contact and CV

- Preferred public email and whether the CV phone number should be public.
- Canonical LinkedIn/GitHub URLs.
- Approved public CV file, filename, and whether GPA/English-test details remain current/desired.
- Portrait choice and image rights.

## Unavailable or partially unavailable sources

- **Official thesis full text:** the PDF at `http://etheses.uin-malang.ac.id/76580/1/210605110095.pdf` was reachable and downloaded temporarily, but the available no-install PDF renderer/extractor could not complete text extraction. The official HTML record was inspected successfully. Detailed methodology, test results, conclusions, and limitations are therefore TODO rather than inferred.
- **Visual/interactive browser inspection:** the in-app browser runtime failed to initialize because of a Windows sandbox helper error. Public URLs were still inspected through read-only HTTP responses. No authenticated area was attempted.
- **Web search service:** direct and search requests returned no readable output in this session; direct first-party HTTP/API access succeeded for GitHub, official thesis metadata, live status, and official framework documentation.

All named GitHub repositories, the GitHub profile, official thesis HTML record, and all four live URLs were otherwise reachable. Authenticated pages were intentionally not inspected.

## Missing evidence

- Approved claim/evidence ledger.
- Authenticated screenshots listed in the capture guide.
- Approved diagrams and their factual inputs.
- Detailed thesis methodology/results/conclusions/limitations.
- Rights/permission record for proprietary repository links and excerpts.
- Sanitized current public CV.
- Optional portrait/social image.
- Fairus's reflection/learning notes for each case study.

## Missing screenshots

Required from Fairus after approval:

- TinggalJalan: booking queue; booking detail/orchestration state.
- Customer Health: operations overview; downtime/area drill-down; report preview.
- E-Billing: synthetic invoice/customer state; router-sync review; migration/reconciliation summary.
- E-Letter: role-scoped queue; sequential signature status; synthetic verification result.

Optional: TinggalJalan integration settings overview; Customer Health TV view; E-Billing sanitized dashboard; E-Letter integrity-failure result.

Codex later captures public TinggalJalan homepage/booking evidence and official thesis record.

## Diagram work replacing screenshots

- TinggalJalan booking lifecycle and CI/CD/atomic deployment.
- Customer Health monitoring/reporting loop and retention/indexing concept.
- E-Billing invoice/connection state machine and legacy migration/reconciliation pipeline.
- E-Letter ordered role-signing/QR/hash verification flow.
- NetEngine persistent-connection/worker-queue architecture.

These diagrams deliberately replace scheduler screens, configuration pages, raw router UI, every workflow step, migration row samples, every E-Letter role screen, and NetEngine dashboards.

## Safe to defer

- Saleskit portfolio entry and all Saleskit assets.
- Full NetEngine case study.
- Blog, CMS, search, tags, newsletter, RSS.
- Contact form and analytics.
- Dark-mode toggle and portfolio internationalization.
- Additional code excerpts.
- Testimonials, employer/client logos, and quantitative outcome claims.
- Automated GitHub stats/activity.
- Advanced motion or device mockups.

## Approval checklist

- [ ] Positioning approved.
- [ ] Project selection/depth/order approved.
- [ ] E-Billing adoption wording approved.
- [ ] Homepage and separate case-study IA approved.
- [ ] Screenshot guide and workload approved.
- [ ] Diagram list approved.
- [ ] Astro static stack and hosting direction approved.
- [ ] V1/deferred scope approved.
- [ ] Repository-publication policy approved.
- [ ] Critical facts and rights questions assigned for resolution.
