#!/bin/bash
cd "$(dirname "$0")"
echo "=============================="
echo "  Moving Sale — Photo Sync"
echo "=============================="
echo ""
bash generate-manifest.sh
echo ""
echo "📦 Committing & pushing to Vercel…"
git add photos/
git commit -m "update photos and manifest" 2>&1 | tail -1
git push 2>&1 | tail -2
echo ""
echo "✅ Done! Changes are live on Vercel."
read -n 1 -s -r -p "Press any key to close…"
