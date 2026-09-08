import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { InfinityLogo, PrimaryButton } from "./ui";

const links = [
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#platform" },
  { label: "Benefits", href: "#benefits" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ onNavigatePay }: { onNavigatePay?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 transition-all duration-500",
          scrolled && "px-3 sm:px-4"
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled ? "glass-strong shadow-2xl shadow-black/40" : "bg-transparent border border-transparent"
          )}
        >
          <a href="#top" className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400 rounded-lg">
            <InfinityLogo className="h-6 w-12" />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Monwe<span className="text-brand-400"> Infinity</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            {onNavigatePay && (
              <button
                type="button"
                onClick={onNavigatePay}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-500/20 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                </svg>
                Infinity Pay
              </button>
            )}
            <PrimaryButton href="#pricing" className="px-6 py-2.5">
              Start free
            </PrimaryButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-full rounded bg-current transition-all duration-300",
                  open && "top-1.5 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-full rounded bg-current transition-all duration-300",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-0.5 w-full rounded bg-current transition-all duration-300",
                  open && "top-1.5 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 mx-4 origin-top rounded-2xl glass-strong p-6 shadow-2xl transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-white/10 pt-4 flex flex-col gap-2">
          {onNavigatePay && (
            <button
              type="button"
              onClick={() => { setOpen(false); onNavigatePay(); }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Infinity Pay
            </button>
          )}
          <PrimaryButton href="#pricing" className="w-full">
            Start free
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
}
