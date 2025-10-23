import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { researchAreas } from '../data/research'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Separator } from '../components/ui/separator'

export function ResearchAreaPage() {
  const { slug } = useParams<{ slug: string }>()
  const area = researchAreas.find((item) => item.slug === slug)
  const [heroReady, setHeroReady] = useState(false)
  const detailsSectionRef = useRef<HTMLElement | null>(null)
  const detailsVisible = useInView(detailsSectionRef, {
    once: true,
    margin: '-20% 0px -20% 0px',
    amount: 0.2,
  })

  useEffect(() => {
    setHeroReady(true)
  }, [])

  if (!area) {
    return <Navigate to="/research" replace />
  }

  return (
    <div className="bg-muted/30 pb-16">
      <motion.section
        className="container space-y-6 pb-16 pt-12"
        initial={{ opacity: 0, y: 32 }}
        animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <Button variant="ghost" className="w-fit px-0" asChild>
          <Link to="/research">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to research overview
          </Link>
        </Button>
        <div className="max-w-3xl space-y-6">
          <Badge variant="accent" className="w-fit uppercase tracking-wide">
            {area.tagline}
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {area.title}
          </h1>
          <p className="text-lg text-muted-foreground">{area.summary}</p>
        </div>
        <Card className="shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft/80">
          <CardHeader>
            <CardTitle>Program pillars</CardTitle>
            <CardDescription>
              We work across methodological and applied tracks to ensure discoveries translate into resilient, human-aligned systems.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            {area.highlights.map((highlight) => (
              <div
                key={highlight}
                className="space-y-2 rounded-lg border border-border bg-background p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {highlight.split(':')[0]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.includes(':') ? highlight.split(':').slice(1).join(':').trim() : highlight}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.section>
      <motion.section
        ref={detailsSectionRef}
        className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr]"
        initial={{ opacity: 0, y: 36 }}
        animate={detailsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Card className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft">
          <CardHeader>
            <CardTitle>Featured projects</CardTitle>
            <CardDescription>
              A selection of our flagship initiatives, emphasizing open science and cross-sector collaboration.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {area.featuredProjects.map((project) => (
              <div
                key={project.name}
                className="rounded-lg border border-border/80 bg-muted/20 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                  {project.link && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.link}>
                        View
                        <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft">
          <CardHeader>
            <CardTitle>Collaborator network</CardTitle>
            <CardDescription>
              Multi-disciplinary partners ensuring our findings achieve impact across sectors.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="grid gap-3 text-sm text-muted-foreground">
              {area.collaborators.map((partner) => (
                <li
                  key={partner}
                  className="rounded-md border border-dashed border-border bg-background px-4 py-3 transition-transform duration-300 hover:-translate-y-1"
                >
                  {partner}
                </li>
              ))}
            </ul>
            <Separator />
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Interested in collaborating?
              </p>
              <Button variant="secondary" asChild>
                <Link to="/team#openings">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}
