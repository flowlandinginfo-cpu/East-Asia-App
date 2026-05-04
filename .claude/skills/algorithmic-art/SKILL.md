---
name: algorithmic-art
description: Create generative art using p5.js with seeded randomness, flow fields, and particle systems. Use when the user asks to create generative art, computational art, creative coding, or algorithmic visual pieces. Produces self-contained HTML artifacts with p5.js.
---

# Algorithmic Art Skill

Create computational generative art using p5.js with seeded randomness and parametric exploration.

## Workflow

### Step 1: Algorithmic Philosophy

Create a 4-6 paragraph manifesto articulating a computational aesthetic movement. The philosophy should emphasize:

- Emergent behavior from mathematical processes
- Noise functions and randomness patterns
- Particle dynamics and field systems
- Temporal evolution and system states
- Parametric variation producing controlled chaos
- How "beauty emerges from the algorithm's execution — each run is unique"

### Step 2: p5.js Implementation

Express the philosophy through code in a self-contained HTML artifact.

**Structure Requirements:**
- Self-contained HTML file with all code inline
- p5.js loaded from CDN
- Seed-based randomness for reproducibility
- Parameter controls in a sidebar UI
- Seed navigation (prev/next/random/jump)

**Core Patterns:**

```javascript
// Seeded randomness
function setup() {
  randomSeed(seed);
  noiseSeed(seed);
}

// Flow fields
for (let x = 0; x < width; x += resolution) {
  for (let y = 0; y < height; y += resolution) {
    let angle = noise(x * 0.005, y * 0.005) * TWO_PI * 2;
    // draw based on angle
  }
}

// Particle systems
class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }
  follow(flowfield) {
    let x = floor(this.pos.x / resolution);
    let y = floor(this.pos.y / resolution);
    let force = flowfield[x + y * cols];
    this.applyForce(force);
  }
}
```

**Algorithmic Techniques:**
- **Flow fields**: Perlin noise mapped to vector fields guiding particles
- **L-systems**: Recursive grammar for organic branching structures
- **Voronoi diagrams**: Space partitioning for cellular patterns
- **Attractors**: Strange attractors (Lorenz, Clifford) for chaotic beauty
- **Reaction-diffusion**: Turing patterns and organic textures
- **Wave interference**: Overlapping sine/cosine patterns
- **Recursive subdivision**: Fractal-like geometric decomposition

**Parameters** should control system properties (quantities, scales, probabilities, ratios, angles, thresholds) rather than prescriptive "pattern types."

### Craftsmanship Standards

- Every algorithm should feel "meticulously crafted"
- Avoid visual noise while maintaining complexity and balance
- All art uses seeded randomness ensuring identical output from identical seeds
- Enable systematic variation exploration through seed navigation
- Color palettes should be carefully curated, not random RGB
- Layer multiple systems for depth and richness

### Output

A self-contained HTML file that:
- Runs entirely in the browser
- Includes p5.js from CDN
- Has sidebar controls for parameters
- Supports seed navigation
- Generates unique art from each seed
- Is visually stunning and computationally elegant
