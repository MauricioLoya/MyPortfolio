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
    'Experienced Software Developer with *expertise in the field*. Proficient in multiple programming languages and dedicated to delivering *high-quality code*. Skilled in problem-solving and collaborating with cross-functional teams to achieve projectobjectives. Passionate about innovation and continuously improving technical skills.Ready to contribute to the success of software development initiatives.',
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
