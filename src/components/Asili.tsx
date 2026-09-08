import Reveal from "./Reveal";
import { PrimaryButton, SectionBadge } from "./ui";

const pillars = [
  {
    title: "Bibliothèque de noms africains",
    desc: "Des milliers de noms issus de toutes les cultures et langues d'Afrique, avec leurs significations, origines et prononciation.",
    icon: (
      <>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </>
    ),
    accent: "from-amber-400/20 to-amber-400/5 text-amber-300",
  },
  {
    title: "Recommandations IA",
    desc: "Un moteur d'intelligence artificielle suggère des noms personnalisés selon vos valeurs, votre culture et vos préférences familiales.",
    icon: (
      <>
        <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83L16 10h2a4 4 0 0 1 0 8h-1v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2H6A4 4 0 0 1 6 8h2l1.17-1.17A4 4 0 0 1 8 6a4 4 0 0 1 4-4z" />
      </>
    ),
    accent: "from-brand-500/20 to-brand-500/5 text-brand-300",
  },
  {
    title: "Numérologie africaine",
    desc: "Découvrez la vibration numérique de chaque prénom selon les traditions ancestrales africaines — un outil unique au monde.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    accent: "from-glow-cyan/20 to-glow-cyan/5 text-cyan-300",
  },
  {
    title: "Interprétation des rêves",
    desc: "Une guidance inspirée des traditions ancestrales africaines pour décrypter les rêves et les signes liés au choix du prénom.",
    icon: (
      <>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </>
    ),
    accent: "from-glow-fuchsia/20 to-glow-fuchsia/5 text-fuchsia-300",
  },
];

export default function Asili() {
  return (
    <section id="asili" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-glow-fuchsia/5 via-brand-600/5 to-transparent"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionBadge>Produit phare</SectionBadge>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            ASILI —{" "}
            <span className="text-gradient">Noms d'Afrique</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            La première application mobile dédiée aux noms et au patrimoine culturel africain.
            Recherche de prénoms, recommandations IA, numérologie africaine et guidance ancestrale —
            tout en un seul endroit.
          </p>
        </Reveal>

        {/* Feature pillars */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="glass tilt-card group h-full rounded-3xl p-7">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {p.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA band */}
        <Reveal delay={300}>
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <PrimaryButton href="#contact" className="w-full sm:w-auto px-8 py-4 text-base">
              Rejoindre la liste d'attente
            </PrimaryButton>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white w-full sm:w-auto text-base"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              En savoir plus
            </a>
          </div>
          <p className="mt-5 text-center text-xs text-slate-600">
            Bientôt disponible · iOS &amp; Android · Un produit MonWe Infinity LLC
          </p>
        </Reveal>
      </div>
    </section>
  );
}
