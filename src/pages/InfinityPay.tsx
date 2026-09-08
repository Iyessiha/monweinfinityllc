import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import Reveal from "../components/Reveal";

/* ─── tiny reusable primitives ─── */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">
      {children}
    </span>
  );
}

function PayHeading({
  badge,
  title,
  highlight,
  subtitle,
}: {
  badge: string;
  title: string;
  highlight: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <Badge>{badge}</Badge>
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}{" "}
        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── Navbar ─── */
function PayNavbar({ onBack }: { onBack: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Features", href: "#pay-features" },
    { label: "How it works", href: "#pay-how" },
    { label: "Security", href: "#pay-security" },
    { label: "Pricing", href: "#pay-pricing" },
    { label: "FAQ", href: "#pay-faq" },
  ];

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "py-2" : "py-4")}>
      <nav aria-label="Infinity Pay navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className={cn("flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6", scrolled ? "glass-strong shadow-2xl shadow-black/40" : "bg-transparent")}>
          {/* Logo */}
          <button onClick={onBack} className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 rounded-lg">
            <svg viewBox="0 0 48 24" fill="none" className="h-6 w-12" aria-hidden="true">
              <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6S6 15.31 6 12z" fill="url(#pg)" />
              <path d="M30 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" fill="url(#pg)" />
              <path d="M18 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" fill="url(#pg2)" opacity=".6" />
              <defs>
                <linearGradient id="pg" x1="0" y1="0" x2="48" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34d399" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
                <linearGradient id="pg2" x1="0" y1="0" x2="48" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34d399" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Monwe<span className="text-emerald-400"> Pay</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={onBack} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              ← Monwe Infinity
            </button>
            <a href="#pay-pricing" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all hover:brightness-110 active:scale-[0.98]">
              Open account free
            </a>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            <div className="relative h-4 w-5">
              <span className={cn("absolute left-0 top-0 h-0.5 w-full rounded bg-current transition-all duration-300", open && "top-1.5 rotate-45")} />
              <span className={cn("absolute left-0 top-1.5 h-0.5 w-full rounded bg-current transition-all duration-300", open && "opacity-0")} />
              <span className={cn("absolute left-0 top-3 h-0.5 w-full rounded bg-current transition-all duration-300", open && "top-1.5 -rotate-45")} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={cn("fixed inset-x-0 top-[72px] z-40 mx-4 origin-top rounded-2xl glass-strong p-6 shadow-2xl transition-all duration-300 lg:hidden", open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0")}>
        <ul className="flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-white/10 pt-4 flex flex-col gap-2">
          <button onClick={onBack} className="text-sm text-slate-400 hover:text-white transition-colors text-left">
            ← Back to Monwe Infinity
          </button>
          <a href="#pay-pricing" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white">
            Open account free
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
const heroStats = [
  { value: "190+", label: "Countries supported" },
  { value: "47", label: "Currencies accepted" },
  { value: "$2.1B+", label: "Payments processed" },
];

function PayHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const e = cn("transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]", mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0");

  return (
    <section id="pay-top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Ambient */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-600/15 blur-[160px] animate-pulse-soft" />
        <div className="absolute top-1/3 -left-40 h-[380px] w-[380px] rounded-full bg-teal-400/10 blur-[120px] animate-float-slow" />
        <div className="absolute top-1/4 -right-32 h-[340px] w-[340px] rounded-full bg-cyan-400/10 blur-[120px] animate-float" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "linear-gradient(rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className={e} style={{ transitionDelay: "50ms" }}>
            <a href="#pay-features" className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 text-sm text-slate-300 backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/10">
              <span className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-2.5 py-0.5 text-xs font-semibold text-white">New</span>
              Instant cross-border settlements — no fees up to $1,000 / month
              <svg className="h-3.5 w-3.5 text-emerald-300 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>

          <h1 className={cn("mt-8 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl", e)} style={{ transitionDelay: "150ms" }}>
            Pay and get paid,
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">anywhere on Earth</span>
          </h1>

          <p className={cn("mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg lg:text-xl", e)} style={{ transitionDelay: "270ms" }}>
            Infinity Pay is the global payment layer of Monwe Infinity — send, receive, and manage money in 47 currencies with instant settlements, smart invoicing, and zero hidden fees.
          </p>

          <div className={cn("mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row", e)} style={{ transitionDelay: "390ms" }}>
            <a href="#pay-pricing" className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all hover:brightness-110 active:scale-[0.98] sm:w-auto">
              Open account free
            </a>
            <a href="#pay-how" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-slate-200 backdrop-blur transition hover:border-white/30 hover:bg-white/10 active:scale-[0.98] sm:w-auto">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
              See how it works
            </a>
          </div>

          {/* Stats */}
          <div className={cn("mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3", e)} style={{ transitionDelay: "520ms" }}>
            {heroStats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-6 py-5">
                <div className="font-display text-2xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard visual */}
        <div className={cn("relative mx-auto mt-16 max-w-5xl sm:mt-20", e)} style={{ transitionDelay: "650ms" }}>
          <div aria-hidden="true" className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-r from-emerald-600/20 via-teal-600/10 to-cyan-600/20 blur-3xl" />
          <div className="ring-1 ring-white/10 relative overflow-hidden rounded-2xl bg-ink-900 shadow-2xl shadow-black/60 sm:rounded-3xl">
            <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-4 hidden rounded-md bg-white/5 px-3 py-1 text-xs text-slate-500 sm:block">pay.monweinfinity.com</span>
            </div>
            {/* Mock dashboard */}
            <PayDashboardMock />
          </div>

          {/* Floating cards */}
          <div className="glass-strong absolute -left-4 top-1/4 hidden w-52 rounded-2xl p-4 shadow-2xl animate-float md:block lg:-left-16">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 16.5A2.5 2.5 0 0 0 4.5 19h15a2.5 2.5 0 0 0 2.5-2.5V8.5A2.5 2.5 0 0 0 19.5 6h-15A2.5 2.5 0 0 0 2 8.5z" />
                  <path d="M2 10h20" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-white">$4,820 received</div>
                <div className="text-xs text-slate-500">in the last hour</div>
              </div>
            </div>
          </div>

          <div className="glass-strong absolute -right-4 bottom-1/4 hidden w-56 rounded-2xl p-4 shadow-2xl animate-float-slow md:block lg:-right-16">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m16 12-4-4-4 4M12 8v8" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-white">Instant settlement</div>
                <div className="text-xs text-slate-500">0 s · confirmed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Dashboard mock UI ─── */
function PayDashboardMock() {
  const txns = [
    { name: "Sophie Martin", country: "🇫🇷", amount: "+$1,240.00", time: "2 min ago", color: "text-emerald-400" },
    { name: "Kofi Mensah", country: "🇬🇭", amount: "+$380.00", time: "14 min ago", color: "text-emerald-400" },
    { name: "Yuki Tanaka", country: "🇯🇵", amount: "-$620.00", time: "1 hr ago", color: "text-rose-400" },
    { name: "Elena Popescu", country: "🇷🇴", amount: "+$2,100.00", time: "3 hr ago", color: "text-emerald-400" },
    { name: "Carlos Rivera", country: "🇲🇽", amount: "+$540.00", time: "5 hr ago", color: "text-emerald-400" },
  ];

  return (
    <div className="grid grid-cols-12 gap-0 divide-x divide-white/5 bg-ink-900 min-h-[400px]">
      {/* Sidebar */}
      <div className="col-span-2 hidden md:flex flex-col gap-1 p-3 border-r border-white/5">
        {[
          ["M", "Dashboard", true],
          ["↑↓", "Transfers", false],
          ["⊞", "Accounts", false],
          ["⊟", "Cards", false],
          ["≡", "Transactions", false],
          ["⚙", "Settings", false],
        ].map(([icon, label, active]) => (
          <div key={String(label)} className={cn("flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium transition-colors cursor-default", active ? "bg-emerald-500/15 text-emerald-300" : "text-slate-500 hover:text-slate-400")}>
            <span className="w-4 text-center">{icon}</span>
            <span className="hidden lg:block">{label}</span>
          </div>
        ))}
      </div>

      {/* Main */}
      <div className="col-span-12 md:col-span-10 p-5 flex flex-col gap-5">
        {/* Balance row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Total balance", value: "$48,320.00", sub: "↑ +12.4% this month", color: "text-emerald-400" },
            { label: "Pending", value: "$3,200.00", sub: "4 transactions", color: "text-amber-400" },
            { label: "Withdrawn", value: "$21,000.00", sub: "This month", color: "text-slate-400" },
          ].map((c) => (
            <div key={c.label} className="rounded-xl bg-white/[0.04] border border-white/5 p-3">
              <div className="text-xs text-slate-500">{c.label}</div>
              <div className="mt-1 font-display text-lg font-bold text-white">{c.value}</div>
              <div className={cn("mt-0.5 text-xs", c.color)}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-slate-300">Payment volume — last 7 days</span>
            <span className="text-xs text-emerald-400 font-semibold">↑ $12,400</span>
          </div>
          <svg viewBox="0 0 400 80" className="w-full" aria-hidden="true">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,60 C40,60 60,40 80,38 S120,20 160,24 S220,10 260,14 S320,30 360,18 L400,12 L400,80 L0,80Z" fill="url(#chartGrad)" />
            <path d="M0,60 C40,60 60,40 80,38 S120,20 160,24 S220,10 260,14 S320,30 360,18 L400,12" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
            {[[0,60],[80,38],[160,24],[260,14],[360,18],[400,12]].map(([x,y]) => (
              <circle key={x} cx={x} cy={y} r="3" fill="#34d399" />
            ))}
          </svg>
        </div>

        {/* Recent transactions */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Recent Transactions</span>
            <span className="text-xs text-emerald-400 cursor-default">View all →</span>
          </div>
          <div className="space-y-2">
            {txns.map((t) => (
              <div key={t.name} className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/5 px-4 py-2.5">
                <div className="flex items-center gap-3">
                  <span className="text-base">{t.country}</span>
                  <div>
                    <div className="text-xs font-medium text-white">{t.name}</div>
                    <div className="text-xs text-slate-600">{t.time}</div>
                  </div>
                </div>
                <span className={cn("text-xs font-semibold tabular-nums", t.color)}>{t.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Trusted by ─── */
function TrustedBy() {
  const logos = ["Shopify", "Stripe Atlas", "Wise", "Payoneer", "Deel", "Mercury", "Brex", "Revolut"];
  return (
    <section className="py-14 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-600 mb-8">
        Trusted alongside the world's leading payment tools
      </p>
      <div className="relative flex overflow-hidden">
        <div className="flex min-w-full shrink-0 animate-marquee gap-12 pr-12">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="whitespace-nowrap font-display text-sm font-bold text-slate-600 hover:text-slate-400 transition-colors cursor-default">
              {l}
            </span>
          ))}
        </div>
        <div aria-hidden className="flex min-w-full shrink-0 animate-marquee gap-12 pr-12">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="whitespace-nowrap font-display text-sm font-bold text-slate-600">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─── */
const features = [
  {
    title: "Instant Global Transfers",
    desc: "Send money to 190+ countries in seconds — no SWIFT delays, no surprise fees. Recipients get local currency delivered directly to their bank account.",
    icon: (
      <path d="M3 12h18M3 12l4-4m-4 4 4 4M21 12l-4-4m4 4-4 4" />
    ),
    accent: "from-emerald-400/20 to-emerald-400/5 text-emerald-300",
  },
  {
    title: "Multi-Currency Accounts",
    desc: "Hold, convert, and spend in 47 currencies from one account. Lock in exchange rates before they move against you with our smart rate alerts.",
    icon: (
      <>
        <circle cx="8" cy="8" r="6" />
        <circle cx="16" cy="16" r="6" />
      </>
    ),
    accent: "from-teal-400/20 to-teal-400/5 text-teal-300",
  },
  {
    title: "Smart Invoice & Payment Links",
    desc: "Create professional invoices in seconds, share a payment link, and get paid from anywhere — credit card, bank transfer, or crypto, all in one flow.",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10M7 12h7M7 16h5" />
      </>
    ),
    accent: "from-cyan-400/20 to-cyan-400/5 text-cyan-300",
  },
  {
    title: "Virtual & Physical Cards",
    desc: "Issue unlimited virtual cards for your team or suppliers. Freeze, unfreeze, and set spending limits per card — real-time control of every dollar.",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
    accent: "from-sky-400/20 to-sky-400/5 text-sky-300",
  },
  {
    title: "Crypto-to-Fiat Bridge",
    desc: "Accept Bitcoin, ETH, USDC, and 20+ tokens. Convert to local currency automatically or hold in crypto — your choice, zero custody risk.",
    icon: (
      <>
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44L6.5 7" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44L17.5 7" />
      </>
    ),
    accent: "from-amber-400/20 to-amber-400/5 text-amber-300",
  },
  {
    title: "Revenue Splitting & Payouts",
    desc: "Automate complex split payouts to partners, affiliates, or suppliers with configurable rules. Reconciliation happens in real time — no spreadsheets.",
    icon: (
      <>
        <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z" />
        <path d="M16 3v5h5" />
        <path d="m9 13 2 2 4-4" />
      </>
    ),
    accent: "from-fuchsia-400/20 to-fuchsia-400/5 text-fuchsia-300",
  },
];

function Features() {
  return (
    <section id="pay-features" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-600/8 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <PayHeading
            badge="Features"
            title="Everything you need to"
            highlight="get paid globally"
            subtitle="A complete payments operating system — built for the self-employed, entrepreneurs, and scaling businesses."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <article className="glass tilt-card group h-full rounded-3xl p-7 transition-all duration-500 hover:border-white/15">
                <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br", f.accent)}>
                  <svg className="h-5.5 w-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How it works ─── */
const steps = [
  {
    n: "01",
    title: "Create your account",
    desc: "Sign up in under 2 minutes. Verify your identity with a photo ID — no branch visit, no waiting.",
    accent: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
  },
  {
    n: "02",
    title: "Add funds or connect",
    desc: "Link your existing bank, deposit via card, crypto, or bank transfer. Funds appear instantly.",
    accent: "text-teal-400",
    border: "border-teal-500/30",
    bg: "bg-teal-500/10",
  },
  {
    n: "03",
    title: "Send, receive & grow",
    desc: "Pay suppliers, invoice clients, issue cards, and watch money flow — globally, in real time.",
    accent: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
  },
];

function HowItWorks() {
  return (
    <section id="pay-how" className="relative py-24 sm:py-32 border-y border-white/5 bg-white/[0.015]">
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-teal-600/8 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <PayHeading
            badge="How it works"
            title="Up and running in"
            highlight="under 5 minutes"
            subtitle="No complex integrations. No wait times. Start accepting payments globally today."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connector line */}
          <div aria-hidden className="absolute top-10 left-1/6 right-1/6 hidden h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 md:block" />

          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 130}>
              <div className="relative glass rounded-3xl p-8 text-center">
                <div className={cn("mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border text-2xl font-display font-bold", s.bg, s.border, s.accent)}>
                  {s.n}
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Security ─── */
const securityItems = [
  { title: "PCI DSS Level 1", desc: "The highest level of payment card industry compliance — the same standard used by Visa and Mastercard." },
  { title: "256-bit AES Encryption", desc: "Every transaction, every token, every stored credential is encrypted end-to-end at rest and in transit." },
  { title: "2FA & Biometrics", desc: "Multi-factor authentication with hardware key support and biometric login on mobile." },
  { title: "AI Fraud Detection", desc: "Our models analyze 200+ signals per transaction in milliseconds to stop fraud before it happens." },
  { title: "GDPR & SOC 2 Type II", desc: "Fully compliant with EU data regulations and independently audited for security, availability, and confidentiality." },
  { title: "Instant Account Freeze", desc: "Suspect something? Freeze your account or any card in one tap — re-enable just as fast." },
];

function Security() {
  return (
    <section id="pay-security" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-emerald-600/8 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <Badge>Security</Badge>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Bank-level security.{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Zero compromises.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Infinity Pay is built from the ground up for financial-grade trust. Your money and your customers' data are protected by multiple layers of independent security controls.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {securityItems.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <div className="mt-0.5 text-xs leading-relaxed text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Visual */}
          <Reveal delay={160}>
            <div className="relative">
              <div aria-hidden className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-600/20 via-teal-600/10 to-cyan-600/20 blur-2xl" />
              <div className="glass relative overflow-hidden rounded-3xl p-8">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/15">
                      <svg className="h-12 w-12 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M12 2 4 5.5V11c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5.5L12 2z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div aria-hidden className="absolute inset-0 rounded-full border border-emerald-500/30 animate-ping opacity-30" />
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "PCI DSS Level 1", status: "Active", color: "text-emerald-400 bg-emerald-500/10" },
                    { label: "Fraud scan", status: "Running", color: "text-teal-400 bg-teal-500/10" },
                    { label: "Encryption", status: "AES-256", color: "text-cyan-400 bg-cyan-500/10" },
                    { label: "Last audit", status: "Sept 2025", color: "text-slate-400 bg-white/5" },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3">
                      <span className="text-sm text-slate-300">{r.label}</span>
                      <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold", r.color)}>{r.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
const payPlans = [
  {
    name: "Starter",
    tagline: "For freelancers & the self-employed",
    monthly: 0,
    yearly: 0,
    cta: "Open free account",
    features: [
      "1 account · up to $5,000 / month",
      "5 free international transfers",
      "Payment links & QR codes",
      "1 virtual card",
      "Standard exchange rates",
      "Email support",
    ],
    featured: false,
    accentCta: false,
  },
  {
    name: "Business",
    tagline: "For growing brands & agencies",
    monthly: 29,
    yearly: 23,
    cta: "Start 14-day free trial",
    features: [
      "Unlimited transfers (0.5% fee above $10K)",
      "Multi-currency accounts (47 currencies)",
      "Unlimited virtual & 2 physical cards",
      "Smart invoicing & payment links",
      "Revenue splitting & auto-payouts",
      "Priority support 24/7",
    ],
    featured: true,
    accentCta: true,
  },
  {
    name: "Enterprise",
    tagline: "For companies moving serious volume",
    monthly: 99,
    yearly: 79,
    cta: "Talk to sales",
    features: [
      "Everything in Business",
      "Custom FX rates & volume pricing",
      "Crypto-to-fiat bridge",
      "White-label payment pages",
      "API & webhooks (full access)",
      "Dedicated account manager",
    ],
    featured: false,
    accentCta: false,
  },
];

function PayPricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pay-pricing" className="relative py-24 sm:py-32 border-y border-white/5 bg-white/[0.015]">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-teal-600/8 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <PayHeading
            badge="Pricing"
            title="Transparent pricing that"
            highlight="works for you"
            subtitle="Start free and upgrade only when you need it. No hidden fees, ever."
          />
        </Reveal>

        {/* Toggle */}
        <Reveal delay={80}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium transition-colors", !yearly ? "text-white" : "text-slate-500")}>Monthly</span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              aria-label="Toggle yearly billing"
              onClick={() => setYearly(!yearly)}
              className="relative h-8 w-14 rounded-full bg-ink-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <span className={cn("absolute top-1 left-1 h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 shadow-lg transition-transform duration-300", yearly && "translate-x-6")} />
            </button>
            <span className={cn("flex items-center gap-2 text-sm font-medium transition-colors", yearly ? "text-white" : "text-slate-500")}>
              Yearly
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">Save 20%</span>
            </span>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {payPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <article className={cn("relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500", plan.featured ? "ring-1 ring-emerald-500/40 bg-gradient-to-b from-emerald-600/10 via-ink-900 to-ink-900 shadow-2xl shadow-emerald-600/10 lg:-my-4 lg:py-12" : "glass tilt-card")}>
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/30">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-white">${yearly ? plan.yearly : plan.monthly}</span>
                  <span className="text-sm text-slate-500">/ month</span>
                </div>
                {plan.monthly > 0 && (
                  <p className="mt-1.5 text-xs text-slate-500">{yearly ? "Billed annually" : "Billed monthly"} · 14-day free trial</p>
                )}

                <a href="#pay-cta" className={cn("mt-7 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98]", plan.accentCta ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-600/25 hover:brightness-110" : "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10")}>
                  {plan.cta}
                </a>

                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <svg className={cn("mt-0.5 h-4.5 w-4.5 shrink-0", plan.featured ? "text-emerald-300" : "text-emerald-500")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
            All plans include FDIC-insured balances, real-time notifications, and free migration support.{" "}
            <a href="#pay-faq" className="font-medium text-emerald-400 underline-offset-4 transition hover:underline">Read the FAQ →</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const faqs = [
  { q: "Is my money safe with Infinity Pay?", a: "Yes. Balances are held in FDIC-insured accounts (up to $250,000) at our partner banks. We never invest customer deposits in volatile assets. Every transaction is covered by PCI DSS Level 1 compliance." },
  { q: "How fast are international transfers?", a: "Most transfers arrive within seconds to a few hours, depending on the destination country. We support SEPA, SWIFT, and our own network rails. Priority transfers arrive in under 60 seconds to supported corridors." },
  { q: "What currencies do you support?", a: "We support 47 currencies for holding and conversion, and payments to 190+ countries. Popular pairs (USD, EUR, GBP, CAD, AUD, JPY) convert in real time with mid-market rates plus a transparent margin." },
  { q: "Can I use Infinity Pay with Monwe Infinity?", a: "Absolutely — Infinity Pay is deeply integrated into the Monwe Infinity platform. Once connected, revenue from your storefronts flows directly into your Pay account for instant access." },
  { q: "Are there fees for receiving payments?", a: "On the Starter plan, incoming payments are free up to $5,000/month. Business and Enterprise plans have no incoming payment cap. Outgoing transfers incur a 0.5% fee above plan thresholds, always shown upfront." },
  { q: "Can I issue cards for my team?", a: "Yes. Business and Enterprise plans include unlimited virtual cards and physical Visa debit cards. Set spending limits, categories, and auto-expiry rules per card — ideal for team expenses and supplier payments." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="pay-faq" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-600/6 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <PayHeading badge="FAQ" title="Questions?" highlight="We've got answers." />
        </Reveal>
        <div className="mt-12 divide-y divide-white/8">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 40}>
              <div>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                >
                  <span className="text-base font-semibold text-white">{f.q}</span>
                  <svg className={cn("mt-0.5 h-5 w-5 shrink-0 text-emerald-400 transition-transform duration-300", open === i && "rotate-45")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div className={cn("overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", open === i ? "max-h-64 pb-5" : "max-h-0")}>
                  <p className="text-sm leading-relaxed text-slate-400">{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function PayCta() {
  return (
    <section id="pay-cta" className="relative py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-600/12 blur-[160px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Reveal>
          <Badge>Get started today</Badge>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            The world's money.<br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              In your hands.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Join 12,400+ businesses using Infinity Pay to move money faster, cheaper, and smarter — no banks required.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#pay-pricing" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-600/30 transition-all hover:brightness-110 active:scale-[0.98] sm:w-auto">
              Open free account
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <a href="#pay-features" className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10 active:scale-[0.98] sm:w-auto">
              Explore all features
            </a>
          </div>
          <p className="mt-5 text-xs text-slate-600">No card required · Set up in 2 minutes · Cancel anytime</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function PayFooter({ onBack }: { onBack: () => void }) {
  return (
    <footer className="border-t border-white/5 bg-ink-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 48 24" fill="none" className="h-5 w-10" aria-hidden>
              <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6S6 15.31 6 12z" fill="url(#pf)" />
              <path d="M30 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" fill="url(#pf)" />
              <path d="M18 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" fill="url(#pf)" opacity=".6" />
              <defs>
                <linearGradient id="pf" x1="0" y1="0" x2="48" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34d399" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-display text-sm font-bold text-white">
              Monwe<span className="text-emerald-400"> Pay</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            {["Privacy", "Terms", "Security", "Fees", "API Docs"].map((l) => (
              <a key={l} href="#" className="transition hover:text-slate-300">{l}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-xs text-slate-600">
            <button onClick={onBack} className="transition hover:text-slate-400">
              ← monweinfinity.com
            </button>
            <span>·</span>
            <span>© 2025 Monwe Infinity LLC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page root ─── */
export default function InfinityPay({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = "Infinity Pay — Global Payments by Monwe Infinity";
    return () => {
      document.title = "Monwe Infinity";
    };
  }, []);

  return (
    <div className="min-h-screen bg-ink-950 text-slate-200">
      <a href="#pay-top" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-emerald-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white">
        Skip to content
      </a>
      <PayNavbar onBack={onBack} />
      <main>
        <PayHero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Security />
        <PayPricing />
        <FAQ />
        <PayCta />
      </main>
      <PayFooter onBack={onBack} />
    </div>
  );
}
