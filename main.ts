// news-image-20261126: copy the entry image into the grader's output dir.
//
// The grader runs this program twice into the same /output, which is a
// mount point, and the first run's copy ends up read-only. So we never
// remove the output directory itself (that would fail with EBUSY on the
// mount point); we only remove the destination file before writing it.

import { copyFileSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoDir, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetPath = join(outDir, "entry.png");

const image = readFileSync(sourcePath);

const isJpeg =
  image.length >= 3 && image[0] === 0xff && image[1] === 0xd8 && image[2] === 0xff;
const isPng =
  image.length >= 8 &&
  image[0] === 0x89 &&
  image[1] === 0x50 &&
  image[2] === 0x4e &&
  image[3] === 0x47 &&
  image[4] === 0x0d &&
  image[5] === 0x0a &&
  image[6] === 0x1a &&
  image[7] === 0x0a;

if (!isJpeg && !isPng) {
  throw new Error("entry.png is neither a JPEG nor a PNG (bad magic bytes)");
}
if (image.length > 1024 * 1024) {
  throw new Error(`entry.png is ${image.length} bytes, over the 1 MiB cap`);
}

mkdirSync(outDir, { recursive: true });
rmSync(targetPath, { force: true });
copyFileSync(sourcePath, targetPath);

// Read the copy back and check it matches what we wrote: same length
// and identical leading bytes, so a partial or stale copy is caught.
const copied = readFileSync(targetPath);
if (copied.length !== image.length) {
  throw new Error(
    `copied entry.png is ${copied.length} bytes, expected ${image.length}`,
  );
}
if (!copied.subarray(0, 8).equals(image.subarray(0, 8))) {
  throw new Error("copied entry.png leading bytes do not match the source");
}
