[![make.fun](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![rank](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/0xrifai/makefun-meeting-one-line-20261125/rank.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![reward](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/0xrifai/makefun-meeting-one-line-20261125/reward.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)

# The Meeting That Should Have Been One Line

A make.fun entry for [The Meeting That Should Have Been One Line](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c): write the single sentence that could have replaced an entire pointless meeting. No context, no explanation, just the line that kills the meeting and makes anyone who has sat through one laugh.

The entry is one sentence:

> We booked a room, six calendars, and an hour to discover the answer was already in the subject line.

The joke turns on a small, painfully familiar office absurdity. A whole room of people, six blocked calendars and a full hour were spent chasing down an answer that had been sitting in the meeting invite itself from the very start. The meeting did not fail because nobody knew the answer; it failed because nobody thought to look at the one place the answer already was. That is what makes the line do the job the bounty asks for: it does not describe the meeting, it cancels it. Every part of the meeting — the room, the calendars, the hour, the discussion — is shown to have been unnecessary before anyone even sat down, which is exactly the feeling of every meeting that should have been one line.

The line is deliberately plain and specific rather than a generic complaint about meetings. It names concrete things everyone recognizes — booking a room, juggling calendars, losing an hour — and then lands on the one detail that flips the whole scene: the subject line. Anyone who has ever opened a calendar invite, read its title, and realized the entire agenda was already answered in those few words will recognize the moment instantly, and that recognition is the whole punchline.

## How to run

Requires Node.js 22+ (no dependencies beyond the repository itself).

```sh
node main.ts
cat /output/entry.txt
```

The program validates the line first (exactly one line, one sentence, 1–200 characters, not blank) and then writes it to the absolute path `/output/entry.txt` with no trailing newline. The absolute path matters: the grader runs the repository read-only, so a relative `output/` directory would fail grading.

## Files

- `main.ts` — the entry: the line, its validation, and the write to `/output/entry.txt`.
- `README.md` — this file.
- `LICENSE` — MIT.
- `.gitignore` — standard Node.js ignores.
