# Audit Example — Ecommerce Site

> Format: Full Audit (Mode B)
> This is a realistic example output. URLs and company names are fictional.

---

## Site Summary

- **URL:** `https://nordicwear.co`
- **Site type:** Ecommerce — apparel and accessories
- **Primary market:** English, UK/EU
- **Main goal:** Drive category and product page traffic that converts to purchases
- **Rendering model:** SSG with client-side cart
- **Mobile-first risk:** Medium — mobile navigation tested, some lazy-load issues found
- **International setup:** Single domain, ships EU but no hreflang
- **Media dependency:** High — product images are critical
- **Trust sensitivity:** Low
- **Monitoring setup:** Google Search Console connected, Bing Webmaster Tools not set up

---

## Critical Findings

---

### Issue
Faceted navigation generating over 12,000 indexable URL combinations

### Why it matters
Filtered URLs like `/jackets?color=black&size=M&sort=price-asc` are being indexed without canonical tags pointing to the base category. This creates thousands of near-duplicate pages competing for the same queries and consuming crawl budget on low-value combinations.

### Confidence
Official

### Severity
Critical

### Suggested action
Add `rel="canonical"` pointing to the base category URL on all filtered and sorted variants. For filter combinations that have genuine search demand (e.g., `/jackets/black`), consider creating clean, stable URLs with their own canonical rather than relying on query parameters.

### Validation
Crawl the site and identify parameter-based URLs currently returning 200 without canonical tags. Verify canonical implementation across a sample of filtered pages after the fix.

### Scope
Sitewide

---

### Issue
280 product pages returning soft 404 for out-of-stock items

### Why it matters
Pages returning 200 with "out of stock" content but no meaningful alternative content or links are treated as low-quality by search systems. They also provide a poor user experience with no recovery path.

### Confidence
Official

### Severity
Critical

### Suggested action
For temporarily out-of-stock products: keep the page live, show clear availability messaging, suggest related in-stock alternatives, and preserve the page's internal links and schema. For permanently discontinued products: 301-redirect to the closest category or replacement product.

### Validation
Crawl and filter pages with out-of-stock signals. Confirm each has a deliberate status decision applied.

### Scope
Template-level

---

## Technical Findings

---

### Issue
Product images are lazy-loaded without dimensions specified

### Why it matters
Images without explicit width and height attributes cause layout shift as they load, contributing to poor CLS scores. On mobile, this is particularly noticeable during page load.

### Confidence
Official

### Severity
High

### Suggested action
Add `width` and `height` attributes to all product image tags. Use CSS to make them responsive. This reserves the correct space before the image loads and eliminates the shift.

### Validation
Run a Lighthouse or PageSpeed Insights test on a product page and confirm CLS improves. Check that images still display correctly on all breakpoints.

### Scope
Template-level

---

### Issue
Bing Webmaster Tools not configured

### Why it matters
Without Bing Webmaster Tools, there is no visibility into indexing issues, crawl errors, or performance data on Bing, which is a meaningful traffic source in UK and EU markets.

### Confidence
Recommended

### Severity
Medium

### Suggested action
Claim and verify the site in Bing Webmaster Tools. Submit the sitemap. Review the URL inspection and indexing diagnostics after setup.

### Validation
Confirm site is verified and sitemap is submitted in Bing Webmaster Tools dashboard.

### Scope
Sitewide

---

## Content Findings

---

### Issue
Category pages have no descriptive content above the product grid

### Why it matters
Category pages with no text content beyond a product grid are harder for search systems to understand and rank. They also miss an opportunity to match the informational intent that often precedes a purchase decision.

### Confidence
Recommended

### Severity
Medium

### Suggested action
Add a short intro paragraph (2–4 sentences) above the product grid on key category pages. The intro should describe the category, mention key attributes buyers care about, and link to relevant subcategories. Avoid keyword stuffing — write for the user first.

### Validation
Confirm intro text is present in raw HTML, not injected by JS after page load.

### Scope
Template-level

---

### Issue
Product titles are generic — only product name, no key attributes

### Why it matters
Titles like "Nordic Parka" miss attributes that buyers search for: material, fit, color, gender. Descriptive titles improve click-through rate and match more specific queries.

### Confidence
Recommended

### Severity
Medium

### Suggested action
Update product title templates to include the most relevant attributes. Example: "Nordic Parka — Waterproof Men's Winter Jacket" or "Nordic Parka in Forest Green — Women's Insulated Coat." Prioritize the attributes that appear most in the product's real search demand.

### Validation
Review a sample of product titles after template update. Confirm they are unique across similar products.

### Scope
Template-level

---

## Structured Data Findings

---

### Issue
`Product` schema missing `availability` property on product pages

### Why it matters
Without `availability`, search systems and Merchant Center cannot confirm stock status from structured data. This reduces eligibility for product rich results and may cause feed inconsistencies.

### Confidence
Official

### Severity
High

### Suggested action
Add `availability` using Schema.org values: `InStock`, `OutOfStock`, or `PreOrder` as appropriate. The value must match the visible page content. Update this dynamically if the page is SSG with revalidation.

### Validation
Validate using Google's Rich Results Test. Confirm no warnings related to availability. Check that the value reflects the actual product state.

### Scope
Template-level

---

## AI Visibility Findings

---

### Issue
Category pages have no direct-answer intro describing the category's distinct value

### Why it matters
Category pages that open with a direct, clear description of what the category contains are more extractable by answer engines when users ask shopping-intent questions.

### Confidence
Heuristic

### Severity
Low

### Suggested action
After adding the intro copy for SEO purposes (see Content Findings), ensure the first sentence directly describes the category. Example: "Our men's waterproof jackets are built for Nordic weather — fully taped seams, recycled insulation, and clean Scandinavian design."

### Validation
Confirm the first sentence is a clear, direct description visible in raw HTML.

### Scope
Template-level

---

## Priority Roadmap

### Critical
- Fix faceted navigation canonical logic
- Resolve 280 soft-404 out-of-stock product pages

### High
- Add `availability` to Product schema
- Add image dimensions to fix CLS on product pages

### Medium
- Set up Bing Webmaster Tools
- Add descriptive intro copy to category pages
- Improve product title templates

### Low
- Improve category page first sentences for answer-engine extractability