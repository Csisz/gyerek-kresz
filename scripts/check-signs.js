import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const signsDir = path.join(root, "public", "signs");
const signDataPath = path.join(root, "src", "data", "kreszSigns.js");
const requiredMetadata = ["sourceUrl", "fileUrl", "license", "attribution"];

const { kreszSigns } = await import(pathToFileURL(signDataPath).href);

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function printList(title, rows) {
  console.log(`\n${title} (${rows.length})`);
  if (rows.length === 0) {
    console.log("  - nincs");
    return;
  }
  rows.forEach((row) => console.log(`  - ${row}`));
}

const seenIds = new Set();
const duplicateIds = [];
const existingImages = [];
const missingImages = [];
const missingMetadata = [];
const invalidImagePaths = [];

for (const sign of kreszSigns) {
  if (seenIds.has(sign.id)) duplicateIds.push(sign.id);
  seenIds.add(sign.id);

  const expectedImage = sign.filename ? `/signs/${sign.filename}` : "";
  if (!sign.filename || sign.image !== expectedImage) {
    invalidImagePaths.push(`${sign.id}: image="${sign.image || ""}", expected="${expectedImage}"`);
  }

  const missingFields = requiredMetadata.filter((field) => !sign[field]);
  if (missingFields.length > 0) {
    missingMetadata.push(`${sign.id}: ${missingFields.join(", ")}`);
  }

  const localPath = sign.filename ? path.join(signsDir, sign.filename) : "";
  if (localPath && await exists(localPath)) {
    existingImages.push(`${sign.id} -> ${sign.filename}`);
  } else {
    missingImages.push(`${sign.id} -> ${sign.filename || "nincs filename"}`);
  }
}

printList("Meglévő táblaképek", existingImages);
printList("Hiányzó táblaképek", missingImages);
printList("Hiányzó forrás/licenc metaadat", missingMetadata);

const hardErrors = [
  ...duplicateIds.map((id) => `duplikált sign id: ${id}`),
  ...invalidImagePaths
];

if (hardErrors.length > 0) {
  printList("Javítandó adatmodell hibák", hardErrors);
  process.exit(1);
}

console.log("\nA hiányzó képek fejlesztés közben nem törik el az appot; a felület helyettesítőt mutat.");
