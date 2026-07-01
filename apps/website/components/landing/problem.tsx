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
    <section>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px] lg:gap-10 xl:gap-14">
        <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-14">
          <div className="grid grid-cols-2 gap-1 xl:grid-cols-1 xl:grid-rows-4 xl:gap-0">
            {images.map((id) => (
              <EditorialImage
                key={id}
                id={id}
                aspect="portrait"
                className="min-h-[200px] lg:min-h-[240px]"
                sizes="(max-width: 1024px) 50vw, 320px"
              />
            ))}
          </div>

          <div className="py-12 sm:py-20 lg:py-32">
            <FadeIn>
              <p className="text-editorial-headline max-w-3xl leading-snug">
                {CLUB_INTRO}
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-20">
              <EditorialKicker>Honesty</EditorialKicker>
              <h2 className="text-editorial-section mt-6">{PROBLEM_HEADLINE}</h2>
              <p className="mt-4 text-xl">{PROBLEM_SUBHEAD}</p>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-16 max-w-2xl space-y-4">
              {HONESTY_MANIFESTO.map((line) => (
                <p
                  key={line}
                  className={
                    line.startsWith("SuggaPlay")
                      ? "pt-4 text-lg font-medium"
                      : "text-lg leading-relaxed"
                  }
                >
                  {line}
                </p>
              ))}
            </FadeIn>
          </div>
        </div>

        <div aria-hidden className="hidden lg:block" />
      </div>
    </section>
  );
}
