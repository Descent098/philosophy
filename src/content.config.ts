import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({     pattern: '**/*.mdx',
    base: './src/pages/blog/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.string(),
    featuredImage: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    authors: z.array(z.string()).optional(),
  })
});

export const collections = { blog };
