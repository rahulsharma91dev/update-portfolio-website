# Rahul Sharma — Portfolio (Next.js + TypeScript + SCSS/BEM)

Single-page dashboard portfolio: fixed left personal panel, fixed right navigation dock,
scrolling content in the middle. Content comes from the resume (`src/data/profile.ts`).

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Before you deploy
1. Copy your profile photo to `public/skills-images.png` (same file the old site used) — or change `photo` in `src/data/profile.ts`.
2. Copy your resume PDF to `public/Rahul_Sharma_Resume.pdf` (Download CV button).
3. Copy `.env.example` to `.env.local` and fill:
   - `NEXT_PUBLIC_FORMSPREE_ID` — create a free form at formspree.io, paste its id (without it the form opens a mailto link).
   - `NEXT_PUBLIC_PROJECTS_REMOTE_URL` — full URL of your separately deployed project.
4. Deploy on Vercel: import the repo, add the same env vars, deploy.

## Architecture (micro-frontend ready)
```
src/
  app/        layout, page, robots, sitemap
  shell/      LeftPanel (fixed), RightNav (fixed dock + scroll engine)
  modules/    home | about | skills | projects | contact   <- one folder per section
  shared/     Section, Icon, Typing, CountUp, gsap, useScrollEngine
  data/       profile.ts (all content), sections.ts, remote-projects.ts
  styles/     SCSS, BEM naming (block__element--modifier)
```
- The **shell** (left panel + nav + scroll engine) never changes when you add sections.
- The **Projects** section renders every entry in `src/data/remote-projects.ts`.
  Your separate project is built and deployed on its own, and loaded here by URL (iframe).
  Later you can switch `RemoteProject.tsx` to Module Federation or Next.js Multi-Zones without touching other modules.

## Animations
- Third-party (scroll only): **Lenis** (smooth scroll, animated jump on nav click) and **GSAP ScrollTrigger**
  (active nav icon, top progress bar, reveal-on-scroll).
- Own CSS/React (no library): typing effect, count-up stats, hover effects.
- All motion turns off with `prefers-reduced-motion`.

## Google AdSense
Removed. If you want it back later: add the AdSense script with `next/script` in `src/app/layout.tsx`
and place one ad unit in the footer area, not inside the fixed panels.
