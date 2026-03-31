---
name: pragmatic-seo-local-business
description: Local business-specific SEO and AI visibility guidance covering Google Business Profile, NAP consistency, location pages, local intent alignment, and structured data for local search.
---

# Pragmatic SEO & AI Visibility Skill — Local Business Adaptation

> This is a site-type adaptation of the canonical skill.
> Canonical source: `skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md`

---

## Site Type Context

**Type:** Local Business
**Primary goal:** Drive local search visibility, map pack presence, and in-store or appointment-based conversions.
**Typical pages:** Homepage, services pages, location pages, about, contact, reviews.

---

## Priority Focus Areas for Local Business

### 1. Google Business Profile

For most local businesses, Google Business Profile (GBP) has more direct impact on local visibility than the website itself. Audit this first.

Check:
* profile is claimed and verified
* primary category accurately reflects the business
* secondary categories cover relevant services
* hours, phone number, and website URL are accurate
* service area is correctly defined if applicable
* photos are current, representative, and not stock images
* reviews are monitored and responded to
* no duplicate or suspended profiles exist
* location page on the website matches GBP data exactly

### 2. NAP consistency

Name, Address, Phone number must be consistent across the website, GBP, and major citation sources.

Check:
* NAP in page footer or contact page matches GBP exactly
* formatting is consistent (street abbreviations, suite formats, etc.)
* phone number format is consistent
* no old addresses or phone numbers still live on the site

### 3. Location pages

For businesses with multiple locations, each location needs its own page with distinct, useful content.

Check:
* one dedicated page per physical location
* each page has unique content, not just a name swap on a template
* NAP on each page matches the corresponding GBP listing
* embedded map or directions link present
* internal linking connects the homepage to all location pages

### 4. Local intent alignment

The title tags, H1s, and page copy on key pages should reflect local intent.

Check:
* service + city combinations appear naturally in titles and H1s where appropriate
* content describes the service in the context of the local area, not just generically
* do not over-optimize by forcing city names unnaturally into every sentence

### 5. Structured data

`LocalBusiness` schema should reflect what is visible on the page and in the GBP listing.

Check:
* `LocalBusiness` (or a more specific subtype) is present on the homepage and location pages
* `name`, `address`, `telephone`, `openingHours` match the visible content and GBP
* `geo` coordinates are accurate when included
* do not add fake addresses or phone numbers to markup

---

## Schema Priorities for Local Business

| Page | Recommended Schema |
|---|---|
| Homepage | `LocalBusiness` (or subtype), `Organization` |
| Location page | `LocalBusiness` (or subtype), `BreadcrumbList` |
| Service page | `WebPage`, `BreadcrumbList` |
| Contact page | `LocalBusiness`, `BreadcrumbList` |

---

## Common Local Business SEO Risks

* GBP not claimed or outdated
* NAP inconsistency between site and GBP
* Multiple locations using identical page copy
* `LocalBusiness` schema with data that does not match the page or GBP
* Review markup applied incorrectly on LocalBusiness pages expecting rich result stars
* Doorway-style location pages with no unique content
* No internal links from homepage to individual location pages

---

## Confidence Labels Applied Here

All recommendations in this adaptation follow the canonical confidence system:
* **Official** — supported by Google Search Central or Bing documentation
* **Recommended** — strong industry practice
* **Heuristic** — useful but not guaranteed