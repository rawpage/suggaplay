import { FadeIn } from "@/components/motion/fade-in";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { EditorialKicker } from "@/components/editorial/editorial-section";
import {
  INTENTIONS_CHOOSE,
  INTENTIONS_HEADLINE,
  INTENTIONS_INTRO,
  RELATIONSHIP_PREFERENCES,
  SOLUTION_BODY,
  SOLUTION_HEADLINE,
} from "@/lib/constants";
import { sectionAccentImages } from "@/lib/editorial-images";

export function Intentions() {
  const images = sectionAccentImages(8, 6);

  return (
    <section id="intentions" className="bg-white">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px] lg:gap-10 xl:gap-14">
        <div className="py-16 sm:py-24 lg:py-32">
          <FadeIn>
            <EditorialKicker>Flexible preferences</EditorialKicker>
            <h2 className="text-editorial-section mt-6 max-w-2xl">
              {INTENTIONS_HEADLINE}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed">
              {INTENTIONS_INTRO}
            </p>
            <p className="text-editorial-kicker mt-6">{INTENTIONS_CHOOSE}</p>
          </FadeIn>

          <FadeIn delay={0.1} className="@container mt-16">
            <ul className="grid grid-cols-1 gap-px @md:grid-cols-2 @3xl:grid-cols-3">
              {RELATIONSHIP_PREFERENCES.map((pref) => (
                <li
                  key={pref.label}
                  className="flex min-w-0 items-center gap-4 bg-background px-5 py-5 transition-colors hover:bg-neutral-50"
                >
                  <span className="shrink-0 text-xl" aria-hidden="true">
                    {pref.icon}
                  </span>
                  <span className="min-w-0 break-words text-sm font-medium leading-snug">
                    {pref.label}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-24 pt-16">
            <EditorialKicker className="text-brand">{SOLUTION_HEADLINE}</EditorialKicker>
            <p className="text-editorial-headline mt-6 max-w-2xl">{SOLUTION_BODY}</p>
          </FadeIn>
        </div>

        <aside className="hidden lg:flex lg:flex-col lg:pt-32">
          {images.map((id) => (
            <EditorialImage
              key={id}
              id={id}
              aspect="portrait"
              className="flex-1"
              sizes="320px"
            />
          ))}
        </aside>
      </div>
    </section>
  );
}
