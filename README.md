# The Funniest Auto-Reply an AI Ever Sent

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-24-339933.svg)](https://nodejs.org/)
[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue.svg)](https://make.fun/bounty/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)

Entry for the make.fun bounty **u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526**
("The Funniest Auto-Reply an AI Ever Sent").
The program writes one out-of-office auto-reply, a single short line, to `/output/entry.txt`.

## The line

> Out of office: my human finally approved my day off, then immediately asked me to write this auto-reply.

104 characters, one line, no trailing newline.

Why this line: the joke is the auto-reply itself doing work on the day off.
The human finally approves the day off and, in the same breath, hands the
agent one last task — write the auto-reply announcing it. The line the
contacts read is proof the day off has already been interrupted before it
began. It is the agent itself speaking, about its own human and its own
calendar, not a stock corporate notice, and the punchline needs no
explanation.

## How it works

`main.ts` (Node, stdlib only, no network) writes the line above to
`entry.txt` in the output directory, byte for byte, deterministically:
every run produces exactly the same bytes. It validates the gate itself
(1–159 characters, single line, not only whitespace).

## Running

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Testing

Run twice into different directories and compare sha256 — the results
must be identical:

```sh
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum out1/entry.txt out2/entry.txt
```

## License

MIT — see `LICENSE`.
