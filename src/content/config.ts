import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['in-progress', 'shipped', 'paused']),
    url: z.string().optional(),
    meta: z.string(),
    order: z.number().default(0),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
