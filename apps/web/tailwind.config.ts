import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
        cardForeground: 'var(--color-cardForeground)',
        border: 'var(--color-border)',
        muted: 'var(--color-muted)',
        mutedForeground: 'var(--color-mutedForeground)',
        accent: 'var(--color-accent)',
        accentForeground: 'var(--color-accentForeground)',
        hover: 'var(--color-hover)',
      },
    },
  },
  plugins: [],
}
export default config
