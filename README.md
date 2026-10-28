# Zaslon – OŠ Ludina

Stranica za TV u holu: veliki sat, stanje nastave (koji je sat, koliko je ostalo),
rasporedi razreda koji se izmjenjuju, temperatura sa školske meteostanice i obavijesti.

## Što se gdje mijenja

| Što želiš promijeniti | Gdje |
|---|---|
| Novi raspored razreda | mapa `slike/` – učitaj novu sliku **s istim imenom** (npr. `6b.jpg`) |
| Dodati ili maknuti sliku iz izmjene, složiti više slika na jedan slajd (`5a.jpg + 6a.jpg`) | `slike.txt` |
| Obavijesti na dnu ekrana | `obavijesti.txt` |
| Satnica, trajanje slika, ključ za školsku stanicu, koordinate za rezervnu temperaturu | `postavke.js` |

Promjene se na TV-u pojave same:
- obavijesti i popis slika – za najviše ~15 minuta
- nova slika s istim imenom – za najviše ~1 sat
- promjene u `postavke.js` i `index.html` – sljedeće jutro u 5:00 (ili odmah ako TV osvježi stranicu)

## Zamjena rasporeda (najčešći posao)

1. U aSc Rasporedima izvezi raspored razreda kao sliku (JPG/PNG).
2. Preimenuj datoteku točno kao staru, npr. `6b.jpg` (mala slova, bez razmaka).
3. Na GitHubu otvori mapu `slike` → **Add file → Upload files** → povuci datoteku → **Commit changes**.
   GitHub staru datoteku s istim imenom zamijeni novom.

## Obavijesti

U `obavijesti.txt` jedan redak = jedna obavijest. Obavijest koja treba sama nestati:

```
do 5.11.2026 | Roditeljski sastanak 6. razreda u četvrtak u 17 h
```
