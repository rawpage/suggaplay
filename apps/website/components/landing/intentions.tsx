import { FadeIn } from "@/components/motion/fade-in";
import {
  INTENTIONS_CHOOSE,
  INTENTIONS_HEADLINE,
  INTENTIONS_INTRO,
  RELATIONSHIP_PREFERENCES,
  SOLUTION_BODY,
  SOLUTION_HEADLINE,
} from "@/lib/constants";

export function Intentions() {
  return (
    <section id="intentions" className="bg-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <p className="text-editorial-label text-neutral-500 mb-6">
            Flexible preferences
          </p>
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {INTENTIONS_HEADLINE}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-300">
            {INTENTIONS_INTRO}
          </p>
          <p className="text-editorial-label mt-6 text-neutral-500">
            {INTENTIONS_CHOOSE}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-16">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {RELATIONSHIP_PREFERENCES.map((pref) => (
              <li
                key={pref.label}
                className="flex items-center gap-4 border border-neutral-800 px-5 py-5 transition-colors hover:border-neutral-600"
              >
                <span className="text-xl" aria-hidden="true">
                  {pref.icon}
                </span>
                <span className="text-sm font-medium">{pref.label}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-24 border-t border-neutral-800 pt-16">
          <p className="text-editorial-label text-brand mb-4">{SOLUTION_HEADLINE}</p>
          <p className="max-w-2xl text-xl leading-relaxed text-neutral-300 sm:text-2xl">
            {SOLUTION_BODY}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
