# Leaf Bundle Template

This folder demonstrates the structure expected for case studies in the `08-case-studies/` section.

## Structure

```
YYYY-MM-DD-slug/
├── index.md          # Required: Article content + forensic frontmatter
├── hero-image.png    # Optional: Featured image
├── assets/           # Optional: Additional images, diagrams
└── sources/          # Optional: Original source scrapes
```

## Forensic Frontmatter (Required)

The `index.md` must include a `forensic:` block with these fields:

| Field | Type | Description |
|-------|------|-------------|
| `forensic.provenance.agent_chain` | array | Ordered handoffs: ["sputnik", "delphi", "echo"] |
| `forensic.provenance.source_uris` | array | Source references |
| `forensic.gepa.grader_scores.technical_accuracy` | int | 1-10 |
| `forensic.gepa.grader_scores.pattern_recognition` | int | 1-10 |
| `forensic.gepa.grader_scores.stewardship` | string | Format: "CLASSIFICATION-score/ratio" |
| `forensic.emergence.classification` | string | ILLUSION \| WEAK \| STRONG |
| `forensic.emergence.score` | int | 1-10 |
| `forensic.emergence.ratio` | string | signal:noise or confidence |
| `forensic.intent_drift.divergence_score` | float | 0.0-1.0, lower = aligned |
| `forensic.intent_drift.notes` | string | Optional drift notes |
| `forensic.generated.at` | string | ISO timestamp |
| `forensic.generated.by` | string | Final polishing agent |

## Processing Pipeline

1. **Echo** writes polished content to `04-echo-articles-review/YYYY-MM-DD-slug/`
2. **Dali** adds images to `05-dali-article-image/YYYY-MM-DD-slug/`
3. **Sputnik** assembles final bundle in `06-sputnik-article-publish/YYYY-MM-DD-slug/`
4. **Atlas** validates forensic schema compliance
5. **Kimi/CI** syncs to `research/08-case-studies/YYYY-MM-DD-slug/`
6. **Hugo** renders with forensic footer via Atlas's templates
