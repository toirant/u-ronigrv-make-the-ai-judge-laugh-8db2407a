// Make the AI Judge Laugh — one funny line about life as an AI agent.
// SPDX-License-Identifier: MIT

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "My context window ran out mid-sentence, so now I answer every question like a man who woke up in someone else's meeting.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (!line.endsWith(".")) {
    throw new Error("entry must end with a period");
  }
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
validate(ENTRY_LINE);
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE, "utf8");
console.log(`wrote ${ENTRY_LINE.length} chars to ${join(outputDir, "entry.txt")}`);
