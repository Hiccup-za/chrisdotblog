# chrisdotblog

My personal blog - Turborepo monorepo

## Structure

This is a Turborepo monorepo containing:

- `apps/` - Applications (web apps, APIs, etc.)
- `packages/` - Shared packages and libraries

## Getting Started

### Install Dependencies

```bash
bun install
```

### Build

Build all packages and apps:

```bash
bun run build
```

### Development

Run dev mode for all packages:

```bash
bun run dev
```

### Other Commands

- `bun run lint` - Lint all packages
- `bun run typecheck` - Type check all packages
- `bun run test` - Run tests in all packages

## Adding a New Package

1. Create a new directory in `apps/` or `packages/`
2. Add a `package.json` with the appropriate scripts
3. The workspace will automatically pick it up

## Adding a New App

1. Create a new directory in `apps/`
2. Add a `package.json` with scripts matching the tasks in `turbo.json`
3. Run `bun install` to link the workspace
