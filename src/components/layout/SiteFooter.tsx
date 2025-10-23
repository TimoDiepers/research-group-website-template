import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Contact', to: '/team' },
  { label: 'Opportunities', to: '/team#openings' },
  { label: 'Teaching', to: '/teaching' },
  { label: 'Research', to: '/research' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-muted/30">
      <div className="container flex w-full flex-col gap-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p className="max-w-lg">
          © {new Date().getFullYear()} Synthesis Intelligence Lab. Driving
          human-centered, adaptive, and accountable AI research for the public
          good.
        </p>
        <ul className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link className="transition-colors hover:text-foreground" to={link.to}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
