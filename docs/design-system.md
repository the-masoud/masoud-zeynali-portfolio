# Design System Specification

## 1. Design Philosophy
The visual and interactive foundation for **Masoud Zeynali**'s personal technology platform is built around **technical authority, architectural precision, and senior engineering discipline**. Rather than a generic software developer portfolio or template-driven resume, the interface embodies the aesthetics of a high-end enterprise infrastructure or security platform.

---

## 2. Visual Direction
- **Atmosphere**: Deep obsidian and graphite canvas with restrained cool cyan and electric blue accents.
- **Lighting & Contrast**: Ambient radial illumination with dark substrate layers. Visual elements are illuminated with subtle telemetry borders and glow accents.
- **Texture**: Fine coordinate dot matrix and subtle infrastructure grid lines (`rgba(255, 255, 255, 0.03)`).
- **Tone**: Mature, minimal, calm, confident, and precise. Avoids neon hacker tropes, cartoon illustrations, fake code mockups, and excessive glassmorphism.

---

## 3. Color Tokens

### Surface & Canvas
| Token | Hex Value | Application |
|---|---|---|
| `--canvas-950` | `#080a0f` | Primary viewport background |
| `--canvas-900` | `#0d1117` | Standard card and container surface |
| `--canvas-850` | `#121721` | Elevated component and popover surface |
| `--canvas-800` | `#18202c` | Interactive hover surface |
| `--canvas-700` | `#222d3d` | Active state and accent surface |

### Foreground & Typography
| Token | Hex Value | Application |
|---|---|---|
| `--fg-primary` | `#f8fafc` | Headings, primary brand text, emphasis |
| `--fg-secondary` | `#94a3b8` | Body copy, descriptive annotations |
| `--fg-muted` | `#64748b` | Labels, secondary metadata, inactive links |
| `--fg-subtle` | `#475569` | Coordinates, telemetry markers, timestamps |

### Technological Accents
| Token | Hex Value | Application |
|---|---|---|
| `--accent-cyan` | `#38bdf8` | Primary infrastructure highlight & telemetry |
| `--accent-blue` | `#3b82f6` | Secondary pipeline & automation markers |
| `--accent-steel` | `#64748b` | Subtle structural borders |
| `--accent-emerald`| `#10b981` | System status beacons |

---

## 4. Typography Scale & Hierarchy

### Fonts
- **Primary Body / UI**: System Sans-Serif Stack (`Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `sans-serif`)
- **Technical & Telemetry**: Monospace Stack (`JetBrains Mono`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `monospace`)

### Type Scale
- **Display / Hero H1**: `text-4xl` to `text-8xl` (40px–96px), tracking-tight, uppercase, font-black monospace with gradient clipping.
- **Positioning Statement**: `text-lg` to `text-3xl` (18px–30px), font-mono, medium weight, cyan accent.
- **Body Text**: `text-base` to `text-xl` (16px–20px), line-height 1.7, high readability, font-sans.
- **Telemetry & Labels**: `text-xs` to `text-sm` (10px–14px), font-mono, tracking-wider, uppercase.

---

## 5. Surface & Border Philosophy
- **Borders**: 1px subtle borders (`rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.14)`).
- **Corner Radii**: Precise and restrained (2px–8px). No overly bulbous or bubble-like cards.
- **Telemetry Corners**: Custom CSS pseudo-elements providing technical crosshairs/corner bounding on interactive cards (`.telemetry-corners`).

---

## 6. Motion Philosophy & Accessibility
- **Transitions**: Refined micro-interactions (`150ms`–`300ms` `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Animations**:
  - `fade-in` / `slide-up`: 0.8s smooth entrance on hero load.
  - `signal-flow`: SVG animated stroke offsets simulating data transmission.
- **Reduced Motion Support**:
  All continuous keyframes, signal flows, and transition delays are gracefully nulled when `prefers-reduced-motion: reduce` is detected in user system settings.

---

## 7. Responsive Breakpoints
- **Mobile (`<640px`)**: Single-column metrics layout, full-width touch targets, slide-out navigation drawer with accessible escape handling, optimized SVG topology scaling.
- **Tablet (`640px–1024px`)**: Balanced 2/3 column layout, fluid typography scaling.
- **Desktop (`>1024px`)**: 3-column metric telemetry panel, extended network topology vectors, full horizontal navigation bar.

---

## 8. Accessibility Principles
- **WCAG 2.1 AA Compliance**: All body text and accents exceed 4.5:1 contrast against dark canvases.
- **Semantic HTML**: Strict usage of `<header>`, `<nav>`, `<main>`, `<section>`, `<h1>`, `<h2>`, `<h3>`, `<p>`, `<footer>`, `<button>`.
- **Keyboard Navigation**: Distinct `:focus-visible` cyan halo ring (2px offset 3px), tab index ordering, and `Escape` key listeners for modal/drawer states.
- **Screen Reader Support**: Skip-to-content anchor link (`#main-content`) and ARIA landmarks.

---

## 9. Phase 2 Component Patterns

### Profile Editorial Composition
- Two-column asymmetric layout pairing a prominent editorial heading (`01 / PROFILE`) and technical coordinate tags with concise narrative prose.
- Horizontal Principles Rail: 4-column structured disciplinary indicators (Reliability, Security, Automation, Leadership) with micro-telemetry accents and compact typography.

