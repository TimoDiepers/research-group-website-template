import { useEffect, useState } from 'react'
import { GraduationCap, Microscope, Users } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'
import { ThemeToggle } from '../theme/ThemeToggle'

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/research', label: 'Research' },
  { to: '/team', label: 'Team' },
  { to: '/teaching', label: 'Teaching' },
]

export function SiteHeader() {
  const location = useLocation()
  const [hovered, setHovered] = useState<string | null>(null)
  const [mobileHovered, setMobileHovered] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleMouseLeave = () => {
    setHovered(null)
  }

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.setProperty('overflow', 'hidden')
    } else {
      document.body.style.removeProperty('overflow')
    }
    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
    setMobileHovered(null)
  }, [location.pathname])

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-soft">
            <Microscope className="h-5 w-5" />
          </div>
          <span className="text-base leading-tight">
            Synthesis Intelligence Lab
            <span className="block text-xs font-normal text-muted-foreground">
              Research Group
            </span>
          </span>
        </NavLink>
        <nav
          className="relative hidden items-center gap-2 text-sm font-medium md:flex"
          onMouseLeave={handleMouseLeave}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="relative inline-flex items-center rounded-lg px-3 py-1.5 transition-colors"
              onMouseEnter={() => setHovered(item.to)}
              onFocus={() => setHovered(item.to)}
              onBlur={() => setHovered(null)}
            >
              {({ isActive }) => {
                const isCurrent = isActive
                const isHighlighted = hovered === item.to

                return (
                  <>
                    {isHighlighted && (
                      <motion.span
                        layoutId="nav-highlight-desktop"
                        className="absolute inset-0 -z-10 rounded-lg bg-secondary/90 shadow-sm"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                    {isCurrent && (
                      <motion.span
                        layoutId="nav-underline-desktop"
                        className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                        transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                      />
                      )}
                    <span
                      className={cn(
                        'relative z-10 transition-colors',
                        isHighlighted || isCurrent
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground/80',
                      )}
                    >
                      {item.label}
                    </span>
                  </>
                );
              }}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <motion.button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex h-10 w-10 items-center justify-center"
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative h-6 w-6">
              <motion.span
                className="absolute left-1/2 top-1 h-0.5 w-5 -translate-x-1/2 rounded-full bg-foreground"
                style={{ originX: 0.5, originY: 0.5 }}
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              />
              <motion.span
                className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-foreground"
                style={{ originX: 0.5, originY: 0.5 }}
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              />
            </div>
          </motion.button>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="secondary" asChild>
            <NavLink to="/teaching">
              <GraduationCap className="h-4 w-4" />
              Learn with us
            </NavLink>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <NavLink to="/team">
              <Users className="h-4 w-4" />
              Meet the team
            </NavLink>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          key="mobile-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 h-full w-full bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="absolute inset-y-0 right-0 flex w-[min(20rem,90vw)] flex-col gap-6 border-l border-border/60 bg-background/90 px-6 py-6 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/80"
          >
            <div className="flex justify-between">
              <motion.button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative h-6 w-6">
                  <motion.span
                    className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
                    animate={{ rotate: 45 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  />
                  <motion.span
                    className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
                    animate={{ rotate: -45 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  />
                </div>
              </motion.button>
            </div>
            <nav className="flex flex-col gap-2 text-lg font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="relative inline-flex items-center rounded-lg px-4 py-3"
                onMouseEnter={() => setMobileHovered(item.to)}
                onMouseLeave={() => setMobileHovered(null)}
                onFocus={() => setMobileHovered(item.to)}
                onBlur={() => setMobileHovered(null)}
              >
                {({ isActive }) => {
                  const highlight = mobileHovered ?? (isActive ? item.to : null)
                  return (
                    <>
                      {highlight === item.to && (
                        <motion.span
                          layoutId="nav-highlight-mobile"
                          className="absolute inset-0 -z-10 rounded-lg bg-secondary/90 shadow-sm"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        />
                      )}
                      <span
                        className={cn(
                          'relative z-10 transition-colors',
                          isActive ? 'text-foreground' : 'text-muted-foreground',
                        )}
                      >
                        {item.label}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline-mobile"
                          className="pointer-events-none absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-primary"
                          transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                        />
                      )}
                    </>
                  );
                }}
              </NavLink>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Button variant="secondary" asChild>
              <NavLink to="/teaching">Learn with us</NavLink>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <NavLink to="/team">Meet the team</NavLink>
            </Button>
            <div className="flex justify-start">
              <ThemeToggle />
            </div>
          </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}
