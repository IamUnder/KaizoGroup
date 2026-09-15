import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../lib/site';
import { getContent } from '../data/content';

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? siteConfig.url).replace(/\/$/, '');
  const es = getContent('es');
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  const postsEn = (await getCollection('blogEn', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  const lines = [
    `# ${siteConfig.name}`,
    '',
    '> Estudio de diseño y desarrollo de software a medida, con base en Puertollano (Ciudad Real, ' +
      'España). Metodología Kaizen: mejora continua, sin desaparecer tras entregar el proyecto.',
    '',
    `Área de servicio: ${siteConfig.serviceArea.join(', ')}.`,
    `Contacto: ${siteConfig.contact.email} · ${siteConfig.contact.phone}`,
    '',
    '## Páginas',
    `- [Web en español](${base}/): propuesta de valor, servicios, porfolio, proceso de trabajo, FAQ y formulario de contacto.`,
    `- [Web en inglés](${base}/en/): misma landing, traducida.`,
    `- [Aviso legal](${base}/legal/aviso-legal/)`,
    `- [Política de privacidad](${base}/legal/privacidad/)`,
    '',
    '## Servicios',
    ...es.solutions.map((s) => `- ${s.title}: ${s.change}`),
    '',
    '## Porfolio',
    ...es.portfolio.map((p) => `- ${p.name}${p.status ? ` (${p.status})` : ''}: ${p.description}`),
    '',
    '## Blog (español)',
    `Guías prácticas para gestionar un negocio (talleres, peluquerías, clínicas, tiendas, inmobiliarias) — ver ${base}/blog/`,
    ...posts.map((p) => `- [${p.data.title}](${base}/blog/${p.id}/): ${p.data.quickAnswer}`),
    '',
    '## Blog (English)',
    `Practical guides for running a small business (workshops, salons, clinics, shops, real estate) — see ${base}/en/blog/`,
    ...postsEn.map((p) => `- [${p.data.title}](${base}/en/blog/${p.id}/): ${p.data.quickAnswer}`),
    '',
    '## Preguntas frecuentes',
    ...es.faqs.map((f) => `- ${f.question} ${f.answer}`),
  ];

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
