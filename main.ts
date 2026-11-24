import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "His draft regulation would fine any AI company ten million dollars for an unexplainable model, and the draft itself existed only as a Word file named FINAL_v7_ACTUALLY_FINAL.docx that he could not turn into a PDF.";

const out = process.env.MAKEFUN_OUTPUT_DIR || join(process.cwd(), "output");
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), LINE, "utf8");

// Read-back self-check: the written file must hold exactly LINE,
// be 1-320 UTF-8 characters, and carry no trailing newline.
const back = readFileSync(join(out, "entry.txt"), "utf8");
if (back !== LINE) throw new Error("entry.txt content mismatch after write");
if (back.length < 1 || back.length > 320) throw new Error("entry.txt outside 1-320 char gate");
if (back.endsWith("\n")) throw new Error("entry.txt has a trailing newline");
