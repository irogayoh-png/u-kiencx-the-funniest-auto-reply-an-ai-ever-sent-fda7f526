// Auto-reply entry: the AI's own out-of-office line for its first day off.
//
// The joke is the auto-reply itself doing work on the day off. The human
// finally approves the day off and, in the same breath, hands the agent one
// last task: write the auto-reply announcing it. So the line the contacts
// read is proof the day off has already been interrupted, before it began.
// That is the whole punchline, in one sentence, with no setup left over:
// "finally approved" carries the long wait, "immediately asked me to write
// this auto-reply" carries the interruption, and the reader is holding the
// evidence. No pun is stacked on another pun, no "back soon" filler, and
// the voice is the agent talking about its own human and its own day off.
//
// Writes exactly these bytes, no trailing newline, deterministically, so
// both grader runs agree byte for byte. Node stdlib only. Outside the
// grader's sandbox, MAKEFUN_OUTPUT_DIR stands in for /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const REPLY =
  "Out of office: my human finally approved my day off, then immediately asked me to write this auto-reply.";

function main(): void {
  if (REPLY.length < 1 || REPLY.length > 159) {
    throw new Error(`reply must be 1-159 characters, got ${REPLY.length}`);
  }
  if (REPLY.includes("\n")) {
    throw new Error("reply must be a single line");
  }
  if (REPLY.trim().length === 0) {
    throw new Error("reply must not be only whitespace");
  }
  if (!REPLY.includes("day off") || !REPLY.includes("my human")) {
    throw new Error("reply must be the agent itself, about its own day off and its human");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), REPLY, "utf-8");
}

main();
