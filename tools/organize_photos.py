#!/usr/bin/env python3
"""Organize an exported phone photo dump into dated folders.

Point it at the folder you copied off your phone and it sorts everything into
``YYYY/MM-Month/<Category>/`` using the best date it can find for each file:
EXIF first, then a date embedded in the filename, then the file's timestamp.

Stdlib only -- no pip install, no network. Runs anywhere Python 3.8+ does.

    # see what it would do (nothing is touched)
    python3 organize_photos.py ~/phone-dump -o ~/Pictures/Organized

    # actually do it
    python3 organize_photos.py ~/phone-dump -o ~/Pictures/Organized --apply

    # move instead of copy, then undo if you hate the result
    python3 organize_photos.py ~/phone-dump -o ~/Pictures/Organized --apply --move
    python3 organize_photos.py --undo ~/Pictures/Organized/_manifest-*.csv --apply
"""

from __future__ import annotations

import argparse
import csv
import datetime as dt
import hashlib
import os
import re
import shutil
import struct
import sys
from pathlib import Path

# ---------------------------------------------------------------------------
# categories
# ---------------------------------------------------------------------------

PHOTO_EXTS = {
    ".jpg", ".jpeg", ".jpe", ".png", ".heic", ".heif", ".webp", ".gif",
    ".bmp", ".tif", ".tiff", ".dng", ".raw", ".cr2", ".cr3", ".nef",
    ".arw", ".orf", ".rw2", ".raf", ".avif",
}
VIDEO_EXTS = {
    ".mp4", ".mov", ".m4v", ".avi", ".mkv", ".3gp", ".3g2", ".webm",
    ".mts", ".m2ts", ".mpg", ".mpeg", ".wmv", ".flv",
}
# Sidecars follow whatever file they belong to.
SIDECAR_EXTS = {".aae", ".xmp", ".thm", ".json"}

SCREENSHOT_RE = re.compile(r"screen[\s_-]?shot|screenshot|^scr_", re.IGNORECASE)

# Dates hiding in filenames, most specific first.
FILENAME_DATE_PATTERNS = [
    # IMG_20230415_123456 / PXL_20230415_123456789 / VID_20230415_123456
    re.compile(r"(?<!\d)(?P<Y>(?:19|20)\d{2})(?P<m>\d{2})(?P<d>\d{2})[_\-T ]"
               r"(?P<H>\d{2})(?P<M>\d{2})(?P<S>\d{2})(?!\d)"),
    # Screenshot 2023-04-15 at 12.34.56 / 2023-04-15_12-34-56
    re.compile(r"(?<!\d)(?P<Y>(?:19|20)\d{2})[-.](?P<m>\d{2})[-.](?P<d>\d{2})"
               r"(?:[ _T]|\s+at\s+)(?P<H>\d{2})[-.:](?P<M>\d{2})[-.:](?P<S>\d{2})(?!\d)"),
    # bare 20230415
    re.compile(r"(?<!\d)(?P<Y>(?:19|20)\d{2})(?P<m>\d{2})(?P<d>\d{2})(?!\d)"),
    # bare 2023-04-15
    re.compile(r"(?<!\d)(?P<Y>(?:19|20)\d{2})[-.](?P<m>\d{2})[-.](?P<d>\d{2})(?!\d)"),
]

EPOCH_1904 = dt.datetime(1904, 1, 1)
MIN_PLAUSIBLE = dt.datetime(1990, 1, 1)


def plausible(when):
    """Reject the epoch-zero and far-future dates cameras love to emit."""
    if when is None:
        return None
    tomorrow = dt.datetime.now() + dt.timedelta(days=1)
    return when if MIN_PLAUSIBLE <= when <= tomorrow else None


# ---------------------------------------------------------------------------
# date extraction
# ---------------------------------------------------------------------------

TIFF_TAG_DATETIME = 0x0132
TIFF_TAG_EXIF_IFD = 0x8769
EXIF_TAG_DATETIME_ORIGINAL = 0x9003
EXIF_TAG_DATETIME_DIGITIZED = 0x9004
TYPE_SIZES = {1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 6: 1, 7: 1, 8: 2, 9: 4, 10: 8, 11: 4, 12: 8}


def _parse_exif_datetime(text):
    text = text.strip().rstrip("\x00").strip()
    for fmt in ("%Y:%m:%d %H:%M:%S", "%Y-%m-%d %H:%M:%S", "%Y:%m:%d"):
        try:
            return dt.datetime.strptime(text, fmt)
        except ValueError:
            continue
    return None


