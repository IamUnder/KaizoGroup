export const siteConfig = {
  name: 'KaizoGroup',
  tagline: 'Estudio de diseño y desarrollo de software',
  description:
    'KaizoGroup diseña y desarrolla software a medida y webs de alto rendimiento para negocios de Puertollano, Ciudad Real y el resto de España que quieren dejar de perder clientes por una mala presencia digital.',
  url: 'https://kaizogroup.es', // sincronizado con `site` en astro.config.mjs
  locale: 'es-ES',
  // Puertollano/Ciudad Real como mercado local prioritario (SEO local), España como alcance general
  serviceArea: ['Puertollano', 'Ciudad Real', 'España'],
  contact: {
    email: 'jorgeolmo.I@gmail.com',
    phone: '+34 693 834 114',
    calendlyUrl: '', // vacío por ahora — ver guía en el README para activarlo
    googleBusinessUrl: '', // ficha aún no creada
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
