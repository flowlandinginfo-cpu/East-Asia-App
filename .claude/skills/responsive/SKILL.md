---
name: responsive
description: Implement responsive and mobile-first design. Use when making layouts work across all screen sizes, fixing mobile display issues, implementing responsive navigation, or optimizing for touch devices. Covers breakpoints, fluid typography, responsive images, mobile patterns, and container queries.
---

# Responsive Design Skill

Build layouts that work beautifully across every screen size.

## Core Approach: Mobile-First

Always start with the mobile layout and enhance upward. Write base styles for mobile, then add complexity at larger breakpoints.

## Workflow

### 1. Breakpoint System

Standard breakpoints (matches Tailwind):
```css
/* Mobile first — base styles are for mobile */

/* Small (landscape phones): 640px+ */
@media (min-width: 640px) { }

/* Medium (tablets): 768px+ */
@media (min-width: 768px) { }

/* Large (laptops): 1024px+ */
@media (min-width: 1024px) { }

/* Extra large (desktops): 1280px+ */
@media (min-width: 1280px) { }

/* 2XL (large desktops): 1536px+ */
@media (min-width: 1536px) { }
```

### 2. Fluid Typography

Use clamp() for smooth scaling between breakpoints:

```css
h1 { font-size: clamp(2rem, 5vw + 1rem, 4rem); }
h2 { font-size: clamp(1.5rem, 3vw + 0.5rem, 2.5rem); }
h3 { font-size: clamp(1.25rem, 2vw + 0.5rem, 1.75rem); }
p  { font-size: clamp(1rem, 1vw + 0.75rem, 1.125rem); }
```

### 3. Layout Patterns

#### Responsive Grid
```css
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

#### Auto-fit Grid (no media queries needed)
```css
.auto-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
}
```

#### Sidebar Layout
```css
.sidebar-layout {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .sidebar-layout {
    grid-template-columns: 280px 1fr;
  }
}
```

#### Stack to Row
```css
.stack-to-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 640px) {
  .stack-to-row {
    flex-direction: row;
    align-items: center;
  }
}
```

### 4. Container Queries (Modern CSS)

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}

@container (min-width: 700px) {
  .card {
    grid-template-columns: 300px 1fr;
  }
}
```

### 5. Responsive Images

```html
<picture>
  <source media="(min-width: 1024px)" srcset="hero-lg.webp">
  <source media="(min-width: 640px)" srcset="hero-md.webp">
  <img src="hero-sm.webp" alt="Description" loading="lazy"
       style="width: 100%; height: auto; object-fit: cover;">
</picture>
```

```css
.responsive-img {
  width: 100%;
  height: auto;
  display: block;
}

.aspect-video {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

### 6. Mobile Navigation Patterns

#### Hamburger Menu
- Icon visible below 768px
- Full-screen or slide-in overlay
- Close on link click and outside tap
- Trap focus within open menu
- Animate with transform (not left/width)

#### Bottom Navigation (Mobile Apps)
- Fixed bottom bar with 3-5 items
- Icon + label for each item
- Active state indicator
- Safe area padding for notched phones:
```css
padding-bottom: env(safe-area-inset-bottom);
```

### 7. Touch Optimization

```css
/* Minimum touch targets */
button, a, [role="button"] {
  min-height: 44px;
  min-width: 44px;
}

/* Prevent zoom on input focus (iOS) */
input, select, textarea {
  font-size: 16px;
}

/* Smooth scrolling with snap */
.scroll-container {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.scroll-item {
  scroll-snap-align: start;
}
```

### 8. Responsive Spacing

```css
:root {
  --section-padding: 2rem 1rem;
}

@media (min-width: 768px) {
  :root {
    --section-padding: 4rem 2rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --section-padding: 6rem 2rem;
  }
}
```

### 9. Testing Checklist

Test at these widths:
- [ ] 320px (small phone — iPhone SE)
- [ ] 375px (standard phone — iPhone 12/13)
- [ ] 390px (newer phones — iPhone 14/15)
- [ ] 768px (tablet portrait — iPad)
- [ ] 1024px (tablet landscape / small laptop)
- [ ] 1280px (laptop)
- [ ] 1440px (desktop)
- [ ] 1920px (full HD)

For each breakpoint verify:
- [ ] No horizontal scrolling
- [ ] Text is readable without zooming
- [ ] Touch targets are large enough
- [ ] Images scale properly
- [ ] Navigation is accessible
- [ ] Forms are usable
- [ ] Tables scroll or reflow properly

### 10. Common Fixes

**Prevent horizontal overflow:**
```css
html { overflow-x: hidden; }
img, video, iframe { max-width: 100%; }
```

**Responsive table:**
```css
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

**Hide/show by breakpoint:**
```css
.mobile-only { display: block; }
.desktop-only { display: none; }

@media (min-width: 768px) {
  .mobile-only { display: none; }
  .desktop-only { display: block; }
}
```

## Wrap Up

- Confirm the layout works across all key breakpoints
- Note any compromises or alternative approaches considered
- List breakpoints where significant layout changes occur
