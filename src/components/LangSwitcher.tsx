import { useTranslation } from "react-i18next";
import { cn } from "../utils/cn";

export default function LangSwitcher({ className }: { className?: string }) {
  const { i18n } = useTranslation();
  const langs = [
    { code: "fr", flag: "🇫🇷", label: "FR" },
    { code: "en", flag: "🇬🇧", label: "EN" },
  ];

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1",
        className
      )}
      role="group"
      aria-label="Language switcher"
    >
      {langs.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => i18n.changeLanguage(l.code)}
          aria-pressed={i18n.language === l.code}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200",
            i18n.language === l.code
              ? "bg-gradient-to-r from-brand-600 to-glow-violet text-white shadow"
              : "text-slate-400 hover:text-white"
          )}
        >
          <span aria-hidden="true">{l.flag}</span>
          {l.label}
        </button>
      ))}
    </div>
  );
}
