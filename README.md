# Samvada Journeys Website

India's first entrepreneur-led experiential travel company. Built with Vite + React + TanStack Router as a static SPA.

## Stack

- Vite
- React 19
- TypeScript
- TanStack Router (client-side, file-based routing)
- Tailwind CSS v4
- Framer Motion
- shadcn/ui components

## Development

Requires Node.js 18+.

```sh
npm install
npm run dev
```

## Build & Deploy

```sh
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

Deploys as a static site on Vercel. The `vercel.json` rewrites all routes to `index.html` for SPA routing.

## Project Structure

```
src/
  routes/       # File-based routes (TanStack Router)
  components/   # UI and site components
  lib/          # Site data and utilities
  assets/       # Images
  styles.css    # Global styles + Tailwind
  main.tsx      # App entry point
  router.tsx    # Router setup
public/         # Static assets (favicons, manifest)
```
