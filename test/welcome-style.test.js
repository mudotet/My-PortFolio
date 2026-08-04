import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("welcome uses a high-contrast poster treatment without gradients", async () => {
  const css = await readFile(new URL("../src/index.css", import.meta.url), "utf8");
  const rule = css.match(/\.welcome-sequence \{([\s\S]*?)\n\}/)?.[1] ?? "";
  const lineRule = css.match(/\.welcome-line \{([\s\S]*?)\n\}/)?.[1] ?? "";

  assert.match(css, /--neo-red:\s*#FF6B6B/);
  assert.match(rule, /background:\s*var\(--neo-red\)/);
  assert.doesNotMatch(rule, /gradient/i);
  assert.match(rule, /welcome-color-cuts/);
  assert.match(lineRule, /welcome-poster-step/);
});
