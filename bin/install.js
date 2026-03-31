#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SKILL_SOURCE = path.join(
    ROOT,
    "skill",
    "PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md"
);

const SKILL_SLUG = "pragmatic-seo-ai-visibility";

const TARGETS = {
    cursor: path.join(ROOT, ".cursor", "rules", "pragmatic-seo-ai-visibility.mdc"),
    copilot: path.join(ROOT, ".github", "copilot-instructions.md"),
    copilotPath: path.join(
        ROOT,
        ".github",
        "instructions",
        "pragmatic-seo-ai-visibility.instructions.md"
    ),
    windsurf: path.join(ROOT, ".windsurf", "rules", "pragmatic-seo-ai-visibility.md"),
    claude: path.join(ROOT, "CLAUDE.md"),
    agentsMd: path.join(ROOT, "AGENTS.md"),

    cursorSkillDir: path.join(ROOT, ".cursor", "skills", SKILL_SLUG),
    windsurfSkillDir: path.join(ROOT, ".windsurf", "skills", SKILL_SLUG),
    claudeSkillDir: path.join(ROOT, ".claude", "skills", SKILL_SLUG),
};

const args = process.argv.slice(2);

function hasFlag(flag) {
    return args.includes(flag);
}

function printHelp() {
    console.log(`
Pragmatic SEO & AI Visibility Skill Installer

Instructions targets:
  --cursor         Install Cursor rule file
  --copilot        Install GitHub Copilot repository instructions
  --copilot-path   Install GitHub Copilot path-specific instructions
  --windsurf       Install Windsurf rule file
  --claude         Install CLAUDE.md instructions
  --agents-md      Install AGENTS.md instructions

Skill bundle targets:
  --cursor-skill   Install Cursor skill bundle
  --windsurf-skill Install Windsurf skill bundle
  --claude-skill   Install Claude Code skill bundle

Utility:
  --all            Install standard instruction targets
  --all-skills     Install all skill bundle targets
  --everything     Install all instruction targets and all skill bundles
  --detect         Detect likely existing targets from project structure
  --force          Overwrite existing files
  --help           Show this help message

Examples:
  node bin/install.js --cursor
  node bin/install.js --copilot --force
  node bin/install.js --cursor-skill
  node bin/install.js --windsurf-skill --claude-skill
  node bin/install.js --everything
  node bin/install.js --agents-md
`);
}

function readSkillFile() {
    if (!fs.existsSync(SKILL_SOURCE)) {
        console.error(`❌ Skill file not found: ${SKILL_SOURCE}`);
        process.exit(1);
    }

    const content = fs.readFileSync(SKILL_SOURCE, "utf8").trim();

    if (!content) {
        console.error("❌ Skill file exists but is empty.");
        process.exit(1);
    }

    return content;
}

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function ensureDirForFile(filePath) {
    ensureDir(path.dirname(filePath));
}

function fileExists(filePath) {
    return fs.existsSync(filePath);
}

function dirExists(dirPath) {
    return fs.existsSync(dirPath);
}

function buildReferenceContent() {
    return `# Pragmatic SEO & AI Visibility Skill

## Purpose
Help the assistant work on:
- technical SEO
- structured data
- crawl and index issues
- search appearance
- answer-engine readiness
- content clarity and extractability

## Primary file
- \`SKILL.md\`

## Use this skill when
- auditing a website
- improving metadata
- reviewing structured data
- fixing crawl/index issues
- optimizing content structure for search and AI answers
- improving answer-first formatting

## Modes
- Quick audit
- Full audit
- Execution support
- Content optimization

## Notes
- This skill does not guarantee rankings.
- This skill separates official guidance, recommended practices, and heuristics.
- Prefer the canonical skill content in \`SKILL.md\`.
`;
}

function buildSkillBundleContent(rawSkillContent) {
    return `---
name: ${SKILL_SLUG}
description: Helps with technical SEO, crawlability, indexing, structured data, content clarity, search appearance, and AI answer visibility for websites and web apps.
---

# Pragmatic SEO & AI Visibility Skill

> See \`reference.md\` for a concise usage overview.

${rawSkillContent}
`;
}

function buildCopilotPathContent(rawSkillContent) {
    return `---
applyTo: "**/*"
---

# Pragmatic SEO & AI Visibility Skill

Use these instructions when working on:
- technical SEO
- metadata
- structured data
- crawl/index issues
- search appearance
- content clarity
- AI answer visibility

${rawSkillContent}
`;
}

