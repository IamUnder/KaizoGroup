import type { APIRoute } from 'astro';
import { siteConfig } from '../lib/site';

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site ?? siteConfig.url);

  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.toString()}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
