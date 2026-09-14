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
├── api/          # typed resource API functions
├── app/          # App Router pages and mock route handlers
├── components/   # shared layout and UI components
├── hooks/        # shared data-fetching hooks
├── lib/          # Axios client and mock response helpers
├── mock-data/    # typed event demo data (API routes only)
└── types/        # API and domain interfaces
```

## Mock API

Pages call typed functions in `src/api`, which use the shared Axios client in
`src/lib/apiClient.ts`. Local Next.js route handlers return data from
`src/mock-data/event.ts`:

- `GET /api/v1/event/leaderboard`
- `GET /api/v1/event/missions`
- `GET /api/v1/event/booths`
- `GET /api/v1/event/booths/:id`
- `GET /api/v1/event/rewards`
- `GET /api/v1/event/activities`
- `POST /api/v1/event/submissions`

Leave `NEXT_PUBLIC_API_URL` empty to use the local mock routes. Point it to the
backend base URL when the real API is ready; page components do not need to change.

## Validation

```bash
npm run lint
npm run build
```
