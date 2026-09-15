/** Mismos 5 sectores objetivo que src/pages/nexo.astro, más "general" para artículos
 * que no son de un sector concreto — ver src/content.config.ts para el enum. */
export const SECTOR_LABELS: Record<string, string> = {
  talleres: 'Talleres',
  peluquerias: 'Peluquerías',
  clinicas: 'Clínicas',
  tiendas: 'Tiendas',
  inmobiliarias: 'Inmobiliarias',
  general: 'General',
};

/** Mismas claves de sector (el enum en content.config.ts no se traduce), solo cambia la
 * etiqueta mostrada — usado por las páginas del blog bajo /en/blog. */
export const SECTOR_LABELS_EN: Record<string, string> = {
  talleres: 'Workshops',
  peluquerias: 'Hair & beauty',
  clinicas: 'Clinics',
  tiendas: 'Shops',
  inmobiliarias: 'Real estate',
  general: 'General',
};
