# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/claude-code) when working with this codebase.

## Critical Rules

**NEVER push to remote without explicit user confirmation.** Always ask before running `git push` or any command that modifies the remote repository.

## Project Overview

Walk with Us - GassiService is a Next.js 15 web application for a dog-walking service in Munich, Germany. The site features service information, pricing, FAQ, contact forms, and an interactive service area map.

## Tech Stack

- **Framework:** Next.js 15 with App Router, React 19, TypeScript 5
- **Styling:** Tailwind CSS with tailwind-merge and class-variance-authority
- **UI Components:** Radix UI (tabs, slot), Lucide React icons, Embla Carousel
- **Maps:** @vis.gl/react-google-maps
- **Forms:** Web3Forms (third-party form submission service)
- **Fonts:** Geist (from Vercel)

## Commands

```bash
npm run dev      # Start dev server with Turbopack (localhost:3000)
npm run build    # Build for static export
npm run lint     # Run ESLint
npm start        # Start production server
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                 # Reusable UI components (Radix + Tailwind)
│   ├── custom/             # Business-specific components (navbar, contactForm, faq, serviceArea)
│   ├── mainSection/        # Main page sections (About, Gallery, Tariffs, Contact, etc.)
│   ├── heroPost/           # Hero banner component
│   └── carousel/           # Image carousel
├── data/                   # Constants and configuration (constants.ts, bannerItems.tsx)
└── lib/                    # Utilities (cn function for Tailwind class merging)
```

## Key Patterns

- **Static Export:** Configured with `output: 'export'` for GitHub Pages deployment
- **Client/Server Components:** Most interactive components use `'use client'` directive
- **Styling:** Use `cn()` utility from `lib/utils.ts` for merging Tailwind classes
- **Barrel Exports:** Components export from index.ts files
- **German Language:** Site is in German (`lang="de"`)

## Code Style

- 4-space indentation
- Single quotes, no semicolons
- Trailing commas (ES5)
- PascalCase for components/types, camelCase for variables/functions
- Tailwind CSS for all styling (avoid inline styles)

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Google Maps API key for service area map

## Deployment

GitHub Actions deploys to GitHub Pages on push to `main` branch. The workflow is in `.github/workflows/nextjs.yml`.
