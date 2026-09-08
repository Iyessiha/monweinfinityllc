import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import { PrimaryButton, SectionBadge } from "./ui";

const pillarKeys = [
  {
    key: "mobileMoney",
    accent: "from-emerald-400/20 to-emerald-400/5 text-emerald-300",
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
        <path d="M9 7h6" />
        <path d="M9 11h6" />
      </>
    ),
  },
  {
    key: "multiCurrency",
    accent: "from-amber-400/20 to-amber-400/5 text-amber-300",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
      </>
    ),
  },
  {
    key: "instantSettlement",
    accent: "from-brand-500/20 to-brand-500/5 text-brand-300",
    icon: (
      <>
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </>
    ),
  },
  {
    key: "dashboard",
    accent: "from-glow-cyan/20 to-glow-cyan/5 text-cyan-300",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 15 4-6 4 3 5-8" />
      </>
    ),
  },
  {
    key: "api",
    accent: "from-glow-violet/20 to-glow-violet/5 text-violet-300",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    key: "security",
    accent: "from-sky-400/20 to-sky-400/5 text-sky-300",
    icon: (
      <>
        <path d="M12 2 4 5.5V11c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5.5L12 2z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];

export default function InfinityPay() {
  const { t } = useTranslation();

  return (
    <section id="infinity-pay" className="relative border-y border-white/5 bg-white/[0.015] py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-brand-600/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionBadge>{t("infinityPay.badge")}</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {t("infinityPay.title")}{" "}
            <span className="text-gradient">{t("infinityPay.highlight")}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            {t("infinityPay.subtitle")}
          </p>
        </Reveal>

        {/* Logo badge */}
        <Reveal delay={100} className="mx-auto mt-10 flex justify-center">
          <div className="ring-gradient inline-flex items-center gap-3 rounded-2xl bg-ink-900 px-7 py-4 shadow-xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/30 to-brand-500/20 text-emerald-300">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Infinity<span className="text-emerald-400">Pay</span>
            </span>
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
              Beta
            </span>
          </div>
        </Reveal>

        {/* Feature pillars */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillarKeys.map((p, i) => (
            <Reveal key={p.key} delay={i * 90}>
              <article className="glass tilt-card group h-full rounded-3xl p-7">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}
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
                    {p.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">
                  {t(`infinityPay.pillars.${p.key}.title`)}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {t(`infinityPay.pillars.${p.key}.desc`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={320}>
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <PrimaryButton href="#contact" className="w-full sm:w-auto px-8 py-4 text-base">
              {t("infinityPay.cta")}
            </PrimaryButton>
          </div>
          <p className="mt-5 text-center text-xs text-slate-600">
            {t("infinityPay.ctaSub")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
