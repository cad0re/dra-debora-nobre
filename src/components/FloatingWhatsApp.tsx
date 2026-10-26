import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/site';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const t = setTimeout(() => setShowTip(true), 4000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-end gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      {showTip && (
        <div className="relative mb-1 max-w-[220px] rounded-xl border border-[#C5A059]/30 bg-[#161B22] px-4 py-3 shadow-lg">
          <button
            onClick={() => setShowTip(false)}
            className="absolute -top-2 -right-2 grid place-items-center w-5 h-5 rounded-full bg-[#0D1117] border border-[#C5A059]/40 text-neutral-400 hover:text-neutral-100"
            aria-label="Fechar"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-xs leading-relaxed text-neutral-300">
            Precisa de orientação jurídica? Fale agora com a {SITE.lawyerName}.
          </p>
        </div>
      )}

      <a
        href={whatsappLink('Olá, Dra. Debora. Gostaria de uma orientação jurídica.')}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTip(true)}
        className="group grid place-items-center w-14 h-14 rounded-full bg-[#D4AF37] text-[#0D1117] shadow-[0_8px_30px_-6px_rgba(212,175,55,0.5)] hover:bg-[#C5A059] transition-all hover:scale-105"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" strokeWidth={2} />
        <span className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-20 group-hover:animate-none" />
      </a>
    </div>
  );
}
