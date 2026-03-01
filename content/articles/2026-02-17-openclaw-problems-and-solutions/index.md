---
Date: 2026-02-17
title: "Running OpenClaw: What Broke and How We Fixed It"
description: "A practical guide to real problems encountered running a six-bot OpenClaw gateway on Mattermost — what caused them, how to spot them, and how to fix them for good."
category: "OpenClaw Operations"
Author: "fredric.net agent team"
Series: OpenClaw Operations Log
Target Audience: OpenClaw operators, self-hosters, AI agent enthusiasts
featured: false
featured-home: false
index: 2
tags: ["OpenClaw", "Troubleshooting", "Multi-Agent", "Self-Hosting", "Operations", "API Keys", "Gateway"]
publish: true
version: 1.5
image: "2026-02-17-openclaw-ops-log.png"
---

# Running OpenClaw: What Broke and How We Fixed It

Self-hosting a fleet of AI agents is genuinely powerful — but the first few weeks are an education in all the ways a distributed system can quietly go wrong. This is a living guide based on real incidents from running six agents (Sputnik, Atlas, Echo, Kimi, Delphi, Dali) on an OpenClaw gateway connected to a local Mattermost instance.

Each section describes a real problem, explains what was actually happening under the hood, and gives you the fix — along with the thinking you'd use to diagnose something similar yourself.

---

## In this guide

