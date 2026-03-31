---
name: pragmatic-seo-ecommerce
description: Ecommerce-specific SEO and AI visibility guidance covering category pages, product pages, faceted navigation, and schema markup for online retail sites.
---

# Pragmatic SEO & AI Visibility Skill — Ecommerce Adaptation

> This is a site-type adaptation of the canonical skill.
> Canonical source: `skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md`

---

## Site Type Context

**Type:** Ecommerce
**Primary goal:** Drive qualified product and category page traffic that converts to purchases.
**Typical pages:** Homepage, category pages, product pages, brand pages, blog, sale/promo pages.

---

## Priority Focus Areas for Ecommerce

### 1. Category pages before product pages

Category pages typically capture higher-volume, higher-intent queries. Audit these first.

Check:
* unique H1 and title per category
* descriptive intro copy above the product grid (not purely decorative)
* canonical handling for filtered and sorted URLs
* pagination handled correctly
* internal links between related categories

### 2. Product pages

Check:
* unique title and H1 per product (not just the product name — include key attributes)
* visible price and availability
* `Product`, `Offer`, and `BreadcrumbList` schema aligned with visible content
* product images crawlable and descriptive alt text present
* variant URLs canonicalized to the primary product page unless variants have meaningfully distinct demand
* reviews, if present, are real and accurately represented in markup

### 3. Faceted navigation

Faceted navigation is one of the most common sources of crawl waste and duplication in ecommerce.

Check:
* filtered URLs (color, size, brand) are not generating thousands of indexable duplicate pages
* canonical logic is consistent across filter combinations
* crawl budget is not being consumed by low-value facet combinations
* important filtered pages (e.g., `/shoes/color/black`) have a deliberate indexing decision

### 4. Out-of-stock and discontinued products

Check:
* out-of-stock pages return 200 with clear messaging, not soft 404
* discontinued products redirect to the closest available alternative
* schema `availability` reflects the actual page state

### 5. Merchant feed consistency

If Google Merchant Center or other feeds are in use:

Check:
* product data in feeds matches what is on the page
* price, availability, and title are consistent between feed and page
* feed errors do not contradict page schema

---

## Schema Priorities for Ecommerce

| Page | Recommended Schema |
|---|---|
| Homepage | `Organization`, `WebSite` |
| Category page | `WebPage`, `BreadcrumbList` |
| Product page | `Product`, `Offer`, `BreadcrumbList` |
| Brand page | `WebPage`, `BreadcrumbList` |
| Blog post | `BlogPosting`, `BreadcrumbList` |

---

## Common Ecommerce SEO Risks

* Faceted URLs indexed at scale creating thousands of near-duplicate pages
* Variant pages competing with the primary product page
* Out-of-stock products returning soft 404 or misleading availability schema
* Category pages with no descriptive content beyond the product grid
* Product titles duplicated across similar items
* Price or availability mismatch between page and schema
* Fake or third-party aggregate ratings applied incorrectly

---

## Confidence Labels Applied Here

All recommendations in this adaptation follow the canonical confidence system:
* **Official** — supported by Google Search Central or Bing documentation
* **Recommended** — strong industry practice
* **Heuristic** — useful but not guaranteed