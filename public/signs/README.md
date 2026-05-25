# KRESZ tábla képek

Ide kerüljenek a valós magyar KRESZ tábla SVG vagy PNG fájlok.

Az alkalmazás a `src/data/kreszSigns.js` adatbázis `filename` és `image` mezői alapján keresi a fájlokat, például:

- `public/signs/stop.svg`
- `public/signs/gyalogos-atkelohely.svg`
- `public/signs/behajtani-tilos.svg`

Ha egy kép még hiányzik, az app nem törik el: a felületen a "Tábla képe hamarosan" jelzésű, gyerekbarát helyettesítő jelenik meg.

Fontos: ha Wikimedia/Wikipedia vagy más külső forrás képeit másolod ide, minden egyes fájlnál külön ellenőrizni és dokumentálni kell a licencet és a forrás URL-t.