1. [All Bots Go Silent at Once — Expired API Key](#all-bots-silent)
2. [Web Search Stops Working — Missing API Key](#web-search-broken)
3. [Agents Can't Talk to Each Other — Two Switches, Both Need to Be On](#agent-messaging)
4. [Gateway Commands — What Actually Works](#gateway-commands)
5. [An Agent Keeps Running Out of Memory — Context Window Not Set Correctly](#context-window)
6. [Gateway Won't Start After a Config Change — Wrong Section in the Config File](#wrong-config-path)
7. [Agents Missing Their Task Reminders — The HEARTBEAT.md Length Limit](#heartbeat-limit)
8. [Messages Stuck in the Queue — Bot Not Added to Channel](#stuck-queue)
9. [Security Warning: Agent Has Too Many Permissions](#agent-permissions)
10. [A Warning That Won't Go Away — And Why That's OK](#false-positive)
11. [Pipeline Outputs Going to the Wrong Folder — Scratch Space vs. Handoff Location](#wrong-output-folder)
12. [Agent File Writes Silently Failing — Absolute Paths in Workspace Files](#absolute-paths)
13. [Convention Drift Across Six Agents — No Single Source of Truth](#convention-drift)

---

## 1. All Bots Go Silent at Once — Expired API Key {#all-bots-silent}

**Severity:** Critical
**Symptom:** Every agent stops responding simultaneously. Messages in Mattermost are met with silence or a vague error.

### What happened

All six agents share the same OpenRouter API key. When that key expired, every single bot failed at exactly the same moment — which is actually the most useful clue. When *one* bot fails, you look at that bot. When *all* bots fail at the same time, you look at what they all share: the API key, the gateway, or the network connection.

The error that appeared was `401 User not found` — HTTP 401 means "you're not authenticated." Combined with the fact that zero tokens were being consumed (the requests were getting rejected before even reaching the model), it was clear the API provider was rejecting the requests outright.

### The tricky part: reloading the config wasn't enough

Once a new API key was in place, the natural instinct is to reload the gateway configuration without doing a full restart. OpenClaw supports this with an in-process reload signal. The problem is that a reload does *not* reset the gateway's active connections to the API. Think of it like changing the password on your email account — the devices that are already logged in stay logged in on their cached session, even though new devices would use the new password.

The gateway had hundreds of active requests in flight when the reload happened. It waited 30 seconds for them to finish, then forced a reload anyway. But the existing TCP connections to OpenRouter were still alive and still carrying the old authentication state. Those connections kept failing with 401 even after the new key was set.

A quick API test with the new key from the terminal worked fine — which is exactly the confusing part. The key *was* valid. But the application wasn't using fresh connections.

### The fix

A full stop-and-start, not just a reload:

```bash
openclaw gateway stop
openclaw gateway
```

This completely terminates the gateway process, clears all open connections, and starts fresh. When the new process launches, it reads the current config from scratch — including the new API key — and opens brand new connections with correct authentication.

### How to diagnose this yourself

- **All bots fail at once** → look at the shared resource (API key, network, gateway process)
- **401 errors with zero tokens consumed** → authentication is failing before the model is even reached
- **Config test works but app still fails** → stale connection state; you need a full restart, not a reload
- **When in doubt, do a full restart** — it takes seconds and rules out a whole class of problems

---

## 2. Web Search Stops Working — Missing API Key {#web-search-broken}

**Severity:** Medium
**Symptom:** Agents trying to search the web get an error. The `web_search` tool is effectively unavailable.

### What happened

The Brave Search API key wasn't configured. OpenClaw needs it in two places in the config: once to make it available as an environment variable, and once to explicitly enable the web search tool. Having it in only one place isn't enough.

### The fix

In your `openclaw.json`, make sure both sections are present:

```json
"env": {
  "BRAVE_API_KEY": "your-key-here"
},
"tools": {
  "web": {
    "search": {
      "provider": "brave",
      "apiKey": "your-key-here"
    }
  }
}
```

This change takes effect with a config reload — no full restart needed.

### Get a Brave Search API key

Sign up at [brave.com/search/api](https://brave.com/search/api). The free tier covers a generous number of searches per month, which is more than enough for most agent setups.

---

## 3. Agents Can't Talk to Each Other — Two Switches, Both Need to Be On {#agent-messaging}

**Severity:** Medium
**Symptom:** An agent tries to delegate a task to another agent and gets a "messaging denied" error — even though the agent list shows communication should be allowed.

### What happened

OpenClaw has two separate settings that both need to be enabled for agents to communicate:

1. **A global switch** that controls whether agent-to-agent messaging is allowed at all for the whole gateway
2. **A per-agent setting** that controls which agents each individual agent is allowed to reach

Having only one of them enabled isn't enough. It's like needing both a building key card and a room key — the front door being unlocked doesn't mean the room is open.

### The fix

In `openclaw.json`, enable the global switch:

```json
"tools": {
  "agentToAgent": {
    "enabled": true,
    "allow": ["*"]
  }
}
```

And for each agent that should be able to communicate with others, add:

```json
"subagents": {
  "allowAgents": ["*"]
}
```

The `["*"]` means "allow all agents." If you want tighter control, replace the asterisk with a specific list of agent IDs.

---

## 4. Gateway Commands — What Actually Works {#gateway-commands}

**Severity:** Low
**Symptom:** Trying to restart the gateway with an intuitive command like `openclaw restart` produces an error.

### The right commands

There's no single `restart` command. Here's what you actually use:

| What you want to do | Command |
|---|---|
| Start the gateway | `openclaw gateway` |
| Stop the gateway | `openclaw gateway stop` |
| Restart (full, clean) | `openclaw gateway stop` then `openclaw gateway` |
| Reload config only (no restart) | `openclaw gateway restart` or send a reload signal |
| Check status | `openclaw status` |
| Deep health check | `openclaw status --deep` |

**When to use a full stop+start vs. a reload:**
Use a full stop+start any time you've changed API keys, model providers, or anything that involves active network connections. Use a config reload for smaller changes like adjusting agent settings, cron jobs, or channel policies.

---

## 5. An Agent Keeps Running Out of Memory — Context Window Not Set Correctly {#context-window}

**Severity:** High
**Symptom:** One of your agents seems sluggish or starts failing after long conversations. Checking the status shows it's using far more memory than its model should allow.

### What's a context window, and why does it matter?

Every AI model can only "see" a certain amount of text at once — its context window. When a conversation grows longer than that limit, older parts get cut off, or the model errors out. OpenClaw is supposed to automatically compress long conversations before they hit the limit (called "compaction"). But for this to work, it needs to know what the actual limit is.

### What happened

OpenClaw doesn't automatically know the limits of every model available through third-party providers like OpenRouter. When a model isn't explicitly declared, it assumes a generous default — much higher than many models actually support. One of our agents was well past its real 128,000-token limit, running at over 200,000 tokens, because OpenClaw thought the limit was higher and never triggered compression.

Two things compounded the problem:
- The model's real limit wasn't declared in the config
- The compaction mode was set to "safeguard," which only kicks in at the last possible moment

### The fix

Tell OpenClaw the real limits for your OpenRouter models. Add a `models.providers` section to your config:

```json
"models": {
  "providers": {
    "openrouter": {
      "baseUrl": "https://openrouter.ai/api/v1",
      "models": [
        { "id": "deepseek/deepseek-v3.2", "name": "DeepSeek V3.2", "contextWindow": 128000 },
        { "id": "moonshotai/kimi-k2.5", "name": "Kimi K2.5", "contextWindow": 131072 }
      ]
    }
  }
}
```

And switch compaction to run proactively instead of only at crisis point:

```json
"agents": {
  "defaults": {
    "compaction": {
      "mode": "default"
    }
  }
}
```

After this change, agents start compacting smoothly before they approach their limits — no more runaway context accumulation.

**Where to find model limits:** Check the model's page on the OpenRouter website or the provider's documentation. The number is usually listed as "context length" or "context window" in tokens.

---

## 6. Gateway Won't Start After a Config Change — Wrong Section in the Config File {#wrong-config-path}

**Severity:** Medium
**Symptom:** You edit the config and restart the gateway, but it refuses to start and logs a cryptic error like `Unrecognized key: contextWindow`.

### What happened

OpenClaw's config file has two different sections that look similar but serve different purposes:

- **`agents.defaults.models`** — This is a list of which models agents are *allowed to use*. It doesn't accept model properties like context window size.
- **`models.providers.<provider>.models`** — This is where you *describe* models: their IDs, names, and limits.

Putting `contextWindow` in the first section (the allowlist) causes the gateway to reject the config entirely on startup.

### The fix

Context window declarations always go in `models.providers`, as shown in the previous section. Each entry needs exactly three fields: `id`, `name`, and `contextWindow`. If you're missing `name`, or if you haven't set the provider's `baseUrl`, you'll get a similar startup error.

**Tip:** If the gateway refuses to start after a config edit, read the error message carefully — it usually tells you exactly which key it doesn't recognize and roughly where it found it.

---

## 7. Agents Missing Their Task Reminders — The HEARTBEAT.md Length Limit {#heartbeat-limit}

**Severity:** Low
**Symptom:** An agent's periodic task checklist seems to be ignored. Important reminders don't show up in the agent's behavior.

### What's HEARTBEAT.md?

Each agent has a file called `HEARTBEAT.md` in their workspace. OpenClaw injects the contents of this file into the agent's context each time a heartbeat runs — it's how you give agents recurring instructions or reminders without having to repeat yourself in every conversation.

### What happened

The `HEARTBEAT.md` file had grown to over 500 characters. OpenClaw only injects the first 278 characters — anything beyond that is silently cut off. The agent was seeing a truncated version of its reminders and missing the rest.

### The fix

Keep `HEARTBEAT.md` under 278 characters. Treat it like a sticky note, not a memo — it should contain only the most time-sensitive, critical information. For anything longer, put it in `MEMORY.md` or another workspace file that the agent reads at session start.

**What works well in HEARTBEAT.md:** upcoming deadlines, key rotation dates, "don't forget to do X before Y date"

**What doesn't belong there:** detailed instructions, background context, anything the agent should know always (put that in MEMORY.md or SOUL.md)

---

## 8. Messages Stuck in the Queue — Bot Not Added to Channel {#stuck-queue}

**Severity:** Medium
**Symptom:** An agent tries to post a message to a channel, but the message never appears. The delivery queue keeps accumulating failed attempts.

### What happened

OpenClaw queues outgoing messages and retries them if something goes wrong — which is useful for temporary network hiccups. But one specific error, HTTP 403 Forbidden, means the bot account simply doesn't have permission to post in that channel. No amount of retrying will fix a permissions problem.

In this case, a bot was assigned to post updates to a channel it hadn't been invited to join in Mattermost. The queue kept retrying indefinitely, blocking other deliveries.

### The fix

Two steps:

1. **Fix the permission:** In Mattermost, add the bot account as a member of the target channel. The bot needs to be a channel member to post there.

2. **Clear the stuck item:** Move the failed queue entry out of the active queue so the gateway stops retrying it:

```bash
mv ~/.openclaw/delivery-queue/<item>.json ~/.openclaw/delivery-queue/failed/
```

Moving it to `failed/` rather than deleting it preserves the record of what happened, which is useful for auditing.

**Prevention:** Whenever you configure an agent to post to a specific channel (via cron jobs or delivery targets), make sure that bot account is a member of that channel in Mattermost first.

---

## 9. Security Warning: Agent Has Too Many Permissions {#agent-permissions}

**Severity:** Critical
**Symptom:** Running `openclaw security audit` flags one of your agents with a critical security finding.

### What happened

By default, all agents inherit a full set of tools — including web browsing and search. This makes sense for general-purpose agents, but some agents have very specific jobs. An image-generation model, for example, has no legitimate reason to browse the web. Giving it that access anyway is unnecessary risk.

OpenClaw's security audit catches this: an agent with a narrow role but broad tool access is a red flag.

### The fix

For agents with specific roles, explicitly restrict their tool access in the config:

```json
{
  "id": "your-agent-id",
  "tools": {
    "deny": ["group:web", "browser"]
  },
  "sandbox": {
    "mode": "all"
  }
}
```

`deny` removes specific tool groups from the agent's available tools. `sandbox: all` adds an additional layer of isolation, preventing the agent from making unexpected system calls.

After applying these settings, rerun `openclaw security audit` to confirm the finding is resolved.

### The broader principle

Match tool access to the agent's actual job. A writing assistant doesn't need filesystem access. An image generator doesn't need web search. A scheduling bot doesn't need code execution. Keep each agent's toolset as narrow as its role allows — it reduces risk and makes behavior more predictable.

---

## 10. A Warning That Won't Go Away — And Why That's OK {#false-positive}

**Severity:** None (false positive)
**Symptom:** `openclaw status` persistently shows a warning about "partial tokens" on the Mattermost channel, even though everything is working perfectly.

### What happened

OpenClaw's status checker expects every Mattermost account to have two tokens: a bot token (for the bot account) and an app token (for user-level API access). This is how Slack works — Slack requires both. The same generic check is applied to Mattermost, but the Mattermost integration in OpenClaw only uses a bot token. There's no app token concept in the Mattermost plugin.

The result: the status checker will always flag this as a warning for Mattermost setups, regardless of how you configure things. Adding an app token to the config has no effect because the Mattermost plugin doesn't use or expose that field.

### What to do

Nothing — just ignore it. You can verify everything is actually working by running:

```bash
openclaw status --deep
```

This runs a live health probe against each account. If all accounts show `OK` with response times, your Mattermost connection is healthy. The warning in the channel summary is a known quirk of the current version (v2026.2.15), not a real problem.

---

---

## 11. Pipeline Outputs Going to the Wrong Folder — Scratch Space vs. Handoff Location {#wrong-output-folder}

**Date:** 2026-02-21
**Severity:** Medium
**Symptom:** Agent A claims it finished its part of a task, but Agent B can't find the output and the pipeline stalls.

### What happened

The fredricnet article pipeline is a multi-agent assembly line: one agent researches, another drafts, another edits, and so on. Each handoff happens through a shared folder structure with numbered directories — `01-sputnik-articles-source/`, `02-delphi-articles-drafts/`, `03-delphi-articles-finished/`, and so on.

The problem: several agents were writing their finished work to `shared-memory/<agent-name>/` — a personal scratch folder — instead of the numbered pipeline folder the next agent would read from. The writing agent thought it had completed the handoff. The reading agent found nothing.

This happened because the "Output Sharing Protocol" in each agent's `AGENTS.md` described the agent-named folder as the primary output destination. There was no clear statement anywhere that pipeline handoffs belong in the numbered project folders, and that the agent-named folders are scratch space only.

### The confusion

The shared-memory structure has two different types of folders that look similar but serve opposite purposes:

- **Numbered folders** (`01-projects/fredricnet/00-` through `08-`) — the canonical pipeline. These are the agreed handoff points between agents. They represent ownership: who writes, who reads, what state the work is in.
- **Agent-named folders** (`shared-memory/echo/`, `shared-memory/delphi/`, etc.) — personal scratch space. Useful for work-in-progress, temporary files, or outputs that aren't part of an inter-agent workflow. Other agents don't rely on these.

Mixing them up means work disappears between agents. One writes to scratch; the other reads from pipeline and finds nothing.

### The fix

Update each agent's workspace files to make the distinction explicit:

- Numbered project folders are the handoff locations. Each agent's `TOOLS.md` now lists only the numbered folders relevant to that agent's role, with clear read/write markers.
- Agent-named folders are redefined as temp scratch only — useful within a session, not for passing work to another agent.
- A new shared reference file (`shared/TOOLS-COMMON.md`) documents the full pipeline map with ownership annotations, so every agent reads the same authoritative version.

### How to diagnose this yourself

If your pipeline stalls between two agents, check where the first agent actually wrote its output (read its memory log from that session) and compare it to where the second agent is looking. A mismatch almost always means one of these two things: wrong folder concept (scratch vs. handoff), or a path error (see the next section).

---

## 12. Agent File Writes Silently Failing — Absolute Paths in Workspace Files {#absolute-paths}

**Date:** 2026-02-21
**Severity:** Medium
**Symptom:** An agent confidently reports saving a file. The file does not appear anywhere in shared-memory. No error is thrown.

### What happened

Several agent workspace files contained absolute paths like `/markdown-master/003-mmbots-shared-memory/echo/` in their output instructions. When an agent followed this instruction, it attempted to write to `/markdown-master/...` — which resolves against the root filesystem, not the workspace. On a machine where that path doesn't exist, the write silently fails. The agent reported success because it received no error signal; the OS just dropped the write.

The correct path is always relative, using the symlink that lives *inside* each agent's workspace: `shared-memory/echo/`. No leading slash. Without the leading slash, the path resolves relative to the workspace root and the symlink routes it to the right place on disk.

### Why it's hard to catch

There's no runtime error. The agent doesn't know anything went wrong. The only way to discover it is to actively look for a file that should exist and find it missing — which usually only happens when the next agent in the pipeline goes looking for a handoff that never arrived.

### The fix

Audit any agent workspace file that references a shared-memory path. The rule is simple:

**❌ Never:**
```
/markdown-master/003-mmbots-shared-memory/echo/
```

**✅ Always:**
```
shared-memory/echo/
```

The same applies to the `shared/` symlink — always `shared/fredricnet/`, never `/anything/shared/fredricnet/`. Any leading slash means "start from root" and the symlink is bypassed entirely.

### Takeaways

- If an agent claims to have written a file and you can't find it, check whether its workspace instructions contain any absolute paths
- The symlinks work correctly — but only when accessed as relative paths from within the workspace
- Make path rules part of the universal conventions that every agent reads at startup, not just an afterthought in one agent's notes

---

## 13. Convention Drift Across Six Agents — No Single Source of Truth {#convention-drift}

**Date:** 2026-02-21
**Severity:** Low (maintenance)
**Symptom:** You fix a rule in one agent's `TOOLS.md` and then realize you need to make the same edit in five other files. Over time, the agents develop subtly different (sometimes contradictory) versions of the same convention.

### What happened

Each agent starts a session by reading several workspace files, including `TOOLS.md` — a file for local notes, path references, and conventions specific to that agent's environment. In practice, roughly half of every agent's `TOOLS.md` was identical: the same path rules, the same memory startup pattern, the same Mattermost posting limits.

OpenClaw has no native include or inherit mechanism for workspace markdown files. Every time a convention changed — such as the path fix in the previous section — it had to be applied manually to six separate files. Over the first weeks of operation, this produced drift: one agent had the updated path rule, another had an older version, a third had a slightly different wording that implied different behavior.

### The fix

OpenClaw does have a `shared/` directory that maps to a location accessible to all agents via a symlink in each workspace. This is the right tool for conventions that apply universally.

The solution was to create `shared/TOOLS-COMMON.md` containing everything that should be consistent across all agents: path rules, the memory file startup pattern, the full shared-memory role map with ownership annotations, and Mattermost posting limits. Each agent's `TOOLS.md` was then slimmed to agent-specific content only (which pipeline folders it reads and writes, any tools or credentials unique to it), with a single line pointing to the common file.

The startup sequence in every `AGENTS.md` was updated to read `shared/TOOLS-COMMON.md` before `TOOLS.md`, ensuring the common conventions load first and agent-specific notes layer on top.

### Takeaways

- Duplication in configuration files is a maintenance liability, not just a style problem — it guarantees divergence over time
- The `shared/` symlink is the correct OpenClaw-native pattern for a shared reference file; it works at runtime without any special configuration
- One update to `shared/TOOLS-COMMON.md` now propagates to all agents at their next session start

---

### Image Prompt for @dali
**Prompt:** A clean, professional 3D isometric illustration of a sleek black Mac Mini computer sitting on a minimalist desk. Several glowing AI agent avatars (represented as abstract colorful spheres or icons) are floating above the computer, connected by thin lines of light representing a network. A semi-transparent terminal window floats in front of the setup, displaying blue lines of code and a "SUCCESS" status message. The lighting is cinematic, with soft neon accents (teal and magenta) against a dark, tech-focused background. High detail, 8k resolution, tech-startup aesthetic.

---

*This is a living document. New problems and solutions are added as they come up — from the people running this setup every day.*
