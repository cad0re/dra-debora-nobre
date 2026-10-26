import { Scale, Eye, Swords, UserCheck } from 'lucide-react';

const PILLARS = [
  { icon: Scale, title: 'Ética', desc: 'Conduta pautada nos princípios da advocacia e no respeito ao cliente.' },
  { icon: Eye, title: 'Transparência', desc: 'Clareza total sobre estratégia, prazos e expectativas do processo.' },
  { icon: Swords, title: 'Combatividade', desc: 'Atuação firme e técnica na defesa dos direitos do cliente.' },
  { icon: UserCheck, title: 'Foco no Cliente', desc: 'Soluções jurídicas moldadas à realidade e ao objetivo de cada caso.' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Visual / monogram card */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm aspect-[4/5] rounded-2xl border border-[#C5A059]/20 bg-gradient-to-br from-[#161B22] to-[#0D1117] p-8 flex flex-col justify-between overflow-hidden">
              <div className="pointer-events-none absolute -right-16 -top-16 w-48 h-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059]/80">OAB/RS</span>
                <Scale className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <div className="relative">
                <p className="text-7xl font-semibold text-[#D4AF37] leading-none">DN</p>
                <p className="mt-4 text-lg text-neutral-200 font-medium">Dra. Debora Nobre</p>
                <p className="mt-1 text-sm text-neutral-400">Advogada · Cível &amp; Criminal</p>
              </div>
              <p className="text-xs leading-relaxed text-neutral-500 border-t border-[#C5A059]/15 pt-5">
                Atuação dedicada em {`Esteio`} e região, com compromisso técnico e humano em cada
                caso conduzido.
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37]">Sobre</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight text-neutral-50">
              Advocacia com clareza, estratégia e transparência
            </h2>
            <p className="mt-5 text-neutral-400 leading-relaxed">
              Dra. Debora Nobre é uma advogada dedicada à prestação de soluções jurídicas claras,
              estratégicas e transparentes. Acreditando que cada caso exige escuta atenta e
              planejamento técnico, atua de forma próxima ao cliente — do primeiro atendimento à
              conclusão do processo — com responsabilidade, sigilo e compromisso integral com o
              resultado.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {PILLARS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-[#C5A059]/15 bg-[#161B22]/50 p-5 hover:border-[#C5A059]/40 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                  <h3 className="mt-3 text-sm font-semibold text-neutral-100">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
