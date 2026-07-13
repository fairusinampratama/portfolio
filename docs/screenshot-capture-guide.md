# Screenshot Capture Guide

## Before capturing

Do not capture anything yet. This guide becomes active only after Fairus approves the project selection and content boundaries.

When approved:

1. Use a test/staging environment or create clearly synthetic records in the application's supported test workflow. Never alter production merely for the portfolio.
2. Set the browser to 1440×1000 CSS pixels at 100% zoom unless a row specifies otherwise.
3. Hide bookmarks, browser profile, other tabs, extensions, desktop notifications, and OS taskbars where possible.
4. Capture PNG at full resolution. Do not annotate, resize, crop, or compress; Codex will handle those steps later.
5. Review the image at 100% before transfer. If sensitive data cannot be replaced or safely hidden, do not capture it; report the item as unavailable and it will be replaced with a diagram.
6. Never send unredacted originals. Sanitization must use opaque replacement, not translucent blur, for credentials, identifiers, keys, and readable text.

## TinggalJalan capture session

Public homepage and public route/booking screens will be captured by Codex later. Fairus needs only the authenticated operational evidence below.

### TJ-01 — Booking queue overview — required

- **Open:** Filament admin → bookings/list or the main booking operations queue.
- **Visible:** page heading, status filters/tabs, a small number of synthetic booking rows, status labels, and relevant queue actions.
- **Do not show:** real names, emails, phone/WhatsApp, trip dates associated with real travelers, booking IDs, notes, staff identities, payment references, or notification content.
- **Why:** proves that the public booking request becomes a managed operational workflow.
- **Viewport/device:** 1440×1000 desktop, 100% zoom.
- **Crop:** page content from heading through 4–6 rows; omit global admin navigation if it consumes space or reveals unrelated modules.
- **Replace/hide:** use `Demo Traveler 01`, synthetic route/date, non-production IDs, and safe amounts; remove tenant/company details if sensitive.
- **Filename:** `tinggaljalan-admin-booking-queue.png`

### TJ-02 — Booking detail and orchestration state — required

- **Open:** one synthetic booking detail page with pricing snapshot, availability/payment status, and communication state visible in one view if possible.
- **Visible:** record status, key state transitions or action area, pricing snapshot structure, and payment/communication status labels.
- **Do not show:** real customer identity/contact/address, gateway transaction IDs, invoice numbers tied to production, message bodies, webhook payloads, tokens, credentials, internal notes, or staff identity.
- **Why:** proves cross-system orchestration without needing a long screenshot sequence.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** primary detail panel and state/action area; exclude unrelated sidebar sections.
- **Replace/hide:** synthetic customer and booking; opaque replacement for all identifiers and contact fields.
- **Filename:** `tinggaljalan-admin-booking-detail.png`

### TJ-03 — Integration settings overview — optional

- **Open:** admin integration-settings index only if it has a safe overview showing configured/not-configured states without values.
- **Visible:** names of payment, email, and WhatsApp integrations and non-secret status indicators.
- **Do not show:** keys, secrets, sender addresses/numbers, callback URLs, account IDs, environment values, or partial secrets.
- **Why:** optional corroboration of configurable integrations; omit if TJ-02 already proves enough.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** integration cards/status labels only.
- **Replace/hide:** opaque blocks over every value; do not rely on password masking dots.
- **Filename:** `tinggaljalan-admin-integrations-overview.png`

## Skynet Customer Health capture session

### CH-01 — Operations health overview — required

- **Open:** authenticated main Customer Health dashboard or the most useful aggregate health view.
- **Visible:** aggregate status structure, clear visual prioritization, filters, and a few fully synthetic/anonymized rows or cards.
- **Do not show:** customer/server/area names, IP/MAC addresses, usernames, phone/address, ticket IDs, exact network locations, topology, staff names, or unapproved totals.
- **Why:** proves that scheduled data is converted into a usable operational overview.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** dashboard heading through the core health widgets/table; omit browser and unrelated navigation.
- **Replace/hide:** generic `Area A`, `Endpoint 001`, `Server A`; replace every total that could reveal production scale unless specifically approved.
- **Filename:** `customer-health-operations-overview.png`

