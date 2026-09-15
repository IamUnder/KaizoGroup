export interface LeadStatusMessages {
  notConfigured: string;
  sending: string;
  success: string;
  error: string;
}

export interface InitLeadFormOptions {
  /** Diferencia en Portledger de dónde viene el lead (formulario normal, cuestionario...). */
  source?: string;
  analyticsEvent?: string;
  subjectPrefix?: string;
  onSuccess?: () => void;
}

/**
 * Cablea un <form> de captura de lead: valida, envía por Web3Forms (vía útil al usuario) y,
 * en paralelo y best-effort, crea el lead en Portledger (CRM interno) si está configurado.
 * Compartido por ContactSection.astro y QualifierQuiz.astro para no duplicar esta lógica.
 */
export function initLeadForm(
  form: HTMLFormElement,
  status: HTMLElement | null,
  options: InitLeadFormOptions = {}
) {
  const {
    source = 'kaizogroup-web',
    analyticsEvent = 'contact_form_submit',
    subjectPrefix = 'Nuevo contacto desde la web',
    onSuccess,
  } = options;

  const i18n: LeadStatusMessages = JSON.parse(form.dataset.i18nStatus || '{}');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const accessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY as string | undefined;
    if (!accessKey) {
      if (status) {
        status.textContent = i18n.notConfigured;
        status.className = 'mt-4 text-sm text-semantic-error';
      }
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    submitButton?.setAttribute('disabled', 'true');
    if (status) {
      status.textContent = i18n.sending;
      status.className = 'mt-4 text-sm text-body';
    }

    const formData = new FormData(form);
    formData.append('access_key', accessKey);
    formData.append('subject', `${subjectPrefix} — ${formData.get('name')}`);

    // Portledger (CRM interno): crea Cliente+Tarea a partir del mismo lead, en paralelo al envío
    // por email. Best-effort a propósito — si falla o no está configurado, no afecta al envío
    // del formulario, que sigue dependiendo únicamente de Web3Forms para la confirmación al usuario.
    const portledgerUrl = import.meta.env.PUBLIC_PORTLEDGER_LEADS_URL as string | undefined;
    const portledgerKey = import.meta.env.PUBLIC_PORTLEDGER_LEADS_KEY as string | undefined;
    if (portledgerUrl && portledgerKey) {
      fetch(portledgerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Api-Key': portledgerKey },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          business: formData.get('business') || undefined,
          message: formData.get('message'),
          source,
          locale: form.dataset.lang || 'es',
          website: formData.get('website') || '',
        }),
      }).catch(() => {});
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        form.reset();
        if (status) {
          status.textContent = i18n.success;
          status.className = 'mt-4 text-sm text-semantic-success';
        }
        window.dispatchEvent(new CustomEvent('kz:analytics', { detail: { event: analyticsEvent } }));
        onSuccess?.();
      } else {
        throw new Error(result.message ?? 'Unknown error');
      }
    } catch (error) {
      if (status) {
        status.textContent = i18n.error;
        status.className = 'mt-4 text-sm text-semantic-error';
      }
    } finally {
      submitButton?.removeAttribute('disabled');
    }
  });
}
