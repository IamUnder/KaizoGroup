# ---- Build stage ----
FROM node:22-alpine AS build
WORKDIR /app

# Variables PUBLIC_* de Astro: se resuelven en build time y quedan horneadas
# en el HTML/JS estático generado — por eso son build args, no env vars de runtime.
ARG PUBLIC_WEB3FORMS_ACCESS_KEY
ARG PUBLIC_PLAUSIBLE_DOMAIN
ARG PUBLIC_CLARITY_ID
ENV PUBLIC_WEB3FORMS_ACCESS_KEY=$PUBLIC_WEB3FORMS_ACCESS_KEY \
    PUBLIC_PLAUSIBLE_DOMAIN=$PUBLIC_PLAUSIBLE_DOMAIN \
    PUBLIC_CLARITY_ID=$PUBLIC_CLARITY_ID

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Runtime stage ----
FROM nginx:1.27-alpine AS runtime

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# 127.0.0.1 explícito, no "localhost": nginx solo escucha en IPv4 y el wget de busybox
# resuelve "localhost" primero a ::1 (IPv6) sin caer de vuelta a IPv4, dando siempre
# "Connection refused" aunque el sitio funcione bien.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
