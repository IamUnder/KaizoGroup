/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WEB3FORMS_ACCESS_KEY?: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
  readonly PUBLIC_CLARITY_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
