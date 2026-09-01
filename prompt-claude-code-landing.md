# Prompt para Claude Code — Landing page freelance dev (Astro)

## Contexto del proyecto

Quiero construir una landing page de una sola página (one-page) para promocionar mis servicios de desarrollo freelance dirigidos a negocios locales de **Puertollano y Ciudad Real**. Ofrezco desarrollo web, software a medida y tengo un PaaS/CRM propio que puedo mostrar como parte de mi porfolio, además de otros proyectos ya construidos (MVP de tracking de gimnasio, tienda para plataforma de construcción, etc.).

**Antes de escribir ni una línea de código**, analiza teniendo en cuenta el archivo `Composio-DESIGN.md` en la raíz del proyecto con la dirección de diseño (paleta de colores, tipografía, tono visual, estilo de componentes, espaciados, animaciones sutiles) para un negocio de desarrollo software moderno y de confianza, dirigido a pymes locales. No copies ningún diseño existente — propón una dirección propia y coherente. Preséntamela antes de empezar a maquetar.

## Stack técnico (obligatorio)

- **Astro** como framework principal, generando HTML estático (arquitectura islands, cero JS por defecto salvo donde sea estrictamente necesario — ej. el formulario o algún componente interactivo).
- **Tailwind CSS** para estilos, mobile-first.
- Imágenes optimizadas: usa el componente `<Image />` de Astro o `astro:assets` para servir automáticamente en **WebP/AVIF** con **lazy loading** nativo, excepto la imagen principal above-the-fold (esa con `loading="eager"`/prioridad para no penalizar el LCP).
- Sin dependencias innecesarias. Evalúa cada librería antes de añadirla — prioriza rendimiento sobre comodidad.
- Preparado para desplegar en Vercel, Netlify o Cloudflare Pages (indícame cuál recomiendas y por qué, dado que solo es una landing estática con un formulario).

## Requisitos de SEO

- Metadatos completos por página: `title` y `meta description` con **palabras clave locales** (ej. "desarrollo web Puertollano", "software a medida Ciudad Real").
- Open Graph y Twitter Card configurados.
- **Schema.org tipo `LocalBusiness`** (JSON-LD) embebido en el `<head>`, con nombre, área de servicio (Puertollano, Ciudad Real y alrededores), tipo de negocio, y datos de contacto.
- HTML semántico correcto (un solo `h1`, jerarquía de headings lógica).
- Sitemap.xml y robots.txt generados automáticamente (usa la integración oficial `@astrojs/sitemap`).
- Verifica que el resultado pase bien en **Core Web Vitals** — al terminar, dame instrucciones de cómo comprobarlo yo mismo con PageSpeed Insights.

## Estructura de contenido de la página

Quiero una narrativa tipo funnel, con estas secciones en este orden:

1. **Header/Nav** — logo, navegación ancla a secciones, CTA destacado ("Auditoría gratis" o similar) siempre visible.
2. **Hero** — propuesta de valor clara en una frase, subtítulo, CTA principal y CTA secundario (ej. "ver mi trabajo").
3. **Problema/Agitación** — 3-4 puntos de dolor habituales de un negocio local sin buena presencia digital (web lenta, no aparece en Google, no convierte visitas, mantenimiento eterno). Sin copiar textos de terceros, redáctalos desde cero.
4. **Solución / Qué incluyo** — bloques explicando qué ofrezco (desarrollo a medida, SEO, métricas, mantenimiento) y qué cambia para el cliente en cada uno.
5. **Porfolio / Proyectos** — grid de tarjetas enlazando a mis proyectos existentes (dejaré placeholders configurables: nombre, captura, descripción corta, link externo).
6. **Proceso de trabajo** — pasos numerados de cómo trabajo (escucha inicial, propuesta, desarrollo, lanzamiento, acompañamiento).
7. **Prueba social** — sección preparada para testimonios/logos de clientes (dejar como componente reutilizable aunque de momento tenga contenido placeholder).
8. **CTA de auditoría gratuita / presupuesto sin compromiso** — formulario de contacto simple (nombre, email, negocio, mensaje) + opción de enlazar a Calendly o similar si more adelante quiero agendar llamadas.
9. **FAQ** — acordeón con preguntas frecuentes (precio, plazos, mantenimiento, cómo contactar).
10. **Footer** — datos de contacto, enlace a ficha de **Google Business Profile**, redes sociales, aviso legal/privacidad (dejar como páginas placeholder).

## Formulario de contacto

- Sin backend propio: intégralo con **Web3Forms** o **Formspree** (recomiéndame cuál encaja mejor con Astro estático y déjalo configurable con variables de entorno).
- Validación en cliente con JS mínimo (isla de Astro), y mensaje de éxito/error accesible.
- El envío del formulario debe disparar un **evento de conversión** (ver siguiente sección).

## Analítica y medición

- Integra **Plausible** o **Umami** (recomiéndame cuál es más sencillo de autoalojar o usar en modo cloud gratuito/barato, priorizando privacidad y que no afecte al rendimiento).
- Configura **eventos de conversión personalizados** para:
  - Envío del formulario de contacto.
  - Clics en las tarjetas de porfolio (salida hacia proyectos externos).
  - Clic en el CTA principal del hero.
- Deja hueco para integrar un mapa de calor (ej. Microsoft Clarity) como script opcional activable por variable de entorno.

## Rendimiento

- Todo el CSS crítico inline si es necesario para el above-the-fold.
- Fuentes autoalojadas (no Google Fonts vía CDN externo) para evitar bloqueos de renderizado, usando `@font-face` con `font-display: swap`.
- Ningún script de terceros debe cargar de forma bloqueante — analítica y mapa de calor cargados con `defer` o `astro:load` cuando sea posible.

## Entregables que espero de ti

1. Estructura de carpetas del proyecto Astro explicada brevemente.
2. Componentes reutilizables para cada sección listada arriba.
3. Configuración de SEO, sitemap y JSON-LD.
4. Formulario funcional con el proveedor que recomiendes.
5. Integración de analítica con eventos de conversión.
6. Instrucciones de despliegue paso a paso.
7. Checklist final de verificación (SEO, rendimiento, mobile, accesibilidad básica).

No generes contenido de texto final de marketing todavía (títulos, copy definitivo) — usa placeholders claros y editables, ya que el copy lo iremos afinando juntos después de ver la estructura y el diseño.
