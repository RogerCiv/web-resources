import { defineCollection, z } from "astro:content";

const resourceSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
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
    'learning'
  ]),
  tags: z.array(z.string()),
  image: z.string().optional(),
  github: z.string().url().optional(),
  documentation: z.string().url().optional(),
  price: z.enum(['free', 'freemium', 'paid']).default('free'),

})


const frameworksCollection = defineCollection({ type: "data", schema: resourceSchema })
const uiLibrariesCollection = defineCollection({ type: "data", schema: resourceSchema })
const typographyCollection = defineCollection({ type: "data", schema: resourceSchema })
const iconsCollection = defineCollection({ type: "data", schema: resourceSchema })
const devToolsCollection = defineCollection({ type: "data", schema: resourceSchema })
const hostingDeploymentCollection = defineCollection({ type: "data", schema: resourceSchema })
const databasesCollection = defineCollection({ type: "data", schema: resourceSchema })
const apiServicesCollection = defineCollection({ type: "data", schema: resourceSchema })
const testingCollection = defineCollection({ type: "data", schema: resourceSchema })


export const collections = {
  frameworks: frameworksCollection,
  "ui-libraries": uiLibrariesCollection,
  typography: typographyCollection,
  icons: iconsCollection,
  "dev-tools": devToolsCollection,
  "hosting-deployment": hostingDeploymentCollection,
  databases: databasesCollection,
  "api-services": apiServicesCollection,
  testing: testingCollection
}