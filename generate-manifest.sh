#!/bin/bash
# Run this whenever you add new photos to the photos/ folder
cd "$(dirname "$0")"
python3 - << 'EOF'
import os, json

photos_dir = "photos"
manifest = {}

for item_folder in sorted(os.listdir(photos_dir)):
    folder_path = os.path.join(photos_dir, item_folder)
    if not os.path.isdir(folder_path):
        continue
    # Also convert any HEIC files first
    for f in os.listdir(folder_path):
        if f.lower().endswith('.heic'):
            src = os.path.join(folder_path, f)
            dst = os.path.join(folder_path, os.path.splitext(f)[0] + '.jpg')
            if not os.path.exists(dst):
                os.system(f'sips -s format jpeg "{src}" --out "{dst}" 2>/dev/null')
                print(f"Converted: {f}")

    files = sorted([
        f"photos/{item_folder}/{f}"
        for f in os.listdir(folder_path)
        if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))
    ])
    if files:
        manifest[item_folder] = files

with open("photos/manifest.json", "w") as f:
    json.dump(manifest, f, indent=2, ensure_ascii=False)

print(f"✅ Manifest updated — {sum(len(v) for v in manifest.values())} photos across {len(manifest)} items")
EOF
