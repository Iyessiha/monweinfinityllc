import Reveal from "./Reveal";

const brands = [
  "NovaCart",
  "Shopstream",
  "Vantix Labs",
  "Driftline",
  "Peak & Pine Co.",
  "Orbita",
  "Luxe Ledger",
  "FulfillIQ",
  "Kestrel Trade",
  "Bloomora",
];

export default function SocialProof() {
  return (
    <section aria-label="Trusted by leading brands" className="relative border-y border-white/5 bg-white/[0.015] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Powering 12,400+ solo founders, teams &amp; storefronts worldwide
          </p>
        </Reveal>

        <Reveal delay={120} className="relative mt-9 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent"
          />
          <div className="flex w-max animate-marquee gap-14 hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-semibold text-slate-500 transition-colors duration-300 hover:text-slate-200"
              >
                <span className="h-2 w-2 rounded-sm bg-gradient-to-br from-brand-400 to-glow-cyan opacity-60" />
                {brand}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
