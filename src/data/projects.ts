export type Project = {
  title: string
  techs: string[]
  link?: string
  isComingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Simple paginated table',
    techs: ['Vue3', 'Pinia', 'Vite', 'Typescript', 'TailwindCSS', 'Axios'],
    link: 'https://github.com/MauricioLoya/test-code-stack'
  },
  {
    title: 'Sprint-Rest-Todo (started spring template)',
    techs: ['Java 17', 'Spring Boot', 'JPA', 'Flyway', 'MySQL', 'Swagger'],
    link: 'https://github.com/MauricioLoya/Sprint-Rest-Todo'
  },
  {
    title: 'SOS Garde',
    techs: ['NuxtJS 3', 'TailwindCSS', 'GraphQL'],
    isComingSoon: true
  },
  {
    title: 'Satstreet Projects - FullStack',
    techs: [
      'Vue3',
      'TypeScript',
      'TailwindCSS',
      'Axios',
      'Vite',
      'Pinia',
      'JWT',
      'NestJS'
    ],
    isComingSoon: true
  },
  {
    title: 'ShortestPathAlgorithmDijkstra',
    techs: ['Javascript', 'Python'],
    link: 'https://github.com/MauricioLoya/ShortestPathAlgorithmDijkstra'
  },
  {
    title: 'My portfolio',
    techs: ['Astro', 'Typescript ', 'TailwindCSS '],
    link: 'https://github.com/MauricioLoya/MyPortfolio'
  },
  {
    title: 'Digital Connect - Landing Page',
    techs: ['Astro', 'Typescript ', 'TailwindCSS', 'Stripe'],
    link: 'https://digitalconnectmexico.com'
  },
  {
    title: 'Solución Fácil - Landing Page',
    techs: ['Astro', 'Typescript ', 'TailwindCSS', 'Astro content'],
    link: 'https://solucion-facil.com/'
  },
  {
    title: 'Mendioleas - Landing Page',
    techs: ['Astro', 'Typescript ', 'TailwindCSS', 'Firebase', 'Stripe'],
    link: 'https://mendioleas.com/pricing/'
  }
]

export default projects
