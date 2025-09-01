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
    'I am a **Software Engineer with 6+ years of experience** creating innovative SaaS solutions and MVPs for companies of all sizes. I believe **"We shape our buildings; thereafter they shape us"** – that\'s why I focus on understanding the context where software will be used, conducting thorough research to deliver solutions that truly fit user needs and business goals. Throughout my career, I have achieved significant milestones, such as **developing high-demand financial platforms** and optimizing services to improve user experience. **I strive to transform ideas into scalable products** that make a real difference, always seeking to contribute my utmost knowledge and skills. I enjoy working on personal projects to continue expanding my competencies and exploring new technologies. Therefore, my current goals are aimed at collaborating with other innovative companies through **remote development projects and technical consulting**. Let\'s connect!',
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
