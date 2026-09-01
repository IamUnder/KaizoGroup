# KaizoGroup — Landing page

Landing page one-page de KaizoGroup (estudio de diseño y desarrollo de software), construida con
[Astro](https://astro.build) + Tailwind CSS. Salida 100% estática, cero JS por defecto salvo en el
formulario de contacto, el menú móvil (sin JS, vía `<details>`) y las animaciones de entrada.

La dirección de diseño (paleta, tipografía, componentes) está documentada en
[`KaizoGroup-DESIGN.md`](./KaizoGroup-DESIGN.md) — es la fuente de verdad si algo en el código y el
documento difieren.

## Estructura de carpetas

```text
src/
├── assets/            Imágenes que pasan por astro:assets (optimización WebP/AVIF)
│   └── kaizo-mark.png     Isotipo "KA" (variante monocroma)
├── components/         Un componente por sección de la landing (Header, Hero, ProblemSection,
│                        SolutionSection, Portfolio, Process, SocialProof, ContactSection,
│                        FAQSection, Footer) + Icon.astro (set de iconos inline) y Analytics.astro
├── data/
│   └── content.ts       Todo el copy placeholder: pain points, soluciones, porfolio, proceso,
│                         testimonios y FAQ. Editar aquí, no en los componentes.
├── layouts/
│   └── BaseLayout.astro  <head> completo: SEO, OG/Twitter, JSON-LD LocalBusiness, favicon
├── lib/
│   └── site.ts           Config central: nombre, contacto, redes, navegación (placeholders)
├── pages/
│   ├── index.astro        Ensambla todas las secciones
│   ├── robots.txt.ts      robots.txt generado en base a `site` de astro.config.mjs
│   └── legal/              Aviso legal y privacidad (placeholders)
└── styles/
    └── global.css          Tokens de diseño (@theme de Tailwind v4) + estilos base
```

## Variables de entorno

Copia `.env.example` a `.env` y rellena lo que vayas a usar:

```bash
cp .env.example .env
```

| Variable | Para qué sirve | Obligatoria |
|---|---|---|
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | Clave pública de [Web3Forms](https://web3forms.com) para que el formulario de contacto envíe emails sin backend propio. | Sí, si no está el formulario avisa en pantalla de que falta configurar. |
| `PUBLIC_PLAUSIBLE_DOMAIN` | Dominio registrado en [Plausible Analytics](https://plausible.io). Si se deja vacío, no se carga ningún script de analítica. | No |
| `PUBLIC_CLARITY_ID` | ID de proyecto de [Microsoft Clarity](https://clarity.microsoft.com) para mapa de calor. Si se deja vacío, no se carga. | No |

**¿Por qué Web3Forms y no Formspree?** Web3Forms no requiere crear cuenta con verificación de email
por formulario, tiene un plan gratuito más generoso, responde directamente en JSON (fetch simple sin
redirecciones) y no añade marca de agua visible. Formspree es la alternativa si en algún momento
necesitas su panel de gestión de envíos más avanzado.

**¿Por qué Plausible y no Umami?** Plausible cloud es más sencillo de arrancar (sin self-host que
mantener), su script es ~1KB, no usa cookies (no requiere banner de consentimiento) y sus eventos
personalizados encajan igual de bien con Astro. Umami es preferible solo si ya tienes infraestructura
propia donde autoalojarlo sin coste adicional.

## Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build de producción en `./dist/` |
| `npm run preview` | Sirve el build de producción localmente |
| `npx astro check` | Chequeo de tipos y diagnósticos de Astro |

## Despliegue — Cloudflare Pages (recomendado)

Para una landing estática con un formulario que llama a un servicio externo (Web3Forms), no hace
falta backend propio ni un adaptador de Astro. Recomiendo **Cloudflare Pages** sobre Netlify o
Vercel por:

- Red de borde muy grande (TTFB bajo también en España) y build gratuito generoso sin límites de
  ancho de banda agresivos.
- Despliegue directo desde Git con preview deployments por PR, igual que Netlify/Vercel.
- No necesitas Cloudflare Functions ni Workers para nada de este proyecto — es un output puramente
  estático.

Pasos:

1. Sube el repositorio a GitHub/GitLab.
2. En el dashboard de Cloudflare → **Workers & Pages** → **Create** → **Pages** → conecta el repo.
3. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
4. Añade las variables `PUBLIC_*` en **Settings → Environment variables** (mismas que en `.env`).
5. Deploy. Cloudflare te da un dominio `*.pages.dev`; añade tu dominio propio en **Custom domains**.

Netlify y Vercel funcionan igual de bien para este proyecto (`npm run build` / `dist`) si ya tienes
cuenta en alguno de ellos — la diferencia práctica aquí es marginal.

## Analítica — eventos configurados

Con `PUBLIC_PLAUSIBLE_DOMAIN` definido, se registran automáticamente:

- `cta_hero_click` — clic en el CTA principal del hero.
- `portfolio_card_click` — clic en una tarjeta de porfolio (con el nombre del proyecto como prop).
- `contact_form_submit` — envío correcto del formulario de contacto.

## Checklist final de verificación

- [ ] **SEO** — `title`/`description` de `index.astro` actualizados con keywords locales reales;
      JSON-LD (`BaseLayout.astro`) con datos reales de contacto; `site` en `astro.config.mjs`
      apuntando al dominio definitivo.
- [ ] **Sitemap/robots** — tras `npm run build`, comprobar `dist/sitemap-index.xml` y
      `dist/robots.txt` apuntan al dominio correcto.
- [ ] **Rendimiento** — ejecutar [PageSpeed Insights](https://pagespeed.web.dev/) contra la URL
      desplegada (no `localhost`), tanto en modo móvil como escritorio. Objetivo: verde en Core Web
      Vitals (LCP, INP, CLS). Si el LCP es el `<h1>` del hero, no debería haber problema; si alguna
      imagen real de porfolio se convierte en LCP candidate, revisar que tenga `loading="eager"` si
      está above the fold.
- [ ] **Mobile** — probar el menú `<details>` del header, el formulario y el acordeón de FAQ en un
      viewport real de móvil (no solo DevTools).
- [ ] **Accesibilidad básica** — un único `h1`, contraste de texto verificado (el body gris sobre
      negro ya cumple AA), formulario con `label` asociado a cada campo, mensaje de estado del
      formulario con `aria-live`.
- [ ] **Contenido** — sustituir todos los placeholders entre `[corchetes]` en `src/data/content.ts`,
      `src/lib/site.ts` y los `h1`/subtítulos de cada componente de sección.
- [ ] **OG image** — `public/og-image.png` es un placeholder generado a partir del isotipo; sustituir
      por una imagen 1200×630 definitiva cuando haya copy final.
