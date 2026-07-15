# Project Selection

> **Approved scope baseline:** Portfolio V1 implements this selection: four full case studies, NetEngine as supporting evidence, and no Saleskit portfolio card. Use [`current-status.md`](current-status.md) for current delivery status. New projects still require explicit approval and a distinct professional claim.

## Evaluation method

Projects are ranked by recruiter relevance, evidence strength, distinctiveness, status clarity, privacy risk, and overlap. “Presentation depth” means portfolio treatment, not a judgment of code quality.

## Comparison

| Project | Domain and status | Strongest evidence | Unique professional claim | Overlap | Credibility/privacy risks | Recruiter value | Recommended depth |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TinggalJalan | Travel booking/operations; live production application | Public multilingual app; Laravel 13, React, Inertia, Filament, MySQL; booking/pricing; Midtrans and communications integration; tests and atomic CI/CD material | Fairus can deliver a complete customer-facing product and its operational/admin/deployment system | Some workflow and payment overlap with E-Billing | No traffic, booking, revenue, customer, or conversion claims. Confirm ownership and public source-link rights. Live page configuration does not by itself prove every integration is currently enabled. | Highest; broad and easy for non-technical recruiters to understand | **Full case study; first** |
| Skynet Customer Health | ISP monitoring; deployed and used operationally | One-minute scheduled checks, dashboards/TV views, reporting, retention, indexes, pruning; reports supported operational decisions; 1,100+ active-account work environment | Fairus turns recurring technical signals into a maintainable operational decision workflow | Network domain overlaps NetEngine; ISP setting overlaps E-Billing | Do not equate active accounts with monitored/imported rows. No unverified outage reduction, response-time, or performance claims. Screens are highly sensitive. | Very high for internal tools/backend/operations roles | **Full case study; second** |
| Skynet E-Billing | ISP billing/customer operations; deployed and technically completed, not fully adopted as replacement platform | Invoicing/payments, customer/subscription states, MikroTik isolation/reconnection, router sync, WhatsApp, robust feature tests, >3,000 migration source records | Fairus can model a complex business system, integrate operational services, and reconcile legacy data | ISP overlap with Customer Health; MikroTik overlap with NetEngine; customer lifecycle overlap with Saleskit | Adoption limitation must be prominent. Source records are not active customers/final records. Financial/customer/router screenshots need synthetic data. | Very high, especially for backend and business-systems roles | **Full case study; third** |
| E-Letter — Undergraduate Thesis | Institutional correspondence/security; deployed undergraduate thesis | Official thesis record; Laravel 12; six role routes; sequential authorization; ECDSA-based digital signatures; SHA-256 checks; PDF/QR verification; structured testing reported in thesis | Fairus can combine workflow design, role-based authorization, document integrity, cryptographic verification, and formal research/testing | Workflow/RBAC overlap with other systems, but security/research context is distinct | Always label it undergraduate thesis. Do not claim institutional adoption or fraud prevention. Detailed methodology/results/limitations remain TODO from full text. | High; diversifies domain and adds credible academic rigor | **Full case study; fourth** |
| Skynet NetEngine API | Go/Gin RouterOS middleware; public repository, deployment/use status unconfirmed | Persistent connection design, goroutines, worker/queue serialization, API-key authentication, monitoring endpoints, deployment configuration | Fairus understands concurrency and service boundaries beyond Laravel | Strong network/MikroTik overlap with Customer Health and E-Billing | README performance/scale language is not verified production evidence. Actual deployment/integration status is TODO. Internal network details must never be shown. | Medium-high as a technical breadth signal; lower for first-pass recruiters | **Compact supporting entry; fifth** |
| Skynet Saleskit | Laravel/Filament field registration; deployment setup present, actual deployment/use status unconfirmed | RBAC, mobile registration, KTP-image handling, GPS/map input, conditional lead data, technician/admin workflow, deployment setup | Fairus can design field-data capture workflows with geolocation and image handling | Heavy ISP/customer-lifecycle overlap with E-Billing; Filament/RBAC overlap with Customer Health | Extreme PII burden: KTP/NIK/address/phone/GPS/images. OCR only prototyped. Deployment/use status TODO. | Medium; useful but less differentiating than selected projects | **GitHub-only in V1; no portfolio card** |

## Recommended number and ordering

Recommend **five visible portfolio projects**: four full case studies plus one compact supporting entry.

1. **TinggalJalan** — complete product and production delivery.
2. **Skynet Customer Health** — operational monitoring and decision support.
3. **Skynet E-Billing** — business workflow, integrations, testing, and legacy-data reconciliation.
4. **E-Letter — Undergraduate Thesis** — secure role-based workflow, integrity verification, and formal academic context.
5. **Skynet NetEngine API** — compact evidence of Go concurrency and service design.

**Saleskit remains accessible through GitHub only** and should not receive homepage space in V1. Its most distinctive features—KTP capture and GPS—also create the greatest privacy burden, and its field-registration story is less valuable than E-Billing's broader customer lifecycle.

## Full-case-study trade-offs

Four complete case studies are the upper limit for a concise portfolio, but each covers a materially different hiring question:

- Can he ship a public product? TinggalJalan.
- Can he build an operational internal tool that informs decisions? Customer Health.
- Can he handle complex state, integrations, and imperfect legacy data? E-Billing.
- Can he design secure role workflows and explain a research-backed implementation? E-Letter.

Reducing to three would make scanning easier, but demoting either E-Billing or E-Letter would remove important evidence: E-Billing is the strongest backend/business-systems story, while E-Letter breaks ISP concentration and adds security/research depth. Keep all four pages concise and reveal details progressively.

## ISP concentration

The recommended full studies contain two ISP projects out of four. This is focused, not excessively narrow, because the claims differ. NetEngine makes three ISP-related entries out of five, so its compact treatment must be visually subordinate and framed as a backend-engineering sidebar. Do not give Saleskit equal visibility; doing so would make four of six visible projects ISP-related and would dilute the broader Laravel argument.

## NetEngine decision

NetEngine adds enough distinct value only as a supporting entry. It shows concurrency, persistent connections, worker-based serialization, API authentication, and Go. A full case study would distract from the Laravel positioning and repeat MikroTik/network context. Upgrade it later only if Fairus confirms real deployment/integration evidence and can provide a safe architecture story without network details.

## E-Letter thesis value

The thesis label increases credibility when stated clearly. It supplies an official external record, defined research problem, Laravel 12 context, cryptographic design, testing context, and documented limitations. It should not be presented as company production work or institutional adoption. The case study should show maturity through careful explanation, not through inflated outcomes.

## Deliberate non-selection rules

- Do not add a project because its technology is different; add it only if it proves a hiring-relevant claim not already covered.
- Do not show star counts, commit counts, or repository activity as proof of quality.
- Do not link proprietary repositories or quote source code until Fairus confirms public-sharing rights.
- Revisit Saleskit after V1 only if a target role specifically values field operations, geospatial capture, or mobile-first Filament workflows and fully synthetic assets are available.
