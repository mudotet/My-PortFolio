import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("welcome uses a high-contrast poster treatment without gradients", async () => {
  const css = await readFile(new URL("../src/index.css", import.meta.url), "utf8");
  const rule = css.match(/\.welcome-sequence \{([\s\S]*?)\n\}/)?.[1] ?? "";
  const lineRule = css.match(/\.welcome-line \{([\s\S]*?)\n\}/)?.[1] ?? "";
  const characterRule = css.match(/\.welcome-character \{([\s\S]*?)\n\}/)?.[1] ?? "";
  const finalCharacterRule =
    css.match(/\.welcome-line:nth-child\(3\) \.welcome-character \{([\s\S]*?)\n\}/)?.[1] ?? "";

  assert.match(css, /--neo-red:\s*#FF6B6B/);
  assert.match(rule, /background:\s*var\(--neo-red\)/);
  assert.doesNotMatch(rule, /gradient/i);
  assert.match(rule, /welcome-color-cuts/);
  assert.match(rule, /welcome-color-cuts 1\.8s/);
  assert.match(lineRule, /welcome-poster-step/);
  assert.match(lineRule, /var\(--welcome-line-duration\)/);
  assert.match(lineRule, /var\(--welcome-line-delay\)/);
  assert.match(css, /welcome-line-in/);
  assert.match(css, /welcome-character/);
  assert.match(characterRule, /welcome-line-in 1ms steps\(1, end\)/);
  assert.match(
    css,
    /\.welcome-line:nth-child\(3\)[\s\S]*font-size:\s*clamp\(1\.25rem, 4\.5vw, 3\.5rem\)/
  );
  assert.match(css, /@keyframes welcome-character-reveal/);
  assert.match(finalCharacterRule, /opacity:\s*0/);
  assert.match(
    finalCharacterRule,
    /animation:\s*welcome-character-reveal 1ms linear var\(--welcome-delay\) forwards/
  );
});
