# Audit Example — Blog / Publisher Site

> Format: Full Audit (Mode B)
> This is a realistic example output. URLs and company names are fictional.

---

## Site Summary

- **URL:** `https://clearfinance.io`
- **Site type:** Blog / Publisher — personal finance
- **Primary market:** English, US
- **Main goal:** Drive organic traffic to informational and commercial investigation content; monetize through affiliate and display
- **Rendering model:** SSG (Next.js)
- **Mobile-first risk:** Low — responsive, content parity confirmed
- **International setup:** None
- **Media dependency:** Low
- **Trust sensitivity:** High — personal finance is YMYL
- **Monitoring setup:** Google Search Console connected, Google Analytics 4 connected

---

## Critical Findings

---

### Issue
No named author on 340 of 380 published articles

### Why it matters
Personal finance is a YMYL topic. Articles without named authors give users and search systems no basis for evaluating the expertise or accountability behind the advice. This is a significant trust and E-E-A-T gap at scale.

### Confidence
Recommended

### Severity
Critical

### Suggested action
Add named author attribution to all articles. Each author should have a dedicated bio page with real credentials, experience relevant to personal finance, and a link to their professional profile where appropriate. Do not fabricate credentials.

### Validation
Confirm author names and bio page links are visible in page source on a sample of articles. Verify author pages exist and contain real biographical content.

### Scope
Sitewide

---

### Issue
No editorial policy or about page

### Why it matters
Search quality evaluators assess whether a publisher has clear editorial standards. Without an about page or editorial policy, the site provides no context for how its content is produced, reviewed, or updated — a significant trust gap for a YMYL publisher.

### Confidence
Recommended

### Severity
Critical

### Suggested action
Create an About page that describes the site's mission, how content is produced, and who is responsible for it. Create a separate Editorial Policy or How We Make Money page that is transparent about affiliate relationships and editorial independence.

### Validation
Confirm both pages are live, indexable, and linked from the site footer.

### Scope
Sitewide

---

## Technical Findings

---

### Issue
Pagination on category pages uses `?page=2` parameters without canonical handling

### Why it matters
Paginated category pages without canonical tags may be indexed as separate, thin pages. This creates duplication and dilutes the authority of the primary category page.

### Confidence
Recommended

### Severity
Medium

### Suggested action
Add a self-referencing canonical to each paginated page. The first page (`/category/budgeting/`) should also have a self-referencing canonical. Do not canonicalize all paginated pages to page 1 — that removes the paginated content from the index entirely.

### Validation
Inspect source on `/category/budgeting/?page=2` and confirm canonical is self-referencing and not pointing to page 1.

### Scope
Template-level

---

### Issue
XML sitemap includes 47 author pages with no bio content

### Why it matters
Author pages with no real content waste crawl budget and may be treated as thin pages. If author pages cannot be meaningfully populated, they should not be indexed.

### Confidence
Recommended

### Severity
Medium

### Suggested action
Either populate author pages with real biographical content and a list of the author's articles, or add `noindex` to unpopulated author pages and remove them from the sitemap. Do not leave empty author pages indexed.

### Validation
Audit author pages for content. Confirm sitemap reflects the correct indexing decision.

### Scope
Template-level

---

## Content Findings

---

### Issue
14 articles target the same primary intent as stronger, newer articles on the same topic

### Why it matters
Multiple articles competing for the same query intent split ranking signals without adding user value. Neither article ranks as well as a single consolidated page would.

### Confidence
Heuristic

### Severity
High

### Suggested action
For each cannibalizing pair, identify the stronger article (better content, more links, more consistent rankings). Redirect the weaker version to the stronger one. Where both articles have distinct useful content, consolidate into a single comprehensive page and redirect the old URL.

### Validation
After consolidation, monitor Search Console for 4–8 weeks to confirm rankings stabilize on the surviving URL.

### Scope
Page-specific

---

### Issue
Most articles open with a generic intro paragraph before answering the primary question

### Why it matters
Users and answer engines expect the primary question to be addressed near the top. Burying the answer under two or three sentences of context preamble reduces the page's usefulness and extractability.

### Confidence
Recommended

### Severity
Medium

### Suggested action
Rewrite article intros for high-traffic pages to lead with a direct answer in the first one to two sentences. Follow with context and detail. Apply this as a template standard for new articles going forward.

### Validation
Review the first 100 words of the 20 highest-traffic articles and confirm the primary question is answered before the second paragraph.

### Scope
Page-specific (prioritize top 20 by traffic)

---

### Issue
Update dates on 60+ articles reflect cosmetic edits, not substantive changes

### Why it matters
Changing a publish date without meaningful content updates can mislead users and is not treated as genuine freshness by search systems. For YMYL content where accuracy matters, this also creates a trust risk.

### Confidence
Official

### Severity
Medium

### Suggested action
Establish an editorial standard: only update the published/modified date when factual corrections, new data, new sections, or outdated advice has been replaced. Revert cosmetic-edit date changes on articles where no substantive update occurred.

### Validation
Audit the 60+ affected articles. Confirm updated dates reflect real content changes.

### Scope
Sitewide

---

## Structured Data Findings

---

### Issue
`FAQPage` schema added to 80 articles that do not contain real FAQ sections

### Why it matters
Schema must reflect visible page content. Adding `FAQPage` schema to pages without actual FAQ sections violates Google's structured data guidelines and may result in manual action or loss of rich result eligibility.

### Confidence
Official

### Severity
High

### Suggested action
Remove `FAQPage` schema from all articles where no visible FAQ section exists. Only apply it to pages that contain a genuine, visible Q&A section based on real user questions.

### Validation
Audit structured data across the article template. Remove schema where no visible FAQ is present. Validate remaining implementations in Google's Rich Results Test.

### Scope
Template-level

---

## AI Visibility Findings

---

### Issue
H2 headings are keyword-driven rather than question-driven

### Why it matters
Headings that map to real user questions ("How much should I save each month?") are more extractable by answer engines than keyword-stuffed headings ("Monthly savings tips and strategies"). The former creates self-contained, quotable sections.

### Confidence
Heuristic

### Severity
Low

### Suggested action
Rewrite H2s on high-traffic articles to reflect the actual sub-questions users ask. Use Search Console queries, People Also Ask data, and real user research to identify the right phrasing.

### Validation
Review H2 structure on the top 10 articles by impressions. Confirm headings map to real questions.

### Scope
Page-specific (prioritize top content by impressions)

---

## Priority Roadmap

### Critical
- Add named author attribution to all articles
- Create About and Editorial Policy pages

### High
- Consolidate 14 cannibalizing article pairs
- Remove `FAQPage` schema from articles without real FAQ content

### Medium
- Fix pagination canonical handling
- Add `noindex` or populate empty author pages
- Rewrite article intros on top 20 pages by traffic
- Revert cosmetic date updates

### Low
- Rewrite H2s on top 10 articles by impressions to question-driven format