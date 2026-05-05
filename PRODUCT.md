# Product

ZeroClaw Messages is a Next.js 14 web app scaffold for a small message board. Right now it is a project foundation, not a finished product: the app renders a polished placeholder home page and establishes the stack the later issues will build on.

# Current State

- Next.js 14 with the App Router is set up under `app/`.
- TypeScript is enabled with the `@/*` path alias.
- Tailwind CSS is configured and used by the root page styling.
- ESLint is configured with `eslint-config-next`.
- The app exposes a base layout with local Geist fonts and metadata for `ZeroClaw Messages`.
- The home page is a static placeholder explaining that message features and database work come next.

# Architecture

- `app/layout.tsx` owns global metadata, font setup, and shared page chrome.
- `app/page.tsx` is the current root route and acts as the landing placeholder.
- `app/globals.css` provides Tailwind layers and the global color and font baseline.
- There is no backend data flow, API route, or database integration merged yet.

# Conventions

- Runtime scripts target `0.0.0.0:8080` for local and hosted execution.
- Styling uses Tailwind utilities directly in App Router components.
- The repository currently reflects only issue `#1`; message submission, persistence, Docker, Prisma, and tests are not implemented yet.
