import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
    author: z.string()
  })
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    isPublish: z.boolean(),
    image: z.string().default('soon.png'),
    techs: z.array(z.string())
  })
})

export const collections = {
  posts,
  projects
}
