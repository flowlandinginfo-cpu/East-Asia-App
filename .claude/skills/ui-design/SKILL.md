---
name: ui-design
description: Design beautiful, modern UI components and interfaces. Use when creating new UI elements, pages, or improving visual design quality. Covers component design, styling, visual hierarchy, spacing, color usage, and modern design patterns (glassmorphism, neumorphism, gradients, shadows, etc.).
---

# UI Design Skill

Create beautiful, production-ready UI with modern design principles.

## Design Philosophy

Every element must be intentional. Follow these core principles:

1. **Visual Hierarchy** — Guide the user's eye with size, weight, color, and spacing
2. **Consistency** — Uniform spacing, colors, and typography throughout
3. **Whitespace** — Generous padding and margins; let content breathe
4. **Contrast** — Ensure text is readable against backgrounds (min 4.5:1 ratio)
5. **Depth** — Use shadows, layering, and subtle gradients to create dimension

## Workflow

### 1. Understand Context

- What type of component/page is being designed?
- What is the existing design language (if any)?
- What framework/library is in use? (React, Vue, Svelte, plain HTML/CSS, etc.)
- Is there a CSS framework? (Tailwind, Bootstrap, etc.)

### 2. Design Tokens First

Before writing component code, establish or reference these tokens:

```
Colors:     primary, secondary, accent, neutral, success, warning, error
Spacing:    4px base unit (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96)
Radius:     sm(4px), md(8px), lg(12px), xl(16px), 2xl(24px), full
Shadows:    sm, md, lg, xl (with proper color-matched shadows)
Typography: Display, Heading, Subheading, Body, Caption, Overline
```

### 3. Modern Design Patterns

Apply these when appropriate:

**Glassmorphism**
```css
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

**Soft Shadows (not flat black)**
```css
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -2px rgba(0, 0, 0, 0.1);
```

**Color-Matched Shadows**
```css
box-shadow: 0 8px 32px rgba(99, 102, 241, 0.25);
```

**Gradient Accents**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Subtle Borders**
```css
border: 1px solid rgba(0, 0, 0, 0.06);
```

**Micro-interactions on Hover/Focus**
```css
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
transform: translateY(-2px);
box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
```

### 4. Component Checklist

For every UI component, ensure:

- [ ] Proper spacing (padding, margin, gap)
- [ ] Visual states: default, hover, active, focus, disabled
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Consistent border-radius
- [ ] Appropriate font sizes and weights
- [ ] Smooth transitions (200-300ms)
- [ ] Icons sized proportionally (16px, 20px, 24px)
- [ ] Touch targets minimum 44x44px for interactive elements

### 5. Typography Scale

Use a modular scale (1.25 ratio recommended):

```
text-xs:   12px / 16px line-height
text-sm:   14px / 20px
text-base: 16px / 24px
text-lg:   18px / 28px
text-xl:   20px / 28px
text-2xl:  24px / 32px
text-3xl:  30px / 36px
text-4xl:  36px / 40px
text-5xl:  48px / 1
```

**Font weight usage:**
- Regular (400): Body text
- Medium (500): Subheadings, labels, navigation
- Semibold (600): Headings, buttons, emphasis
- Bold (700): Display text, hero sections

### 6. Color Usage Guidelines

- **Primary**: Main actions, links, key highlights
- **Secondary**: Supporting elements, secondary buttons
- **Neutral**: Text, borders, backgrounds
- **Accent**: Special callouts, badges, decorative elements
- Use opacity variants rather than creating new colors
- Dark text on light backgrounds, light text on dark backgrounds
- Never use pure black (#000) for text — use dark gray (#1a1a2e or #111827)
- Never use pure white (#fff) for backgrounds — use off-white (#fafafa or #f8fafc)

### 7. Layout Principles

- Use CSS Grid for 2D layouts, Flexbox for 1D
- Max content width: 1200-1440px for pages, 720px for reading content
- Consistent gap spacing in grids (16px, 24px, 32px)
- Card-based layouts with consistent padding (16px-24px)
- Responsive breakpoints: 640px, 768px, 1024px, 1280px, 1536px

### 8. Output Quality

Every output must be:
- Pixel-perfect with consistent spacing
- Visually polished (no rough edges, misaligned elements)
- Modern and aesthetically pleasing
- Ready for production use

## Framework-Specific Guidelines

**Tailwind CSS**: Use utility classes, leverage @apply for repeated patterns, use the theme() function for consistency.

**Plain CSS**: Use CSS custom properties (variables), organize with BEM or utility patterns, leverage modern CSS (container queries, :has(), nesting).

**React/Component Libraries**: Follow component composition patterns, use styled-components/emotion or CSS modules for scoped styling.

## Wrap Up

Present the design with:
- Visual description of what was created
- Key design decisions and why
- Any trade-offs made
