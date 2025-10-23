import { Monitor, Moon, Sun } from 'lucide-react'
import { motion } from 'motion/react'
import { cn } from '../../lib/utils'
import { useTheme } from './ThemeProvider'

type Theme = 'light' | 'dark' | 'system'

const cycleOrder: Theme[] = ['light', 'dark', 'system']

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme()

  const handleClick = () => {
    const currentIndex = cycleOrder.indexOf(theme)
    const nextTheme = cycleOrder[(currentIndex + 1) % cycleOrder.length]
    setTheme(nextTheme)
  }

  const icon =
    theme === 'system'
      ? <Monitor className="h-4 w-4" />
      : theme === 'dark'
        ? <Moon className="h-4 w-4" />
        : <Sun className="h-4 w-4" />

  const label =
    theme === 'system'
      ? `Theme: auto (${resolvedTheme})`
      : `Theme: ${theme === 'dark' ? 'dark' : 'light'}`

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'relative flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/80 text-foreground shadow-sm transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        className,
      )}
      aria-label={`${label}. Press to change theme`}
      title={`Toggle theme (current: ${theme === 'system' ? `auto (${resolvedTheme})` : theme})`}
    >
      <motion.span
        key={`${theme}-${resolvedTheme}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="flex"
      >
        {icon}
      </motion.span>
    </button>
  )
}
