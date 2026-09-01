# KaizoGroup — Style Reference
> Estudio de diseño y desarrollo de software. Dirección visual propia derivada de la variante en negro del isotipo "KA" (identidad Kaizen): fondo casi-negro editorial, isotipo en blanco/gris sobre fondo oscuro (o negro sobre blanco en superficies claras), tipografía sans técnica y condensada para titulares, y un único acento vivo — ámbar-naranja — reservado para CTAs y micro-interacciones. Cero degradados de color en la marca (los degradados de la carpeta de identidad son para las variantes de producto FIT/SWIM, no aplican aquí).

**Theme:** dark (con contraparte light para secciones/documentos claros)

**Origen del isotipo:** `Identidad visual kaizen/Kaizen (1).pdf`, página 5 (variante monocroma) — isotipo "KA": una K y una A entrelazadas que forman una flecha apuntando a la derecha (progreso/mejora continua, lectura directa del principio "Kaizen").

## Tokens — Colores

| Nombre | Valor | Token | Rol |
|---|---|---|---|
| canvas | `#0c0c0c` | `--color-canvas` | Fondo principal de la página (casi negro, no negro puro) |
| canvas deep | `#000000` | `--color-canvas-deep` | Negro puro — header/footer, isotipo, bloques de máximo contraste |
| canvas light | `#ffffff` | `--color-canvas-light` | Fondo de secciones claras alternas (respiro entre bloques oscuros) |
| surface card | `#161616` | `--color-surface-card` | Tarjetas sobre `canvas` |
| surface card elevated | `#1e1e1e` | `--color-surface-card-elevated` | Tarjetas destacadas / hover |
| surface strong | `#262626` | `--color-surface-strong` | Inputs, botones secundarios |
| ink | `#f5f5f5` | `--color-ink` | Titulares sobre fondo oscuro |
| ink on light | `#0c0c0c` | `--color-ink-on-light` | Titulares sobre fondo claro |
| body | `#a3a3a3` | `--color-body` | Texto de párrafo sobre fondo oscuro |
| body soft | `#7a7a7a` | `--color-body-soft` | Texto secundario / captions |
| muted | `#525252` | `--color-muted` | Placeholders, iconografía apagada |
| hairline | `#232323` | `--color-hairline` | Bordes y separadores sobre fondo oscuro |
| hairline on light | `#e5e5e5` | `--color-hairline-on-light` | Bordes sobre fondo claro |
| accent | `#FF6A2B` | `--color-accent` | Ámbar-naranja — CTA primario, focus states, detalles de la flecha del isotipo |
| accent hover | `#FF824F` | `--color-accent-hover` | Estado hover/active del acento |
| accent ink | `#150800` | `--color-accent-ink` | Texto sobre superficies rellenas de `accent` |
| semantic error | `#ff5c5c` | `--color-semantic-error` | Validación de formulario |
| semantic success | `#3ddc84` | `--color-semantic-success` | Confirmación de envío de formulario |

Regla de oro: **negro, blanco y grises hacen el 95% del peso visual**; el acento aparece solo en 1-2 puntos por sección (un CTA, un icono activo, un subrayado) para que mantenga fuerza de señal.

## Tokens — Tipografía

### 'Space Grotesk', ui-sans-serif, system-ui, sans-serif · `--font-display`
- **Uso:** titulares (h1-h3), logotype textual, cifras destacadas (proceso, stats)
- **Pesos:** 500, 600, 700
- **Por qué:** geometría técnica y algo angulosa que dialoga con los cortes rectos del isotipo "KA" sin imitarlo literalmente.

### 'Inter', ui-sans-serif, system-ui, sans-serif · `--font-body`
- **Uso:** párrafos, navegación, formularios, UI
- **Pesos:** 400, 500, 600
- **Por qué:** máxima legibilidad y neutralidad — deja que el contraste negro/blanco y el acento hagan el trabajo visual.

### 'JetBrains Mono', monospace · `--font-mono`
- **Uso:** etiquetas técnicas puntuales (badges de stack, número de paso en "Proceso de trabajo", metadatos de porfolio)
- **Peso:** 500
- **Por qué:** guiño discreto a "empresa de software" sin convertir toda la página en una terminal.

### Escala tipográfica

| Rol | Tamaño (móvil → desktop) | Line height | Letter spacing | Token |
|---|---|---|---|---|
| display-hero | 40px → 76px | 1.05 | -1.5px | `--text-display-hero` |
| display-lg | 32px → 52px | 1.08 | -1px | `--text-display-lg` |
| display-md | 26px → 36px | 1.15 | -0.4px | `--text-display-md` |
| title | 20px → 24px | 1.3 | 0 | `--text-title` |
| body-lg | 18px | 1.6 | 0 | `--text-body-lg` |
| body | 16px | 1.6 | 0 | `--text-body` |
| caption | 13px | 1.4 | 0.4px | `--text-caption` |
| label-uppercase | 12px | 1.3 | 1.2px | `--text-label-uppercase` |
| mono-tag | 12px | 1.4 | 0 | `--text-mono-tag` |

## Tokens — Espaciado y formas

**Densidad:** cómoda, con mucho aire negativo (el negro necesita respiro para no sentirse pesado)

### Escala de espaciado

