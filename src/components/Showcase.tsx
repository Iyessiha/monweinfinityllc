import { useState } from "react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const tabs = [
  {
    id: "analytics",
    label: "Analytics",
    title: "See every dollar in real time",
    desc: "Live margin tracking across every channel, predictive revenue forecasts, and cohort insights that tell you exactly where growth hides.",
    points: ["Profit-first dashboards updated every second", "AI anomaly alerts before problems cost you", "Channel-level attribution without spreadsheets"],
  },
  {
    id: "automation",
    label: "Automation",
    title: "Run your business on autopilot",
    desc: "Visual workflow builder with 200+ pre-built recipes. Orders route, suppliers sync, customers hear back — all while you sleep.",
    points: ["Drag-and-drop workflow canvas", "Smart supplier routing & inventory syncing", "Automated invoicing, taxes, and payouts"],
  },
  {
    id: "growth",
    label: "Growth AI",
    title: "Your unfair competitive advantage",
    desc: "The Growth Copilot studies millions of market signals to surface winning products, pricing sweet spots, and untapped audiences.",
    points: ["Winning-product radar refreshed daily", "Dynamic pricing recommendations", "Audience & trend intelligence built in"],
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="platform" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-glow-cyan/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            badge="The Platform"
            title="A command center that feels"
            highlight="like the future"
            subtitle="Explore the workspace trusted by founders shipping millions in GMV — meticulously crafted, ridiculously fast."
          />
        </Reveal>

        <Reveal delay={150}>
          <div
            role="tablist"
            aria-label="Platform capabilities"
            className="mx-auto mt-12 flex w-fit max-w-full flex-wrap justify-center gap-1.5 rounded-full glass p-1.5"
          >
            {tabs.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={active === i}
                aria-controls={`panel-${t.id}`}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400",
                  active === i
                    ? "bg-gradient-to-r from-brand-600 to-glow-violet text-white shadow-lg shadow-brand-600/30"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div key={tab.id} className="order-2 lg:order-1">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{tab.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{tab.desc}</p>
              <ul className="mt-7 space-y-4">
                {tab.points.map((p, i) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 opacity-0"
                    style={{ animation: `fade-in-up 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 120 + 100}ms forwards` }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500/25 to-glow-cyan/15 text-brand-300">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm text-slate-300 sm:text-base">{p}</span>
                  </li>
                ))}
              </ul>
              <style>{`@keyframes fade-in-up { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div aria-hidden="true" className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-600/20 via-transparent to-glow-cyan/20 blur-2xl" />
                <div className="ring-gradient relative overflow-hidden rounded-2xl bg-ink-900 shadow-2xl shadow-black/50">
                  <img
                    src="images/dashboard.png"
                    alt={`Monwe Infinity ${tab.label} view`}
                    className="w-full transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
