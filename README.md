# itsrahulsharma.com

Personal portfolio website for Rahul Sharma — Frontend Developer.

**Tech Stack:** Next.js 14 (App Router) · TypeScript · SCSS Modules · Framer Motion

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── Cursor/           # Custom animated cursor
│   ├── Navbar/           # Sticky nav with smooth scroll
│   ├── Hero/             # Full-screen hero section
│   ├── About/            # About + stats
│   ├── Skills/           # Tech stack grid
│   ├── Projects/         # Project cards
│   ├── Experience/       # Timeline
│   ├── Contact/          # Contact + socials
│   └── Footer/           # Footer
├── lib/
│   └── data.ts           # ← EDIT THIS to update all content
└── styles/
    ├── _variables.scss   # Design tokens, mixins
    └── globals.scss      # Global styles
```

---

## ✏️ How to Update Content

All portfolio content lives in **`src/lib/data.ts`**.

- **Skills** → edit the `skills` array
- **Projects** → edit the `projects` array
- **Experience** → edit the `experience` array
- **Socials** → edit the `socials` array
- **Email** → edit the `email` constant

---

## 🎨 Design Tokens

Edit `src/styles/_variables.scss` to change:
- Colors (`$cyan`, `$dark`, `$light`, etc.)
- Fonts (`$font-display`, `$font-body`, `$font-mono`)
- Spacing (`$section-pad-x`, `$section-pad-y`)

---

## 🚢 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add custom domain in Vercel dashboard
# Set itsrahulsharma.com → your Vercel project
```

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` | Framework (App Router) |
| `framer-motion` | Animations |
| `sass` | SCSS support |
| `typescript` | Type safety |