### CH-02 — Downtime or area drill-down — required

- **Open:** downtime feed, area health detail, or equivalent actionable drill-down.
- **Visible:** filtering/grouping, status/duration structure, isolation/maintenance distinction if it can be shown safely, and synthetic entries.
- **Do not show:** real endpoints, customer identifiers, exact timestamps that reveal operational patterns, IPs, router/site details, ticket references, or internal comments.
- **Why:** proves the path from aggregate status to operational investigation.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** filter controls plus 5–8 synthetic rows/cards.
- **Replace/hide:** generic identifiers and deliberately non-production timestamps/durations.
- **Filename:** `customer-health-downtime-drilldown.png`

### CH-03 — Report preview — required

- **Open:** report preview/history screen, or render a report using synthetic data in an approved non-production environment.
- **Visible:** report sections, summary structure, issue grouping, and decision-relevant fields.
- **Do not show:** recipient/group/phone details, live WhatsApp content, customer/server names, IPs, real outage times, staff, or organization secrets.
- **Why:** proves that monitoring output was shaped for recurring management/maintenance decisions.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** report body only; exclude messaging provider UI.
- **Replace/hide:** synthetic report content and generic dates.
- **Filename:** `customer-health-report-preview.png`

### CH-04 — TV dashboard — optional

- **Open:** `/tv/areas`, `/tv/servers`, or the most distinct TV view while authenticated if required.
- **Visible:** large-format status hierarchy and hands-free layout.
- **Do not show:** the sensitive fields listed for CH-01/02.
- **Why:** optional evidence of operational display design; skip if visually redundant.
- **Viewport/device:** 1440×810 desktop/TV ratio.
- **Crop:** full application viewport.
- **Filename:** `customer-health-tv-dashboard.png`

## Skynet E-Billing capture session

### EB-01 — Synthetic invoice/customer state — required

- **Open:** a synthetic customer or invoice detail view that shows subscription, invoice/payment, and connection state together.
- **Visible:** relationship between customer/subscription/invoice, status labels, payment state, and isolation/reconnection action/status if safe.
- **Do not show:** real names, addresses, phones, emails, account numbers, invoices, payment proofs/references, package/network identifiers, router data, or notes.
- **Why:** proves the core business-state model and operational action boundary.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** primary summary and status/action panels; omit unrelated history if it contains sensitive data.
- **Replace/hide:** use `Demo Customer 001`, test invoice/reference, synthetic amount/date, and non-production network state.
- **Filename:** `ebilling-synthetic-invoice-state.png`

### EB-02 — Router synchronization review — required

- **Open:** router-sync comparison/staging/review interface, never a raw router terminal.
- **Visible:** comparison categories, mismatch/review state, operator action model, and synthetic rows.
- **Do not show:** router names/IPs, usernames, PPP secrets, profiles, customer identifiers, internal package names if sensitive, topology, credentials, or raw commands.
- **Why:** proves careful reconciliation between business records and network state.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** summary categories and 4–6 synthetic rows.
- **Replace/hide:** `Router A`, `Account 001`, generic package labels; opaque replacement for all connection details.
- **Filename:** `ebilling-router-sync-review.png`

### EB-03 — Migration/reconciliation summary — required

- **Open:** an existing safe migration summary/report, or recreate an equivalent summary from synthetic fixture output without importing production data.
- **Visible:** stages or categories such as source, normalized, matched, needs review, rejected; show the “more than 3,000 source records processed” wording only if the screen itself is a deliberately prepared portfolio-safe summary.
- **Do not show:** source rows/files, identities, addresses, phone numbers, invoices, package/customer mappings, error payloads, file paths, or final counts not approved.
- **Why:** proves migration was controlled and reconciled, not a blind import.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** aggregate summary and exception categories only.
- **Replace/hide:** all non-approved counts and labels; make it clear when content is a synthetic reconstruction.
- **Filename:** `ebilling-migration-reconciliation-summary.png`

