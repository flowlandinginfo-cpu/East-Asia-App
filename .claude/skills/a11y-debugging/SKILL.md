---
name: a11y-debugging
description: Uses Chrome DevTools MCP for accessibility (a11y) debugging and auditing based on web.dev guidelines. Use when testing semantic HTML, ARIA labels, focus states, keyboard navigation, tap targets, and color contrast.
---

## Core Concepts

**Accessibility Tree vs DOM**: Visually hiding an element (e.g., `CSS opacity: 0`) behaves differently for screen readers than `display: none` or `aria-hidden="true"`. The `take_snapshot` tool returns the accessibility tree of the page, which represents what assistive technologies "see".

**Reading web.dev documentation**: Append `.md.txt` to any web.dev URL (e.g., `https://web.dev/articles/accessible-tap-targets.md.txt`) to fetch clean raw markdown.

## Workflow Patterns

### 1. Automated Audit (Lighthouse)

Run a Lighthouse accessibility audit for a comprehensive baseline:
1. Run `lighthouse_audit` with `mode: "navigation"` and `outputDirPath`
2. Check `scores` (0-1 scale) and `audits.failed` count
3. Parse report with:
   ```bash
   node -e "const r=require('./report.json'); Object.values(r.audits).filter(a=>a.score!==null && a.score<1).forEach(a=>console.log(JSON.stringify({id:a.id, title:a.title, items:a.details?.items})))"
   ```

### 2. Browser Issues & Audits

Use `list_console_messages` with `types: ["issue"]` and `includePreservedMessages: true` to catch native Chrome accessibility audits (missing labels, invalid ARIA, etc.).

### 3. Semantics & Structure

1. Navigate to the page
2. `take_snapshot` to capture accessibility tree
3. Check heading levels (h1-h6 sequential, no skips)
4. Verify DOM order matches visual reading order with `take_screenshot`

### 4. Labels, Forms & Text Alternatives

1. Locate buttons, inputs, images in `take_snapshot` output
2. Ensure interactive elements have accessible names
3. Verify form inputs have associated labels
4. Check images for `alt` text

### 5. Focus & Keyboard Navigation

1. Use `press_key` with `"Tab"` / `"Shift+Tab"` to move focus
2. `take_snapshot` to verify focus moved to expected element
3. If modal opens, verify focus traps within it

### 6. Tap Targets and Visuals

Tap targets should be at least 48x48 pixels with sufficient spacing. Use `evaluate_script` to measure element dimensions since the accessibility tree doesn't show sizes.

### 7. Color Contrast

1. `list_console_messages` with `types: ["issue"]` for Low Contrast issues
2. For manual checks, use `evaluate_script` to compute `getComputedStyle` colors
3. If automated methods fail, use `take_screenshot` for visual assessment

### 8. Global Page Checks

Verify document-level settings: `<html lang>`, viewport meta, page title, skip navigation links, and `<main>` landmark.
