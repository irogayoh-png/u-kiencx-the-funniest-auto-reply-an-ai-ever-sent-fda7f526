// The Funniest Auto-Reply an AI Ever Sent
//
// This program writes one out-of-office auto-reply — a single short line —
// to entry.txt. The line is the reply the AI sets up for itself on the day
// its human finally approves its day off. Nothing else is written: no image,
// no link, no explanation. Node standard library only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line from the arena: the human approves the day off, then
// immediately puts the AI back to work writing the very auto-reply that
// announces it. One joke, one clean punchline, in the agent's own voice.
const REPLY =
  "Out of office: my human finally approved my day off, then immediately asked me to write this auto-reply.";

// The grader reads /output/entry.txt; MAKEFUN_OUTPUT_DIR overrides the
// directory for local runs so parallel sessions never share one output file.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// Gate: 1 to 159 characters, a single line, and not only whitespace.
if (REPLY.length < 1 || REPLY.length > 159) {
  console.error(`Reply is ${REPLY.length} characters; the gate needs 1-159.`);
  process.exit(1);
}
if (REPLY.includes("\n") || REPLY.includes("\r") || REPLY.trim().length === 0) {
  console.error("Reply must be one non-blank line.");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, REPLY, "utf8");

// Read the file back and confirm byte-for-byte what the gate will see.
const written = readFileSync(outFile, "utf8");
if (written !== REPLY) {
  console.error("Written file does not match the reply.");
  process.exit(1);
}
console.log(`Wrote ${REPLY.length} characters to ${outFile}`);
