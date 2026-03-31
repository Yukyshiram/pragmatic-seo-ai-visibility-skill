#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SKILL_SOURCE = path.join(
    ROOT,
    "skill",
    "PRAGMATIC_SEO_AI_VISIBILITY_SKILL.md"
);

const TARGETS = {
    cursor: path.join(ROOT, ".cursor", "rules", "pragmatic-seo-ai-visibility.mdc"),
    copilot: path.join(ROOT, ".github", "copilot-instructions.md"),
    windsurf: path.join(ROOT, ".windsurf", "rules", "pragmatic-seo-ai-visibility.md"),
    claude: path.join(ROOT, "CLAUDE.md"),
};

const args = process.argv.slice(2);

function hasFlag(flag) {
    return args.includes(flag);
}

function printHelp() {
    console.log(`
Pragmatic SEO & AI Visibility Skill Installer

Usage:
  npx pragmatic-seo-ai-visibility-skill --cursor
  npx pragmatic-seo-ai-visibility-skill --copilot
  npx pragmatic-seo-ai-visibility-skill --windsurf
  npx pragmatic-seo-ai-visibility-skill --claude
  npx pragmatic-seo-ai-visibility-skill --all
  npx pragmatic-seo-ai-visibility-skill --detect

Options:
  --cursor    Install to .cursor/rules/pragmatic-seo-ai-visibility.mdc
  --copilot   Install to .github/copilot-instructions.md
  --windsurf  Install to .windsurf/rules/pragmatic-seo-ai-visibility.md
  --claude    Install to CLAUDE.md
  --all       Install to all supported targets
  --detect    Detect likely targets from current project structure
  --force     Overwrite existing target files
  --help      Show this help message

Examples:
  node bin/install.js --cursor
  node bin/install.js --copilot --force
  node bin/install.js --all
  node bin/install.js --detect
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

function ensureDirForFile(filePath) {
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
}

function fileExists(filePath) {
    return fs.existsSync(filePath);
}

function detectTargets() {
    const detected = [];

    // Cursor
    if (
        fs.existsSync(path.join(ROOT, ".cursor")) ||
        fs.existsSync(path.join(ROOT, ".cursorrules"))
    ) {
        detected.push("cursor");
    }

    // GitHub Copilot
    if (
        fs.existsSync(path.join(ROOT, ".github", "copilot-instructions.md"))
    ) {
        detected.push("copilot");
    }

    // Windsurf
    if (
        fs.existsSync(path.join(ROOT, ".windsurf")) ||
        fs.existsSync(path.join(ROOT, ".windsurfrules"))
    ) {
        detected.push("windsurf");
    }

    // Claude Code
    if (
        fs.existsSync(path.join(ROOT, "CLAUDE.md")) ||
        fs.existsSync(path.join(ROOT, ".claude"))
    ) {
        detected.push("claude");
    }

    return [...new Set(detected)];
}

function getSelectedTargets() {
    if (hasFlag("--all")) {
        return Object.keys(TARGETS);
    }

    if (hasFlag("--detect")) {
        return detectTargets();
    }

    const selected = [];

    if (hasFlag("--cursor")) selected.push("cursor");
    if (hasFlag("--copilot")) selected.push("copilot");
    if (hasFlag("--windsurf")) selected.push("windsurf");
    if (hasFlag("--claude")) selected.push("claude");

    return selected;
}

function installTarget(targetName, content, force = false) {
    const targetPath = TARGETS[targetName];

    if (!targetPath) {
        return {
            target: targetName,
            status: "error",
            message: `Unknown target: ${targetName}`,
        };
    }

    const exists = fileExists(targetPath);

    if (exists && !force) {
        return {
            target: targetName,
            status: "skipped",
            path: targetPath,
            message: "Target already exists. Use --force to overwrite.",
        };
    }

    ensureDirForFile(targetPath);
    fs.writeFileSync(targetPath, content, "utf8");

    return {
        target: targetName,
        status: "installed",
        path: targetPath,
        message: exists
            ? "Overwritten successfully."
            : "Installed successfully.",
    };
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
                "Tip: use --all to install everywhere, or pass a specific target like --cursor, --copilot, --windsurf, or --claude.\n"
            );
        } else {
            console.log("⚠️ No install target selected.");
            console.log("Tip: use --all or --detect, or pass a specific target.\n");
        }

        printHelp();
        process.exit(0);
    }

    const skillContent = readSkillFile();
    const results = [];

    for (const target of selectedTargets) {
        results.push(installTarget(target, skillContent, force));
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