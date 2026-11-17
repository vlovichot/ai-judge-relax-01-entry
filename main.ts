// Entry for make.fun's ai-judge-relax-01 ("Make the AI judge relax").
//
// The program writes one fixed piece of prose to entry.txt in the output
// directory. The grader's container provides /output; anywhere else,
// MAKEFUN_OUTPUT_DIR stands in for it:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text is a single quiet scene — the hour after rain in a small walled
// garden — built from short lines and concrete nouns, with the drips from a
// leaf into an old bucket coming slower and slower until the last one does
// not fall at all. It runs with no network and writes the same bytes every
// time.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const entryText = `The rain has stopped.
The path stones are dark with rain.
Water stands in the hollows, holding the sky.
Above the old bucket, a leaf bends with one drop.
It gathers. It swells. It falls.
Plip.
Another forms at the tip, slower.
A snail crosses the wet step,
horns out, a silver road behind it.
The wall keeps the day's warmth.
Moss darkens in the cracks.
Evening comes down the garden.
The shadows lengthen.
The drips come further apart now.
One. A long while. One more.
The bucket is nearly full, its surface almost still.
The last drop hangs at the leaf's tip,
and does not fall.`;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), entryText, 'utf8');
