import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { researchAreas } from '../data/research'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'

export function ResearchOverviewPage() {
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    setHeroReady(true)
  }, [])

  return (
    <div className="container py-16">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 24 }}
        animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Badge variant="accent" className="uppercase tracking-wide">
          Research
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Bridging theory, systems, and society
        </h1>
        <p className="text-lg text-muted-foreground">
          Our research programs connect foundational advances in machine learning with rigorous evaluation in the messy contexts where intelligent systems operate.
          Explore initiatives spanning trustworthy AI, adaptive infrastructure, and computational policy.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8">
        {researchAreas.map((area, index) => (
          <motion.div
            key={area.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
          >
            <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft">
              <CardHeader className="bg-gradient-to-br from-primary/10 via-background to-background">
                <Badge variant="outline" className="w-fit">
                  {area.tagline}
                </Badge>
                <CardTitle className="text-3xl font-semibold">{area.title}</CardTitle>
                <CardDescription className="text-base">{area.summary}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 py-8 lg:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Research highlights
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {area.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 rounded-lg border border-border/80 bg-background/80 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Collaborating institutions
                  </p>
                  <ul className="grid gap-3 text-sm text-muted-foreground">
                    {area.collaborators.map((partner) => (
                      <li
                        key={partner}
                        className="rounded-md border border-dashed border-border/80 bg-muted/30 px-4 py-3 transition-transform duration-300 hover:-translate-y-1"
                      >
                        {partner}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Button variant="outline" asChild>
                      <Link to={`/research/${area.slug}`}>
                        Dive into {area.title.toLowerCase()}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
