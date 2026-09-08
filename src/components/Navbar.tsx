import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../utils/cn";
import { InfinityLogo, PrimaryButton } from "./ui";
import LangSwitcher from "./LangSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.asili"), href: "#asili" },
    { label: t("nav.infinityPay"), href: "#infinity-pay" },
    { label: t("nav.platform"), href: "#platform" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ];

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
              Mon<span className="text-brand-400">We</span> Infinity
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden xl:flex items-center gap-3">
            <LangSwitcher />
            <PrimaryButton href="#pricing" className="px-6 py-2.5">
              {t("nav.startFree")}
            </PrimaryButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 xl:hidden"
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
          "fixed inset-x-0 top-[72px] z-40 mx-4 origin-top rounded-2xl glass-strong p-6 shadow-2xl transition-all duration-300 xl:hidden",
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
        <div className="mt-4 border-t border-white/10 pt-4 flex flex-col gap-3">
          <LangSwitcher className="w-fit" />
          <PrimaryButton href="#pricing" className="w-full">
            {t("nav.startFree")}
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
}
