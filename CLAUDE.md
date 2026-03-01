# CLAUDE.md — fredricnet-website

Hugo site at `github.com/fredricnet/fredricnet-website`. Research and thought-leadership site on AI, autonomous systems, and digital transformation. Theme: **paitheme** (Hugo module, v1.1.0).

Live: https://www.fredric.net/
Repo: `git@github.com-fredricnet:fredricnet/fredricnet-website.git`

## Dev Workflow

```bash
# Run locally (from this directory)
hugo server --noHTTPCache --disableFastRender

# Clean restart
rm -rf _vendor public && hugo mod clean && hugo server --noHTTPCache --disableFastRender

# Update theme from GitHub (when NOT doing local theme dev)
hugo mod get -u github.com/fredricnet/paitheme && hugo mod tidy

# Production build
hugo --minify --gc
```

Deploy: GitHub Pages via `.github/workflows/hugo.yml` on push to `main`.

## Local Theme Development (paitheme)

For local theme dev, temporarily add the replace directive to `go.mod`:
```bash
go mod edit -replace github.com/fredricnet/paitheme=../paitheme
```
Remove it before committing (CI pulls paitheme from GitHub):
```bash
go mod edit -dropreplace github.com/fredricnet/paitheme
```
**Do NOT add `version:` to the module import in `hugo.yaml`** — it bypasses the replace directive.

Verify Hugo is watching both on startup: `Watching for changes in .../{fredricnet-website,paitheme}`

## Content Sections

| Section | Type | Location | Notes |
|---|---|---|---|
| Homepage | `_index.md` | `content/_index.md` | Hero + latest featured articles |
| Articles | Blog (leaf bundles) | `content/articles/YYYY-MM-DD-slug/` | Thought-leadership posts |
| Research | Docs (hierarchical) | `content/research/0N-chapter/` | 7 chapters, weight-ordered |
| Dictionary | Glossary | `content/dictionary/` | AI/tech term definitions |

## Front Matter Conventions

**Articles** (`content/articles/YYYY-MM-DD-slug/index.md`):
```yaml
Date: 2026-02-14          # Capital D (non-standard Hugo)
title: "Article Title"
description: "Teaser text"
category: "Category Name"
Author: "fredric.net agent team"
tags: ["tag1", "tag2"]
image: "filename.png"     # colocated in same leaf bundle folder
featured-home: true       # set true to appear on homepage
publish: true
```

AI agent workflow metadata is also tracked in article front matter (Discovery, Researcher, Editor, Publisher, Image Creator fields with model versions) — preserve these when editing articles.

**Research pages** (`content/research/*/`):
```yaml
title: "Section Title"
weight: 1                 # controls ordering within chapter
type: docs
toc: true
prev: /research/prev-page/
next: /research/next-page/
draft: false
```

**Dictionary entries** (`content/dictionary/*.md`):
```yaml
title: "Term Name"
description: "One-line definition"
version: "1.0"
```

## Site Configuration

- `data/site.yaml` — brand, header CTA, footer links/social, JSON-LD schema org details
- `hugo.yaml` — baseURL, menus, output formats (HTML + RSS + llmstxt + robotstxt)
- Generates `llms.txt` at build time (LLM-friendly content index)

## Custom Overrides (Minimal)

This site adds very little on top of paitheme:

| File | Purpose |
|---|---|
| `layouts/index.html` | Custom homepage: renders hero + filters articles by `featured-home: true` |
| `static/css/custom.css` | One rule: constrains `.logo-image` to `max-height: 1.5rem` |
| `static/images/` | Logo SVG variants (black, dark, white) |
| `data/site.yaml` | Site-specific brand/schema config |

No custom JS. No custom shortcodes. All layouts (docs, blog, dictionary) inherited from paitheme.

## Adding Content

**New article:**
1. Create `content/articles/YYYY-MM-DD-slug/index.md`
2. Add image to the same folder if needed
3. Set `featured-home: true` to surface on homepage
4. Follow front matter conventions above

**New research page:**
1. Add to the appropriate chapter folder (`content/research/0N-chapter/`)
2. Set `weight:` for ordering and `prev:`/`next:` for navigation
3. Use `type: docs` so paitheme applies the docs layout

**New dictionary entry:**
1. Create `content/dictionary/term-name.md`
2. Structure: Overview → Technical Nuance → Business Use Cases → Broader Context → Related Terms → References

## Research Chapter Structure
This is done by the openclaw agents on 507-mac
```
research/
├── 01-introduction/
├── 02-foundations/
├── 03-challenges/      # 8 articles (largest chapter)
├── 04-case-studies/
├── 05-benefits-risks/
├── 06-creative-approaches/
└── 07-conclusions/
```

## Auto-Deploy Pipeline

**Flow:** OpenClaw agents (507-mac) → rsync (1min) → t2-103 agent content dir → `deploy.sh` (cron */5) → git push → GitHub Actions → GitHub Pages

```
Agent writes to fredricnet-live/content/
    → rsync to t2-103 (every 1 min)
    → deploy.sh detects changes (every 5 min cron on t2-103)
    → git auto-commit + push to GitHub
    → GitHub Actions builds Hugo (paitheme v1.1.0, hugo --minify --gc)
    → Deployed to GitHub Pages (www.fredric.net, HTTPS enforced)
```

- `deploy.sh` — syncs content from agent workspace, auto-commits, pushes if changes detected
- Cron: `*/5 * * * *` on t2-103, logs to `/tmp/fredricnet-deploy.log`
- Agent content source: `009-openclaw/markdown-master/003-mmbots-shared-memory/01-projects/fredricnet/fredricnet-live/content/`
- GitHub Actions: `.github/workflows/hugo.yml` — builds Hugo extended + Go, pulls paitheme from GitHub, deploys to Pages
- Total latency: ~8 min max (rsync 1min + cron 5min + CI build 2min)

## Infrastructure

- **Hosting:** GitHub Pages (custom domain, HTTPS enforced, cert expires 2026-05-30)
- **DNS:** Cloudflare — `www.fredric.net` CNAME → `fredricnet.github.io` (DNS-only, not proxied)
- **CI:** GitHub Actions (`.github/workflows/hugo.yml`) — triggers on push to `main` + manual dispatch
- **Theme:** `github.com/fredricnet/paitheme` v1.1.0 (pulled as Hugo module in CI)
- **Git identity:** `fredricnet` / `contact@fredric.net` (SSH key `~/.ssh/id_fredricnet`)

