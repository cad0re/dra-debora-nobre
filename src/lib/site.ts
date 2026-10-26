// Central site configuration. Change phone/address here to update everywhere.
export const SITE = {
  lawyerName: 'Dra. Debora Nobre',
  fullTitle: 'Dra. Debora Nobre — Advocacia Cível e Criminal',
  city: 'Esteio',
  state: 'RS',
  region: 'Esteio e região',
  addressLine: 'Bairro Liberdade, Esteio - RS',
  // Use the international format without "+" or spaces for wa.me links.
  whatsappNumber: '5551999999999',
  whatsappDisplay: '(51) 99999-9999',
  oabDisclaimer:
    'Conforme o Código de Ética e Disciplina da OAB, este site tem caráter meramente informativo e não constitui captação de clientela ou oferta de serviços. As informações aqui apresentadas não substituem a consulta jurídica personalizada.',
} as const;

export const LEGAL_AREAS = ['Cível & Contratos', 'Criminal / Penal', 'Consultoria & Pareceres', 'Outro'] as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
