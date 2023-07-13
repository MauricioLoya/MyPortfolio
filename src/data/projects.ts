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
    title: 'My portfolio',
    techs: ['Astro', 'Typescript ', 'TailwindCSS, '],
    link: 'https://github.com/MauricioLoya/MyPortfolio'
  }
]

export default projects
