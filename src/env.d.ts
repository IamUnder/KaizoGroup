/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WEB3FORMS_ACCESS_KEY?: string;
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
  readonly PUBLIC_UMAMI_SRC?: string;
  readonly PUBLIC_CLARITY_ID?: string;
  readonly PUBLIC_PORTLEDGER_LEADS_URL?: string;
  readonly PUBLIC_PORTLEDGER_LEADS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
