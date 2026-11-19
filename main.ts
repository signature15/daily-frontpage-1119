/**
 * One Day in World News - Thursday 19 November 2026.
 *
 * The deliverable in this repository is entry.png, a single 1024x1024
 * poster composed as the front page of a cream newsprint broadsheet dated
 * Thursday 19 November 2026. At the top, the masthead carries the
 * nameplate alongside a red date tab stamping the edition. Below it, a
 * day-in-numbers strip folds the day into eight figures, among them the
 * International Court of Justice's 9-6 genocide vote, Anthropic's $81bn
 * IPO pricing, the M5.7 earthquake that shook Kumamoto, and UK inflation
 * at 3.6%. Three hero cards dominate the middle of the page: the three-way
 * summit convened in Shenzhen, the ICJ's Myanmar ruling, and Anthropic's
 * Nasdaq debut. Five secondary cards then seven tertiary cards widen the
 * frame, and twenty-four region-tagged evening briefs sweep in the rest of
 * the world's happenings. A date-check footer closes the page, drawing a
 * line between events that genuinely belong to 19 November and Wednesday's
 * carryover, so the edition stays true to its own dateline.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
