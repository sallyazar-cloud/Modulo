import { cp, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const webRoot = path.join(projectRoot, "www");
const webFiles = [
  "index.html",
  "grade-activities.html",
  "alphabet.html",
  "colors.html",
  "school-supplies.html",
  "classroom-language.html",
  "grammar",
  "reading",
  "assets"
];

await mkdir(webRoot, { recursive: true });

for (const entry of webFiles) {
  await cp(path.join(projectRoot, entry), path.join(webRoot, entry), {
    recursive: true,
    force: true
  });
}

console.log(`Prepared ${webFiles.length} site entries in www/.`);
