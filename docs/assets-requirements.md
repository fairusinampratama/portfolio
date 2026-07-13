# Assets Requirements

## Asset principles

- Every asset must prove one distinct claim; decorative screenshots are excluded.
- Full case studies should contain approximately 3–5 screenshots total. Public screenshots can be captured later by Codex; Fairus is responsible only for approved authenticated views.
- Prefer diagrams for sequences, state changes, architecture, migrations, schedulers, queues, and deployments.
- Screenshot sanitization must be performed on a copy. Never upload an unredacted original to the repository, task, cloud editor, or public issue.
- Use browser-native captures at 2× density when available. Preserve an archival sanitized PNG; publish an optimized AVIF/WebP derivative later.
- Recommended desktop source viewport is 1440×1000 CSS pixels; mobile source viewport is 390×844. Final crops may be 16:10, 4:3, or 3:2 as specified.

## Portfolio-wide assets

| Project/section | Asset type | Purpose / claim proved | Recommended format | Desktop/mobile | Availability/auth | Privacy and sanitization | Diagram better? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage hero | Portrait or restrained monogram, optional | Human identity; not an engineering claim | Portrait 4:5, minimum 1200×1500, or SVG monogram | Desktop and mobile crops | TODO | No location metadata; Fairus approval required | No |
| Homepage / metadata | Social share image | Identifiable, professional link preview | 1200×630 | Shared | TODO | Use name/positioning; no app/customer screen | No |
| Experience | Employer-neutral timeline marks | Scanability, not logos/endorsement | CSS/text in implementation; no external logo needed | Both | Available as content | Do not use employer logos without permission | No |
| Contact / CV | Sanitized public English CV | Recruiter access to current résumé | Accessible PDF, stable filename | Both | Source CV available; publishable copy TODO | Confirm phone/email; remove metadata if needed; never expose `references/` | No |

## TinggalJalan

| Page/section | Asset type | Purpose / claim proved | Recommended dimensions | Desktop/mobile | Current availability | Auth required | Privacy risk / sanitization | Diagram better? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Project card and case-study header | Public homepage screenshot | Proves live, polished, multilingual customer-facing product | 16:10; source 1440×1000 | Desktop; optional mobile derivative | Public live page | No; Codex captures later | Avoid reproducing customer contact/payment details in crop; no claims from displayed reviews/stats | No |
| Product workflow | Public route/booking screenshot | Proves structured route/pricing/booking interface | 4:3 or 3:2; 1440×1000 | Desktop; optional 390×844 | Public live page | No; Codex captures later | Use empty form; no real traveler data or transaction | No |
| Operations evidence | Booking queue overview | Proves admin operational states/queue | 16:10; 1440×1000 | Desktop | Missing | Yes; Fairus capture | Synthetic bookings only; hide names, contacts, dates tied to people, amounts if real, booking IDs, notes, staff identities | No |
| Operations evidence | Booking detail / payment-communication status | Proves one booking's state, pricing snapshot, payment/communication orchestration | 4:3; 1440×1000 | Desktop | Missing | Yes; Fairus capture | Test record only; hide tokens, gateway references, email/phone/address, internal notes, invoice data, webhook details | No |
| Engineering explanation | Booking lifecycle diagram | Explains inquiry → availability → quote/payment → confirmation → completion and exception paths | SVG, max content width 1200 | Responsive | To create later | No | No real identifiers | **Yes; replaces step-by-step screenshots** |
| Delivery | CI/CD and atomic deployment diagram | Proves tests/build/artifact/backup/health/atomic release/rollback design | SVG, 16:9 or wide | Responsive | To create later from repository docs | No | No hostnames, usernames, secrets, server paths, topology | **Yes** |
| Optional technical evidence | Short CI workflow excerpt | Supports deployment safeguards | 40–70 lines maximum, rendered as text/code | Both | Repository available; permission TODO | No | Remove secrets, paths, provider identifiers; confirm redistribution rights | Diagram usually better; include only if interview value is clear |

## Skynet Customer Health

| Page/section | Asset type | Purpose / claim proved | Recommended dimensions | Desktop/mobile | Current availability | Auth required | Privacy risk / sanitization | Diagram better? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Case-study overview | Main health dashboard | Proves operational overview and prioritization | 16:10; 1440×1000 | Desktop | Missing | Yes; Fairus capture | Replace customer/server/area names; hide IPs, usernames, timestamps that reveal patterns, counts not approved, staff names | No |
| Operational view | Area or downtime view | Proves drill-down from aggregate status to actionable items | 16:10; 1440×1000 | Desktop | Missing | Yes; Fairus capture | Synthetic identifiers; no topology, IP/MAC, customer data, ticket numbers, exact locations | No |
| Reporting | Management/report preview | Proves structured reporting used for decisions | 4:3; 1440×1000 | Desktop | Missing | Yes; Fairus capture | Recreate with synthetic data; hide phone/group info, recipients, outage/customer identifiers, internal comments | No |
| Optional display mode | TV dashboard | Shows hands-free operational visibility | 16:9; 1440×810 | Desktop/large display | Missing | Yes; Fairus capture | Same substitutions; avoid revealing operational geography/topology | No; optional only if distinct from main dashboard |
| Engineering explanation | Monitoring loop diagram | Scheduler → checks → normalized results → dashboard/report → retention | SVG, wide | Responsive | To create later | No | Use generic “customer endpoint/server”; no network details | **Yes; replaces scheduler/config screenshots** |
| Data design | Retention/indexing diagram | Explains current-state vs detailed log data and pruning boundary | SVG, 4:3 | Responsive | To create later | No | No schema names if sensitive; use conceptual entities | **Yes** |
| Live evidence | Login-page link/status | Confirms deployment, not use | Text link and status label | Both | Public | No | Do not screenshot login unless visual treatment is needed; it proves little | Text link is better |

