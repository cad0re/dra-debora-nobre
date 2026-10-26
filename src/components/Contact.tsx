import { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { SITE, LEGAL_AREAS, whatsappLink } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', legal_area: LEGAL_AREAS[0], message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Preencha todos os campos antes de enviar.');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      legal_area: form.legal_area,
      message: form.message.trim(),
      is_emergency: false,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Não foi possível enviar agora. Tente novamente ou fale direto no WhatsApp.');
      return;
    }

    setStatus('success');
    setForm({ name: '', phone: '', legal_area: LEGAL_AREAS[0], message: '' });
  };

  const inputClass =
    'w-full rounded-lg border border-[#C5A059]/20 bg-[#0D1117]/60 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/40 transition-colors';

  return (
    <section id="contato" className="relative py-24 sm:py-32 border-t border-[#C5A059]/10">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37]">Contato</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-neutral-50">
            Fale sobre o seu caso
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Envie uma mensagem descrevendo brevemente a sua situação. O retorno é rápido e sigiloso.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Info panel */}
          <div className="lg:col-span-2 rounded-2xl border border-[#C5A059]/15 bg-[#161B22]/50 p-7 sm:p-8">
            <h3 className="text-lg font-semibold text-neutral-50">Escritório &amp; Atendimento</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Atendimento presencial e online em {SITE.region}.
            </p>

            <ul className="mt-7 space-y-5">
              <li className="flex items-start gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] shrink-0">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">Endereço</p>
                  <p className="text-sm text-neutral-200">{SITE.addressLine}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] shrink-0">
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">Telefone / WhatsApp</p>
                  <p className="text-sm text-neutral-200">{SITE.whatsappDisplay}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] shrink-0">
                  <Clock className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">Horário</p>
                  <p className="text-sm text-neutral-200">Seg. a Sex. · 9h às 18h</p>
                  <p className="text-xs text-[#D4AF37]/90 mt-0.5">Plantão criminal 24h</p>
                </div>
              </li>
            </ul>

            <a
              href={whatsappLink('Olá, Dra. Debora. Gostaria de uma orientação jurídica.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#0D1117] hover:bg-[#C5A059] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Conversar no WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl border border-[#C5A059]/15 bg-[#161B22]/40 p-7 sm:p-8">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37]" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-semibold text-neutral-50">Mensagem enviada</h3>
                <p className="mt-2 text-sm text-neutral-400 max-w-sm">
                  Recebemos a sua mensagem. A Dra. Debora Nobre entrará em contato em breve. Para
                  urgências, utilize o WhatsApp.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-[#D4AF37] hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Seu nome completo"
                      className={inputClass}
                      disabled={status === 'submitting'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="(51) 90000-0000"
                      className={inputClass}
                      disabled={status === 'submitting'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Área Jurídica
                  </label>
                  <select
                    value={form.legal_area}
                    onChange={(e) => update('legal_area', e.target.value)}
                    className={inputClass}
                    disabled={status === 'submitting'}
                  >
                    {LEGAL_AREAS.map((area) => (
                      <option key={area} value={area} className="bg-[#0D1117]">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Resumo do Caso
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Descreva brevemente a sua situação..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                    disabled={status === 'submitting'}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#0D1117] hover:bg-[#C5A059] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </button>

                <p className="text-xs text-neutral-500 leading-relaxed">
                  Ao enviar, você concorda em compartilhar seus dados para fins de contato jurídico.
                  Suas informações são tratadas com sigilo profissional absoluto.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