function buildAgentsMdContent(rawSkillContent) {
    return `# Pragmatic SEO & AI Visibility Skill

Use these repository agent instructions when working on:
- technical SEO
- metadata
- structured data
- crawl and index issues
- search appearance
- content clarity
- answer-engine readiness
- AI visibility for websites and web apps

## Canonical skill
The canonical source for this skill is:
- \`skill/PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md\`

## Guidance
- Prefer official guidance over myths.
- Separate official recommendations, recommended practices, and heuristics.
- Do not promise rankings.
- Do not use deceptive tactics.
- Match recommendations to the actual site type and rendering model.

${rawSkillContent}
`;
}

function detectTargets() {
    const detected = [];

    if (
        dirExists(path.join(ROOT, ".cursor")) ||
        fileExists(path.join(ROOT, ".cursorrules")) ||
        dirExists(path.join(ROOT, ".cursor", "skills"))
    ) {
        detected.push("cursor");
    }

    if (
        fileExists(path.join(ROOT, ".github", "copilot-instructions.md")) ||
        dirExists(path.join(ROOT, ".github", "instructions"))
    ) {
        detected.push("copilot");
    }

    if (
        dirExists(path.join(ROOT, ".windsurf")) ||
        fileExists(path.join(ROOT, ".windsurfrules")) ||
        dirExists(path.join(ROOT, ".windsurf", "skills"))
    ) {
        detected.push("windsurf");
    }

    if (
        fileExists(path.join(ROOT, "CLAUDE.md")) ||
        dirExists(path.join(ROOT, ".claude")) ||
        dirExists(path.join(ROOT, ".claude", "skills"))
    ) {
        detected.push("claude");
    }

    return [...new Set(detected)];
}

function getSelectedTargets() {
    if (hasFlag("--everything")) {
        return [
            "cursor",
            "copilot",
            "copilotPath",
            "agentsMd",
            "windsurf",
            "claude",
            "cursorSkill",
            "windsurfSkill",
            "claudeSkill",
        ];
    }

    if (hasFlag("--all")) {
        return ["cursor", "copilot", "copilotPath", "agentsMd", "windsurf", "claude"];
    }

    if (hasFlag("--all-skills")) {
        return ["cursorSkill", "windsurfSkill", "claudeSkill"];
    }

    if (hasFlag("--detect")) {
        const detected = detectTargets();
        const expanded = [];

        for (const item of detected) {
            if (item === "cursor") expanded.push("cursor");
            if (item === "copilot") expanded.push("copilot");
            if (item === "windsurf") expanded.push("windsurf");
            if (item === "claude") expanded.push("claude");
        }

        return expanded;
    }

    const selected = [];

    if (hasFlag("--cursor")) selected.push("cursor");
    if (hasFlag("--copilot")) selected.push("copilot");
    if (hasFlag("--copilot-path")) selected.push("copilotPath");
    if (hasFlag("--windsurf")) selected.push("windsurf");
    if (hasFlag("--claude")) selected.push("claude");
    if (hasFlag("--agents-md")) selected.push("agentsMd");

    if (hasFlag("--cursor-skill")) selected.push("cursorSkill");
    if (hasFlag("--windsurf-skill")) selected.push("windsurfSkill");
    if (hasFlag("--claude-skill")) selected.push("claudeSkill");

    return selected;
}

function installFileTarget(targetName, filePath, content, force = false) {
    const exists = fileExists(filePath);

    if (exists && !force) {
        return {
            target: targetName,
            status: "skipped",
            path: filePath,
            message: "Target already exists. Use --force to overwrite.",
        };
    }

    ensureDirForFile(filePath);
    fs.writeFileSync(filePath, content, "utf8");

    return {
        target: targetName,
        status: "installed",
        path: filePath,
        message: exists ? "Overwritten successfully." : "Installed successfully.",
    };
}

