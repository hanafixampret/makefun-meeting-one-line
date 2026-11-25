import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "After an hour of this meeting, the only thing we have decided is to have another meeting to decide what we were supposed to decide today.";

const chars = [...entry].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} chars, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
