export const siteConfig = {
  name: 'KaizoGroup',
  tagline: 'Estudio de diseño y desarrollo de software',
  description:
    'KaizoGroup diseña y desarrolla software a medida, webs de alto rendimiento y el CRM/PaaS propio de KaizoGroup para negocios que quieren dejar de perder clientes por una mala presencia digital.',
  url: 'https://kaizogroup.com', // TODO: sincronizar con `site` en astro.config.mjs
  locale: 'es-ES',
  serviceArea: ['Puertollano', 'Ciudad Real', 'España'], // TODO: ajustar alcance real
  contact: {
    email: 'hola@kaizogroup.com', // TODO: email real
    phone: '+34 600 000 000', // TODO: teléfono real
    calendlyUrl: '', // TODO: enlace de Calendly si se activa
    googleBusinessUrl: '', // TODO: ficha de Google Business Profile
  },
  social: {
    linkedin: '', // TODO
    github: '', // TODO
    instagram: '', // TODO
    x: '', // TODO
  },
  nav: [
    { label: 'Servicios', href: '#solucion' },
    { label: 'Porfolio', href: '#porfolio' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaPrimaryLabel: 'Auditoría gratis',
} as const;
