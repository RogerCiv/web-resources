import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const resourceSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  createdAt: z.string().optional(),
  categories: z.enum([
    'frameworks',
    'ui-libraries',
    'css-frameworks',
    'typography',
    'icons',
    'tools',
    'hosting',
    'databases',
    'apis',
    'testing',
    'performance',
    'analytics',
    'design',
    'learning',
    'ai'
  ]),
  tags: z.array(z.string()),
  image: z.string().optional(),
  github: z.url().optional(),
  documentation: z.url().optional(),
  price: z.enum(['free', 'freemium', 'paid']).default('free'),
});

const collectionNames = [
  'frameworks',
  'ui-libraries',
  'css-frameworks',
  'typography',
  'icons',
  'tools',
  'hosting',
  'databases',
  'apis',
  'testing',
  'performance',
  'analytics',
  'design',
  'learning',
  'ai'
] as const;

function createCollection(name: string) {
  return defineCollection({
    loader: glob({ pattern: "*.json", base: `./src/content/${name}` }),
    schema: resourceSchema,
  });
}

export const collections = Object.fromEntries(
  collectionNames.map(name => [name, createCollection(name)])
) as Record<typeof collectionNames[number], ReturnType<typeof createCollection>>;
