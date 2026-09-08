import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-400 to-glow-cyan animate-pulse-soft" />
      {children}
    </span>
  );
}

export function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
}: {
  badge: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <SectionBadge>{badge}</SectionBadge>
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

export function PrimaryButton({
  children,
  href = "#pricing",
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-glow-violet px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/40 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 active:scale-[0.98]",
        className
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      <svg
        className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </a>
  );
}

export function GhostButton({
  children,
  href = "#features",
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 active:scale-[0.98]",
        className
      )}
    >
      {children}
    </a>
  );
}

export function InfinityLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mw-grad" x1="0" y1="0" x2="48" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818cf8" />
          <stop offset="0.5" stopColor="#e879f9" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        d="M12 4C6.48 4 2 8.48 2 12s4.48 8 10 8c8 0 16-16 24-16 5.52 0 10 4.48 10 8s-4.48 8-10 8c-8 0-16-16-24-16"
        stroke="url(#mw-grad)"
        strokeWidth={3.2}
        strokeLinecap="round"
      />
    </svg>
  );
}
