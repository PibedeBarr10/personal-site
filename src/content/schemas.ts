import { z } from 'astro:content'

export const blogSchema = z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
        url: z.string(),
        alt: z.string()
    }).optional(),
    tags: z.array(z.string()).optional()
})
