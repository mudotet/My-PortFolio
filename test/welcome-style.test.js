import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("welcome uses high-contrast text and an animated gradient", async () => {
  const css = await readFile(new URL("../src/index.css", import.meta.url), "utf8");
  const rule = css.match(/\.welcome-sequence \{([\s\S]*?)\n\}/)?.[1] ?? "";

  assert.match(rule, /color:\s*hsl\(0 0% 100%\)/);
  assert.match(rule, /welcome-gradient/);
});
