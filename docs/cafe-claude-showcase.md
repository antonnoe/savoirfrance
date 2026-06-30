# Café Claude showcase voor SavoirFrance.fr

Dit pakket bevat een zelfstandige, scrollbare presentatie met:

- 13 scènes;
- klikbare hoofdstukken;
- automatische scroll met pauze/hervatten;
- handmatige navigatie via muis, touch en pijltjestoetsen;
- mobiele weergave;
- rustige modus / reduced motion;
- de routes Café Claude → DossierFrankrijk en Infofrankrijk → DossierFrankrijk;
- echte interfacefragmenten van Café Claude en DossierFrankrijk.

## Bestanden

- `index.html`
- `styles.css`
- `script.js`
- `assets/` met screenshots

## Plaatsen op SavoirFrance.fr

### Als zelfstandige pagina

Upload de volledige map naar bijvoorbeeld:

`https://savoirfrance.fr/cafe-claude/`

De mapstructuur moet intact blijven.

### In WordPress

1. Upload de map via hosting/SFTP naar een publieke submap.
2. Maak een pagina in WordPress.
3. Link naar de zelfstandige presentatie, of embed haar met:

```html
<iframe
  src="/cafe-claude/"
  title="Hoe werkt Café Claude?"
  style="width:100%;height:100vh;border:0;"
  loading="lazy"
  allow="fullscreen">
</iframe>
```

Een gewone WordPress-contentkolom is minder geschikt, omdat de presentatie volledige schermhoogte en sticky navigatie gebruikt.

## Aanpassen

De belangrijkste kleuren staan bovenaan in `styles.css`:

```css
--burgundy: #800000;
--paper: #f7f2ec;
```

De autoscroll wisselt standaard iedere 6,5 seconde van scène. Pas dit in `script.js` aan bij:

```js
}, 6500);
```

## Controle vóór publicatie

- Vervang de abonnementslink in de laatste scène wanneer de definitieve verkooppagina bekend is.
- Controleer de introductieprijs van €49/jaar vóór publicatie buiten 2026.
- Voeg later opslaglimieten en voorwaarden toe op de juridische/abonnementspagina, niet in deze presentatie.
