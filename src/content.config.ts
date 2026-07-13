import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      displayTitle: z.string(),
      order: z.number().int().positive(),
      status: z.enum([
        'live-production',
        'operational',
        'deployed-limited-adoption',
        'deployed-thesis',
      ]),
      summary: z.string(),
      professionalClaim: z.string(),
      domain: z.string(),
      technologies: z.array(z.string()).min(1),
      capabilities: z.array(z.string()).min(1),
      links: z
        .object({
          live: z.string().url().optional(),
          repository: z.string().url().optional(),
          officialRecord: z.string().url().optional(),
        })
        .default({}),
      seo: z.object({
        title: z.string(),
        description: z.string(),
      }),
      evidence: z
        .array(
          z.object({
            image: image(),
            alt: z.string().min(1),
            caption: z.string().min(1),
            privacyApproved: z.literal(true),
          }),
        )
        .default([]),
    }),
});

export const collections = { work };
