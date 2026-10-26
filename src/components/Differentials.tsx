import { HeartHandshake, ShieldCheck, MessagesSquare } from 'lucide-react';

const DIFFS = [
  {
    icon: HeartHandshake,
    title: 'Atendimento Personalizado e Próximo',
    desc: 'Cada cliente é atendido diretamente pela advogada, com escuta atenta e dedicação integral ao caso.',
  },
  {
    icon: ShieldCheck,
    title: 'Atuação Preventiva e Litigiosa',
    desc: 'Soluções que evitam conflitos antes que se tornem processos e defesa firme quando o litígio é necessário.',
  },
  {
    icon: MessagesSquare,
    title: 'Comunicação Clara e Transparente',
    desc: 'Acompanhamento constante sobre o andamento dos processos, sem termos complicados e sem promessas vazias.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 sm:py-32 border-t border-[#C5A059]/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37]">Diferenciais Competitivos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-neutral-50">
            Por que confiar a sua causa à nossa advocacia
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {DIFFS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-[#C5A059]/15 bg-[#161B22]/40 p-7 transition-all duration-300 hover:border-[#C5A059]/45 hover:-translate-y-1"
            >
              <span className="text-[11px] font-mono text-[#C5A059]/60">0{i + 1}</span>
              <Icon className="mt-4 w-7 h-7 text-[#D4AF37]" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-semibold text-neutral-50">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{desc}</p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-[#C5A059]/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
