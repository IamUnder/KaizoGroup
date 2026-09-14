import type { Lang } from '../i18n/ui';
import type { IconName } from '../components/Icon.astro';

export type PortfolioItem = {
  name: string;
  description: string;
  image: string;
  stack: string[];
  /** URL externa (se abre en pestaña nueva) o ancla interna como "#contacto". */
  url: string;
  /** Etiqueta de estado opcional (ej. "Demo bajo petición", "En desarrollo"). */
  status?: string;
};

export type Testimonial = { quote: string; author: string; role: string };

interface ContentSet {
  painPoints: { icon: IconName; title: string; body: string }[];
  solutions: { icon: IconName; title: string; change: string }[];
  portfolio: PortfolioItem[];
  process: { step: string; title: string; body: string }[];
  // Sin testimonios reales todavía — la sección está retirada de las páginas hasta tener alguno.
  testimonials: Testimonial[];
  faqs: { question: string; answer: string }[];
}

const es: ContentSet = {
  painPoints: [
    {
      icon: 'gauge',
      title: 'Web lenta y que no aparece en Google',
      body: 'Cada segundo de carga de más aleja visitas, y si Google no te encuentra, esas visitas nunca llegan a existir.',
    },
    {
      icon: 'target',
      title: 'Visitas que no se convierten en clientes',
      body: 'Tráfico que entra y se va sin dejar contacto, cita o venta — la web no está pensada para convertir, solo para existir.',
    },
    {
      icon: 'wrench',
      title: 'Mantenimiento eterno y caro',
      body: 'Cualquier cambio mínimo depende de terceros, con plazos y costes que nunca sabes de antemano.',
    },
    {
      icon: 'code',
      title: 'Herramientas que no encajan con tu negocio',
      body: 'Hojas de cálculo, WhatsApp y aplicaciones genéricas para procesos que deberían estar automatizados — perdiendo tiempo y cometiendo errores evitables.',
    },
  ],
  solutions: [
    {
      icon: 'code',
      title: 'Desarrollo a medida',
      change: 'Software que se adapta a tu proceso real, no una plantilla genérica que tienes que adaptar tú.',
    },
    {
      icon: 'search',
      title: 'SEO técnico desde la base',
      change: 'Apareces en las búsquedas que importan desde el primer despliegue, sin arreglos a posteriori.',
    },
    {
      icon: 'chart',
      title: 'Métricas y datos reales',
      change: 'Decisiones basadas en cómo se usa tu producto de verdad, no en intuición.',
    },
    {
      icon: 'refresh',
      title: 'Mantenimiento y acompañamiento',
      change: 'Seguimos a tu lado después del lanzamiento — no desaparecemos al entregar el proyecto.',
    },
  ],
  portfolio: [
    {
      name: 'Portledger',
      description:
        'El CRM/PaaS interno que usamos en KaizoGroup para gestionar clientes, proyectos e infraestructura. No está expuesto públicamente, pero podemos enseñarte cómo trabajamos en una demo cerrada.',
      image: '/portfolio/crmpaas.jpg',
      stack: ['Prisma', 'React'],
      url: '#contacto',
      status: 'Demo bajo petición',
    },
    {
      name: 'KaizenFit',
      description:
        'Web de tracking de rutinas y gimnasio, construida para ser simple y sin fricción en el día a día de quien entrena.',
      image: '/portfolio/kaizenfit.jpg',
      stack: ['Java', 'React'],
      url: 'https://kaizenfit.es',
    },
    {
      name: 'Tienda de materiales de construcción',
      description:
        'E-commerce para compra de materiales de construcción integrado con Odoo. Actualmente en desarrollo.',
      image: '/portfolio/placeholder-3.svg',
      stack: ['Odoo'],
      url: '#contacto',
      status: 'En desarrollo',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Escucha inicial',
      body: 'Antes de proponer nada, entendemos tu negocio y el problema real detrás de la petición — no vendemos horas, resolvemos problemas.',
    },
    {
      step: '02',
      title: 'Propuesta de alcance y presupuesto',
      body: 'Alcance y presupuesto ajustados a tus necesidades reales, no una cifra de catálogo que se queda corta o se queda larga.',
    },
    {
      step: '03',
      title: 'Desarrollo en iteraciones cortas',
      body: 'Iteraciones cortas con entregas visibles, para que veas avances desde la primera semana, no al final del proyecto.',
    },
    {
      step: '04',
      title: 'Lanzamiento y verificación',
      body: 'Desplegamos, verificamos en producción y nos aseguramos de que todo funciona antes de darlo por cerrado.',
    },
    {
      step: '05',
      title: 'Acompañamiento tras el lanzamiento',
      body: 'Seguimos a tu lado después del lanzamiento — dudas, ajustes o nuevas necesidades, resueltas sin fricción.',
    },
  ],
  testimonials: [],
  faqs: [
    {
      question: '¿Cuánto cuesta un proyecto?',
      answer:
        'Depende de las necesidades de cada cliente. No trabajamos con presupuestos cerrados de catálogo — cada proyecto se valora según su alcance real, para que no pagues de más ni te quedes corto de funcionalidad.',
    },
    {
      question: '¿Cuánto tarda el desarrollo?',
      answer:
        'También depende del alcance, pero como referencia, un proyecto típico ronda el mes de desarrollo.',
    },
    {
      question: '¿Qué pasa después del lanzamiento?',
      answer:
        'El mantenimiento incluye un número de horas de soporte mensuales pactadas en el presupuesto, además de acompañamiento y resolución de dudas siempre que las necesites.',
    },
    {
      question: '¿Cómo os contacto?',
      answer: 'Por correo o por teléfono — respondemos en menos de 24 horas.',
    },
    {
      question: '¿Trabajáis solo en Puertollano y Ciudad Real?',
      answer:
        'Esa es nuestra base y donde conocemos mejor a los negocios locales, pero trabajamos en remoto con clientes de toda España sin ningún problema.',
    },
  ],
};

