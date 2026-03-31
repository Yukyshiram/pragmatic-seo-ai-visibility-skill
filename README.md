<div align="center">

## 🎯 Pragmatic SEO AI Visibility Skill

**Production-ready SEO and AI visibility guidance for modern AI assistants. No hype, no folklore, no false guarantees.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node 18+](https://img.shields.io/badge/Node-18%2B-brightgreen.svg)](package.json)
[![Multi-platform](https://img.shields.io/badge/Multi--platform-Cursor%20%7C%20Copilot%20%7C%20Windsurf%20%7C%20Claude-blue.svg)](#-platform-compatibility)

A production-ready, multi-platform instruction package that helps developers and technical teams improve website discoverability, crawlability, structured data, and answer-engine readiness with clear confidence levels and zero false promises.

[📖 Full Guide](#-operating-principles) · [⚡ Quick Start](#-quick-start) · [🔧 Install](#-installation) · [📋 Examples](#-usage-examples) · [⚖️ License](LICENSE)

</div>

---

## What Is This?

**Pragmatic SEO AI Visibility Skill** is a canonical skill file (`PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md`) plus an installer (`bin/install.js`) that deploys it across multiple AI assistant ecosystems.

It gives developers and technical teams:

- ✅ Clear, implementable SEO guidance
- ✅ Confidence labels: **Official**, **Recommended**, **Heuristic**
- ✅ Realistic expectations: no ranking promises, no "AI Overview hacks"
- ✅ Practical workflows for technical audits, schema decisions, and crawl/index diagnostics
- ✅ Site-context awareness (SaaS vs ecommerce vs publisher vs local business)

**Supported ecosystems**
- Cursor
- GitHub Copilot
- Windsurf
- Claude
- `AGENTS.md`-compatible workflows

---

## Why It Exists

Modern AI assistants can improve SEO workflows, but only if the guidance is clear, consistent, and grounded.

This project exists because:

1. **SEO is full of folklore.** Official guidance often gets mixed with myths, shortcuts, and cargo-cult advice. This project separates them.
2. **Not every recommendation fits every site.** A SaaS product, ecommerce store, and publisher site need different decisions.
3. **Promises destroy trust.** This project does not guarantee rankings, citations, or AI Overview inclusion.
4. **Consistency matters across tools.** Without a canonical source, instruction quality drifts across platforms and teams.
5. **Developers need systems, not marketing.** This project is for people who care about source code, validation, and actual implementation.

---

## 🚀 Quick Start

**Requirements:** Node.js 18+

### Install everything

```bash
npx pragmatic-seo-ai-visibility-skill --everything
```

Or run locally from source

```bash
git clone https://github.com/Yukyshiram/pragmatic-seo-ai-visibility-skill.git
cd pragmatic-seo-ai-visibility-skill

# View all options
node bin/install.js --help

# Install everything (rules/instructions + skill bundles)
node bin/install.js --everything

# Or install specific targets
node bin/install.js --cursor --copilot --windsurf
```

---

## 📋 Platform Compatibility

| Platform | Format | Target Flag | Output Location |
|---|---|---|---|
| Cursor | Rules | `--cursor` | `.cursor/rules/pragmatic-seo-ai-visibility.mdc` |
| Cursor | Skill Bundle | `--cursor-skill` | `.cursor/skills/pragmatic-seo-ai-visibility/` |
| GitHub Copilot | Repo Instructions | `--copilot` | `.github/copilot-instructions.md` |
| GitHub Copilot | Path Instructions | `--copilot-path` | `.github/instructions/pragmatic-seo-ai-visibility.instructions.md` |
| AGENTS.md | Agent Instructions | `--agents-md` | `AGENTS.md` |
| Windsurf | Rules | `--windsurf` | `.windsurf/rules/pragmatic-seo-ai-visibility.md` |
| Windsurf | Skill Bundle | `--windsurf-skill` | `.windsurf/skills/pragmatic-seo-ai-visibility/` |
| Claude | Instructions | `--claude` | `CLAUDE.md` |
| Claude | Skill Bundle | `--claude-skill` | `.claude/skills/pragmatic-seo-ai-visibility/` |

---

## ⚡ Installation

### Automated (recommended)

```bash
# Everything (rules/instructions + skill bundles)
node bin/install.js --everything

# Standard rules/instructions only
node bin/install.js --all

# Skill bundles only
node bin/install.js --all-skills

# Individual targets
node bin/install.js --cursor
node bin/install.js --copilot
node bin/install.js --copilot-path
node bin/install.js --agents-md
node bin/install.js --windsurf
node bin/install.js --claude

# Skill bundles only
node bin/install.js --cursor-skill
node bin/install.js --windsurf-skill
node bin/install.js --claude-skill

# Overwrite existing outputs
node bin/install.js --everything --force
```

### Manual installation

Copy the canonical source file:

```
skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md
```

into the desired destination:

- Cursor rules: `.cursor/rules/pragmatic-seo-ai-visibility.mdc`
- Cursor skills: `.cursor/skills/pragmatic-seo-ai-visibility/SKILL.md`
- GitHub Copilot (repo): `.github/copilot-instructions.md`
- GitHub Copilot (path): `.github/instructions/pragmatic-seo-ai-visibility.instructions.md`
- AGENTS.md: `AGENTS.md`
- Windsurf rules: `.windsurf/rules/pragmatic-seo-ai-visibility.md`
- Windsurf skills: `.windsurf/skills/pragmatic-seo-ai-visibility/SKILL.md`
- Claude instructions: `CLAUDE.md`
- Claude skills: `.claude/skills/pragmatic-seo-ai-visibility/SKILL.md`

For skill bundles, also include a `reference.md` file with a short usage summary.

---

## 📁 Repository Structure

```
pragmatic-seo-ai-visibility-skill/
├── bin/
│   └── install.js
├── skill/
│   └── PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md
├── .github/
│   └── workflows/
├── package.json
├── LICENSE
└── README.md
```

Single source of truth:
`skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md`

All generated platform outputs are derived from this canonical file.

---

## 🎓 Design Principles

This project is intentionally strict about credibility and usefulness.

### 1. No False Promises

- No guaranteed rankings
- No guaranteed AI citations
- No fake certainty
- No "SEO magic"

### 2. Official First, Heuristic Last

Every recommendation should be framed as one of:

- **Official** — directly supported by official documentation
- **Recommended** — broadly accepted best practice
- **Heuristic** — useful, but not guaranteed by official sources

### 3. Site Context Matters

Guidance should adapt to the actual site type:

- SaaS
- Ecommerce
- Blog / publisher
- Portfolio
- Documentation
- Local business
- Landing page / web app

### 4. Schema Is Not Magic

- Structured data helps machines understand content
- It may support eligibility for richer appearances
- It does not guarantee ranking or citation
- It must reflect visible page reality

### 5. Smallest Meaningful Fix First

Start with:

- crawl and index issues
- broken metadata
- canonical and robots problems
- clear technical blockers

Only then move into broader content or authority work.

---

## ⚙️ Installer Behavior

The installer:

- reads the canonical skill from `skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md`
- creates missing directories automatically
- installs selected targets
- generates skill bundles with `SKILL.md` and `reference.md`
- skips existing files unless `--force` is used

### Why this matters

- **Single source of truth** — update once, deploy everywhere
- **Consistency across tools** — less drift across teams
- **Low friction** — one command can update multiple environments
- **Safer defaults** — existing files are preserved unless explicitly overwritten

---

## 📖 Usage Examples

### Installer commands

```bash
# Show help
node bin/install.js --help

# Install everything
node bin/install.js --everything

# Install all standard instructions
node bin/install.js --all

# Install all skill bundles
node bin/install.js --all-skills

# Platform-specific installs
node bin/install.js --cursor
node bin/install.js --copilot
node bin/install.js --copilot-path
node bin/install.js --agents-md
node bin/install.js --windsurf
node bin/install.js --claude

# Skill bundles only
node bin/install.js --cursor-skill
node bin/install.js --windsurf-skill
node bin/install.js --claude-skill

# Force overwrite
node bin/install.js --everything --force
```

### Platform-specific usage ideas

#### Cursor

In Cursor chat or Composer:

```
/create-skill Help me create this skill for Cursor: https://github.com/Yukyshiram/pragmatic-seo-ai-visibility-skill/blob/main/skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md
```

#### GitHub Copilot

In Copilot Chat:

```
Help me adapt this canonical skill into GitHub Copilot repository instructions using this source:
https://github.com/Yukyshiram/pragmatic-seo-ai-visibility-skill/blob/main/skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md

Also generate path-specific instructions for /docs and /blog.
```

#### Windsurf

```
Adapt this canonical skill into a Windsurf skill bundle with SKILL.md and reference.md:
https://github.com/Yukyshiram/pragmatic-seo-ai-visibility-skill/blob/main/skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md
```

#### Claude Code

```
Adapt this canonical skill into Claude Code instructions and generate a .claude/skills/pragmatic-seo-ai-visibility/SKILL.md bundle from:
https://github.com/Yukyshiram/pragmatic-seo-ai-visibility-skill/blob/main/skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md
```

---

## 💡 Ideas & Advanced Usage

### Use the canonical file as the master source

Edit:

```
skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md
```

Then redeploy everywhere:

```bash
node bin/install.js --everything --force
```

### Keep platform instructions synchronized

Use the installer to maintain the same guidance across:

- Cursor
- Copilot
- Windsurf
- Claude
- AGENTS.md-based workflows

### Extend the project with validation and release automation

The current structure already supports:

- validation workflows
- installer-based regeneration
- future release automation
- future npm publishing improvements

---

## 🎯 Operating Principles

This skill emphasizes:

- Be practical, not theatrical
- Prefer official guidance
- Separate confidence levels clearly
- Prioritize impact and effort
- Never promise rankings
- Do not treat schema as magic
- Use the right mode for the task

For the full framework, see [skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md](skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md).

---

## 📊 Roadmap

- ✅ Canonical skill file
- ✅ Multi-platform installer
- ✅ Cursor, Copilot, Windsurf, Claude, and AGENTS.md support
- ✅ Validation workflow support
- ⏳ Example implementations per site type
- ⏳ Team onboarding guide
- ⏳ Stronger installer edge-case coverage
- ⏳ Optional publishing/release automation

---

## ⚖️ License

MIT © [Im_JVallejo](https://github.com/Yukyshiram)

See [LICENSE](LICENSE) for details.

---

## 🤝 Contributing

This is a focused and opinionated project.

Good contributions should:

- strengthen official or recommended guidance
- include source-backed reasoning where relevant
- preserve the no-hype philosophy
- consider impact across multiple platforms, not just one

Questions or suggestions are welcome through [issues](https://github.com/Yukyshiram/pragmatic-seo-ai-visibility-skill/issues).

---

## 👤 Developed by

[Im_JVallejo](https://github.com/Yukyshiram) — pragmatic guidance for technical teams who care about real impact, not hype.

---