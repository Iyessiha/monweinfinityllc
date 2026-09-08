import { useState } from "react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const plans = [
  {
    name: "Launch",
    tagline: "For the self-employed getting started",
    monthly: 0,
    yearly: 0,
    cta: "Start for free",
    features: [
      "1 storefront or workspace",
      "Core analytics dashboard",
      "50 automated tasks / month",
      "Invoicing & client CRM",
      "Community support",
    ],
    featured: false,
  },
  {
    name: "Scale",
    tagline: "For growing brands & dropshippers",
    monthly: 49,
    yearly: 39,
    cta: "Start 14-day free trial",
    features: [
      "Unlimited storefronts & channels",
      "AI Growth Copilot & product radar",
      "Unlimited automations",
      "Real-time margin intelligence",
      "Priority 24/7 support",
      "Advanced integrations (Shopify, Amazon, TikTok)",
    ],
    featured: true,
  },
  {
    name: "Infinity",
    tagline: "For companies scaling without limits",
    monthly: 149,
    yearly: 119,
    cta: "Talk to sales",
    features: [
      "Everything in Scale",
      "Unlimited team seats & granular roles",
      "SOC 2 reports & SSO / SAML",
      "Dedicated success manager",
      "Custom API & white-label options",
      "99.99% uptime SLA",
    ],
    featured: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative border-y border-white/5 bg-white/[0.015] py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-glow-cyan/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            badge="Pricing"
            title="Simple pricing that"
            highlight="scales with you"
            subtitle="Start free. Upgrade when you're ready. Cancel anytime — no contracts, no surprises."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium transition-colors", !yearly ? "text-white" : "text-slate-500")}>
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              aria-label="Toggle yearly billing"
              onClick={() => setYearly(!yearly)}
              className="relative h-8 w-14 rounded-full bg-ink-700 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
            >
              <span
                className={cn(
                  "absolute top-1 left-1 h-6 w-6 rounded-full bg-gradient-to-br from-brand-400 to-glow-violet shadow-lg transition-transform duration-300",
                  yearly && "translate-x-6"
                )}
              />
            </button>
            <span className={cn("flex items-center gap-2 text-sm font-medium transition-colors", yearly ? "text-white" : "text-slate-500")}>
              Yearly
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                Save 20%
              </span>
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 130} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500",
                  plan.featured
                    ? "ring-gradient bg-gradient-to-b from-brand-600/15 via-ink-900 to-ink-900 shadow-2xl shadow-brand-600/20 lg:-my-4 lg:py-12"
                    : "glass tilt-card"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600 to-glow-violet px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-600/40">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-white">
                    ${yearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-sm text-slate-500">/ month</span>
                </div>
                {plan.monthly > 0 && (
                  <p className="mt-1.5 text-xs text-slate-500">
                    {yearly ? "Billed annually" : "Billed monthly"} · 14-day free trial
                  </p>
                )}

                <a
                  href="#cta"
                  className={cn(
                    "mt-7 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 active:scale-[0.98]",
                    plan.featured
                      ? "bg-gradient-to-r from-brand-600 via-brand-500 to-glow-violet text-white shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-500/40 hover:brightness-110"
                      : "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                  )}
                >
                  {plan.cta}
                </a>

                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <svg
                        className={cn("mt-0.5 h-4.5 w-4.5 shrink-0", plan.featured ? "text-brand-300" : "text-emerald-400")}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center text-sm text-slate-500">
            All plans include bank-level encryption, GDPR compliance, and free migration support.
            <span className="text-slate-400"> Questions? </span>
            <a href="#faq" className="font-medium text-brand-300 underline-offset-4 transition hover:text-brand-400 hover:underline">
              Read the FAQ
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
