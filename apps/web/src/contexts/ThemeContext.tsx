'use client'

import { useEffect, type ReactNode } from 'react'
import { themes, defaultTheme } from '@/config/themes'

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Apply slate theme to document
  useEffect(() => {
    if (typeof window === 'undefined') return

    const themeData = themes[defaultTheme]
    const root = document.documentElement

    // Add theme class
    root.classList.add(defaultTheme)

    // Set CSS variables
    Object.entries(themeData.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value)
    })
  }, [])

  return <>{children}</>
}
