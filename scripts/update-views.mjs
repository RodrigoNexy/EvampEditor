// Fetches current YouTube view counts for every video in MyWork.jsx
// and writes them to src/data/youtube-views.json.
// Usage: npm run update-views
import { readFile, writeFile, mkdir } from "node:fs/promises";

const SOURCE = new URL("../src/components/MyWork.jsx", import.meta.url);
const OUTPUT = new URL("../src/data/youtube-views.json", import.meta.url);

const source = await readFile(SOURCE, "utf8");
const ids = [...source.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);

let previous = {};
try {
  previous = JSON.parse(await readFile(OUTPUT, "utf8"));
} catch {
  // first run
}

const views = {};
for (const id of ids) {
  try {
    const res = await fetch(`https://www.youtube.com/watch?v=${id}`, {
      headers: { "User-Agent": "Mozilla/5.0", "Accept-Language": "en-US" }
    });
    const html = await res.text();
    const match = html.match(/"viewCount":"(\d+)"/);
    if (!match) throw new Error("viewCount not found");
    views[id] = Number(match[1]);
    console.log(`${id}  ${views[id].toLocaleString("en-US")}`);
  } catch (err) {
    if (previous[id] != null) views[id] = previous[id];
    console.warn(`${id}  failed (${err.message}), kept previous value`);
  }
}

await mkdir(new URL(".", OUTPUT), { recursive: true });
await writeFile(OUTPUT, JSON.stringify(views, null, 2) + "\n");
console.log(`\nSaved ${Object.keys(views).length} view counts to src/data/youtube-views.json`);