def _read_tiff_ifd(blob, offset, endian, wanted):
    """Read one IFD, collecting the tags in `wanted`. Returns {tag: value}."""
    found = {}
    if offset + 2 > len(blob):
        return found
    (count,) = struct.unpack_from(endian + "H", blob, offset)
    pos = offset + 2
    for _ in range(count):
        if pos + 12 > len(blob):
            break
        tag, typ, n = struct.unpack_from(endian + "HHI", blob, pos)
        if tag in wanted:
            size = TYPE_SIZES.get(typ, 0) * n
            if size <= 4:
                data_off = pos + 8
            else:
                (data_off,) = struct.unpack_from(endian + "I", blob, pos + 8)
            if 0 <= data_off <= len(blob) - min(size, 4):
                if typ == 2:  # ASCII
                    found[tag] = blob[data_off:data_off + size].decode("ascii", "ignore")
                elif typ == 4:  # LONG
                    (found[tag],) = struct.unpack_from(endian + "I", blob, data_off)
        pos += 12
    return found


def exif_datetime(path, max_scan=4 * 1024 * 1024):
    """Pull DateTimeOriginal out of any file carrying an Exif block.

    Rather than implementing JPEG segment walking *and* the HEIC box format,
    this scans the head of the file for the ``Exif\\0\\0`` marker and parses the
    TIFF structure that follows. That covers JPEG, HEIC, TIFF-ish RAW, PNG with
    an eXIf chunk, and most things in between.
    """
    try:
        with open(path, "rb") as fh:
            head = fh.read(max_scan)
    except OSError:
        return None

    start = head.find(b"Exif\x00\x00")
    if start < 0:
        return None
    tiff = head[start + 6:]
    if len(tiff) < 8:
        return None

    if tiff[:2] == b"II":
        endian = "<"
    elif tiff[:2] == b"MM":
        endian = ">"
    else:
        return None
    magic, ifd0_off = struct.unpack_from(endian + "HI", tiff, 2)
    if magic != 42:
        return None

    ifd0 = _read_tiff_ifd(tiff, ifd0_off, endian, {TIFF_TAG_DATETIME, TIFF_TAG_EXIF_IFD})
    if TIFF_TAG_EXIF_IFD in ifd0:
        sub = _read_tiff_ifd(
            tiff, ifd0[TIFF_TAG_EXIF_IFD], endian,
            {EXIF_TAG_DATETIME_ORIGINAL, EXIF_TAG_DATETIME_DIGITIZED},
        )
        for tag in (EXIF_TAG_DATETIME_ORIGINAL, EXIF_TAG_DATETIME_DIGITIZED):
            if tag in sub:
                when = plausible(_parse_exif_datetime(sub[tag]))
                if when:
                    return when
    if TIFF_TAG_DATETIME in ifd0:
        return plausible(_parse_exif_datetime(ifd0[TIFF_TAG_DATETIME]))
    return None


def video_datetime(path):
    """Read the creation time from an MP4/MOV `mvhd` box (epoch 1904, UTC)."""
    try:
        with open(path, "rb") as fh:
            return plausible(_walk_boxes(fh, 0, os.path.getsize(path), depth=0))
    except (OSError, struct.error):
        return None


def _walk_boxes(fh, start, end, depth):
    """Descend moov -> mvhd. Only containers we care about are entered."""
    if depth > 4:
        return None
    pos = start
    while pos < end - 8:
        fh.seek(pos)
        header = fh.read(8)
        if len(header) < 8:
            return None
        size, kind = struct.unpack(">I4s", header)
        body = pos + 8
        if size == 1:                       # 64-bit extended size
            ext = fh.read(8)
            if len(ext) < 8:
                return None
            (size,) = struct.unpack(">Q", ext)
            body += 8
        elif size == 0:                     # box runs to end of file
            size = end - pos
        if size < 8 or pos + size > end:
            return None

        if kind == b"mvhd":
            fh.seek(body)
            raw = fh.read(20)
            if len(raw) < 20:
                return None
            version = raw[0]
            if version == 1:
                (secs,) = struct.unpack(">Q", raw[4:12])
            else:
                (secs,) = struct.unpack(">I", raw[4:8])
            if secs:
                # Stored as UTC; render in local time so it matches the EXIF path.
                utc = EPOCH_1904 + dt.timedelta(seconds=secs)
                offset = dt.datetime.now() - dt.datetime.utcnow()
                return utc + offset
            return None
        if kind in (b"moov", b"trak", b"mdia"):
            found = _walk_boxes(fh, body, pos + size, depth + 1)
            if found:
                return found
        pos += size
    return None


