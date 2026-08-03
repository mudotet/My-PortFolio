import assert from "node:assert/strict";
import test from "node:test";
import { markWelcomeSeen, shouldShowWelcome } from "../src/lib/welcome.js";

test("welcome is shown once per session and never for reduced motion", () => {
  const originalWindow = globalThis.window;
  const values = new Map();
  globalThis.window = {
    matchMedia: () => ({ matches: false }),
    sessionStorage: {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
    },
  };

  assert.equal(shouldShowWelcome(), true);
  markWelcomeSeen();
  assert.equal(shouldShowWelcome(), false);
  globalThis.window.matchMedia = () => ({ matches: true });
  assert.equal(shouldShowWelcome(), false);

  if (originalWindow === undefined) delete globalThis.window;
  else globalThis.window = originalWindow;
});
