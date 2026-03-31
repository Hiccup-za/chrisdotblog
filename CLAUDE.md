# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands use **Bun** as the package manager (not npm/yarn).

```bash
# From repo root (runs across all apps via Turborepo)
bun run dev        # Start dev server(s)
bun run build      # Build all apps
bun run lint       # Lint all apps
bun run typecheck  # Type check all apps

# Scoped to the web app only
bun run dev --filter=@chrisdotblog/web
bun run build --filter=@chrisdotblog/web

# Or from within apps/web/
bun run dev
bun run build
bun run typecheck  # runs tsc --noEmit
```

No test runner is currently configured.

## Architecture

**Turborepo monorepo** with a single app today; the `packages/` workspace directory is reserved for future shared packages.

### `apps/web` — Next.js App Router site

- **`src/app/`** — App Router pages and layouts. `layout.tsx` sets up `ThemeProvider` and the Databuddy analytics component.
- **`src/components/`** — Page-level React components (`Hero`, `Projects`, `SocialLinks`).
- **`src/config/`** — The primary place to make content changes:
  - `content.ts` — All site copy: bio, social links, and project listings (`ContentConfig` interface).
  - `themes.ts` — Theme color tokens. Currently only `slate` exists; adding a new theme means adding a `ThemeName` union member and a corresponding entry in the `themes` record.
- **`src/contexts/ThemeContext.tsx`** — Applies theme CSS variables (`--color-*`) to `:root` at runtime. The layout also injects an inline script to set the default theme synchronously (preventing flash).

### Styling

Tailwind CSS with a CSS-variable-based color system. All color tokens (`background`, `foreground`, `card`, `border`, `accent`, `hover`, etc.) are defined in `themes.ts` and applied as `--color-*` custom properties. Use these variables in Tailwind classes via the `tailwind.config.ts` mappings rather than hardcoded colors.

### Analytics

Databuddy SDK (`@databuddy/sdk`) is initialized in `layout.tsx` with a hardcoded `clientId`. The SDK is also listed as a root-level dependency.

### Path alias

`@/*` resolves to `apps/web/src/*` — use this for all internal imports within the web app.
