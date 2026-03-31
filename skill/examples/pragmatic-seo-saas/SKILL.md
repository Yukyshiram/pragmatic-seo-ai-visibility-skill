---
name: pragmatic-seo-saas
description: A comprehensive guide for optimizing SaaS websites for search visibility and AI discoverability, covering commercial intent pages, comparisons, integrations, documentation, and content strategy.
---

# Pragmatic SEO & AI Visibility Skill — SaaS Adaptation

> This is a site-type adaptation of the canonical skill.
> Canonical source: `skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md`

---

## Site Type Context

**Type:** SaaS (Software as a Service)
**Primary goal:** Drive qualified signups, trials, and demos through organic search.
**Typical pages:** Homepage, feature pages, pricing, comparison pages, integrations, blog, docs, changelog.

---

## Priority Focus Areas for SaaS

### 1. Commercial intent pages first

Feature pages, pricing pages, and comparison pages drive the highest-intent traffic. These should be audited before blog content.

Check:
* clear H1 that names the product and its core value
* intro that states who the product is for and what it does
* structured data: `SoftwareApplication`, `Organization`, `BreadcrumbList`
* no canonical issues between `/pricing`, `/plans`, or `/pricing/` variants
* CTAs are crawlable text, not hidden behind JS

### 2. Comparison and alternative pages

SaaS users search for comparisons before converting. These pages deserve dedicated attention.

Check:
* pages like `/vs-[competitor]` or `/[competitor]-alternative` exist for key competitors
* content is honest and specific, not just keyword stuffing
* structured data reflects the page type (`WebPage` or `Article`)
* internal links connect these pages to feature and pricing pages

### 3. Integration and use-case pages

These capture long-tail commercial intent.

Check:
* each integration has its own landing page
* use-case pages target specific roles or industries
* internal linking connects integrations to relevant feature pages

### 4. Documentation and changelog

Docs affect trust and discoverability for developer-focused SaaS.

Check:
* docs are indexable (not hidden behind login)
* changelog is indexable and has stable URLs
* docs have clear titles and H1s per page
* docs do not compete with marketing pages for the same queries

### 5. Blog content intent matching

SaaS blogs often publish content that does not align with any commercial intent stage.

Check:
* blog topics map to informational or commercial investigation intent
* posts link to relevant feature or pricing pages internally
* posts do not compete with feature pages for the same queries

---

## Schema Priorities for SaaS

| Page | Recommended Schema |
|---|---|
| Homepage | `Organization`, `WebSite` |
| Feature page | `SoftwareApplication`, `BreadcrumbList` |
| Pricing page | `WebPage`, `BreadcrumbList` |
| Comparison page | `Article` or `WebPage`, `BreadcrumbList` |
| Blog post | `BlogPosting`, `BreadcrumbList` |
| Docs page | `TechArticle`, `BreadcrumbList` |

---

## Common SaaS SEO Risks

* Feature pages with duplicate or template-generated titles
* Pricing page blocked by `noindex` accidentally
* JS-rendered CTAs and navigation not crawlable
* Blog cannibalization against feature pages
* Changelog or docs not linked from sitemap
* Missing `hreflang` on multi-language SaaS products

---

## Confidence Labels Applied Here

All recommendations in this adaptation follow the canonical confidence system:
* **Official** — supported by Google Search Central or Bing documentation
* **Recommended** — strong industry practice
* **Heuristic** — useful but not guaranteed