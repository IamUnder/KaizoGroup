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
