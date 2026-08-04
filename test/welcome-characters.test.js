import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("welcome reveals every message character by character", async () => {
  const component = await readFile(new URL("../src/components/WelcomeSequence.jsx", import.meta.url), "utf8");

  assert.match(component, /Array\.from\(line\)/);
  assert.match(component, /className="welcome-character"/);
  assert.doesNotMatch(component, /welcome-final-message|welcome-message/);
  assert.match(component, /const lineStarts = \[0, 540, 1080\]/);
  assert.match(component, /const lineDurations = \[540, 540, 720\]/);
  assert.match(component, /setTimeout\(\(\) => setIsVisible\(false\), 1970\)/);
});
