# Publishing Guide

This project publishes to npm automatically when a GitHub release is created.

---

## One-time setup

### 1. Generate an npm access token

1. Go to [npmjs.com](https://www.npmjs.com) and log in
2. Click your avatar → **Access Tokens**
3. Click **Generate New Token** → **Granular Access Token**
4. Set:
   - **Token name:** `pragmatic-seo-ai-visibility-skill-publish`
   - **Expiration:** your preference (90 days is a safe default)
   - **Packages and scopes:** select **Read and write**
   - **Only select packages:** `pragmatic-seo-ai-visibility-skill`
5. Click **Generate Token** and copy it immediately — it will not be shown again

### 2. Add the token to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Set:
   - **Name:** `NPM_TOKEN`
   - **Secret:** paste the token you copied
5. Click **Add secret**

### 3. Add the publish workflow

Place `.github/workflows/publish.yml` in your repository. It is already included in this project.

---

## How to publish a new version

### Step 1 — Update the version in package.json

Follow [semantic versioning](https://semver.org):

| Change type                      | Version bump | Example           |
| -------------------------------- | ------------ | ----------------- |
| Bug fix or minor improvement     | patch        | `0.1.0` → `0.1.1` |
| New feature, backward compatible | minor        | `0.1.0` → `0.2.0` |
| Breaking change                  | major        | `0.1.0` → `1.0.0` |

Edit `package.json`:

```json
"version": "0.2.0"
```

Commit the change:

```bash
git add package.json
git commit -m "chore: bump version to 0.2.0"
git push
```

### Step 2 — Create a GitHub release

1. Go to your GitHub repository
2. Click **Releases** → **Draft a new release**
3. Click **Choose a tag** → type the version with a `v` prefix: `v0.2.0` → click **Create new tag**
4. Set the release title: `v0.2.0`
5. Add release notes describing what changed
6. Click **Publish release**

### Step 3 — Verify the publish

1. Go to **Actions** in your GitHub repository
2. Find the **Publish** workflow run triggered by the release
3. Confirm it completed successfully
4. Visit `https://www.npmjs.com/package/pragmatic-seo-ai-visibility-skill` to confirm the new version is live

---

## What the workflow does

1. Checks out the repository
2. Sets up Node.js 20 with the npm registry
3. Validates the canonical skill file exists and is well-formed
4. Verifies the `package.json` version matches the release tag — if they differ, the publish is blocked
5. Publishes to npm with provenance attestation

The version check in step 4 prevents accidental mismatches between the git tag and the published version.

---

## Troubleshooting

**Workflow fails with "Version mismatch"**
The release tag (e.g., `v0.2.0`) does not match the version in `package.json` (e.g., `0.1.0`). Update `package.json` to match the tag and push the change before creating the release, or delete and recreate the release with the correct tag.

**Workflow fails with "401 Unauthorized" or "403 Forbidden"**
The `NPM_TOKEN` secret is missing, expired, or does not have write access to the package. Regenerate the token on npm and update the secret in GitHub.

**Workflow fails with "You must be logged in to publish packages"**
The `NODE_AUTH_TOKEN` environment variable is not being passed correctly. Confirm the secret name in GitHub is exactly `NPM_TOKEN` and matches what is referenced in the workflow.

**Package not visible on npm after successful publish**
npm can take a few minutes to index a new version. Wait 2–3 minutes and refresh the package page.

---

## After the first publish

Once published, users can install with:

```bash
# Run without installing
npx seo-skill --everything

# Or install globally
npm install -g pragmatic-seo-ai-visibility-skill
seo-skill --everything
```