| Nombre | Valor | Token |
|---|---|---|
| xxs | 4px | `--spacing-xxs` |
| xs | 8px | `--spacing-xs` |
| sm | 12px | `--spacing-sm` |
| base | 16px | `--spacing-base` |
| md | 24px | `--spacing-md` |
| lg | 32px | `--spacing-lg` |
| xl | 48px | `--spacing-xl` |
| xxl | 64px | `--spacing-xxl` |
| section | 120px (80px en móvil) | `--spacing-section` |

### Radios de borde

| Nombre | Valor | Token |
|---|---|---|
| none | 0px | `--radius-none` — bloques de máximo contraste, isotipo, badges técnicos |
| sm | 6px | `--radius-sm` — inputs, botones |
| md | 10px | `--radius-md` — tarjetas |
| lg | 16px | `--radius-lg` — tarjetas de porfolio, contenedores grandes |
| full | 9999px | `--radius-full` — pills, avatares de testimonios |

### Layout
- **Ancho máximo de contenido:** 1180px
- **Padding lateral móvil:** 20px
- **Gap entre tarjetas de grid:** 24px

## Componentes

### header / nav
- `backgroundColor`: `{colors.canvas-deep}`, sticky con hairline inferior `{colors.hairline}`
- `textColor`: `{colors.ink}`
- CTA del header siempre en `{colors.accent}` relleno, resto de enlaces en `body` con hover a `ink`

### botón primario (CTA)
- `backgroundColor`: `{colors.accent}` · `textColor`: `{colors.accent-ink}`
- `rounded`: `{radius.sm}` · `padding`: `14px 24px` · peso 600
- Hover: `{colors.accent-hover}` + micro-elevación (translateY -1px, transición 150ms)

### botón secundario (outline)
- `backgroundColor`: transparent · `border`: 1px solid `{colors.hairline}` (hover → `{colors.ink}`)
- `textColor`: `{colors.ink}`

### hero
- `backgroundColor`: `{colors.canvas-deep}`
- Isotipo "KA" como elemento gráfico de fondo, muy grande, opacidad baja (5-8%), alineado a la derecha — nunca compite con el copy
- CTA principal (accent) + CTA secundario (outline) lado a lado

### tarjeta de dolor/agitación (sección 3)
- `backgroundColor`: `{colors.surface-card}` · borde 1px `{colors.hairline}`
- Icono en trazo blanco, sin fondo de color — el acento no aparece aquí (esta sección es "el problema", se reserva el color para "la solución")

### tarjeta de solución (sección 4)
- `backgroundColor`: `{colors.surface-card}` · `rounded`: `{radius.md}`
- Número o icono en `{colors.accent}` como único punto de color de la tarjeta

### tarjeta de porfolio
- Imagen full-bleed superior (ratio 16:10) + `rounded`: `{radius.lg}`
- Overlay en hover: barrido sutil de `{colors.canvas-deep}` a 60% + label mono-tag con el stack usado
- Al pasar a claro/oscuro entre proyectos, mantener siempre el marco de tarjeta oscuro para consistencia

### paso de proceso (sección 6)
- Numeración grande en `--font-mono`, color `{colors.accent}`, sobre línea vertical `{colors.hairline}` que conecta los pasos (temporalidad/journey)

### tarjeta de testimonio
- `backgroundColor`: `{colors.surface-card}` · comillas grandes en `{colors.hairline-strong}` como marca de agua
- Placeholder de avatar: círculo `{colors.surface-strong}` con iniciales en mono

### formulario de contacto
- Inputs: `backgroundColor` `{colors.surface-strong}`, sin borde visible salvo focus (`2px solid {colors.accent}`)
- Botón de envío = botón primario
- Mensaje de éxito con icono `semantic-success`, error con `semantic-error`, ambos con `aria-live="polite"`

### acordeón FAQ
- Fondo transparente sobre `canvas`, hairline entre preguntas
- Icono +/− en `{colors.accent}` al expandir

### footer
- `backgroundColor`: `{colors.canvas-deep}` · `textColor`: `{colors.body}`
- Logotipo textual "KaizoGroup" + isotipo pequeño, enlaces en columnas, hairline superior

## Animación (sutil, sin JS pesado)
- Fade-up muy corto (200-250ms, easing `ease-out`) al entrar en viewport para titulares de sección — implementado con IntersectionObserver en una isla mínima, o `@starting-style`/CSS puro si el soporte de navegador lo permite, para no añadir JS innecesario
- Hover de tarjetas: solo `transform` y `border-color`, nunca `box-shadow` de color (mantiene el look plano/editorial)
- El isotipo del hero puede tener un desplazamiento parallax mínimo (opcional, se evalúa si compensa el coste en JS)

## Do's y Don'ts

### Hacer
- Dejar que el negro/blanco/gris construya toda la jerarquía; el acento se gana su sitio solo en puntos de acción o dato clave
- Usar el isotipo "KA" en su versión monocroma (blanco sobre oscuro / negro sobre claro) — nunca las variantes con degradado de color de las apps FIT/SWIM
- Mantener un único `h1` y jerarquía tipográfica coherente con la escala de arriba

### No hacer
- No introducir azul navy ni verde de las otras variantes de marca (FIT/SWIM) — quedan fuera de este proyecto
- No usar el acento en más de 1-2 elementos por sección
- No añadir sombras de color ni glow — el contraste viene de negro/blanco puro, no de efectos de neón
