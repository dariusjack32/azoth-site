// Launch gate: refuses to pass while src/config.ts still has placeholders.
// Runs locally with `npm run check:launch` and in the deploy workflow before every publish.
// No dependencies, so it runs on any Node the CI runner has.

import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/config.ts", import.meta.url), "utf8");

const read = (name) => {
  const match = source.match(new RegExp(`export const ${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|(true|false|\\d+))`));
  if (!match) return undefined;
  return match[1] ?? match[2] ?? (match[3] === "true" ? true : match[3] === "false" ? false : Number(match[3]));
};

const filled = (value) => typeof value === "string" && value.trim() !== "" && !/[\[\]]/.test(value);

const checks = [
  ["FOUNDER_NAME", (v) => filled(v), "your full name"],
  ["LEGAL_NAME", (v) => filled(v), "the exact legal name from your Certificate of Formation"],
  ["EMAIL", (v) => filled(v) && /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(v), "a real address you've created"],
  ["CAL_LINK", (v) => v === "" || (filled(v) && /^https:\/\/(app\.)?cal\.com\/[^\s?#]+$/i.test(v)), 'empty, or a Cal.com link like "https://cal.com/your-handle/intro"'],
  ["PRIVACY_REVIEWED", (v) => v === true, "true, after you've read and edited /privacy"],
];

const failures = checks.filter(([name, ok]) => !ok(read(name)));

if (failures.length) {
  console.error("\nNot ready to launch. Fix these in src/config.ts:\n");
  for (const [name, , need] of failures) console.error(`  • ${name} — needs ${need} (now: ${JSON.stringify(read(name))})`);
  console.error("\nSee BEFORE_LAUNCH.md for the full checklist.\n");
  process.exit(1);
}

console.log("Launch check passed: every placeholder in src/config.ts is filled.");
