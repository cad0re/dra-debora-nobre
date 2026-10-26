import { MessageCircle, ShieldCheck, Scale, ArrowDown } from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/site';

const TRUST = [
  { icon: Scale, label: 'Atendimento Humanizado' },
  { icon: ShieldCheck, label: 'Agilidade e Rigor Técnico' },
  { icon: ShieldCheck, label: 'Sigilo Profissional Absoluto' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#C5A059]/5 blur-[120px]" />
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#C5A059 1px, transparent 1px), linear-gradient(90deg, #C5A059 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/30 bg-[#161B22]/60 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]">
          {SITE.region} · OAB/RS
        </span>

        <h1 className="mt-7 text-4xl sm:text-6xl font-semibold leading-[1.1] tracking-tight text-neutral-50">
          Defesa Técnica, Rigor Estratégico
          <br className="hidden sm:block" /> e{' '}
          <span className="text-[#D4AF37]">Atendimento Personalizado</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-400">
          Atuação especializada em Direito Cível e Criminal em {SITE.region}, com foco em
          resultados, ética e compromisso integral com o cliente.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappLink('Olá, Dra. Debora. Gostaria de uma orientação jurídica.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-md bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#0D1117] hover:bg-[#C5A059] transition-all duration-200 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.5)]"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
            Falar no WhatsApp (Atendimento Rápido)
          </a>
          <a
            href="#areas"
            className="inline-flex items-center gap-2 rounded-md border border-[#C5A059]/30 px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200"
          >
            Conhecer Áreas de Atuação
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm text-neutral-300">
              <Icon className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
