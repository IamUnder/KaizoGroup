import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog de contenido para captar leads de Nexo (ver src/pages/nexo.astro) por SEO/AEO —
 * cada artículo sigue el mismo formato: intro real, respuesta corta al principio
 * (`quickAnswer`, 40-60 palabras) que citan tanto Google como los motores de IA
 * (ChatGPT/Claude/Perplexity), cuerpo con preguntas como H2, y un FAQ al final con
 * datos estructurados (`faq`, mínimo 6 preguntas — ver [slug].astro).
 */
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  quickAnswer: z.string(),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  sector: z.enum(['talleres', 'peluquerias', 'clinicas', 'tiendas', 'inmobiliarias', 'general']),
  tags: z.array(z.string()).default([]),
  faq: z.array(z.object({ question: z.string(), answer: z.string() })).min(6),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: blogSchema,
});

// Versión en inglés — colección separada (no un campo `lang`) para que cada artículo use el
// mismo nombre de fichero que su equivalente en español (mismo `id`/slug): así
// src/pages/blog/[slug].astro y src/pages/en/blog/[slug].astro pueden calcular el hreflang de
// vuelta con un simple `/en/blog/${post.id}/` o `/blog/${post.id}/`, sin campos de mapeo extra.
const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-en' }),
  schema: blogSchema,
});

export const collections = { blog, blogEn };
