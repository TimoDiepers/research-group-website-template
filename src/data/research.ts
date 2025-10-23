export interface ResearchArea {
  slug: string
  title: string
  tagline: string
  summary: string
  highlights: string[]
  collaborators: string[]
  featuredProjects: {
    name: string
    description: string
    link?: string
  }[]
}

export const researchAreas: ResearchArea[] = [
  {
    slug: 'human-centric-ai',
    title: 'Human-Centric AI',
    tagline: 'Designing trustworthy AI that augments, not replaces, human expertise.',
    summary:
      "We study intelligent systems that align with human goals, values, and expectations. Our work spans interpretable models, decision support, and socio-technical evaluation frameworks that help AI earn and retain trust.",
    highlights: [
      'Hybrid decision-making pipelines for clinical diagnostics',
      'Robust interpretability methods for large language models',
      'Evaluating AI agency through mixed-method user studies',
    ],
    collaborators: [
      'Stanford Center for Biomedical Informatics',
      'ETH AI Center',
      'MIT Media Lab',
    ],
    featuredProjects: [
      {
        name: 'GlassBox',
        description:
          'Open toolkit for rapid prototyping of interpretable models within critical workflows.',
        link: '#',
      },
      {
        name: 'Shared Autonomy Lab',
        description:
          'Studying how human operators collaborate with adaptive AI copilots in high-stakes contexts.',
      },
    ],
  },
  {
    slug: 'adaptive-systems',
    title: 'Adaptive Systems',
    tagline: 'Building models that evolve with their environment.',
    summary:
      'We design algorithms that detect distribution shifts, self-calibrate, and self-heal. The group connects theoretical advances with field deployments in scientific instrumentation, human mobility, and remote sensing.',
    highlights: [
      'Streaming learning pipelines for exabyte-scale sensors',
      'Continual evaluation benchmarks that measure model health',
      'Adaptive resource allocation for edge AI deployments',
    ],
    collaborators: [
      'European Space Agency',
      'CERN OpenLab',
      'Alan Turing Institute',
    ],
    featuredProjects: [
      {
        name: 'SkyShift',
        description:
          'Monitoring orbital debris using low-cost telescopes and self-updating tracking models.',
      },
      {
        name: 'MobilityPulse',
        description:
          'Adaptive forecasting to keep public transit reliable in rapidly evolving cities.',
      },
    ],
  },
  {
    slug: 'computational-ethics',
    title: 'Computational Ethics',
    tagline: 'Formal tools that make algorithmic governance transparent and accountable.',
    summary:
      'The lab develops audits, counterfactual reasoning, and compliance tooling that empowers policymakers and practitioners to assess the societal impacts of algorithmic decisions before deployment.',
    highlights: [
      'Impact assessment pipelines for algorithmic fairness regulations',
      'Benchmarking social harms using participatory modeling',
      'Risk dashboards for AI assurance in regulated industries',
    ],
    collaborators: ['OECD AI Policy Lab', 'UNESCO', 'Partnership on AI'],
    featuredProjects: [
      {
        name: 'RegGov',
        description:
          'Decision support platform that helps regulators stress-test high-impact AI systems.',
        link: '#',
      },
      {
        name: 'Civic Labs',
        description:
          'Community-led audits that translate lived experience into actionable model updates.',
      },
    ],
  },
]
