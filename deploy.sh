#!/usr/bin/env bash
#
# deploy.sh — Auto-sync agent content and push to GitHub
#
# Syncs content from OpenClaw agent workspace to fredricnet-website,
# auto-commits any changes, and pushes to trigger GitHub Actions deploy.
#
# Usage: ./deploy.sh (or via cron every 5 minutes)
#

set -euo pipefail

# Paths
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_DIR="$SCRIPT_DIR"
AGENT_CONTENT="/home/dev/workspace/001-cursor/009-openclaw/markdown-master/003-mmbots-shared-memory/01-projects/fredricnet/fredricnet-live/content/"
SITE_CONTENT="$SITE_DIR/content/"

# Validate source exists
if [ ! -d "$AGENT_CONTENT" ]; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') ERROR: Agent content dir not found: $AGENT_CONTENT"
    exit 1
fi

# Sync content from agent workspace
rsync -a --delete "$AGENT_CONTENT" "$SITE_CONTENT"

# Check for changes
cd "$SITE_DIR"
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
    # No changes — exit silently
    exit 0
fi

# Changes detected — commit and push
echo "$(date '+%Y-%m-%d %H:%M:%S') Changes detected, committing..."

git add -A
git commit -m "content: auto-sync from agent workspace $(date '+%Y-%m-%d %H:%M')"
git push

echo "$(date '+%Y-%m-%d %H:%M:%S') Push complete — GitHub Actions will deploy."