function installSkillBundle(targetName, dirPath, rawSkillContent, force = false) {
    const skillPath = path.join(dirPath, "SKILL.md");
    const referencePath = path.join(dirPath, "reference.md");

    const skillExists = fileExists(skillPath);
    const referenceExists = fileExists(referencePath);

    if ((skillExists || referenceExists) && !force) {
        return [
            {
                target: `${targetName}:SKILL.md`,
                status: "skipped",
                path: skillPath,
                message: "Skill bundle already exists. Use --force to overwrite.",
            },
            {
                target: `${targetName}:reference.md`,
                status: "skipped",
                path: referencePath,
                message: "Skill bundle already exists. Use --force to overwrite.",
            },
        ];
    }

    ensureDir(dirPath);

    fs.writeFileSync(skillPath, buildSkillBundleContent(rawSkillContent), "utf8");
    fs.writeFileSync(referencePath, buildReferenceContent(), "utf8");

    return [
        {
            target: `${targetName}:SKILL.md`,
            status: "installed",
            path: skillPath,
            message: skillExists ? "Overwritten successfully." : "Installed successfully.",
        },
        {
            target: `${targetName}:reference.md`,
            status: "installed",
            path: referencePath,
            message: referenceExists ? "Overwritten successfully." : "Installed successfully.",
        },
    ];
}

function printResults(results) {
    console.log("\nInstallation summary:\n");

    for (const result of results) {
        if (result.status === "installed") {
            console.log(`✅ ${result.target}`);
            console.log(`   ${result.path}`);
            console.log(`   ${result.message}\n`);
        } else if (result.status === "skipped") {
            console.log(`⚠️  ${result.target}`);
            console.log(`   ${result.path}`);
            console.log(`   ${result.message}\n`);
        } else {
            console.log(`❌ ${result.target}`);
            console.log(`   ${result.message}\n`);
        }
    }
}

function main() {
    if (hasFlag("--help") || hasFlag("-h")) {
        printHelp();
        process.exit(0);
    }

    const selectedTargets = getSelectedTargets();
    const force = hasFlag("--force");

    if (selectedTargets.length === 0) {
        if (hasFlag("--detect")) {
            console.log("⚠️ No detectable AI IDE targets were found in this project.");
            console.log(
                "Tip: use --all, --all-skills, or pass a specific target like --cursor, --copilot, --windsurf, --claude, --cursor-skill, --windsurf-skill, or --claude-skill.\n"
            );
        } else {
            console.log("⚠️ No install target selected.");
            console.log(
                "Tip: use --all, --all-skills, --everything, --detect, or pass a specific target.\n"
            );
        }

        printHelp();
        process.exit(0);
    }

    const rawSkillContent = readSkillFile();
    const results = [];

    for (const target of selectedTargets) {
        if (target === "cursor") {
            results.push(
                installFileTarget("cursor", TARGETS.cursor, rawSkillContent, force)
            );
        } else if (target === "copilot") {
            results.push(
                installFileTarget("copilot", TARGETS.copilot, rawSkillContent, force)
            );
        } else if (target === "copilotPath") {
            results.push(
                installFileTarget(
                    "copilotPath",
                    TARGETS.copilotPath,
                    buildCopilotPathContent(rawSkillContent),
                    force
                )
            );
        } else if (target === "agentsMd") {
            results.push(
                installFileTarget(
                    "agentsMd",
                    TARGETS.agentsMd,
                    buildAgentsMdContent(rawSkillContent),
                    force
                )
            );
        } else if (target === "windsurf") {
            results.push(
                installFileTarget("windsurf", TARGETS.windsurf, rawSkillContent, force)
            );
        } else if (target === "claude") {
            results.push(
                installFileTarget("claude", TARGETS.claude, rawSkillContent, force)
            );
        } else if (target === "cursorSkill") {
            results.push(
                ...installSkillBundle("cursorSkill", TARGETS.cursorSkillDir, rawSkillContent, force)
            );
        } else if (target === "windsurfSkill") {
            results.push(
                ...installSkillBundle("windsurfSkill", TARGETS.windsurfSkillDir, rawSkillContent, force)
            );
        } else if (target === "claudeSkill") {
            results.push(
                ...installSkillBundle("claudeSkill", TARGETS.claudeSkillDir, rawSkillContent, force)
            );
        } else {
            results.push({
                target,
                status: "error",
                message: `Unknown target: ${target}`,
            });
        }
    }

    printResults(results);

    const installedCount = results.filter((r) => r.status === "installed").length;
    const skippedCount = results.filter((r) => r.status === "skipped").length;
    const errorCount = results.filter((r) => r.status === "error").length;

    console.log(
        `Done. Installed: ${installedCount}, Skipped: ${skippedCount}, Errors: ${errorCount}`
    );
}

main();