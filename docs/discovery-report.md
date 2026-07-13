# Discovery Report

## Scope and evidence reviewed

Discovery was performed on 13 July 2026 using:

- the latest English CV, `references/Fairus-Inam-Pratama-Laravel-Developer-CV-v3.2.pdf`;
- Fairus's [GitHub profile](https://github.com/fairusinampratama) and the six named public repositories;
- the [official UIN e-theses record](http://etheses.uin-malang.ac.id/76580/);
- public HTTP responses for all four named live deployments;
- official Astro, Vite, and Next.js deployment/static-export documentation for technical direction.

The public deployments returned the following evidence without authentication:

- TinggalJalan returned `200` at its public homepage and exposed a multilingual Laravel/Inertia page payload.
- Customer Health returned `200` after redirecting to `/admin/login`.
- E-Billing returned `200` at `/login`.
- E-Letter returned `200` at `/login`.

These checks prove availability/deployment only. They do not independently prove usage, adoption, impact, or scale.

## Strongest professional evidence

1. **End-to-end Laravel delivery.** TinggalJalan combines multilingual public UX, booking and operational workflows, relational configuration, payments and communications, admin tooling, tests, CI/CD, release artifacts, backups, health checks, and rollback safeguards. This is the best lead project because it shows product breadth without relying on employer-only context.

2. **Operational problem solving.** Customer Health turns recurring connectivity checks into dashboards, retention rules, reports, and information used for maintenance and technician-related decisions. Its strongest value is not “a dashboard”; it is the conversion of noisy operational signals into a repeatable decision workflow.

3. **Business systems and integration depth.** E-Billing covers customer and subscription state, invoices and payments, MikroTik isolation/reconnection, router synchronization, WhatsApp communication, and migration/reconciliation of more than 3,000 source records. Repository tests visibly cover isolation, invoice stabilization, legacy mapping, reconciliation, router/package consistency, scoped access, and WhatsApp settings.

4. **Security and research-backed workflow design.** E-Letter is an official undergraduate thesis and a deployed Laravel 12 application. The official record confirms the manual-administration problem, ECDSA objective, Laravel 12 context, undergraduate classification, and supervisors. Repository code confirms sequential role authorization, ECDSA-based signing, SHA-256 file hashing, QR/public verification routes, and PDF processing.

5. **Production and troubleshooting credibility.** The CV describes requirements, database design, CI/CD, deployment, documentation, and production troubleshooting. Repository evidence includes Docker/Nixpacks/Coolify/Hostinger deployment material, automated checks, health endpoints, queues/schedulers, and operational commands.

6. **Useful breadth beyond PHP.** NetEngine demonstrates Go/Gin, persistent RouterOS connections, goroutines, worker-based serialized processing, API-key authentication, monitoring, and deployment options. Used carefully, it shows backend breadth without changing the main Laravel positioning.

## Differentiators

- Fairus's work joins software design to operational reality: scheduling, retention, state transitions, reconciliation, router control, and support workflows.
- He has unusually coherent evidence across application logic, integrations, data cleanup, deployment, and troubleshooting for an early-career developer.
- The project set supports both external-product and internal-tool narratives.
- Leadership as General Secretary and later Organizational Advisor reinforces workflow, documentation, mentoring, and stakeholder-coordination credibility when kept brief and concrete.

## Weaknesses and credibility risks

- **Short formal experience window.** The portfolio must use evidence depth, not inflated seniority language, to compensate.
- **ISP concentration.** Customer Health, E-Billing, NetEngine, and Saleskit share the same operational setting. Showing all at equal depth would make the portfolio repetitive and overly narrow.
- **Adoption ambiguity.** E-Billing was technically completed and deployed but not fully adopted. Hiding this would damage trust; overemphasizing it would obscure the engineering achievement.
- **Scale-language risk.** The Customer Health README mentions a different approximate dataset size than the CV's 1,100+ active-account environment. The portfolio must use only the approved 1,100+ context and must not treat it as a monitoring-record count.
- **Repository wording is not outcome proof.** Phrases such as “high-performance,” “real-time,” “production ready,” “hundreds of routers,” or analytics values in READMEs describe intent or implementation. They are not verified production outcomes.
- **Public-source rights need confirmation.** TinggalJalan's public repository README calls the application private/proprietary and says ownership/distribution terms should be confirmed. Repository linking and code excerpts require approval.
- **Potentially sensitive UI.** ISP systems and Saleskit can expose customer identities, addresses, invoices, KTP images, GPS data, router information, and financial values. Screenshot selection must be minimal and synthetic/anonymized.
- **Thesis evidence gap.** The official full-text PDF was reachable, but available no-install PDF tooling could not complete extraction. Detailed methodology, test tables, conclusions, and limitations remain TODO pending a readable copy or Fairus-confirmed summary.

## Project overlap

- Customer Health and NetEngine both concern network visibility, but at different levels: Customer Health proves operational monitoring and reporting; NetEngine proves concurrent router middleware.
- E-Billing and NetEngine both touch MikroTik control. E-Billing should own the business-state/invoice/reconnection story; NetEngine should own the narrowly scoped concurrency/persistent-connection story.
- E-Billing and Saleskit both concern ISP customer lifecycle. E-Billing is much stronger and broader. Saleskit adds mobile field capture and geolocation, but those do not outweigh the overlap and privacy burden for Version 1.
- Customer Health and E-Billing can coexist as full case studies because one is monitoring/decision support and the other is billing/customer/network orchestration.

## Cautious claim language

- Say “worked in an ISP environment with 1,100+ active customer accounts,” not “monitored 1,100+ customers,” unless Fairus separately confirms the exact monitored population.
- Say “processed more than 3,000 source records during migration,” not “migrated 3,000 customers.”
- Say “reports supported maintenance and technician-related decisions,” not that the system reduced incidents, response time, or costs.
- Say “deployed and technically completed, but not fully adopted as the replacement billing platform” for E-Billing.
- Say “implemented ECDSA-based digital signatures and SHA-256 integrity checks,” not “secured all institutional documents” or “prevented fraud.”
- Say “prototyped PaddleOCR-assisted extraction,” not “implemented OCR.”
- Say “designed for persistent, concurrent RouterOS operations,” unless production use and scale are confirmed.

## Evidence gaps

- Fairus's exact responsibility/ownership boundary for TinggalJalan and each employer project.
- Whether public repository links and short code excerpts are authorized for proprietary/internal projects.
- Customer Health's exact monitored entities, report recipients, retention rationale, and operational-use examples that can be shared safely.
- E-Billing's migration source types, stages, reconciliation rules, final accepted-record counts, and non-adoption context that can be stated publicly.
- NetEngine's deployment/use status and whether it was integrated with another application.
- Saleskit's deployment/use status; OCR must remain prototype-only.
- Thesis methodology, detailed testing results, conclusions, and limitations from the full text.
- Sanitized screenshots for authenticated systems.
- A public, current English CV URL and confirmation that the present phone/email should appear on the site.
