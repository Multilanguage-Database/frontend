import { defineCollection, z } from 'astro:content';

const indexCollection = defineCollection({
    schema: z.object({
      language: z.string(),
      german: z.string(),
      english: z.string(),
    })
  });
  
  export const collections = {
    'index': indexCollection
  };