### Vertical Career Timeline Architecture
- Continuous architectural vertical rail connecting progression nodes chronologically from operational foundation through infrastructure ownership up to IT leadership.
- Two-part composition: Left duration metadata and node beacon paired with right narrative container and verified responsibility highlights.
- Preserves vertical orientation across desktop, tablet, and mobile breakpoints without switching to cards or alternating layouts.

---

## 10. Phase 3 Component Patterns

### Technical Landscape Matrix
- Structured horizontal engineering matrix composed of six domain rows (Infrastructure & Platforms, Networking & Security, Messaging & Collaboration, Web & Cloud, Endpoint Operations, AI-Assisted Operations & Automation).
- Asymmetric 3-column desktop composition: Domain Index & Title (~25%), Capability Statement (~35%), and Verified Technology Labels (~40%).
- Neutral Technology Labels: Compact monospace chips with subtle borders (`bg-canvas-900 border-border-subtle`), avoiding vendor logos, skill meters, or rainbow badges.
- Responsive Matrix Flow: Stacks into clean vertical domain blocks on mobile (375px) with subtle separators and clear reading hierarchy.

---

## 11. Phase 4 Component Patterns

### Featured Engineering Dossier
- Single integrated technical dossier container (`bg-canvas-900/40 border border-border-subtle p-6 sm:p-8 lg:p-10 telemetry-corners`) presenting an in-depth case study of active engineering work.
- Two-part project header balancing title hierarchy (`INFRAFORGE`), descriptor (`AI-Assisted Infrastructure Operations via MCP`), project classification, static project development-state metadata treatment, and direct repository action.
- Symmetrical editorial split for problem space analysis and system design intent.

### Conceptual Architecture Flow
- Five-node disciplined sequence (`AI / MCP CLIENT` → `INFRAFORGE` → `SERVER ACCESS` → `LINUX INFRASTRUCTURE` → `DISCOVERY & INVENTORY`) establishing clear operational boundaries.
- Horizontal layout on desktop with subtle direction chevrons and vertical stacked sequence on mobile/tablet.
- Semantic HTML `<ol>` list structure with decorative connectors marked `aria-hidden="true"`.

### Engineering Principles Treatment
- Compact 4-column matrix (2x2 on tablet, 1-col on mobile) framing operational tenets (`LEAST PRIVILEGE`, `CREDENTIAL HYGIENE`, `CONTROLLED ONBOARDING`, `AUTOMATION WITH GUARDRAILS`) with micro-icons and monospace tags.

### Project Metadata & Scope Treatment
- Neutral technology badges for verified development scope (`Go`, `Model Context Protocol`, `SSH`, `Linux`, `PowerShell`, `Infrastructure Inventory`, `Inventory Reconciliation`, `Server Onboarding`, `Automation`).
- Structured engineering notes covering dedicated `infra` onboarding, inventory reconciliation, and explicit security design constraints without claiming completed production guarantees.

---

## 12. Phase 5 Component Patterns

### Operational Reasoning Lab
- Dedicated section (`#lab`) immediately following the Phase 4 engineering dossier, presenting a browser-only, simulated workbench for structured infrastructure reasoning.
- Clear technical header composition: marker (`05 / INTERACTIVE EXPERIENCE`), technical label (`BROWSER-ONLY SIMULATION`), primary heading (`OPERATIONAL REASONING LAB`), and supporting statement.

### Simulation Disclosure
- High-visibility structural note container (`bg-canvas-950/90 border border-border-panel`) placed prominently at the top of the workbench.
- Explicit technical copy clarifying the absence of live infrastructure connections, remote execution, application-level data requests, or real server data.

### Structured Operational Workbench
- Asymmetric two-region interactive workbench container (`bg-canvas-900/40 border border-border-subtle p-6 sm:p-8 lg:p-10 telemetry-corners`).
- Desktop composition: Scenario Selector (~30% left column) paired with Selected Scenario & Structured Workflow (~70% right column).

### Scenario Selector
- Semantic `<button>` elements with `aria-pressed` state attributes for keyboard accessibility.
- Static Selected-State Treatment: Subtle cyan border (`border-accent-cyan/60`), restrained left rail indicator (`border-l-2 border-l-accent-cyan`), dark surface elevation (`bg-canvas-950`), and typography emphasis.
- Explicitly avoids live system status metaphors such as pulsing beacons, status LEDs, or health indicators.

### Structured Workflow
- Three-stage sequential reasoning display (`01 / REQUEST` → `02 / OPERATIONAL BOUNDARY` → `03 / EXPECTED SYSTEM BEHAVIOR`).
- Horizontal 3-column layout on desktop connected with directional indicators, transitioning to comfortable vertical stacking on tablet and mobile viewports.
- Structured dark containers (`bg-canvas-950/80 border border-border-subtle`) emphasizing disciplined operational boundaries without synthetic verdicts or execution results.

### Responsive Reasoning-Workbench Behavior
- Desktop (1440px): 2-region side-by-side layout with horizontal 3-stage reasoning cards.
- Tablet (768px): Vertically stacked scenario selector and workflow blocks with preserved paragraph widths and clear touch targets.
- Mobile (375px): Disciplined single-column vertical hierarchy ensuring zero horizontal scroll, legible typography, and accessible touch interactions.
