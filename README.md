# Savoir France

De website voor **savoirfrance.fr** — gebouwd met [Next.js](https://nextjs.org) (App Router) en gehost op Vercel.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000).

## Scripts

| Commando | Wat het doet |
|---|---|
| `npm run dev` | Start de ontwikkelserver (met hot reload) |
| `npm run build` | Maakt een productie-build |
| `npm run start` | Draait de productie-build lokaal |

## Stack

- **Next.js 16** (App Router, TypeScript)
- **React 19**
- Deploy via **Vercel** (push naar `main` = automatische deploy)

## Stabiliteit

Dependabot is geconfigureerd (`.github/dependabot.yml`) om alleen veilige
patch/minor-updates voor te stellen, gebundeld in één wekelijkse PR. Grote
framework-upgrades (major) komen niet automatisch — die doen we bewust.
