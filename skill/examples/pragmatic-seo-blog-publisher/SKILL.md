---
name: pragmatic-seo-blog-publisher
description: Site-type adaptation of the Pragmatic SEO & AI Visibility Skill for blogs and publishers. Covers topical authority, cannibalization, E-E-A-T signals, content freshness, and answer-engine readiness.
---

# Pragmatic SEO & AI Visibility Skill — Blog / Publisher Adaptation

> This is a site-type adaptation of the canonical skill.
> Canonical source: `skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md`

---

## Site Type Context

**Type:** Blog / Publisher
**Primary goal:** Drive consistent organic traffic to informational and commercial investigation content. Build topical authority and answer-engine visibility.
**Typical pages:** Homepage, category/topic index pages, individual articles, author pages, about/editorial pages.

---

## Priority Focus Areas for Blog / Publisher

### 1. Topical authority and coverage gaps

Publishers often rank well on some subtopics and have large gaps on others. Crawlers and answer engines reward consistent depth.

Check:
* key subtopics have dedicated, well-linked pages
* no important queries are left without a matching page
* internal linking connects related articles by topic cluster
* category or topic index pages exist and are indexable

### 2. Cannibalization across articles

Publishers accumulate content over time and often create multiple articles targeting the same intent.

Check:
* articles with similar H1s and title patterns
* repeated use of the same primary keyword across multiple posts
* rank-swapping between two URLs for the same query
* outdated articles competing with newer, stronger versions

### 3. E-E-A-T and trust signals

For publishers covering advice, health, finance, legal, or any YMYL-adjacent topic, trust signals are not optional.

Check:
* named author on every article
* author bio page with real credentials or experience
* editorial policy or about page that describes how content is produced
* reviewer attribution where relevant
* citations or sourcing for factual claims
* clear separation between editorial content and sponsored content

### 4. Content freshness

Publishers need a systematic approach to keeping content accurate.

Check:
* articles with time-sensitive information have been reviewed recently
* outdated statistics, links, or advice have been corrected
* update dates are accurate and reflect real changes, not cosmetic edits
* evergreen content is distinguished from time-sensitive content in the publishing workflow

### 5. Answer-engine readiness

Publisher content is the most natural fit for answer-engine extraction. Structure matters.

Check:
* articles open with a direct answer to the primary question
* H2s map to real sub-questions users ask
* definition paragraphs are concise and self-contained
* FAQ sections are based on real user questions, not stuffed keywords
* comparison tables are used where users need structured comparison

---

## Schema Priorities for Blog / Publisher

| Page | Recommended Schema |
|---|---|
| Homepage | `Organization`, `WebSite` |
| Article / post | `BlogPosting` or `Article`, `BreadcrumbList` |
| Author page | `Person` |
| Category / topic page | `WebPage`, `BreadcrumbList` |
| FAQ section | `FAQPage` only if real FAQ content is visible |

---

## Common Blog / Publisher SEO Risks

* Cannibalization across multiple articles on the same topic
* Author pages with no real biographical content
* Missing or fabricated E-E-A-T signals on YMYL-adjacent content
* Cosmetic date updates treated as substantive freshness
* FAQ schema added without real FAQ content on the page
* Category pages that are just paginated lists with no descriptive content
* Internal linking that favors recent posts over the strongest topical pages

---

## Confidence Labels Applied Here

All recommendations in this adaptation follow the canonical confidence system:
* **Official** — supported by Google Search Central or Bing documentation
* **Recommended** — strong industry practice
* **Heuristic** — useful but not guaranteed