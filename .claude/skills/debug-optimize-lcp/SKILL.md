---
name: debug-optimize-lcp
description: Debug and optimize Largest Contentful Paint (LCP) using Chrome DevTools performance tracing. Use when investigating page load speed, Core Web Vitals, or content rendering performance issues.
---

# Debug & Optimize LCP

## LCP Targets

- **Good**: ≤2.5 seconds
- **Needs improvement**: 2.5-4.0 seconds
- **Poor**: >4.0 seconds

## LCP Breakdown

Performance breaks into four sequential phases:

| Phase | Target | Purpose |
|-------|--------|---------|
| Time to First Byte | ~40% | Navigation -> HTML arrival |
| Resource Load Delay | <10% | HTML received -> resource loading starts |
| Resource Load Duration | ~40% | Download time for LCP asset |
| Element Render Delay | <10% | Asset ready -> element rendered |

## Debugging Workflow

### 1. Record Trace

```
performance_start_trace(reload=true)
```

Wait for page to fully load, then stop:
```
performance_stop_trace()
```

### 2. Analyze Insights

Check these performance insights in order:
1. `LCPBreakdown` — Phase-by-phase timing
2. `DocumentLatency` — Server response issues
3. `RenderBlocking` — Resources blocking render
4. `LCPDiscovery` — When browser discovers LCP resource

```
performance_analyze_insight("1", "LCPBreakdown")
```

### 3. Identify LCP Element

Use `evaluate_script` to find the LCP element and its resource URL:
```javascript
() => new PerformanceObserver(list => {
  const entries = list.getEntries();
  const last = entries[entries.length - 1];
  return { element: last.element?.tagName, url: last.url, renderTime: last.renderTime };
}).observe({ type: 'largest-contentful-paint', buffered: true })
```

### 4. Review Network Waterfall

Use `list_network_requests` to check:
- When the LCP resource started loading
- Was it discovered early or late?
- Were there blocking resources before it?

## Priority Fixes

### Eliminate Resource Load Delay
- Use native `<img>` with `src` (not CSS background or JS-loaded)
- Add `fetchpriority="high"` to LCP image
- Remove `loading="lazy"` from LCP element
- Add `<link rel="preload">` for critical resources

### Remove Render Delay
- Inline critical CSS
- Defer non-critical CSS with `media="print"` toggle
- Move render-blocking `<script>` to `defer` or `async`
- Avoid `font-display: block`

### Reduce Download Time
- Use modern image formats (WebP, AVIF)
- Responsive images with `srcset`/`sizes`
- CDN delivery
- Proper caching headers

### Lower TTFB
- Minimize redirects
- Edge caching / CDN
- Optimize server response time
- Use `103 Early Hints`

## Verify

Re-trace after each change. Test under throttling (`emulate --cpuThrottlingRate 4 --networkConditions "Fast 3G"`) to simulate real-world conditions.
