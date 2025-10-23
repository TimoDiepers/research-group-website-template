import { useEffect, useRef, useState } from 'react'
import { CalendarClock, GraduationCap, NotebookPen, UsersRound } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { courses, outreach } from '../data/teaching'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

export function TeachingPage() {
  const [heroReady, setHeroReady] = useState(false)
  const experiencesSectionRef = useRef<HTMLElement | null>(null)
  const experiencesVisible = useInView(experiencesSectionRef, {
    once: true,
    margin: '-20% 0px -20% 0px',
    amount: 0.2,
  })

  useEffect(() => {
    setHeroReady(true)
  }, [])

  return (
    <div className="pb-20">
      <motion.section
        className="container space-y-6 pt-16"
        initial={{ opacity: 0, y: 32 }}
        animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Badge variant="accent" className="uppercase tracking-wide">
          Teaching
        </Badge>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Studio-style learning at the intersection of AI, society, and systems.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Our courses blend technical depth with critical perspectives and community partnerships.
          Students graduate with the skills to design, deploy, and govern AI technologies responsibly.
        </p>
      </motion.section>

      <motion.section
        ref={experiencesSectionRef}
        className="container mt-12 grid gap-6 md:grid-cols-[1.1fr_0.9fr]"
        initial={{ opacity: 0, y: 36 }}
        animate={experiencesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Card className="h-full border-primary/40 bg-primary/5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <GraduationCap className="h-5 w-5 text-primary" />
              Signature learning experience
            </CardTitle>
            <CardDescription>
              Courses emphasize participatory design, real-world deployments, and reflective practice.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              We integrate fieldwork, ethical foresight exercises, and production-grade tooling into every course.
            </p>
            <p>
              Students work in multidisciplinary teams and receive mentorship from lab researchers and external partners.
            </p>
          </CardContent>
        </Card>
        <Card className="h-full transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarClock className="h-5 w-5 text-primary" />
              Upcoming events
            </CardTitle>
            <CardDescription>
              Public workshops, seminars, and office hours for the broader community.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              • Feb 12: Responsible AI clinic for non-profits (applications due Jan 24)
            </p>
            <p>
              • Mar 6: Workshop on adaptive evaluation for streaming ML
            </p>
            <p>
              • Apr 18: Student capstone showcase with civic partners
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        className="container mt-16 space-y-10"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.header
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Badge variant="outline">Courses</Badge>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            Graduate and undergraduate offerings
          </h2>
          <p className="mt-2 text-muted-foreground">
            Each course includes a practicum with a partner organization and integrates ethical reflection with technical implementation.
          </p>
        </motion.header>
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course, index) => (
            <motion.div
              key={course.code}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
            >
              <Card className="flex h-full flex-col justify-between border-border bg-background/95 transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <Badge variant="accent">{course.code}</Badge>
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">
                      {course.offerings.join(' • ')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">
                      Ideal for
                    </p>
                    <p className="text-sm text-muted-foreground">{course.audience}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {course.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 rounded-md border border-border/80 bg-muted/30 p-3 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
                      >
                        <NotebookPen className="mt-1 h-4 w-4 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="justify-start px-0 text-sm text-muted-foreground hover:text-foreground">
                    Request syllabus
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="bg-muted/30 py-16"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Badge variant="outline">Outreach & clinics</Badge>
            <h2 className="text-3xl font-semibold text-foreground">
              Learning beyond the classroom
            </h2>
            <p className="text-muted-foreground">
              We offer programming that connects practitioners, policymakers, and communities with the lab’s expertise.
            </p>
            <Button variant="secondary" className="gap-2">
              <UsersRound className="h-4 w-4" />
              Partner with our teaching team
            </Button>
          </motion.div>
          <div className="grid gap-5">
            {outreach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
              >
                <Card className="transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {item.description}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
