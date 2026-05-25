// Gyakorlati pálya feladatok – Óvodai KRESZ-versenyhez
// Minden feladatnál: gyerekbarát leírás + szülői/óvónői instrukció + eszközök + pontozás

export const practiceTasks = [
  {
    id: "pt1",
    title: "Szlalom bóják között",
    childDescription: "Kanyarogj a bóják között, mint egy szlalomversenyző! Lassan és ügyesen!",
    parentInstruction: "Állítsd fel a bójákat (palackok, tányérok) egyenes vonalban, kb. 1,5–2 méterre egymástól. A gyermek kanyarogjon közöttük rollerrel, biciklivel vagy kismotorral.",
    equipment: ["Roller / bicikli / kismotor", "6–8 bója vagy műanyag palack", "Bukósisak"],
    commonMistake: "Túl széles kanyar, bójákat felborítja, vagy túl gyorsan halad.",
    competitionTip: "A versenyen lesznek szám-jelölt bóják – a sorrend is számít!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Hibátlanul teljesítette", icon: "⭐⭐" },
      { score: 1, label: "1-2 bóját felborított, de végigment", icon: "⭐" },
      { score: 0, label: "Nem tudta teljesíteni", icon: "📚" }
    ]
  },
  {
    id: "pt2",
    title: "Megállás STOP vonalnál",
    childDescription: "Gyere felém a vonalig, és pontosan álljál meg rajta! Ne lépj át!",
    parentInstruction: "Jelölj ki egy vonalat a padlón ragasztószalaggal (STOP vonal). A gyermek haladjon felé, és pontosan a vonalnál álljon meg.",
    equipment: ["Roller / bicikli / kismotor", "Ragasztószalag (STOP vonal)", "Bukósisak"],
    commonMistake: "Átgurul a vonalon, vagy túl messze áll meg.",
    competitionTip: "A kerekeknek pontosan a vonalon kell megállni – se előtte, se utána!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Pontosan megállt a vonalnál", icon: "⭐⭐" },
      { score: 1, label: "Közel megállt, kis eltérés", icon: "⭐" },
      { score: 0, label: "Átment a vonalon", icon: "📚" }
    ]
  },
  {
    id: "pt3",
    title: "Elindulás jelzőlámpa-jelre",
    childDescription: "Csak akkor indulhatsz el, ha zöld a lámpa! Figyelj a jelzésre!",
    parentInstruction: "Tarts egy piros és zöld kartonlapot (vagy az alkalmazásban a lámpát). A gyermek csak a zöld lap mutatásakor indulhat el.",
    equipment: ["Roller / bicikli / kismotor", "Piros és zöld kartonlap (jelzőlámpa helyett)", "Bukósisak"],
    commonMistake: "Korábban indul, mint a zöld jelzés, vagy nem figyel a lámpára.",
    competitionTip: "A reakcióidő is számít – de nem szabad sárgánál vagy pirosán indulni!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Pontosan zöldre indult el", icon: "⭐⭐" },
      { score: 1, label: "Egy jelzésnél rosszkor indult", icon: "⭐" },
      { score: 0, label: "Nem figyelt a jelzésre", icon: "📚" }
    ]
  },
  {
    id: "pt4",
    title: "Zebra előtt megállás és körülnézés",
    childDescription: "Állj meg a zebra előtt, nézz balra, jobbra, újra balra, és csak akkor menj át!",
    parentInstruction: "Rajzolj egy zebrát a földre ragasztószalaggal. A gyermek haladjon a zebra felé, álljon meg, végezze el a bal-jobb-bal körülnézést, majd keljen át egyenesen.",
    equipment: ["Ragasztószalag (zebra a padlón)", "Sisak (ha járművön érkezik)"],
    commonMistake: "Nem áll meg a zebra előtt, vagy nem néz körül.",
    competitionTip: "A körülnézést szépen, jól láthatóan kell elvégezni!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Megállt, körülnézett, szabályosan átment", icon: "⭐⭐" },
      { score: 1, label: "Megállt, de a körülnézés nem volt teljes", icon: "⭐" },
      { score: 0, label: "Nem állt meg, vagy nem nézett körül", icon: "📚" }
    ]
  },
  {
    id: "pt5",
    title: "Körülnézés gyakorlása (bal-jobb-bal)",
    childDescription: "Mutasd meg, hogyan kell körülnézni az úton! Balra… jobbra… újra balra!",
    parentInstruction: "Kérd meg a gyermeket, hogy álljon a kijelölt helyen és mutassa be a körülnézést: balra fordul, jobbra fordul, újra balra fordul. Mondhatja is hangosan.",
    equipment: ["Kijelölt álló hely (pl. ragasztószalag négyzet)"],
    commonMistake: "Csak egy irányba néz, vagy elfelejtkezik az újra balra nézésről.",
    competitionTip: "A zsűri azt nézi, hogy a gyermek valóban megfordul mindkét irányba!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Bal – jobb – bal, teljesen elvégezte", icon: "⭐⭐" },
      { score: 1, label: "Elvégezte, de gyorsan vagy hiányosan", icon: "⭐" },
      { score: 0, label: "Nem végezte el vagy csak egy irányba nézett", icon: "📚" }
    ]
  },
  {
    id: "pt6",
    title: "Gyalogátkelőn szabályos áthaladás",
    childDescription: "Sétálj át a zebrán szépen, egyenesen, ne fuss!",
    parentInstruction: "A gyermek a zebra (felragasztott sávok) elé áll, körülnéz (bal-jobb-bal), és egyenesen, lassan, a sávokon belül átsétál. Ne szalad, ne kanyarog.",
    equipment: ["Ragasztószalag (zebra sávok)", "Szabadon járva – nincs jármű ehhez"],
    commonMistake: "Futva kel át, kiszalad a sávokból, vagy nem néz körül.",
    competitionTip: "A zebrán belül kell maradni – a lábak ne lépjenek ki a sávokból!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Szabályosan, sávon belül, lassan átment", icon: "⭐⭐" },
      { score: 1, label: "Átment, de kicsit kiszaladt a sávból", icon: "⭐" },
      { score: 0, label: "Futott vagy figyelmen kívül hagyta a sávokat", icon: "📚" }
    ]
  },
  {
    id: "pt7",
    title: "Körforgalom szabályos megkerülése",
    childDescription: "A körforgalomban jobbra kell menni, körbe-körbe, mint egy csillagász!",
    parentInstruction: "Jelölj ki egy kört a padlón. A gyermek jobbra kanyarodva haladjon körbe, majd lépjen ki a kijelölt kilépőponton.",
    equipment: ["Ragasztószalag (kör alakú pálya)", "Roller / bicikli / kismotor", "Bukósisak"],
    commonMistake: "Rossz irányba (balra) indul, vagy nem marad a körvonalon.",
    competitionTip: "Magyarországon a körforgalomban JOBBRA haladunk!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Jobbra haladva teljesítette a kört", icon: "⭐⭐" },
      { score: 1, label: "Jó irányba ment, de letért a körről", icon: "⭐" },
      { score: 0, label: "Rossz irányba indult", icon: "📚" }
    ]
  },
  {
    id: "pt8",
    title: "Akadály biztonságos kikerülése",
    childDescription: "Nézd meg az akadályt, kerüld ki lassan, ne ütközzél bele!",
    parentInstruction: "Helyezz el egy akadályt (doboz, tárgy) az útvonalon. A gyermek lassan, biztonságosan kerülje ki, lehetőleg jelezze is, merre kanyarodik.",
    equipment: ["Roller / bicikli / kismotor", "Akadály (doboz, szék, tárgy)", "Bukósisak"],
    commonMistake: "Nekimegy az akadálynak, hirtelen kitér, vagy túl gyorsan halad.",
    competitionTip: "Lassan és biztosan – a sebesség nem számít, a pontosság igen!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Lassan, biztosan kikerülte az akadályt", icon: "⭐⭐" },
      { score: 1, label: "Kikerülte, de kicsit nekiment vagy gyorsan ment", icon: "⭐" },
      { score: 0, label: "Nekiment az akadálynak", icon: "📚" }
    ]
  },
  {
    id: "pt9",
    title: "Lassú haladás egyenes vonalon",
    childDescription: "Menj végig az egyenes vonalon, de nagyon lassan! Ne lépj le róla!",
    parentInstruction: "Ragassz le egy kb. 5 méteres egyenes vonalat a padlón. A gyermek lassan haladjon végig a vonalon, a kerekek ne lépjenek le róla.",
    equipment: ["Ragasztószalag (egyenes vonal)", "Roller / bicikli / kismotor", "Bukósisak"],
    commonMistake: "Letér a vonalról, vagy túl gyorsan halad.",
    competitionTip: "Minél lassabb, annál nehezebb – de annál több pont!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Végig a vonalon maradt, lassan ment", icon: "⭐⭐" },
      { score: 1, label: "Kis letérés, de végigment", icon: "⭐" },
      { score: 0, label: "Letért a vonalról vagy nem ment végig", icon: "📚" }
    ]
  },
  {
    id: "pt10",
    title: "Megállás kijelölt helyen (célvonal)",
    childDescription: "Menj végig a pályán, és pontosan álljál meg a célnál!",
    parentInstruction: "Jelöld ki a célvonalat. A gyermek haladjon végig a teljes pályán, és a kijelölt helyen pontosan álljon meg.",
    equipment: ["Kijelölt célvonal (ragasztószalag)", "Roller / bicikli / kismotor", "Bukósisak"],
    commonMistake: "Átgurul a célon, vagy megáll előtte.",
    competitionTip: "A pontos megállás a versenyen is pontot ér!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Pontosan megállt a célvonalnál", icon: "⭐⭐" },
      { score: 1, label: "Közel megállt, kis eltérés", icon: "⭐" },
      { score: 0, label: "Átment a célon vagy nem ért oda", icon: "📚" }
    ]
  },
  {
    id: "pt11",
    title: "Bukósisak és mellény felvétele",
    childDescription: "Vedd fel a sisakod! Csatold be rendesen, és nézd meg a mellényt is!",
    parentInstruction: "Kérd meg a gyermeket, hogy önállóan vegye fel a bukósisakot és a láthatósági mellényt. Ellenőrizd: a sisak be van-e csatolva, nem lóg, a mellény jól van-e felvéve.",
    equipment: ["Bukósisak (megfelelő méret)", "Láthatósági mellény"],
    commonMistake: "A sisak nincs becsatolva, laza, vagy nem jó méretű. A mellény fordítva van felvéve.",
    competitionTip: "A zsűri ellenőrzi: rendesen van-e becsatolva a sisak!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Önállóan, helyesen vette fel mindkettőt", icon: "⭐⭐" },
      { score: 1, label: "Felvette, de kis segítség kellett", icon: "⭐" },
      { score: 0, label: "Nem tudta felvenni önállóan", icon: "📚" }
    ]
  },
  {
    id: "pt12",
    title: "Veszélyes helyzet felismerése – képes feladat",
    childDescription: "Melyik képen van veszély? Mutasd meg!",
    parentInstruction: "Mutass a gyermeknek két képet: egy biztonságos jelenetet és egy veszélyeset (pl. gyerek az úttest szélén szalad, vs. gyerek a járdán megy). A gyermek mutassa meg, melyik veszélyes.",
    equipment: ["Képek (kinyomtatva vagy tableten megmutatva)", "Semmi más nem kell"],
    commonMistake: "A gyermek nem tudja megmagyarázni, miért veszélyes.",
    competitionTip: "A magyarázat is fontos – mondd el, miért veszélyes!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Helyesen azonosított és el is magyarázta", icon: "⭐⭐" },
      { score: 1, label: "Helyesen azonosított, de nem magyarázta", icon: "⭐" },
      { score: 0, label: "Nem ismerte fel a veszélyt", icon: "📚" }
    ]
  },
  {
    id: "pt13",
    title: "Tábla felismerés szóban",
    childDescription: "Megmutatom neked egy táblát – mondd meg, mit jelent!",
    parentInstruction: "Mutass a gyermeknek egy egyszerű KRESZ táblát (pl. STOP, gyalogos átkelő, kerékpárút, behajtani tilos). A gyermek mondja meg, mit jelent a tábla.",
    equipment: ["Kinyomtatott vagy képernyőn megjelenített KRESZ táblák"],
    commonMistake: "Összetéveszti a hasonló táblákat.",
    competitionTip: "A versenyen pontosan kell megnevezni a táblát!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Pontosan megnevezte és elmagyarázta", icon: "⭐⭐" },
      { score: 1, label: "Ismerte, de nem tudta pontosan megmagyarázni", icon: "⭐" },
      { score: 0, label: "Nem ismerte fel", icon: "📚" }
    ]
  },
  {
    id: "pt14",
    title: "Helyes kézfogással való átkelés felnőttel",
    childDescription: "Fogd meg az óvónő kezét és menjetek együtt át a zebrán!",
    parentInstruction: "Vezess egy szimulált zebrán átkelést: a gyermek megfogja a felnőtt kezét, együtt megállnak, körülnéznek, majd átkelnek. Fontos, hogy a gyermek aktívan vegyen részt a körülnézésben.",
    equipment: ["Szimulált zebra (ragasztószalag)", "Felnőtt kísérő"],
    commonMistake: "A gyermek passzív, nem néz körül, csak húzza a felnőtt.",
    competitionTip: "A gyermeknek is aktívan kell körülnéznie – nem csak a felnőtt!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Aktívan részt vett, körülnézett, szabályosan kelt át", icon: "⭐⭐" },
      { score: 1, label: "Kelt át, de passzív volt", icon: "⭐" },
      { score: 0, label: "Nem figyelt, nem vett részt aktívan", icon: "📚" }
    ]
  },
  {
    id: "pt15",
    title: "Hangos szignál a lámpaváltáskor",
    childDescription: "Figyelj a hangjelzésre! Ha sípolok, zöld lett – indulhatsz!",
    parentInstruction: "Szimuláld a jelzőlámpa hangos jelzését (sípolás = zöld). A gyermek figyelje a hangjelzést (hasznos látássérültek számára tervezett kiegészítő módszer) és ennek megfelelően induljon el vagy álljon meg.",
    equipment: ["Sípszó vagy csengő", "Roller / bicikli / kismotor", "Bukósisak"],
    commonMistake: "Csak a szín jelzésre figyel, a hangjelzést figyelmen kívül hagyja.",
    competitionTip: "A jelzőlámpa hangjelzése vakok számára van – de mindenki hallhatja!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Pontosan reagált a hangjelzésre", icon: "⭐⭐" },
      { score: 1, label: "Reagált, de késve vagy bizonytalanul", icon: "⭐" },
      { score: 0, label: "Nem reagált a hangjelzésre", icon: "📚" }
    ]
  },
  {
    id: "pt16",
    title: "Kézjelzés adása kanyarodáskor",
    childDescription: "Ha jobbra kanyarodsz, nyújtsd ki a jobb kezed! Ha balra, a bal kezed!",
    parentInstruction: "A gyermek kerékpáron haladjon és kanyarodás előtt adjon kézjelzést. Jobbra kanyarodáskor nyújtsa ki a jobb kezét, balra kanyarodáskor a bal kezét.",
    equipment: ["Roller / bicikli", "Kijelölt kanyarodási pont", "Bukósisak"],
    commonMistake: "Nem ad kézjelzést, vagy rossz kezét nyújtja ki.",
    competitionTip: "A kézjelzés azért fontos, hogy mások tudják, merre mész!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Helyes kézjelzéssel kanyarodott", icon: "⭐⭐" },
      { score: 1, label: "Kanyarodott, de a kézjelzés hiányzott vagy késett", icon: "⭐" },
      { score: 0, label: "Nem adott kézjelzést", icon: "📚" }
    ]
  },
  {
    id: "pt17",
    title: "Biztonságos parkolás és leszállás",
    childDescription: "Amikor megállsz, tedd le a rollert a falhoz, ne az úttestre!",
    parentInstruction: "A gyermek hajtson be egy kijelölt 'parkolóba' (vonallal megjelölt terület), szálljon le, és biztonsági helyre tegye le a rollerét/biciklijét.",
    equipment: ["Roller / bicikli", "Kijelölt parkoló (ragasztószalag)"],
    commonMistake: "A rollert útban hagyja, vagy nem a kijelölt helyre teszi.",
    competitionTip: "A leparkolás is szabály – mások bukhatnak el egy rosszul lerakott rolleren!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Biztonságos helyre parkolt, akadálymentesen", icon: "⭐⭐" },
      { score: 1, label: "Leparkolt, de az útban hagyta", icon: "⭐" },
      { score: 0, label: "Bárhova lerakta a rollert", icon: "📚" }
    ]
  },
  {
    id: "pt18",
    title: "Kerékpár/roller ellenőrzése indulás előtt",
    childDescription: "Mielőtt elindulsz, ellenőrizd a fékeket és a kerekeket!",
    parentInstruction: "A gyermek ellenőrizze a roller/bicikli néhány alapvető részét: megvannak-e a kerekek, megfogja a kormányt, megpróbálja a fékeket. Tanítsd meg, mi a teendő indulás előtt.",
    equipment: ["Roller / bicikli"],
    commonMistake: "Ellenőrzés nélkül azonnal elindul.",
    competitionTip: "A versenyen is ellenőrzik, hogy a gyermek ismeri-e a jármű részeit!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Elvégezte a ellenőrzést és megnevezte a részeket", icon: "⭐⭐" },
      { score: 1, label: "Megpróbálta ellenőrizni, de hiányosan", icon: "⭐" },
      { score: 0, label: "Nem ellenőrzött semmit", icon: "📚" }
    ]
  },
  {
    id: "pt19",
    title: "Gyalogos – ne menj ki az autók közé!",
    childDescription: "Maradj a járdán! Ne menj ki az autók közé, még akkor sem, ha látod, hogy nem jön senki!",
    parentInstruction: "Szimuláld a helyzetet: a gyermek a járdán halad és egy 'kiugró' helyzet adódik (pl. labda gurult el). Figyeld, hogy visszatart-e a tilosból, vagy kimegy az úttest felé.",
    equipment: ["Jelölt járda és úttest (ragasztószalag)"],
    commonMistake: "Gondolkodás nélkül kimegy az úttest felé.",
    competitionTip: "Veszélyes helyzet felismerése is pontokat ér!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Visszatartotta magát és elmagyarázta, miért", icon: "⭐⭐" },
      { score: 1, label: "Visszatartotta magát, de nem tudta elmagyarázni", icon: "⭐" },
      { score: 0, label: "Kiment az úttest felé", icon: "📚" }
    ]
  },
  {
    id: "pt20",
    title: "Teljes versenyfeladat-szimulálás",
    childDescription: "Most csináld végig az egész KRESZ-pályát, mintha verseny lenne!",
    parentInstruction: "Futtasd le a teljes pályát: szlalom → STOP vonal → zebra átkelés → lámpára várás → célvonal. Minden állomásnál figyeld a szabályokat.",
    equipment: ["Összes korábban említett felszerelés", "Roller / bicikli", "Bukósisak és mellény"],
    commonMistake: "Valamelyik állomást kihagyja vagy siet.",
    competitionTip: "A versenyen így kell végigcsinálni az egész pályát – minden részlet számít!",
    maxScore: 2,
    scoring: [
      { score: 2, label: "Az összes állomást szabályosan teljesítette", icon: "⭐⭐" },
      { score: 1, label: "Többnyire szabályosan, egy-két kis hibával", icon: "⭐" },
      { score: 0, label: "Több állomást kihagyott vagy szabálytalanul ment", icon: "📚" }
    ]
  }
];