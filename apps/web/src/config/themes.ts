export type ThemeName = 'slate'

export interface Theme {
  name: ThemeName
  displayName: string
  colors: {
    background: string
    foreground: string
    card: string
    cardForeground: string
    border: string
    muted: string
    mutedForeground: string
    accent: string
    accentForeground: string
    hover: string
  }
}

export const themes: Record<ThemeName, Theme> = {
  slate: {
    name: 'slate',
    displayName: 'Slate',
    colors: {
      background: '#0F1015',
      foreground: '#e5e5e5',
      card: '#262626',
      cardForeground: '#e5e5e5',
      border: '#404040',
      muted: '#262626',
      mutedForeground: '#a3a3a3',
      accent: '#525252',
      accentForeground: '#e5e5e5',
      hover: '#404040',
    },
  },
}

export const defaultTheme: ThemeName = 'slate'
