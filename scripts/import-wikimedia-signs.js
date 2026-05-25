import fs from "node:fs/promises";
import path from "node:path";

const WIKI_SOURCE_PAGE =
  "https://hu.wikipedia.org/wiki/Szerkeszt%C5%91:Hirannor/KRESZ_t%C3%A1bl%C3%A1k";
const COMMONS_API = "https://commons.wikimedia.org/w/api.php";
const USER_AGENT =
  "kresz-kaland-kuck/1.0 (https://github.com/Csisz/gyerek-kresz; local asset import)";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const selectedSigns = [
  ["gyalogos_atkelohely", "Gyalogos \u00e1tkel\u0151hely", "gyalogos-atkelohely.svg", "Hungary_road_sign_E-038.svg"],
  ["gyermekek", "Gyermekek", "gyermekek.svg", "Hungary_road_sign_A-021.svg"],
  ["stop_elsobbsegadas_kotelezo", "\u00c1LLJ! Els\u0151bbs\u00e9gad\u00e1s k\u00f6telez\u0151", "stop-elsobbsegadas-kotelezo.svg", "Hungary_road_sign_B-002.svg"],
  ["elsobbsegadas_kotelezo", "Els\u0151bbs\u00e9gad\u00e1s k\u00f6telez\u0151", "elsobbsegadas-kotelezo.svg", "Hungary_road_sign_B-001.svg"],
  ["behajtani_tilos", "Behajtani tilos", "behajtani-tilos.svg", "Hungary_road_sign_C-001.svg"],
  ["mindket_iranybol_behajtani_tilos", "Mindk\u00e9t ir\u00e1nyb\u00f3l behajtani tilos", "mindket-iranybol-behajtani-tilos.svg", "Hungary_road_sign_C-002.svg"],
  ["gyalogut", "Gyalog\u00fat", "gyalogut.svg", "Hungary_road_sign_D-025.svg"],
  ["kerekparut", "Ker\u00e9kp\u00e1r\u00fat", "kerekparut.svg", "Hungary_road_sign_D-023.svg"],
  ["gyalog_es_kerekparut", "Gyalog- \u00e9s ker\u00e9kp\u00e1r\u00fat", "gyalog-es-kerekparut.svg", "Hungary_road_sign_D-027.svg"],
  ["kerekparut_vege", "Ker\u00e9kp\u00e1r\u00fat v\u00e9ge", "kerekparut-vege.svg", "Hungary_road_sign_D-024.svg"],
  ["autobusz_megallohely", "Aut\u00f3busz-meg\u00e1ll\u00f3hely", "autobusz-megallohely.svg", "Hungary_road_sign_E-039.svg"],
  ["villamos_megallohely", "Villamosmeg\u00e1ll\u00f3hely", "villamos-megallohely.svg", "Hungary_road_sign_E-041.svg"],
  ["vasuti_atjaro", "Vas\u00fati \u00e1tj\u00e1r\u00f3 vesz\u00e9lye", "vasuti-atjaro.svg", "Hungary_road_sign_A-038.svg"],
  ["parkolo", "Parkol\u00f3", "parkolo.svg", "Hungary_road_sign_E-046.svg"],
  ["elsosegelyhely", "Els\u0151seg\u00e9lyhely", "elsosegelyhely.svg", "Hungary_road_sign_F-001.svg"],
  ["korhaz", "K\u00f3rh\u00e1z", "korhaz.svg", "Hungary_road_sign_E-045.svg"],
  ["kotelezo_haladasi_irany_egyenesen", "K\u00f6telez\u0151 halad\u00e1si ir\u00e1ny egyenesen", "kotelezo-haladasi-irany-egyenesen.svg", "Hungary_road_sign_D-001.svg"],
  ["kotelezo_haladasi_irany_jobbra", "K\u00f6telez\u0151 halad\u00e1si ir\u00e1ny jobbra", "kotelezo-haladasi-irany-jobbra.svg", "Hungary_road_sign_D-003.svg"],
  ["kotelezo_haladasi_irany_balra", "K\u00f6telez\u0151 halad\u00e1si ir\u00e1ny balra", "kotelezo-haladasi-irany-balra.svg", "Hungary_road_sign_D-002.svg"],
  ["lakott_terulet_kezdete", "Lakott ter\u00fclet kezdete", "lakott-terulet-kezdete.svg", "Hungary_road_sign_E-020.svg"],
  ["lakott_terulet_vege", "Lakott ter\u00fclet v\u00e9ge", "lakott-terulet-vege.svg", "Hungary_road_sign_E-021.svg"],
  ["utkeresztezes", "\u00datkeresztez\u0151d\u00e9s", "utkeresztezes.svg", "Hungary_road_sign_A-027.svg"],
  ["egyeb_veszely", "Egy\u00e9b vesz\u00e9ly", "egyeb-veszely.svg", "Hungary_road_sign_A-053.svg"],
  ["jelzolampa_veszely", "F\u00e9nyjelz\u0151 k\u00e9sz\u00fcl\u00e9k", "jelzolampa-veszely.svg", "Hungary_road_sign_A-026.svg"],
  ["lako_piheno_ovezet", "Lak\u00f3-pihen\u0151 \u00f6vezet", "lako-piheno-ovezet.svg", "Hungary_road_sign_E-043.svg"]
].map(([signId, name, filename, commonsFile]) => ({
  signId,
  name,
  filename,
  commonsFile,
  sourcePageUrl: `https://commons.wikimedia.org/wiki/File:${commonsFile}`,
  importSourcePageUrl: WIKI_SOURCE_PAGE
}));

