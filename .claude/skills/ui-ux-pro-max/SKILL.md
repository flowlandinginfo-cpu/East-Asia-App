---
name: ui-ux-pro-max
description: Comprehensive AI design intelligence for building professional UI/UX across multiple platforms and frameworks. Use when designing new pages, choosing styles/colors/fonts, reviewing UI code, or making product-level design decisions. Features 67 UI styles, 161 color palettes, 57 font pairings, 25 chart types, 99 UX guidelines, and 161 industry-specific reasoning rules.
---

# UI/UX Pro Max — Design Intelligence

Comprehensive design guide for web and mobile applications. Contains 50+ styles, 161 color palettes, 57 font pairings, 161 product types with reasoning rules, 99 UX guidelines, and 25 chart types across 10 technology stacks.

## When to Apply

Use when the task involves **UI structure, visual design decisions, interaction patterns, or user experience quality control**.

### Must Use
- Designing new pages (Landing Page, Dashboard, Admin, SaaS, Mobile App)
- Creating or refactoring UI components (buttons, modals, forms, tables, charts)
- Choosing color schemes, typography systems, spacing standards, or layout systems
- Reviewing UI code for UX, accessibility, or visual consistency
- Implementing navigation structures, animations, or responsive behavior
- Making product-level design decisions (style, information hierarchy, brand expression)

### Skip
- Pure backend logic, API/database design, DevOps, non-visual scripts

## Rule Categories by Priority

| Priority | Category | Impact |
|----------|----------|--------|
| 1 | Accessibility | CRITICAL — Contrast 4.5:1, Alt text, Keyboard nav, Aria-labels |
| 2 | Touch & Interaction | CRITICAL — Min 44x44px, 8px+ spacing, Loading feedback |
| 3 | Performance | HIGH — WebP/AVIF, Lazy loading, CLS < 0.1 |
| 4 | Style Selection | HIGH — Match product type, Consistency, SVG icons (no emoji) |
| 5 | Layout & Responsive | HIGH — Mobile-first, Viewport meta, No horizontal scroll |
| 6 | Typography & Color | MEDIUM — Base 16px, Line-height 1.5, Semantic color tokens |
| 7 | Animation | MEDIUM — Duration 150-300ms, Motion conveys meaning |
| 8 | Forms & Feedback | MEDIUM — Visible labels, Error near field, Progressive disclosure |
| 9 | Navigation Patterns | HIGH — Predictable back, Bottom nav ≤5, Deep linking |
| 10 | Charts & Data | LOW — Legends, Tooltips, Accessible colors |

## Quick Reference

### 1. Accessibility (CRITICAL)
- `color-contrast` — Min 4.5:1 for normal text, 3:1 for large text
- `focus-states` — Visible focus rings 2-4px on interactive elements
- `alt-text` — Descriptive alt for meaningful images
- `aria-labels` — aria-label for icon-only buttons
- `keyboard-nav` — Tab order matches visual order
- `heading-hierarchy` — Sequential h1→h6, no level skip
- `color-not-only` — Don't convey info by color alone
- `reduced-motion` — Respect prefers-reduced-motion
- `escape-routes` — Provide cancel/back in modals and multi-step flows

### 2. Touch & Interaction (CRITICAL)
- `touch-target-size` — Min 44x44pt (Apple) / 48x48dp (Material)
- `touch-spacing` — Minimum 8px gap between targets
- `loading-buttons` — Disable during async, show spinner/progress
- `error-feedback` — Clear error messages near problem
- `standard-gestures` — Use platform standard gestures consistently
- `haptic-feedback` — Use for confirmations; avoid overuse
- `safe-area-awareness` — Keep targets away from notch, Dynamic Island, gesture bar

### 3. Performance (HIGH)
- `image-optimization` — WebP/AVIF, responsive srcset, lazy load
- `font-loading` — font-display: swap, preload critical fonts
- `bundle-splitting` — Split by route/feature for faster TTI
- `content-jumping` — Reserve space for async content (CLS)
- `virtualize-lists` — Virtualize 50+ item lists
- `progressive-loading` — Skeleton screens for >1s operations

