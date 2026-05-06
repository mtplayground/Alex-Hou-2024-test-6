# Product

ZeroClaw Messages is a Next.js 14 web app scaffold for a small message board. Right now it is a project foundation, not a finished product: the app renders a polished placeholder home page and establishes the stack the later issues will build on.

# Current State

- Next.js 14 with the App Router is set up under `app/`.
- TypeScript is enabled with the `@/*` path alias.
- Tailwind CSS is configured and used by the root page styling.
- ESLint is configured with `eslint-config-next`.
- The app exposes a base layout with local Geist fonts and metadata for `ZeroClaw Messages`.
- The home page is a static placeholder explaining that message features and database work come next.
- Server-side environment handling is defined around a required PostgreSQL `DATABASE_URL`.
- A checked-in `.env.example` documents the expected database connection variable for local setup.

# Architecture

- `app/layout.tsx` owns global metadata, font setup, and shared page chrome.
- `app/page.tsx` is the current root route and acts as the landing placeholder.
- `app/globals.css` provides Tailwind layers and the global color and font baseline.
- `lib/env.ts` is the typed server-side accessor for required environment variables.
- `next.config.mjs` validates required server env at config load so missing deployment config fails early.
- There is still no message data flow, API route, or Prisma schema merged yet.

# Conventions

- Runtime scripts target `0.0.0.0:8080` for local and hosted execution.
- Styling uses Tailwind utilities directly in App Router components.
- `DATABASE_URL` is required for the app configuration and is expected to come from the environment rather than hardcoded values.
- The repository currently reflects issues `#1` and `#2` only; message submission, persistence logic, Docker, Prisma schema, and tests are not implemented yet.
