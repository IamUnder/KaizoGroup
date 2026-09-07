export const siteConfig = {
  name: 'KaizoGroup',
  url: 'https://kaizogroup.es', // sincronizado con `site` en astro.config.mjs
  // Puertollano/comarca y Ciudad Real como mercado local prioritario (SEO local), España como alcance general
  serviceArea: ['Puertollano', 'Almodóvar del Campo', 'Argamasilla de Calatrava', 'Ciudad Real', 'España'],
  contact: {
    email: 'jorgeolmo.I@gmail.com',
    phone: '+34 693 834 114',
    calendlyUrl: 'https://calendly.com/jorgeolmo-i/30min',
    googleBusinessUrl: '', // ficha aún no creada
  },
  // Datos para Aviso Legal / Privacidad (titular persona física, autónomo)
  legal: {
    titular: 'Jorge Olmo Villa',
    nif: '05983784N',
    domicilio: 'Calle Alcántara, 14, Puertollano (Ciudad Real)',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/iamunder/',
    github: '', // TODO
    instagram: '', // TODO
    x: '', // TODO
  },
} as const;