const en: ContentSet = {
  painPoints: [
    {
      icon: 'gauge',
      title: "A slow site that doesn't show up on Google",
      body: "Every extra second of load time pushes visitors away, and if Google can't find you, those visitors never show up in the first place.",
    },
    {
      icon: 'target',
      title: "Visitors who don't turn into customers",
      body: "Traffic comes in and leaves without a contact, a booking, or a sale — the site was never built to convert, just to exist.",
    },
    {
      icon: 'wrench',
      title: 'Endless, expensive maintenance',
      body: "Every small change depends on a third party, with timelines and costs you never know in advance.",
    },
    {
      icon: 'code',
      title: "Tools that don't fit your business",
      body: 'Spreadsheets, WhatsApp, and generic apps standing in for processes that should be automated — wasting time and causing avoidable mistakes.',
    },
  ],
  solutions: [
    {
      icon: 'code',
      title: 'Custom development',
      change: 'Software that adapts to how you actually work, not a generic template you have to adapt to.',
    },
    {
      icon: 'search',
      title: 'Technical SEO from day one',
      change: 'You show up in the searches that matter from the first deployment, not as an afterthought.',
    },
    {
      icon: 'chart',
      title: 'Real metrics and data',
      change: 'Decisions based on how your product is actually used, not on guesswork.',
    },
    {
      icon: 'refresh',
      title: 'Maintenance and ongoing support',
      change: "We stay by your side after launch — we don't disappear once the project ships.",
    },
  ],
  portfolio: [
    {
      name: 'Portledger',
      description:
        "The internal CRM/PaaS we use at KaizoGroup to manage clients, projects, and infrastructure. It's not publicly available, but we can show you how we work in a closed demo.",
      image: '/portfolio/crmpaas.jpg',
      stack: ['Prisma', 'React'],
      url: '#contacto',
      status: 'Demo on request',
    },
    {
      name: 'KaizenFit',
      description:
        'A workout and gym-tracking web app, built to be simple and frictionless for everyday training.',
      image: '/portfolio/kaizenfit.jpg',
      stack: ['Java', 'React'],
      url: 'https://kaizenfit.es',
    },
    {
      name: 'Construction Materials Store',
      description:
        'B2B e-commerce for construction materials, integrated with Odoo. Currently in development.',
      image: '/portfolio/placeholder-3.svg',
      stack: ['Odoo'],
      url: '#contacto',
      status: 'In development',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Initial listening',
      body: "Before proposing anything, we get to know your business and the real problem behind the request — we don't sell hours, we solve problems.",
    },
    {
      step: '02',
      title: 'Scope and budget proposal',
      body: "Scope and budget tailored to your actual needs, not a catalog price that ends up too small or too big.",
    },
    {
      step: '03',
      title: 'Development in short iterations',
      body: 'Short iterations with visible progress, so you see results from the first week, not just at the end of the project.',
    },
    {
      step: '04',
      title: 'Launch and verification',
      body: 'We deploy, verify everything in production, and make sure it all works before calling it done.',
    },
    {
      step: '05',
      title: 'Support after launch',
      body: "We stay by your side after launch — questions, tweaks, or new needs, handled without friction.",
    },
  ],
  testimonials: [],
  faqs: [
    {
      question: 'How much does a project cost?',
      answer:
        "It depends on each client's needs. We don't work with fixed catalog prices — every project is scoped on its actual requirements, so you never overpay or end up short on functionality.",
    },
    {
      question: 'How long does development take?',
      answer:
        'Again, it depends on scope, but as a reference point, a typical project takes around a month to build.',
    },
    {
      question: 'What happens after launch?',
      answer:
        'Maintenance includes a number of monthly support hours agreed in the quote, plus ongoing support and answers to any questions you have.',
    },
    {
      question: 'How do I get in touch?',
      answer: 'By email or phone — we reply in under 24 hours.',
    },
    {
      question: 'Do you only work in Puertollano and Ciudad Real?',
      answer:
        "That's our home base, and where we know local businesses best, but we work remotely with clients across Spain — and beyond — without any issue.",
    },
  ],
};

const content: Record<Lang, ContentSet> = { es, en };

export function getContent(lang: Lang): ContentSet {
  return content[lang];
}
