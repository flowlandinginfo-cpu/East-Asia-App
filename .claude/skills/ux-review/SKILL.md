---
name: ux-review
description: Audit and improve User Experience. Use when reviewing existing UI for usability issues, improving user flows, fixing interaction patterns, or optimizing conversion. Covers heuristic evaluation, cognitive load analysis, user flow mapping, and actionable UX improvements.
---

# UX Review Skill

Perform expert UX audits and deliver actionable improvements.

## UX Review Framework

### 1. Heuristic Evaluation (Nielsen's 10 Heuristics)

Evaluate the interface against each heuristic:

1. **Visibility of System Status** — Does the UI show loading states, progress indicators, success/error feedback?
2. **Match Between System and Real World** — Are labels, icons, and language natural and familiar?
3. **User Control and Freedom** — Can users undo, go back, cancel, or escape easily?
4. **Consistency and Standards** — Do similar elements behave the same way throughout?
5. **Error Prevention** — Does the design prevent errors before they happen? (confirmations, constraints, defaults)
6. **Recognition Over Recall** — Are options visible rather than requiring memory?
7. **Flexibility and Efficiency** — Are there shortcuts for expert users? Is the primary path optimized?
8. **Aesthetic and Minimalist Design** — Is every element necessary? Is there visual noise to remove?
9. **Help Users Recognize and Recover from Errors** — Are error messages clear, specific, and constructive?
10. **Help and Documentation** — Is help available in context when needed?

### 2. Cognitive Load Analysis

Check for:
- **Information overload**: Too many choices, too much text, cluttered layouts
- **Decision fatigue**: Reduce choices to essential options
- **Progressive disclosure**: Show only what's needed at each step
- **Chunking**: Group related information (max 5-7 items per group)
- **Clear visual hierarchy**: Users should know where to look first

### 3. User Flow Audit

For each key user flow:
- Map the current steps required
- Identify friction points (unnecessary steps, confusing labels, dead ends)
- Check for clear calls-to-action at every step
- Ensure the happy path requires minimal clicks/taps
- Verify error recovery at each step

### 4. Interaction Design Review

- **Affordance**: Do interactive elements look clickable/tappable?
- **Feedback**: Does every action produce visible feedback?
- **Timing**: Are transitions 200-300ms? Are loading states shown after 300ms?
- **Touch targets**: Minimum 44x44px for mobile
- **Focus management**: Logical tab order, visible focus indicators
- **State management**: Clear visual distinction between states (empty, loading, error, success, partial)

### 5. Content & Microcopy

- **Labels**: Clear, concise, action-oriented
- **Buttons**: Use verbs ("Save changes" not "Submit", "Create account" not "Sign up")
- **Empty states**: Helpful, not just "No data" — guide next action
- **Error messages**: What happened + How to fix it
- **Placeholder text**: Don't use as labels; use as hints/examples
- **Confirmation messages**: Reassure and guide next step

### 6. Common UX Issues to Flag

- Forms with no inline validation
- Missing loading/skeleton states
- No empty states or unhelpful empty states
- Ambiguous or generic button labels
- No visible focus styles
- Missing confirmation for destructive actions
- Inconsistent navigation patterns
- No breadcrumbs or back navigation in deep flows
- Overwhelming onboarding without progressive disclosure
- Missing keyboard navigation support

## Output Format

### UX Audit Report

For each finding, provide:

```
[Severity: Critical / Major / Minor / Enhancement]
[Heuristic: Which of the 10 heuristics is violated]
[Location: Where in the UI/code]
[Issue: What the problem is]
[Impact: How it affects users]
[Recommendation: Specific fix with code example]
```

### Priority Matrix

Organize findings by:
- **Quick Wins**: High impact, low effort — fix immediately
- **Strategic**: High impact, high effort — plan for next sprint
- **Fill-ins**: Low impact, low effort — fix when convenient
- **Deprioritize**: Low impact, high effort — consider later

## Implementation

After the audit, implement the Quick Wins immediately in code. For Strategic items, provide detailed code examples showing the recommended changes.

## Wrap Up

Summarize:
- Total findings by severity
- Top 3 most impactful improvements
- Before/after comparison of implemented changes