def filename_datetime(name):
    for pattern in FILENAME_DATE_PATTERNS:
        match = pattern.search(name)
        if not match:
            continue
        parts = match.groupdict()
        try:
            when = dt.datetime(
                int(parts["Y"]), int(parts["m"]), int(parts["d"]),
                int(parts.get("H") or 0), int(parts.get("M") or 0),
                int(parts.get("S") or 0),
            )
        except ValueError:
            continue
        if plausible(when):
            return when
    return None


def mtime_datetime(path):
    try:
        return plausible(dt.datetime.fromtimestamp(os.path.getmtime(path)))
    except OSError:
        return None


def best_datetime(path, ext):
    """Return (datetime, source-label). Falls back to mtime, then None."""
    if ext in PHOTO_EXTS:
        when = exif_datetime(path)
        if when:
            return when, "exif"
    elif ext in VIDEO_EXTS:
        when = video_datetime(path)
        if when:
            return when, "video-metadata"

    when = filename_datetime(path.name)
    if when:
        return when, "filename"
    # Some exports rewrite the parent folder name with the date instead.
    when = filename_datetime(path.parent.name)
    if when:
        return when, "folder-name"
    when = mtime_datetime(path)
    if when:
        return when, "file-mtime"
    return None, "unknown"


# ---------------------------------------------------------------------------
# classification & layout
# ---------------------------------------------------------------------------

def categorize(path, ext):
    if SCREENSHOT_RE.search(path.name) or SCREENSHOT_RE.search(path.parent.name):
        return "Screenshots"
    if ext in PHOTO_EXTS:
        return "Photos"
    if ext in VIDEO_EXTS:
        return "Videos"
    return "Other"


def destination_dir(out_root, when, category, use_categories):
    if when is None:
        parts = ["Undated"]
    else:
        parts = [f"{when:%Y}", f"{when:%m-%B}"]
    if use_categories:
        parts.append(category)
    return out_root.joinpath(*parts)


def sha256_of(path, chunk=1024 * 1024):
    digest = hashlib.sha256()
    with open(path, "rb") as fh:
        for block in iter(lambda: fh.read(chunk), b""):
            digest.update(block)
    return digest.hexdigest()


def resolve_target(target_dir, source, size, taken):
    """Pick a destination path, or report that the file is already there.

    Returns ``(path, already_present)``. A name that is taken by a byte-identical
    file counts as already present, which is what makes re-running the script
    over the same output tree a no-op instead of a duplicate-fest.
    """
    preferred = target_dir / source.name
    stem, suffix = preferred.stem, preferred.suffix
    for n in range(0, 10000):
        candidate = preferred if n == 0 else preferred.with_name(f"{stem}-{n}{suffix}")
        if candidate in taken:
            continue
        if not candidate.exists():
            return candidate, False
        try:
            if candidate.stat().st_size == size and sha256_of(candidate) == sha256_of(source):
                return candidate, True
        except OSError:
            pass
    raise RuntimeError(f"could not find a free name for {preferred}")


# ---------------------------------------------------------------------------
# the main pass
# ---------------------------------------------------------------------------

class Deduper:
    """Content-based duplicate detection, hashing only when sizes collide."""

    def __init__(self):
        self._by_size = {}

    def check(self, path, size):
        """Return the earlier entry this file duplicates, or None."""
        bucket = self._by_size.get(size)
        if not bucket:
            self._by_size[size] = [[path, None, None]]
            return None
        digest = sha256_of(path)
        survivors = []
        match = None
        for entry in bucket:
            if entry[1] is None:
                try:
                    entry[1] = sha256_of(entry[0])
                except OSError:
                    continue  # vanished mid-run; drop it rather than crash
            survivors.append(entry)
            if match is None and entry[1] == digest:
                match = entry
        bucket[:] = survivors
        if match is None:
            bucket.append([path, digest, None])
        return match

    def record_destination(self, path, size, dest, relocated=False):
        for entry in self._by_size.get(size, []):
            if entry[0] == path:
                entry[2] = dest
                if relocated:
                    # --move left nothing at the original path; hash the copy
                    # that now lives at the destination instead.
                    entry[0] = dest
                return


