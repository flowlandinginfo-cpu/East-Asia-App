---
name: landing-page
description: Design and build beautiful, high-converting landing pages. Use when creating marketing pages, product pages, portfolio pages, or any public-facing web page that needs to look stunning and convert visitors. Covers hero sections, feature grids, testimonials, pricing tables, CTAs, and modern visual effects.
---

# Landing Page Design Skill

Build stunning, conversion-optimized landing pages.

## Page Structure

Every great landing page follows this proven structure:

```
1. Hero Section         — Hook visitors in 3 seconds
2. Social Proof Bar     — Logos, numbers, or trust badges
3. Problem Statement    — Pain points the visitor recognizes
4. Solution / Features  — What you offer and why it matters
5. How It Works         — 3-step simple process
6. Feature Deep Dive    — Detailed feature showcase
7. Testimonials         — Real user stories
8. Pricing              — Clear, simple pricing (if applicable)
9. FAQ                  — Address objections
10. Final CTA           — Strong closing call-to-action
11. Footer              — Links, legal, contact
```

## Section Templates

### Hero Section

```html
<section class="hero">
  <div class="hero-content">
    <span class="hero-badge">New Feature Available</span>
    <h1>Main value proposition in one clear sentence</h1>
    <p class="hero-subtitle">
      Supporting text that elaborates on the value.
      Keep it under 2 lines.
    </p>
    <div class="hero-actions">
      <a href="#" class="btn-primary">Get Started Free</a>
      <a href="#" class="btn-secondary">See How It Works</a>
    </div>
    <p class="hero-note">No credit card required</p>
  </div>
  <div class="hero-visual">
    <!-- Product screenshot, illustration, or video -->
  </div>
</section>
```

```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 6rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #0f172a;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  line-height: 1.6;
  margin-top: 1.5rem;
  max-width: 520px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  background: #eef2ff;
  color: #4f46e5;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary {
  padding: 0.875rem 2rem;
  background: #4f46e5;
  color: white;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}

.btn-primary:hover {
  background: #4338ca;
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.4);
}

.btn-secondary {
  padding: 0.875rem 2rem;
  background: white;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 3rem 1.5rem;
    text-align: center;
  }
  .hero-actions {
    flex-direction: column;
  }
  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
}
```

### Feature Grid

```html
<section class="features">
  <div class="section-header">
    <span class="section-tag">Features</span>
    <h2>Everything you need to succeed</h2>
    <p>A comprehensive set of tools designed for modern teams</p>
  </div>
  <div class="feature-grid">
    <div class="feature-card">
      <div class="feature-icon"><!-- SVG icon --></div>
      <h3>Feature Name</h3>
      <p>Brief description of the feature and its benefit to the user.</p>
    </div>
    <!-- Repeat for each feature -->
  </div>
</section>
```

```css
.section-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 4rem;
}

.section-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #eef2ff;
  color: #4f46e5;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
}

.section-header p {
  color: #64748b;
  font-size: 1.125rem;
  margin-top: 1rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #f1f5f9;
  background: white;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #e0e7ff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: #4f46e5;
}

.feature-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #64748b;
  line-height: 1.6;
}
```

### Testimonials

```css
.testimonial-card {
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  border: 1px solid #f1f5f9;
}

.testimonial-text {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #334155;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-name {
  font-weight: 600;
  color: #0f172a;
}

.testimonial-role {
  font-size: 0.875rem;
  color: #64748b;
}

/* Star rating */
.stars {
  color: #fbbf24;
  font-size: 1.125rem;
  margin-bottom: 1rem;
}
```

### Pricing Table

```css
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.pricing-card {
  padding: 2.5rem;
  border-radius: 1.25rem;
  border: 1px solid #e5e7eb;
  background: white;
  position: relative;
}

.pricing-card.featured {
  border-color: #4f46e5;
  box-shadow: 0 8px 30px rgba(79, 70, 229, 0.15);
}

.pricing-card.featured::before {
  content: 'Most Popular';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #4f46e5;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: #0f172a;
}

.price-period {
  font-size: 1rem;
  font-weight: 400;
  color: #64748b;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.pricing-features li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #475569;
}

.pricing-features li::before {
  content: '✓';
  color: #10b981;
  font-weight: 700;
}
```

### Final CTA Section

```css
.cta-section {
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  border-radius: 2rem;
  margin: 4rem 2rem;
  color: white;
}

.cta-section h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 520px;
  margin: 0 auto 2rem;
}

.btn-cta {
  display: inline-flex;
  padding: 1rem 2.5rem;
  background: white;
  color: #4f46e5;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
```

## Visual Effects

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Glass Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
}
```

### Decorative Blobs
```css
.blob {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  pointer-events: none;
}
.blob-1 { background: #818cf8; top: -100px; right: -100px; }
.blob-2 { background: #c084fc; bottom: -100px; left: -100px; }
```

## Performance Checklist

- [ ] All images optimized (WebP format, proper sizing)
- [ ] Lazy load images below the fold
- [ ] Critical CSS inlined
- [ ] Fonts preloaded with `font-display: swap`
- [ ] Smooth scroll behavior
- [ ] Responsive across all breakpoints (320px - 1920px)
- [ ] Animations respect prefers-reduced-motion
- [ ] CTA buttons are prominent and accessible

## Wrap Up

- Describe the page structure and key sections
- Highlight design decisions and visual approach
- Note the responsive behavior
- Confirm all CTAs are clear and accessible