## Skynet E-Billing

| Page/section | Asset type | Purpose / claim proved | Recommended dimensions | Desktop/mobile | Current availability | Auth required | Privacy risk / sanitization | Diagram better? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Business workflow | Synthetic invoice/customer detail | Proves related customer, subscription, invoice, payment, and connection state | 16:10; 1440×1000 | Desktop | Missing | Yes; Fairus capture | Synthetic identity/account/invoice only; hide address, phone, package identifiers if internal, amounts if based on real invoice, proof images, payment references | No |
| Network integration | Router synchronization/reconciliation view | Proves staged comparison and operator review, not raw router access | 16:10; 1440×1000 | Desktop | Missing | Yes; Fairus capture | Replace router names, IPs, usernames, PPP secrets/profiles, customer IDs; no topology or credentials | No |
| Migration evidence | Migration/reconciliation summary | Proves controlled data processing and exceptions | 4:3; 1440×1000 | Desktop | Missing or may need safe recreation | Yes; Fairus capture | Use synthetic summary or approved aggregate only; no source rows/files, identities, invoices, addresses, phone numbers; label source-record count correctly | No |
| Optional overview | Dashboard with all values replaced | Establishes system breadth | 16:10; 1440×1000 | Desktop | Missing | Yes; Fairus capture | Replace every financial/customer/account value; remove company/customer identifiers | No; optional because it may duplicate other screens |
| Business logic | Billing and connection-state diagram | Invoice due/paid/void and isolate/reconnect transitions, including failure/manual-review paths | SVG, wide | Responsive | To create later | No | Generic systems and actors; no router details | **Yes; replaces many workflow screenshots** |
| Data work | Legacy migration/reconciliation pipeline | Extract/scrape → normalize → map → validate → reconcile → import/report | SVG, wide | Responsive | To create after facts confirmed | No | No source-system secrets, filenames, row samples, or customer fields | **Yes** |
| Testing | Curated test-evidence list or small code excerpt | Proves boundary-focused automated tests | Text list preferred; excerpt 30–50 lines optional | Both | Public repository | No | Confirm source rights; exclude fixtures/data | A concise evidence list is better than a screenshot |
| Live evidence | Login-page link/status | Confirms deployment only | Text link | Both | Public | No | No credentials or login screenshot needed | Text link is better |

## E-Letter — Undergraduate Thesis

| Page/section | Asset type | Purpose / claim proved | Recommended dimensions | Desktop/mobile | Current availability | Auth required | Privacy risk / sanitization | Diagram better? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Academic context | Official thesis-record crop | Proves title, author, undergraduate classification, institution | 16:10 or 4:3; 1440×1000 | Desktop | Public; Codex captures later | No | Crop out student ID/email if visible; link to official record | No |
| Workflow | Role dashboard / letter queue | Proves role-scoped correspondence workflow | 16:10; 1440×1000 | Desktop | Missing | Yes; Fairus capture | Synthetic letter titles/numbers/institutions/users; no private documents or staff/student identities | No |
| Approval | Letter detail with sequential signature status | Proves ordered role approvals | 4:3; 1440×1000 | Desktop | Missing | Yes; Fairus capture | Synthetic PDF/title/signers; hide signature strings, public/private keys, verification IDs tied to real documents | No |
| Verification | Valid-result page using synthetic document | Proves QR/public verification and SHA-256/ECDSA result presentation | 4:3; 1440×1000 | Desktop; optional mobile | Missing | Fairus prepares synthetic record, then capture | No real document, names, IDs, signatures, keys, or uploaded file metadata | No |
| Optional failure evidence | Tampered-file mismatch result | Proves integrity failure path | 4:3 | Desktop | Missing | Synthetic only | Ensure displayed hashes/signatures are generated test data | No; optional, can be a callout in the diagram |
| Engineering explanation | Approval/signing/verification diagram | Roles → ordered signatures → QR/PDF → hash/signature verification | SVG, wide | Responsive | To create later | No | Conceptual labels only; no keys, signatures, IDs | **Yes; replaces screenshots for every role** |
| Optional technical evidence | ECDSA/SHA-256 service excerpt | Supports implementation discussion | 30–50 lines | Both | Repository available; permission TODO | No secrets/keys; confirm source rights | Diagram plus prose is usually sufficient |

## NetEngine supporting entry

| Page/section | Asset type | Purpose / claim proved | Recommended dimensions | Desktop/mobile | Current availability | Auth required | Privacy risk / sanitization | Diagram better? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage supporting entry | Concurrency/service diagram | Persistent connection manager, request handler, worker queue, serialized router operations | SVG, 4:3 or wide | Responsive | To create later from repository | No | Generic Router A/B only; no IPs, credentials, fleet/topology, unverified scale | **Yes; use instead of a screenshot** |
| Optional evidence | Short worker/pool excerpt | Shows concurrency design | 30–50 lines | Both | Repository available; permission TODO | Remove environment/internal naming; confirm rights | Diagram preferred in V1 |

## Saleskit

No V1 assets. Do not request KTP, NIK, address, phone, GPS, or installation-photo screenshots. If Saleskit is added later, build an entirely synthetic demo dataset and use a diagram for the technician-to-admin workflow.

## File organization for later implementation

Proposed structure after approval (do not create yet):

```text
src/assets/work/<project>/
  public/
  authenticated-sanitized/
  diagrams/
```

Use lowercase kebab-case filenames from the capture guide. Never place unredacted originals inside the repository. Keep a private offline checklist that records source, capture date, sanitization actions, approver, and final derivative names.