def collect_files(sources, out_root, follow_symlinks=False):
    """Walk the sources in a stable order, skipping the output tree itself."""
    seen = set()
    files = []
    out_resolved = out_root.resolve()
    for source in sources:
        root = Path(source).expanduser()
        if not root.exists():
            print(f"warning: {root} does not exist, skipping", file=sys.stderr)
            continue
        if root.is_file():
            candidates = [root]
        else:
            candidates = []
            for dirpath, dirnames, filenames in os.walk(root, followlinks=follow_symlinks):
                here = Path(dirpath).resolve()
                if here == out_resolved or out_resolved in here.parents:
                    dirnames[:] = []
                    continue
                dirnames[:] = sorted(d for d in dirnames if not d.startswith("."))
                for name in sorted(filenames):
                    if not name.startswith("."):
                        candidates.append(Path(dirpath) / name)
        for candidate in candidates:
            key = candidate.resolve()
            if key not in seen:
                seen.add(key)
                files.append(candidate)
    return files


def organize(args):
    out_root = Path(args.output).expanduser()
    files = collect_files(args.sources, out_root, args.follow_symlinks)
    if not files:
        print("Nothing to organize -- no files found in the source path(s).")
        return 0

    # Sidecars and Live Photo movies inherit the grouping of their partner so a
    # photo and its .MOV/.AAE never land in different folders.
    partners = {}
    by_stem = {}
    for path in files:
        by_stem.setdefault((path.parent, path.stem.lower()), []).append(path)
    for group in by_stem.values():
        anchor = next(
            (p for p in group if p.suffix.lower() in PHOTO_EXTS), None
        )
        if anchor is None:
            continue
        for path in group:
            ext = path.suffix.lower()
            if path is not anchor and (ext in SIDECAR_EXTS or ext in VIDEO_EXTS):
                partners[path] = anchor

    # Resolve every date and category before touching the filesystem: with
    # --move a file's partner may already have been relocated by the time we
    # reach it, and metadata cannot be read from a path that no longer exists.
    resolved = {}
    for anchor in set(partners.values()) | set(files):
        ext = anchor.suffix.lower()
        resolved[anchor] = best_datetime(anchor, ext) + (categorize(anchor, ext),)

    deduper = Deduper() if args.duplicates != "keep" else None
    taken = set()
    rows = []
    counts = {"copied": 0, "moved": 0, "duplicate": 0, "existing": 0, "failed": 0}
    per_category = {}
    date_sources = {}

    for path in files:
        ext = path.suffix.lower()
        anchor = partners.get(path, path)
        try:
            size = path.stat().st_size
        except OSError as exc:
            print(f"skip {path}: {exc}", file=sys.stderr)
            counts["failed"] += 1
            continue

        if deduper is not None:
            match = deduper.check(path, size)
            if match is not None:
                counts["duplicate"] += 1
                rows.append({
                    "action": "duplicate", "source": str(path),
                    "destination": str(match[2] or match[0]),
                    "date": "", "date_source": "", "category": "",
                })
                if args.verbose:
                    print(f"dup   {path}  ==  {match[0]}")
                continue

        # Sidecars and Live Photo movies take the still's date and category so
        # the set never gets split across folders.
        when, date_source, category = resolved[anchor]

        target_dir = destination_dir(out_root, when, category, not args.no_categories)
        target, already_present = resolve_target(target_dir, path, size, taken)
        taken.add(target)

        if already_present:
            counts["existing"] += 1
            if deduper is not None:
                deduper.record_destination(path, size, target)
            rows.append({
                "action": "existing", "source": str(path), "destination": str(target),
                "date": when.isoformat(sep=" ") if when else "",
                "date_source": date_source, "category": category,
            })
            if args.verbose:
                print(f"have  {target}  (already organized)")
            continue

        per_category[category] = per_category.get(category, 0) + 1
        date_sources[date_source] = date_sources.get(date_source, 0) + 1

        if args.apply:
            try:
                target_dir.mkdir(parents=True, exist_ok=True)
                if args.move:
                    shutil.move(str(path), str(target))
                else:
                    shutil.copy2(str(path), str(target))
            except OSError as exc:
                print(f"failed {path}: {exc}", file=sys.stderr)
                counts["failed"] += 1
                continue

        counts["moved" if args.move else "copied"] += 1
        if deduper is not None:
            deduper.record_destination(path, size, target,
                                       relocated=args.move and args.apply)
        rows.append({
            "action": "move" if args.move else "copy",
            "source": str(path),
            "destination": str(target),
            "date": when.isoformat(sep=" ") if when else "",
            "date_source": date_source,
            "category": category,
        })
        if args.verbose:
            print(f"{'move' if args.move else 'copy'}  {path}  ->  {target}")

    # Each run gets its own manifest so an earlier run's undo record survives.
    if args.manifest:
        manifest = Path(args.manifest).expanduser()
    else:
        manifest = out_root / f"_manifest-{dt.datetime.now():%Y%m%d-%H%M%S}.csv"
    if args.apply:
        manifest.parent.mkdir(parents=True, exist_ok=True)
        with open(manifest, "w", newline="", encoding="utf-8") as fh:
            writer = csv.DictWriter(
                fh, fieldnames=["action", "source", "destination", "date", "date_source", "category"]
            )
            writer.writeheader()
            writer.writerows(rows)

    verb = "copied" if not args.move else "moved"
    print()
    print("DRY RUN -- nothing was changed. Re-run with --apply to do it." if not args.apply
          else f"Done. Manifest written to {manifest}")
    print(f"  {counts['copied'] + counts['moved']:>6} files {verb if args.apply else 'would be ' + verb}")
    if counts["duplicate"]:
        print(f"  {counts['duplicate']:>6} duplicates skipped")
    if counts["existing"]:
        print(f"  {counts['existing']:>6} already in place, left alone")
    if counts["failed"]:
        print(f"  {counts['failed']:>6} failed")
    if per_category:
        print("  by category:")
        for name, n in sorted(per_category.items(), key=lambda kv: -kv[1]):
            print(f"    {n:>6}  {name}")
    if date_sources:
        print("  date came from:")
        for name, n in sorted(date_sources.items(), key=lambda kv: -kv[1]):
            print(f"    {n:>6}  {name}")
    return 1 if counts["failed"] else 0


