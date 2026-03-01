# CLAUDE.md — fredricnet-website

Hugo site at `github.com/fredricnet/fredricnet-website`. Research and thought-leadership site on AI, autonomous systems, and digital transformation. Theme: **paitheme** (local module replace during dev).

Live: https://www.fredric.net/

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

`go.mod` has `replace github.com/fredricnet/paitheme => ../paitheme` — Hugo watches both directories. **Do NOT add `version:` to the module import in `hugo.yaml`** — it bypasses the replace directive and pulls from GitHub instead.

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

## Todo - fredricnet-website deployment process to github pages

The openclaw agents have access to the fredricnet-website/content/ folder on Google Drive. When they copy or update files in the content directory I need to find a way to automatically first rebuild the server to generate the new public pages and when this is done only commit and push necessary updates and pages to my github account fredric.net using the correct github ssh key and account for the 002-fredricnet working directory. 

This can either be done by the agents using openclaw-mcp-bridge to Claude CLI or they may have the tool or skill to do this themselves!? 
This step needs to be investigated.

When pushed to github a github worker will deploy new updates on Github Pages.



