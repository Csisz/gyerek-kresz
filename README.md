# KRESZ Kaland Kuckó

Vite + React alapú, helyben futtatható magyar KRESZ tanuló, kvíz és gyakorló app óvodás gyermekeknek.

## Helyi fejlesztés

```bash
npm install
npm run dev
```

Alapértelmezetten helyi demo módban fut: nem igényel Base44 bejelentkezést, proxyt vagy backendet. A gyermekprofil, csillagok, jelvények és eredmények `localStorage`-ban tárolódnak.

Base44 auth későbbi visszakapcsolásához külön kell engedélyezni:

```bash
VITE_ENABLE_BASE44_AUTH=true
```

Base44 proxy későbbi visszakapcsolásához külön kell engedélyezni és backend URL-t kell adni:

```bash
VITE_ENABLE_BASE44_PROXY=true
VITE_BASE44_APP_BASE_URL=https://your-base44-backend.example
```

Ezek nélkül a Base44 auth és proxy kikapcsolva marad, a helyi demo mód pedig csendesen, backend nélkül fut.

## KRESZ tábla képek

A táblaadatok egyetlen forrása: `src/data/kreszSigns.js`.

A valós SVG/PNG fájlokat ide kell tenni:

```text
public/signs/
```

Ha egy kép hiányzik, az app gyerekbarát "Tábla képe hamarosan" helyettesítőt mutat. A várt fájlnevek és licencjegyzetek listája: `docs/SIGN_ASSETS.md`.
