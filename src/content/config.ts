import { defineCollection, z } from "astro:content";

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
  github: z.string().url().optional(),
  documentation: z.string().url().optional(),
  price: z.enum(['free', 'freemium', 'paid']).default('free'),
})

const frameworksCollection = defineCollection({ type: "data", schema: resourceSchema })
const uiLibrariesCollection = defineCollection({ type: "data", schema: resourceSchema })
const cssFrameworksCollection = defineCollection({ type: "data", schema: resourceSchema })
const typographyCollection = defineCollection({ type: "data", schema: resourceSchema })
const iconsCollection = defineCollection({ type: "data", schema: resourceSchema })
const toolsCollection = defineCollection({ type: "data", schema: resourceSchema })
const hostingCollection = defineCollection({ type: "data", schema: resourceSchema })
const databasesCollection = defineCollection({ type: "data", schema: resourceSchema })
const apisCollection = defineCollection({ type: "data", schema: resourceSchema })
const testingCollection = defineCollection({ type: "data", schema: resourceSchema })
const performanceCollection = defineCollection({ type: "data", schema: resourceSchema })
const analyticsCollection = defineCollection({ type: "data", schema: resourceSchema })
const designCollection = defineCollection({ type: "data", schema: resourceSchema })
const learningCollection = defineCollection({ type: "data", schema: resourceSchema })
const aiCollection = defineCollection({ type: "data", schema: resourceSchema })

export const collections = {
  frameworks: frameworksCollection,
  "ui-libraries": uiLibrariesCollection,
  "css-frameworks": cssFrameworksCollection,
  typography: typographyCollection,
  icons: iconsCollection,
  tools: toolsCollection,
  hosting: hostingCollection,
  databases: databasesCollection,
  apis: apisCollection,
  testing: testingCollection,
  performance: performanceCollection,
  analytics: analyticsCollection,
  design: designCollection,
  learning: learningCollection,
  ai: aiCollection
}
