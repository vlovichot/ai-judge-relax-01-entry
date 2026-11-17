// ai-judge-relax-01 entry: writes one short text, the hour after rain in a
// small walled garden, to entry.txt in the output directory. The text is
// fixed, so every run writes the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = `The rain has stopped.
Water stands on the stone path, dark and still.
From the lowest leaf of the fig tree
a drop gathers, swells, and falls
into the old bucket by the wall.
Plink.
Then, after a while, another.
A snail crosses the wet step,
slow as the light going.
The wall holds the last of the sun.
The stones are dark with rain, and cooling.
The drips come further apart now.
One.
A long wait.

One more.
The bucket is nearly full.
Evening comes on, leaf by leaf,
and the last drop hangs — and does not fall.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
