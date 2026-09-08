import Reveal from "./Reveal";
import { SectionBadge } from "./ui";

const facts = [
  { label: "Date de création", value: "20 avril 2026" },
  { label: "État de constitution", value: "New Mexico, USA" },
  { label: "Numéro de dépôt", value: "3213688" },
  { label: "Classification IRS", value: "LLC mono-membre" },
  { label: "EIN", value: "38-4396094 ¹" },
  { label: "Siège social US", value: "Albuquerque, NM 87110" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-glow-fuchsia/8 blur-[160px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left — text */}
          <Reveal>
            <SectionBadge>À propos</SectionBadge>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Une LLC américaine,{" "}
              <span className="text-gradient">née pour l'innovation globale</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              <strong className="text-white">MonWe Infinity LLC</strong> est une société à
              responsabilité limitée constituée dans l'État du Nouveau-Mexique (États-Unis) le
              20 avril 2026, pilotée depuis Bingerville, Abidjan (Côte d'Ivoire) par sa fondatrice et
              gérante unique.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Notre mission : développer des produits technologiques à fort impact culturel et
              commercial, pensés pour l'Afrique et le monde. Notre premier produit phare,{" "}
              <strong className="text-brand-300">ASILI — Noms d'Afrique</strong>, en est la
              démonstration directe.
            </p>

            {/* Founder card */}
            <div className="mt-10 glass rounded-2xl p-6 flex items-center gap-5">
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white"
                style={{ background: "linear-gradient(135deg, #6366f1, #e879f9)" }}
                aria-hidden="true"
              >
                YI
              </span>
              <div>
                <div className="font-display text-lg font-bold text-white">Yessiha Ilboudo</div>
                <div className="text-sm text-brand-300">Fondatrice &amp; Gérante — MonWe Infinity LLC</div>
                <div className="mt-1 text-xs text-slate-500">
                  Bingerville, Abidjan, Côte d'Ivoire
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — facts grid */}
          <Reveal delay={180}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className="glass tilt-card rounded-2xl px-5 py-4"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {f.label}
                  </div>
                  <div className="mt-1.5 font-display text-base font-semibold text-white">
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-slate-600">
              ¹ L'EIN est une information fiscale confidentielle, affichée ici à titre d'information
              générale de la société — non destinée à la diffusion publique.
            </p>

            {/* Legal mention */}
            <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.025] px-5 py-4 text-xs leading-relaxed text-slate-500">
              MonWe Infinity LLC · société à responsabilité limitée immatriculée dans l'État du
              Nouveau-Mexique (États-Unis), n° de dépôt 3213688 · Agent enregistré : Registered
              Agents Inc, 1209 Mountain Road PL NE, STE R, Albuquerque, NM 87110
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
