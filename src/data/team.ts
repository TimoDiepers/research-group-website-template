export interface TeamMember {
  name: string
  role: string
  focus: string
  tags: string[]
  avatar?: string
}

export const faculty: TeamMember[] = [
  {
    name: 'Prof. Amara Singh',
    role: 'Director',
    focus: 'Human-centered AI, socio-technical evaluation, collaborative decision systems',
    tags: ['Principal Investigator'],
  },
  {
    name: 'Dr. Lucas Moretti',
    role: 'Associate Director',
    focus: 'Adaptive systems, resilient ML infrastructure, sustainability',
    tags: ['Co-PI'],
  },
]

export const researchers: TeamMember[] = [
  {
    name: 'Dr. Priya Raman',
    role: 'Senior Research Scientist',
    focus: 'Explainable AI, multimodal health diagnostics',
    tags: ['Human-Centric AI'],
  },
  {
    name: 'Elliot Zhu',
    role: 'Postdoctoral Fellow',
    focus: 'Causality, responsibility tracing, algorithmic audits',
    tags: ['Computational Ethics'],
  },
  {
    name: 'Maya González',
    role: 'PhD Candidate',
    focus: 'Streaming learning for earth observation',
    tags: ['Adaptive Systems'],
  },
  {
    name: 'Anna Kovács',
    role: 'PhD Candidate',
    focus: 'Augmented decision-making for intensive care units',
    tags: ['Human-Centric AI'],
  },
  {
    name: 'Benjamin Hart',
    role: 'Visiting Researcher',
    focus: 'Algorithmic accountability in public policy',
    tags: ['Computational Ethics'],
  },
]

export const staff: TeamMember[] = [
  {
    name: 'Saskia Müller',
    role: 'Operations Lead',
    focus: 'Partnerships, community engagement, lab operations',
    tags: ['Operations'],
  },
  {
    name: 'Jonah Weiss',
    role: 'Research Engineer',
    focus: 'ML tooling, infra automation, data governance',
    tags: ['Engineering'],
  },
]
