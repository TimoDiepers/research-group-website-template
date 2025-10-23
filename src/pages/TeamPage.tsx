import { useEffect, useState } from 'react'
import { GraduationCap, MapPin, Send, Users2 } from 'lucide-react'
import { motion } from 'motion/react'
import { faculty, researchers, staff, type TeamMember } from '../data/team'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Avatar, AvatarFallback } from '../components/ui/avatar'
import { Button } from '../components/ui/button'

function TeamGrid({
  title,
  description,
  members,
}: {
  title: string
  description: string
  members: TeamMember[]
}) {
  return (
    <motion.section
      className="space-y-6"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div>
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.04 }}
          >
            <Card className="h-full transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="text-sm font-semibold text-foreground/90">
                      {member.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-base font-semibold text-foreground">
                      {member.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{member.focus}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="transition-colors duration-200 hover:border-primary hover:text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export function TeamPage() {
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    setHeroReady(true)
  }, [])

  return (
    <div className="bg-muted/20 pb-20">
      <motion.section
        className="container space-y-6 pt-16"
        initial={{ opacity: 0, y: 32 }}
        animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Badge variant="accent" className="uppercase tracking-wide">
          Team
        </Badge>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Multidisciplinary researchers shaping the future of responsible AI.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          We bring together expertise from computer science, ethics, public policy, human-computer interaction, and systems engineering.
          Our lab culture is collaborative, curiosity-driven, and committed to inclusive innovation.
        </p>
      </motion.section>

      <section className="container mt-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Card className="h-full transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users2 className="h-5 w-5 text-primary" />
              Lab culture
            </CardTitle>
            <CardDescription>
              Principles guiding our community and daily collaborations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              We foster a studio environment where faculty, students, and partners co-design research questions and iterate on solutions together.
            </p>
            <ul className="space-y-3">
              <li className="rounded-lg border border-border bg-background p-3">
                <strong className="text-foreground">Shared rigor:</strong> Pairing empirical depth with reflective critique.
              </li>
              <li className="rounded-lg border border-border bg-background p-3">
                <strong className="text-foreground">Open tooling:</strong> Default to open-source releases and transparent documentation.
              </li>
              <li className="rounded-lg border border-border bg-background p-3">
                <strong className="text-foreground">Care work:</strong> Dedicated mentorship, peer coaching, and inclusive lab operations.
              </li>
            </ul>
          </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <Card className="h-full transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Mentorship pathways
            </CardTitle>
            <CardDescription>
              Supporting students at every stage of their research journey.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Weekly project studios, writing circles, and co-presented conference workshops ensure everyone develops both technical and leadership skills.
            </p>
            <p>
              Graduate researchers co-advise undergraduate fellows, while faculty host monthly reflective practice sessions.
            </p>
          </CardContent>
          </Card>
        </motion.div>
      </section>

      <motion.section
        id="openings"
        className="container mt-12"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <Card className="border-dashed border-primary/50 bg-primary/5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft">
          <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Join our lab
              </h2>
              <p className="text-sm text-muted-foreground">
                We welcome collaborators, postdocs, and visiting scholars who are excited to build equitable, adaptive AI systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="gap-2" asChild>
                <a href="mailto:collaborate@synthesislab.org">
                  <Send className="h-4 w-4" />
                  Collaboration inquiries
                </a>
              </Button>
              <Button className="gap-2" variant="secondary" asChild>
                <a href="https://maps.app.goo.gl/">
                  <MapPin className="h-4 w-4" />
                  Visit our lab
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        className="container mt-16 space-y-16"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <TeamGrid
          title="Faculty leadership"
          description="Principal investigators guiding the lab’s research vision and partnerships."
          members={faculty}
        />
        <TeamGrid
          title="Researchers"
          description="Postdocs, doctoral candidates, and visiting scholars pushing frontiers across our themes."
          members={researchers}
        />
        <TeamGrid
          title="Operations & engineering"
          description="Specialists who keep our research infrastructure strong and community thriving."
          members={staff}
        />
      </motion.section>
    </div>
  )
}
