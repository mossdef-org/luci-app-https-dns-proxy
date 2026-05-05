---
name: Bug report
about: Report a bug in the LuCI front-end for https-dns-proxy
title: "[luci-app-https-dns-proxy] "
labels: bug
assignees: stangri

---

**Is this a LuCI bug or a service bug?**

LuCI is just the web UI; the actual work is done by the [https-dns-proxy](https://github.com/stangri/https-dns-proxy) service. Quick triage:

- Page won't render / a control does nothing / Save & Apply produces a JS error → **LuCI bug**, file here.
- After Save & Apply, `uci show https-dns-proxy` shows the wrong values → **LuCI bug**, file here.
- Settings save correctly (you can verify with `uci show https-dns-proxy` after Save & Apply) but the service still misbehaves → **service bug**, please file at [stangri/https-dns-proxy](https://github.com/stangri/https-dns-proxy/issues) and include the diagnostics from that repo's bug template.

**Describe the bug**

What you saw in the UI.

**To reproduce**

1.
2.

**Versions**

- OpenWrt: (`ubus call system board`)
- `luci-app-https-dns-proxy`: (`apk list -I luci-app-https-dns-proxy` or `opkg list-installed | grep luci-app-https-dns-proxy`)
- `https-dns-proxy`: (same, for the underlying package)
- Browser:

**Browser console output**

Open browser dev tools (F12) → Console tab. Paste any errors that appear when you reproduce the bug.

**Screenshot**

If applicable.
