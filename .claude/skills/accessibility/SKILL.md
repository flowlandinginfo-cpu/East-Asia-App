---
name: accessibility
description: Review and fix accessibility (a11y) issues to meet WCAG standards. Use when auditing code for accessibility compliance, fixing a11y bugs, adding ARIA attributes, improving keyboard navigation, or ensuring inclusive design. Covers WCAG 2.1 AA, screen readers, keyboard navigation, color contrast, and semantic HTML.
---

# Accessibility Design Skill

Ensure every interface is usable by everyone, meeting WCAG 2.1 AA standards.

## Workflow

### 1. Semantic HTML Audit

Check that the correct HTML elements are used:

```html
<!-- BAD -->
<div class="button" onclick="submit()">Submit</div>
<div class="header">Page Title</div>
<span class="link" onclick="navigate()">Click here</span>

<!-- GOOD -->
<button type="submit">Submit</button>
<h1>Page Title</h1>
<a href="/page">Go to page</a>
```

Key semantic elements to verify:
- `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>` for page structure
- `<h1>` through `<h6>` in proper order (no skipping levels)
- `<button>` for actions, `<a>` for navigation
- `<ul>`/`<ol>` for lists
- `<table>` with `<thead>`, `<th>`, and `scope` for data tables
- `<form>` with `<label>` for every input
- `<figure>` and `<figcaption>` for images with captions

### 2. ARIA Audit

Only use ARIA when HTML semantics aren't sufficient:

```html
<!-- Navigation landmarks -->
<nav aria-label="Main navigation">
<nav aria-label="Footer navigation">

<!-- Dynamic content -->
<div role="alert">Error: Please fill in required fields</div>
<div aria-live="polite" aria-atomic="true">3 results found</div>

<!-- Interactive widgets -->
<button aria-expanded="false" aria-controls="menu-1">Menu</button>
<div id="menu-1" role="menu" hidden>...</div>

<!-- State communication -->
<button aria-pressed="true">Bold</button>
<input aria-invalid="true" aria-describedby="error-1">
<span id="error-1">This field is required</span>
```

Common ARIA patterns to verify:
- Modals: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- Tabs: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`
- Accordions: `aria-expanded`, `aria-controls`
- Menus: `role="menu"`, `role="menuitem"`, `aria-haspopup`
- Loading: `aria-busy="true"`, or live region announcements

### 3. Keyboard Navigation

Every interactive element must be:
- **Focusable**: Via Tab key (or arrow keys for composite widgets)
- **Operable**: Via Enter/Space (buttons), Enter (links), Arrow keys (menus, tabs)
- **Visible**: Focus indicator must be clearly visible

```css
/* Visible focus indicator */
:focus-visible {
  outline: 2px solid #4f46e5;
  outline-offset: 2px;
}

/* Remove default only if custom focus is provided */
:focus:not(:focus-visible) {
  outline: none;
}
```

Check these keyboard patterns:
- [ ] Tab moves forward through interactive elements
- [ ] Shift+Tab moves backward
- [ ] Enter/Space activates buttons
- [ ] Escape closes modals, dropdowns, popovers
- [ ] Arrow keys navigate within menus, tabs, radio groups
- [ ] Focus is trapped inside open modals
- [ ] Focus returns to trigger element when modal closes
- [ ] No keyboard traps (user can always Tab away)
- [ ] Skip-to-content link exists as first focusable element

### 4. Color and Contrast

**WCAG AA Requirements:**
- Normal text: 4.5:1 contrast ratio minimum
- Large text (18px bold or 24px+): 3:1 minimum
- UI components and graphical objects: 3:1 minimum

```css
/* Good contrast examples */
.text-on-white { color: #374151; }     /* 10.5:1 on white */
.text-on-dark  { color: #e5e7eb; }     /* 12.3:1 on #111827 */
.link-color    { color: #2563eb; }     /* 4.6:1 on white */

/* Don't rely on color alone */
.error-field {
  border-color: #ef4444;
  border-width: 2px;        /* visual change beyond color */
}
.error-field::after {
  content: "⚠";             /* icon indicator */
}
```

**Color-blind considerations:**
- Don't use red/green as only differentiator
- Add patterns, icons, or labels alongside color
- Test with simulated color blindness filters

### 5. Images and Media

```html
<!-- Informative images need descriptive alt -->
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2 2024">

<!-- Decorative images need empty alt -->
<img src="decorative-line.svg" alt="">

<!-- Complex images need extended description -->
<figure>
  <img src="architecture.png" alt="System architecture diagram">
  <figcaption>
    The system consists of three layers: API gateway,
    microservices, and database cluster...
  </figcaption>
</figure>

<!-- Icons with meaning -->
<button>
  <svg aria-hidden="true">...</svg>
  <span>Delete</span>
</button>

<!-- Icon-only buttons -->
<button aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Video -->
<video controls>
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
</video>
```

### 6. Forms

```html
<form>
  <!-- Always associate labels with inputs -->
  <label for="email">Email address</label>
  <input id="email" type="email" required
         aria-describedby="email-help email-error"
         aria-invalid="false">
  <span id="email-help">We'll never share your email</span>
  <span id="email-error" role="alert" hidden>
    Please enter a valid email address
  </span>

  <!-- Group related fields -->
  <fieldset>
    <legend>Shipping address</legend>
    <!-- fields here -->
  </fieldset>

  <!-- Clear submit button -->
  <button type="submit">Create account</button>
</form>
```

Form checklist:
- [ ] Every input has a visible `<label>`
- [ ] Required fields are indicated (not by color alone)
- [ ] Error messages are specific and associated via `aria-describedby`
- [ ] Errors are announced by screen readers (`role="alert"` or `aria-live`)
- [ ] Form can be completed entirely by keyboard
- [ ] Input types are correct (`email`, `tel`, `url`, etc.)

### 7. Motion and Animation

```css
/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 8. Testing Tools

Run these checks:
- Keyboard-only navigation test (unplug the mouse)
- Screen reader testing (VoiceOver, NVDA)
- Browser DevTools accessibility inspector
- Automated: axe-core, Lighthouse accessibility audit
- Contrast checker for all text/background combinations

## Output Format

For each issue found:
```
[Level: A / AA / AAA]
[WCAG Criterion: e.g., 1.4.3 Contrast]
[Severity: Critical / Major / Minor]
[Element: specific selector or component]
[Issue: what's wrong]
[Fix: code showing the correction]
```

## Wrap Up

- Summary of issues by severity
- Total WCAG compliance score estimate
- All Critical and Major issues fixed in code
- Remaining Minor issues listed for future work
