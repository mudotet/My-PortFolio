import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("welcome renders each line as individual animated characters", async () => {
  const component = await readFile(new URL("../src/components/WelcomeSequence.jsx", import.meta.url), "utf8");

  assert.match(component, /Array\.from\(line\)/);
  assert.match(component, /welcome-character/);
});
