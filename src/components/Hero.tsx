import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { GhostButton, PrimaryButton } from "./ui";

const stats = [
  { value: "12,400+", label: "Businesses scaling" },
  { value: "$480M+", label: "Revenue processed" },
  { value: "99.99%", label: "Platform uptime" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const entrance = cn(
    "transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
    mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  );

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[140px] animate-pulse-soft" />
        <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-glow-cyan/10 blur-[120px] animate-float-slow" />
        <div className="absolute top-1/4 -right-32 h-[380px] w-[380px] rounded-full bg-glow-fuchsia/10 blur-[120px] animate-float" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className={entrance} style={{ transitionDelay: "50ms" }}>
            <a
              href="#platform"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 text-sm text-slate-300 backdrop-blur transition hover:border-brand-400/40 hover:bg-white/10"
            >
              <span className="rounded-full bg-gradient-to-r from-brand-600 to-glow-violet px-2.5 py-0.5 text-xs font-semibold text-white">
                New
              </span>
              Infinity OS 3.0 — AI-native commerce engine
              <svg
                className="h-3.5 w-3.5 text-brand-300 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>

          <h1
            className={cn("mt-8 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl", entrance)}
            style={{ transitionDelay: "150ms" }}
          >
            Innovation without
            <br />
            <span className="text-gradient">limits. Growth</span> without friction.
          </h1>

          <p
            className={cn("mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg lg:text-xl", entrance)}
            style={{ transitionDelay: "270ms" }}
          >
            Monwe Infinity is the all-in-one growth platform for the self-employed, ambitious
            companies, e-commerce brands, and dropshippers — automate operations, unlock insights,
            and scale on infrastructure built for infinity.
          </p>

          <div
            className={cn("mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row", entrance)}
            style={{ transitionDelay: "390ms" }}
          >
            <PrimaryButton href="#pricing" className="w-full sm:w-auto px-8 py-4 text-base">
              Start free — no card required
            </PrimaryButton>
            <GhostButton href="#platform" className="w-full sm:w-auto px-8 py-4 text-base">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
              Watch the platform
            </GhostButton>
          </div>

          <div
            className={cn("mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3", entrance)}
            style={{ transitionDelay: "520ms" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-6 py-5 tilt-card">
                <div className="font-display text-2xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div
          className={cn("relative mx-auto mt-16 max-w-5xl sm:mt-20", entrance)}
          style={{ transitionDelay: "650ms" }}
        >
          <div aria-hidden="true" className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-r from-brand-600/25 via-glow-fuchsia/15 to-glow-cyan/25 blur-3xl" />
          <div className="ring-gradient relative overflow-hidden rounded-2xl bg-ink-900 shadow-2xl shadow-black/60 sm:rounded-3xl">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-4 hidden rounded-md bg-white/5 px-3 py-1 text-xs text-slate-500 sm:block">
                app.monweinfinity.com
              </span>
            </div>
            <img
              src="images/dashboard.png"
              alt="Monwe Infinity analytics dashboard showing revenue growth, KPIs, and order insights"
              className="w-full"
              loading="eager"
            />
          </div>

          {/* Floating cards */}
          <div className="glass-strong absolute -left-4 top-1/4 hidden w-52 rounded-2xl p-4 shadow-2xl animate-float md:block lg:-left-16">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m22 7-8.5 8.5-5-5L2 17" />
                  <path d="M16 7h6v6" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-white">+248% revenue</div>
                <div className="text-xs text-slate-500">vs. last quarter</div>
              </div>
            </div>
          </div>

          <div className="glass-strong absolute -right-4 bottom-1/4 hidden w-56 rounded-2xl p-4 shadow-2xl animate-float-slow md:block lg:-right-16">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-white">1,204 orders automated</div>
                <div className="text-xs text-slate-500">in the last 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