const stripHtml = (value = "") => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

async function getImageInfo() {
  const titles = selectedSigns.map((sign) => `File:${sign.commonsFile}`).join("|");
  const url = new URL(COMMONS_API);
  url.search = new URLSearchParams({
    action: "query",
    format: "json",
    prop: "imageinfo",
    iiprop: "url|mime|extmetadata",
    titles
  }).toString();

  const response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!response.ok) throw new Error(`Commons API failed: ${response.status} ${response.statusText}`);
  const json = await response.json();
  const pages = Object.values(json.query?.pages || {});
  return new Map(pages.map((page) => [page.title.replace(/^File:/, "").replaceAll(" ", "_"), page]));
}

async function download(url, destination, attempts = 4) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (response.ok) {
      const data = Buffer.from(await response.arrayBuffer());
      await fs.writeFile(destination, data);
      return "imported";
    }

    if (response.status === 429 && attempt < attempts) {
      const retryAfter = Number(response.headers.get("retry-after"));
      const waitMs = Number.isFinite(retryAfter) ? retryAfter * 1000 : attempt * 15000;
      console.warn(`Rate limited while downloading ${url}; retrying in ${Math.round(waitMs / 1000)}s`);
      await sleep(waitMs);
      continue;
    }

    throw new Error(`Download failed for ${url}: ${response.status}`);
  }

  return "not imported";
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function buildRecord(sign, page) {
  const imageInfo = page?.imageinfo?.[0];
  const metadata = imageInfo?.extmetadata || {};
  const license = stripHtml(metadata.LicenseShortName?.value || metadata.UsageTerms?.value || "");
  const attribution = stripHtml(metadata.Artist?.value || metadata.Credit?.value || "");
  const fileUrl = imageInfo?.url || "";
  const status = page?.missing
    ? "missing on Wikimedia Commons"
    : license && attribution && fileUrl
      ? "verified"
      : "license/source needs manual verification";

  return {
    ...sign,
    fileUrl,
    license,
    attribution,
    status,
    localStatus: "not imported"
  };
}

function buildDocs(records) {
  const rows = records.map((record) => [
    `\`${record.signId}\``,
    record.name,
    `\`${record.filename}\``,
    record.sourcePageUrl,
    record.fileUrl || "N/A",
    record.license || "license/source needs manual verification",
    record.attribution || "license/source needs manual verification",
    record.importSourcePageUrl,
    record.status,
    record.localStatus
  ].join(" | "));

  return `# Magyar KRESZ tábla asset lista

Valós tábla SVG/PNG fájlok hozzáadásakor a fájlokat a \`public/signs\` mappába kell tenni. Az adatbázis egyetlen forrása: \`src/data/kreszSigns.js\`.

A közlekedési táblaképek forrását és licencét minden egyes fájlnál külön ellenőrizni és dokumentálni kell. A Wikipédia/Wikimedia oldalról származó képek nem automatikusan azonos licencűek.

Import forrásoldal: ${WIKI_SOURCE_PAGE}

| Sign id | Magyar név | Elvárt fájlnév | Eredeti forrásoldal | Eredeti fájl URL | Licenc | Attribution | Import source page URL | License/source status | Helyi státusz |
|---|---|---|---|---|---|---|---|---|---|
${rows.map((row) => `| ${row} |`).join("\n")}
`;
}

async function main() {
  const root = process.cwd();
  const signsDir = path.join(root, "public", "signs");
  await fs.mkdir(signsDir, { recursive: true });

  const pagesByFile = await getImageInfo();
  const records = selectedSigns.map((sign) => buildRecord(sign, pagesByFile.get(sign.commonsFile)));

  for (const record of records) {
    const destination = path.join(signsDir, record.filename);
    if (await fileExists(destination)) {
      record.localStatus = "already present";
      console.log(`Already present ${record.filename}`);
      continue;
    }

    if (record.status !== "verified") {
      console.warn(`Skipping ${record.signId}: ${record.status}`);
      continue;
    }

    record.localStatus = await download(record.fileUrl, destination);
    console.log(`Imported ${record.filename}`);
    await sleep(2000);
  }

  await fs.mkdir(path.join(root, "docs"), { recursive: true });
  await fs.writeFile(path.join(root, "docs", "SIGN_ASSETS.md"), buildDocs(records), "utf8");
  console.log(`Updated docs/SIGN_ASSETS.md (${records.length} records)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
