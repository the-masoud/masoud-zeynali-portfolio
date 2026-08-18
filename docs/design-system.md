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
