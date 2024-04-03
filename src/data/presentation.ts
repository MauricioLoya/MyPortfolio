type Social = {
  label: string
  link: string
}

type Presentation = {
  mail: string
  title: string
  description: string
  socials: Social[]
}

const presentation: Presentation = {
  mail: 'mauloy15@gmail.com',
  title: 'Hi, I’m Mauricio Loya',
  description:
    'I am a web developer with **6 years of experience**. Throughout my career, I have achieved significant milestones, such as developing cryptocurrency exchanges for one of the largest **startups in Canada**. Currently, I have optimized error resolution in key processes related to the buying and selling of assets, achieving improved performance and user experience, with a 100% reduction in incidents. **I strive to be efficient in my work and adapt to the needs of each project**, always seeking to contribute my utmost knowledge and skills. I enjoy working on personal projects to continue expanding my competencies as a programmer and web developer. Therefore, my current goals are aimed at collaborating with other innovative companies to generate a **positive impact on clients and stand out in the market**.',
  socials: [
    {
      label: 'Github',
      link: 'https://github.com/MauricioLoya'
    },
    {
      label: 'stack overflow',
      link: 'https://stackoverflow.com/users/13255504/mauricio-loya'
    }
  ]
}

export default presentation
