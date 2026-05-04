# Nothing Design System — Components

## 1. CARDS / SURFACES
- Background: `--surface` or `--surface-raised`
- Border: `1px solid --border` or none
- Radius: 12–16px cards, 8px compact, 4px technical
- Padding: 16–24px. Flat surfaces, border separation, no shadows.

## 2. BUTTONS
- Primary: `--text-display` (#FFF) bg, pill-shaped (999px radius)
- Secondary: transparent with `--border-visible` border
- Text: Space Mono, 13px, ALL CAPS, 0.06em letter-spacing
- Padding: 12px 24px, min height 44px

## 3. INPUTS
- Underline style: `1px solid --border-visible` bottom border
- Labels above in Space Mono ALL CAPS
- Focus: border → `--text-primary`
- Error: border → `--accent`, error message below

## 4. LISTS / DATA ROWS
- Dividers: `1px solid --border` full-width
- Labels: Space Mono caps, `--text-secondary`
- Values: `--text-primary`, status coloring for values
- Hierarchy: indentation (16–24px), no tree lines

## 5. TABLES
- Headers: `--label` style, `--border-visible` bottom
- Numeric: Space Mono. Text: Space Grotesk
- Active row: `--surface-raised` bg + left `2px solid --accent`

## 6. NAVIGATION
- Mobile: bottom bar. Desktop: horizontal text bar
- Labels: Space Mono ALL CAPS
- Active: `--text-display` with dot/underline indicator
- Back button: circular 40–44px, thin chevron

## 7. TAGS / CHIPS
- Border: `1px solid --border-visible`, no fill
- Text: Space Mono, `--caption` size, ALL CAPS
- Active: inverts to `--text-display` border and text

## 8. SEGMENTED CONTROL
- Container: `1px solid --border-visible`
- Active: `--text-display` bg, `--black` text
- Text: Space Mono ALL CAPS, `--label` size
- Height: 36–44px, 200ms ease-out transition

## 9. TOGGLES / SWITCHES
- Pill track with circle thumb
- Off: `--border-visible` track, `--text-disabled` thumb
- On: `--text-display` track, `--black` thumb
- Min 44px touch target

## 10. SEGMENTED PROGRESS BARS
- Discrete rectangular blocks with 2px gaps
- Neutral: `--text-display`. Over-limit: `--accent`
- Good: `--success`. Moderate: `--warning`
- Heights: 16–20px hero, 8–12px standard, 4–6px compact

## 11. WIDGETS (DASHBOARD CARDS)
- `--surface` bg, 16px radius
- Hero metrics in large Doto/Space Mono, left-aligned
- Category: ALL CAPS Space Mono top-left

## 12. OVERLAYS
- No shadows; layering through background contrast + borders
- Modal: `rgba(0,0,0,0.8)` backdrop, `--surface` dialog, `1px solid --border-visible`, max 480px
- Bottom sheet: 2px handle bar, 16px top radius
- Dropdown: `--surface-raised`, 44px items

## 13. STATE PATTERNS
- Error: `--accent` borders and messages
- Empty: centered, 96px+ padding, `--text-secondary` headline
- Loading: segmented spinner or bar with percentage
- Disabled: opacity 0.4 or `--text-disabled` color
