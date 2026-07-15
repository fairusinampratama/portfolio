# Design Direction

> **Implemented planning baseline:** Portfolio V1 follows this visual direction and is deployed. Use [`current-status.md`](current-status.md) for delivery status; retain these principles for future changes unless a redesign is explicitly approved.

## Design objective

The visual system should communicate calm competence: structured enough for business systems, technical enough for engineering review, and restrained enough that evidence—not effects—carries the portfolio.

Avoid the standard developer-portfolio vocabulary of dark terminal backgrounds, neon gradients, code rain, floating technology icons, typing cursors, glassmorphism, oversized avatars, and scroll-driven spectacle.

## Theme recommendation

Use a **light-first theme for Version 1**.

- Light surfaces improve long-form case-study readability, screenshot clarity, printing, and recruiter familiarity.
- A dark-only theme would make dense operational screenshots and diagrams harder to integrate consistently.
- A fully adaptive theme is reasonable later, but doubles visual QA and asset-treatment work without strengthening the interview argument.

Define color tokens so dark mode remains possible, but defer the theme toggle and dark palette until after V1. Respect operating-system forced colors and do not block browser/user color preferences.

## Typography

Recommend a two-family system at most:

- **Primary sans:** a neutral, highly legible variable sans such as Inter, Source Sans 3, or system UI. Final choice depends on self-hosting/licensing and visual prototype approval.
- **Technical accent:** the same sans with tabular numerals, or a restrained mono such as IBM Plex Mono only for status labels, diagram annotations, and short code—not body paragraphs.

Guidelines:

- Body text 17–18 px desktop, 16–17 px mobile; line height approximately 1.55–1.7.
- Comfortable case-study measure around 65–75 characters.
- Headings should use weight/size and spacing, not all caps or decorative effects.
- Use tabular numerals only where comparison benefits; do not visually promote metrics that are not evidence.

## Color

Base palette:

- warm white or very light neutral background;
- near-black/navy text;
- cool gray borders and secondary text;
- one restrained blue-teal accent associated with systems and trust, not “cyber” aesthetics;
- semantic green/amber/red reserved for verified status, caution, and limitations.

All text and interactive-state combinations must meet WCAG 2.2 AA contrast. Status must never rely on color alone; pair color with explicit text and, if useful, a simple icon.

## Spacing and grid

- Use an 8 px-derived spacing scale with generous 72–112 px desktop section rhythm and 48–72 px mobile rhythm.
- Maximum page width around 1200–1280 px; reading columns remain narrower.
- Homepage selected-work cards may use a 12-column desktop grid, but card content should align consistently.
- Case studies use a stable main reading column plus optional sticky at-a-glance rail on wide screens; collapse to one column below tablet widths.
- Avoid dense bento grids. Operational credibility comes from hierarchy and labeling, not packing many tiles together.

## Section layout

- Hero: compact, left-aligned, and evidence-led; do not consume a full viewport without showing work.
- Selected work: one lead card for TinggalJalan, followed by balanced cards for Customer Health, E-Billing, and E-Letter. NetEngine is visibly secondary.
- Experience: simple timeline or stacked entries with roles/dates aligned; no logo carousel.
- Capabilities: grouped text with linked proof references, not badges alone.
- Leadership: compact editorial block or two-column text, not a separate visual identity.
- Contact: clear final section with a direct email action and quiet supporting links.

## Screenshot treatment

- Present screenshots as evidence plates with a subtle 1 px border, small radius, neutral background, and concise caption.
- Do not place screenshots inside fake laptop/phone mockups; they reduce readable area and imply marketing polish rather than engineering evidence.
- Crop to the UI region that proves the claim. Maintain enough context to show page hierarchy.
- Use one consistent aspect ratio within each gallery row; do not stretch.
- Provide full-resolution expansion only after privacy review and with an accessible close/focus pattern.
- Caption format: **what is shown** — **why it matters**. Include “synthetic data” or “anonymized” where applicable.

## Diagram treatment

- Use simple boxes, arrows, swimlanes, and explicit states.
- Prefer business/actor labels over class or table names.
- Separate systems by subtle surface tone; use the accent for the path being explained.
- Every diagram needs a title, legend only when necessary, and an equivalent text description.
- Desktop diagrams should fit the reading width; mobile versions should simplify or stack rather than shrink labels below readability.
- Do not imitate real network topology. ISP diagrams remain conceptual and omit identifiers, IPs, credentials, site layout, and fleet size.

## Motion

Use motion only for interface feedback:

- 120–200 ms focus/hover transitions;
- optional small section reveal only if content is never hidden from reduced-motion users and no layout shift occurs;
- no parallax, cursor effects, marquee, autoplay, animated counters, typing effects, or scroll-jacking.

Respect `prefers-reduced-motion` and ensure the experience remains complete with animation disabled.

## Responsiveness

Design content-first at 320, 390, 768, 1024, 1280, and 1440 px reference widths.

- Preserve title/status adjacency.
- Stack case-study fact lists and project cards.
- Keep buttons and links at least 44×44 CSS pixels where they behave as controls.
- Ensure long project names, URLs, code, and diagram labels wrap safely.
- Use responsive image sources and explicit dimensions to avoid layout shift.
- Avoid hover-only disclosure.

## Accessibility

- Semantic landmarks and one logical `h1` per page.
- Skip link, visible focus, logical keyboard order, and no keyboard traps.
- Meaningful alt text for evidence images; empty alt for purely decorative assets.
- Captions and nearby text must communicate the claim without requiring image inspection.
- Status labels and diagrams cannot depend on color alone.
- Form controls are unnecessary in V1; contact is by standard links.
- Test forced colors, 200% zoom, reduced motion, screen-reader landmarks, and keyboard-only use.
- Target WCAG 2.2 AA; treat it as an implementation acceptance gate, not a design note.

## Visual differentiation

Fairus's differentiator should appear through content architecture:

- explicit status labels;
- problem/workflow/evidence/limitation case-study rhythm;
- conceptual operational diagrams;
- restrained annotations that connect screenshots to engineering decisions;
- a consistent “evidence boundary” callout showing what is and is not claimed.

This is more credible and memorable than decorative effects.
