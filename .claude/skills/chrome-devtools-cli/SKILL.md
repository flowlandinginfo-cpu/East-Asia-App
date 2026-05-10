---
name: chrome-devtools-cli
description: Use this skill to write shell scripts or run shell commands to automate tasks in the browser or otherwise use Chrome DevTools via CLI.
---

The `chrome-devtools-mcp` CLI lets you interact with the browser from your terminal.

## AI Workflow

1. **Execute**: Run tools directly (e.g., `chrome-devtools list_pages`). The background server starts implicitly; **do not** run `start`/`status`/`stop` before each use.
2. **Inspect**: Use `take_snapshot` to get an element `<uid>`.
3. **Act**: Use `click`, `fill`, etc. State persists across commands.

Snapshot example:
```
uid=1_0 RootWebArea "Example Domain" url="https://example.com/"
  uid=1_1 heading "Example Domain" level="1"
```

## Command Usage

```sh
chrome-devtools <tool> [arguments] [flags]
```

Use `--help` on any command. Output defaults to Markdown, use `--output-format=json` for JSON.

## Input Automation (<uid> from snapshot)

```bash
chrome-devtools take_snapshot        # Get UIDs for elements
chrome-devtools click "id"           # Click element
chrome-devtools fill "id" "text"     # Type into input
chrome-devtools drag "src" "dst"     # Drag element
chrome-devtools hover "id"           # Hover over element
chrome-devtools press_key "Enter"    # Press key
chrome-devtools type_text "hello"    # Type text into focused input
chrome-devtools upload_file "id" "file.txt"  # Upload file
chrome-devtools handle_dialog accept # Handle browser dialog
```

## Navigation

```bash
chrome-devtools list_pages                          # List open pages
chrome-devtools select_page 1                       # Select page by index
chrome-devtools navigate_page --url "https://..."   # Navigate to URL
chrome-devtools navigate_page --type "reload"       # Reload page
chrome-devtools new_page "https://..."              # Open new page
chrome-devtools close_page 1                        # Close page
```

## Emulation

```bash
chrome-devtools emulate --networkConditions "Offline"
chrome-devtools emulate --cpuThrottlingRate 4 --geolocation "0x0"
chrome-devtools emulate --colorScheme "dark" --viewport "1920x1080"
chrome-devtools resize_page 1920 1080
```

## Performance

```bash
chrome-devtools performance_start_trace true false   # Start trace
chrome-devtools performance_stop_trace               # Stop trace
chrome-devtools performance_analyze_insight "1" "LCPBreakdown"  # Analyze insight
chrome-devtools take_memory_snapshot "./snap.heapsnapshot"       # Memory snapshot
```

## Network

```bash
chrome-devtools list_network_requests                    # List all requests
chrome-devtools list_network_requests --resourceTypes Fetch  # Filter by type
chrome-devtools get_network_request --reqid 1            # Get request details
```

## Debugging & Inspection

```bash
chrome-devtools evaluate_script "() => document.title"   # Run JS
chrome-devtools list_console_messages                    # List console messages
chrome-devtools take_screenshot                          # Screenshot viewport
chrome-devtools take_screenshot --fullPage true           # Full page screenshot
chrome-devtools take_snapshot --verbose true              # Verbose a11y tree
chrome-devtools lighthouse_audit --mode "navigation"     # Run Lighthouse
```

## Extensions

```bash
chrome-devtools list_extensions                  # List extensions
chrome-devtools install_extension "/path/..."    # Install extension
chrome-devtools uninstall_extension "ext_id"     # Uninstall
chrome-devtools reload_extension "ext_id"        # Reload
chrome-devtools trigger_extension_action "ext_id" # Trigger action
```

## Service Management

```bash
chrome-devtools start   # Start or restart
chrome-devtools status  # Check if running
chrome-devtools stop    # Stop server
```
