export const FB_PIXEL_ID = '1635316537702515';

// Dispara um evento Padrão ou Customizado
export const trackEvent = (name: string, options: any = {}) => {
  // Apenas executado se window.fbq estiver definido e NÃO estiver no modo de desenvolvimento local
  if (typeof window !== 'undefined' && window.fbq && import.meta.env.MODE !== 'development') {
    // Para deduplicação com API de Conversões (CAPI)
    const eventID = crypto.randomUUID(); 
    window.fbq('track', name, options, { eventID });
  } else if (import.meta.env.MODE === 'development') {
    console.log(`[Pixel do Facebook] ${name} disparado (ignorado em dev):`, options);
  }
};

// ==========================
// FUNÇÕES DE EVENTOS COMUNS
// ==========================

export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq && import.meta.env.MODE !== 'development') {
    window.fbq('track', 'PageView', {}, { eventID: crypto.randomUUID() });
  } else if (import.meta.env.MODE === 'development') {
    console.log(`[Pixel do Facebook] PageView disparado (ignorado em dev)`);
  }
};

export const trackViewContent = (contentName: string, contentId: string, value: number, currency: string = 'BRL') => {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_ids: [contentId],
    content_type: 'product',
    value,
    currency,
  });
};

export const trackInitiateCheckout = (value: number, currency: string = 'BRL') => {
  trackEvent('InitiateCheckout', {
    value,
    currency,
  });
};

export const trackLead = () => {
  trackEvent('Lead');
};

export const trackPurchase = (value: number, currency: string = 'BRL', transactionId: string) => {
  trackEvent('Purchase', {
    value,
    currency,
    transaction_id: transactionId,
  });
};
