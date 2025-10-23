import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextValue {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (value: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'theme-preference'

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored
  }
  return 'system'
}

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme())
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => {
    const stored = getStoredTheme()
    if (stored === 'light' || stored === 'dark') return stored
    return getSystemTheme()
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = (value: 'light' | 'dark') => {
      const root = document.documentElement
      if (value === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }

    const computeResolvedTheme = () => {
      if (theme === 'dark') return 'dark'
      if (theme === 'light') return 'light'
      return media.matches ? 'dark' : 'light'
    }

    const nextResolved = computeResolvedTheme()
    setResolvedTheme(nextResolved)
    applyTheme(nextResolved)
    window.localStorage.setItem(STORAGE_KEY, theme)

    if (theme !== 'system') return

    const listener = (event: MediaQueryListEvent) => {
      const value = event.matches ? 'dark' : 'light'
      setResolvedTheme(value)
      applyTheme(value)
    }

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme: (value: Theme) => setTheme(value),
    }),
    [theme, resolvedTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
