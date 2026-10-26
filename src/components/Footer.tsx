import { Scale, MessageCircle, MapPin } from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative border-t border-[#C5A059]/15 bg-[#0D1117]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-9 h-9 rounded-md border border-[#C5A059]/40 bg-[#161B22] text-[#D4AF37]">
                <Scale className="w-4 h-4" strokeWidth={1.5} />
              </span>
              <span className="text-sm font-semibold text-neutral-100">{SITE.fullTitle}</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-neutral-500 max-w-xs">
              Advocacia Cível e Criminal em {SITE.region}, com ética, técnica e compromisso integral
              com o cliente.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]/80">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Áreas de Atuação', href: '#areas' },
                { label: 'Diferenciais', href: '#diferenciais' },
                { label: 'Contato', href: '#contato' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-neutral-400 hover:text-[#D4AF37] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]/80">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                {SITE.addressLine}
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                {SITE.whatsappDisplay}
              </li>
            </ul>
            <a
              href={whatsappLink('Olá, Dra. Debora. Gostaria de uma orientação jurídica.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-[#C5A059]/30 px-4 py-2 text-xs font-semibold text-neutral-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-[#C5A059]/15 bg-[#161B22]/40 p-5">
          <p className="text-[11px] leading-relaxed text-neutral-500">{SITE.oabDisclaimer}</p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#C5A059]/10 pt-6">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} {SITE.fullTitle}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-neutral-600">Inscrição na OAB/RS</p>
        </div>
      </div>
    </footer>
  );
}