### 4. Style Selection (HIGH)
- `style-match` — Match style to product type
- `consistency` — Same style across all pages
- `no-emoji-icons` — Use SVG icons (Heroicons, Lucide)
- `platform-adaptive` — Respect iOS HIG vs Material idioms
- `dark-mode-pairing` — Design light/dark together
- `primary-action` — One primary CTA per screen

### 5. Layout & Responsive (HIGH)
- `mobile-first` — Design mobile-first, scale up
- `breakpoint-consistency` — Systematic breakpoints (375/768/1024/1440)
- `readable-font-size` — Min 16px body on mobile
- `line-length-control` — 35-60 chars mobile, 60-75 desktop
- `spacing-scale` — 4pt/8dp incremental system
- `viewport-units` — Prefer min-h-dvh over 100vh on mobile

### 6. Typography & Color (MEDIUM)
- `font-pairing` — Match heading/body font personalities
- `font-scale` — Consistent scale (12, 14, 16, 18, 24, 32)
- `weight-hierarchy` — Bold headings (600-700), Regular body (400)
- `color-semantic` — Semantic tokens (primary, secondary, error, surface)
- `color-dark-mode` — Desaturated/lighter tonal variants, not inverted
- `number-tabular` — Tabular figures for data columns/prices

### 7. Animation (MEDIUM)
- `duration-timing` — 150-300ms micro, ≤400ms complex
- `transform-performance` — Only animate transform/opacity
- `easing` — ease-out entering, ease-in exiting
- `motion-meaning` — Every animation expresses cause-effect
- `interruptible` — User tap cancels in-progress animation
- `stagger-sequence` — 30-50ms per item stagger

### 8. Forms & Feedback (MEDIUM)
- `input-labels` — Visible label per input (not placeholder-only)
- `error-placement` — Error below related field
- `inline-validation` — Validate on blur, not keystroke
- `progressive-disclosure` — Reveal complex options progressively
- `undo-support` — Allow undo for destructive actions
- `error-clarity` — State cause + how to fix

### 9. Navigation (HIGH)
- `bottom-nav-limit` — Max 5 items with labels
- `back-behavior` — Predictable, preserve scroll/state
- `deep-linking` — All key screens reachable via URL
- `modal-escape` — Clear close/dismiss affordance
- `state-preservation` — Back restores previous state
- `adaptive-navigation` — Sidebar ≥1024px, bottom/top nav small screens

### 10. Charts & Data (LOW)
- `chart-type` — Match chart to data type (trend→line, compare→bar)
- `legend-visible` — Always show legend near chart
- `tooltip-on-interact` — Exact values on hover/tap
- `responsive-chart` — Reflow on small screens
- `no-pie-overuse` — Switch to bar for >5 categories
- `screen-reader-summary` — aria-label describing key insight

## Common Rules for Professional UI

### Icons & Visual Elements
- No emoji as structural icons — use vector-based (Lucide, Heroicons)
- Vector-only assets that scale cleanly
- Consistent icon sizing via design tokens
- Single stroke width within same visual layer
- Touch target min 44x44pt with hitSlop expansion

### Light/Dark Mode
- Primary text ≥4.5:1, secondary ≥3:1 in both modes
- Borders/dividers visible in both themes
- Token-driven theming, not hardcoded hex
- Modal scrim 40-60% black for legibility

### Layout & Spacing
- Safe-area compliance for headers, tab bars, CTAs
- 4/8dp spacing rhythm consistently
- Readable text measure on large devices
- Scroll content not hidden behind fixed bars

## Pre-Delivery Checklist

### Visual Quality
- [ ] No emojis as icons (SVG only)
- [ ] Consistent icon family and style
- [ ] Semantic theme tokens (no ad-hoc colors)
- [ ] Press states don't shift layout

### Interaction
- [ ] All tappable elements have press feedback
- [ ] Touch targets ≥44pt/48dp
- [ ] Micro-interactions 150-300ms
- [ ] Disabled states clear and non-interactive
- [ ] Screen reader focus order matches visual

### Both Themes
- [ ] Text contrast ≥4.5:1 in both modes
- [ ] Borders visible in both modes
- [ ] Both tested before delivery

### Layout
- [ ] Safe areas respected
- [ ] Verified on small phone, large phone, tablet
- [ ] 4/8dp rhythm maintained
- [ ] Long text readable on larger devices
