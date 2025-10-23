import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, BookOpen, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'motion/react'
import { researchAreas } from '../data/research'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'

const stats = [
  { label: 'Active collaborators', value: '34+' },
  { label: 'Open-source releases', value: '12' },
  { label: 'Student researchers', value: '28' },
]

const updates = [
  {
    title: 'Adaptive Systems wins Best Paper at ML Systems Summit',
    description: 'Our SkyShift work on self-healing forecasting pipelines earned top honors for real-world impact.',
  },
  {
    title: 'New Responsible AI certificate launched',
    description: 'Graduate-level microcredential blending technical labs with governance simulations.',
  },
  {
    title: 'Civic Labs fellowship applications now open',
    description: 'Partner with public interest organizations to deploy accountable AI interventions.',
  },
]

export function HomePage() {
  const [heroReady, setHeroReady] = useState(false)
  const researchProgramsRef = useRef<HTMLElement | null>(null)
  const researchProgramsVisible = useInView(researchProgramsRef, {
    once: true,
    margin: '-20% 0px -20% 0px',
    amount: 0.2,
  })

  useEffect(() => {
    setHeroReady(true)
  }, [])

  return (
    <div className="pb-16">
      <motion.section
        className="container flex flex-col gap-10 pb-12 pt-16 md:flex-row md:items-center"
        initial={{ opacity: 0, y: 32 }}
        animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="flex-1 space-y-6">
          <Badge variant="accent" className="w-fit uppercase tracking-wide">
            AI for shared futures
          </Badge>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Researching intelligent systems that center people, resilience, and accountability.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            The Synthesis Intelligence Lab combines technical breakthroughs with civic partnerships to ensure AI technologies serve collective well-being.
            We co-create methods, tools, and policies that are ready for deployment in the messy reality of high-impact domains.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/research">
                Explore our research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/teaching">
                Learn with us
                <BookOpen className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 border-t border-dashed border-border pt-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
              >
                <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-1 flex-col gap-4 rounded-lg border border-border bg-card/80 p-6 shadow-soft backdrop-blur transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft/70"
        >
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            <Sparkles className="h-4 w-4 text-accent" />
            Latest highlights
          </h2>
          <Separator className="opacity-70" />
          <ul className="space-y-4 text-sm">
            {updates.map((item) => (
              <li key={item.title} className="space-y-1">
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ul>
          <Button variant="ghost" className="justify-start text-sm text-muted-foreground hover:text-foreground" asChild>
            <Link to="/research">
              View newsroom
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.section>

      <motion.section
        ref={researchProgramsRef}
        className="container py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={researchProgramsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge variant="outline">Research Programs</Badge>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Three labs, one shared mission
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Our cross-disciplinary clusters accelerate progress on technical foundations, human partnerships, and policy translation.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/research">
              View all areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={researchProgramsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                <CardHeader>
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{area.summary}</p>
                  <ul className="space-y-2 text-sm">
                    {area.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="px-0" asChild>
                    <Link to={`/research/${area.slug}`}>
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="bg-muted/30 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Badge variant="outline">Collaboration</Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Impact is a team sport
            </h2>
            <p className="text-muted-foreground">
              We partner with hospitals, civic organizations, industry labs, and public agencies to translate research into accessible tools and equitable policies.
              Our structures for co-design and responsible deployment make collaboration frictionless.
            </p>
            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-4 transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-soft/70">
                Embedded residencies with domain partners
              </div>
              <div className="rounded-lg border border-border bg-background p-4 transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-soft/70">
                Open-source toolkits with comprehensive governance
              </div>
              <div className="rounded-lg border border-border bg-background p-4 transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-soft/70">
                Policy sandboxes for rapid experimentation
              </div>
              <div className="rounded-lg border border-border bg-background p-4 transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-soft/70">
                Shared datasets with embedded stewardship
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <Card className="shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft/80">
              <CardHeader>
                <CardTitle>Partner with us</CardTitle>
                <CardDescription>
                  We welcome collaborators who share our commitment to responsible innovation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  From research sprints to multi-year strategic partnerships, we co-create programs that combine evidence-based methods with real-world feedback loops.
                </p>
                <Button className="w-full" variant="secondary" asChild>
                  <Link to="/team#openings">
                    Collaboration inquiries
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
