import {
  FileText,
  Gavel,
  ShieldCheck,
  Building2,
  ShoppingCart,
  AlertTriangle,
  PhoneCall,
  MessageCircle,
  Scale,
  Check,
} from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/site';

const CIVIL_ITEMS = [
  { icon: ShieldCheck, text: 'Responsabilidade Civil' },
  { icon: FileText, text: 'Ações Indenizatórias' },
  { icon: Building2, text: 'Direito Imobiliário' },
  { icon: ShoppingCart, text: 'Direito do Consumidor' },
];

const CRIMINAL_ITEMS = [
  { icon: Gavel, text: 'Defesa Criminal Especializada' },
  { icon: PhoneCall, text: 'Acompanhamento em Delegacia' },
  { icon: AlertTriangle, text: 'Flagrantes e Audições de Custódia' },
  { icon: ShieldCheck, text: 'Plantão 24h para Emergências' },
];

function AreaCard({
  badge,
  title,
  subtitle,
  items,
  icon: Icon,
}: {
  badge: string;
  title: string;
  subtitle: string;
  items: { icon: typeof Scale; text: string }[];
  icon: typeof Scale;
}) {
  return (
    <div className="group relative rounded-2xl border border-[#C5A059]/15 bg-[#161B22]/40 backdrop-blur-sm p-7 sm:p-8 transition-all duration-300 hover:border-[#C5A059]/45 hover:bg-[#161B22]/70 hover:-translate-y-1">
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#D4AF37]/5 to-transparent" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="grid place-items-center w-12 h-12 rounded-xl border border-[#C5A059]/30 bg-[#0D1117] text-[#D4AF37]">
            <Icon className="w-6 h-6" strokeWidth={1.5} />
          </span>
          <span className="rounded-full border border-[#C5A059]/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#C5A059]/90">
            {badge}
          </span>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-neutral-50">{title}</h3>
        <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{subtitle}</p>
        <ul className="mt-6 space-y-3">
          {items.map(({ icon: ItemIcon, text }) => (
            <li key={text} className="flex items-center gap-3 text-sm text-neutral-300">
              <span className="grid place-items-center w-7 h-7 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] shrink-0">
                <ItemIcon className="w-3.5 h-3.5" strokeWidth={1.75} />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PracticeAreas() {
  return (
    <section id="areas" className="relative py-24 sm:py-32 border-t border-[#C5A059]/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37]">Áreas de Atuação</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-neutral-50">
            Atuação especializada em Cível e Criminal
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Defesa técnica e acompanhamento jurídico completo, do consultivo ao contencioso, com
            atenção dedicada às necessidades de cada cliente.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <AreaCard
            badge="Cível"
            icon={Scale}
            title="Direito Cível &amp; Contratos"
            subtitle="Responsabilidade Civil, Ações Indenizatórias, Direito Imobiliário e Direito do Consumidor."
            items={CIVIL_ITEMS}
          />
          <AreaCard
            badge="Criminal"
            icon={Gavel}
            title="Direito Criminal / Penal"
            subtitle="Defesa criminal especializada, acompanhamento em delegacia, flagrantes e plantão 24h."
            items={CRIMINAL_ITEMS}
          />
        </div>

        {/* Emergency 24h highlight */}
        <div className="mt-6 relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#161B22] to-[#0D1117] p-7 sm:p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 w-48 h-48 rounded-full bg-[#D4AF37]/15 blur-3xl" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] animate-pulse">
                <AlertTriangle className="w-6 h-6" strokeWidth={1.5} />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-neutral-50">Emergência Criminal 24h</h3>
                  <span className="rounded-full bg-[#D4AF37] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0D1117]">
                    24h
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed max-w-xl">
                  Foi preso em flagrante ou precisa de assistência criminal imediata? Atendimento
                  disponível 24 horas para acompanhamento em delegacia e audições de custódia.
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {['Flagrantes', 'Audição de Custódia', 'Acompanhamento em Delegacia'].map((t) => (
                    <li key={t} className="flex items-center gap-1.5 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href={whatsappLink('EMERGÊNCIA CRIMINAL — Preciso de assistência jurídica imediata.')}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-md bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#0D1117] hover:bg-[#C5A059] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Contatar Agora
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-neutral-500">
          Atendimento em {SITE.region} · Escritório em {SITE.addressLine}
        </p>
      </div>
    </section>
  );
}
