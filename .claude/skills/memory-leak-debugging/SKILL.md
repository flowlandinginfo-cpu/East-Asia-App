---
name: memory-leak-debugging
description: Diagnoses and resolves memory leaks in JavaScript/Node.js applications. Use when a user reports high memory usage, OOM errors, or wants to analyze heapsnapshots or run memory leak detection tools like memlab.
---

# Memory Leak Debugging

Expert guidance for finding, diagnosing, and fixing memory leaks in JavaScript and Node.js applications.

## Core Principles

- **Prefer `memlab`:** Do NOT read raw `.heapsnapshot` files directly — they are extremely large. Always use `memlab` to process snapshots.
- **Isolate the Leak:** Determine if the leak is in the browser (client-side) or Node.js (server-side).
- **Common Culprits:** Detached DOM nodes, unhandled closures, global variables, event listeners not removed, and unbounded caches. Detached DOM nodes are sometimes intentional caches; always ask the user before nulling them.

## Workflows

### 1. Capturing Snapshots

For frontend web application memory leaks, use `chrome-devtools-mcp` tools:

1. Navigate to page and interact to baseline state
2. `take_memory_snapshot` -> save as `baseline.heapsnapshot`
3. Perform the suspected leaking actions (repeat 10x to amplify)
4. `take_memory_snapshot` -> save as `target.heapsnapshot`
5. Revert page to original state
6. `take_memory_snapshot` -> save as `final.heapsnapshot`

### 2. Using Memlab (Recommended)

After capturing `.heapsnapshot` files:

```bash
# Install memlab
npm install -g memlab

# Analyze snapshots for leaks
memlab find-leaks --baseline baseline.heapsnapshot --target target.heapsnapshot --final final.heapsnapshot
```

Do **not** read raw `.heapsnapshot` files with `read_file` or `cat`.

### 3. Common Leak Patterns

**Detached DOM Nodes:**
```javascript
// LEAK: Reference keeps detached node alive
let cached = document.getElementById('el');
el.remove(); // Node detached but `cached` holds reference

// FIX: Nullify reference
cached = null;
```

**Event Listeners:**
```javascript
// LEAK: Listener never removed
window.addEventListener('resize', handler);

// FIX: Remove on cleanup
window.removeEventListener('resize', handler);
// Or use AbortController
const ac = new AbortController();
window.addEventListener('resize', handler, { signal: ac.signal });
ac.abort(); // Removes all listeners
```

**Closures:**
```javascript
// LEAK: Closure holds large data
function setup() {
  const largeData = new Array(1000000);
  return () => console.log(largeData.length);
}

// FIX: Only capture what's needed
function setup() {
  const len = new Array(1000000).length;
  return () => console.log(len);
}
```

**Unbounded Caches:**
```javascript
// LEAK: Map grows forever
const cache = new Map();
function add(key, val) { cache.set(key, val); }

// FIX: Use WeakMap or LRU cache
const cache = new WeakMap();
```

### 4. Fallback: Manual Comparison

If `memlab` is not available, use the comparison script:
```bash
node skills/memory-leak-debugging/references/compare_snapshots.js baseline.heapsnapshot target.heapsnapshot
```

This identifies top growing objects and common leak types (detached DOM, closures, Contexts).