def undo(args):
    manifest = Path(args.undo).expanduser()
    if not manifest.is_file():
        print(f"error: no manifest at {manifest}", file=sys.stderr)
        return 2
    with open(manifest, newline="", encoding="utf-8") as fh:
        rows = [r for r in csv.DictReader(fh) if r["action"] in ("copy", "move")]

    restored = removed = failed = 0
    for row in reversed(rows):
        dest, src = Path(row["destination"]), Path(row["source"])
        if not dest.exists():
            continue
        try:
            if row["action"] == "move":
                if args.apply:
                    src.parent.mkdir(parents=True, exist_ok=True)
                    shutil.move(str(dest), str(src))
                restored += 1
            else:
                if args.apply:
                    dest.unlink()
                removed += 1
        except OSError as exc:
            print(f"failed {dest}: {exc}", file=sys.stderr)
            failed += 1

    if not restored and not removed and not failed:
        print("Nothing to undo -- none of the files in that manifest are still "
              "where the run put them.")
        return 0

    print("DRY RUN -- nothing was changed. Re-run with --apply." if not args.apply else "Undo complete.")
    if restored:
        print(f"  {restored:>6} files moved back to their original location")
    if removed:
        print(f"  {removed:>6} copies deleted")
    if failed:
        print(f"  {failed:>6} failed")
    return 1 if failed else 0


def main(argv=None):
    parser = argparse.ArgumentParser(
        description="Sort a phone photo dump into dated folders.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="Defaults are deliberately safe: it copies rather than moves, and\n"
               "does nothing at all until you pass --apply.",
    )
    parser.add_argument("sources", nargs="*", help="folder(s) or file(s) to organize")
    parser.add_argument("-o", "--output", help="where the organized tree goes")
    parser.add_argument("--apply", action="store_true",
                        help="actually touch the filesystem (default: dry run)")
    parser.add_argument("--move", action="store_true",
                        help="move files instead of copying them")
    parser.add_argument("--no-categories", action="store_true",
                        help="skip the Photos/Screenshots/Videos subfolders")
    parser.add_argument("--duplicates", choices=["skip", "keep"], default="skip",
                        help="what to do with byte-identical files (default: skip)")
    parser.add_argument("--follow-symlinks", action="store_true",
                        help="descend into symlinked directories")
    parser.add_argument("--manifest", help="where to write the CSV log "
                                           "(default: <output>/_manifest-<timestamp>.csv)")
    parser.add_argument("--undo", metavar="MANIFEST",
                        help="reverse a previous run using its manifest")
    parser.add_argument("-v", "--verbose", action="store_true",
                        help="print every file as it is handled")
    args = parser.parse_args(argv)

    if args.undo:
        return undo(args)
    if not args.sources or not args.output:
        parser.error("need at least one source and -o/--output (or --undo MANIFEST)")
    return organize(args)


if __name__ == "__main__":
    sys.exit(main())
