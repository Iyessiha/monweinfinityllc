import { useState } from "react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const contactItems = [
  {
    label: "Email",
    value: "monweci@gmail.com",
    href: "mailto:monweci@gmail.com",
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
    accent: "from-brand-500/20 to-brand-500/5 text-brand-300",
  },
  {
    label: "Téléphone",
    value: "+225 05 00 44 64 64",
    href: "tel:+2250500446464",
    icon: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16l.19.92z" />
      </>
    ),
    accent: "from-emerald-400/20 to-emerald-400/5 text-emerald-300",
  },
  {
    label: "Adresse US (siège)",
    value: "1209 Mountain Road PL NE, STE R\nAlbuquerque, NM 87110, USA",
    href: "https://maps.google.com/?q=1209+Mountain+Road+PL+NE+STE+R+Albuquerque+NM+87110",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    accent: "from-amber-400/20 to-amber-400/5 text-amber-300",
  },
  {
    label: "Adresse opérationnelle",
    value: "Bingerville, Abidjan\nLagunes, Côte d'Ivoire",
    href: undefined,
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </>
    ),
    accent: "from-glow-cyan/20 to-glow-cyan/5 text-cyan-300",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, message } = form;
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:monweci@gmail.com?subject=${encodeURIComponent(`Message de ${name} via MonWe Infinity`)}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            badge="Contact"
            title="Parlons de votre"
            highlight="prochain projet"
            subtitle="Une question, un partenariat, ou simplement envie d'en savoir plus ? On vous répond en moins de 24 h."
          />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Contact cards */}
          <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactItems.map((item) => (
              <div key={item.label} className="glass tilt-card rounded-2xl p-6">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent}`}
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-1.5 block text-sm font-medium text-white whitespace-pre-line transition hover:text-brand-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1.5 text-sm font-medium text-white whitespace-pre-line">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </Reveal>

          {/* Contact form */}
          <Reveal delay={200}>
            <div className="glass rounded-3xl p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">Message envoyé !</h3>
                  <p className="text-sm text-slate-400">
                    Votre client e-mail s'est ouvert avec le message pré-rempli.
                    Nous vous répondrons dans les 24 heures.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 text-sm font-medium text-brand-300 hover:text-brand-400"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="font-display text-xl font-bold text-white">Envoyer un message</h3>

                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-brand-400/50 focus:ring-2 focus:ring-brand-400/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-brand-400/50 focus:ring-2 focus:ring-brand-400/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet ou votre question…"
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-brand-400/50 focus:ring-2 focus:ring-brand-400/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className={cn(
                      "group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-glow-violet px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300",
                      "hover:shadow-xl hover:shadow-brand-500/40 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 active:scale-[0.98]"
                    )}
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative">Envoyer le message</span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
