import { useState } from 'react'
import { GraduationCap, Microscope, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/research', label: 'Research' },
  { to: '/team', label: 'Team' },
  { to: '/teaching', label: 'Teaching' },
]

export function SiteHeader() {
  const [hovered, setHovered] = useState<string | null>(null)

  const handleMouseLeave = () => {
    setHovered(null)
  }

  return (
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
                )
              }}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="secondary"
            asChild
          >
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
        </div>
      </div>
      <nav className="container flex items-center gap-2 overflow-x-auto border-t border-border/60 py-3 text-sm text-muted-foreground md:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="relative inline-flex items-center rounded-full px-3 py-1.5 transition-colors"
          >
            {({ isActive }) => (
              <>
                <span
                  className={cn(
                    'relative z-10',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-mobile"
                    className="absolute inset-0 -z-10 rounded-full border border-border bg-secondary/80 shadow-sm"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
