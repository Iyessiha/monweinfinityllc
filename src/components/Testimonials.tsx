import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const testimonials = [
  {
    quote:
      "I replaced five subscriptions with Monwe Infinity and cut my admin time by 80%. The AI Copilot caught a pricing mistake that would've cost me $12K. It literally pays for itself.",
    name: "Jasmine Torres",
    role: "Founder, Solstice Skincare",
    initials: "JT",
    gradient: "linear-gradient(135deg, #6366f1, #4338ca)",
  },
  {
    quote:
      "We scaled from 200 to 4,000 orders a day without adding headcount. The automation engine is the closest thing to hiring a flawless ops team overnight.",
    name: "Marcus Reid",
    role: "COO, Driftline Commerce",
    initials: "MR",
    gradient: "linear-gradient(135deg, #a855f7, #7c3aed)",
  },
  {
    quote:
      "As a dropshipper, product research used to eat my weekends. Now the winning-product radar hands me validated ideas every morning. Revenue is up 3× in four months.",
    name: "Aiko Kimura",
    role: "Owner, Kimura Trends",
    initials: "AK",
    gradient: "linear-gradient(135deg, #06b6d4, #0e7490)",
  },
  {
    quote:
      "The reporting suite made our board meetings effortless. Real-time margin data across nine sales channels in one view — our CFO calls it 'the single source of truth.'",
    name: "Sofia Lindqvist",
    role: "CEO, Bloomora Group",
    initials: "SL",
    gradient: "linear-gradient(135deg, #ec4899, #be185d)",
  },
  {
    quote:
      "I'm a freelancer, not an accountant. Monwe handles invoices, follow-ups, and tax exports automatically. First year I've never chased a late payment.",
    name: "Devon Clarke",
    role: "Independent Consultant",
    initials: "DC",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
  {
    quote:
      "Switching took one afternoon. Support migrated everything, and the platform's speed is unreal — dashboards load before I finish clicking. Best tooling decision we've made.",
    name: "Priya Raman",
    role: "Head of Growth, Orbita",
    initials: "PR",
    gradient: "linear-gradient(135deg, #10b981, #047857)",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.26 6.86.83-5.07 4.7 1.35 6.77L12 17.27l-6.04 3.29 1.35-6.77-5.07-4.7 6.86-.83L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/8 blur-[160px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            badge="Testimonials"
            title="Loved by builders who"
            highlight="refuse to settle"
            subtitle="From solo operators to eight-figure brands — hear why thousands trust Monwe Infinity with their growth."
          />
        </Reveal>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 120} className="break-inside-avoid">
              <figure className="glass tilt-card rounded-3xl p-7">
                <Stars />
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-300">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: t.gradient }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
