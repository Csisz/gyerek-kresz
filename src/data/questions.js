// Magyar KRESZ kvízkérdések – 5 éves óvodásoknak
// Óvodai KRESZ-versenyhez igazított, képes, gyakorlati kérdések

export const questions = [
  // ─── JELZŐLÁMPÁK ────────────────────────────────────────────────────
  {
    id: "q1",
    text: "Mit jelent a piros lámpa a gyalogosnak?",
    speech: "Mit jelent a piros lámpa a gyalogosnak?",
    category: "jelzolampak",
    emoji: "🔴",
    signImage: null,
    options: [
      { text: "Megállok és várok", emoji: "✋", correct: true },
      { text: "Elindulok", emoji: "🏃", correct: false },
      { text: "Gyorsan átfutok", emoji: "💨", correct: false }
    ],
    explanation: "Helyes! Piros lámpánál mindig meg kell állni és várni, amíg zöld nem lesz!",
    wrongExplanation: "Nem baj! Piros lámpánál mindig meg kell állni. Veszélyes átmenni!"
  },
  {
    id: "q2",
    text: "Mit jelent a zöld lámpa a gyalogosnak?",
    speech: "Mit jelent a zöld lámpa a gyalogosnak?",
    category: "jelzolampak",
    emoji: "🟢",
    signImage: null,
    options: [
      { text: "Átmehetek, de körülnézek", emoji: "🚶", correct: true },
      { text: "Szaladok, mielőtt vált", emoji: "🏃", correct: false },
      { text: "Megállok", emoji: "✋", correct: false }
    ],
    explanation: "Ügyes! Zöld lámpánál átmehetsz, de azért mindig nézz körül is!",
    wrongExplanation: "Zöld lámpánál átmehetsz az úton, de azért nézz is körül, nehogy autó jöjjön!"
  },
  {
    id: "q3",
    text: "Mit jelent a sárga autós lámpa?",
    speech: "Mit jelent a sárga autós jelzőlámpa?",
    category: "jelzolampak",
    emoji: "🟡",
    signImage: null,
    options: [
      { text: "Megállunk, ha biztonságosan tudunk", emoji: "✋", correct: true },
      { text: "Szaladok gyorsan", emoji: "🏃", correct: false },
      { text: "Biciklizek tovább", emoji: "🚲", correct: false }
    ],
    explanation: "Így van! Sárga autós lámpánál megállunk, ha ezt biztonságosan meg tudjuk tenni.",
    wrongExplanation: "Sárga autós lámpánál nem gyorsítunk. Megállunk, ha biztonságosan meg tudunk állni."
  },
  {
    id: "q4",
    text: "Mikor indulhat el a gyalogos a zebrán?",
    speech: "Mikor indulhat el a gyalogos a zebrán?",
    category: "jelzolampak",
    emoji: "🚦",
    signImage: null,
    options: [
      { text: "Ha zöld és körülnéztem", emoji: "👀", correct: true },
      { text: "Azonnal, ha ott vagyok", emoji: "💨", correct: false },
      { text: "Ha dudál egy autó", emoji: "📯", correct: false }
    ],
    explanation: "Szuper! Mindig várjuk a zöld lámpát ÉS körülnézünk, mielőtt elindulunk!",
    wrongExplanation: "Emlékezz: zöld lámpa ÉS körülnézés – csak így szabad elindulni!"
  },

  // ─── GYALOGOS KÖZLEKEDÉS ─────────────────────────────────────────────
  {
    id: "q5",
    text: "Hol lehet szabályosan átkelni az úton?",
    speech: "Hol lehet szabályosan átkelni az úton?",
    category: "gyalogos",
    emoji: "🦓",
    signImage: null,
    options: [
      { text: "A zebrán (gyalogátkelőn)", emoji: "🦓", correct: true },
      { text: "Autók között, ahol éppen akarok", emoji: "🚗", correct: false },
      { text: "A kanyarban", emoji: "↩️", correct: false }
    ],
    explanation: "Ügyes! Az úton mindig a zebrán, a gyalogos-átkelőhelyen kell átkelni!",
    wrongExplanation: "Az úton csak a zebrán szabad átkelni. Máshol nagyon veszélyes!"
  },
  {
    id: "q6",
    text: "Hogyan nézzünk körül a zebra előtt?",
    speech: "Hogyan nézzünk körül, mielőtt átkelünk a zebrán?",
    category: "gyalogos",
    emoji: "👀",
    signImage: null,
    options: [
      { text: "Balra – jobbra – újra balra", emoji: "👀", correct: true },
      { text: "Csak egyszer balra", emoji: "👈", correct: false },
      { text: "Felfelé nézek", emoji: "⬆️", correct: false }
    ],
    explanation: "Szuper! Balra nézek, jobbra nézek, majd újra balra – így biztonságos!",
    wrongExplanation: "Emlékezz: balra nézünk, jobbra nézünk, majd újra balra nézünk – mindkét irányból jöhetnek autók!"
  },
  {
    id: "q7",
    text: "Mit teszel, ha kigurul a labdád az útra?",
    speech: "Mit teszel, ha kigurul a labdád az útra?",
    category: "gyalogos",
    emoji: "⚽",
    signImage: null,
    options: [
      { text: "Kérek segítséget egy felnőttől", emoji: "🙋", correct: true },
      { text: "Kiszaladok érte az útra", emoji: "🏃", correct: false },
      { text: "Hagyom ott és sírok", emoji: "😢", correct: false }
    ],
    explanation: "Nagyon ügyes! Soha ne szaladj az útra – kérj mindig felnőtt segítséget!",
    wrongExplanation: "Soha ne szaladj ki az útra! A labdánál fontosabb vagy te! Kérj felnőtt segítséget!"
  },
  {
    id: "q8",
    text: "Hol közlekedjen gyalogosan a gyermek?",
    speech: "Hol kell gyalogosan közlekedni?",
    category: "gyalogos",
    emoji: "🚶",
    signImage: null,
    options: [
      { text: "A járdán", emoji: "🚶", correct: true },
      { text: "Az úttesten, az autók között", emoji: "🚗", correct: false },
      { text: "A fűben, a kerítés mellett", emoji: "🌿", correct: false }
    ],
    explanation: "Így van! Gyalogosan mindig a járdán kell közlekedni!",
    wrongExplanation: "Gyalogosan mindig a járdán közlekedünk. Az úttest az autóké!"
  },
  {
    id: "q9",
    text: "Szabad-e az úttesten játszani?",
    speech: "Szabad az úttesten játszani?",
    category: "gyalogos",
    emoji: "🚫",
    signImage: null,
    options: [
      { text: "Nem, tilos! Ott autók mennek!", emoji: "🚫", correct: true },
      { text: "Igen, ha nincs autó", emoji: "😁", correct: false },
      { text: "Igen, ha lassan megyek", emoji: "🐌", correct: false }
    ],
    explanation: "Így van! Az úttesten soha nem szabad játszani, ott autók közlekednek!",
    wrongExplanation: "Az úttesten tilos játszani! Mindig jöhet egy autó, amit nem látunk!"
  },
  {
    id: "q10",
    text: "Mit csinálsz a zebra előtt, ha nincs lámpa?",
    speech: "Mit csinálsz a zebra előtt, ha nincs jelzőlámpa?",
    category: "gyalogos",
    emoji: "🦓",
    signImage: null,
    options: [
      { text: "Megállok, körülnézek, lassan átkelek", emoji: "👀", correct: true },
      { text: "Átszaladok gyorsan", emoji: "💨", correct: false },
      { text: "Várok, amíg valaki kísér", emoji: "👨‍👦", correct: false }
    ],
    explanation: "Pontosan! Megállok, jól körülnézek (bal-jobb-bal), és csak ha szabad, megyek át!",
    wrongExplanation: "Lámpa nélküli zebrán: megállok, bal-jobb-bal körülnézek, aztán lassan, biztonságosan kelek át!"
  },

  // ─── TÁBLÁK ──────────────────────────────────────────────────────────
  {
    id: "q11",
    text: "Melyik tábla mutatja a gyalogos átkelőhelyet?",
    speech: "Melyik tábla jelzi a gyalogos átkelőhelyet, vagyis a zebrát?",
    category: "tablak",
    emoji: "🪧",
    signId: "gyalogos_atkelohely",
    options: [
      { text: "Kék tábla fehér gyalogossal", emoji: "🚶", correct: true },
      { text: "Piros kör fehér sávval", emoji: "⛔", correct: false },
      { text: "Sárga háromszög felkiáltójellel", emoji: "⚠️", correct: false }
    ],
    explanation: "Helyes! A kék négyzetes tábla fehér gyalogos alakkal jelzi az átkelőhelyet!",
    wrongExplanation: "A gyalogos átkelőhely tábláján kék alapon fehér gyalogos alak látható!"
  },
  {
    id: "q12",
    text: "Mit jelent a STOP tábla?",
    speech: "Mit jelent a STOP tábla?",
    category: "tablak",
    emoji: "🛑",
    signId: "stop_elsobbsegadas_kotelezo",
    options: [
      { text: "Teljesen meg kell állni!", emoji: "✋", correct: true },
      { text: "Lassabban kell menni", emoji: "🐌", correct: false },
      { text: "Parkolni szabad", emoji: "🅿️", correct: false }
    ],
    explanation: "Helyes! A STOP tábla azt jelenti: teljesen meg kell állni, nem csak lassítani!",
    wrongExplanation: "A STOP tábla TELJES megállást jelent! Nem elég lassítani, meg kell állni!"
  },
  {
    id: "q13",
    text: "Melyik tábla jelenti azt, hogy 'erre nem szabad bemenni'?",
    speech: "Melyik tábla jelenti azt, hogy erre nem szabad bemenni?",
    category: "tablak",
    emoji: "🪧",
    signId: "behajtani_tilos",
    options: [
      { text: "Behajtani tilos (piros kör, fehér sáv)", emoji: "⛔", correct: true },
      { text: "Gyalogos átkelőhely (kék, gyalogos)", emoji: "🚶", correct: false },
      { text: "Kerékpárút (kék kör, bicikli)", emoji: "🚲", correct: false }
    ],
    explanation: "Pontosan! A behajtani tilos tábla piros körben fehér vízszintes sáv!",
    wrongExplanation: "A behajtani tilos tábla piros körben fehér vízszintes sávval jelzi, hogy erre nem szabad bemenni!"
  },
  {
    id: "q14",
    text: "Hol csak a kerékpárosok közlekedhetnek?",
    speech: "Hol csak a kerékpárosok közlekedhetnek?",
    category: "tablak",
    emoji: "🚲",
    signId: "kerekparut",
    options: [
      { text: "A kerékpárúton (kék kör, bicikli)", emoji: "🚲", correct: true },
      { text: "A gyalogúton", emoji: "🚶", correct: false },
      { text: "A buszsávban", emoji: "🚌", correct: false }
    ],
    explanation: "Ügyes! A kék körös, biciklis tábla jelzi a kerékpárutat!",
    wrongExplanation: "A kerékpárúton (kék kör, fehér bicikli) csak kerékpárosok közlekedhetnek!"
  },
  {
    id: "q15",
    text: "Mit jelez a háromszög alakú sárga-piros tábla?",
    speech: "Mit jelez a sárga háromszög alakú piros keretes tábla?",
    category: "tablak",
    emoji: "⚠️",
    signId: "egyeb_veszely",
    options: [
      { text: "Veszélyre figyelmeztet", emoji: "⚠️", correct: true },
      { text: "Gyorsítani kell", emoji: "💨", correct: false },
      { text: "Parkolni szabad", emoji: "🅿️", correct: false }
    ],
    explanation: "Szuper! A háromszög alakú sárga tábla mindig veszélyre figyelmeztet!",
    wrongExplanation: "A sárga háromszög piros szegéllyel mindig veszélyre figyelmeztet – óvatosan kell közlekedni!"
  },
  {
    id: "q16",
    text: "Hova néz a gyalogos, ha zebrán akar átkelni?",
    speech: "Hova kell nézni a zebra előtt?",
    category: "tablak",
    emoji: "🦓",
    signImage: null,
    options: [
      { text: "Balra, jobbra, majd újra balra", emoji: "👀", correct: true },
      { text: "Csak felfelé, hogy nem esik-e eső", emoji: "⬆️", correct: false },
      { text: "Csukja be a szemét", emoji: "🙈", correct: false }
    ],
    explanation: "Helyes! Bal-jobb-bal körülnézés – így látjuk, hogy jön-e autó mindkét irányból!",
    wrongExplanation: "Zebrán átkelés előtt: bal – jobb – bal, hogy biztos legyen, nem jön senki!"
  },

  // ─── VÉDŐFELSZERELÉSEK ────────────────────────────────────────────────
  {
    id: "q17",
    text: "Mire való a bukósisak?",
    speech: "Mire való a bukósisak?",
    category: "felszereles",
    emoji: "⛑️",
    signImage: null,
    options: [
      { text: "Védi a fejemet biciklizéskor", emoji: "⛑️", correct: true },
      { text: "Csak díszítésnek van", emoji: "🎭", correct: false },
      { text: "Tárolni lehet benne holmikat", emoji: "🎒", correct: false }
    ],
    explanation: "Pontosan! A bukósisak védi a fejedet biciklizés és rollerezés közben!",
    wrongExplanation: "A bukósisak a fejedet védi! Biciklizéskor és rollerezéskor mindig fel kell venni!"
  },
  {
    id: "q18",
    text: "Mit kell felvenni rollerezés előtt?",
    speech: "Mit kell felvenni rollerezés előtt a biztonság érdekében?",
    category: "felszereles",
    emoji: "🛴",
    signImage: null,
    options: [
      { text: "Bukósisakot és láthatósági mellényt", emoji: "⛑️", correct: true },
      { text: "Semmit, úgyis jó lesz", emoji: "🤷", correct: false },
      { text: "Esernyőt", emoji: "☂️", correct: false }
    ],
    explanation: "Szuper! Mindig sisakot és lehetőleg láthatósági mellényt vegyél fel!",
    wrongExplanation: "Rollerezéshez kötelező a bukósisak és ajánlott a láthatósági mellény – ezek védenek meg!"
  },
  {
    id: "q19",
    text: "Mire jó a sárga láthatósági mellény?",
    speech: "Mire jó a sárga láthatósági mellény?",
    category: "felszereles",
    emoji: "🦺",
    signImage: null,
    options: [
      { text: "Hogy az autósok jól lássanak engem", emoji: "👁️", correct: true },
      { text: "Mert jól áll", emoji: "🌈", correct: false },
      { text: "Mert meleg tartja a hát", emoji: "🔥", correct: false }
    ],
    explanation: "Pontosan! A mellény segít, hogy az autósok jól lássanak téged, különösen sötétben!",
    wrongExplanation: "A láthatósági mellény azért van, hogy az autósok jól lássanak minket – különösen este!"
  },

  // ─── HELYSZÍNEK ───────────────────────────────────────────────────────
  {
    id: "q20",
    text: "Hol várakozunk a buszra?",
    speech: "Hol várakozunk a buszra?",
    category: "helyszinek",
    emoji: "🚌",
    signId: "autobusz_megallohely",
    options: [
      { text: "A buszmegállóban, a peron mögött", emoji: "🚏", correct: true },
      { text: "Az úttesten, az autók között", emoji: "🛣️", correct: false },
      { text: "A kertben", emoji: "🌳", correct: false }
    ],
    explanation: "Ügyes! A buszra a buszmegállóban, a peron mögött várakozunk biztonságosan!",
    wrongExplanation: "A buszra mindig a buszmegállóban kell várakozni, a kijárt sávtól biztonságos távolságra!"
  },
  {
    id: "q21",
    text: "Hol ne játsszon a gyerek soha?",
    speech: "Hol ne játsszon a gyerek soha?",
    category: "helyszinek",
    emoji: "🚫",
    signImage: null,
    options: [
      { text: "Az úttesten és a parkolóban", emoji: "🚗", correct: true },
      { text: "A játszótéren", emoji: "🛝", correct: false },
      { text: "A kertben", emoji: "🌳", correct: false }
    ],
    explanation: "Így van! Az úttesten és a parkolóban nagyon veszélyes játszani, autók járnak ott!",
    wrongExplanation: "Az úttest és a parkoló veszélyes helyek! Ott soha ne játssz, csak a kijelölt játszótereken!"
  },

  // ─── HELYZETEK / VESZÉLYEK ────────────────────────────────────────────
  {
    id: "q22",
    text: "Mit teszel, ha szirénázó járművet hallasz?",
    speech: "Mit teszel, ha mentőt, rendőrautót vagy tűzoltót hallasz szirénázni?",
    category: "veszelyek",
    emoji: "🚑",
    signImage: null,
    options: [
      { text: "Megállok biztonságos helyen és figyelek", emoji: "✋", correct: true },
      { text: "Lelépek az úttestre megnézni", emoji: "🚫", correct: false },
      { text: "Futni kezdek a hang felé", emoji: "🏃", correct: false }
    ],
    explanation: "Ügyes vagy! Megállunk, figyelünk a felnőttre, és hagyjuk elhaladni.",
    wrongExplanation: "Ha szirénát hallunk, nem lépünk le az úttestre. Megállunk biztonságos helyen, és figyelünk."
  },
  {
    id: "q23",
    text: "Közlekedés közben szabad-e telefonozni?",
    speech: "Szabad közlekedés közben telefonon játszani?",
    category: "veszelyek",
    emoji: "📱",
    signImage: null,
    options: [
      { text: "Nem, mert nem figyelünk az útra", emoji: "🚫", correct: true },
      { text: "Igen, ha rövid ideig", emoji: "📱", correct: false },
      { text: "Igen, ha vigyázunk", emoji: "😊", correct: false }
    ],
    explanation: "Helyes! Telefonozás közben nem figyelünk az útra – ez nagyon veszélyes!",
    wrongExplanation: "Közlekedés közben ne telefonozz! Ha nem figyelsz, nem látod az autókat és a veszélyeket!"
  },
  {
    id: "q24",
    text: "Milyen irányba nézel először zebrán való átkeléskor?",
    speech: "Milyen irányba nézel először zebrán való átkeléskor?",
    category: "gyalogos",
    emoji: "👈",
    signImage: null,
    options: [
      { text: "Balra – mert ott jönnek az autók felém", emoji: "👈", correct: true },
      { text: "Jobbra", emoji: "👉", correct: false },
      { text: "Egyenesen előre", emoji: "⬆️", correct: false }
    ],
    explanation: "Pontosan! Először balra nézünk, mert Magyarországon arra jönnek az autók felénk!",
    wrongExplanation: "Magyarországon az autók jobb oldalon közlekednek, ezért előbb balra kell nézni!"
  },
  {
    id: "q25",
    text: "Az autóban hol kell ülni egy 5 éves gyermeknek?",
    speech: "Az autóban hol kell ülni egy 5 éves gyermeknek?",
    category: "felszereles",
    emoji: "🚗",
    signImage: null,
    options: [
      { text: "Gyermekülésben, becsatolva", emoji: "💺", correct: true },
      { text: "Az anyukája ölében", emoji: "👩", correct: false },
      { text: "Ahol akar", emoji: "🤷", correct: false }
    ],
    explanation: "Szuper! Mindig gyermekülésben, becsatolva kell ülni – ez véd meg baleset esetén!",
    wrongExplanation: "Autóban kötelező a gyermekülés és a biztonsági öv! Ez véd meg, ha valami történik!"
  },

  // ─── BIZTONSÁGOS HELYZETEK FELISMERÉSE ──────────────────────────────
  {
    id: "q26",
    text: "Melyik a biztonságos viselkedés az utcán?",
    speech: "Melyik a biztonságos viselkedés az utcán?",
    category: "biztonsag",
    emoji: "✅",
    signImage: null,
    options: [
      { text: "Járdán megyek, nem szaladok az úttestre", emoji: "🚶", correct: true },
      { text: "Az úttesten megyek, mert gyorsabb", emoji: "🛣️", correct: false },
      { text: "Az autók között szlalomozok", emoji: "🚗", correct: false }
    ],
    explanation: "Helyes! A járdán való haladás és az úttest kerülése a legbiztonságosabb!",
    wrongExplanation: "Mindig a járdán közlekedünk! Az úttest az autóké, ott nagyon veszélyes gyalogolni!"
  },
  {
    id: "q27",
    text: "Mit jelent a kék kör közepén fehér bicikli?",
    speech: "Mit jelent a kék kör közepén lévő fehér bicikli?",
    category: "tablak",
    emoji: "🔵",
    signId: "kerekparut",
    options: [
      { text: "Kerékpárút – csak bicikliseknek", emoji: "🚲", correct: true },
      { text: "Bicikliparkoló", emoji: "🅿️", correct: false },
      { text: "Bicikli javítóhely", emoji: "🔧", correct: false }
    ],
    explanation: "Ügyes! A kék körös fehér bicikli tábla a kerékpárutat jelöli!",
    wrongExplanation: "A kék körben lévő fehér bicikli a kerékpárutat jelzi – ott csak biciklisek mehetnek!"
  },
  {
    id: "q28",
    text: "Miért fontos megállni a STOP vonalnál?",
    speech: "Miért fontos megállni a STOP vonalnál?",
    category: "tablak",
    emoji: "🛑",
    signId: "stop_elsobbsegadas_kotelezo",
    options: [
      { text: "Mert más autóknak elsőbbségük van", emoji: "🚗", correct: true },
      { text: "Mert pihenni kell", emoji: "😴", correct: false },
      { text: "Mert a tábla piros", emoji: "🔴", correct: false }
    ],
    explanation: "Pontosan! A STOP vonalnál azért állunk meg, mert más járműveknek elsőbbségük van!",
    wrongExplanation: "STOP tábla: teljesen meg kell állni, mert más útirányból jövő autóknak elsőbbségük van!"
  },
  {
    id: "q29",
    text: "Melyik tábla figyelmeztet, hogy vonat jár erre?",
    speech: "Melyik tábla figyelmeztet, hogy vonat jár erre?",
    category: "tablak",
    emoji: "🚂",
    signId: "vasuti_atjaro",
    options: [
      { text: "A piros X tábla (András-kereszt)", emoji: "❌", correct: true },
      { text: "A piros háromszög", emoji: "⚠️", correct: false },
      { text: "A kék négyzet", emoji: "🟦", correct: false }
    ],
    explanation: "Helyes! A piros X alakú tábla (András-kereszt) jelzi a vasúti átjárót!",
    wrongExplanation: "A vasúti átjárónál piros X (András-kereszt) tábla figyelmeztet – ott vonat járhat!"
  },
  {
    id: "q30",
    text: "Mi az első teendő autóbalesetkor?",
    speech: "Mi az első teendő, ha autóbaleset történik?",
    category: "veszelyek",
    emoji: "🆘",
    signImage: null,
    options: [
      { text: "Felnőttnek vagy mentőnek szólni (112)", emoji: "📞", correct: true },
      { text: "Odafutnék nézelődni", emoji: "👀", correct: false },
      { text: "Hazamegyek és nem szólok senkinek", emoji: "🏠", correct: false }
    ],
    explanation: "Nagyon ügyes! Balesetkor azonnal felnőttnek kell szólni, vagy ha nincs felnőtt, a 112-t hívni!",
    wrongExplanation: "Balesetkor azonnal felnőttnek szólj! A segélyhívó száma: 112!"
  },

  // ─── TÁBLAFELISMERŐ KÉRDÉSEK ─────────────────────────────────────────
  {
    id: "q31",
    text: "Melyik tábla mutatja, hogy 'engedd előre a másikat'?",
    speech: "Melyik tábla jelenti azt, hogy engedd előre a másikat?",
    category: "tablak",
    emoji: "🔻",
    signId: "elsobbsegadas_kotelezo",
    options: [
      { text: "Fehér csúcsával lefelé mutató háromszög piros szegéllyel", emoji: "🔻", correct: true },
      { text: "Piros nyolcszög STOP felirattal", emoji: "🛑", correct: false },
      { text: "Kék kör felfelé mutató nyíllal", emoji: "⬆️", correct: false }
    ],
    explanation: "Pontosan! Az elsőbbségadás kötelező tábla fehér csúcsával lefelé mutató háromszög!",
    wrongExplanation: "Az elsőbbségadás kötelező tábla: fehér háromszög csúcsával lefelé, piros szegéllyel!"
  },
  {
    id: "q32",
    text: "Ha az útkereszteződésnél sárga háromszög tábla van, mit kell tenni?",
    speech: "Ha az útkereszteződésnél sárga háromszög tábla van, mit kell tenni?",
    category: "tablak",
    emoji: "⚠️",
    signId: "utkeresztezes",
    options: [
      { text: "Lassítani és figyelni az oldalról jövőkre", emoji: "🐌", correct: true },
      { text: "Gyorsítani, hogy gyorsan átérjek", emoji: "💨", correct: false },
      { text: "Megállni és visszafordulni", emoji: "↩️", correct: false }
    ],
    explanation: "Helyes! A veszélyt jelző tábla lassításra és fokozott figyelemre int!",
    wrongExplanation: "Sárga háromszög tábla = veszély közeleg! Lassíts és figyelj az oldalról jövőkre!"
  },
  {
    id: "q33",
    text: "Hol nem szabad biciklizni?",
    speech: "Hol nem szabad biciklizni?",
    category: "gyalogos",
    emoji: "🚲",
    signId: "gyalogut",
    options: [
      { text: "A gyalogúton (ahol csak gyalogosok mehetnek)", emoji: "🚶", correct: true },
      { text: "A kerékpárúton", emoji: "🚲", correct: false },
      { text: "A kijelölt parkban", emoji: "🌳", correct: false }
    ],
    explanation: "Pontosan! A gyalogúton (kék körös gyalogos tábla) tilos biciklizni!",
    wrongExplanation: "A gyalogút csak gyalogosoknak van! Biciklivel csak a kerékpárúton szabad menni!"
  },
  {
    id: "q34",
    text: "Mit jelent a kék négyzetes tábla fehér 'P' betűvel?",
    speech: "Mit jelent a kék négyzetes tábla fehér P betűvel?",
    category: "tablak",
    emoji: "🅿️",
    signId: "parkolo",
    options: [
      { text: "Parkoló – ide állhatnak az autók", emoji: "🅿️", correct: true },
      { text: "Posta – itt feladhatunk csomagot", emoji: "📮", correct: false },
      { text: "Piac – itt lehet vásárolni", emoji: "🛒", correct: false }
    ],
    explanation: "Ügyes! A kék P tábla a parkolót jelzi, de a parkoló is veszélyes hely gyereknek!",
    wrongExplanation: "A kék P tábla parkolót jelöl. De ne játssz a parkolóban, mert ott autók mozognak!"
  },
  {
    id: "q35",
    text: "Miért kell minden utat a járdán végigmenni?",
    speech: "Miért kell minden utat a járdán végigmenni?",
    category: "gyalogos",
    emoji: "🚶",
    signImage: null,
    options: [
      { text: "Mert a járda a gyalogosoké, az úttest az autóké", emoji: "🚶", correct: true },
      { text: "Mert a járda puhábbik", emoji: "🛏️", correct: false },
      { text: "Mert az úttest csúszós", emoji: "🧊", correct: false }
    ],
    explanation: "Pontosan! A járda a gyalogosoké – ott biztonságban vagyunk az autóktól!",
    wrongExplanation: "A járda azért van, hogy a gyalogosok biztonságban legyenek az autóktól. Mindig a járdán menj!"
  },

  // ─── BIZTONSÁGOS vs VESZÉLYES HELYZETEK ────────────────────────────
  {
    id: "q36",
    text: "Melyik viselkedés biztonságos a busz megállásánál?",
    speech: "Melyik viselkedés biztonságos a buszra várásnál?",
    category: "biztonsag",
    emoji: "🚌",
    signImage: null,
    options: [
      { text: "Sorban állok, nem szaladgálok az úttesten", emoji: "🚶", correct: true },
      { text: "Az út szélére állok, hogy előbb szállhassak fel", emoji: "😈", correct: false },
      { text: "A mögöttem lévő autóhoz megyek közelebb nézni", emoji: "🚗", correct: false }
    ],
    explanation: "Helyes! Buszmegállóban csendben, sorban állunk és nem szaladgálunk!",
    wrongExplanation: "Buszmegállóban mindig a megálló mögött, biztonságosan várjunk – ne menjünk az útra!"
  },
  {
    id: "q37",
    text: "Melyik a veszélyes helyzet biciklizéskor?",
    speech: "Melyik a veszélyes helyzet biciklizéskor?",
    category: "biztonsag",
    emoji: "⚠️",
    signImage: null,
    options: [
      { text: "Sisak nélkül, gyorsan menni a forgalomban", emoji: "🚫", correct: true },
      { text: "Sisak felvenni és lassan haladni", emoji: "⛑️", correct: false },
      { text: "A kerékpárúton menni", emoji: "🚲", correct: false }
    ],
    explanation: "Pontosan! Sisak nélkül és gyorsan menni nagyon veszélyes – ez a legrosszabb kombináció!",
    wrongExplanation: "Sisak nélkül biciklizni nagyon veszélyes! Mindig vedd fel a sisakot és menj lassan!"
  },
  {
    id: "q38",
    text: "Vasúti átjárón átkelés előtt mit teszel?",
    speech: "Vasúti átjárón átkelés előtt mit kell tenni?",
    category: "tablak",
    emoji: "🚂",
    signId: "vasuti_atjaro",
    options: [
      { text: "Megállok, körülnézek, meghallgatom, jön-e vonat", emoji: "👂", correct: true },
      { text: "Gyorsan átfutok, hogy ne érjen a vonat", emoji: "💨", correct: false },
      { text: "Megvárom, amíg az autó átmegy, aztán én is", emoji: "🚗", correct: false }
    ],
    explanation: "Szuper! Vasúti átjárónál: megállok, nézek, hallgatok – vonat jöhet gyorsan és csendesen!",
    wrongExplanation: "Vasúti átjárónál MINDIG meg kell állni, körülnézni és meghallgatni! A vonat gyors és nehéz!"
  },
  {
    id: "q39",
    text: "Melyik az iskolás út veszélyes része?",
    speech: "Melyik az iskolás út veszélyes részlete?",
    category: "veszelyek",
    emoji: "🎒",
    signImage: null,
    options: [
      { text: "Az útkereszteződés, ha nincs lámpa", emoji: "⚠️", correct: true },
      { text: "A játszótér kerítése mellett", emoji: "🛝", correct: false },
      { text: "Az óvoda bejárata előtt", emoji: "🏫", correct: false }
    ],
    explanation: "Pontosan! Az útkereszteződés lámpa nélkül az egyik legveszélyesebb hely!",
    wrongExplanation: "Útkereszteződésnél, különösen lámpa nélkül, mindig nagyon figyelj! Ott sok irányból jönnek az autók!"
  },
  {
    id: "q40",
    text: "Melyik a helyes sorrend zebrán való átkeléskor?",
    speech: "Mi a helyes sorrend zebrán való átkeléskor?",
    category: "gyalogos",
    emoji: "🦓",
    signImage: null,
    options: [
      { text: "Megállok – körülnézek – lassan átmegyek", emoji: "✅", correct: true },
      { text: "Futok – átérek – visszanézek", emoji: "🏃", correct: false },
      { text: "Átmegyek – körülnézek – megállok", emoji: "❌", correct: false }
    ],
    explanation: "Helyes! A biztonságos sorrend: MEGÁLLOK → KÖRÜLNÉZEK → LASSAN ÁTMEGYEK!",
    wrongExplanation: "A zebra helyes rendje: 1. Megállok a szélén! 2. Bal-jobb-bal nézek! 3. Lassan átkelek!"
  },

  // ─── EXTRA KÉRDÉSEK ────────────────────────────────────────────────────
  {
    id: "q41",
    text: "Melyik szín esetén mehet a gyalogos?",
    speech: "Melyik szín esetén mehet a gyalogos a jelzőlámpánál?",
    category: "jelzolampak",
    emoji: "🚦",
    signImage: null,
    options: [
      { text: "Zöld – de csak ha körülnéztem", emoji: "🟢", correct: true },
      { text: "Piros", emoji: "🔴", correct: false },
      { text: "Sárga", emoji: "🟡", correct: false }
    ],
    explanation: "Pontosan! Zöldnél mehetünk, de körülnézés után!",
    wrongExplanation: "Csak zöld lámpa esetén mehetünk – és akkor is körülnézünk!"
  },
  {
    id: "q42",
    text: "Mi a teendő, ha elveszünk az utcán?",
    speech: "Mi a teendő, ha elveszünk az utcán?",
    category: "veszelyek",
    emoji: "😟",
    signImage: null,
    options: [
      { text: "Maradok egy helyen és szólok egy megbízható felnőttnek", emoji: "🙋", correct: true },
      { text: "Rohangálok és kiabálok az úttesten", emoji: "😱", correct: false },
      { text: "Elindulok egyedül keresgélni", emoji: "🚶", correct: false }
    ],
    explanation: "Nagyon okos! Ha elveszünk, álljunk meg és kérjünk segítséget egy biztonságos helyen!",
    wrongExplanation: "Ha elvesztél: maradj nyugodt, menj egy biztonságos helyre (pl. bolt, rendőr) és kérj segítséget!"
  },
  {
    id: "q43",
    text: "Melyik tábla mutatja a gyermekek jelenlétét?",
    speech: "Melyik tábla figyelmeztet arra, hogy gyermekek közlekednek ezen a területen?",
    category: "tablak",
    emoji: "👧",
    signId: "gyermekek",
    options: [
      { text: "Sárga háromszög gyermek alakkal", emoji: "⚠️", correct: true },
      { text: "Kék kör gyalogos alakkal", emoji: "🔵", correct: false },
      { text: "Piros nyolcszög STOP felirattal", emoji: "🛑", correct: false }
    ],
    explanation: "Pontosan! A sárga háromszögben lévő gyermek alak jelzi az iskolák, óvodák közelségét!",
    wrongExplanation: "A gyermekek veszélyt jelző tábla: sárga háromszög, benne gyermekek alakja!"
  },
  {
    id: "q44",
    text: "Melyik eszköz kötelező a kerékpározáshoz Magyarországon este?",
    speech: "Melyik eszköz kötelező este kerékpározáshoz Magyarországon?",
    category: "felszereles",
    emoji: "🌙",
    signImage: null,
    options: [
      { text: "Első és hátsó lámpa, valamint visszaverő", emoji: "💡", correct: true },
      { text: "Csak a bukósisak", emoji: "⛑️", correct: false },
      { text: "Semmi extra, ha lassan megyek", emoji: "🤷", correct: false }
    ],
    explanation: "Helyes! Este kerékpározáshoz lámpa és visszaverő is kell, hogy mások lássanak!",
    wrongExplanation: "Este biciklizéshez kötelező a lámpa (elöl fehér, hátul piros) és a visszaverő eszköz!"
  },
  {
    id: "q45",
    text: "Melyik viselkedés helyes az autóban?",
    speech: "Melyik a helyes viselkedés autóban?",
    category: "felszereles",
    emoji: "🚗",
    signImage: null,
    options: [
      { text: "Gyermekülésben ülök, becsatolva", emoji: "💺", correct: true },
      { text: "Az anyukám ölében ülök", emoji: "👩", correct: false },
      { text: "A csomagtartóban ülök", emoji: "🎒", correct: false }
    ],
    explanation: "Szuper! Autóban mindig gyermekülésben, biztonsági övvel becsatolva kell ülni!",
    wrongExplanation: "Autóban a gyermekülés kötelező! Ez véd meg, ha valami történik az úton!"
  },
  {
    id: "q46",
    text: "Mit jelent a 'lakott terület kezdete' tábla az autósoknak?",
    speech: "Mit jelent a lakott terület kezdete tábla az autósoknak?",
    category: "tablak",
    emoji: "🏘️",
    signId: "lakott_terulet_kezdete",
    options: [
      { text: "Lassítani kell, maximum 50 km/h a sebesség", emoji: "🐌", correct: true },
      { text: "Gyorsítani lehet", emoji: "💨", correct: false },
      { text: "Le kell állítani a motort", emoji: "🔇", correct: false }
    ],
    explanation: "Pontosan! Lakott területen belül az autóknak lassan, max. 50 km/h-val kell haladni!",
    wrongExplanation: "Lakott terület kezdeténél az autók kötelezően lelassítanak – ezért biztonságosabb ott az utca!"
  },
  {
    id: "q47",
    text: "Mi az andráskereszt?",
    speech: "Mi az andráskereszt és hol látjuk?",
    category: "tablak",
    emoji: "❌",
    signId: "vasuti_atjaro",
    options: [
      { text: "Piros X tábla a vasúti átjárónál", emoji: "❌", correct: true },
      { text: "Fehér plusz jel az egészségügynél", emoji: "➕", correct: false },
      { text: "Sárga csillag az útkereszteződésnél", emoji: "⭐", correct: false }
    ],
    explanation: "Helyes! Az András-kereszt a piros X alakú tábla a vasúti átjárónál!",
    wrongExplanation: "Az András-kereszt a vasúti átjárónál lévő piros X tábla – ott MINDIG meg kell állni!"
  },
  {
    id: "q48",
    text: "Melyik magatartás a helyes, ha az autó elsőbbséget ad neked a zebrán?",
    speech: "Melyik a helyes magatartás, ha az autó elsőbbséget ad neked a zebrán?",
    category: "gyalogos",
    emoji: "🦓",
    signImage: null,
    options: [
      { text: "Megköszönöm és gyorsan, egyenesen átmegyek", emoji: "👍", correct: true },
      { text: "Lassan sétálok és nézem a telefont", emoji: "📱", correct: false },
      { text: "Visszaintegetek és elmegyek másik irányba", emoji: "👋", correct: false }
    ],
    explanation: "Szuper! Ha az autó vár, köszönöm és gyorsan, egyenesen átkelek a zebrán!",
    wrongExplanation: "Ha az autós vár rád: integess köszönetet, majd gyorsan, egyenesen menj át a zebrán!"
  },
  {
    id: "q49",
    text: "Mit jelent a 'gyalog- és kerékpárút' tábla?",
    speech: "Mit jelent a gyalog és kerékpárút tábla?",
    category: "tablak",
    emoji: "🚶🚲",
    signId: "gyalog_es_kerekparut",
    options: [
      { text: "Gyalogosok és biciklisek is használhatják", emoji: "✅", correct: true },
      { text: "Csak bicikliseknek van", emoji: "🚲", correct: false },
      { text: "Tilos bemenni", emoji: "⛔", correct: false }
    ],
    explanation: "Pontosan! Ezen az úton gyalogosok és kerékpárosok együtt közlekedhetnek – de figyelni kell egymásra!",
    wrongExplanation: "A gyalog- és kerékpárúton mindenki mehet – de kerékpáros és gyalogos egyaránt vigyáz a másikra!"
  },
  {
    id: "q50",
    text: "Melyik magatartás a legbiztonságosabb sötétedés után?",
    speech: "Melyik magatartás a legbiztonságosabb, ha sötét van és gyalogolsz?",
    category: "felszereles",
    emoji: "🌙",
    signImage: null,
    options: [
      { text: "Láthatósági mellényt veszek fel vagy fényvisszaverőt hordok", emoji: "🦺", correct: true },
      { text: "Feketében megyek, hogy ne lássanak", emoji: "🖤", correct: false },
      { text: "Gyorsan futok, hogy hamar hazaérjek", emoji: "🏃", correct: false }
    ],
    explanation: "Szuper! Sötétben a fényvisszaverő eszközök és a láthatósági mellény segítenek, hogy az autósok lássanak!",
    wrongExplanation: "Sötétben mindig vegyél fel valami fényvisszaverőt vagy mellényt – hogy az autósok lássanak téged!"
  }
];

export const questionCategories = [
  { id: "jelzolampak", name: "Jelzőlámpák", emoji: "🚦" },
  { id: "gyalogos", name: "Gyalogos közlekedés", emoji: "🚶" },
  { id: "felszereles", name: "Védőfelszerelések", emoji: "🦺" },
  { id: "tablak", name: "KRESZ táblák", emoji: "🪧" },
  { id: "veszelyek", name: "Veszélyek", emoji: "⚠️" },
  { id: "biztonsag", name: "Biztonságos helyzetek", emoji: "✅" },
  { id: "helyszinek", name: "Helyszínek", emoji: "🏘️" }
];
