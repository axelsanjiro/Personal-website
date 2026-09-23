# Personal Portfolio — Axel Sanjiro Yang

My personal site: machine learning projects, skills, and contact details.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Deployed on Vercel

## Running locally

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually http://localhost:5173.

## Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload  |
| `npm run build`   | Type-check and build to `dist/`       |
| `npm run preview` | Serve the production build locally    |
| `npm run lint`    | Run ESLint                            |

## Editing content

All text lives in `src/data/profile.ts`, so updating the site doesn't mean
touching components. Sections read from these exports:

- `profile` — name, email, GitHub, LinkedIn
- `hero` — headline and the rotating words
- `about` — bio paragraphs and the focus list
- `skills` — grouped tool lists
- `projects` — project cards
- `navLinks` — nav items and their target section ids

To add a project, append to the `projects` array:

```ts
{
  title: "Project name",
  summary: "One line, roughly 45 characters",
  description: "Two sentences: the problem, what you built, the result.",
  tags: ["Python", "Scikit-learn"],
  year: "2026",
  repo: "https://github.com/...",   // optional, renders a Code link
  link: "https://...",              // optional, renders a Live demo link
}
```

## Structure

```
src/
├── components/     Section and UI components
├── hooks/          useTheme, useActiveSection
├── data/           profile.ts — all site copy
└── index.css       Design tokens, animations
```

Colors and fonts are CSS custom properties in `src/index.css`. Light and dark
values are defined under `:root` and `.dark`.

## Notes

- Dark mode follows the OS setting on first visit and remembers manual choices
  in `localStorage`.
- Animations are disabled for visitors with `prefers-reduced-motion` set.
