import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import { publications } from '../data/publications'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'

export function PublicationsPage() {
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    setHeroReady(true)
  }, [])

  // Group publications by type
  const publicationsByType = publications.reduce((acc, pub) => {
    if (!acc[pub.type]) {
      acc[pub.type] = []
    }
    acc[pub.type].push(pub)
    return acc
  }, {} as Record<string, typeof publications>)

  const types = ['all', 'journal', 'conference', 'preprint', 'book'] as const
  const typeLabels = {
    all: 'All Publications',
    journal: 'Journal Articles',
    conference: 'Conference Papers',
    preprint: 'Preprints',
    book: 'Books & Chapters'
  }

  const getPublicationTypeColor = (type: string) => {
    switch (type) {
      case 'journal':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
      case 'conference':
        return 'bg-green-500/10 text-green-700 dark:text-green-400'
      case 'preprint':
        return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400'
      case 'book':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-400'
      default:
        return ''
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

      <Tabs defaultValue="all" className="mt-16">
        <TabsList className="grid w-full grid-cols-5">
          {types.map((type) => (
            <TabsTrigger key={type} value={type}>
              {typeLabels[type]}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {types.map((type) => {
          const filteredPublications = type === 'all' 
            ? publications 
            : publicationsByType[type] || []
          
          const pubsByYear = filteredPublications.reduce((acc, pub) => {
            if (!acc[pub.year]) {
              acc[pub.year] = []
            }
            acc[pub.year].push(pub)
            return acc
          }, {} as Record<number, typeof publications>)

          const pubYears = Object.keys(pubsByYear)
            .map(Number)
            .sort((a, b) => b - a)

          return (
            <TabsContent key={type} value={type} className="space-y-12">
              {pubYears.map((year, yearIndex) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: yearIndex * 0.08 }}
                >
                  <h2 className="mb-6 text-2xl font-bold text-foreground">{year}</h2>
                  <div className="space-y-6">
                    {pubsByYear[year].map((pub, pubIndex) => (
                      <motion.div
                        key={`${pub.title}-${pubIndex}`}
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: pubIndex * 0.05 }}
                      >
                        <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft">
                          <CardHeader>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-2">
                                  <Badge className={getPublicationTypeColor(pub.type)}>
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
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}
