import { FadeIn } from "@/components/motion/fade-in";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { EditorialKicker } from "@/components/editorial/editorial-section";
import {
  CLUB_INTRO,
  HONESTY_MANIFESTO,
  PROBLEM_HEADLINE,
  PROBLEM_SUBHEAD,
} from "@/lib/constants";
import { sectionAccentImages } from "@/lib/editorial-images";

export function Problem() {
  const images = sectionAccentImages(14, 4);

  return (
    <section className="border-b border-border">
      <div className="grid lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-1 lg:grid-cols-1 lg:grid-rows-4">
          {images.map((id) => (
            <EditorialImage
              key={id}
              id={id}
              aspect="portrait"
              className="min-h-[200px] lg:min-h-[240px]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          ))}
        </div>

        <div className="px-6 py-24 sm:py-32 lg:px-10 xl:px-14">
          <FadeIn>
            <p className="text-editorial-headline max-w-3xl leading-snug">
              {CLUB_INTRO}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-20">
            <EditorialKicker>Honesty</EditorialKicker>
            <h2 className="text-editorial-section mt-6">{PROBLEM_HEADLINE}</h2>
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
      </div>
    </section>
  );
}
