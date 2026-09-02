export const painPoints = [
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
] as const;

export const solutions = [
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
] as const;

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

export const portfolio: PortfolioItem[] = [
  {
    name: 'CRM/PaaS de KaizoGroup',
    description:
      'La plataforma interna que usamos en KaizoGroup para gestionar clientes y proyectos. No está expuesta públicamente, pero podemos enseñarte cómo trabajamos en una demo cerrada.',
    image: '/portfolio/placeholder-1.svg',
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
];

export const process = [
  {
    step: '01',
    title: 'Escucha inicial',
    body: 'Antes de proponer nada, entendemos tu negocio y el problema real detrás de la petición — no vendemos horas, resolvemos problemas.',
  },
  {
    step: '02',
    title: 'Propuesta',
    body: 'Alcance y presupuesto ajustados a tus necesidades reales, no una cifra de catálogo que se queda corta o se queda larga.',
  },
  {
    step: '03',
    title: 'Desarrollo',
    body: 'Iteraciones cortas con entregas visibles, para que veas avances desde la primera semana, no al final del proyecto.',
  },
  {
    step: '04',
    title: 'Lanzamiento',
    body: 'Desplegamos, verificamos en producción y nos aseguramos de que todo funciona antes de darlo por cerrado.',
  },
  {
    step: '05',
    title: 'Acompañamiento',
    body: 'Seguimos a tu lado después del lanzamiento — dudas, ajustes o nuevas necesidades, resueltas sin fricción.',
  },
] as const;

export type Testimonial = { quote: string; author: string; role: string };

// Sin testimonios reales todavía — la sección está retirada de index.astro hasta tener alguno.
export const testimonials: Testimonial[] = [];

export const faqs = [
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
] as const;
