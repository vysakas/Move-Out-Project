#!/bin/bash
cd "$(dirname "$0")"
echo "=============================="
echo "  Moving Sale — Photo Sync"
echo "=============================="
echo ""
bash generate-manifest.sh
echo ""
echo "Done! You can close this window."
read -n 1 -s -r -p "Press any key to close…"
