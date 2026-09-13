# tools

Standalone helper scripts. These are not part of the Focus Fuel app.

## `organize_photos.py`

Sorts an exported phone photo dump into dated folders. Python 3.8+, standard
library only — no `pip install`, no network access.

```
YourPhotos/
  2024/
    03-March/
      Photos/       IMG_0412.JPG
      Screenshots/  Screenshot_20240317-091402.png
      Videos/       VID_20240319_180155.mp4
```

### Getting the photos off the phone

- **iPhone → Mac:** Image Capture (not Photos) → select all → Import To a folder.
- **iPhone/Android → Windows:** plug in, open the device in Explorer, copy `DCIM`.
- **Android → anything:** USB file transfer, or `adb pull /sdcard/DCIM`.

### Usage

```bash
# Dry run — prints what it would do, changes nothing. Always start here.
python3 organize_photos.py ~/phone-dump -o ~/Pictures/Organized

# Do it for real (copies, leaving the originals untouched)
python3 organize_photos.py ~/phone-dump -o ~/Pictures/Organized --apply

# Move instead of copy, once you trust the dry run
python3 organize_photos.py ~/phone-dump -o ~/Pictures/Organized --apply --move

# Changed your mind
python3 organize_photos.py --undo ~/Pictures/Organized/_manifest-20260913-141530.csv --apply
```

### How it dates each file

In order, first hit wins:

1. **EXIF** `DateTimeOriginal` — JPEG, HEIC, most RAW, PNG with an eXIf chunk.
2. **Video metadata** — the `mvhd` creation time in MP4/MOV.
3. **The filename** — `IMG_20230415_123456`, `PXL_...`, `Screenshot 2023-04-15 at 10.22.31`, and similar.
4. **The containing folder's name**, if it looks like a date.
5. **The file's modification time.**

Implausible dates (epoch zero, anything in the future) are rejected at each
step rather than trusted. Files with no usable date land in `Undated/`, not
somewhere wrong. The summary at the end reports which source each date came
from, so you can see how much of the result rests on guesswork.

### Behaviour worth knowing

- **Dry run by default.** Nothing happens without `--apply`.
- **Copies by default.** Your originals stay where they are unless you pass `--move`.
- **Duplicates are skipped** by content hash (SHA-256), not filename — the same
  photo saved twice under different names is detected. `--duplicates keep` disables this.
- **Re-running is a no-op.** Files already sitting in the right place with matching
  content are left alone, so you can run it again after adding more photos.
- **Live Photos stay together.** A `.HEIC`/`.JPG` and its companion `.MOV` and `.AAE`
  are filed under the still's date, even when the movie's own metadata disagrees.
- **Name collisions** get a `-1`, `-2` suffix. Nothing is ever silently overwritten.
- **Every run writes a manifest** CSV recording each file's origin, destination, and
  which date source was used. `--undo` reads it back.
- Hidden files and dotfolders (`.thumbnails`) are skipped.

### Options

| Flag | Effect |
| --- | --- |
| `--apply` | Actually touch the filesystem (default: dry run) |
| `--move` | Move rather than copy |
| `--no-categories` | Skip the `Photos/Screenshots/Videos` subfolders |
| `--duplicates keep` | Keep byte-identical duplicates instead of skipping them |
| `--follow-symlinks` | Descend into symlinked directories |
| `--manifest PATH` | Write the manifest somewhere other than the output folder |
| `--undo MANIFEST` | Reverse a previous run |
| `-v` | Print every file as it is handled |
