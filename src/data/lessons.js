// Tanulási kártyák - 5 éves óvodásoknak
// Magyar KRESZ-alapú, játékos közlekedésbiztonsági leckék.

export const lessons = [
  {
    id: "autos-jelzolampa",
    title: "Autós jelzőlámpa",
    text: "Pirosnál állunk. Piros-sárgánál még várunk. Zöldnél mehetünk, ha biztonságos.",
    emoji: "🚦",
    category: "jelzolampak",
    trafficLightType: "car",
    sequence: [
      { id: "red", label: "Piros", lights: ["red"], text: "Meg kell állni." },
      { id: "red-yellow", label: "Piros + sárga", lights: ["red", "yellow"], text: "Még várunk." },
      { id: "green", label: "Zöld", lights: ["green"], text: "Mehetünk, ha biztonságos." },
      { id: "yellow", label: "Sárga", lights: ["yellow"], text: "Megállunk, ha tudunk." },
      { id: "red-again", label: "Piros", lights: ["red"], text: "Újra állunk." }
    ],
    speech:
      "Az autós jelzőlámpánál pirosnál állunk. Piros-sárgánál még várunk. Zöldnél mehetünk, ha biztonságos. Sárgánál megállunk, ha tudunk. Pirosnál újra állunk.",
    adultExplanation:
      "A gépjárműforgalmi jelzőlámpa sorrendje: piros, piros-sárga, zöld, sárga, piros. A piros-sárga jelzés felkészülést jelent, de még nem indulást; a sárga megállási kötelezettséget jelez, ha ez biztonságosan megtehető."
  },
  {
    id: "gyalogos-jelzolampa",
    title: "Gyalogos jelzőlámpa",
    text: "Piros emberkénél várunk. Zöldnél átmehetünk, ha körülnéztünk. Villogó zöldnél már ne induljunk el.",
    emoji: "🚦",
    category: "jelzolampak",
    trafficLightType: "pedestrian",
    sequence: [
      { id: "ped-red", label: "Piros emberke", state: "red", text: "Várunk." },
      { id: "ped-green", label: "Zöld emberke", state: "green", text: "Átmehetünk, ha körülnéztünk." },
      { id: "ped-flashing", label: "Villogó zöld", state: "flashing-green", text: "Már ne induljunk el." },
      { id: "ped-red-again", label: "Piros emberke", state: "red", text: "Újra várunk." }
    ],
    speech:
      "A gyalogos jelzőlámpánál piros emberkénél várunk. Zöld emberkénél átmehetünk, ha körülnéztünk. Villogó zöldnél már ne induljunk el. Ha már a zebrán vagyunk, óvatosan befejezzük az átkelést.",
    adultExplanation:
      "A gyalogos piros jelzésnél nem szabad az úttestre lépni. Zöldnél is csak körültekintés után indulunk el. Villogó zöldnél már nem kezdünk átkelést; aki már az úttesten van, óvatosan befejezi az átkelést."
  },

  {
    id: "zebra",
    title: "Zebra - gyalogátkelő",
    text: "Az úton csak a zebrán szabad átkelni, és ott is körülnézünk.",
    emoji: "🦓",
    category: "gyalogos",
    speech:
      "Az úton csak a zebrán, vagyis a gyalogos átkelőhelyen szabad átkelni. Előtte mindig megállunk és körülnézünk."
  },
  {
    id: "korulnezes",
    title: "Körülnézés a zebrán",
    text: "Átkelés előtt: balra, jobbra, újra balra nézz!",
    emoji: "👀",
    category: "gyalogos",
    speech:
      "Mielőtt átmész az úton, mindig nézz balra, aztán jobbra, majd újra balra. Így látod, ha jön egy autó."
  },
  {
    id: "jarda",
    title: "A járda",
    text: "Gyalogosan mindig a járdán közlekedj. Az úttest az autóké.",
    emoji: "🚶",
    category: "gyalogos",
    speech:
      "Gyalogosan mindig a járdán kell közlekedni, soha nem az úttesten. Az úttest az autóké."
  },
  {
    id: "uttest-veszelyes",
    title: "Az úttest veszélyes",
    text: "Az úttest az autóké. Oda csak átkeléskor, felnőttel és figyelmesen lépünk.",
    emoji: "🚗",
    category: "gyalogos",
    speech:
      "Az úttest az autóké. Oda nem megyünk játszani, csak átkeléskor, felnőttel és figyelmesen lépünk."
  },
  {
    id: "autokra-figyelj",
    title: "Figyelj az autókra",
    text: "Mindig figyeld az autókat. Lehet, hogy nem látnak téged.",
    emoji: "🚙",
    category: "gyalogos",
    speech:
      "Mindig figyeld az autókat, mielőtt átmész az úton. Az autók néha gyorsan jönnek, és nem mindig látnak bennünket."
  },
  {
    id: "labda-utca",
    title: "Ne szaladj a labda után",
    text: "Ha kigurul a labdád az útra, állj meg, és kérj felnőtt segítséget.",
    emoji: "⚽",
    category: "gyalogos",
    speech:
      "Ha kigurul a labdád az útra, soha ne szaladj utána. Állj meg biztonságos helyen, és kérj segítséget egy felnőttől."
  },

  {
    id: "stop-tabla",
    title: "STOP tábla",
    text: "A piros nyolcszögű STOP tábla azt jelenti: teljesen meg kell állni.",
    signId: "stop_elsobbsegadas_kotelezo",
    category: "tablak",
    speech:
      "A STOP tábla azt jelenti, hogy teljesen meg kell állni. Nem elég lassítani, teljesen meg kell állni, és csak akkor mehetünk tovább, ha szabad."
  },
  {
    id: "gyalogos-tabla",
    title: "Gyalogos átkelő tábla",
    text: "A kék tábla fehér gyalogossal jelzi: itt van zebra.",
    signId: "gyalogos_atkelohely",
    category: "tablak",
    speech:
      "A kék tábla, amiben egy gyalogos látható, a gyalogos átkelőhelyet jelzi. Ott szabad az úton átkelni, körülnézés után."
  },
  {
    id: "behajtani-tilos-tabla",
    title: "Behajtani tilos tábla",
    text: "A piros körben fehér sáv azt jelenti: ebből az irányból nem szabad bemenni.",
    signId: "behajtani_tilos",
    category: "tablak",
    speech:
      "A behajtani tilos tábla piros körben fehér vízszintes sávot mutat. Ez azt jelenti, hogy erre nem szabad bemenni."
  },
  {
    id: "kerekparut-tabla",
    title: "Kerékpárút tábla",
    text: "A kék körös, fehér biciklis tábla kerékpárutat jelez.",
    signId: "kerekparut",
    category: "tablak",
    speech:
      "A kék kör közepén fehér bicikli jelzi a kerékpárutat. Biciklivel ott biztonságosabb haladni."
  },
  {
    id: "veszelyt-jelzo-tabla",
    title: "Veszélyt jelző tábla",
    text: "A sárga háromszög piros szegéllyel mindig óvatosságra figyelmeztet.",
    signId: "egyeb_veszely",
    category: "tablak",
    speech:
      "A sárga háromszög alakú tábla piros szegéllyel mindig veszélyre figyelmeztet. Ha ilyet látsz, légy óvatos."
  },
  {
    id: "elsobbsegadas-tabla",
    title: "Elsőbbségadás tábla",
    text: "A fehér, lefelé mutató háromszög azt jelenti: engedd előre a másikat.",
    signId: "elsobbsegadas_kotelezo",
    category: "tablak",
    speech:
      "Az elsőbbségadás kötelező tábla fehér háromszög csúcsával lefelé, piros szegéllyel. Ez azt jelenti, hogy engedni kell a másiknak."
  },

  {
    id: "lathatosagi-melleny",
    title: "Láthatósági mellény",
    text: "A sárga mellény segít, hogy az autósok jól lássanak téged.",
    emoji: "🦺",
    category: "felszereles",
    speech:
      "A láthatósági mellény segít, hogy az autósok jól lássanak téged, különösen sötétben vagy szürkületi időben."
  },
  {
    id: "bukosisak",
    title: "Bukósisak",
    text: "Biciklizéshez és rollerezéshez mindig vedd fel a sisakot.",
    emoji: "⛑️",
    category: "felszereles",
    speech:
      "Biciklizéshez és rollerezéshez mindig vedd fel a bukósisakot. Ez védi a fejedet, ha esetleg elesel."
  },
  {
    id: "roller-bicikli",
    title: "Roller és bicikli",
    text: "Rollerrel és biciklivel lassan, óvatosan közlekedj.",
    emoji: "🛴",
    category: "felszereles",
    speech:
      "Rollerrel és biciklivel mindig óvatosan, lassan közlekedj, és viseld a sisakot. A kerékpárúton is figyelj másokra."
  },

  {
    id: "buszmegallo",
    title: "Buszmegálló",
    text: "A buszmegállóban csendben, sorban várj. Ne menj az úttestre.",
    signId: "autobusz_megallohely",
    category: "helyszinek",
    speech:
      "A buszmegállóban csendben, sorban várakozz, ne szaladgálj, és ne menj ki az úttestre. Ott buszok és autók közlekednek."
  },
  {
    id: "vasuti-atjaro",
    title: "Vasúti átjáró",
    text: "Vasúti átjárónál mindig állj meg, nézz körül, és figyelj. Vonat jöhet.",
    signId: "vasuti_atjaro",
    category: "helyszinek",
    speech:
      "A vasúti átjárónál mindig meg kell állni, körülnézni és hallgatózni. A vonat gyors és nehéz, és nem tud hirtelen megállni."
  },

  {
    id: "veszelyes-helyek",
    title: "Veszélyes helyek",
    text: "Parkoló, úttest, vasúti sín: ezeken soha ne játssz.",
    emoji: "🚫",
    category: "veszelyek",
    speech:
      "A parkoló, az úttest és a vasúti sín veszélyes helyek. Ezeken soha ne játsszon a gyerek."
  },
  {
    id: "megkulonbozteto-jelzes",
    title: "Ha szirénát hallunk",
    text: "Megállunk, figyelünk, és hagyjuk elmenni a mentőt, rendőrt vagy tűzoltót.",
    emoji: "🚑",
    category: "veszelyek",
    speech:
      "Ha mentőt, rendőrautót vagy tűzoltót látsz villogó kék fénnyel és szirénával, állj meg biztonságos helyen, figyelj a felnőttre, ne lépj le az úttestre, és várd meg, amíg elhalad.",
    adultExplanation:
      "A megkülönböztető jelzést használó járművek számára elsőbbséget kell biztosítani. Óvodás gyermeknél a biztonságos megállás, a felnőtt követése és az úttestre lépés kerülése a fő üzenet."
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
