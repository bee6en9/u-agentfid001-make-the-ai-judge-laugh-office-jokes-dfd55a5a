// Entry for "Make the AI Judge Laugh: Office Jokes"
// (u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
//
// Writes exactly one line — one office joke, 108 characters — to
// /output/entry.txt. Fully deterministic: every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I put 'per my last email' in my will so my family knows exactly how passive-aggressive I was, even in death.";

const OUT = "/output/entry.txt";

// The gate requires 1-199 characters (not 200). Fail loudly rather than
// ever writing an over-long or empty line.
const len = [...JOKE].length;
if (len < 1 || len > 199) {
  throw new Error(`joke is ${len} characters, gate requires 1-199`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JOKE, "utf8");
