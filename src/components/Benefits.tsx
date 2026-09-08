import Reveal from "./Reveal";
import { SectionBadge } from "./ui";

const audiences = [
  {
    title: "Self-Employed",
    desc: "Invoicing, client CRM, and tax-ready books handled — so you can bill more hours and chase zero paperwork.",
    metric: "20 hrs",
    metricLabel: "saved weekly",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
      </>
    ),
  },
  {
    title: "Companies",
    desc: "Team workspaces, granular permissions, and executive-grade reporting that scales from 5 seats to 5,000.",
    metric: "3.2×",
    metricLabel: "faster reporting",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
  },
  {
    title: "E-Commerce Brands",
    desc: "Unified inventory, checkout optimization, and retention flows engineered to compound your LTV.",
    metric: "+41%",
    metricLabel: "avg. conversion lift",
    icon: (
      <>
        <path d="M6 6h15l-1.5 9h-12L5 3H2" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
      </>
    ),
  },
  {
    title: "Dropshippers",
    desc: "Product research, supplier automation, and margin protection tuned for high-velocity storefronts.",
    metric: "10 min",
    metricLabel: "store-to-live setup",
    icon: (
      <>
        <path d="M12 2 2 7l10 5 10-5-10-5z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative border-y border-white/5 bg-white/[0.015] py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-glow-fuchsia/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionBadge>Built for you</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              One platform.
              <br />
              <span className="text-gradient">Four ways to win.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400 sm:text-lg">
              Whether you're a one-person empire or a scaling operation, Monwe Infinity adapts to
              the way you work — never the other way around.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["JT", "MR", "AK", "SL"].map((initials, i) => (
                  <span
                    key={initials}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink-950 text-xs font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${["#6366f1", "#a855f7", "#06b6d4", "#ec4899"][i]}, ${["#4338ca", "#7c3aed", "#0e7490", "#be185d"][i]})`,
                    }}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="font-semibold text-white">2,300+ founders</span> joined this month
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 110}>
                <article className="glass tilt-card group h-full rounded-3xl p-7">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-glow-cyan/10 text-brand-300 transition-transform duration-500 group-hover:scale-110">
                      <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {a.icon}
                      </svg>
                    </span>
                    <div className="text-right">
                      <div className="font-display text-2xl font-bold text-gradient">{a.metric}</div>
                      <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                        {a.metricLabel}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{a.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{a.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
