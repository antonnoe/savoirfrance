# CLAUDE.md

Repo: savoirfrance

## Wat dit is
De website voor savoirfrance.fr, met een startpagina en daarnaast de zelfstandige presentatie "Hoe werkt Café Claude?" onder /cafe-claude (bronnen: README.md, docs/cafe-claude-showcase.md).

## Live adres
https://savoirfrance.fr (README.md). De presentatie staat op https://savoirfrance.fr/cafe-claude/ (docs/cafe-claude-showcase.md).

## Opbouw
- app/: layout.tsx, page.tsx en globals.css (Next.js App Router, één pagina).
- public/cafe-claude/: statische presentatie met index.html, styles.css, script.js en assets/ (screenshots).
- docs/cafe-claude-showcase.md: uitleg over plaatsen en aanpassen van de presentatie.
- .github/dependabot.yml: wekelijkse gebundelde patch- en minor-updates, major-upgrades van next worden genegeerd.

## Techniek
Next.js 16.2.6 (App Router, TypeScript) met React 19. Scripts: dev, build, start. Geen tests en geen lint-script.

## Externe diensten en namen van omgevingsvariabelen
- Vercel (hosting).
- Google Fonts (Mulish en Poppins, in de presentatie).
- Verwijzingen vanuit de presentatie naar cafeclaude.fr en infofrankrijk.com.
- Omgevingsvariabelen: geen in de code.

## Hoe het live gaat
Vercel: een push naar main geeft een automatische deploy (README.md).

## Regels en besluiten
- Bron README.md: grote framework-upgrades (major) komen niet automatisch, die doen we bewust.
- Bron docs/cafe-claude-showcase.md: vervang de abonnementslink in de laatste scène zodra de definitieve verkooppagina bekend is. Controleer de introductieprijs van 49 euro per jaar vóór publicatie buiten 2026. Opslaglimieten en voorwaarden komen op de juridische of abonnementspagina, niet in de presentatie.

## Laatst nagelopen
Laatst nagelopen: 5 november 2026
