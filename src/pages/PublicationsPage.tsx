import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import { publications } from '../data/publications'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'

export function PublicationsPage() {
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    setHeroReady(true)
  }, [])

  // Group publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = []
    }
    acc[pub.year].push(pub)
    return acc
  }, {} as Record<number, typeof publications>)

  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  const getPublicationTypeVariant = (type: string): "journal" | "conference" | "preprint" | "book" | "default" => {
    switch (type) {
      case 'journal':
        return 'journal'
      case 'conference':
        return 'conference'
      case 'preprint':
        return 'preprint'
      case 'book':
        return 'book'
      default:
        return 'default'
    }
  }

  return (
    <div className="container py-16">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 24 }}
        animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Badge variant="accent" className="uppercase tracking-wide">
          Publications
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Our Research Output
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore our published work spanning journals, conferences, and preprints. Our research advances the state of the art in
          human-centric AI, adaptive systems, and computational ethics.
        </p>
      </motion.div>

      <div className="mt-16 space-y-12">
        {years.map((year, yearIndex) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: yearIndex * 0.08 }}
          >
            <h2 className="mb-6 text-2xl font-bold text-foreground">{year}</h2>
            <div className="space-y-6">
              {publicationsByYear[year].map((pub, pubIndex) => (
                <motion.div
                  key={`${pub.title}-${pubIndex}`}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: pubIndex * 0.05 }}
                >
                  <Card className="overflow-hidden card-hover-primary">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant={getPublicationTypeVariant(pub.type)}>
                              {pub.type}
                            </Badge>
                            {pub.tags && pub.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <CardTitle className="text-xl font-semibold leading-tight">
                            {pub.title}
                          </CardTitle>
                        </div>
                        {pub.link && (
                          <Button variant="ghost" size="sm" asChild>
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Read ${pub.title}`}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                      <CardDescription className="text-sm">
                        {pub.authors.join(', ')}
                      </CardDescription>
                      <p className="text-sm font-medium text-muted-foreground">
                        {pub.venue}
                      </p>
                    </CardHeader>
                    {pub.abstract && (
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{pub.abstract}</p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
