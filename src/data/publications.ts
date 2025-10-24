export interface Publication {
  title: string
  authors: string[]
  venue: string
  year: number
  type: 'journal' | 'conference' | 'preprint' | 'book'
  link?: string
  abstract?: string
  tags?: string[]
}

export const publications: Publication[] = [
  {
    title: 'Robust Interpretability Methods for Large Language Models in Clinical Settings',
    authors: ['Jane Smith', 'John Doe', 'Alice Johnson'],
    venue: 'Nature Machine Intelligence',
    year: 2024,
    type: 'journal',
    link: '#',
    abstract: 'We present a novel approach to interpretability in large language models specifically designed for clinical decision support.',
    tags: ['Human-Centric AI', 'Interpretability', 'Healthcare'],
  },
  {
    title: 'Adaptive Resource Allocation for Edge AI Deployments',
    authors: ['Robert Chen', 'Sarah Williams', 'Michael Brown'],
    venue: 'NeurIPS 2024',
    year: 2024,
    type: 'conference',
    link: '#',
    abstract: 'This work introduces a framework for dynamic resource allocation in edge computing environments.',
    tags: ['Adaptive Systems', 'Edge AI'],
  },
  {
    title: 'Impact Assessment Pipelines for Algorithmic Fairness Regulations',
    authors: ['Emily Davis', 'David Wilson', 'Lisa Martinez'],
    venue: 'ACM Conference on Fairness, Accountability, and Transparency',
    year: 2024,
    type: 'conference',
    link: '#',
    abstract: 'We develop comprehensive pipelines for assessing the societal impact of AI systems under emerging fairness regulations.',
    tags: ['Computational Ethics', 'Fairness', 'Policy'],
  },
  {
    title: 'Streaming Learning Pipelines for Exabyte-Scale Sensors',
    authors: ['Thomas Anderson', 'Jennifer Taylor', 'James Moore'],
    venue: 'IEEE Transactions on Big Data',
    year: 2023,
    type: 'journal',
    link: '#',
    abstract: 'Our approach enables real-time learning from massive sensor networks deployed in scientific instruments.',
    tags: ['Adaptive Systems', 'Big Data'],
  },
  {
    title: 'Hybrid Decision-Making Systems for Medical Diagnostics',
    authors: ['Maria Garcia', 'Christopher Lee', 'Patricia White'],
    venue: 'Journal of Medical Systems',
    year: 2023,
    type: 'journal',
    link: '#',
    abstract: 'This study explores the integration of human expertise with AI systems in diagnostic workflows.',
    tags: ['Human-Centric AI', 'Healthcare'],
  },
  {
    title: 'Participatory Modeling for Benchmarking Social Harms',
    authors: ['Kevin Harris', 'Amanda Clark', 'Steven Lewis'],
    venue: 'arXiv preprint',
    year: 2024,
    type: 'preprint',
    link: '#',
    abstract: 'We propose a participatory framework for identifying and measuring social harms in algorithmic systems.',
    tags: ['Computational Ethics', 'Social Impact'],
  },
]
