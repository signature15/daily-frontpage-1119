/**
 * THE GLOBAL DAY SHEET — Thursday 19 November 2026.
 *
 * This repository delivers entry.png as a single 1024x1024 news image.
 * It is designed as a cream one-page broadsheet for the global news day.
 * The masthead gives the edition its newspaper identity and clear dateline.
 * A compact stat band turns the day's scale into figures that scan quickly.
 * The main story blocks establish a visual order for the most consequential
 * events, while smaller briefs add breadth without losing the page's rhythm.
 * Together, the page carries forty stories from across the day's coverage.
 * A region tally makes the geographic spread visible at a glance.
 * The layout uses restrained ink, warm paper, rules, and compact type
 * to suggest a printed sheet rather than a modern dashboard or feed.
 * The footer performs a final date check against Thursday's dateline.
 * It distinguishes stories belonging to 19 November from carryover items,
 * giving the edition a clear editorial boundary at the bottom of the page.
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
