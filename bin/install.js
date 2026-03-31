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
  windsurf: path.join(
    ROOT,
    ".windsurf",
    "rules",
    "pragmatic-seo-ai-visibility.md"
  ),
  claude: path.join(ROOT, "CLAUDE.md"),
};

const args = process.argv.slice(2);

function printHelp() {
  console.log(`
Pragmatic SEO & AI Visibility Skill Installer

Usage:
  npx pragmatic-seo-ai-visibility-skill --cursor
  npx pragmatic-seo-ai-visibility-skill --copilot
  npx pragmatic-seo-ai-visibility-skill --windsurf
  npx pragmatic-seo-ai-visibility-skill --claude

Examples:
  node bin/install.js --cursor
  node bin/install.js --copilot

Options:
  --cursor    Install to .cursor/rules/pragmatic-seo-ai-visibility.mdc
  --copilot   Install to .github/copilot-instructions.md
  --windsurf  Install to .windsurf/rules/pragmatic-seo-ai-visibility.md
  --claude    Install to CLAUDE.md
  --help      Show this help message
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

function writeTarget(targetName, content) {
  const targetPath = TARGETS[targetName];

  if (!targetPath) {
    console.error(`❌ Unknown target: ${targetName}`);
    process.exit(1);
  }

  ensureDirForFile(targetPath);
  fs.writeFileSync(targetPath, content, "utf8");

  console.log(`✅ Installed for ${targetName}`);
  console.log(`📄 Target: ${targetPath}`);
}

function getSelectedTargets() {
  const selected = [];

  if (args.includes("--cursor")) selected.push("cursor");
  if (args.includes("--copilot")) selected.push("copilot");
  if (args.includes("--windsurf")) selected.push("windsurf");
  if (args.includes("--claude")) selected.push("claude");

  return selected;
}

function main() {
  if (args.includes("--help") || args.includes("-h")) {
    printHelp();
    process.exit(0);
  }

  const selectedTargets = getSelectedTargets();

  if (selectedTargets.length === 0) {
    console.log("⚠️ No install target provided.");
    printHelp();
    process.exit(0);
  }

  const skillContent = readSkillFile();

  for (const target of selectedTargets) {
    writeTarget(target, skillContent);
  }

  console.log("\n🎉 Installation complete.");
}

main();