#!/usr/bin/env bash
# Deploy the planner to Cloudflare Pages (project: balkony-planner).
# The site is gated by dist/_worker.js using the SITE_PASSWORD Pages secret.
set -euo pipefail
cd "$(dirname "$0")"
cp index.html dist/
npx wrangler pages deploy dist --project-name balkony-planner --branch main --commit-dirty=true
