import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Chris Blog',
  description: 'Personal portfolio and blog',
  icons: {
    icon: '/web-favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = { background: '#0F1015', foreground: '#e5e5e5', card: '#262626', cardForeground: '#e5e5e5', border: '#404040', muted: '#262626', mutedForeground: '#a3a3a3', accent: '#525252', accentForeground: '#e5e5e5', hover: '#404040' };
                  const root = document.documentElement;
                  root.classList.add('slate');
                  Object.entries(theme).forEach(([key, value]) => {
                    root.style.setProperty('--color-' + key, value);
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
