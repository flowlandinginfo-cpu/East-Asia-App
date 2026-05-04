---
name: frontend-slides
description: Create animation-rich HTML presentations from scratch or by converting PowerPoint files. Use when the user asks to create slides, presentations, pitch decks, or convert PowerPoint to HTML. Generates zero-dependency, self-contained HTML presentations that run entirely in the browser.
---

# Frontend Slides Skill

Create zero-dependency, animation-rich HTML presentations that run entirely in the browser.

## Workflow

### Phase 0: Detect Input Type
- **New presentation**: User wants slides from scratch
- **PowerPoint conversion**: User provides .pptx to convert to HTML
- **Enhancement**: User has existing HTML slides to improve

### Phase 1: Content Discovery
Gather information through guided questions:
- What is the purpose and audience?
- How many slides/sections needed?
- Do you have content ready or need it generated?

### Phase 2: Visual Style Selection
Instead of asking abstract design questions, generate **three distinct visual style previews** based on mood. Let users choose by seeing actual designs.

Style directions to consider:
- Editorial/magazine with bold typography
- Dark cinematic with dramatic lighting
- Clean corporate with sharp accents
- Retro/vintage with texture
- Minimalist with ample whitespace
- Bold/brutalist with raw energy

### Phase 3: Generate Complete Presentation
Build the full slide deck with selected content and styling.

### Phase 4: PowerPoint Conversion (if applicable)
Convert .pptx structure to semantic HTML while applying the chosen aesthetic.

### Phase 5: Delivery & Customization
Finalize and offer customization options.

### Phase 6: Sharing (Optional)
Deploy to live URL or export as PDF.

## Design Principles

### Avoid "AI Slop"
- **Distinctive typography**: Use fonts that are beautiful, unique, and interesting — NOT Arial, Inter, or system defaults
- **Committed color palettes**: Dominant colors with sharp accents outperform timid, evenly-distributed palettes
- **Unexpected layouts**: Asymmetry, overlap, grid-breaking elements

### Non-Negotiable: Viewport Fitting
Every slide MUST fit exactly within the viewport:
```css
.slide {
  height: 100vh;
  overflow: hidden;
}
```

### Responsive Spacing
All measurements use CSS `clamp()` functions, never fixed pixels:
```css
h1 { font-size: clamp(2rem, 5vw + 1rem, 5rem); }
padding: clamp(1rem, 3vw, 4rem);
```

### Content Density Limits
- **Title slides**: 1 heading + 1 subtitle + optional tagline
- **Content slides**: 1 heading + 4-6 bullet points max
- **Image slides**: 1 image + optional caption
- **Quote slides**: 1 quote + attribution

### Animation
- Staggered reveals on slide entry using `animation-delay`
- Smooth transitions between slides (300-500ms)
- Scroll-triggered animations for progressive disclosure
- Respect `prefers-reduced-motion`

### Technical Requirements
- **Zero dependencies**: No external JavaScript libraries needed
- **Self-contained**: Single HTML file with all CSS/JS inline
- **Keyboard navigation**: Arrow keys, Space, Escape
- **Touch support**: Swipe gestures for mobile
- **Print-friendly**: Clean print styles for PDF export

## Slide Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Presentation Title</title>
  <style>
    /* Typography, colors, animations */
    /* Slide layout and transitions */
    /* Responsive rules with clamp() */
  </style>
</head>
<body>
  <div class="slide" id="slide-1">
    <!-- Slide content -->
  </div>
  <div class="slide" id="slide-2">
    <!-- Slide content -->
  </div>
  <script>
    // Keyboard/touch navigation
    // Slide transitions
    // Animation triggers
  </script>
</body>
</html>
```

## Output

A single, self-contained HTML file that:
- Runs in any browser with no dependencies
- Navigates with keyboard and touch
- Features distinctive, memorable design
- Fits every slide to the viewport
- Includes smooth animations and transitions
