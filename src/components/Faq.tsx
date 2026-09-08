import { useState } from "react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const faqs = [
  {
    q: "Who is Monwe Infinity built for?",
    a: "Monwe Infinity is designed for the self-employed, growing companies, e-commerce brands, and dropshippers. Whether you're a freelancer sending your first invoice or an operation processing thousands of orders a day, the platform adapts to your scale with the same premium experience.",
  },
  {
    q: "How long does setup take?",
    a: "Most users are fully live in under 10 minutes. Connect your store or workspace, and our onboarding assistant imports your products, orders, and customer data automatically. Our team also offers free white-glove migration from any major platform.",
  },
  {
    q: "Which platforms and tools do you integrate with?",
    a: "We natively integrate with Shopify, WooCommerce, Amazon, TikTok Shop, Etsy, Stripe, PayPal, QuickBooks, Slack, and 80+ other tools. Our open API and webhook system let developers build custom connections in hours, not weeks.",
  },
  {
    q: "Is my business data secure?",
    a: "Absolutely. We are SOC 2 Type II certified with end-to-end AES-256 encryption at rest and in transit, granular role-based access control, complete audit trails, and GDPR/CCPA compliance. Your data is never sold or shared — full stop.",
  },
  {
    q: "Can I cancel or change plans anytime?",
    a: "Yes. There are no contracts or lock-ins. Upgrade, downgrade, or cancel in two clicks from your billing settings. If you cancel, you keep full data export access for 90 days.",
  },
  {
    q: "Do you offer support for growing teams?",
    a: "Every plan includes support — Scale customers get priority 24/7 chat and email, while Infinity customers receive a dedicated success manager, quarterly growth reviews, and a 99.99% uptime SLA backed by credits.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            badge="FAQ"
            title="Questions,"
            highlight="answered"
            subtitle="Everything you need to know before getting started. Still curious? Our team replies within the hour."
          />
        </Reveal>

        <div className="mt-14 space-y-3.5">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 70}>
                <div
                  className={cn(
                    "glass overflow-hidden rounded-2xl transition-all duration-300",
                    isOpen && "border-brand-400/30 bg-white/[0.06]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-400"
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">{item.q}</span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300",
                        isOpen && "rotate-45 border-brand-400/40 text-brand-300"
                      )}
                      aria-hidden="true"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
