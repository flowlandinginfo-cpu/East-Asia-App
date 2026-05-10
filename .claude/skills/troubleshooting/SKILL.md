---
name: troubleshooting
description: Diagnose and resolve Chrome DevTools MCP server setup issues. Use when chrome-devtools-mcp fails to start, Chrome won't launch, tools are missing, or connections fail.
---

# Chrome DevTools MCP Troubleshooting

## Step 1: Configuration Review

Search for configuration files and verify:
- `.mcp.json`, `settings.json`, or similar config files
- Correct command path and arguments
- No typos in flags (e.g., "autoBronnect" instead of "autoConnect")
- Required environment variables are set

## Step 2: Common Error Patterns

### DevToolsActivePort Error
**Cause:** `--autoConnect` cannot locate a running Chrome instance.
**Fix:**
1. Verify Chrome is running
2. Enable remote debugging: `chrome://inspect/#remote-debugging`
3. Test: `chrome-devtools list_pages`

### New Empty Profile Created
**Cause:** Flag typos in configuration.
**Fix:** Double-check all flag names against `npx chrome-devtools-mcp@latest --help`

### Limited Tools Available
**Cause:** MCP client enforcing read-only mode.
**Fix:** Disable read-only restriction to access `click`, `navigate_page`, etc.

### Missing Extension Tools
**Cause:** `--categoryExtensions` flag not set.
**Fix:** Add `--categoryExtensions` to server arguments. Note: Chrome <149 cannot load extensions when connecting to existing instances.

## Step 3: Consult Documentation

```bash
npx chrome-devtools-mcp@latest --help
```

Official troubleshooting: https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/troubleshooting.md

## Step 4: Enable Verbose Logging

```bash
DEBUG=* npx chrome-devtools-mcp@latest
```

## Step 5: Check GitHub Issues

Search for similar issues at https://github.com/ChromeDevTools/chrome-devtools-mcp/issues

## Step 6: Reset

If all else fails:
1. Stop any running instances: `chrome-devtools stop`
2. Clear the Chrome profile used by the MCP server
3. Restart with default settings: `npx chrome-devtools-mcp@latest`
