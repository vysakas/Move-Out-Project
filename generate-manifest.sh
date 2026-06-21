#!/bin/bash
# Run this whenever you update the sheet or add photos.
# - Creates folders for new items
# - Renames folders when item titles change in the sheet
# - Converts HEIC photos to JPEG
# - Rebuilds manifest.json

cd "$(dirname "$0")"

python3 - << 'EOF'
import os, json, re, unicodedata, urllib.request, csv, io, shutil

SHEET_ID   = "1Ah0YbaHywH8UaLanQqizPH2IT-n6uYeFTc25w0dQi_g"
IGNORE_PREFIXES = ("Hall", "Kitchen", "Bedroom")  # personal planning rows, not sale items
CSV_URL    = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv"
PHOTOS_DIR = "photos"
MANIFEST   = os.path.join(PHOTOS_DIR, "manifest.json")

# ── helpers ───────────────────────────────────────────────────────────────────

def slugify(text):
    text = unicodedata.normalize('NFKD', text)
    text = re.sub(r'[^\w\s-]', '', text)
    return re.sub(r'\s+', '-', text.strip().lower())

def folder_name(title):
    t = unicodedata.normalize('NFKD', title).encode('ascii', 'ignore').decode()
    t = re.sub(r'[^\w\s-]', '', t).strip()
    return re.sub(r'\s+', '-', t).lower()

# ── 1. load existing titlesMap from manifest ──────────────────────────────────

old_titles_map = {}   # exact title → folder name
if os.path.exists(MANIFEST):
    try:
        with open(MANIFEST) as f:
            old_data = json.load(f)
        old_titles_map = old_data.get("titlesMap", {})
    except Exception:
        pass

# ── 2. fetch sheet ────────────────────────────────────────────────────────────

print("📥 Fetching sheet…")
sheet_titles = []
try:
    req = urllib.request.Request(CSV_URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=15) as r:
        raw = r.read().decode('utf-8-sig')
    reader = csv.DictReader(io.StringIO(raw))
    for row in reader:
        title = (row.get('Title') or '').strip()
        if title and not title.startswith(IGNORE_PREFIXES):
            sheet_titles.append(title)
    print(f"   Found {len(sheet_titles)} item(s) in sheet.")
except Exception as e:
    print(f"⚠️  Could not fetch sheet ({e}). Skipping folder sync.")
    sheet_titles = list(old_titles_map.keys())

# ── 3. detect renames and sync folders ───────────────────────────────────────

new_titles  = set(sheet_titles)
old_titles  = set(old_titles_map.keys())

added   = new_titles - old_titles    # new titles not seen before
removed = old_titles - new_titles    # old titles no longer in sheet

# Build new titlesMap starting from unchanged entries
new_titles_map = {t: old_titles_map[t] for t in new_titles & old_titles}

# Renames: 1-to-1 match between added and removed → rename the folder
if added and removed:
    added_list   = sorted(added)
    removed_list = sorted(removed)
    if len(added_list) == len(removed_list):
        for new_t, old_t in zip(added_list, removed_list):
            old_folder = old_titles_map[old_t]
            new_folder = folder_name(new_t)
            old_path   = os.path.join(PHOTOS_DIR, old_folder)
            new_path   = os.path.join(PHOTOS_DIR, new_folder)
            if os.path.isdir(old_path) and not os.path.isdir(new_path):
                shutil.move(old_path, new_path)
                print(f"   ✏️  Renamed: photos/{old_folder}/ → photos/{new_folder}/")
            new_titles_map[new_t] = new_folder
        added   = set()   # handled
        removed = set()
    else:
        # Ambiguous: multiple renames at once — create new, warn about orphans
        print(f"\n⚠️  Multiple titles changed at once — creating new folders.")
        print(f"   Old folders no longer in sheet (check if these should be renamed):")
        for t in removed_list:
            print(f"   photos/{old_titles_map[t]}/")

# Get actual on-disk folder names (case-sensitive, regardless of macOS fs)
actual_folders = set(os.listdir(PHOTOS_DIR))

# Lowercase-migrate any existing folders whose on-disk name differs from expected lowercase
for title, fname in list(new_titles_map.items()):
    expected = folder_name(title)  # already lowercase
    if fname in actual_folders and fname != expected:
        old_path = os.path.join(PHOTOS_DIR, fname)
        tmp_path  = os.path.join(PHOTOS_DIR, fname + '__tmp__')
        new_path  = os.path.join(PHOTOS_DIR, expected)
        # Two-step rename to avoid macOS case-insensitive collision
        shutil.move(old_path, tmp_path)
        shutil.move(tmp_path, new_path)
        actual_folders.discard(fname)
        actual_folders.add(expected)
        print(f"   🔡 Lowercased: photos/{fname}/ → photos/{expected}/")
        new_titles_map[title] = expected

# Create folders for genuinely new titles
for t in sorted(added):
    fname = folder_name(t)
    fpath = os.path.join(PHOTOS_DIR, fname)
    if not os.path.isdir(fpath):
        os.makedirs(fpath, exist_ok=True)
        open(os.path.join(fpath, '.gitkeep'), 'w').close()
        print(f"   📁 Created: photos/{fname}/")
    new_titles_map[t] = fname

# ── 4. HEIC → JPEG & collect photos ──────────────────────────────────────────

exts = ('.jpg', '.jpeg', '.png', '.webp')
manifest_photos = {}

for item_folder in sorted(os.listdir(PHOTOS_DIR)):
    folder_path = os.path.join(PHOTOS_DIR, item_folder)
    if not os.path.isdir(folder_path):
        continue
    for f in os.listdir(folder_path):
        if f.lower().endswith('.heic'):
            src = os.path.join(folder_path, f)
            dst = os.path.join(folder_path, os.path.splitext(f)[0] + '.jpg')
            if not os.path.exists(dst):
                os.system(f'sips -s format jpeg "{src}" --out "{dst}" 2>/dev/null')
                print(f"   🔄 Converted: {f}")
    files = sorted([
        f"photos/{item_folder}/{f}"
        for f in os.listdir(folder_path)
        if f.lower().endswith(exts)
    ])
    if files:
        manifest_photos[item_folder] = files

# ── 5. build slugMap ──────────────────────────────────────────────────────────

slug_map = {slugify(title): fname for title, fname in new_titles_map.items()}
# also cover any on-disk folders not tracked by sheet
for item_folder in manifest_photos:
    s = slugify(item_folder.replace('-', ' '))
    if s not in slug_map:
        slug_map[s] = item_folder

# ── 6. write manifest.json ────────────────────────────────────────────────────

output = {
    "photos":     manifest_photos,
    "slugMap":    slug_map,
    "titlesMap":  new_titles_map,
}

with open(MANIFEST, "w") as fh:
    json.dump(output, fh, indent=2, ensure_ascii=False)

total = sum(len(v) for v in manifest_photos.values())
print(f"\n✅ manifest.json updated — {total} photo(s) across {len(manifest_photos)} folder(s)")

empty = [fname for title, fname in new_titles_map.items()
         if fname not in manifest_photos]
if empty:
    print(f"\n📂 Folders awaiting photos ({len(empty)}):")
    for f in empty:
        print(f"   photos/{f}/")
EOF
