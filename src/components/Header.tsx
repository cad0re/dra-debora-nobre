import { useEffect, useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/site';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0D1117]/90 backdrop-blur-md border-b border-[#C5A059]/15 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-10 h-10 rounded-md border border-[#C5A059]/40 bg-[#161B22] text-[#D4AF37] transition-transform group-hover:scale-105">
            <Scale className="w-5 h-5" strokeWidth={1.5} />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold tracking-wide text-neutral-100">
              {SITE.lawyerName}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#C5A059]/80">
              Advocacia Cível &amp; Criminal
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-300 hover:text-[#D4AF37] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink('Olá, Dra. Debora. Gostaria de uma orientação jurídica.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#0D1117] hover:bg-[#C5A059] transition-colors duration-200"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden text-neutral-200 p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#C5A059]/15 bg-[#0D1117]/95 backdrop-blur-md">
          <nav className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-neutral-300 hover:text-[#D4AF37] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink('Olá, Dra. Debora. Gostaria de uma orientação jurídica.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#0D1117]"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
