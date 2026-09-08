import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const features = [
  {
    title: "AI Growth Copilot",
    desc: "An always-on strategist that studies your sales, spots opportunities, and ships data-backed recommendations before your morning coffee.",
    icon: (
      <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83L16 10h2a4 4 0 0 1 4 4c0 2.21-1.79 4-4 4h-1v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2H6a4 4 0 0 1-4-4 4 4 0 0 1 4-4h2l1.17-1.17A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
    ),
    accent: "from-brand-500/20 to-brand-500/5 text-brand-300",
  },
  {
    title: "One-Click Automations",
    desc: "Orders, invoices, fulfillment, supplier syncs, and follow-ups run themselves. Reclaim 20+ hours every single week.",
    icon: (
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    ),
    accent: "from-amber-400/20 to-amber-400/5 text-amber-300",
  },
  {
    title: "Unified Commerce Hub",
    desc: "Shopify, Amazon, TikTok Shop, WooCommerce, and your own storefront — every channel, one beautiful command center.",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    accent: "from-glow-cyan/20 to-glow-cyan/5 text-cyan-300",
  },
  {
    title: "Real-Time Intelligence",
    desc: "Live margin tracking, cohort analytics, and predictive forecasts rendered in milliseconds — decisions at the speed of thought.",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 15 4-6 4 3 5-8" />
      </>
    ),
    accent: "from-emerald-400/20 to-emerald-400/5 text-emerald-300",
  },
  {
    title: "Dropship Autopilot",
    desc: "Winning-product radar, automated supplier routing, and margin guards purpose-built for modern dropshipping operations.",
    icon: (
      <>
        <path d="M5 8h14l-1.5 9a2 2 0 0 1-2 1.7h-7A2 2 0 0 1 6.5 17L5 8z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),
    accent: "from-glow-fuchsia/20 to-glow-fuchsia/5 text-fuchsia-300",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "SOC 2 Type II, end-to-end encryption, granular roles, and audit trails — bank-level protection at every tier.",
    icon: (
      <>
        <path d="M12 2 4 5.5V11c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5.5L12 2z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    accent: "from-sky-400/20 to-sky-400/5 text-sky-300",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            badge="Features"
            title="Everything you need to"
            highlight="outbuild the market"
            subtitle="One platform replacing seven tools. Designed for solo hustlers and scaled for enterprise — with the same obsessive polish throughout."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 110}>
              <article className="glass tilt-card group h-full rounded-3xl p-7">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.accent} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}
                >
                  <svg
                    className="h-5.5 w-5.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{f.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
