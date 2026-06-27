import { FadeIn } from "@/components/motion/fade-in";
import {
  CLUB_INTRO,
  HONESTY_MANIFESTO,
  PROBLEM_HEADLINE,
  PROBLEM_SUBHEAD,
} from "@/lib/constants";

export function Problem() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <p className="max-w-3xl text-xl leading-relaxed sm:text-2xl lg:text-3xl lg:leading-snug">
            {CLUB_INTRO}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-20">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {PROBLEM_HEADLINE}
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">{PROBLEM_SUBHEAD}</p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16 max-w-2xl space-y-4">
          {HONESTY_MANIFESTO.map((line) => (
            <p
              key={line}
              className={
                line.startsWith("SuggaPlay")
                  ? "pt-4 text-lg font-medium"
                  : "text-lg leading-relaxed text-muted-foreground"
              }
            >
              {line}
            </p>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