### EB-04 — Sanitized dashboard overview — optional

- **Open:** main dashboard only if every financial and customer value can be replaced with synthetic values.
- **Visible:** module breadth and information hierarchy.
- **Do not show:** any real revenue, MRR, collection, aging, customer, package, area, or growth data.
- **Why:** optional orientation; omit if it does not prove more than EB-01.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** dashboard content only.
- **Filename:** `ebilling-sanitized-dashboard.png`

## E-Letter capture session

The official thesis-record crop will be captured by Codex later.

### EL-01 — Role-scoped letter queue — required

- **Open:** a secretary or approver dashboard with a synthetic letter queue.
- **Visible:** role context, letter categories/status, scoped queue, and safe actions.
- **Do not show:** real letter titles/numbers, institutions/committees if private, people, uploaded documents, verification IDs, or signatures.
- **Why:** proves role-based correspondence workflow.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** role heading, filters, and 4–6 synthetic rows.
- **Replace/hide:** generic roles are acceptable; use `Demo Letter 001` and synthetic categories.
- **Filename:** `eletter-role-letter-queue.png`

### EL-02 — Sequential signature status — required

- **Open:** one synthetic letter detail/status view after at least one test signature and before or after completion.
- **Visible:** ordered signer roles, signed/pending states, document status, and QR/verification action if present.
- **Do not show:** real names, handwritten signature images, signature strings, public/private keys, verification IDs tied to real documents, PDF content, or timestamps from real activity.
- **Why:** proves ordered authorization and signature workflow.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** workflow/status panel; avoid showing the full document.
- **Replace/hide:** role labels and synthetic users; all keys/signatures/IDs must be test-only or removed.
- **Filename:** `eletter-sequential-signature-status.png`

### EL-03 — Synthetic verification result — required

- **Open:** verification result for a generated test PDF and synthetic test record.
- **Visible:** valid document result, SHA-256 integrity outcome, signer-role result, and verification context.
- **Do not show:** any real document, name, letter number, institution record, signature/key, verification ID, or filesystem/upload metadata.
- **Why:** proves the public verification outcome without exposing administrative content.
- **Viewport/device:** 1440×1000 desktop; optional additional 390×844 mobile capture only if responsive behavior is important.
- **Crop:** verification heading and result details.
- **Replace/hide:** synthetic values throughout; long hashes/signatures should be omitted or replaced, not blurred.
- **Filename:** `eletter-synthetic-verification-result.png`

### EL-04 — Tampered-file result — optional

- **Open:** mismatch result using a deliberately modified synthetic test PDF.
- **Visible:** clear integrity-failure state and guidance.
- **Do not show:** raw hashes/signatures unless generated solely for the test and approved.
- **Why:** optional proof of failure-path design; the architecture diagram can cover it instead.
- **Viewport/device:** 1440×1000 desktop.
- **Crop:** failure result only.
- **Filename:** `eletter-synthetic-integrity-failure.png`

## Screenshot workload summary

- **Required from Fairus: 11 desktop screenshots** — 2 TinggalJalan, 3 Customer Health, 3 E-Billing, 3 E-Letter.
- **Optional from Fairus: 4 screenshots** — integration settings, TV dashboard, E-Billing overview, integrity-failure result.
- **Captured later by Codex from public pages:** TinggalJalan homepage, TinggalJalan route/booking screen, official thesis record.
- **No Saleskit or NetEngine screenshots.** Their workflows are better represented by diagrams and text evidence.

If a required screen cannot be populated with synthetic data or sanitized confidently, skip it and mark it `UNAVAILABLE — PRIVACY`; do not improvise with production data.
