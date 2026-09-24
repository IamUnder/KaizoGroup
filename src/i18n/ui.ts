export type Lang = 'es' | 'en';

export const languageNames: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

interface NavItem {
  label: string;
  href: string;
}

interface LegalLink {
  label: string;
  href: string;
}

export interface Dictionary {
  htmlLang: string;
  ogLocale: string;
  meta: {
    tagline: string;
    description: string;
    keywords: string[];
  };
  skipToContent: string;
  nav: NavItem[];
  header: {
    homeAriaLabel: string;
    navAriaLabel: string;
    mobileNavAriaLabel: string;
    openMenuAriaLabel: string;
    ctaLabel: string;
  };
  langSwitch: {
    label: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    location: string;
  };
  about: { eyebrow: string; h2: string; body: string };
  problem: { eyebrow: string; h2: string };
  solution: { eyebrow: string; h2: string };
  nexoFeature: {
    eyebrow: string;
    h2: string;
    body: string;
    sectors: string[];
    modules: { name: string; tagline: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  portfolio: { eyebrow: string; h2: string; imageAltPrefix: string };
  process: { eyebrow: string; h2: string };
  socialProof: { eyebrow: string; h2: string };
  contact: {
    eyebrow: string;
    h2: string;
    subtitle: string;
    calendlyLabel: string;
    form: {
      name: string;
      email: string;
      business: string;
      message: string;
      submit: string;
    };
    status: {
      notConfigured: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  faq: { eyebrow: string; h2: string; moreLabel: string };
  footer: {
    contact: string;
    nav: string;
    legal: string;
    googleBusiness: string;
    legalLinks: LegalLink[];
    resourceLinks: LegalLink[];
    rights: string;
  };
  quiz: {
    eyebrow: string;
    h1: string;
    subtitle: string;
    situationQuestion: string;
    situationOptions: string[];
    goalQuestion: string;
    goalOptions: string[];
    timingQuestion: string;
    timingOptions: string[];
    sectorQuestion: string;
    sectorOptions: string[];
    businessLabel: string;
    businessPlaceholder: string;
    resultsHeading: string;
    resultsSubtitle: string;
    emailChoiceLabel: string;
    emailChoiceDesc: string;
    callChoiceLabel: string;
    callChoiceDesc: string;
    contactHeading: string;
    nameLabel: string;
    emailLabel: string;
    submitLabel: string;
    backLabel: string;
    nextLabel: string;
    backToChoicesLabel: string;
    messagePrefix: string;
  };
  heroQuizTeaser: string;
}

export const ui: Record<Lang, Dictionary> = {
  es: {
    htmlLang: 'es',
    ogLocale: 'es_ES',
    meta: {
      tagline: 'Estudio de diseño y desarrollo de software',
      description:
        'Software a medida y webs de alto rendimiento en Puertollano y Ciudad Real. Deja de perder clientes por una mala presencia digital. Auditoría gratis.',
      keywords: [
        'desarrollo de software Puertollano',
        'desarrollo de software a medida',
        'diseño y desarrollo web Puertollano',
        'programador Puertollano',
        'desarrollo de aplicaciones Ciudad Real',
        'software a medida Ciudad Real',
        'agencia de desarrollo web Ciudad Real',
      ],
    },
    skipToContent: 'Saltar al contenido principal',
    nav: [
      { label: 'Servicios', href: '#solucion' },
      { label: 'Sobre nosotros', href: '#sobre-nosotros' },
      { label: 'Porfolio', href: '#porfolio' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contacto', href: '#contacto' },
    ],
    header: {
      homeAriaLabel: 'KaizoGroup — inicio',
      navAriaLabel: 'Navegación principal',
      mobileNavAriaLabel: 'Navegación móvil',
      openMenuAriaLabel: 'Abrir menú',
      ctaLabel: 'Auditoría gratis',
    },
    langSwitch: { label: 'English' },
    hero: {
      eyebrow: 'Kaizen — mejora continua aplicada a software',
      h1: 'Software a medida que simplifica el día a día de tu negocio',
      subtitle:
        'Detectamos qué problema está frenando a tu empresa y lo resolvemos con tecnología — y seguimos a tu lado después del lanzamiento, no desaparecemos al entregar el proyecto.',
      ctaPrimary: 'Auditoría gratis',
      ctaSecondary: 'Ver mi trabajo',
      location: 'Puertollano y Ciudad Real — y en remoto para el resto de España',
    },
    about: {
      eyebrow: 'Sobre nosotros',
      h2: 'De dónde viene el nombre KaizoGroup',
      body: 'En KaizoGroup no vendemos código, resolvemos problemas. El nombre viene de Kaizen, la filosofía japonesa de mejora continua — así trabajamos: escuchando primero, construyendo lo justo, y quedándonos al lado del cliente después de entregar el proyecto. Con base en Puertollano, trabajamos con negocios de Ciudad Real y, en remoto, de toda España.',
    },
    problem: {
      eyebrow: 'El problema',
      h2: 'Lo que frena a la mayoría de negocios',
    },
    solution: {
      eyebrow: 'La solución',
      h2: 'Qué cambia cuando trabajas con KaizoGroup',
    },
    nexoFeature: {
      eyebrow: 'Producto propio de KaizoGroup',
      h2: 'Nexo: el CRM/ERP que construimos y vendemos nosotros',
      body: 'Contactos, ventas, facturación, inventario y mucho más en una sola herramienta modular — cada negocio paga solo por los módulos que usa. Es el producto que mejor conocemos, porque lo hemos construido nosotros de principio a fin.',
      sectors: ['Talleres', 'Peluquerías', 'Clínicas', 'Tiendas', 'Inmobiliarias'],
      modules: [
        { name: 'Contactos', tagline: 'Toda tu cartera de clientes en un único sitio.' },
        { name: 'Pipeline de ventas', tagline: 'Sigue cada oportunidad hasta que se cierra.' },
        { name: 'Facturación', tagline: 'De presupuesto a factura en un clic.' },
      ],
      ctaPrimary: 'Descubre Nexo',
      ctaSecondary: 'Pide una demo',
      imageAlt: 'Panel de control de Nexo con resumen de contactos, pipeline abierto y facturación',
    },
    portfolio: {
      eyebrow: 'Porfolio',
      h2: 'Proyectos ya construidos',
      imageAltPrefix: 'Captura de',
    },
    process: {
      eyebrow: 'Proceso de trabajo',
      h2: 'Cómo trabajamos',
    },
    socialProof: {
      eyebrow: 'Prueba social',
      h2: 'Lo que dicen los clientes',
    },
    contact: {
      eyebrow: 'Auditoría gratuita',
      h2: 'Pide tu auditoría gratuita',
      subtitle:
        'Te decimos, sin compromiso, qué está frenando a tu negocio y cómo lo resolveríamos. Respondemos por correo o teléfono en menos de 24 horas.',
      calendlyLabel: 'Agendar una llamada',
      form: {
        name: 'Nombre',
        email: 'Email',
        business: 'Negocio',
        message: 'Mensaje',
        submit: 'Enviar',
      },
      status: {
        notConfigured: 'Formulario sin configurar: falta PUBLIC_WEB3FORMS_ACCESS_KEY en el entorno.',
        sending: 'Enviando…',
        success: '¡Gracias! Te responderemos en breve.',
        error: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos por email.',
      },
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Preguntas frecuentes',
      moreLabel: 'Ver todas las preguntas',
    },
    footer: {
      contact: 'Contacto',
      nav: 'Navegación',
      legal: 'Legal',
      googleBusiness: 'Google Business Profile',
      legalLinks: [
        { label: 'Aviso legal', href: '/legal/aviso-legal' },
        { label: 'Privacidad', href: '/legal/privacidad' },
      ],
      resourceLinks: [
        { label: 'Servicios y precios', href: '/servicios' },
        { label: 'Cómo funciona el cobro', href: '/cobro' },
        { label: 'Soporte', href: '/soporte' },
        { label: 'Todas las dudas', href: '/dudas' },
        { label: 'Nexo (CRM)', href: '/nexo' },
      ],
      rights: 'Todos los derechos reservados.',
    },
    quiz: {
      eyebrow: '¿Podemos ayudarte?',
      h1: 'Cuéntanos qué necesita tu negocio',
      subtitle:
        'Unas pocas preguntas rápidas — al final eliges si prefieres que te escribamos o agendar una llamada directamente.',
      situationQuestion: '¿Qué tienes ahora mismo?',
      situationOptions: [
        'No tengo página web',
        'Tengo web pero no me trae clientes',
        'Tengo web y funciona bien, busco otra cosa',
        'Busco una herramienta para gestionar mi negocio',
      ],
      goalQuestion: '¿Cuál es tu objetivo principal ahora mismo?',
      goalOptions: [
        'Conseguir más clientes',
        'Ahorrar tiempo en tareas del día a día',
        'Modernizar la imagen de mi negocio',
        'Aún no lo tengo claro',
      ],
      timingQuestion: '¿Para cuándo te gustaría tenerlo en marcha?',
      timingOptions: ['Lo antes posible', 'En 1-2 meses', 'Sin prisa, de momento solo miro opciones'],
      sectorQuestion: '¿A qué se dedica tu negocio?',
      sectorOptions: ['Taller', 'Peluquería o estética', 'Clínica o salud', 'Tienda o comercio', 'Inmobiliaria', 'Otro'],
      businessLabel: 'Nombre de tu negocio (opcional)',
      businessPlaceholder: 'Ej. Peluquería Ana',
      resultsHeading: '¡Listo! ¿Cómo prefieres que sigamos?',
      resultsSubtitle: 'Con esto ya tenemos una idea clara de tu situación — tú eliges cómo continuar.',
      emailChoiceLabel: 'Escríbenos un mensaje',
      emailChoiceDesc: 'Te contestamos por email en menos de 24 horas.',
      callChoiceLabel: 'Agenda una llamada de 30 min',
      callChoiceDesc: 'Elige el hueco que mejor te venga, sin esperar a que te contestemos.',
      contactHeading: 'Perfecto — ¿cómo te contactamos?',
      nameLabel: 'Nombre',
      emailLabel: 'Email',
      submitLabel: 'Enviar',
      backLabel: '← Atrás',
      nextLabel: 'Siguiente →',
      backToChoicesLabel: '← Elegir otra opción',
      messagePrefix: 'Cuestionario "¿Podemos ayudarte?"',
    },
    heroQuizTeaser: '¿No sabes por dónde empezar? Haz el test',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    meta: {
      tagline: 'Software design and development studio',
      description:
        'KaizoGroup builds custom software and high-performance websites for businesses in Puertollano and Ciudad Real, Spain. Free audit, no strings attached.',
      keywords: [
        'custom software development Spain',
        'bespoke software development Puertollano',
        'web design and development Ciudad Real',
        'software developer Puertollano',
        'application development Spain',
        'software development studio Spain',
        'web development agency Ciudad Real',
      ],
    },
    skipToContent: 'Skip to main content',
    nav: [
      { label: 'Services', href: '#solucion' },
      { label: 'About us', href: '#sobre-nosotros' },
      { label: 'Portfolio', href: '#porfolio' },
      { label: 'Process', href: '#proceso' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contacto' },
    ],
    header: {
      homeAriaLabel: 'KaizoGroup — home',
      navAriaLabel: 'Main navigation',
      mobileNavAriaLabel: 'Mobile navigation',
      openMenuAriaLabel: 'Open menu',
      ctaLabel: 'Free audit',
    },
    langSwitch: { label: 'Español' },
    hero: {
      eyebrow: 'Kaizen — continuous improvement applied to software',
      h1: 'Custom software that simplifies your day-to-day business',
      subtitle:
        "We find out what's holding your business back and solve it with technology — and we stay by your side after launch, we don't disappear once the project ships.",
      ctaPrimary: 'Free audit',
      ctaSecondary: 'See my work',
      location: 'Puertollano and Ciudad Real, Spain — remote for the rest of the world',
    },
    about: {
      eyebrow: 'About us',
      h2: 'Where the name KaizoGroup comes from',
      body: "At KaizoGroup we don't just write code, we solve problems. The name comes from Kaizen, the Japanese philosophy of continuous improvement — that's how we work: listening first, building only what's needed, and staying by the client's side after the project ships. Based in Puertollano, we work with businesses across Ciudad Real and, remotely, the rest of Spain.",
    },
    problem: {
      eyebrow: 'The problem',
      h2: 'What holds most businesses back',
    },
    solution: {
      eyebrow: 'The solution',
      h2: 'What changes when you work with KaizoGroup',
    },
    nexoFeature: {
      eyebrow: "KaizoGroup's own product",
      h2: 'Nexo: the CRM/ERP we build and sell ourselves',
      body: "Contacts, sales, invoicing, inventory and more in one modular tool — every business pays only for the modules it uses. It's the product we know best, because we built it ourselves from the ground up.",
      sectors: ['Workshops', 'Hair salons', 'Clinics', 'Shops', 'Real estate agencies'],
      modules: [
        { name: 'Contacts', tagline: 'Your entire customer base in one place.' },
        { name: 'Sales pipeline', tagline: 'Track every deal until it closes.' },
        { name: 'Invoicing', tagline: 'From quote to invoice in one click.' },
      ],
      ctaPrimary: 'Discover Nexo',
      ctaSecondary: 'Request a demo',
      imageAlt: 'Nexo dashboard showing a contacts summary, open pipeline and invoicing',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      h2: 'Projects already built',
      imageAltPrefix: 'Screenshot of',
    },
    process: {
      eyebrow: 'How we work',
      h2: 'Our process',
    },
    socialProof: {
      eyebrow: 'Social proof',
      h2: 'What clients say',
    },
    contact: {
      eyebrow: 'Free audit',
      h2: 'Request your free audit',
      subtitle:
        "We'll tell you, with no strings attached, what's holding your business back and how we'd fix it. We reply by email or phone in under 24 hours.",
      calendlyLabel: 'Book a call',
      form: {
        name: 'Name',
        email: 'Email',
        business: 'Business',
        message: 'Message',
        submit: 'Send',
      },
      status: {
        notConfigured: 'Form not configured: PUBLIC_WEB3FORMS_ACCESS_KEY is missing from the environment.',
        sending: 'Sending…',
        success: "Thanks! We'll get back to you shortly.",
        error: 'Could not send the message. Please try again or email us directly.',
      },
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Frequently asked questions',
      moreLabel: 'See all questions',
    },
    footer: {
      contact: 'Contact',
      nav: 'Navigation',
      legal: 'Legal',
      googleBusiness: 'Google Business Profile',
      legalLinks: [
        { label: 'Legal notice', href: '/en/legal/legal-notice' },
        { label: 'Privacy policy', href: '/en/legal/privacy-policy' },
      ],
      resourceLinks: [
        { label: 'Services & pricing', href: '/en/services' },
        { label: 'How billing works', href: '/en/billing' },
        { label: 'Support', href: '/en/support' },
        { label: 'All FAQs', href: '/en/faq' },
        { label: 'Nexo (CRM)', href: '/en/nexo' },
      ],
      rights: 'All rights reserved.',
    },
    quiz: {
      eyebrow: 'Can we help you?',
      h1: 'Tell us what your business needs',
      subtitle:
        "A few quick questions — at the end you choose whether you'd rather we email you or book a call directly.",
      situationQuestion: 'What do you have right now?',
      situationOptions: [
        "I don't have a website",
        "I have a website but it's not bringing customers",
        'I have a website that works well, I need something else',
        "I'm looking for a tool to manage my business",
      ],
      goalQuestion: 'What is your main goal right now?',
      goalOptions: [
        'Getting more customers',
        'Saving time on day-to-day tasks',
        'Modernizing my business image',
        "I'm not sure yet",
      ],
      timingQuestion: 'When would you like it up and running?',
      timingOptions: ['As soon as possible', 'In 1-2 months', "No rush, just looking around"],
      sectorQuestion: 'What does your business do?',
      sectorOptions: ['Workshop', 'Hair salon or beauty', 'Clinic or health', 'Shop or retail', 'Real estate', 'Other'],
      businessLabel: 'Your business name (optional)',
      businessPlaceholder: "E.g. Ana's Hair Salon",
      resultsHeading: "All set! How would you like to continue?",
      resultsSubtitle: "That gives us a clear picture of your situation — you choose how to move forward.",
      emailChoiceLabel: 'Send us a message',
      emailChoiceDesc: "We'll reply by email in under 24 hours.",
      callChoiceLabel: 'Book a 30-min call',
      callChoiceDesc: 'Pick the slot that works best for you, no waiting on a reply.',
      contactHeading: 'Great — how should we reach you?',
      nameLabel: 'Name',
      emailLabel: 'Email',
      submitLabel: 'Send',
      backLabel: '← Back',
      nextLabel: 'Next →',
      backToChoicesLabel: '← Choose a different option',
      messagePrefix: 'Quiz "Can we help you?"',
    },
    heroQuizTeaser: 'Not sure where to start? Take the quiz',
  },
};

export function resolveLang(currentLocale: string | undefined): Lang {
  return currentLocale === 'en' ? 'en' : 'es';
}
