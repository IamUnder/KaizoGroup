// Contenido placeholder — todo el copy final se afinará más adelante.
// Los textos entre [corchetes] son editables/orientativos, no copy definitivo.

export const painPoints = [
  {
    icon: 'gauge',
    title: '[Web lenta que espanta visitas]',
    body: '[Placeholder: cada segundo de más en cargar cuesta clientes. Describir el impacto real de una web lenta en el negocio.]',
  },
  {
    icon: 'search',
    title: '[No apareces en Google]',
    body: '[Placeholder: sin SEO técnico ni estructura semántica, el negocio es invisible en las búsquedas locales.]',
  },
  {
    icon: 'target',
    title: '[Visitas que no se convierten]',
    body: '[Placeholder: tráfico que llega y se va sin dejar contacto, cita o venta.]',
  },
  {
    icon: 'wrench',
    title: '[Mantenimiento eterno y caro]',
    body: '[Placeholder: depender de terceros para cualquier cambio mínimo, con plazos y costes impredecibles.]',
  },
] as const;

export const solutions = [
  {
    icon: 'code',
    title: '[Desarrollo a medida]',
    change: '[Placeholder: qué cambia para el cliente — software que encaja con su proceso real, no una plantilla genérica.]',
  },
  {
    icon: 'search',
    title: '[SEO técnico desde la base]',
    change: '[Placeholder: qué cambia — aparecer en las búsquedas que importan desde el primer despliegue.]',
  },
  {
    icon: 'chart',
    title: '[Métricas y datos reales]',
    change: '[Placeholder: qué cambia — decisiones basadas en datos de uso, no en intuición.]',
  },
  {
    icon: 'refresh',
    title: '[Mantenimiento y acompañamiento]',
    change: '[Placeholder: qué cambia — un canal directo para evolucionar el producto sin fricción.]',
  },
] as const;

export type PortfolioItem = {
  name: string;
  description: string;
  image: string;
  stack: string[];
  url: string;
};

export const portfolio: PortfolioItem[] = [
  {
    name: '[KaizoGroup CRM/PaaS]',
    description: '[Placeholder: plataforma propia de CRM/PaaS — breve descripción de qué resuelve.]',
    image: '/portfolio/placeholder-1.svg',
    stack: ['Astro', 'Node', 'PostgreSQL'],
    url: '#',
  },
  {
    name: '[MVP tracking de gimnasio]',
    description: '[Placeholder: app de seguimiento de entrenamientos — breve descripción del alcance.]',
    image: '/portfolio/placeholder-2.svg',
    stack: ['React Native', 'Supabase'],
    url: '#',
  },
  {
    name: '[Tienda plataforma de construcción]',
    description: '[Placeholder: e-commerce B2B para material de construcción — breve descripción.]',
    image: '/portfolio/placeholder-3.svg',
    stack: ['Astro', 'Stripe'],
    url: '#',
  },
] as const;

export const process = [
  { step: '01', title: '[Escucha inicial]', body: '[Placeholder: entender el negocio y el problema real antes de proponer nada.]' },
  { step: '02', title: '[Propuesta]', body: '[Placeholder: alcance, plazos y precio cerrado antes de empezar.]' },
  { step: '03', title: '[Desarrollo]', body: '[Placeholder: iteraciones cortas con entregas visibles.]' },
  { step: '04', title: '[Lanzamiento]', body: '[Placeholder: despliegue y verificación en producción.]' },
  { step: '05', title: '[Acompañamiento]', body: '[Placeholder: soporte y evolución tras el lanzamiento.]' },
] as const;

export const testimonials = [
  {
    quote: '[Placeholder de testimonio de cliente — se sustituirá por citas reales.]',
    author: '[Nombre Apellido]',
    role: '[Cargo, Negocio]',
  },
  {
    quote: '[Placeholder de testimonio de cliente — se sustituirá por citas reales.]',
    author: '[Nombre Apellido]',
    role: '[Cargo, Negocio]',
  },
  {
    quote: '[Placeholder de testimonio de cliente — se sustituirá por citas reales.]',
    author: '[Nombre Apellido]',
    role: '[Cargo, Negocio]',
  },
] as const;

export const faqs = [
  {
    question: '¿Cuánto cuesta un proyecto?',
    answer: '[Placeholder: explicar el modelo de precio — presupuesto cerrado tras la propuesta, rangos orientativos, etc.]',
  },
  {
    question: '¿Cuánto tarda el desarrollo?',
    answer: '[Placeholder: plazos orientativos según tipo de proyecto.]',
  },
  {
    question: '¿Qué pasa después del lanzamiento?',
    answer: '[Placeholder: condiciones de mantenimiento y soporte post-lanzamiento.]',
  },
  {
    question: '¿Cómo os contacto?',
    answer: '[Placeholder: canales de contacto y tiempo de respuesta habitual.]',
  },
] as const;
