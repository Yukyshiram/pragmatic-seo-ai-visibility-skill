# Audit Example — SaaS Site

> Format: Full Audit (Mode B)
> This is a realistic example output. URLs and company names are fictional.

---

## Site Summary

- **URL:** `https://flowdesk.io`
- **Site type:** SaaS — project management tool
- **Primary market:** English, US/Global
- **Main goal:** Drive trial signups via organic search
- **Rendering model:** SSR with React hydration
- **Mobile-first risk:** Low — responsive, content parity confirmed
- **International setup:** None
- **Media dependency:** Low
- **Trust sensitivity:** Low
- **Monitoring setup:** Google Search Console connected, no Bing Webmaster Tools

---

## Critical Findings

---

### Issue
Pricing page is accidentally `noindex`

### Why it matters
The pricing page is one of the highest commercial-intent pages on the site. If it is excluded from the index, it cannot rank for queries like "flowdesk pricing" or "[competitor] vs flowdesk."

### Confidence
Official

### Severity
Critical

### Suggested action
Remove the `<meta name="robots" content="noindex">` tag from `/pricing`. Verify it was not added intentionally due to a CMS default or staging carryover.

### Validation
Inspect page source for the meta tag. Use Google Search Console URL Inspection to confirm the page is eligible for indexing after the fix.

### Scope
Page-specific

---

### Issue
Homepage H1 is "Welcome to Flowdesk"

### Why it matters
The H1 does not communicate what the product does or who it is for. Users and search engines rely on the H1 to understand the page topic.

### Confidence
Recommended

### Severity
High

### Suggested action
Rewrite the H1 to reflect the product's core value. Example: "Project management for remote engineering teams." The exact phrasing should match the primary query intent and the product's real positioning.

### Validation
Confirm the new H1 appears in raw HTML, not only after JS hydration.

### Scope
Page-specific

---

## Technical Findings

---

### Issue
Navigation links are rendered via JS and not present in raw HTML

### Why it matters
If primary navigation links are not crawlable anchors in the initial HTML, important pages may not be reliably discovered or linked by crawlers.

### Confidence
Official

### Severity
High

### Suggested action
Ensure top-level navigation links are server-rendered as standard `<a href>` anchors. Verify using browser source view, not the rendered DOM.

### Validation
View page source and confirm nav links exist as plain HTML anchors without requiring JS execution.

### Scope
Sitewide

---

### Issue
Duplicate canonical variants for the pricing page: `/pricing` and `/pricing/`

### Why it matters
Two URLs serving the same content without a clear canonical creates ambiguity. Link equity and crawl signals may split between the two variants.

### Confidence
Official

### Severity
High

### Suggested action
Choose one canonical form (preferably `/pricing` without trailing slash for consistency) and ensure the other variant 301-redirects to it. Set the canonical tag to the preferred URL.

### Validation
Check HTTP status of both variants. Confirm canonical tag points to the chosen URL on the preferred version.

### Scope
Template-level

---

### Issue
XML sitemap not submitted to Google Search Console

### Why it matters
Without sitemap submission, important new pages may take longer to be discovered.

### Confidence
Official

### Severity
Medium

### Suggested action
Submit `https://flowdesk.io/sitemap.xml` in Google Search Console under Sitemaps. Also verify the sitemap includes feature pages, pricing, comparison pages, and blog posts.

### Validation
Confirm submission status in Search Console and check that sitemap URLs return 200.

### Scope
Sitewide

---

## Content Findings

---

### Issue
Blog post `/blog/best-project-management-tips` competes directly with the feature page `/features/task-management`

### Why it matters
Both pages target similar queries around task and project management. Without clear differentiation, they may cannibalize each other and neither ranks as well as it could.

### Confidence
Heuristic

### Severity
Medium

### Suggested action
Differentiate intent clearly. The feature page should focus on commercial investigation intent (what the product does, for whom). The blog post should focus on informational intent (how to manage projects effectively). Add internal links from the blog post to the feature page, not the other way around.

### Validation
After differentiation, monitor Search Console to confirm one URL stabilizes as the dominant ranking page for the shared queries.

### Scope
Page-specific

---

### Issue
Comparison page `/vs-asana` has a generic intro that does not answer the comparison directly

### Why it matters
Users searching for "[product] vs [competitor]" want a clear, direct answer. Burying the comparison under preamble increases bounce rate and reduces the page's usefulness to search systems.

### Confidence
Recommended

### Severity
Medium

### Suggested action
Rewrite the intro to open with a direct comparison summary. Example: "Flowdesk and Asana both handle task management, but Flowdesk is built specifically for engineering teams who need GitHub integration and sprint tracking without the complexity." Follow with a comparison table before detailed sections.

### Validation
Review the intro after editing to confirm it answers the comparison within the first 100 words.

### Scope
Page-specific

---

## Structured Data Findings

---

### Issue
Feature pages have no structured data

### Why it matters
`SoftwareApplication` schema supports machine understanding of the product and may improve eligibility for relevant search appearances.

### Confidence
Recommended

### Severity
Medium

### Suggested action
Add `SoftwareApplication` schema to key feature pages. Include `name`, `applicationCategory`, `operatingSystem`, and `offers` where visible on the page. Do not add properties that are not reflected in the visible content.

### Validation
Validate using Google's Rich Results Test. Confirm no errors or warnings related to missing required fields.

### Scope
Template-level

---

## AI Visibility Findings

---

### Issue
Feature pages have no direct-answer intro

### Why it matters
Pages that open with a clear, scoped answer to the primary query are easier for answer engines to extract and reference. The current feature page intros lead with marketing copy rather than a direct description.

### Confidence
Heuristic

### Severity
Low

### Suggested action
Add a one or two sentence direct-answer intro to each feature page before marketing copy. Example: "Flowdesk's sprint planning tool lets engineering teams create, assign, and track sprints directly from their GitHub issues, without leaving their existing workflow."

### Validation
Review the intro in page source. Confirm it appears near the top of the content, before any accordion or tab-hidden sections.

### Scope
Template-level

---

## Priority Roadmap

### Critical
- Remove `noindex` from pricing page

### High
- Fix homepage H1
- Server-render navigation links
- Resolve `/pricing` vs `/pricing/` canonical conflict

### Medium
- Submit sitemap to Search Console
- Differentiate blog post vs feature page intent
- Improve comparison page intro
- Add `SoftwareApplication` schema to feature pages

### Low
- Add direct-answer intros to feature pages