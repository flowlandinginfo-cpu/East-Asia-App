---
name: animation
description: Design and implement beautiful animations and transitions. Use when adding motion to UI — hover effects, page transitions, scroll animations, loading states, micro-interactions, or entrance/exit animations. Covers CSS animations, transitions, keyframes, and performance optimization.
---

# Animation Design Skill

Add purposeful, beautiful motion to interfaces.

## Animation Principles

1. **Purposeful** — Every animation should communicate something (state change, hierarchy, direction)
2. **Fast** — UI animations should be 200-500ms; anything longer feels sluggish
3. **Natural** — Use easing curves that mimic real-world physics
4. **Subtle** — Less is more; motion should enhance, not distract
5. **Performant** — Only animate transform and opacity; avoid layout-triggering properties

## Easing Reference

```css
/* Standard easings */
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Expressive easings */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);

/* When to use which */
/* ease-out: Elements entering the screen */
/* ease-in: Elements leaving the screen */
/* ease-in-out: Elements moving between positions */
/* ease-bounce: Playful, attention-grabbing (use sparingly) */
```

## Duration Guide

```
/* Micro-interactions (hover, toggle): 100-200ms */
/* Standard transitions (fade, slide): 200-300ms */
/* Complex animations (page transitions): 300-500ms */
/* Emphasis animations (pulse, shake): 500-1000ms */
/* Background animations (gradient shift): 3000-10000ms */
```

## Animation Library

### Entrance Animations

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Down */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slide In from Left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Staggered children entrance */
.stagger-children > * {
  animation: fadeInUp 0.4s var(--ease-out) both;
}
.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 80ms; }
.stagger-children > *:nth-child(3) { animation-delay: 160ms; }
.stagger-children > *:nth-child(4) { animation-delay: 240ms; }
.stagger-children > *:nth-child(5) { animation-delay: 320ms; }
```

### Micro-Interactions

```css
/* Button hover lift */
.btn-hover {
  transition: all 0.2s var(--ease-out);
}
.btn-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.btn-hover:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Card hover effect */
.card-hover {
  transition: all 0.3s var(--ease-out);
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

/* Link underline animation */
.link-animated {
  position: relative;
}
.link-animated::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s var(--ease-out);
}
.link-animated:hover::after {
  width: 100%;
}

/* Icon rotate on hover */
.icon-spin:hover svg {
  transition: transform 0.3s var(--ease-out);
  transform: rotate(90deg);
}

/* Ripple effect */
.ripple {
  position: relative;
  overflow: hidden;
}
.ripple::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%),
    rgba(255,255,255,0.3) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s;
}
.ripple:active::after {
  opacity: 1;
}
```

### Loading Animations

```css
/* Spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #e5e7eb;
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

/* Pulse dot */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.pulse-dot {
  animation: pulse 1.5s var(--ease-in-out) infinite;
}

/* Skeleton loading */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.skeleton {
  background: linear-gradient(90deg,
    #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.5rem;
}

/* Progress bar */
@keyframes progress {
  from { width: 0%; }
  to { width: var(--progress, 100%); }
}
.progress-bar {
  height: 4px;
  background: #6366f1;
  border-radius: 2px;
  animation: progress 2s var(--ease-out) forwards;
}

/* Three bouncing dots */
@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
.dots span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6366f1;
  animation: bounce 1.4s infinite both;
}
.dots span:nth-child(2) { animation-delay: 0.16s; }
.dots span:nth-child(3) { animation-delay: 0.32s; }
```

### Scroll Animations

```css
/* Reveal on scroll (use with IntersectionObserver) */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s var(--ease-out);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```javascript
// IntersectionObserver for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### Page Transitions

```css
/* Crossfade */
@keyframes pageEnter {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes pageExit {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* Slide transition */
@keyframes slidePageIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* View Transitions API (modern browsers) */
::view-transition-old(root) {
  animation: pageExit 0.3s var(--ease-in) forwards;
}
::view-transition-new(root) {
  animation: pageEnter 0.3s var(--ease-out) forwards;
}
```

### Background Animations

```css
/* Gradient shift */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animated-gradient {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

/* Floating element */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.float {
  animation: float 3s var(--ease-in-out) infinite;
}
```

## Performance Rules

1. **Only animate `transform` and `opacity`** — These are GPU-composited
2. **Use `will-change` sparingly** — Only on elements about to animate
3. **Avoid animating `width`, `height`, `top`, `left`** — These trigger layout
4. **Use `transform: translateZ(0)`** to promote to GPU layer when needed
5. **Respect `prefers-reduced-motion`**:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Wrap Up

- Describe each animation added and its purpose
- Confirm reduced-motion support is included
- Note any performance considerations
