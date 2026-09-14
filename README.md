# One Beer Event App

Mobile-first event experience for sharing moments, completing missions, browsing booths, checking the live leaderboard, and joining the lucky draw.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — event home
- `/share` — photo/video submission
- `/share/status` — submission status
- `/leaderboard` — live leaderboard
- `/missions` — interactive mission checklist
- `/booths` — searchable booth directory
- `/booths/[id]` — booth detail
- `/rewards` — lucky draw rewards
- `/profile` — activity history
- `/moment` — full-screen live moment

## Project structure

```text
src/
├── app/          # App Router pages
├── components/   # shared layout and UI components
├── mock-data/    # typed event demo data
└── types/        # domain interfaces
```

## Validation

```bash
npm run lint
npm run build
```
