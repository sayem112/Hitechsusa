# HiTechsUSA

Production-ready marketing site for HiTechsUSA — mobile apps, custom software, firmware applications, AI automation, and AI QA automation.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Logo (required)

Place your brand logo in the public folder:

```
public/HitechsUSAlogo.png
```

The site references it at `/HitechsUSAlogo.png` (no base64 in source). If the file is missing, the header logo will not display until you add it.

## Stack

- React 19 + Vite 8
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Framer Motion
- Lucide React
- shadcn-style `Button` and `Card` (`src/components/ui/`)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel detects Vite automatically (`vercel.json` includes SPA rewrites).

Or from the CLI:

```bash
npx vercel
```

## Project structure

```
public/
  HitechsUSAlogo.png   # Your logo (you provide)
  favicon.svg
src/
  App.jsx              # Homepage
  main.jsx
  index.css            # Tailwind entry
  components/ui/       # Button, Card
  lib/utils.js         # cn() helper
index.html             # SEO meta tags
vercel.json            # Vercel config
vite.config.js         # Vite + Tailwind + @ alias
```
