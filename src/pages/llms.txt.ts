import type { APIRoute } from 'astro';
import { siteConfig } from '../lib/site';
import { getContent } from '../data/content';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? siteConfig.url).replace(/\/$/, '');
  const es = getContent('es');

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
    '## Preguntas frecuentes',
    ...es.faqs.map((f) => `- ${f.question} ${f.answer}`),
  ];

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
