---
name: design-doc
description: Create beautifully formatted documents, README files, landing pages, and content layouts. Use when creating or improving any text-heavy content — documentation, READMEs, wikis, changelogs, reports, proposals, or formatted HTML/Markdown pages. Focuses on readability, visual structure, and professional presentation.
---

# Design Document Skill

Create beautifully structured, visually appealing documents and content.

## Document Design Principles

1. **Scannable** — Users scan before they read. Use headings, bullets, bold text, and whitespace
2. **Hierarchical** — Clear heading levels, progressive detail
3. **Consistent** — Uniform formatting patterns throughout
4. **Purposeful** — Every section has a clear function
5. **Beautiful** — Professional typography and layout

## Workflow

### 1. Determine Document Type

Identify and apply the right template:
- **README**: Project overview, setup, usage, contribution guide
- **Technical Doc**: Architecture, API reference, integration guide
- **Proposal/RFC**: Problem, solution, alternatives, timeline
- **Changelog**: Versioned changes in Keep a Changelog format
- **Report**: Executive summary, findings, recommendations
- **Landing Page**: Hero, features, social proof, CTA
- **Wiki Page**: Concept explanation, examples, related links

### 2. Content Structure

#### README Template
```markdown
# Project Name

> One-line description that explains value proposition

[![Badge](url)](#) [![Badge](url)](#)

Brief 2-3 sentence overview. What it does, who it's for, why it matters.

## Features

- **Feature 1** — Short description
- **Feature 2** — Short description
- **Feature 3** — Short description

## Quick Start

\`\`\`bash
# Install
npm install package-name

# Use
npx package-name init
\`\`\`

## Documentation

| Topic | Description |
|-------|-------------|
| [Getting Started](link) | First-time setup guide |
| [Configuration](link) | All configuration options |
| [API Reference](link) | Complete API documentation |
| [Examples](link) | Example projects and snippets |

## Contributing

[Guidelines](CONTRIBUTING.md) | [Code of Conduct](CODE_OF_CONDUCT.md)

## License

[MIT](LICENSE) — Your Name
```

#### Technical Doc Template
```markdown
# Document Title

> Last updated: YYYY-MM-DD | Status: Draft/Review/Final

## Overview

What this document covers and who should read it.

## Background

Context needed to understand the content.

## Details

### Section 1

Content with code examples, diagrams, and tables.

### Section 2

More detailed content.

## Reference

Tables, API endpoints, configuration options.

## See Also

- [Related Doc 1](link)
- [Related Doc 2](link)
```

### 3. HTML Document Styling

When creating HTML documents or pages with text content:

```css
/* Beautiful document typography */
.document {
  font-family: 'Inter', system-ui, sans-serif;
  color: #1a1a2e;
  line-height: 1.7;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem;
}

.document h1 {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.document h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

.document h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
}

.document p {
  margin-bottom: 1.25rem;
}

.document code {
  background: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.875em;
  font-family: 'JetBrains Mono', monospace;
}

.document pre {
  background: #1f2937;
  color: #e5e7eb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.document blockquote {
  border-left: 4px solid #6366f1;
  padding-left: 1rem;
  color: #4b5563;
  font-style: italic;
  margin: 1.5rem 0;
}

.document table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

.document th {
  background: #f9fafb;
  font-weight: 600;
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 2px solid #e5e7eb;
}

.document td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f3f4f6;
}

.document ul, .document ol {
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}

.document li {
  margin-bottom: 0.5rem;
}

/* Callout boxes */
.callout {
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  margin: 1.5rem 0;
}
.callout-info { background: #eff6ff; border-left: 4px solid #3b82f6; }
.callout-warning { background: #fffbeb; border-left: 4px solid #f59e0b; }
.callout-success { background: #ecfdf5; border-left: 4px solid #10b981; }
.callout-error { background: #fef2f2; border-left: 4px solid #ef4444; }
```

### 4. Typography Best Practices

- **Line length**: 60-75 characters per line (max-width ~720px)
- **Line height**: 1.5-1.7 for body text, 1.2-1.3 for headings
- **Paragraph spacing**: 1.25rem between paragraphs
- **Heading spacing**: 2-3rem above headings, 0.5-1rem below
- **Font pairing**: Sans-serif for headings + same/serif for body
- **Emphasis**: Bold for important terms, italic for definitions or asides

### 5. Visual Enhancements

Use these elements to improve scannability:
- **Tables** for comparing options or listing properties
- **Code blocks** with syntax highlighting for technical content
- **Callout boxes** for tips, warnings, important notes
- **Horizontal rules** to separate major sections
- **Badges/tags** for status, version, category
- **Icons** (emoji or SVG) for visual anchors in lists

### 6. Formatting Rules

- Use sentence case for headings (not Title Case)
- One idea per paragraph
- Lead with the conclusion, then explain
- Use active voice
- Keep sentences under 25 words when possible
- Use numbered lists for sequences, bullets for unordered items

## Wrap Up

Deliver the formatted document with:
- Clean, consistent structure
- Professional typography
- Visual hierarchy that guides reading
- All content properly organized
