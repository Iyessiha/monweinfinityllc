import Reveal from "./Reveal";
import { GhostButton, PrimaryButton } from "./ui";

export default function Cta() {
  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="ring-gradient relative overflow-hidden rounded-[2.5rem] bg-ink-900 px-6 py-16 text-center sm:px-12 sm:py-24">
            {/* Ambient */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[110px] animate-pulse-soft" />
              <div className="absolute bottom-0 left-8 h-48 w-48 rounded-full bg-glow-cyan/15 blur-[90px] animate-float-slow" />
              <div className="absolute bottom-6 right-8 h-48 w-48 rounded-full bg-glow-fuchsia/15 blur-[90px] animate-float" />
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.2) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                  maskImage: "radial-gradient(ellipse 70% 70% at 50% 40%, black 20%, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 40%, black 20%, transparent 75%)",
                }}
              />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                Free plan available forever
              </span>
              <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Your next chapter of growth
                <br />
                <span className="text-gradient">starts today</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Join 12,400+ founders, teams, and storefronts building without limits.
                Set up in minutes — innovate for infinity.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <PrimaryButton href="#pricing" className="w-full sm:w-auto px-8 py-4 text-base">
                  Create your free account
                </PrimaryButton>
                <GhostButton href="#faq" className="w-full sm:w-auto px-8 py-4 text-base">
                  Talk to our team
                </GhostButton>
              </div>
              <p className="mt-6 text-xs text-slate-500">
                No credit card required · Free migration · Cancel anytime
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
