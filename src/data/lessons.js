// Tanulási kártyák – 5 éves óvodásoknak
// Magyar KRESZ-alapú, versenyfelkészítő leckék

export const lessons = [
  // ─── JELZŐLÁMPÁK ────────────────────────────────────────────────────
  {
    id: "piros-lampa",
    title: "Piros lámpa",
    text: "Ha piros a lámpa, ÁLLJ MEG! Nem szabad elindulni.",
    emoji: "🔴",
    category: "jelzolampak",
    speech: "Ha piros a lámpa, meg kell állni! Nem szabad elindulni, várni kell, amíg zöld nem lesz."
  },
  {
    id: "sarga-lampa",
    title: "Sárga lámpa",
    text: "Ha sárga a lámpa, KÉSZÜLJ! Mindjárt vált.",
    emoji: "🟡",
    category: "jelzolampak",
    speech: "Ha sárga a lámpa, felkészülünk! Mindjárt változik a lámpa színe. Sem indulni, sem futni nem kell!"
  },
  {
    id: "zold-lampa",
    title: "Zöld lámpa",
    text: "Ha zöld a lámpa, MEHETSZ – de azért nézz körül!",
    emoji: "🟢",
    category: "jelzolampak",
    speech: "Ha zöld a lámpa, átmehetsz az úton! De azért nézz körül is, mert autó jöhet."
  },
  {
    id: "lampa-sorrend",
    title: "A lámpa sorrendje",
    text: "Piros → sárga → zöld → sárga → piros. Ez ismétlődik!",
    emoji: "🚦",
    category: "jelzolampak",
    speech: "A jelzőlámpa sorrendje: piros, aztán sárga, aztán zöld, aztán sárga, és vissza piros. Ez mindig így ismétlődik!"
  },

  // ─── GYALOGOS KÖZLEKEDÉS ─────────────────────────────────────────────
  {
    id: "zebra",
    title: "Zebra – gyalogátkelő",
    text: "Az úton CSAK a zebrán szabad átkelni! Máshol tilos!",
    emoji: "🦓",
    category: "gyalogos",
    speech: "Az úton csak a zebrán, vagyis a gyalogos átkelőhelyen szabad átkelni! Máshol nagyon veszélyes."
  },
  {
    id: "korulnezes",
    title: "Körülnézés a zebrán",
    text: "Átkelés előtt: BALRA – JOBBRA – ÚJRA BALRA nézz!",
    emoji: "👀",
    category: "gyalogos",
    speech: "Mielőtt átmész az úton, mindig nézz balra, aztán jobbra, majd újra balra! Így látod, ha jön egy autó."
  },
  {
    id: "jarda",
    title: "A járda",
    text: "Gyalogosan MINDIG a járdán közlekedj! Az úttest az autóké.",
    emoji: "🚶",
    category: "gyalogos",
    speech: "Gyalogosan mindig a járdán kell közlekedni, soha nem az úttesten! Az úttest az autóké."
  },
  {
    id: "uttest-veszelyes",
    title: "Az úttest veszélyes!",
    text: "Az úttest az autóké! Oda NEM szabad kimenni, csak a zebrán.",
    emoji: "🚗",
    category: "gyalogos",
    speech: "Az úttest az autóké! Oda nem szabad kimenni, csak a zebrán, és csak akkor, ha körülnéztünk!"
  },
  {
    id: "autokra-figyelj",
    title: "Figyelj az autókra!",
    text: "Mindig figyeld az autókat! Lehet, hogy nem látnak téged.",
    emoji: "🚙",
    category: "gyalogos",
    speech: "Mindig figyeld az autókat, mielőtt átmész az úton! Az autók néha gyorsan jönnek, és nem mindig látnak bennünket."
  },
  {
    id: "labda-utca",
    title: "Ne szaladj a labda után!",
    text: "Ha kigurul a labdád az útra, soha ne szaladj utána!",
    emoji: "⚽",
    category: "gyalogos",
    speech: "Ha kigurul a labdád az útra, soha ne szaladj utána! Kérj segítséget egy felnőttől. A labdánál fontosabb vagy te!"
  },

  // ─── TÁBLÁK ──────────────────────────────────────────────────────────
  {
    id: "stop-tabla",
    title: "STOP tábla",
    text: "A piros nyolcszögű STOP tábla azt jelenti: TELJESEN meg kell állni!",
    signId: "stop",
    category: "tablak",
    speech: "A STOP tábla azt jelenti, hogy teljesen meg kell állni! Nem elég lassítani – teljesen meg kell állni, és csak akkor mehetünk tovább, ha szabad."
  },
  {
    id: "gyalogos-tabla",
    title: "Gyalogos átkelő tábla",
    text: "A kék négyzetes tábla fehér gyalogossal jelzi: itt van zebra!",
    signId: "gyalogos-atkelohely",
    category: "tablak",
    speech: "A kék négyzetes tábla, amiben egy gyalogos látható, a gyalogos átkelőhelyet jelzi! Ott szabad az úton átkelni."
  },
  {
    id: "behajtani-tilos-tabla",
    title: "Behajtani tilos tábla",
    text: "A piros körben fehér sáv azt jelenti: NEM szabad bemenni!",
    signId: "behajtani-tilos",
    category: "tablak",
    speech: "A behajtani tilos tábla piros körben fehér vízszintes sávot mutat. Ez azt jelenti, hogy erre nem szabad bemenni!"
  },
  {
    id: "kerekparut-tabla",
    title: "Kerékpárút tábla",
    text: "A kék körös, fehér biciklis tábla: csak kerékpárosoknak!",
    signId: "kerekparut",
    category: "tablak",
    speech: "A kék kör közepén fehér bicikli jelzi a kerékpárutat. Ott csak kerékpárosok mehetnek!"
  },
  {
    id: "veszelyt-jelzo-tabla",
    title: "Veszélyt jelző tábla",
    text: "A sárga háromszög piros szegéllyel mindig veszélyre figyelmeztet!",
    signId: "egyeb-veszely",
    category: "tablak",
    speech: "A sárga háromszög alakú tábla piros szegéllyel mindig veszélyre figyelmeztet! Ha ilyet látsz, légy óvatos!"
  },
  {
    id: "elsobbsegadas-tabla",
    title: "Elsőbbségadás tábla",
    text: "A fehér, csúcsával lefelé mutató háromszög: engedd előre a másikat!",
    signId: "elsobbsegadas",
    category: "tablak",
    speech: "Az elsőbbségadás kötelező tábla fehér háromszög csúcsával lefelé, piros szegéllyel. Ez azt jelenti, hogy engedni kell a másiknak!"
  },

  // ─── VÉDŐFELSZERELÉSEK ────────────────────────────────────────────────
  {
    id: "lathatosagi-melleny",
    title: "Láthatósági mellény",
    text: "A sárga mellény segít, hogy az autósok jól lássanak téged!",
    emoji: "🦺",
    category: "felszereles",
    speech: "A láthatósági mellény segít, hogy az autósok jól lássanak téged, különösen sötétben vagy szürkületi időben!"
  },
  {
    id: "bukosisak",
    title: "Bukósisak",
    text: "Biciklizéshez és rollerezéshez MINDIG vedd fel a sisakot!",
    emoji: "⛑️",
    category: "felszereles",
    speech: "Biciklizéshez és rollerezéshez mindig vedd fel a bukósisakot! Ez védi a fejedet, ha esetleg elessz."
  },
  {
    id: "roller-bicikli",
    title: "Roller és bicikli",
    text: "Rollerrel és biciklivel LASSAN, óvatosan közlekedj!",
    emoji: "🛴",
    category: "felszereles",
    speech: "Rollerrel és biciklivel mindig óvatosan, lassan közlekedj, és viseld a sisakot! A kerékpárúton tartsd be a szabályokat."
  },

  // ─── HELYSZÍNEK ───────────────────────────────────────────────────────
  {
    id: "buszmegallo",
    title: "Buszmegálló",
    text: "A buszmegállóban csendben, sorban várj! Ne szaladgálj!",
    emoji: "🚌",
    category: "helyszinek",
    speech: "A buszmegállóban csendben, sorban várakozz, ne szaladgálj, és ne menj ki az úttestre! Ott buszok és autók közlekednek."
  },
  {
    id: "vasuti-atjaro",
    title: "Vasúti átjáró",
    text: "Vasúti átjárónál MINDIG állj meg és nézz körül! Vonat jöhet!",
    emoji: "🚂",
    category: "helyszinek",
    speech: "A vasúti átjárónál mindig meg kell állni és körülnézni! A vonat gyors és nehéz, és nem tud hirtelen megállni."
  },

  // ─── VESZÉLYEK ────────────────────────────────────────────────────────
  {
    id: "veszelyes-helyek",
    title: "Veszélyes helyek",
    text: "Parkoló, úttest, vasúti sín – ezeken soha ne játssz!",
    emoji: "🚫",
    category: "veszelyek",
    speech: "A parkoló, az úttest és a vasúti sín nagyon veszélyes helyek! Ezeken soha ne játsszon a gyerek."
  },
  {
    id: "idegen-auto",
    title: "Idegen autó",
    text: "Ha egy idegen autó megáll melletted, ne menj oda! Fuss el!",
    emoji: "🚨",
    category: "veszelyek",
    speech: "Ha egy idegen autó megáll melletted és kínál valamit, ne menj oda! Gyorsan menj el és szólj egy felnőttnek!"
  }
];

export const lessonCategories = [
  { id: "jelzolampak", name: "Jelzőlámpák", emoji: "🚦" },
  { id: "gyalogos", name: "Gyalogos közlekedés", emoji: "🚶" },
  { id: "felszereles", name: "Védőfelszerelések", emoji: "🦺" },
  { id: "tablak", name: "KRESZ táblák", emoji: "🪧" },
  { id: "helyszinek", name: "Helyszínek", emoji: "🏘️" },
  { id: "veszelyek", name: "Veszélyek", emoji: "⚠️" }
];
