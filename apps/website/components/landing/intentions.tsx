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
    <section id="intentions" className="border-b border-border bg-black text-white">
      <div className="grid lg:grid-cols-[1fr_340px]">
        <div className="px-6 py-24 sm:py-32 lg:px-10 xl:px-14">
          <FadeIn>
            <EditorialKicker className="text-neutral-500">
              Flexible preferences
            </EditorialKicker>
            <h2 className="text-editorial-section mt-6 max-w-2xl text-white">
              {INTENTIONS_HEADLINE}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-300">
              {INTENTIONS_INTRO}
            </p>
            <p className="text-editorial-kicker mt-6 text-neutral-500">
              {INTENTIONS_CHOOSE}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-16">
            <ul className="grid gap-px bg-neutral-800 sm:grid-cols-2 lg:grid-cols-3">
              {RELATIONSHIP_PREFERENCES.map((pref) => (
                <li
                  key={pref.label}
                  className="flex items-center gap-4 bg-black px-5 py-5 transition-colors hover:bg-neutral-950"
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
            <EditorialKicker className="text-brand">{SOLUTION_HEADLINE}</EditorialKicker>
            <p className="text-editorial-headline mt-6 max-w-2xl text-neutral-200">
              {SOLUTION_BODY}
            </p>
          </FadeIn>
        </div>

        <aside className="hidden border-l border-neutral-800 lg:grid lg:grid-rows-3">
          {images.map((id) => (
            <EditorialImage
              key={id}
              id={id}
              aspect="auto"
              className="min-h-[220px] border-b border-neutral-800 last:border-b-0"
              sizes="340px"
            />
          ))}
        </aside>
      </div>
    </section>
  );
}
