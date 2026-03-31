<div align="center">

# Pragmatic SEO & AI Visibility Skill

**A practical skill for technical SEO, content clarity, structured data, indexing readiness, and AI answer visibility.**

Built for **Cursor**, **GitHub Copilot**, **Windsurf**, **Claude Code**, and other AI assistants.

</div>

---

## What is this?

**Pragmatic SEO & AI Visibility Skill** is a structured instruction set for AI coding assistants.

It helps an assistant work on:

- technical SEO
- content clarity
- structured data
- crawlability and indexability
- search appearance
- answer-engine readiness

This skill is designed to be **practical**, **grounded**, and **non-magical**.

It does **not** promise rankings.  
It does **not** treat schema like magic.  
It does **not** pretend "AI visibility" has guaranteed shortcuts.

Instead, it gives an AI assistant a disciplined framework for improving how a site is understood by search engines and modern answer engines.

---

## Core philosophy

This project follows a few simple principles:

- **Be practical, not theatrical**
- **Prefer official guidance over SEO folklore**
- **Separate official recommendations from heuristics**
- **Prioritize high-impact fixes first**
- **Avoid ranking guarantees**
- **Adapt recommendations to the real site type**
- **Treat AI visibility as clarity + extractability + citation readiness, not a hack**

---

## What this skill helps with

### Technical SEO

- crawlability
- indexability
- robots.txt review
- sitemap review
- canonical checks
- raw HTML visibility
- duplication and status issues
- URL hygiene
- internal linking basics

### Search appearance

- title tags
- meta descriptions
- heading structure
- Open Graph / social preview metadata
- page-level clarity

### Structured data

- Organization
- WebSite
- WebPage
- BreadcrumbList
- Article / BlogPosting
- Product
- SoftwareApplication
- FAQPage
- HowTo
- LocalBusiness
- Person

### Content quality

- intent matching
- introduction quality
- topic coverage
- cannibalization review
- freshness review
- answer-first formatting

### AI visibility / answer readiness

- direct-answer structures
- extractable content blocks
- descriptive headings
- FAQ formatting
- comparison tables
- citation-friendly structure
- consistent entity naming

---

## What this skill is **not**

This skill is **not**:

- a ranking guarantee system
- a loophole list
- a schema spam guide
- an SEO myth collection
- a replacement for strong content
- a replacement for a strong product
- a fake "GEO hack" package

This skill **is**:

- a disciplined framework for improving discoverability, clarity, and readiness for modern search and answer engines

---

## Supported workflows

The skill supports multiple working styles depending on what the user needs.

### 1. Quick Audit

Use when the goal is speed.

Outputs:

- top issues
- severity
- likely impact
- fastest wins

### 2. Full Audit

Use when the goal is a full review.

Outputs:

- technical audit
- content audit
- structured data audit
- search appearance audit
- AI visibility audit
- prioritized roadmap

### 3. Execution Support

Use when the user already knows what they want changed.

Outputs:

- file-level changes
- suggested diffs
- implementation notes
- validation steps

### 4. Content Optimization

Use for:

- blog posts
- landing pages
- product pages
- documentation pages
- FAQ sections
- comparison pages

Outputs:

- title / H1 improvements
- intro rewrites
- heading structures
- schema suggestions
- internal linking suggestions
- answer-friendly formatting

---

## Project structure

```text
pragmatic-seo-ai-visibility-skill/
├── skill/
│   └── PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md
├── examples/
│   ├── cursor.mdc
│   ├── copilot-instructions.md
│   ├── windsurf.md
│   └── CLAUDE.md
├── bin/
│   └── install.js
├── README.md
├── package.json
├── LICENSE
└── .gitignore
```

## File roles

### skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md

Canonical source of the skill.

### examples/

Platform-specific copies or starter files for different AI IDEs.

### bin/install.js

Future installer entry point.

---

## Manual installation

You can use the skill manually in any AI IDE that supports persistent instructions, rules, or context files.

### Cursor

Copy the contents of:

`skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md`

into:

`.cursor/rules/pragmatic-seo-ai-visibility.mdc`

### GitHub Copilot

Copy the contents into:

`.github/copilot-instructions.md`

### Windsurf

Copy the contents into:

`.windsurf/rules/pragmatic-seo-ai-visibility.md`

### Claude Code

Copy the contents into:

`CLAUDE.md`

### Any other AI assistant

Paste the skill into the platform's equivalent of:

- system prompt
- rules file
- instructions file
- persistent context file
- custom instructions panel

---

## Installation status

At the moment, the skill is primarily intended for manual installation.

A future installer may automate copying the canonical skill file into IDE-specific locations through:

`npx pragmatic-seo-ai-visibility-skill`

The current `bin/install.js` is only a starting placeholder.

---

## Why this project exists

A lot of SEO and "GEO" material online is either:

- too vague
- too rigid
- too myth-driven
- too salesy
- too bureaucratic
- too obsessed with fake certainty

This project aims to be a cleaner alternative.

Instead of pretending there is a universal recipe for rankings or AI citations, this skill tries to help assistants reason about:

- crawlability
- indexability
- page clarity
- structured relevance
- content usefulness
- answer extractability
- validation after changes

---

## Design goals

This repository is built around these goals:

- pragmatic
- clear
- portable
- easy to reuse
- honest about uncertainty
- useful for real implementation work

---

## Recommended usage pattern

A good default usage flow is:

- identify the site type
- determine the main goal
- review crawl/index fundamentals
- review page structure and metadata
- review performance issues if relevant
- review structured data only where it matches visible content
- improve content clarity and answer structure
- validate the changes

---

## Good fit for

This skill is especially useful for:

- SaaS websites
- product landing pages
- blogs and content sites
- documentation websites
- ecommerce product/category pages
- portfolios
- local business websites

---

## Notable principles inside the skill

The skill intentionally separates recommendation types into:

- Official: directly grounded in official documentation
- Recommended: strong best practice
- Heuristic: useful but not guaranteed

This helps keep the assistant honest and prevents overclaiming.

---

## Current version

Version: 0.1.0

This is an early public version focused on:

- solid structure
- realistic SEO framing
- AI visibility without hype
- portability across IDEs

---

## Roadmap

Planned improvements include:

- better IDE-specific example files
- a real installer in `bin/install.js`
- validation scripts
- richer README examples
- optional templates for common site types
- versioned release flow

---

## Contributing

Contributions are welcome.

Useful contributions would include:

- better IDE-specific install targets
- safer installer logic
- validation scripts
- clearer examples
- better platform-specific adaptations
- improvements to the skill wording without making it hype-driven

Please try to keep changes aligned with the project philosophy:

- no SEO myths
- no ranking guarantees
- no fake certainty
- no deceptive tactics

---

## License

MIT

See `LICENSE` for details.
