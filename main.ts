// The Meeting That Should Have Been One Line
// ---------------------------------------------------------------
// make.fun bounty: u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c
//
// The task is to write the single sentence that could have replaced
// an entire pointless meeting. No context, no explanation, no setup
// -- just the line that kills the meeting and makes anyone who has
// sat through one laugh.
//
// This program does exactly one thing: it writes that line to the
// absolute path /output/entry.txt, with no trailing newline, so the
// sealed scorer sees one clean line of 1-200 UTF-8 characters.
//
// The line below was drafted fresh for this entry. The joke turns on
// a small, very recognizable office absurdity: a whole room, six
// calendars and a full hour were spent chasing an answer that was
// sitting in the meeting invite itself the entire time. If the
// answer was already in the subject line, then nothing the meeting
// produced -- the room, the calendars, the hour, the discussion --
// was ever needed. That is the whole point of the entry: the line
// does not describe the meeting, it cancels it.

import { mkdirSync, writeFileSync } from "node:fs";

// ------------------------------------------------------------------
// The entry: one sentence, one line, no trailing newline.
// ------------------------------------------------------------------
const LINE =
  "We booked a room, six calendars, and an hour to discover the answer was already in the subject line.";

// ------------------------------------------------------------------
// Validation: the gate checks that /output/entry.txt is UTF-8 text
// of 1 to 200 characters, not only whitespace, and a single line.
// We check the same conditions here before writing, so a bad line
// fails loudly in development instead of silently at grading time.
// ------------------------------------------------------------------
function validate(line: string): void {
  // Exactly one line: no line breaks anywhere in the text.
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line (no line breaks allowed)");
  }
  // Not empty, not only whitespace.
  if (line.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  // The gate counts characters: 1 to 200 inclusive.
  const length = [...line].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${length}`);
  }
  // One sentence: exactly one terminal full stop, at the very end.
  // (A single sentence is the whole premise of the bounty.)
  if (!line.endsWith(".") || line.slice(0, -1).includes(".")) {
    throw new Error("entry must be exactly one sentence");
  }
}

// Write the validated line to the absolute grader path. Kept as its
// own small function so the writer's single responsibility is obvious
// and easy to check: make the directory, then write the exact bytes.
function writeEntry(line: string): void {
  // The grader runs this repo read-only, so the output must go to
  // the ABSOLUTE path /output/entry.txt -- never a relative output/
  // directory, which does not exist (and cannot be created) in the
  // read-only grading environment and fails grading with exit 1.
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

function main(): void {
  validate(LINE);
  writeEntry(LINE);
}

main();
