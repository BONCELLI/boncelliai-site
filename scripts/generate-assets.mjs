// Generates the raster brand assets from the SVG logo kit:
// PWA / Apple touch icons and a multi-size-free favicon.ico (PNG-in-ICO).
// Run once with `npm run assets` after changing public/logo/app-icon.svg.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");
const appIcon = await readFile(path.join(pub, "logo", "app-icon.svg"));
const favicon = await readFile(path.join(pub, "favicon.svg"));

await mkdir(path.join(pub, "icons"), { recursive: true });

const png = (svg, size) => sharp(svg, { density: 384 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

// Full-bleed icon: logo centered on a square ink background (iOS and
// Android masks apply their own corner radius; transparent corners turn black).
const fullBleed = async (size, logoSize) =>
  sharp({ create: { width: size, height: size, channels: 4, background: "#101323" } })
    .composite([{ input: await png(appIcon, logoSize), gravity: "center" }])
    .png()
    .toBuffer();

await writeFile(path.join(pub, "icons", "apple-touch-icon.png"), await fullBleed(180, 180));

for (const [name, size] of [
  ["icon-192.png", 192],
  ["icon-512.png", 512],
]) {
  await writeFile(path.join(pub, "icons", name), await png(appIcon, size));
}

// Maskable icon: logo shrunk into the safe zone.
await writeFile(path.join(pub, "icons", "icon-maskable-512.png"), await fullBleed(512, 360));

// favicon.ico containing a single 32×32 PNG (supported by every modern browser).
const ico32 = await png(favicon, 32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8); // palette
header.writeUInt8(0, 9); // reserved
header.writeUInt16LE(1, 10); // color planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(ico32.length, 14); // image size
header.writeUInt32LE(22, 18); // image offset
await writeFile(path.join(pub, "favicon.ico"), Buffer.concat([header, ico32]));

console.log("icons written to public/icons + public/favicon.ico");
