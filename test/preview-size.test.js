import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { getPreviewDialogSize } from "../src/lib/preview-size.js";

test("preview dialog fits landscape and portrait certificates in the viewport", () => {
  for (const viewport of [
    { width: 360, height: 800, ratio: 1.414 },
    { width: 360, height: 640, ratio: 0.773 },
    { width: 844, height: 390, ratio: 1.294 },
  ]) {
    const size = getPreviewDialogSize({
      viewportWidth: viewport.width,
      viewportHeight: viewport.height,
      headerHeight: 68,
      aspectRatio: viewport.ratio,
    });

    assert.ok(size.width > 0);
    assert.ok(size.width <= viewport.width * 0.94);
    assert.ok(size.height <= viewport.height * 0.92);
  }
});

test("single-page certificates use exact image previews and IELTS remains scrollable", async () => {
  const source = await readFile(
    new URL("../src/components/AboutSection.jsx", import.meta.url),
    "utf8"
  );
  const credential = (title) => {
    const start = source.indexOf(`title: "${title}"`);
    return source.slice(start, source.indexOf("\n  },", start));
  };

  for (const title of [
    "CS50x",
    "Gemini Certified Student",
    "SQL (Advanced)",
    "Go (Basic)",
    "Java (Basic)",
  ]) {
    assert.match(credential(title), /\n\s{4}image:/);
  }

  assert.doesNotMatch(credential("IELTS Academic"), /\n\s{4}image:/);
  assert.match(credential("IELTS Academic"), /aspectRatio: 0\.707/);
});
