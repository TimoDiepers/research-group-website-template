export interface Course {
  code: string
  title: string
  description: string
  offerings: string[]
  audience: string
  highlights: string[]
}

export const courses: Course[] = [
  {
    code: 'CS 584',
    title: 'Responsible Machine Learning in Practice',
    description:
      'Project-based course covering the end-to-end lifecycle of responsible ML systems, from scoping and data governance to monitoring and incident response.',
    offerings: ['Fall 2025'],
    audience: 'Graduate students in CS, HCI, public policy, and data science.',
    highlights: [
      'Multi-stakeholder requirement elicitation workshops',
      'Designing oversight dashboards and runbooks',
      'Guest lectures from industry, civil society, and regulators',
    ],
  },
  {
    code: 'CS 342',
    title: 'Adaptive Systems and Online Learning',
    description:
      'Theory and practice of machine learning for non-stationary environments. Includes hands-on labs with real-world telemetry and sensor data.',
    offerings: ['Spring 2026'],
    audience: 'Upper-level undergraduates and graduate students.',
    highlights: [
      'Implementation of streaming learners in the lab',
      'Deployments on low-power hardware',
      'Real-time evaluation with open-source telemetry feeds',
    ],
  },
  {
    code: 'CS 197',
    title: 'Computational Ethics Studio',
    description:
      'Studio-style seminar where interdisciplinary teams build frameworks to audit, explain, and legislate algorithmic systems.',
    offerings: ['Winter 2025', 'Summer 2025 (Intensive)'],
    audience: 'Cross-disciplinary cohort spanning law, journalism, sociology, and design.',
    highlights: [
      'Field research with civic organizations',
      'Rapid prototyping of accountability tooling',
      'Final policy simulation with external reviewers',
    ],
  },
]

export const outreach = [
  {
    title: 'AI and Society Public Lecture Series',
    description:
      'Quarterly talks open to the public where researchers, artists, and policymakers discuss the societal futures shaped by intelligent systems.',
  },
  {
    title: 'Summer Scholars Program',
    description:
      'Eight-week mentored research experience for undergraduate students from historically excluded groups in computing.',
  },
  {
    title: 'Practitioner Clinics',
    description:
      'Monthly clinic where partner organizations receive bespoke guidance on responsible AI deployment.',
  },
]
